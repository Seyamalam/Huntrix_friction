# How I hardened my multi-agent AI support copilot

Source: https://dev.to/eelcolos/how-i-hardened-my-multi-agent-ai-support-copilot-15p7

The first post in this series was about the design. This one is about what happened when the first real tickets hit the wiring, and about the hardening work that followed once those runs exposed the weak spots.

The good news is that the architecture mostly held up. The orchestrator-worker model was still the right shape. Parallel evidence gathering still made sense. Shared incident context still made sense. Human approval still made sense.

What broke was the boundary layer: what actually executes a skill, how incomplete configuration should fail, what a spawned sub-agent can really invoke, which tools are scoped to the parent session instead of the child, how incident state should persist, and how much of the system could be tested like normal software.

The examples here are specific to Claude Code, but the class of problem is broader than one tool. In multi-agent systems, runtime semantics matter more than diagrams.

The first live test was against a real Zendesk ticket from a customer tenant: "The request is blocked" during provisioning admin consent. The Management Agent ran. Sub-agents were dispatched. Evidence came back.

But something was wrong: no az commands had actually run. No APIs were called. The "evidence" was the agents describing what the skills would do if they were run: accurate, thoughtful, and completely useless.

The root cause took a minute to understand. I had treated the skill files as if they were runnable workers. They weren't.

SKILL.md files in Claude Code are execution instructions for an agent that already has the right tools. The frontmatter declares allowed-tools: Bash(az *), but that only scopes permissions when the skill is directly invoked as a user command. In this repo, I call the task-spawned executors evidence agents. The .claude/agents/*.md files define which one runs, what tools it gets, and that it should execute the skill's commands rather than just read the skill file. When the Management Agent does TaskCreate -> "run the SCIM skill", it spawns one of those evidence agents. That evidence agent needs its own .md definition that:

We had written the instructions, but not the workers. The .claude/agents/ directory was mostly empty. There was nothing for TaskCreate to dispatch to by name.

The fix was straightforward once the problem was clear: create .claude/agents/apm.md, crm.md, scim.md, b2c.md, alm.md. Each with:

The takeaway: SKILL.md is documentation. An agent definition is what actually runs. Don't confuse the map for the territory.

The second live test exposed a different problem. All four evidence agents returned:

Same from CRM, provisioning, and identity config. The Management Agent continued, the Synthesis Agent synthesised from nothing. We got a hypothesis based purely on domain pattern-matching, with zero real telemetry. And we'd burned a full round of context tokens to get there.

The worst part was not that evidence was missing. It was that the output still looked plausible. A clean failure would have been better than a confident-looking answer built on gaps.

The design intent was different. The --dry-run flag existed for demos and training: an opt-in mode. But in practice, any time config was incomplete, the system silently fell back to dry-run instead of reporting what was missing.

The fix: a validate-expertise skill that runs at session start, checks all required fields across the five domain YAML files, and reports what's missing:

If any required field is empty → print the fill table, log to audit, stop. No evidence agents dispatch.

We also annotated the YAML files directly:

The meta-lesson: dry-run mode should be opt-in and explicit, not the default fallback when setup is incomplete. If the system silently degrades, you don't know it's wrong until you compare the output to reality.

This one was embarrassing.

The Management Agent's Step 0 contained:

The Onboarding flow contained:

Both of these were silently not working. The agent treated them as skill tool calls, got "skill not found" errors, and then manually read the YAML files anyway, which produced a plausible output that masked the actual failure.

Skills in Claude Code are not registered slash commands. They are markdown files. The correct invocation is:

Every place in agent instructions that used /skill-name syntax needed updating to explicit file-read instructions. The prime skill had the right pattern all along: "Load current context: execute the prime skill by reading .claude/skills/prime/SKILL.md". We just hadn't applied it consistently.

The fix (pr-13) also introduced an Onboarding Agent, a dedicated agent that runs az/gh auto-discovery commands for each domain, presents the discovered values interactively, and writes confirmed non-secret values into the YAML files. After it runs, it re-validates. The support engineer goes from "11 empty required fields" to "ready to triage" in one guided session.

This one came in two layers. The CRM skill was the first fully working skill. It uses an MCP server (CRM-* tools) that wraps an internal customer-data API. The API key behind it had write access across the CRM surface, so I intentionally exposed only the read endpoints through the MCP layer. That kept the agent's direct permissions narrow.

The deeper boundary showed up when we wired that same capability into a TaskCreate -> "CRM Evidence Agent" dispatch. The sub-agent started and then hit AADSTS65001:

The MCP tools (CRM-get_company, CRM-lookup_user_by_email, etc.) are session-scoped to the Management Agent's Claude Code session. When a sub-agent is spawned via task, it starts with a clean tool set; MCP tools don't carry over. The lesson was not just "use read-only endpoints" but also "don't assume the child session has the parent's tools." The sub-agent fell back to az account get-access-token --resource {ResourceId}, which fails because that service principal hasn't been granted consent for interactive CLI flows.

The workaround (and current design): CRM runs as a direct call in the Management Agent session, not as a TaskCreate dispatch. The Management Agent calls CRM-lookup_user_by_email directly before dispatching other evidence agents. Identity resolution happens first, synchronously, in the parent session.

Worth separating two things here that are easy to conflate. The direct-call pattern is a workaround for the MCP tool-scope limitation. But it may also be the right shape regardless. Resolving identity synchronously in the parent session, before dispatching parallel workers, is a reasonable sequencing decision on its own terms: it keeps identity resolution out of the sub-agents, surfaces auth failures early, and means workers can assume a resolved identity rather than having to negotiate it. When MCP tool forwarding lands, the question isn't automatically "switch back to the dispatch model." It's "is synchronous identity resolution still the better shape?" The workaround and the correct architecture might happen to be the same thing.

The decisions.md entry captures the distinction:

Current state: MCP tool forwarding in task: Not supported.
When to re-evaluate: New Claude Code version / MCP spec update.
When available: CRM can be dispatched as TaskCreate → "CRM Evidence Agent" with CRM-* tools. Remove direct-call pattern from management-agent.md.

Document the current workaround, document the future path, document the trigger for re-evaluation. That's the pattern for any runtime constraint you're working around rather than solving.

One of the first hardening lessons was that I had been mentally treating authentication as one thing. It wasn't.

In the research phase, the working assumption was simple: if az login works in the parent session, the sub-agents should be able to use the same credentials. Real runs made that assumption look shaky. We saw cases where the APM evidence path returned a credential gap even though the parent session was already authenticated.

That does not automatically mean the agent logic was wrong. It means the runtime boundary was more important than the prompt. A child session is not the same thing as the parent. A local CLI flow is not the same thing as a hosted workload identity. "Authenticated on my machine" is not a production auth strategy.

For local development, we found one concrete pattern that was reliable: user-level environment variables were visible to new PowerShell sessions, while process-level $env: values were not.

That solved a local dev problem. It did not solve the production problem.

The broader lesson was that auth should be treated as part of the architecture, not as bootstrap glue. If the system depends on interactive CLI auth in production, it is not productionized yet.

The production direction is a workload identity model: managed identity on the host, workload identity federation for cross-tenant scenarios, service principals with explicit RBAC rather than user delegation. How that maps to this system's deployment shape is Part 3 territory. The design implication was already clear in Part 2: auth is an architectural decision, not something you patch in at the prompt layer.

The IncidentContext pattern held up extremely well. It was still the right abstraction: every evidence agent writes into shared incident state, the synthesis layer reads from it, and agents do not talk directly to one another.

But the storage story behind that abstraction had to evolve.

At first, IncidentContext was mostly conceptual. It lived in prompts, in in-memory state, and in repeated task payloads. That was enough to prove the architecture, but it broke down as soon as the system had to resume work, survive interruptions, or preserve a real audit trail.

The first hardening step was to make it a real file. That solved two immediate problems:

But even at that stage, the more general lesson was clear: not all state belongs in the model context, and not all state should stay implicit.

Once incidents become long-lived objects rather than prompt-shaped blobs, you can start talking seriously about revisions, late evidence, replay, and audit continuity.

That's what "layered" means here. An incident has distinct phases: intake state, live evidence under collection, synthesized hypothesis, reviewer annotations, and final audit record. Those phases have different lifecycles and different consumers. Flattening them into a single blob works fine when an incident is simple and completes in one run. It breaks when evidence arrives late, when the system is interrupted mid-investigation, or when you need to replay synthesis without re-running the full evidence pass. The file-backed IncidentContext was the first step toward treating those phases as first-class state, not just named sections of a big prompt.

One of the most useful hardening lessons in the repo was how much of a multi-agent system is actually testable with normal engineering techniques.

At first, it is tempting to think of an agent system as mostly prompt behavior, and therefore mostly manual validation. That does not scale for long.

The breakthrough was to stop thinking about the whole thing as one fuzzy AI system and start testing its surfaces separately.

These do not touch an LLM at all. They just assert that the repo is internally coherent:

That catches a surprising amount of breakage before you ever run a live incident.

Some of the system is not AI behavior. It is just logic.

We wrote tests for things like:

Those are product decisions encoded in code. They deserve ordinary tests.

Because so much of the runtime lives in markdown, agent files and skill files need to be treated as contracts, not prose.

Examples:

If markdown is part of the runtime, markdown deserves tests.

Past incidents became fixtures. We asserted things like:

That turns solved incidents into reusable engineering assets.

There is still a model-shaped layer, especially around synthesis quality, reviewer behavior, and policy gate quality. That is where evals belong.

The repo now includes evals for:

And the tests are not just local rituals anymore. They are wired into CI, so pushes and pull requests get automated results instead of "I tried a few prompts and it seemed okay."

The broader lesson is simple: multi-agent systems are still software. Test the deterministic parts deterministically. Test contracts as contracts. Use golden cases for regressions. Save LLM evals for the surfaces that actually require model judgment.

None of these were "the model reasoned badly" problems. They were places where I had relied on an implicit contract that wasn't actually real:

The fix in each case was the same: make the boundary explicit, codify the workaround, and stop relying on implied behavior.

Once I noticed the pattern, I stopped starting with the prompt and started with the execution chain. This ordered checklist is the most transferable thing in this post, and it applies to any multi-agent system, not just Claude Code.

In practice, I kept asking the same questions in the same order:

That order saved a lot of time. If step 1 is false, better prompting will not help. If step 3 is false, the best model in the world can only produce a sophisticated answer around missing inputs. If step 5 is false, you do not have an agent-quality problem. You have a system-boundary problem.

That was one of the most useful mindset shifts of the whole project. Multi-agent debugging often looks like prompt debugging at first, but a lot of it is closer to distributed systems debugging: execution path, capability scope, state, and contracts.

The first live incidents changed the codebase in very concrete ways.

We added explicit evidence-agent definitions instead of assuming skills were executable on their own. We added validate-expertise so incomplete setup blocked the run instead of quietly degrading into dry-run mode. We introduced an Onboarding Agent so filling the YAML files became a guided flow instead of a scavenger hunt. We rewrote skill invocations in agent instructions to explicit file-read-and-execute patterns. And we documented the CRM direct-call workaround in decisions.md with a re-evaluation trigger instead of pretending the sub-agent path already worked.

That sounds mundane, but that's the point. The system got better not because we discovered a magic prompt, but because we tightened the contracts around how it actually runs.

That was the point where the support copilot stopped being a design exercise and started feeling like software.

One thread from Part 1 that doesn't resurface here: the confidence formula (FinalConf = sigmoid(Support - Conflict) × AgreementMultiplier) and the self-improvement loop through expertise YAML updates. The formula survived and is tested (Lesson 7).

The next post is about productionization: Teams timeouts, async replies, attachments, blob storage, containerization, Azure deployment, and the IT-admin realities that only show up once you leave the notebook.
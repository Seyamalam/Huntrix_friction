# How to Trace Multi-Agent AI Swarms with Jaeger v2

Source: https://www.freecodecamp.org/news/multi-agent-ai-swarms-tracing/

When you run a single AI agent, debugging is straightforward. You read the log, you see what happened.

When you run five agents in a swarm, each spawning its own tool calls and producing its own output, "read the log" stops being a strategy.

I built Claude Forge as an adversarial multi-agent coding framework on top of Claude Code. A typical run spawns a planner, an implementer, a reviewer, and a fixer. They evaluate each other's work and loop back when quality checks fail.

But when something went wrong, I had timestamps and text dumps but no way to see which agent was responsible, how long it actually took, or where the tokens went.

Jaeger fixed that. This article covers setting up Jaeger v2 with Docker, wiring it into a multi-agent system through OpenTelemetry, and what I learned along the way.

Distributed tracing tracks a single operation as it moves through multiple services. A span is one unit of work with a start time, end time, and key-value attributes. Spans nest into parent-child trees. One tree per operation is one trace.

Microservices people already know this pattern: follow an HTTP request from the gateway through auth, the database, and the cache. Same idea works for multi-agent AI. Follow one swarm invocation from the orchestrator through each subagent and its tool calls.

OpenTelemetry (OTel) is the standard. It gives you SDKs for creating spans and shipping them over OTLP. Jaeger receives that data and renders it as a searchable timeline.

Jaeger started at Uber and graduated as a CNCF project in 2019. v1 hit end of life in December 2025. v2 is the current release, built on the OpenTelemetry Collector framework. Single binary: collector, query service, and UI. It speaks OTLP natively on port 4317 (gRPC) and 4318 (HTTP). There's no separate collector needed for local work.

One important difference from v1: configuration moved from CLI flags and environment variables to a YAML file. The old -e SPAN_STORAGE_TYPE=badger env vars are silently ignored in v2. The container starts fine but falls back to in-memory storage. I lost two days of traces before noticing. More on the correct setup below.

Docker installed and running.

Claude Code installed.

Python 3.8+ for the tracing hook.

Claude Forge or another multi-agent system to instrument.

Skip this if you already have Docker. macOS and Windows users can use Docker Desktop. On Debian:

Ubuntu users: replace both linux/debian URLs with linux/ubuntu.

For quick testing with no persistence:

Port 16686 is the UI. Port 4317 is OTLP/gRPC ingestion. Port 4318 is OTLP/HTTP. Remove the container and your traces are gone.

v2 reads configuration from a YAML file, not environment variables. Save this as ~/.local/share/jaeger/config.yaml:

The Jaeger container runs as UID 10001. Docker named volumes default to root ownership. Without fixing permissions first, the container crash-loops with mkdir /badger/key: permission denied.

Pre-create the volume and fix ownership:

Then run Jaeger with the config mounted in:

Verify persistence by running docker restart jaeger and confirming a previously recorded trace is still there. Hit http://localhost:16686 and you should see the UI.

Install it through the Claude Code plugin marketplace:

The install opens a TUI to confirm scope and settings. After reload, commands use the forge: prefix (for example, /forge:pipeline).

You can also clone the repo from GitHub.

From your target project directory, run the install script. For plugin installs:

For clone installs:

The script builds a dedicated venv at ~/.local/share/claude-forge/venv (prefers uv, falls back to python3 -m venv), installs the OpenTelemetry packages, copies the hook into place, merges hook entries into .claude/settings.local.json, and self-tests against the OTLP endpoint.

Pass --no-settings to skip the settings merge, or --uninstall to tear everything down.

Add to your shell init and restart your terminal:

Restart Claude Code, run /pipeline, then check http://localhost:16686 for the claude-forge service.

Here's what the hierarchy looks like for a typical swarm run:

The root span's name comes from the first line of your prompt. Find traces by what you asked for, not by a UUID.

Subagents get an anchor span on start and a result span on completion. The result carries duration, token counts, prompt, and output.

Not all inner tool calls are equally interesting. Write, Edit, MultiEdit, and Bash are mutational: small in number, high signal. They tell you what actually changed. Read, Glob, Grep, and WebFetch are navigation: lots of them, mostly noise.

Tracing captures mutations by default. That middle ground turned out to be the right one. Before this change, you either saw nothing inside subagents or you saw 200+ spans per run.

On session_complete: session.tokens.input, session.tokens.output, session.tokens.total, session.tokens.turns, session.duration_ms, user.prompt (first 2KB).

On subagent_result: agent.description, agent.prompt, agent.output, agent.duration_ms, agent.is_error, agent.tokens.input, agent.tokens.output.

On tool:*: tool.name, tool.input, tool.output, tool.duration_ms, tool.is_error.

Claude Code has lifecycle hooks that fire scripts on specific events. Four matter here:

UserPromptSubmit (create the root span),

PreToolUse (start a span),

PostToolUse (end it with results), and

Stop (finalize the trace). Each hook gets a JSON payload on stdin and runs as a subprocess.

Here's some minimal Python to get a span into Jaeger:

Refresh localhost:16686, pick your service, click "Find Traces."

You need to match each PreToolUse to its PostToolUse. Agent-type tool calls didn't include a tool_use_id in the payload, so I hashed the tool name and input instead. Pre and Post carry identical tool_input, so the hashes line up.

Every hook call is a separate process. No shared memory. So I wrote span context to JSON files on Pre and read them back on Post:

File names get sanitized against path traversal. _safe_name() strips everything outside [A-Za-z0-9._-] and falls back to a SHA1 slug.

I tried 2000ms first and the swarm felt slow. 100ms lost spans on cold TLS connections. 1000ms worked. If Jaeger is down, the swarm keeps running regardless.

Open http://localhost:16686. Pick claude-forge from the service dropdown. Click "Find Traces."

The trace search filters by operation name, tags, and time range. Since session spans take their name from your prompt, searching "login form" pulls up the runs where you asked for one.

The timeline view is where I spend most of my time. Every span is a horizontal bar, nested by parent-child relationships. I can see the planner took 12 seconds, the implementer 45, the reviewer 8. Click any bar to see token counts, prompts, outputs, error status.

Trace comparison puts two runs side by side. This is good for figuring out why one run succeeded and another did not.

One trace per swarm, not per subagent: My first version wiped the root span's state file on every Stop event, so each subagent started a new trace. I changed Stop to mark a timestamp while preserving the root.

Use descriptions, not type names: Subagents all report their type as general-purpose. The description field is where the actual role lives.

Token attribution needs per-agent transcripts: Claude Code writes subagent transcripts to ~/.claude/projects/<project>/<session>/subagents/agent-*.jsonl. Match them via agent-*.meta.json.

Parse boolean env vars explicitly: bool("0") in Python is True. Use an allowlist: {"1", "true", "yes", "on"}.

Without visibility into the process, you're being inefficient with tokens and your time. Multi-agent swarms cost real money on every run. When an agent fails and retries, or when a reviewer rejects work that was close, you're paying for that blind.

Tracing gives you the map. You find out where the failure modes are. You find out which agents burn tokens going nowhere. A 45-second implementer run might have been 10 seconds with a better planner prompt. But you would never know that without seeing the breakdown.

Get observability in early. Jaeger and OpenTelemetry make it cheap to set up. Once you can see where things go wrong you can actually fix them.

Claude Forge tracing is on the main branch.
# I Built a Multi-LLM Debate Engine That Fact-Checks Itself in Real Time

Source: https://dev.to/suat_cad1c7e9617374be97b2/i-built-a-multi-llm-debate-engine-that-fact-checks-itself-in-real-time-3oib

When you ask one LLM a question, you get one answer. When you ask five LLMs the same question, you get five answers and no way to tell which is right.

The naive fix — make them vote, or make them argue, or summarize them all — turns out to make things worse, not better. LLMs are prone to sycophancy; when one confidently states a wrong fact, the others tend to concede rather than push back. Add a summarizer on top and you get a polished, cited-looking answer that is confidently wrong.

I wanted a different shape: a structured debate between agents with different roles, plus a sixth agent whose only job is to fact-check the others mid-debate — before any of them gets a chance to agree with a hallucination.

This post is a walkthrough of what I built, why it works, and where it doesn't. The code is on GitHub under MIT: capitansuat/swarm-debate.

Imagine you ask five LLMs: "Is Acme Corp's recent acquisition of Beta Inc going to close by year end?"

You'll get responses that sound like this, rewritten for brevity:

Model A: "Morgan Stanley's November 28 M&A tracker shows the deal at 85% approval probability..."
Model B: "According to the DOJ Second Request docket DOJ-HSR-2025-4471..."
Model C: "The Wall Street Journal reported on October 17 that both parties received antitrust clearance..."

One of those is real. The other two are fabrications — a made-up Morgan Stanley tracker (dated in the future, which makes it impossible), and a DOJ docket number that doesn't exist.

A human reading the three responses is probably fine. A human running a downstream pipeline that summarizes them into a single answer is not fine, because the fabricated citations carry the same rhetorical weight as the real one. If a second LLM is then asked to synthesize these three, the odds it surfaces the fabrication as a problem are low. It will more likely produce a smoothly paraphrased answer that treats all three sources as equivalent.

While reading about Mixture-of-Experts language models, I came across the shared expert pattern. In an MoE model with routing, each input token selects K experts to process it. But some architectures also include one shared expert that runs on every token, regardless of what the router picks. The shared expert handles general competence; the routed experts handle specialization.

This is a strong structural answer to the debate problem: what if the "shared expert" in a multi-agent system is just... a fact-checker?

The shape would look like this:

The key design choices:

The Validator's system prompt is strict and narrow. Paraphrased:

Run this on the acquisition example and you get something like:

Those FAIL lines get inlined into the next round's prompt. Model A, which fabricated the Morgan Stanley citation, reads its own claim marked [FAIL] and is told not to reuse it. In my test runs, the same model, given the same topic, in the very next round, correctly drops the fabrication and reframes its argument around real data. No fine-tuning, no retraining — just structured feedback during generation.

I ran the same 4-persona × 3-round debate twice on the same topic. The only difference: the first run had a broken Validator (timeouts mid-round so most fact-checks didn't land). The second had the Validator running cleanly every round.

Four extra minutes of runtime. Two fewer fabrications surviving to the synthesis step. For any downstream use that treats the synthesis as input — a decision support pipeline, a summary for a human in a hurry, a training dataset — this is a disproportionately good trade.

The engine is one Python file, under 600 lines, pure stdlib plus PyYAML. Personas are YAML. Providers are OpenAI-compatible HTTP endpoints with a dispatcher that also knows how to shell out to CLI tools (useful if you already pay for a chat subscription and would rather reuse that access than buy API credits).

I deliberately kept the model names and auth patterns out of the hot path. Which model you pick for each persona is in personas.yaml; the engine itself doesn't care. You can run the whole thing entirely on local Ollama if you want, or mix local personas for cheap speech with a single cloud-backed persona for the Validator.

The validator is the bottleneck by a wide margin. On my setup, the debating personas each took 30-180 seconds per round. The Validator took 300+ seconds because it has to read all four persona outputs and run a web search per claim. If you want this faster, lowering reasoning effort on the validator is the single highest-leverage knob.

Quality is non-linear in reasoning effort for the validator specifically. Cheap validator = performative. It nods at claims without actually looking anything up. It might say [OK] "according to Reuters" without verifying that Reuters actually said the thing. You can tell from the log: a good validator produces URLs; a cheap one produces vague attributions. This matches the intuition that fact-checking is harder than answering.

Personas with single-responsibility prompts outperform multi-responsibility prompts. An early version had the Researcher persona double as the validator — "when you research, also fact-check the others." Argument quality dropped, fact-check quality dropped, and both responsibilities became half-hearted. Splitting them fixed both.

A few things I left on the roadmap because I didn't want to ship speculative solutions:

Edit swarm/personas.yaml to point at whatever providers you have (API keys, CLI tools, local Ollama — any combination works). The dispatcher figures out which path to use based on what's configured.

The output is a Markdown log with all rounds, validator findings, and a synthesis section ready to pipe into a strong model for the final answer.

The shared-expert idea came from reading the OpenMythos community repository — a speculative reconstruction of a hypothetical MoE language model. OpenMythos is architecture-level speculation rather than a runnable model, and its specific claims about actual production systems are unverified, but the structural idea of one expert always running alongside the routed experts is a real pattern in MoE research and it translates cleanly into multi-agent systems.

Related papers worth a skim if you find this interesting:

If you run it on a topic I wouldn't think to try, I'd like to see the log. Open an issue with the result attached — it's the kind of feedback that tells me whether the pattern generalizes or works only in my specific workload.

Repo: capitansuat/swarm-debate
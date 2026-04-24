# D-Strings Could End Your textwrap.dedent() Days and Other Python News for April 2026

Source: https://realpython.com/python-news-april-2026/

If you’ve ever wrapped a multiline string in textwrap.dedent() and wondered why Python can’t just handle that for you, then your PEP has arrived. PEP 822 proposes d-strings, a new d"""...""" prefix that automatically strips leading indentation. It’s one of those small quality-of-life ideas that make you wonder why it didn’t exist already. The PEP is currently a draft proposal.

March also delivered Python 3.15.0 alpha 7 with lazy imports you can finally test and security patches across three older branches. On the ecosystem side, GPT-5.4 landed with a tool search feature that changes agentic workflows. Meanwhile, the Python Insider blog migration moved 307 posts to a new home without breaking a single URL. It’s time to get into the biggest Python news from the past month.

March brought the penultimate alpha of Python 3.15 with a long-awaited feature that finally lets Python developers defer imports cleanly. On top of that, security patches landed for three older branches, and a fresh PEP proposal showed up that could clean up your multiline strings for good.

Python 3.15.0a7 dropped on March 10, the second-to-last alpha before the beta freeze on May 5. The headline feature you can finally test is PEP 810, explicit lazy imports. The Steering Council accepted PEP 810 back in November, but this is the first alpha where the implementation is available to try.

The idea is straightforward: prefix any import statement with lazy, and the module won’t actually load until you first access an attribute on it:

The PEP authors note that 17 percent of standard library imports are already placed inside functions to defer loading. Tools like Django’s management commands, Click-based CLIs, and codebases heavy on type checking often spend hundreds of milliseconds on imports they might never use. Lazy imports make that optimization explicit and clean, without scattering imports deep inside function bodies.

Note: Alpha 7 also continues to ship the JIT compiler improvements from earlier alphas, with 3–4 percent geometric mean gains on x86-64 Linux and 7–8 percent on AArch64 macOS. Alpha 8 is scheduled for April 7, with the beta phase starting May 5.

On March 3, Thomas Wouters released security-only patches across three older Python branches. The updates fix several CVEs, including two XML parsing vulnerabilities (CVE-2026-24515 and CVE-2026-25210), patched by upgrading the bundled libexpat to 2.7.4. Additional fixes cover an XML memory amplification bug and the rejection of control characters in HTTP headers and URL parsing.

If you’re still running Python 3.12 or older in production, applying these patches is highly recommended. Python 3.12 is now in security-fixes-only mode, so no binary installers are provided. You’ll need to build from source.

PEP 822, authored by Inada Naoki, proposes a new d"""...""" string prefix that automatically strips leading indentation from multiline strings, using the same algorithm as textwrap.dedent().

Anyone who’s written a multiline SQL query or help text inside a function and battled with indentation knows the pain:

The d prefix combines with f, r, b, and even the upcoming t (template strings) prefixes. PEP 822 was submitted to the Steering Council on March 9 and targets Python 3.15, though a decision hasn’t landed yet. If you’ve ever wished Python strings would just handle indentation for you, this one’s worth keeping an eye on.

The Steering Council has a busy review queue this month:

Keep an eye on these proposals—any of them could move forward before the beta freeze in May.

This month’s community news centers on infrastructure work and some spirited syntax debates. The Python Insider blog finally left Blogger behind, and a PEP discussion is generating the kind of passionate back-and-forth that makes discuss.python.org worth following.

After years on Blogger, the Python Insider blog has a new home. On March 3, Jacob Coffee announced that all 307 historical posts have been migrated to blog.python.org, with old URLs redirecting automatically.

The new site runs on Astro for static generation with Tailwind CSS for styling, deployed through GitHub Actions. The biggest practical change is that contributors can now submit blog posts as pull requests using plain Markdown rather than needing a Google account. It’s a small but meaningful modernization of Python’s community infrastructure.

Python syntax discussions can definitely generate a lot of heat. Have a look at PEP 802. With 185 discussion replies and counting, this proposal for {/} as an empty set literal has become one of the most debated PEPs of the year.

The pitch is straightforward: {} creates an empty dict, [] creates an empty list, but there’s no literal for an empty set. You have to write set(). PEP 802 proposes {/}, echoing the mathematical empty-set symbol. The community is split on whether this is elegant or confusing, and no Steering Council decision has been announced.

The Python Software Foundation (PSF) reopened applications for its Meetup Pro Network, which covers subscription fees for qualifying Python meetup groups. The PSF currently sponsors 109 groups at $15/month each. To qualify, groups need to focus on Python content, maintain a Code of Conduct, and host at least two events per year.

Note: The broader PSF Grants Program remains paused while the organization works through structural decisions. The Meetup Pro Network is one of the few active community support mechanisms currently available. If you organize a Python meetup, it’s worth applying.

The Python tooling ecosystem kept its usual pace this month. Both uv and Black shipped breaking-change releases worth knowing about, and several scientific computing libraries pushed patches that fix bugs you may have been hitting without realizing it.

Just weeks after the 0.10.0 breaking-changes release covered last month, uv 0.11.0 was released on March 23, this time focused on the networking stack. The underlying HTTP client was upgraded to reqwest v0.13, swapping in rustls-platform-verifier—which delegates TLS validation to your OS’s security framework—while replacing the ring cryptography backend with aws-lc.

Most Python developers won’t notice a difference, but if you’re behind a corporate proxy or use custom CA certificates, test before upgrading. The --native-tls flag is deprecated in favor of a new --system-certs flag.

Black 26.3.0 brings winloop as a Windows event-loop backend, pushing formatting performance closer to parity with uvloop on Linux and macOS. The same speedup extends to blackd. The release also fixes a data-corruption bug where non-UTF-8 files could be double-decoded, which is one of those fixes that make you glad someone caught it. A quick follow-up in 26.3.1 patched a Jupyter notebook cell-magic masking bug.

It was another packed month in the AI space. The biggest news for Python developers was a new model family from OpenAI, while PyTorch and vLLM both shipped releases that change how you work with GPUs.

OpenAI released GPT-5.4 on March 5 with a one-million-token context window and a feature that changes how agentic workflows handle tools: tool search. Instead of cramming all tool definitions into your system prompt, the model can now look up tool schemas on demand, cutting token usage in multi-tool systems.

Building on the SDK updates covered last month, the Python SDK shipped five more releases in March (v2.25–v2.29) to support the new model. Other additions include a GA ComputerTool class for computer use, Sora API improvements, custom voices for the TTS API, and two smaller model variants (gpt-5.4-mini and gpt-5.4-nano) that dropped on March 17.

Note: If you’re building agentic applications with many tools, the tool search feature is worth exploring. It shifts the performance bottleneck from prompt size to the model’s ability to retrieve the right tool definition, which is a different approach for complex agents.

Following the TorchScript deprecation in PyTorch 2.10 covered in February, PyTorch continued its rapid evolution.

PyTorch 2.11.0 shipped on March 23. The big additions include FlashAttention-4 support on Hopper and Blackwell GPUs through FlexAttention, differentiable collectives for distributed training, and expanded MPS operator coverage for Apple Silicon with Metal 4 support.

The change most likely to affect your workflow is that PyPI wheels now ship with CUDA 13.0 by default. Volta (V100) support has been dropped from CUDA 12.8+ binaries, so if you’re running older hardware, you’ll need CUDA 12.6 builds. TorchScript’s ONNX export fallback was also removed, so if you’ve been relying on it, now’s the time to switch to torch.export.

Hot on the heels of the v0.16.0 WebSocket release covered last month, vLLM had a productive March, shipping both v0.17.0 on March 7 and v0.18.0 on March 20. Highlights include gRPC serving via the new --grpc flag, a --performance-mode knob for quick deployment tuning, GPU-less multimodal preprocessing with vllm launch render, and smart KV cache CPU offloading.

The most significant change is that Ray is no longer a default dependency. If your vLLM deployment uses Ray for distributed serving, you’ll need to install it explicitly after upgrading.

Spring conference season is approaching:

Check the conference websites for schedules, tickets, and early-bird deadlines.

The Real Python team kept up its usual pace in March. Here’s what’s new on the site.

Sharpen your skills with these new written tutorials:

If video is more your style, check out these new video courses:

Test your understanding with these new quizzes:

On The Real Python Podcast, host Christopher Bailey published three new episodes last month:

If you’re getting into AI agent development, Real Python’s new Pydantic AI tutorial walks you through building type-safe LLM agents in Python from scratch.

After a sold-out first run, we’re bringing one of our most requested workshops back! It’s time to stop copy-pasting from ChatGPT and learn to build Python projects with an AI agent that lives inside your codebase. On April 11–12, join Real Python’s Philipp Acsany for a hands-on masterclass in the next generation of AI-assisted development.

Over two intensive sessions (4-hours each, via Zoom) Philipp will show you how to move beyond “toy” prompts and treat Claude Code as a legitimate pair programmer.

Here’s the tech stack you’ll master:

Claude Code: The AI agent that actually reads your codebase and runs your tests.

Modern Python tooling: Get hands-on with uv, Click, and Textual.

DevOps & Git: Learn to plan, scaffold, and ship features directly to GitHub.

You’ll leave with a working project in your portfolio and a professional workflow you can put to work the very next Monday.

Reserve Your Seat for the Claude Code Course →

Looking ahead, here’s a quick recap of what’s coming up:

Lazy imports, tool search for AI agents, and a blog migration that moved 307 posts without breaking a URL. March was a month of infrastructure work that makes the whole ecosystem a little smoother. If you have a CLI tool that takes too long to start, grab alpha 7 and give lazy import a spin. You might be surprised how much startup time you can claw back. Happy Pythoning!
# Defense against uploads: Q&A with OSS file scanner, pompelmi

Source: https://stackoverflow.blog/2026/02/23/defense-against-uploads-oss-file-scanner-pompelmi/

With bad code being easier than ever to write thanks to AI, application security is ever more important. One of the earliest attack vectors for the internet are file uploads, and they are still a threat. Open source projects like pompelmi provide easy and flexible ways to defend against this attack using modern tech. I spoke with the creator of the project, Tommaso Bertocchi, about how it works.

—---------------------------

Q: When people think of application security today, they usually think in terms of network connections, user auth, and API security. File uploads seems like a niche and/or early internet problem. What made you want to create a solution for this issue?

Tommaso Bertocchi: You're right that file upload security is often overshadowed by network or API security, but it remains a critical attack vector that is frequently overlooked because of its perceived complexity. I created pompelmi because I noticed a significant gap: there were no modern, developer-friendly solutions that could be integrated quickly. Traditionally, setting up a malware scanner required deep domain expertise and hours of configuration, which often discourages solo developers. By making the integration seamless and 'plug-and-play' for Node.js environments, I wanted to encourage more developers to secure their applications, ultimately making the web safer.

Q: You call file uploads "a critical attack vector that is frequently overlooked because of its perceived complexity." Could you expand on this? What's the risk here? Are there recent breaches that came from file uploads? Why is this attack vector complex to deal with? Is there something more than just block .exe files?

TB: File uploads look simple, but they introduce a meaningful security boundary because you’re accepting untrusted, complex inputs into your system. The risk isn’t only “someone uploads a virus.” In practice, weak upload handling can increase exposure to issues such as unintended execution or unsafe processing paths (depending on how files are stored and later handled), denial-of-service scenarios via pathological inputs (e.g., archives designed to consume resources), and bypasses of superficial checks (extensions, client-provided MIME types, filename tricks). This tends to happen most often when uploads are implemented quickly and rely on minimal validation.

Q: Why node.js for this instead of language that compiles to bytecode?

TB: The choice of Node.js was purely strategic and driven by Developer Experience (DX). If I had built this in a language that compiles to bytecode, it would have introduced another layer of friction—requiring developers to manage external runtimes or complex IPC. Since modern web development is heavily centered around the Node.js ecosystem (React, Angular, Next.js), building pompelmi in the same language allows for a 'native' integration. It lives where the code lives, ensuring that security doesn't feel like a clunky external chore.

Q: How do you scan suspect files without persisting them and keep everything fast?

TB: The core of pompelmi's performance lies in its in-process, stream-based architecture. We achieve this by using Node.js streams and configurable buffer limits to analyze file bytes directly in memory as they are uploaded, avoiding the heavy I/O overhead of disk writes. Additionally, since the engine runs within the same process, there is no network latency. We also use 'magic bytes' to quickly identify file types; if a file violates a policy (like a ZIP bomb), we terminate the scan instantly before the entire file is even processed.

Q: There's a lot of flexibility built in with YARA and multiple composed scanners, but that could put some of the identification burden on the user. Do you provide YARA recipes or other best practices for identification?

Q: I agree that flexibility shouldn't come at the cost of usability. To prevent the 'blank page' problem, pompelmi comes with built-in policy presets and a Common Heuristics Scanner. These handle the most frequent threats out of the box, such as ZIP bombs and MIME/Magic Byte verification. We also provide a set of standard YARA recipes and 'reason codes' to explain why a file was flagged. Our goal is a 'secure-by-default' experience where developers can start protected and then add custom rules as they evolve.

Q: Do people need to keep up with the latest security news in order to protect their file upload systems? Or this a case of protecting against the most common attacks gets you pretty solid security?

TB: Keeping up with every new exploit in real time is difficult in practice, especially across many technologies. A more realistic approach is to implement a strong baseline that addresses common, repeatable failure modes (e.g., strict allowlists, server-side type validation, safe storage/handling, resource/time bounds, archive hardening), and then keep the parts that change frequently updated where relevant (e.g., patching dependencies and refreshing detection content such as scanning rules). pompelmi is built around this layered, policy-driven approach — providing guardrails like server-side validation, archive checks, resource limits, and optional YARA-based scanning — to help teams adopt a solid baseline without building a custom pipeline from scratch.

Q: Is it hard being the primary maintainer of this project? Do you prefer having the control?

TB: Being the sole maintainer allows me the creative freedom to make swift decisions and keep the project’s vision focused. However, I’m also realistic. My goal is to scale this from a personal project into a full-fledged organization. I want to build a team and an infrastructure that can provide advanced resources and consistent updates, moving beyond a single-person dependency while maintaining that core developer-centric spirit.

Q: What was something unexpectedly complex or difficult in creating this project?

TB: The most unexpectedly challenging part was framework compatibility. Each Node.js framework handles uploads differently—middleware vs. plugins, request/response lifecycles, body parsing, streaming vs in-memory buffers, and error-handling conventions. Building pompelmi as a “drop-in” upload protection layer across multiple stacks meant designing a consistent core policy and then maintaining dedicated adapters so developers can apply the same rules and get predictable behavior across environments.

Q: We've seen a lot of important OSS projects run into trouble when the lead maintainer burns out or needs to get a day job. Are you actively looking for contributors, ways to monetize, or foundational support?

TB: I am very conscious of the burnout risk, which is why I’m currently looking to partner with or gain the backing of an established company—ideally a leader in the tech industry. Such support would provide the infrastructure and resources to transition the project to a professional-grade standard. Whether through corporate sponsorship or foundational support, my priority is to secure the project’s future so it can continue to serve the community reliably in the long term.

Q: Have you contributed to other OSS projects? If so, what did you learn about maintaining a project and dealing with contributors?

TB: pompelmi is my first open-source project and the first one I’ve maintained end-to-end. What I’ve learned quickly is that the most useful feedback isn’t just stars or download counts — it’s direct human feedback through issues, pull requests, and reviews. That’s where you see real user needs, edge cases, and expectations around reliability. Those discussions have helped me iterate: fix bugs, refine APIs, improve docs/examples, and add features that address recurring problems, while keeping the project stable and predictable. Maintaining it mostly solo is challenging, but I aim to be responsive, transparent about trade-offs, and careful about changes that could affect users.
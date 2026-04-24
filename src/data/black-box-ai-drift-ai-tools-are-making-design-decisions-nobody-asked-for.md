# Black box AI drift: AI tools are making design decisions nobody asked for

Source: https://stackoverflow.blog/2026/04/23/black-box-ai-drift-ai-tools-are-making-design-decisions-nobody-asked-for/

A year ago, I set out to test whether all of the hype around vibe coding was real. I decided to stress test AI with a complex design project and really push it to see if AI assistance was the magical tool everyone raved about.

Having been a software developer by origin who pivoted to user experience for developer tools, I gravitated toward the hardest thing I knew: building for developers themselves. Not the to-do apps and shopping lists filling every demo, but something that would actually stress the system. The former are predictable problems dressed up as design work: known inputs, known outputs, a thin interface over basic add-edit-delete mechanics. The shape of the answer is already baked into every tutorial the model has seen.

A developer tool is a different animal. The user isn't checking items off a list; they're forming a mental model of a system they're building, and the interface has to make ambiguity legible instead of hiding it. Multiple layers that have to stay coherent with each other, interactions that cross surfaces where a small change in one place can quietly break something two views away, and underneath it all, a subject that refuses to sit still: the developer's own code, running in their environment, shaped by intent the tool can't fully know in advance.

Turns out that the process was not magic. On the surface, the AI produced confident output. When I glanced at the actual code, I found a tangle of incorrect assumptions, convoluted implementations, dead code, and security vulnerabilities. None of it was flagged or explained. I only found this out because I opened the black box that is AI and looked at what was in there.

My AI assistant made inexplicable choices. It generated code I didn't ask for and deleted whole bodies of work without warning. When I asked why it happened, I could never get a clear answer. After weeks of this, I started calling my AI assistant "Chad," after the Pete Davidson SNL character who, no matter what happened, would shrug and say, "My bad." I spent an inordinate amount of time grilling Chad about its actions so I could learn about the process: what assumptions, guesses, and side trips were happening and why.

This is black box AI drift—the gap between what you need in a design and the AI translation of your intent into code. Prompts go in, output comes out, and the decisions made in between are hidden from view. The LLM sounds confident. The output looks right. You may not know it's wrong until it's buried in a codebase or an end user finds it for you.

Before AI, design-to-code translation happened in the open between humans. Designers and developers negotiated, explained, and lobbied. Humans could see where intent ended and implementation began. AI closed that window. Now, we’re depending on models to interpret intent—often in the absence of context, nuance, or judgment. It’s happening away from view at massive scale.

Because of the volume and velocity of AI-assisted generation, those gaps are proliferating faster than we can chase them. Most of the current focus is on creating better prompts or fixing code once it’s produced. Instead, we need to look inside the box to see what’s happening and, more importantly, why, so we can catch problems before they land in the product.

In my work with Chad, if I hadn’t been carefully watching the code, there’s so much I would have missed completely. Here’s a perfect example:

I asked Chad to implement a simple, straightforward lint rule and then I moved on to my next task. Later, a constant I didn't recognize caught my eye in the wall of code flying by. I asked Chad what it was for.

Chad had built an elaborate context-aware filtering system (completely unrelated to what I asked for) around my simple lint rule. I had asked for broad detection. AI delivered narrow, opinionated detection, wrapped in a complex set of heuristics that quietly filtered out findings. I would never have known this happened. This is drift in a nutshell: a complex solution to a nonexistent problem.

Why would it do that? AI is trained to gravitate toward what it thinks "good" looks like. In that process, it makes decisions you never requested, invisibly, confidently, and without flagging that it did so and buried in code you had no reason to review. Then, it gives you a confident thumbs up. “Done!”

The issue isn't whether AI gets things wrong; it's whether we can tell when it’s getting things “almost right.”

With Chad, I learned that clear instructions weren’t enough. I needed to be painstakingly fine-grained at every step, in my prompts, as well as everything that Chad created whether it looked right or not:

I had to check in with it at every step in a way that I never would have with a human developer. That level of scrutiny and oversight is simply not sustainable at scale.

We also can’t just continue to try to fix the output. AI tools are trained to optimize for "It works." Drift gets handled downstream where developers end up rewriting AI code manually, one file at a time.

We can’t keep chasing drift. Instead, it should be caught upstream or, better yet, prevented before it happens.

The answer isn't more supervision. It's better tools.

The opposite of a black box isn't the absence of a box. It's a glass box; AI that implements what was specified, surfaces its decisions broadly, and lets humans decide what to do when outcomes aren't clear. AI that shows its work and waits for a human to act on it.

This is how production-ready software gets built with the help of AI. Not by removing humans from the process, but by keeping them genuinely in control, not just "in the loop."

The field is moving fast, dazzled by the speed of what AI can produce, and not asking hard enough questions about the quality of what's getting built. The black box is dark because we're not taking the time to look inside it. This is the moment when we still can.

The craft of software (the judgment, the intent, the decisions that make code work for actual humans) can't be left inside a box that nobody's watching.
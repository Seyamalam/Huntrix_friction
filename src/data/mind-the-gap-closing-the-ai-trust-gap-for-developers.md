# Mind the gap: Closing the AI trust gap for developers

Source: https://stackoverflow.blog/2026/02/18/closing-the-developer-ai-trust-gap/

Stack Overflow’s 2025 developer survey revealed a puzzle: Developers’ use of AI rose, with more than 84% of respondents using or planning to use AI tools in 2025. But their trust in those tools dropped sharply: Only 29% of 2025 respondents said they trust AI, down 11 percentage points from 2024.

At the risk of stating the obvious, the trustworthiness of a tool is important. Trust determines whether organizations can realize the productivity, scalability, and innovation potential of AI. It impacts whether AI-generated code makes it to production or needs to be rewritten by humans. It affects whether organizations scale AI adoption or keep it confined to low-stakes experiments. And it influences whether the next generation of developers learns to work effectively with AI or not.

To be clear, when we talk about trust, we mean confidence that AI outputs are accurate, reliable, and rooted in relevant context. Developer trust is synonymous with a willingness to deploy AI-generated code to production systems with minimal human review, as well as assurance that AI tools aren’t introducing unacceptable risks and technical debt that will burden you down the line.

The gap between usage and trust spotlighted by our survey reveals something important about this moment in software development. Developers are neither reflexively change-resistant nor overly eager to integrate AI into their workflows without first ensuring that it adds value. They're professionals trying to navigate a paradigm shift that calls into question core aspects of how they've been trained to think about their work.

For everyone involved in building software, it’s important to understand why this gap exists, what it reveals about the culture and practice of software development, and how we might close it. Let's get into it.

Stack Overflow has been tracking developer sentiment around AI since 2023, asking consistent questions to illuminate how developers’ attitudes are evolving over time.

In 2023, roughly 70% of developers reported using or planning to use AI tools. Trust levels hovered around 40%: not great, but understandable for a new category of tech. In 2025, we saw usage rise to 84% even as trust dropped to 29%, a counterintuitive dip in trustworthiness that correlates with higher adoption rates.

A typical technology adoption curve shows the opposite relationship. Familiarity breeds confidence. You learn the scope and quirks of a piece of tech; develop best practices; understand through experience what it can and can’t do. But the more devs use AI, it seems, the less they trust it. What’s going on here?

Part of the answer lies in who software developers are at the population level. Software engineers are trained for deterministic thinking: write the same code twice, get the same result twice. Their professional identity hinges on craftsmanship, on elegant solutions written to solve hard problems. Approaching AI coding tools from that perspective, developers are primed to note every inconsistency, every failure, every instance when the tool falls short of the high standards they’ve set for themselves.

Developers are trained to think in terms of reproducible outcomes. They write a function, they test it, and it behaves predictably. Same input, same output. There's something deeply satisfying about this: "I'm going to do this; as a result, I'm going to get that." It's dependable and easily comprehensible, like following a recipe that reliably produces a delicious meal. It's what makes the field software engineering rather than software hoping-for-the-best.

Fundamentally, AI operates on different principles. It's probabilistic rather than deterministic, meaning that if you ask the same question twice, you’ll probably get two different answers. Both are potentially correct, but they might be structured differently, using different approaches, making different tradeoffs. There's no single "right" output; just a distribution of possibilities weighted by probability.

Many devs find this jarring because it violates their foundational expectations about how coding tools should work. Working effectively with AI requires accepting variability as an inherent feature of the system. This can be a major mental shift for developers trained to prioritize precision and reproducibility.

Instead of assessing whether AI is “better” or “worse” than conventional coding practices, we should acknowledge that it’s different in significant ways that create cognitive friction. Understanding and adjusting to those differences takes time, and during that adjustment period, trust can falter.

AI hallucinates, and not always in ways that are apparent or easy to catch. Developers report encountering plausible-looking code that simply doesn't work, confidently wrong explanations of what code does, references to APIs that don't exist or methods that were deprecated years ago, and subtle security vulnerabilities that slip past casual review because the surrounding code looks polished.

This creates a discernment burden. When every piece of AI-generated code requires verification, you can't just accept it and move on. Instead, you have to read it carefully, understand what it's doing, test it thoroughly, and check for edge cases. If that verification takes as long as it would have taken you to write the code yourself, what exactly have you gained?

If you're building financial systems, healthcare applications, or any software that handles user data, one undetected hallucination can have serious consequences. Pushing unvetted AI code into important systems is a bad idea, even if it seems to save time and effort in the short term. Developers know this, which is why fear of hallucinations keeps them from placing more trust in AI.

Another factor in the trust deficit is simple: People just aren’t used to AI coding tools yet. As we said above, AI tools are simply different, and they require a different skill set from conventional coding tools. You need to learn effective prompting: how to communicate intent clearly to a system that doesn't think like you do. You need to develop evaluation frameworks for assessing outputs. You need to figure out validation workflows that catch problems without creating bottlenecks.

There's a competence-confidence gap here too. Many developers recognize that they don't fully understand how to use AI tools. They're uncertain about their own skills: "Am I prompting this correctly? Would a better prompt have given me better code? Is this the tool's limitation or my limitation?" That uncertainty comes across as a lack of trust in the tool, but it's also an uncertainty about one's own ability to use the tool well. It's a learning curve masquerading as a trust issue.

Finally, there's the elephant in the room. Developers contemplating AI coding tools often wonder if they’re using (and, thereby, improving) tools that will ultimately replace them.

For many developers, this existential angst hovers over every interaction with AI coding tools, creating a psychological barrier. It's hard for developers to fully trust something they perceive as a potential threat not just to their livelihood but also to their identity. Media narratives around AI replacing jobs amplify these fears, even when the reality is more nuanced.

The result is a certain degree of cognitive dissonance. Devs use AI tools because they’re useful, because their employer encourages them, or because their colleagues are using them and they don't want to fall behind. But they can’t place their complete trust in something that seems to threaten them with obsolescence.

Developers are right to be skeptical about AI coding tools. High standards are a given in software development. Quality matters. Security matters. Maintainability matters. The "move fast and break things" ethos only takes you so far, especially when "things" include financial systems, medical devices, or critical infrastructure that people depend on.

Professional skepticism—the instinct to verify, to question, to hold outputs to rigorous standards—is part of good engineering culture. To some extent, the trust gap reflects developers applying that skepticism to a new category of technology. That’s a good instinct.

But, as Stack Overflow CEO Prashanth Chandrasekar pointed out in a recent conversation with OpenAI Head of Developer Experience Romain Huet, developers have always dealt with fallible tools: "If you fat-fingered something on a calculator and you got your exam question wrong, it's not on the calculator." Tools in every technology category require user competence and accountability to produce good results. They're aids to human judgment, not replacements for it.

Engineers still own the outcomes. You can't blame AI when code fails (“a poor workman blames his tools,” my dad used to say). But that cuts both ways: If you own the outcomes, you need to understand AI well enough to use it effectively, which means letting go of reflexive distrust.

However we feel about it, the developer skill set now includes understanding how and when to leverage AI effectively: how to structure prompts, how to evaluate outputs, how to integrate AI-generated code into existing systems. And it’s rapidly evolving to include architecting systems with AI agents: designing workflows that optimally combine human and machine capabilities.

Of course, the trust gap isn’t just an individual challenge; for the enterprise, it’s also an organizational one.

When your engineering team doesn't trust AI tools, narrowly scoped pilots might succeed, but the tool doesn’t scale. Teams revert to trusted manual processes when they’re under pressure. Security teams are reluctant to deploy tools they don’t really trust. Privacy officers fret over where data goes and what models learn. Governance frameworks built for traditional software often fail to map cleanly onto AI workflows. In highly-regulated industries like finance, healthcare, and legal services, the scrutiny and skepticism tend to be even more intense.

Then you get to questions of accuracy and context. What data is the AI actually using? Is it pulling from your proprietary codebase? Is it sharing your information with external systems? Can you prove to auditors that your AI outputs are reliable?

Some organizations are building trust by addressing these concerns head-on. Consider Uber's approach with Genie, an AI assistant that automatically answers questions in Slack channels and resolves support tickets. Genie is powered by curated institutional knowledge. It plugs into Stack Internal, Uber's private repository of human-verified technical content, and combines that rich organizational knowledge and context with OpenAI's models. The result is a system that provides both accuracy (from human curation) and scale (from AI capabilities). Attribution and traceability are built in: Uber’s teams can see where answers came from, which builds trust. This trust means more adoption and higher competency, creating a virtuous cycle of innovation for Uber’s technical teams.

Genie points to a winning formula: human curation + AI capabilities = trustworthy tools that scale. Investment in knowledge management infrastructure is the way to get there. Genie demonstrates that the trust problem is solvable when organizations take it seriously—and place human expertise at the heart of their solution.

So how do we go about closing this gap? We have ideas for individual developers, engineering leaders, and organizations, but they come down to the same principle: Trust is earned by demonstrating competence over time.

There’s a tendency to look at the AI trust gap as a crisis. In actuality, it’s a reasonable response to a major platform shift: a reflection of healthy skepticism from a profession that cares deeply about quality, precision, and reproducibility. As developers get better at working with AI tools, as they understand the abilities and limitations of AI, they’ll place more trust in the tools—because they’ll know what the tech can and can’t do. And they’ll trust themselves to use the tool properly.

As Chandrasekar emphasized in his talk with OpenAI Head of Developer Experience Romain Huet, this moment calls for a balance between blind faith in AI and total rejection of the whole concept. As an industry, we need developers who’ve mastered the fundamentals: how systems work, how to write good tests, and how to architect for scale and reliability. There’s a new fundamental they’ll need: how to use AI tools effectively: "If you don't do that, then you're gonna get left behind. So it's a combination of both because at some point you're gonna be in a situation where it's on you to build something very important for a company. You better know what's underneath the hood before you push it into production."

For the many developers who lack trust in AI coding tools, our advice is: Don’t wait for perfect trust before you start learning. (That would be an awfully long wait.) The path forward is building competence through practice, developing judgment through experience, and letting trust grow naturally as you discover what AI can and can't do dependably.

The trust gap reveals developers’ professional integrity. They’re holding AI to high standards of quality and accuracy rather than accepting whatever it produces. They're applying the same rigor they'd direct at any tool that could affect production systems. Ultimately, that insistence on quality and refusal to cut corners will make AI-assisted development better.
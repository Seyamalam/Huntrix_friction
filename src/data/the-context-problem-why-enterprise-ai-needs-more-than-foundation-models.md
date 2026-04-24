# The context problem: Why enterprise AI needs more than foundation models

Source: https://stackoverflow.blog/2026/03/12/enterprise-ai-needs-more-than-foundation-models/

Ask an AI coding assistant to, say, “build a React component with a dropdown menu,” and you'll probably get something impressive in seconds—clean code, proper hooks, accessible markup. It's the kind of demo that makes CTOs lean forward in their chairs.

Now ask that same AI about your company's internal API for user authentication. Ask it to integrate with your legacy billing system. Ask it why your team deprecated a particular approach last quarter. Watch it hallucinate with confidence, suggesting endpoints that don't exist, recommending patterns your architecture explicitly forbids, and generally ignoring the hard-won institutional knowledge that makes your systems actually, you know, work.

This is the enterprise AI paradox: Foundation models know everything about public libraries but precious little about the specifics that matter for your business. They're trained on millions of open source repositories, but they’ve never seen your codebase. They can regurgitate best practices from popular engineering blogs, but they fail to grasp why those practices might be impossible in your environment. Without context—the community-vetted, institutional knowledge behind business decisions—AI assistants remain dangerously confident when they shouldn’t be.

At Stack Overflow, we see that the difference between AI that impresses people in demos and AI that drives production value is context. In this article, we’ll explore how organizations are approaching the context problem, what actually works versus what just sounds good in theory, and some practical frameworks for building a context layer that maximizes the return on your enterprise AI investment.

When we talk about context in enterprise AI, we're talking about institutional knowledge: the accumulated collective wisdom that keeps your systems operating smoothly. It includes everything from your internal APIs and microservices architecture to your coding standards and style guides. Records of architectural decisions—explanations of why the organization made this or that choice—are crucial context. Context encompasses documentation about integration points and dependencies, security requirements specific to your industry, and compliance constraints that guide technical decisions.

Context also includes insights that are hard to capture. The knowledge that teams tried that approach two years ago and changed course for good reasons. The awareness that a particular service is fragile and requires careful handling. The reasoning and historical justification behind decisions that might seem arbitrary when stripped of context.

No matter their level of sophistication, foundation models don’t have access to this knowledge. Trained on public data in the form of open-source repositories, published documentation, and Stack Overflow's public platform, they can be hugely valuable in answering generic questions and troubleshooting generic problems. But they lack access to your private repositories, can't see the reasoning behind specific architectural choices, and don't necessarily understand your business domain specifics. Foundation models can answer the general how questions (“How do I build a React component with a dropdown menu?”) but not the all-important why and what: Why did my engineers make this decision? What were they trying to build and why?

This knowledge gap might manifest with AI suggesting using an internal library that was deprecated six months ago. It might generate code that violates your company's security policies…because it doesn't know those policies exist. It might recommend patterns that would be best practices in a greenfield project, but decidedly do not work with your legacy infrastructure.

Generic AI’s textbook answers often conflict with the unique constraints you operate under. That’s why, in a recent article about the AI trust gap, we suggested that developers look at AI tools as freshly minted new devs: “promising, pretty fast, but prone to sometimes-basic errors and in need of supervision and redirection.”

The context problem is why so many enterprise AI pilots succeed in controlled environments but fail to scale to production. Generic AI is impressive when applied to generic problems, but enterprise production requires specific, accurate, verifiable knowledge.

To understand how companies are solving the context problem, it helps to look at what Stack Overflow discovered about our enterprise product.

Stack Internal is a private version of Stack Overflow used by thousands of customers, including major banks, big tech companies, retailers, healthcare organizations, manufacturers. They've all deployed internal instances where their engineers can ask and answer questions in a deeply familiar Q&A format, but packed with organization-specific content: "How do we authenticate against our internal user service?" "What's the approved pattern for handling PII in our data pipelines?" "Why did we move away from library X to library Y?" Experts within the company provide answers which are validated by the community, forming a repository of verified internal knowledge.

Over the past couple of years, Stack Overflow's product team noticed something interesting: The APIs for Stack Overflow Internal became, in CEO Prashanth Chandrasekar's words, "very, very hot." Usage spiked. Companies weren't just using the platform through its web interface; they were building on top of it, pulling data programmatically at high volumes. When the team investigated, they discovered a pattern: Enterprises were plugging Stack Overflow Internal into AI assistants.

It made sense in retrospect. Companies had tried using generic AI coding assistants and found them useful but limited. For common tasks, they worked reasonably well. But for company-specific questions—the questions that arguably matter most to productivity—the tools fell short. Organizations needed to ground AI responses in verified internal knowledge. They wanted attribution so engineers could see where answers came from and verify them against source material. They needed reliable accuracy for business-critical applications where "mostly right" isn't good enough. And they wanted to combine human expertise with AI scale for a best-of-both-worlds balance.

The integration architecture that emerged from these priorities is straightforward but powerful. Stack Internal serves as the knowledge repository, with APIs that expose this knowledge to AI systems. When an engineer asks a question, the system searches the internal Stack Overflow instance, retrieves relevant context, and feeds it to an AI model (often OpenAI's) which generates an answer grounded in company-specific knowledge. This is retrieval-augmented generation (RAG) in practice: using retrieval to provide context that grounds the AI's generation.

The partnership between Stack Overflow and OpenAI reflects this architecture. Stack Overflow's AI features are powered by OpenAI's models, combining retrieval of human-curated content with AI's natural language capabilities. The result is outputs that are both trustworthy (because they're based on verified knowledge) and accessible (because they're delivered through conversational AI interfaces).

Uber's Genie, an internal AI assistant that lives in Uber's Slack channels, demonstrates what contextual AI looks like in practice. Engineers ask technical questions and Genie automatically answers them. It also monitors support ticket channels and resolves issues when it has high confidence in the solution. It's built on the architecture we just described: Stack Overflow Internal is the knowledge base, while OpenAI's models allow for conversational interaction.

The assistant solves problems virtually universal to large engineering orgs: information overload and repeated questions. When you have thousands of engineers across dozens of teams, the same questions get asked over and over again. Experts spend time answering these questions instead of building new things. Knowledge gets lost in Slack threads or email chains. The inefficiency compounds as the organization grows.

Genie reduces what Chandrasekar calls "noise in the system": the constant interruptions and repetitive questions that fragment attention and slow teams down. It frees experts up to tackle higher-order work, because senior engineers aren't constantly being pulled into Slack to answer the same questions they answered last week. Genie provides consistent answers based on verified knowledge, so different engineers getting different advice becomes less common. And, critically, the tool builds trust through transparency and attribution, because engineers can see the source and validate the answer.

Here’s why a tool like Genie works where nonspecific AI tools miss the mark:

This kind of AI assistant, with knowledge both broad and deep, isn't a pie-in-the-sky dream. It's working at scale at one of the world's largest tech companies.

The Uber example shows us that context solves problems that seem intractable with standard-issue AI solutions. For example:

Security, privacy, and governance become manageable. When you control the knowledge base, you control exactly what information AI has access to. You can enforce compliance requirements and ensure proprietary information doesn't leak to external systems. If sensitive information shouldn't be part of AI responses, you can exclude it from the knowledge base or apply appropriate access controls.

Accuracy and specificity come into focus. Generic AI says, "Here's how most companies do X based on common patterns I've seen." Contextual AI says, "Here's how we do X, based on our architecture and constraints as documented by our experts." This difference is pretty much everything.

Trust accrues through attribution. When AI includes sources, engineers can verify the accuracy of its output. They can see that the answer came from a recent architectural decision record, or from the team that owns the relevant service, or from a Stack Overflow Internal answer that three senior engineers validated. When something's wrong or outdated, they can provide feedback on the knowledge base, creating an accountability loop.

Pilots scale to production. Production deployment requires a greater degree of reliability and accuracy than generic AI can provide. Context delivers that accuracy and reliability, so teams can move from “let’s see if this works” to “this is how we operate now.”

Without context, AI is more a party trick than a valuable part of your enterprise tech stack.

OK, you’re sold on the importance of context for enterprise AI. But how do you go about building contextual AI? Let’s look at the hurdles and how to get over them.

The cold start problem. How do you build the initial knowledge base when you're starting from scratch or with scattered documentation?

The solution is to start with the most-asked questions. Mine your existing Slack channels and email threads to identify what people actually need to know. Look at support tickets to see what your recurring issues are. Talk to senior engineers about what they wish they'd known when they started. Don't try to document everything; instead, start with the 20% of knowledge that addresses 80% of questions. Incentivize experts to document their knowledge by making learning and knowledge sharing organization-wide priorities, from senior leadership all the way down to junior devs.

The maintenance burden. Knowledge gets stale, APIs change, and best practices evolve. How do you keep institutional knowledge current without it becoming a full-time job?

The solution is to build maintenance into workflow rather than treating it as a separate activity—that’s what we did with Content Health, a feature of Stack Internal. Assign ownership of knowledge domains to specific teams, and communicate that the team that owns a service owns its documentation. Make updates easy with low-friction workflows integrated into the tools engineers already use. Incentivize contribution in whatever way works with your organizational culture, whether that’s public shout-outs, direction from managers, or gamification. One more tip: If your AI assistant’s answers on a particular topic are consistently flagged as incorrect, that area of your knowledge base needs to be updated.

The cultural challenge. Getting people to document is notoriously difficult. How do you keep “I’m in the middle of something; I'll do it later” from turning into “Oops, I forgot all about that”?

The cultural solution is similar to the solution to the maintenance solution: In both cases, you have to make documentation easy and valuable. Integrate it into existing workflows: If engineers are already in Slack or in Stack Overflow Internal, make it trivial to contribute there. Show immediate value: When someone documents something and then sees that their answer helped ten other people, that's rewarding. As we suggested above, celebrate your contributors with shout-outs or awards. And use metrics to show the impact of your efforts, e.g., "Our internal AI answered 1,000 questions this month, with 95% satisfaction, saving an estimated 200 engineering hours." When people see that their contributions matter, they’re doubly motivated to keep feeding knowledge back into the system.

The privacy and security challenges. How do you protect sensitive information from exposure while still making institutional knowledge useful?

The solution starts with clear classification and access controls. Decide what belongs in a general knowledge base versus what requires restricted access. You can separate knowledge bases by sensitivity level if you need to: one for general technical questions, one for security-sensitive information, maybe one for compliance-related knowledge. Implement audit trails so you know who accessed what and when. Conduct regular security reviews to ensure controls remain appropriate as both your knowledge base and your AI usage evolve. These are baseline requirements in highly regulated industries like finance and healthcare, but they’re good practice everywhere.

Foundation models are impressive, but they're general by necessity and design. For AI to deliver serious business value for the enterprise, it needs the deep contextual knowledge that keeps your systems running.

The investment required to build that context is significant: You need technical infrastructure, organizational commitment, and ongoing effort. But organizations that make this investment will see their AI projects transform from impressive demos to practical tools that drive real value.

As we’ve suggested, context is the difference between “we’re experimenting with AI” and “AI is core to how we increase efficiency, reduce burnout, and scale responsibly.” Once you’ve built that context layer, AI stops being a novelty and starts being an integral part of your infrastructure—one your developers can depend on.
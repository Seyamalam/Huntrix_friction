# The messy truth of your AI strategies

Source: https://stackoverflow.blog/2026/04/10/the-messy-truth-of-your-ai-strategies/

They discuss governance approaches like deploying models inside approved platforms and routing calls through monitored gateways, and how broken pipelines from complex feature-engineering motivated Kumo.ai’s approach of using a single foundation model with on-the-fly database queries.

Kumo.ai allows you to train and run state-of-the-art AI models on your relational data, allowing you to make predictions about your users and transactions in seconds.

Connect with Hema on LinkedIn or reach out to her at her email hema@kumo.ai.

Congrats to user BalusC for winning a Populist badge on their answer to How to sanitize HTML code to prevent XSS attacks in Java or JSP?.

[Intro Music]

Ryan Donovan: Wavemaker Fuses design and development with an architecture-first, agentic app generation system for design-led enterprise dev teams that want deterministic outcomes from AI. Predictable costs, open standards, pixel-to-pixel matched full-stack applications deployable at scale. Visit Wavemaker AI or email demo@wavemaker.ai.

Ryan Donovan: Hello, and welcome to the Stack Overflow Podcast, a place to talk all things software and technology. I'm your host, Ryan Donovan, and today we're talking about all the messy stuff that comes when you try to implement AI in a company that's trying to make money. Pipeline sprawl, shadow AI, all the best stuff that keeps you from getting the most out of it. And my guest for this episode is Hema Raghavan, who's co-founder and head of engineering at Kumo.ai. Welcome to the show, Hema.

Hema Raghavan: Thank you, Ryan. Thank you for having me here. Excited to talk about this! [I'm] deeply passionate about this topic.

Ryan Donovan: We love to hear it. Before we get into that, we like to get to know our guests a little bit. Can you tell us how you got into software and engineering?

Hema Raghavan: Absolutely. I started my career in software over two decades ago, maybe three decades ago. And I was in India, and like many students in India, computer science was a blooming field. I got into it, and then back in the day, my first job was at a bank, and I had to write code for bill processing for trade, and it was – I assumed that the job of the person who was using my code was really boring. And what I wanna explain is, they were scanning bills of trade, and then they were just human transcribing that into records. And I was like, 'gosh, this has to be automatable,' and that's what took me to explore. The field was called information extraction now, and it's all AI these days, but I was building language models in 2000 to solve problems like this before they were the 'hot kid on the block,' and before we had GPUs, and when we had very small memory. But the journey started in the early 2000s, and I've been in the field working on many problems ever since.

Ryan Donovan: Okay. Like you said, a lot of the automation language models are all in the generative AI space. Everybody's super excited about getting into it, which can cause some problems, right? [I've] been hearing a lot about shadow AI lately. Can you talk a little bit about that and what [are] the issues around it?

Hema Raghavan: Absolutely. So, I think companies, CXOs across the board have mandate to go AI-first, from their boards, from investors, and so on. And therefore, AI budgets have flourished in the last few years, it means that many vendors are onboarded, but it also means that across function, whether it's engineering, whether it's marketing, whether it's sales, they're all incentivized to use AI. But it's right now beyond the IT team's control. And if I go to any CSO or CIO summit, now they're really worried about private data or company-sensitive data egressing out into some of these services, because it could be very simple. It could be just somebody trying to clean up a sales deck. But you've sent all of that information as a prompt over to an LLM service provider who is not approved. It could be that you are giving access to your CRM tools, or some of the others to AI tools, and it's outside. The company does not have the governance to understand what's going in and outside that perimeter, and I think that's starting to worry the CIOs quite a bit.

Ryan Donovan: Yeah. Your company data is going through a lot more people in your supply chain, right? With AI.

Hema Raghavan: Yes.

Ryan Donovan: And we have things like Open Claw, which are super exciting, but big risk for organizations.

Hema Raghavan: Absolutely.

Ryan Donovan: What can your CISOs and others do to get a sort of hold on their information security with the AI space?

Hema Raghavan: Absolutely. So, I see a few different models being implemented. I think one thing is a lot of the AI providers, Kumo included, but even the LLM providers are available as first-party and some of the platforms. So, an example would be Snowflake has this deployment modality called Snowpark Container Services. You can actually deploy inside the Snowflake parameter. So, we in our company deploy our AI models to customers through that. So, it never leaves the database or the data warehouse that has been approved by their security teams. So, that's one pattern I see. I see another pattern in some of my customers, that they'll have in VPC deployments of models, or they may implement a gateway, so they'll actually look– all calls go through a single gateway, and then they're actually monitoring on the gateway what's going in and out. And of course, that's for someone who has the resources to implement a gateway of their own. But I'm seeing this emerge amongst my customers, and even the asks of me or my company as to where I would sit inside their VPC, if it's outside, how does it work, and so on. So, I'm stuck. So, that's the pattern of solutions.

Ryan Donovan: Yeah, I know gateway providers are definitely looking at the AI aspect of it and even managing some of that gateway traffic using AI. Do you have thoughts on that? Is it better to have this be the human process? Or can AI or automated processes manage the sort of inflows and outflows of a gateway?

Hema Raghavan: Oh, absolutely. So, I think AI itself can solve that. As long as you have data going out through some controlled endpoints, and then the AI should be able to detect PII or company-sensitive data pretty well. It, it seems like a fairly identifiable pattern. And so, I think that's definitely one way to go about it. But the other one is also, when I look at the warehouses, it's what data do you give access to AI in the first place? When I work with customers in the FinTech and healthcare space, they really like deployment modes for AI where they can actually control what sensitive data the AI has access to. So, in IT team, actually, there is some method to the madness. So, it says, 'okay, you have electronic health record data. Okay. It's these individuals and these AI systems that actually have access to it.' And we actually have telemetry to see what is going in and out.

Ryan Donovan: It's interesting, talking about that and putting it within the database provider. A lot of organizations have multiple database providers, multiple uses for these databases, and then have all these pipelines, ETL pipelines, or whatever, to transform it to get it useful for the application. Is there a use case for AI that avoids pipelines altogether? Or is there a better pipeline that people can build?

Hema Raghavan: Ryan, you touched a topic very close to my heart, because before I started the current startup, I was leading AI at LinkedIn. And we had models for everything. People You May Know was a model built out of my team. All of the notifications, the feed, the job recommendation. So, you're talking about several dozens of models and several hundreds of pipelines flowing into these models. And I wanna give you an example of, even three Gen AI of what pipeline sprawl can do for you. Okay? So, just think of an app, just like LinkedIn, and there's data from a user's click behavior flowing back into these models and the models of training, right? We had one example where one of the pipelines, a front-end tracking broke, and the model started behaving really weird. Fortunately, we had the governance to actually detect that the model scores seemed to be going off, and we opened a war room. But to actually trace back, because it's pipeline A flowing into B, into C into D, and when the first upstream pipeline is the one that's broken, that lineage just was a nightmare to debug. And imagine that now for dozens and dozens of models, and hundreds of pipelines, and a data science team, and a warehousing team that spans thousands of engineers, and people leave the company. People stop maintaining those pipelines. There's bit rot. It was a lot to maintain. So, that's actually what inspired us to create AI that's much more simple and actually eliminates pipelines. So, where are pipelines in AI often coming from, and especially for predictive AI? Think recommender systems, think lead scoring, think fraud risk prediction, and all of those kind of models, they're often coming from feature engineering. Because you have a data scientist who's saying, you know what? I need to aggregate the last 30 days of clicks. And you have one pipeline that collects that aggregation and ETLs it, and then three people rely on that ETL'ed pipeline. But that's where all the problem start, as well. And when we created Kumo, we wanted to create a really simple model architecture. So, we said, ' can we have one foundation model?' Can you imagine that a company, just for all those use cases that I described, you just have one foundation model that you need to maintain?

Ryan Donovan: Sounds like madness.

Hema Raghavan: Yes, but very elegant, right? You just have one foundation model, and then of course, each use case is different. So, can we use some of the patterns that we're seeing in Gen AI, right? Can we use in-context learning? So, let's say I'm doing a job recommendation – can I, on the fly, just say, 'okay, Ryan is looking for jobs,' and can I query the database on the fly, send those in context examples over to this general foundation model, and then it emits out a response? But in that, I'm just maintaining the one base foundation model, and an online service that lets me query the database for each use case on the fly. And that's what inspired the creation of Kumo. And I think we've been finding that to be much more elegant in terms of maintainability.

Ryan Donovan: So, if I have this right, it almost sounds like instead of moving the pipelines between data sources, you're moving the pipelines to the AI model itself. Is that right?

Hema Raghavan: Yes, exactly. Exactly. So, you don't have tons of pipelines that reach to training data that then, so when you're debugging the model, you're not debugging 20 other pipelines.

Ryan Donovan: Yeah. And it's almost making a case that the model itself is a form of data, to treat it like that.

Hema Raghavan: Yes, exactly.

Ryan Donovan: I've talked to folks trying to centralize to a single database. Typically, you have a split between the production and the analytics database. Do you think that matters for LLM pipelines?

Hema Raghavan: So, I think having one warehouse layer really makes governance easy, okay? If you have a catalog layer where you can actually determine what data sets to use, and then to the first problem that we talked about, which is even if I want to give a model access to some amount of data, right? For its in-context examples and so on. I can do it in one place, and I actually have the monitoring built in. So, I think having one data warehouse layer that you unify on for AI is a great best practice for companies. And I tend to recommend that when people consult me for these kind of things. I know it's not always possible because some different databases also have different performance characteristics.

Ryan Donovan: Sure. Yeah.

Hema Raghavan: So, sometimes it can be harder for certain companies to standardize on, but for the most part, I think people are getting to a place where the ETL things down to one warehouse, at least for analytics and AI.

Ryan Donovan: And do you find when folks do this, I think you called it 'governance by architecture,' having the AI within the data warehouse, do you find that satisfies all needs for companies or are there needs for LLMs that sit outside of the sort of data access space?

Hema Raghavan: So, I think for online services, right? Like now, if you come to a consumer website, you need recommendations, for example. An e-commerce website, or news website, you come in, you need recommendations. So, the performance characteristics of a data warehouse won't meet what you need for the service layer there, and you probably need similar governance methods for the online layer. And I don't think there is a standardization out there because I think the analytics folks gotta governance earlier than the online stack. I also think online stacks tend to be much more bespoke across companies. So, when I talk to different companies there, online architectures are so different from each other that I don't necessarily see a common pattern, and they're all implementing these in their own way.

Ryan Donovan: Yeah, it's an interesting point. Do you have an opinion on that? If I was to guess, I would guess that the analytics platforms are much more productized on the endpoint, right?

Hema Raghavan: Yeah.

Ryan Donovan: But to build everything bespoke for the application– is there a reason for that?

Hema Raghavan: Think about it. When you're actually building—let's say you're building a new e-commerce website—I think Shopify and some of these other platforms let you do things more standard, and maybe they have ways to standardize. But if you are an– let's say, how do you start a company today? You go, and you buy code your way with Claude, or Codex, or something like that, and then you're ready with a website in a day or two. It creates a back store for you with Postgres, and then that's where you start. And then, almost everyone, even in a pre-coding revolution era started there. So, I think it's this hodgepodge, and nobody's really created tooling layer that says, you know what? Let me just insert myself to be that one Gen AI, API gateway.

Ryan Donovan: I suspect there's some folks working on it, but I think it's just so easy to just get Postgres and drop it into the backend and be like, ' that's an application for now.'

Hema Raghavan: Exactly. And you think about these things much later, when you're a bigger company.

Ryan Donovan: I saw a video a while back that was– all these hyperscalers, when they hit a certain point, they rewrote their entire application for 10 to 15% performance gains. Do you think there's an equivalent for that, the data layer?

Hema Raghavan: And you mean on the warehouse layer? Like just–

Ryan Donovan: Yeah, like when somebody, their Postgres backend no longer does it for them. They have to start over and build out a more robust data layer.

Hema Raghavan: So, I'll break it down into different components. In the core data layer, I think databases have been around for so long that for every scaling problem that you hit, it is still more cost-effective to go buy another solution than to find a ton of database experts to go build something unique for you. Okay? So, I think that database has been commoditized. But some parts of it, like I find telemetry, like logging systems, as you get bigger and bigger, a lot of the SaaS providers start choking. And then, your costs blow up, and then you start thinking about, 'hey, maybe I need to do this in-house.' So, I see the scale and a choke point happening for logging. But again, DISC is something that I think S3 or even ADLS and all of them scale, I don't think anybody wants to maintain their own disc anymore, right?

Ryan Donovan: Yeah.

Hema Raghavan: So, I think there's competence of it that in the build by spectrum, on the data layer, that people have to reconsider at some points. And there are some that [will] always have a better service provider.

Ryan Donovan: Yeah. You don't hear about a lot of people building their own database unless they are very big companies.

Hema Raghavan: Yes, exactly. Exactly.

Ryan Donovan: But you mentioned the sort of logging, and it seems like that's where it breaks into more specialized databases, right? You have time series databases.

Hema Raghavan: Yes.

Ryan Donovan: You start having vector, maybe you have a key value store for your production or something. Do you think that sort of breaking into specializations is healthy for a company or is it sort of another problem that they have to manage?

Hema Raghavan: When my team comes up with a new design, the first thing I ask is, 'can we not have one more database?' One more source of truth that we have to maintain. Because again, you have to keep all of these different sources in sync. And especially with vector databases. So when you're often storing something like an embedding vector, and embedding vectors just go out of sync when the model, is different.

Ryan Donovan: Right?

Hema Raghavan: So, all of that just becomes a nightmare to maintain. So, the fewer you can have, the better it is. And then, I think that's the simple answer. I do think, and coming back to our topic, which is there's a lot of exploration that's starting to happen in the AI space, which is, you'll have one team which is going all rag and vector DB, another, which is just saying prompt engineering is the way to go, and everything is going out in a prompt. So, also, the lack of standardization is starting to create its own set of problems.

Ryan Donovan: Yeah.

Hema Raghavan: But it's a trade-off. I had the engineering team, I play the CTO role, and at some point, I want to have my teams experiment because I want to know what the possibilities are, but how do I reign it in once the exploration phase is over?

Ryan Donovan: Yeah, and it definitely feels like the industry as a whole has been experimenting a lot over the past few years. But that makes it hard for engineering teams to plan and to build something consistent. Do you think we're at the start of the sort of retreat from experimentation phase? Or is there more experimentation to be had?

Hema Raghavan: I think organizations that have been experimenting for, like I say, a couple years in, probably have some ideas of where things work, right? They may say that, hey, actually prompt engineering works just fine for me, and we've not gotten ROI from rag. Others may say otherwise. And it really is use case specific. But I think the clean architectures are going to matter. And I don't know how CTOs are going to reel it all in, because if they don't, you'll have this pipeline sprawl, because you've had all this vibe coded code with different databases, different patterns, sitting out there, and then how do you make this all maintainable? And I always tell my team there's three things we care about a lot: one is just our velocity; the second is how many P zero bugs are we having per release; and then, what's our mean time to root cause? Ultimately, those are our true north as a team, and that's what we look at every week. So, I think as long as people follow that principle, the MTTR metric, the mean time to root cause, and the P zero bugs are gonna matter a lot.

Ryan Donovan: Yeah. I think with the agentic and the vibe coating, a lot of people will go for the first one, the velocity, and sacrifice the other two. Are there ways to– [you] talk[ed] about governance by architecture is [there a] way to build that into the architecture to prevent people from stepping on their own foot?

Hema Raghavan: Yeah. So, we're finding that the coding agents are pretty good if you give them an opinion. So, we actually have started inserting agent-stored MD files into our repos, where we've started actually– so, the agent actually stays within the design patterns that we want as a team to keep these metrics where we want it to be.

Ryan Donovan: Yeah. A lot of the industry seems like having to make very explicit some of the tacit knowledge that all your senior engineers and architects had.

Hema Raghavan: Yes.

Ryan Donovan: This is a silly leading question: do you find that as an easy process?

Hema Raghavan: This is a great question because we've been discussing what does it mean to be a senior engineer and a junior engineer in this world, and how do we make sure we're not creating a lot of debt right? Because they're in a crazy new age. It's super exciting. We wanna embrace it. So, what does it mean? I think yes, the senior engineers are not only guiding the junior engineers, but they're also guiding the agents. And one senior engineer told me, 'I have to make sure that the agent doesn't take over the thinking of my junior engineer.' The junior engineers able to reason. Ask an agent, 'why did you choose a synchronous API over an asynchronous API for this design choice?' So, suddenly junior engineers have to grow up much faster because they have to be asking the agent design choice questions.

Ryan Donovan: You can't just accept the answer. You have to do the work of understanding it, right?

Hema Raghavan: Yes. Exactly.

Ryan Donovan: So, how do you get a junior engineer to learn that process? Because I think a lot of juniors come into a company and they're like, 'oh, these people are senior. They know what they're talking about. I don't wanna look dumb.' How do you get them to be a little more vocally dumb with the agents?

Hema Raghavan: We've changed our interview process to actually hire engineers that understand some of these topics. Our interview process actually has a take-home problem. We'll say go spend couple of hours, code this with an agent. Actually, from an inclusion and diversity perspective, also, it's a great thing, 'cause it's take-home problem. You're not on the gun. But then, we bring them in and then we say, 'explain what the agent did. Why did it choose this? Was it at a good choice?' So, you're already starting to filter for the high-caliber candidates. In the past, when you came out of college, the first thing all of the fan companies looked for was, can this person code fast? Do they know their algorithms class? I think that's gone. It's now– the code fast is the agent. Now it's, can you read this code? Do you understand the design choices? Have you given it enough test cases that you actually trust the output of this? So, all of that is the new pattern. So, the interview process is elevated to a new class of engineers.

Ryan Donovan: Yeah. That's interesting. Nobody's whiteboarding bubble sort anymore.

Hema Raghavan: Exactly. Exactly. It doesn't matter.

Ryan Donovan: I did a podcast, the previous one, where they defined a senior engineer as somebody who can take an open-ended problem and define the problem, and not just come up with a solution. Do you agree with that?

Hema Raghavan: So, senior engineer is someone who can take an open-ended problem, right? Is that–

Ryan Donovan: Yeah. Instead of just getting a well-defined problem.

Hema Raghavan: I think that's always been the case. In fact, even in my pre-Gen AI, pre-coding agent error, it was: you always had the first recording interview, which was just simple whiteboard, how fast do you go? And then, that was replaced by Coda Pad, and all of these other tools. But then, the leveling interview was always, 'how well do you think?' And how open-ended can the problem be? And often we would just give a product problem, or we would just say, 'design a database,' if you're an infrastructure engineer, but we left a lot of specs unspecified. So, do they ask you the questions? Is it read heavy? Is it write heavy? So, we would look [at] do they come back and ask you those questions? And it's the same whether if you're a product engineer, are they asking you product questions? If it's infra engineer, are they asking you infra questions? With an AI modeling engineer, are they asking you model assumption questions? Yeah.

Ryan Donovan: For the future, whatever we're defining the future as right now, how do you expect the sort of governance layer the pipeline sprawl, the things we've been talking today, to progress?

Hema Raghavan: Yeah. We'll have tooling that gives CIOs and CISOs visibility into API and egress goals. I think that just has to happen and get standardized, and some companies are there, some are not. But I actually think, even as we onboard vendors, we'd even be asking them, 'do you have that? Can I actually go see where all my data is going?' I see that, organizationally, as becoming a must have. I do also see somewhere cost and governance also coming in, because we just seem to be sending data and tokens all over the place, and we're in this high experimentation phase. It's possible that we are going to even look for engineers who understand that maybe this can be sold by open model that you deploy internally within your parameter, versus going outside. So, those are gonna be some of the design choice questions that will become important for engineering teams, and even part of the engineering design review process.

Ryan Donovan: Is there anything else you wanna talk about before we hit the outro?

Hema Raghavan: I think all I wanna say is it's an exciting time to be in engineering and I think we have to embrace the change, but I think it's also a time to take lessons from the past that we've known of places we've been burned on, choices that we've made, and not repeat past mistakes. We'll make new mistakes, but let's not forget the past mistakes when we are going at a blazing speed.

Ryan Donovan: That's right. Let's all make some new mistakes. New mistakes only.

Hema Raghavan: Exactly. Exactly.

Ryan Donovan: All right folks. So, it's that time of the show where we shout out somebody who came on to Stack Overflow, drop some knowledge, shared some curiosity, and earned themselves a badge. So, today we are shouting out a Populous Badge winner. Somebody who dropped an answer that was so good, it outscored the accepted answer. Congrats to @BalusC for answering, 'How to sanitize HTML code to prevent XSS attacks in Java or JSP?' If you're curious about that, we'll have an answer for you in the show notes. I'm Ryan Donovan. I edit the blog and host the podcast here at Stack Overflow. If you have questions, concerns, topics, et cetera, for me to cover, please email me at podcast@stackoverflow.com, and if you want to reach out to me directly, you can find me on LinkedIn.

Hema Raghavan: Thank you. I'm Hema Raghavan, and I head the engineering team at Kumo.ai. I have 20 plus years of experience in the AI field, and if you've enjoyed this podcast, you can reach out to me on LinkedIn, or you can email me at hema@kumo.ai.

Ryan Donovan: All right. Thank you for listening, everyone, and we'll talk to you next time.
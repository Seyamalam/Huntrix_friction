# After all the hype, was 2025 really the year of AI agents?

Source: https://stackoverflow.blog/2026/03/20/was-2025-really-the-year-of-ai-agents/

They discuss whether “the year of the agent” came to fruition, why companies are moving away from AGI, and the major blockers for AI adoption, from distrust in non-deterministic systems to enterprise data-readiness.

HumanX 2026, one of the biggest AI conferences of the year, is happening in San Francisco from April 6-9. Listen to our episodes recorded on the conference floor last year.

Connect with Stefan on LinkedIn.

Congrats to Populist badge recipient humblebee for winning the badge for their answer to How to open/run YML compose file?.

[Intro Music]

Ryan Donovan: Hello everyone, and welcome to the Stack Overflow Podcast, a place to talk all things software and technology. I'm your host, Ryan Donvan, and today we were talking about last year in AI, the changes that AI has wrought. My guest for that is Stefan Weitz, the CEO of the HumanX Conference. Welcome to the show, Stefan. Welcome back, I should say.

Stefan Weitz: Thanks so much. Yeah, I know. We did it last year, I think at this show. It was a lot of fun.

Ryan Donovan: Yeah, a lot has changed in the last year since the last conference. AI agents, MCP is everywhere. I think the first time I heard 'MCP' spoken was at the conference. What's your take on the change in the AI landscape?

Stefan Weitz: Oh, boy, that's definitely a broad question. I would say, looking at it from a developer standpoint, agents- 2025 at HumanX, we had multiple folks on stage saying that it was the year of the agent. Everyone's gonna see it, everyone's gonna use it. It was gonna be amazing. I think what we all saw was that as typical in the AI space right now, there was a lot of, you could call it 'hyperbole,' you could call it just full 'projection,' you could call it the best of believing in the product so much that you think it can get there. And I think what we saw in 2025 was agents failed to deliver on that kind of utopia that we all were promised. And I think it reminds me of both the Bill Gates' quotes, I was there, he'd say, 'we always underestimate how much we can get done in the short term and overestimate–' no, I'm butchering it, now. We overestimate how much we can get done in the short-term and underestimate how much we can get in the long-term.

Ryan Donovan: Yeah.

Stefan Weitz: I think it's the same kind of thing we're seeing with agents, which is that it seemed like it made sense at the time, and it still did, but I think now, the good news is we're outta that phase of, 'these are gonna replace everyone's jobs tomorrow.' And I'm moving into a more of a rational phase of, 'oh, for certain disciplines, these things make a lot of sense.' Obviously for coding. How we're coding these days has changed significantly. But that, to me, what's interesting, what's changed so much since last year, is just the aperture is opening up on the agent ecosystem. Because as people get more into it, they realize things like, 'huh. Boy, management of these things is not very easy and multi-node agents isn't very easy. My infrastructure isn't set up to handle these things correctly, and I really can't let them run for 20 hours straight and then let them take action.' So, we've now gotten past the, 'cool, these things are really interesting and useful,' to, 'okay, yes, and,' what do we do to actually make them functional and really useful for organizations?

Ryan Donovan: Right. What does this look like in the real world? And a lot of the sort of guest pitches I get now are talking about AI infrastructure.

Stefan Weitz: Yeah.

Ryan Donovan: Which seems like the big kind of sticking point for a lot of people. Obviously, with agents, platform teams are gonna be important, but what are you seeing that is the sort of push in infrastructure right now?

Stefan Weitz: Yeah, that's a good question. If I go back to it, it is like I mentioned earlier, there are three, I think, big gaps in the technology stack for agents. One is the infrastructure itself. So, AI-ready data centers with advanced networking. You don't have a lot of that yet, especially in legacy organizations. Multi-node architectures for agents working in concert, that doesn't really exist either at that point. Support across clouds and across edge locations, that doesn't really exist. And so, that's the first piece is: infrastructure there is missing. The second one is just the trust deficit. So, you have, as you've seen the numbers, 80+ percent of all devs plan on doing something with AI encoding this year, but the number has doubled to almost half of devs don't actually trust it.

Ryan Donovan: Right.

Stefan Weitz: So, you have this dichotomy there. And look, we all know all these models are non-deterministic. They behave unpredictably. Multi-cloud, multi-age environments introduce just a ton of new vulnerabilities. And so, without trust, which is a second big piece, adoption's gonna stall. So, we have to have trust infrastructure. And then, the third thing is I'm pounding on for forever, since I started getting into this event, it's just machines at the end of the day, still need machine-readable data. And most enterprise data isn't positioned to be consumed by an agent. It lives in ETL pipelines, or in batch jobs, or in flat files, or god forbid, green screen, AS400 sitting somewhere in the basement, and they require transformation to make an agent accessible. And again, you've got this challenge of companies jumping in headfirst to the agentic future without really understanding, 'oh man, I don't really have my data to a place where a machine could read it.' And obviously, we're seeing new systems come online that will purport to read not unstructured data in interesting ways, and organizing catalog. I've seen some really interesting applications of that. But it's always better to have clean data than have a machine attempt to go figure out what you actually meant. Those are the sorts of big things I think that are missing.

Ryan Donovan: Yeah, I think a couple things: I think the trust statistic you dropped might've been from our DEB survey last year–

Stefan Weitz: I think it was. It was, that's right. It was, yeah.

Ryan Donovan: Yeah. That was an interesting one. But then, the structured data, I think, I remember AI was gonna remove the need for structured data, right?

Stefan Weitz: I know.

Ryan Donovan: It could just process raw data and figure it out from there.

Stefan Weitz: That was something we were all promised. And with my investor hat on, I certainly got enough pitches for that, as well. And look, again, in certain narrow domains, it can. That's the thing. If you think the biggest shift– let me step back for a moment. The biggest shift I think that we probably saw in 2025-2026 is that the AGI discussion rapidly became kind of passe. And I think people– we may get there, and it may still be an incredible goal to strive to achieve, but at the end of the day, where we see the real efficacious applications of the stuff are in verticals, narrowly scoped vertical areas. Whether it's customer service, and some legal, and healthcare. So, I think that's the biggest change for me at least, was that we've, at least for now, stopped talking as much about the golden fleece here out in the distance, and are more focused on what's actually working, which there are lots of agents that actually do great work, and they're cool. And so, it's there, but that's a big difference. Yeah.

Ryan Donovan: Yeah. I appreciate the fall off of the AGI talk, 'cause the AGI talk always seemed like this was a pie in the sky. And even at generative AI's lowest, most basic level, where it's a great natural language interface–

Stefan Weitz: Yeah.

Ryan Donovan: Great semantic search... that's really useful.

Stefan Weitz: Yeah, I'd agree.

Ryan Donovan: Yeah. It doesn't need to be a PhD candidate.

Stefan Weitz: Yeah. The challenge is everyone's selling, everyone's raising evaluations that are far more than a great NLP, or a great semantic search, or something else. I'm with you. 20 transformers were always more about human computer interaction models changing versus them being a new form of intelligence, because at the end of the day, just definitionally they aren't, they're stochastic parrots. I think that's the phrase that's been tossed around, but I agree with you. To me, the big unlock—and that's what we're seeing the devs and seeing in code—is we're seeing the ability for people like me. I haven't written a good code in 15 years. I used to write a lot of code, and now I don't write code anymore because I'm terrible at it. But people like me now, the ability to get back in and actually take what I had learned when I was a CS guy and a developer, move those principles forward into the kind of cogenerative dev space– I longer have to remember all the syntax, but I can still remember security principles, database structures. I can look at the table that the system recommends and go, ' that doesn't make any sense.' That's the unlock with the LLMs that really allowed a lot of people to actually be developer adjacent than before, which is fun.

Ryan Donovan: Yeah. But I think, like you said, you still have to understand the principles behind it.

Stefan Weitz: Exactly.

Ryan Donovan: I've talked to folks where it's, this is another level of abstraction for computer science, for programming, where it's, no, not many people are writing assembly code anymore.

Stefan Weitz: Nope, that's right.

Ryan Donovan: But I think, talk to some folks who are using the agentic programming, it's like, you have to still define the software pretty hard in the prompts.

Stefan Weitz: Yeah. Oh my gosh. Oh yeah. I've spent much time with the different platforms. I love doing it. My team doesn't like me doing this. I've then built products and said, 'hey, let's launch this.' And they just go, 'please stop sending us vibe-coded apps to launch.' And that's the problem, as everyone knows, they look phenomenal, and then you deploy into production and you're like, 'oh my God, they don't scale properly.' Or, one of them I did had this insane—which I wasn't looking at the time—the data model that it put forth– granted, I kept adding things in, so I had to keep tweaking the data model, which is not the way you should do things. And so, it became a complete Franken-model, and it was a nightmare. And so, of course, things were burning up so many cycles in the CPU, burning up so much of bandwidth, and taking so much time. I'm like, this is an easy query. I'm looking for this. It should pull it back instantaneously. I go and check out why. I'm like, 'oh, that's why. This makes no sense. This database structure makes zero sense for anything.' But unless you have that background, unless you have been a developer, you're not gonna know, and then we try to put into production, which is why these things are failing, people who are not technical or great product managers who vibe coded something, that's when these things fall apart. Yeah. That's the problem. Yeah.

Ryan Donovan: Yeah. And I see people– the developer part, the programmer part, less important, but the engineering part, is getting more and more apart. Do you see folks coming in to address the engineering gaps as products?

Stefan Weitz: Yeah, not– yeah, so a lot of tools that are attempting to do it, even Claude Code with their most recent drop, was definitely more around helping you make really bad decisions, as it relates to architecture.

Ryan Donovan: Automated tech debt, right?

Stefan Weitz: Yeah, exactly. 'Tech debt at scale.' That's the new phrase, right? I think the thing that I have noticed more and more is that developers and people in the space are really using the markdowns, whether it's the spec markdown, or the requirements markdown, the business forms, actually treating those very seriously. I think, as all developers, you would look at the PM spec in a Word doc, kind of like, 'whatever. I'll just go build what I wanna build, and I'm sure it'll be fine at the end.' And I think that's how I worked a lot, which I'm sure PMs love me for that, but I think that's the trick, though. It's like, we're seeing people realize if you give a very good markdown file for those things, then oftentimes, you'll get a pretty good output. And so, I think that's where it gets pretty exciting. But other than that, people trying to– I've seen point solutions for security, obviously, and manageability, but no one's yet—unless I missed it, which is possible, but—I haven't seen yet somebody take on the mantle of, we're not just gonna be your intern engineer, we're gonna be your architect. That I haven't seen anyone do yet, and I don't think that they're doing at this point.

Ryan Donovan: Yeah. I think I've seen some, let's call 'em legacy products, that are like, 'hey, we've got your vibe coded thing. We'll provide the sort of platform infrastructure,' right? I think a lot of cloud companies are trying to get into that business.

Stefan Weitz: Yeah. I think about, on the spec in particular, I think of Kiro, and [inaudible], and GitHub/Spec-K it, that are really coalescing on that concept of the better you define the target, the better the agents will actually execute. So, I think we all have this vision of, I can just– this is a tangent, but really interesting to a certain extent, maybe it's not interesting. You can cut it.

Ryan Donovan: Let's try it.

Stefan Weitz: My wife yesterday on her Mac, she was trying to log in, got the password wrong for some reason, but that's revealed later, and thus has locked herself out. And of course, then you get the delays, the 15-minute, and the 2-hour, and the 4-hour. So, she's panicking, and I said, 'look, let's just go recover.' So, we hop in, go to the disc vault UI on the screen to put the recovery key in. I said, 'where's your recovery key?' She says, 'what recovery key?' I'm like, 'holy crap, this is bad.' At this point, the volume's locked. You can't do anything with it. You're screwed. So, I'm like, 'what can we do? I can't think of what to do.' And so, I go to Chat, I'm like, 'okay, am I missing anything here?' ChatGPT goes through all these ideas, all things I already figured out and knew. Finally, this morning, I had this idea to go back to the recovery assistant and click—for some reason, above where it says, 'enter recovery key,' there's a hard drive icon, and if you click on it, it takes you back to another screen where then it says, 'oh, you can also enter a password, here.' And she knew the password she entered was correct, so I knew the password was right, but because she had a Spanish language keyboard on her screen, the exclamation point was inverted, which is why she– long story. So, I said great, I'll just go ahead and do this, and it was unlocked. We're good to go. So, I went back to chat and said, ' why didn't you gimme this information?' There's good examples. And it said, 'here's why: 'cause I assumed that when you told me your password didn't work, you didn't know the password.' I'm like, 'ah.' So, my point is, and that's why it actually walked me through the logic. Here's what happened, here's what I thought you meant, 'cause you didn't specify that you think you actually have the right password, but something else happened. And same thing with agents and with coding, we assume humans assume, especially when things seem so fluid, and so exceptional when you're using 'em, you assume that it kind of knows what's in your head. And it doesn't, and that's when things go wrong. And so, I think that's a huge piece.

Ryan Donovan: And it picked a statistically likely scenario.

Stefan Weitz: Yeah. If someone says, I can't log in, all I can see is the file recovery or the file vault recovery screen, the assumption would be you forgot your password. So, it made sense not to tell me to do that. But anyway, it was [an] interesting thing this morning.

Ryan Donovan: Yeah. One of the really valuable things I've seen people do is be like, here's my idea for the software or whatever it is, what am I missing? I did that with a sort of thing i'm gonna try to vibe code, and I was like, 'what am I missing?' And it gives me this whole thing of , 'here's what you gotta think about.' It's ah, come on. I can do actual design, now.

Stefan Weitz: I know. It's like, [do] I have to go look at the Erwin diagram? Really? I thought I was past this. I thought I was past looking–

Ryan Donovan: Just gimme the thing. Don't make me build it.

Stefan Weitz: Gosh. It was funny, one of my vibe-coded apps went totally outta control, and it was churning through all my credits, I think it was a replit with. I mailed [inaudible] saying, 'can I get some more free credits?' 'Cause this is embarrassing. I wrote such a shitty app so far, such a bad app that it's burning through all my cycles, because I just didn't have the index set correctly. I'm like, 'oh, there you go. That's the problem.'

Ryan Donovan: Oh man. So, with the sort of AI industry coming to more realistic applications, more grounded– I know the last time you spoke, we talked a lot about whether AI was a bubble. Do you still think it is a bubble?

Stefan Weitz: Boy.

Ryan Donovan: I know, you're talking to everybody who might be part of this bubble, right?

Stefan Weitz: Including myself.

Ryan Donovan: Yeah.

Stefan Weitz: Yes. I still think we're in an exceptionally frothy period, where we're seeing seed rounds being raised on a– we get pitched all the time on our venture fund, and these are insanely high valuations for a good team, and a good idea. Two years ago, that good team and good idea would've got a 10th of what they are asking for now, from a valuation perspective. So, I think from that aspect, people still don't know what the ultimate potential of this technology is, 'cause we're all still figuring it out. We all are still figuring it out. And so, I think I know people, investors in particular, are so nervous that we aren't seeing the end game correctly, that we're almost willing to place bets that are somewhat irrational, just on the chance that the one that we do pick actually works out. I think that problem is, too– look, in the old days SaaS software, if you're a VC, and you're—and I'm not blaming VCs for this, 'cause it's everyone's channel, but they're the ones putting money in the market, in most cases. But in the old days, a piece of SaaS software – most VCs could understand that. They could understand, ' okay, I get how this was gonna work. I get the backend technology.' None of this was, [or] very little was truly revolutionary. And now, when you look at a lot of the people and the products that are coming out in the AI space, they do require a PhD in CompSci to even understand what they're pitching, in some cases. And so, I think you do have this– now, some VCs, you got the Luxes of the world. They're super technical, and they can drill in, and get super down in the nuts and bolts of a product, but I would say, for a lot of very successful funds and firms, they just don't have the depth. They may have operating partners and people on staff that can help, but generally, I think understanding where to invest on a SaaS product or consumer product versus the knowledge required to make a good investment decision on an AI product, generally, are very different. And I think that's where we end up with people—this is a long way of getting around to the answer—where we end up with a lot of money in the system because there's so much fear that it's, ' I don't totally grok this, but– '

Ryan Donovan: Right.

Stefan Weitz: That person, she's really good, and she's done three companies before, and she was at Google for 10 years, and she did this, and so I'm gonna trust that she's gonna pull this off again. And it's just, yeah, that's kinda what you do with VCE too, but that's where I think I see the bubble still continuing. In that space.

Ryan Donovan: Yeah. Chasing these big possibilities, chasing CVs. It's hard because VCE is inherently betting on horses, right?

Stefan Weitz: Absolutely.

Ryan Donovan: You hope it's a good horse. You research the horse, but like you said, if you can't understand what a horse is–

Stefan Weitz: All you can look at is how pretty it is, and what the jockey's name is, and you're like, 'okay, it looks pretty, and the jockey seems good, so let's go ahead and bet on it.' Yeah. I'm oversimplifying, obviously, and there are many VCs that are very technical, very good, but I think there is a lot of– and I hate to see– FOMO is such an easy cop out to say, but there is– I don't think it's FOMO per se. It's honestly [that] everyone wants to believe this is going to be transformational. I believe it will be transformational for the planet in so many different areas. Maybe not the areas we think of today, but things like ag tech, things like drug discovery, things like small molecule discovery. There are things like that that the current state of the art is intrinsically better at than any human being ever will be. So, we may not get to the point where we all have walking robots that don't try to kill us, and we have a huge UBI, and we're all sitting on beaches reading Sarge, but to throw that all out, you know, to throw out what's actually working in the space, to me, is silly. I wrote a piece on this last month on Substack. No one reads it, of course, because it's too long. But basically, it was this talk about how we need to stop with the hype, bring the temperature down, bring the hyperbole down, and actually almost have truth in advertising, because that's where we're getting, I think, wrapped around the axle in many cases, that we just get overpromised, and then get disappointed.

Ryan Donovan: Yeah. Yeah. And I've seen a few pieces of people getting nervous about the giant valuations at the sort of central players. Do you think that is a valid concern, or is that sort of like, they're centrally located, that's what's gonna happen.

Stefan Weitz: Yeah. The reality is, in this market, it's kinda like the fiber market back in the late 1990s, right? So, these do have massive capital requirements, and unless Sam's gonna take massive dilution on his next round, he's gotta keep the valuation going up. That's just the way the game has to be played. And so, I think, just again, just the way Fiber worked out, people overdeployed fiber, and they ran too many cables, and we had a glut fiber. And there was a lot of people who got wiped out in that space. I imagine we'll see the same thing in this space, even with the big centralized players. Maybe not wiped out, but certainly, just even the fortunes changing. I saw a stat yesterday, I think basically it was ChatGPT's share versus Gemini over the last year. That's what it was. And Chat clearly is still the big dog, especially with consumers. But, 12 months ago, Chat was 86.7% market share, Gemini had 5.7 today, Chat's got 64.5, and Gemini has 21.5. So, really, most of the growth in Gemini has come with the expense of Chat. And I said that not to make any judgment on the quality. It just that you're seeing the big incumbents, like the Googles of the world and the Metas of the world, who have a balance sheet that can support incredible investments. So, I do think that's why we're seeing people piling money into it, but at the same time it's, are you really gonna beat Google? It might. Google beat somebody else 25 years ago. They beat Yahoo, and they beat [inaudible], and they beat Infoseek and all those Ask Jeeves. So, absolutely, someone could. Is the current crop– are they doing it? I don't know yet.

Ryan Donovan: Yeah. That institutional advantage, they also have the platforms.

Stefan Weitz: Exactly.

Ryan Donovan: I was at re;Invent a few months ago as a publication, and it was like, AWS is releasing their own models. And I was like, why are you doing this? They have the platform, right?

Stefan Weitz: Yeah. Same thing with Google and Gemini. Exactly. I think people did derive Google when they first launched Bard, back in the day. But now, maybe it's just me, but the AI mode and Google is pretty damn good. I use it all the time, even my queries, and I used to be in search, obviously, doing the Bing search engine back in the day, and then, the average query length was 2.4 words back when I was building search. And now, in my address bar, in my browser, I'll type in a two-paragraph query, because I'm too lazy to actually go to Google. Then I hit go, and then it says, 'oh, this is obviously a high intent query for AI.' And so, it pops it over there. I've said for a long time, this is Google's to lose. They have the surface area, they've got the technology, they've got the user base, they've got the trust In most cases. To me, this is theirs to lose just because they have a lot of the components required to pull this off, but we'll see. And they're making great progress. Gemini is really impressive these days.

Ryan Donovan: So, in the pitch also, you talked about Claude Code writes much of the Claude Code, and one of the speakers of the conference is Ray Kurzweil of The Singularity.

Stefan Weitz: Singularity, yep.

Ryan Donovan: You got it. Is this our sort of like wish.com singularity?

Stefan Weitz: Woo. That's a good one. Wish.com – I hadn't thought of that in a while. That's a deep cut. There's another one, too. I can't remember the name, now.

Ryan Donovan: Temu? Temu is the other one.

Stefan Weitz: Yeah. But I was thinking more of the fact that it was built on kind of a shaky foundation. But do I think it's like that? No. I've loved Ray for so many years, and I'm so excited to have him come to the event. The fact that it's kind of– to me, I think of more like the von Neuman machines theories in science fiction. So, basically self-replicating machines and how they can basically create, obviously, more of themselves, hence the phrase 'self-replicating machines.' That's what I get excited about. I think we're a long ways away from that, still. And long can be two years in these cycles, but despite the fact that he's authoring 90% of his– I think most of his commits were AI gen’ed or claw gen’ed, and Claude's not writing most of itself. I have to imagine there's more to the story, and I still believe he's doing a crazy good job with prompts, and he's asking for things that make sense architecturally that are architecturally correct or that don't violate basic principles of software development. And so, I think there's probably still– look, yes, I can paint a picture. You gimme a canvas and paint and I can crank out a picture. It'll look terrible, but I can still say I painted a picture. But you give it to someone who's a real artist and they, with the same paint and the same materials and the same canvas, they'll do something extraordinary. I think it's the same thing with this. That stat was such a great stat because they got such great publicity and was brilliant. Boris is a great person, generally, and I would bet that he probably was really good at his prompts.

Ryan Donovan: Yeah. I think that goes back to, it's still engineering, right? You have the knowledge about what a well-engineered software is. You're not just being like, 'AI, do a Claude Code for me.'

Stefan Weitz: Can you imagine?

Ryan Donovan: Yeah.

Stefan Weitz: 'Hey, crank out version 1-3 of this. See what you come up with. Figure out the features that need to be here.' That would go off the rail so fast. We should actually do that. We should actually ask- we should give Claude Code really terrible instructions and say, 'what would you do on that? What would you do on Claude Code V? Whatever the hell it is now. Six. What if you just watch it just start creating things like paper clips, just like–

Ryan Donovan: There you go, paperclips forever.

Stefan Weitz: Exactly.

Ryan Donovan: Yeah. As of the publication of this episode, the HumanX Conference is a couple weeks away. What are you most excited about?

Stefan Weitz: A, we've got an unreal lineup of people coming.

Ryan Donovan: The creator of the internet is there.

Stefan Weitz: Exactly. Yep. The Vice President Al Gore will be there. But we also have people like Brett Taylor from lots of things, but Salesforce, Sierra, Jaime Teevan, the Chief Scientist from Microsoft, who I've known for 20 years, and she's an absolute genius. Fei-Fei Li is opening up the event with us. Matt Garman from Amazon. And we have a lot more to announce, but by this point, probably not. They'll be out there. So, that's one thing. What I love, and that is unusual for a lot of events, is that no one can pay to be on stage, and we don't take money for being on stage. And so, everyone here is truly editorially chosen. They are vetted, they know what they're gonna say. They're not pitching their product. It's not a slide deck. So, you're really getting some exceptional insights you can't get by just reading the news. Maybe Stack, but most of the cases, you won't get it. So, that's one. Second thing is: we really are leaning into focusing on job roles, which may sound really boring, but to me, our miss last year was mixing industries and job roles. I'm just like, I don't really love this. And so, now we're saying, look, here are the kind of common roles across most enterprises. There's always a marketing function. There's a technology function that splits into dev and IT, there's a sales function, there's an ops function. What are the things that each of those roles need to understand as it relates to artificial intelligence? And so, the whole agenda is literally, the whole thing, everything, all the speakers, all the sessions, everything is tagged to a role. So, if you're an ops person, you can go of course to whatever you want to, but if you just wanna focus on ops, you click a button, and you can see literally every session that's going to be designed just to answer the questions that you probably have as an operations leader. So, that's a big shift, and it took us a long time to get it right, but I'm excited about it, now.

Ryan Donovan: Cool.

Stefan Weitz: And the thing that people loved last year was just the opportunities for interaction, not just with each other, but with the speakers. So, of the 300+ speakers we have, I think over a third are gonna be doing small group sessions and chalk talks. Last year, we had Thomas from Hugging Face doing a chalk talk on the whiteboard about how to do—I don't know, I didn't see it—how to do something. You had people who I thought when they pitched this idea to me, my team pitched the idea that we're gonna have Vinod Khosla come and do a small group session. I'm like, 'he's not gonna do that. He's Vinod Khosla,' and it was really the biggest speakers. They're the ones who all did it, and it's because then they totally– afterwards, that's the best part. Talking to customers, talking to people directly, versus being on stage. So that. We're doing a lot more of that. So, a lot more interactive sessions, a lot more round tables, a lot more masterclasses. You can just sit there and watch on stage, which will be awesome, but really, the whole idea is you leave this thing with practical guidance, with partners you can trust, with vendors you can trust, with connections you can call when you get stuck, with knowledge you couldn't get from reading the web. But if we do those things well, which we will, that's the benefit of going to this versus sitting at home watching YouTube videos, which can be helpful too, but not the same thing.

Ryan Donovan: Yeah. No, I love the focus on the conversation, the sharing of knowledge, right? This is still very much in the conversation phase of just figuring out what this is.

Stefan Weitz: Oh, yeah.

Ryan Donovan: So yeah, being able to sit down and talk with folks is awesome.

Stefan Weitz: Yeah, I know. I'm excited to watch it, and I'm also excited to see the progression of, again, agentic was, and there'll be more than agentic this year. We're looking at a lot of physical stuff as well, physical AI, robotics, which is really exciting, too. I can't wait to get the– what's it called? The One? Is that what it's called? I look at every robot, and I keep threatening to buy one. I love the physical instantiation of AI, until, of course, it murders me in my sleep.

Ryan Donovan: Sure.

Stefan Weitz: But that's a whatever. I probably deserved it somehow.

Ryan Donovan: You earned it. You earned it.

Stefan Weitz: I earned it. I bought this real expensive robot, and I should have known better. But to me, the progression that we're gonna see this year on the agentic discussion is, I think, pretty exciting. So, if you think about things like memory architecture, and how we do things like forgetting better. Not we. How 'they' do things like forgetting and compacting, and how they do multi-session memory, that's gonna be a big discussion topic because I think that's a huge piece for this stuff to work correctly. How do we evaluate these things? What are the benchmarks we're using? MMLU and helm are great for comparing me against a quiz taker, or comparing a model against a quiz taker, but not great for early agents, and so how do we think about how we measure these things better? And error accumulation. How do we prevent it from compounding across a multi-chain agent infrastructure? So, there's so many things like that. And then, you brought it up earlier, MCP. I was thinking about that this morning before this, and I was thinking, what does MCP remind me of? And what it reminded me of, and it wasn't a perfect analogy, but it reminded me of Calm, back in the day when Microsoft in the 90s did Common Object model, and the idea was apps could talk to each other. And I was like, yeah, MCP is like that, where security isn't very good. There's a bunch of different problems with it. It's hard to discover. Now, MCP is passing over sentiment, and comm is passing over hard data. But it was just funny to be thinking about the problems we got into with comm, with DLL Hell and Registries, and all those problems. And insecurity was a big one, too. It's kinda the same thing with MCPs, right? Security is an afterthought. And now we have versioning at MCPs. Now, they have to ask each other, 'what version are you running?' And so, that's a big problem. So, it made me chuckle to a certain extent, like, nothing is new anymore. We're literally revisiting the same lessons from 30 years ago, and those probably came from lessons 30 years prior to comm being invented. I don't know, but it's an interesting place to be.

Ryan Donovan: Yeah. No, I always say agentic model is speed running the service-oriented architecture pipeline.

Stefan Weitz: Yeah, you're right. That's a good point. I hadn't thought about that one.

Ryan Donovan: Yeah. There you go.

Ryan Donovan: It is that time of the show where we shout out somebody who came onto Stack Overflow, dropped some knowledge, shared some curiosity, and earned themselves a badge. Today we're shouting out the winner of a Populous Badge – somebody who dropped an answer that was so good, it outscored the accepted answer. So, congrats to Humble Bee for answering, 'How to open/run YML compose file?'

Stefan Weitz: Wow.

Ryan Donovan: So, if you are curious about that, we'll have the answer for you in the show notes. I am Ryan Donovan. I host the podcast, edit the blog here at Stack Overflow. If you have questions, concerns, topics to cover, email me at podcast@stackoverflow.com, and if you wanna reach out to me directly, you can find me on LinkedIn.

Stefan Weitz: And I'm Stefan Weitz, the CEO and Co-founder of HumanX. You can also find me on LinkedIn, and of course, at humanx.co. You can find all the information about what we're doing over there, and hope to see you all in San Francisco in a couple of weeks.

Ryan Donovan: All right. Thank you all for listening, and we'll talk to you next time.
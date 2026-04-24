# I Broke SSO Trying to Center a Div. Let's Talk About Tokenmaxxing

Source: https://dev.to/jon_at_backboardio/i-broke-sso-trying-to-center-a-div-lets-talk-about-tokenmaxxing-1h10

A couple weeks ago, I tried to recenter some text on one of my side project SSO pages.

That's the whole task. Move the text. Left a bit. Right a bit. Until it's in the middle. Center. Middle.

I opened Claude Code. I said, roughly, "hey, center this."

Fifteen minutes later I was two bugs deep, SSO was broken — not the text, the whole login flow — and I'd hit my usage limit trying to unbreak the thing I broke while trying to do the thing that should've taken eight seconds in the inspector.

Palm. Face.

"Why did I just do that?"

That was tokenmaxxing. You know what tokenmaxxing is. Your timeline knows. There is an entire subgenre of VC on X right now posting, with their whole chest, variations of "if your engineers aren't maxing out their token budgets every day, they aren't working hard enough."

Three thousand likes. Quote tweets from other VCs agreeing. "This," they type. "100%," they type.

I want to say this clearly, one time, so we can move on: that is insane.

Measuring engineering effort by token spend is like measuring a chef by how much gas they burn. Congratulations. Your kitchen is on fire and the soup is fine.

Tokenmaxxing is when the answer to every problem — a typo, a bug, a bad schema, a bad decision, a bad Tuesday — is to shove more context, more tokens, more model at it until the problem stops complaining.

It is console.log("hello world") wearing a $400 watch.

A lot of people are going to read this and get defensive. I get it. I've done it.

I once built a "documentation agent" that loaded the entire repo into context and then asked, very politely, whether we had a login page.

We did. It was in routes/login.tsx.

That query cost $2.17.

I tell myself it was research.

Here's the part nobody says out loud: brute-force compute is the new jQuery.

Not in the "it works, ship it" way. In the "we're going to look at this in three years and wince" way.

We're living in a window where:

And the people selling the tokens? Thrilled. Obviously. You would be too.

I want to be clear: I love LLMs. I use them constantly. I have emotions about them I will not discuss here.

But the current game is rigged in a very specific direction. The model companies make more money when you're lazy. Your sloppy prompt is their margin. Your 90,000-token scaffolding is someone's yacht.

Meanwhile, the indie devs — the people who built the internet worth having — are getting priced out of the exact kind of tinkering that used to be free. You can't "just try something" when "just trying something" is $40.

The next big app should not require a $10k/month API budget to prototype. It used to require a laptop and an unreasonable amount of Red Bull. I'd like to go back to that, if possible.

So here is my proposal, which I will now name dramatically so it fits in a tweet.

The Token Minimizing Revolution.

It has two rules, and they are embarrassingly obvious.

We're building something right now at backboard.io that is the opposite of tokenmaxxing.

But if you've been feeling that itch — the one where you look at your API bill and think this is not a technology problem, this is a vibes problem — you are not alone.

The revolution will be small. Efficient. Under budget.
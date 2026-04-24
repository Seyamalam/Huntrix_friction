# How I Tested Malaysia's Open Data Portals with Plain English

Source: https://www.freecodecamp.org/news/how-i-tested-malaysia-s-open-data-portals-with-plain-english/

Most end-to-end test suites drive a real browser and click through an app like a user. They check whether a page renders and whether elements appear.

But they don't check whether the numbers on those elements are correct. A data-pipeline bug that shows Malaysia's population as 3.4 million instead of the real 34 million slips past every selector test in the suite.

The element still exists. A number still renders. The page still looks right. But the bug ships and sits there until a human notices.

I work as a full-stack engineer. Writing end-to-end (E2E) tests with Playwright and unit tests with Jest is part of my day job. I also use Playwright MCP, the bridge between AI assistants like Claude and a running browser, when I need to generate first-draft test code or debug a flow.

None of that tooling closes the maintenance tax on selector-based suites. Every E2E suite I keep alive at work accumulates data-testid selectors, waitForSelector calls, and tests that break because someone renamed a button.

Bug0's Breaking Apps Hackathon gave me a pretext to try something different. Over a weekend, I built an automated regression suite for Malaysia's three public open data portals, data.gov.my, OpenDOSM, and KKMNow, using Passmark, Bug0's open-source AI-driven Playwright library.

The tests are written in plain English. Two AI models verify each assertion. A third arbitrates disagreements.

How to write an E2E test that checks whether a dashboard's numbers are correct, not only whether the page renders

A specific assertion pattern (range-bounded KPIs) that catches an entire class of data-pipeline bug that selector tests miss, with working examples ready to copy

A cross-field math assertion that takes one sentence in Passmark and around a hundred lines of code without it

How Passmark's own failure explanations became my debugging loop (the single biggest shift in how I'll write E2E tests going forward)

The real limits: a 14% cache-hit rate, a dependency on OpenRouter, and what two-model voting fails to catch

The hackathon suggested targets like Vercel Commerce, Cal.com, and Hashnode. These all would've been solid picks.

But I wanted to test something local and closer to my day-to-day work instead. I also wanted a data-heavy site where the numbers on screen have to be accurate, as I work with numbers too on a daily basis.

Malaysia has three public open-data portals:

data.gov.my, run by MAMPU, the government's digital transformation agency

OpenDOSM, run by the Department of Statistics

KKMNow, run by the Ministry of Health

They're public, no authentication required, with documented APIs. Seemed like a good fit for an automated test suite. The data on them is what Malaysians use every day, so accuracy isn't optional.

Passmark is a Playwright library where the tests read like specs. Here's an example:

There are no selectors, no data-testid, and no page.locator(). The assertion expresses what I care about, in the words I would use with a colleague.

On the first run, an AI agent drives the page and caches the resolved Playwright action to Redis. Every run after that replays at native Playwright speed with zero model calls.

When the UI changes and a cached action fails, the AI re-engages only for that step. Two assertion models (Claude and Gemini) vote. A third model arbitrates disagreements.

Range-bounded assertions were the first shape of test I wrote, and the one I came back to most across the suite.

The idea is straightforward: check that a number on the page falls inside a sensible range, not that a specific element exists.

The image below is the Playwright report from the population spec, with all four range-bounded assertions passing.

The range-bounded population test is the one that shows Passmark's real value.

Traditional Playwright asserts DOM structure. It confirms that an element with class kpi-total contains the text 34.2 million. That tells you the page rendered, not whether the number makes sense.

A bug that shows Malaysia's population as 3.42 million sails past any selector test. The DOM is correct. The number renders. Nothing breaks in the conventional sense.

Passmark reads the page, evaluates the claim, and fails because 3.42 million falls outside the sane range. Two models vote. A hallucination by one model alone produces no false pass.

Voting defends against one model misreading the page. It doesn't defend against both models misreading the page the same way. If Claude and Gemini both parse "32.4 million" as "3.24 million" because of the same unusual spacing in the DOM, they agree, they vote pass, and the bug ships.

The mitigation is assertion design. Write assertions that are hard to misread. A range check ("between 20 million and 40 million") is harder for a model to get wrong than a prose check ("roughly 34 million"). Numerical bounds leave less room for interpretation than adjectives. The more your assertion looks like a unit test written in English, the less room the models have to disagree.

Range-bounded assertions are a good first step. They catch "is this number in the right ballpark?" But they don't catch "do these numbers agree with each other?"

For that, you need cross-field math. If a dashboard shows a total population and a breakdown by gender, those two things are supposed to agree. Male plus female should equal total. Ethnicity breakdown percentages should sum to 100.

Try writing that in vanilla Playwright. You need selectors for the headline number, selectors for the breakdown components, number parsing with a comma-aware regex, and a margin calculation. Seventy to a hundred lines of code to verify three invariants a primary school student would call obvious.

The Passmark version is one spec. I ran it against Kawasanku's live country view. All three assertions passed in 1.4 minutes. Passmark's annotation, verbatim:

"The headline total population figure 'Malaysia has a population of 32,447,385 people.' is visible, and 'Gender And Age Distribution' is shown, which implies a breakdown by sex (male, female) will be available."

Two models read the page, extract the numbers, do the arithmetic, and agree. When the dashboard changes layout in three months, the same assertion still works, because it never named a selector.

This is the class of test I want running against every dashboard product that I touch. Financial totals matching their line items. Percentages that sum to 100. Inventory counts equal to the sum of warehouse locations. This rarely gets checked today, because writing the check by hand outweighs the perceived value of running it.

Every passing spec after run 1 came from Passmark telling me, in plain English, why my assertion didn't match the page.

Here are three examples from run 1:

For dataset-detail.spec.ts, I asserted "an API usage snippet (curl or JS) is shown." knowingly that the page is using Python and I wanted to see what the result was. Passmark replied:

"The page contains API usage snippets, but they are specifically for Python using the requests library. There are no snippets provided in curl or JavaScript formats."

The page had snippets. I asked for the wrong languages. Fix: accept any language.

For dashboard-population.spec.ts, I asserted "a chart visualizing population by age or ethnicity is rendered." Passmark replied:

"The current page displays charts for vital statistics such as Live Births, Deaths, and Natural Increase over time, but there is no chart visualizing population specifically by age groups or ethnicity."

The charts are there. Not the slice I guessed. Fix: accept any chart about population.

For kkmnow/hospital-utilisation.spec.ts, I asserted a "headline bed-utilisation percentage." Passmark replied:

"While there are multiple bed-utilisation percentages listed in tables and rankings further down the page, there is no prominent, top-level headline KPI figure displaying the overall bed-utilisation percentage."

The numbers are there. I had asked for a layout the designers didn't build.

This is the killer feature: Passmark's failure messages aren't stack traces. They're explanations. The AI read the page, compared it against my words, and pointed me at the fix. Nothing like a selector-based test throwing TimeoutError: waiting for locator.

Once I saw the pattern, the loop became my main technique. Here's the procedure:

Read the failure message word for word. Don't skim.

Trust it as a description of what is on the page. The AI has read the page. Your assertion has not.

Rewrite the assertion so it matches what's on the page. Broaden, narrow, or restate.

Run it again.

The discipline is to not argue with the tool. The page is what the page is. Your assertion is what is wrong. Every time I tried to "fix" the page (convinced my assertion was right and the site was broken), I lost some time. Every time I took the failure message at face value and rewrote, the test passed on the next run.

This is the one of the changes in how I'll write E2E tests going forward. The feedback loop is the tool. Every failed assertion is a draft of the correct one.

On catalogue-search.spec.ts, Claude voted fail (72% confidence) and Gemini voted pass (100% confidence) on the same assertion. I had written the assertion in a way that read two ways.

Passmark escalated to an arbiter model through OpenRouter. The call came back with a 504 from Cloudflare. The arbiter never ran. The suite failed the spec.

This is an honest limit, not a fluke. Any CI that runs Passmark depends on OpenRouter's availability. External gateway errors happen. My fix for the final run was a global retry wrapper around the OpenRouter call, and the 504 stopped being a problem in practice.

If you bring this to production CI, plan for retries and treat OpenRouter outages as a first-class failure mode in your runbook.

This failure taught me something about assertion design: my wording was ambiguous. Claude's reading was reasonable. Gemini's reading was reasonable. When you write tests in English, being precise about what you mean is part of writing a good test.

On the KKMNow spec, I had waitUntil: "A utilisation metric is visible". The page showed the section label "Hospital Bed Utilisation (%)" before the numbers finished loading. The wait step saw the label, decided the condition was met, and moved on. By the time the numbers rendered, the test had run out of time. Once the page was fully loaded, the range assertions would have passed on content.

"The page displays multiple bed-utilisation percentages within the specified range (0% to 120%). For example, the ranked list shows Perlis at 93.1% and Melaka at 88.2%."

The lesson: your waitUntil wording needs the same care as your assertion wording. Both are read by AI. A vague wait is as bad as a vague assertion.

Each of the three runs took about 20 minutes on 13 specs with a single worker. The hackathon's pooled OpenRouter key covered the AI costs, so I have no personal dollar figure to report.

The more useful cost finding is what gets cached.

Five steps out of roughly 35 were cached across three runs. A 14% cache-hit rate. The Passmark README explains why:

Only steps that produced a single tool call get cached. Multi-step sequences are considered non-deterministic.

Most of my steps described multi-tool sequences. "Open the area selector and choose Selangor, then wait for navigation" becomes click, wait, verify. Those don't cache by design.

This matters for your budget. An 86% miss rate means 86% of your steps call a model on every run. The cost model is per-tool-call via OpenRouter.

To estimate your own bill: count non-atomic steps in your suite, multiply by your chosen model's per-call price at current OpenRouter rates, and the product is your recurring cost per run. Cache rate is cost rate.

The fix is authoring discipline. Split compound descriptions into atomic steps. Treat cache fill rate as a metric you track, not an implementation detail to ignore. A suite with 80% atomic steps costs a fifth of a suite with 14%.

The idea here is bigger than Passmark.

Check that the numbers on your dashboards make sense. Most teams don't. They should.

A one-line assertion like "the headline number is between 20 million and 40 million" catches several classes of bug regular tests miss.

Here are four common ones:

The data pipeline divided by the wrong thing, so the number on screen is ten times too small.

A timezone bug made yesterday's total show up under tomorrow's date.

The data never refreshed, so users are looking at last week's numbers.

A locale flip swapped commas and decimals, so 1,234,567 is now reading as 1.234567.

Civic portals were my target. The pattern applies anywhere a dashboard shows numbers. Fintech reports, SaaS analytics, healthcare metrics, e-commerce admin panels. Any screen where a number is supposed to mean something.

Most of these numbers never get tested. Writing the check by hand is tedious. You need a selector to find the number, code to parse it, code to handle units, and a margin calculation. Fifty lines for one check. Nobody bothers.

You don't need Passmark to steal the idea. The same check works in plain Playwright with page.evaluate and number parsing. The Passmark version is just more efficient to write and readable by anyone on the team, not only engineers.

Passmark works. Across three runs I went from 4 of 13 passing to 12 of 13 without touching a selector, guided by the tool's own feedback.

Still, the caveats are real:

On a cold cache, every step waits for a model. Budget more wall-clock time than a selector suite.

In my suite only 14% of steps cached. The other 86% pays model cost on every run. Authoring discipline (atomic steps) is the difference between cents and dollars per run.

Two-model voting doesn't protect against both models misreading the same way. Write assertions that are hard to misread.

Every assertion depends on OpenRouter's availability. External gateway errors need a retry strategy before this runs in CI.

What stuck with me: Passmark didn't make me better at Playwright. It made me write tests I would have skipped otherwise.

What I imagine myself doing at work:

Run a small nightly Passmark suite against the critical dashboards, focused on range and freshness checks.

Keep traditional Playwright and Jest for everything that has to be fast and deterministic.

Treat every Passmark failure message as a specification of the page, not an error to argue with.

Try this, even if you never touch Passmark. Pick a number on a dashboard you work with. Write a test that fails if the number is outside a sane range. See what breaks. That is the whole pattern and purpose of this article.
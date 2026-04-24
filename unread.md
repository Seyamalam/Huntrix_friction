# Unread

## Core Idea

**Unread** is a webapp that turns articles, essays, papers, and user-written posts into an intentional reading experience.

Most reading tools try to remove friction: summarize faster, skim faster, consume faster. Unread takes the opposite position.

> The future of reading should not be faster. It should be harder to fake understanding.

Unread does not use AI to read for the user. It uses AI to create useful cognitive friction, forcing the user to slow down, reflect, and prove partial understanding before moving forward.

## Stance

We spent years using technology to remove friction from information. Now everyone can consume more and understand less.

Unread adds friction back where it belongs:

> Between seeing words and claiming knowledge.

## Product Positioning

Unread is an anti-summary app.

It is not:

- An AI summarizer
- A speed reading tool
- A content feed optimized for endless scrolling
- A replacement for reading

It is:

- A slow reading environment
- A comprehension checkpoint system
- A social publishing platform for thoughtful posts
- A tool for turning reading into active thinking

## User Modes

Unread should support two main ways to use the product.

### 1. Bring Your Own Article

Users can paste an article, essay, blog post, transcript, research paper excerpt, or long text into the app.

The app then transforms that text into a guided reading session.

Flow:

- User pastes text or article URL
- App extracts and cleans the content
- AI splits the content into meaningful sections
- User reads one section at a time
- User must answer a reflection prompt before moving on
- AI checks whether the answer shows real understanding
- At the end, the app generates an understanding map

This mode is useful for students, researchers, newsletter readers, professionals, and anyone who wants to actually understand something instead of skimming it.

### 2. Post on Unread

Users can also publish directly on Unread.

Instead of posting normal articles into a passive feed, authors publish posts that become interactive reading experiences by default.

Flow:

- Author writes or uploads a post
- Author chooses the intended reading mode
- AI suggests section breaks and checkpoint questions
- Author can edit the questions before publishing
- Readers move through the post section by section
- Readers leave reflections, summaries, or answers as they progress
- The post collects not just views, but evidence of understanding

This turns Unread into a publishing platform where the important metric is not clicks. It is comprehension.

## Key Product Claim

Normal platforms ask:

> Did people click?

Unread asks:

> Did people understand?

## Primary User Types

### Readers

Readers use Unread to slow down and understand difficult or important material.

Needs:

- Less distraction
- Better comprehension
- More retention
- Help noticing when they are pretending to understand

### Writers

Writers use Unread to publish thoughtful posts and see whether readers actually understood their ideas.

Needs:

- More meaningful engagement than likes
- Better feedback on unclear sections
- A way to make writing interactive without building a course

### Students

Students use Unread for essays, assigned readings, research papers, and exam prep.

Needs:

- Active recall
- Comprehension checks
- Notes and summaries
- Help identifying weak spots

### Teams

Teams use Unread for internal docs, strategy memos, proposals, and technical documents.

Needs:

- Proof that people read important docs
- Fewer fake approvals
- Better discussion quality
- Shared understanding before meetings

## MVP

The first version should be narrow and demoable.

### Reader MVP

- Paste article text
- Split text into 5 to 8 chunks
- Show only one chunk at a time
- Ask user to summarize each chunk in one sentence
- AI grades summary as `clear`, `vague`, or `incorrect`
- If clear, unlock the next section
- If vague or incorrect, ask one follow-up question
- At the end, generate a final understanding report

### Publishing MVP

- User can create a post inside Unread
- Post has title, author name, and body
- AI suggests chunks and reflection prompts
- Published post can be opened as a guided reading session
- Readers complete checkpoints as they read
- Post shows completion rate and comprehension rate

## AI/LLM Integration

The AI should not be the thing that does the reading.

The AI should be the thing that creates resistance.

### 1. Smart Chunking

AI splits the article into meaningful sections instead of arbitrary paragraphs.

Good chunks should represent:

- A claim
- A supporting argument
- An example
- A shift in topic
- A counterpoint
- A conclusion

### 2. Reflection Questions

AI asks a question after each section.

Example questions:

- What is the author claiming here?
- What evidence is being used?
- What assumption does this section rely on?
- What changed from the previous section?
- What would someone disagree with here?
- Explain this section in plain language.

### 3. Summary Check

User writes a one-sentence summary.

AI checks whether the summary is:

- `clear`: captures the main idea
- `vague`: says something generic but not enough
- `incorrect`: misses or distorts the point

### 4. Socratic Pushback

If the user gives a shallow answer, AI does not immediately reveal the correct answer.

It asks a follow-up:

> You mentioned the topic, but not the author's claim. What is the author actually arguing?

This keeps the friction useful instead of punitive.

### 5. Misconception Detection

AI identifies where the user misunderstood the section and gives a small correction.

Example:

> You understood that the author is criticizing speed, but missed that the real target is fake comprehension, not speed itself.

### 6. Friction Dial

Users choose how strict the reading experience should be.

Modes:

- **Light:** mostly reflection, easy unlocks
- **Serious:** accurate summaries required
- **Brutal:** follow-up questions, recall tests, and stricter grading

### 7. Final Understanding Map

At the end, AI generates a map of what the user understood.

The map can include:

- Key claims
- Supporting evidence
- Counterpoints
- User's strongest answers
- User's weakest answers
- Concepts to revisit

### 8. Recall Test

After the reading session, AI asks questions from earlier sections to test retention.

This prevents the user from only understanding the most recent section.

## Core User Flow

### Bring Your Own Article Flow

1. User clicks "Start Reading."
2. User pastes text or URL.
3. App creates a guided reading session.
4. User reads the first section.
5. User answers a prompt.
6. AI checks the answer.
7. App either unlocks the next section or asks a follow-up.
8. User finishes all sections.
9. App generates an understanding report.

### Publish a Post Flow

1. User clicks "Create Post."
2. User writes or pastes a post.
3. AI suggests sections and prompts.
4. User edits or accepts the structure.
5. User publishes the post.
6. Readers complete it as a guided session.
7. Author sees comprehension analytics.

## Data Model

### User

- `id`
- `name`
- `email`
- `createdAt`

### Post

- `id`
- `authorId`
- `title`
- `body`
- `sourceType`: `original`, `pasted`, `url`
- `visibility`: `private`, `public`, `unlisted`
- `createdAt`
- `updatedAt`

### ReadingSession

- `id`
- `userId`
- `postId`
- `mode`: `light`, `serious`, `brutal`
- `status`: `active`, `completed`
- `currentChunkIndex`
- `createdAt`
- `completedAt`

### Chunk

- `id`
- `postId`
- `index`
- `text`
- `mainClaim`
- `prompt`

### Response

- `id`
- `sessionId`
- `chunkId`
- `answer`
- `grade`: `clear`, `vague`, `incorrect`
- `feedback`
- `createdAt`

### UnderstandingReport

- `id`
- `sessionId`
- `keyClaims`
- `strengths`
- `weakSpots`
- `recommendedReview`
- `createdAt`

## Key Screens

### Home

Purpose:

- Explain the stance quickly
- Let users start with their own article
- Let users browse public Unread posts

Hero copy:

> Read slower. Understand more.

Secondary copy:

> Unread is an anti-summary app that uses AI to make reading harder to fake.

Primary actions:

- Start with your own article
- Browse posts
- Create a post

### Reading Setup

Inputs:

- Paste text
- Paste URL
- Choose friction mode

Output:

- Generated reading session preview

### Guided Reader

Components:

- Current section
- Progress indicator
- Reflection prompt
- Answer input
- AI feedback
- Unlock next section button

Important constraint:

- The next section should stay hidden until the user engages with the current one.

### Create Post

Components:

- Title input
- Body editor
- AI-generated chunk preview
- Editable prompts
- Publish button

### Understanding Report

Components:

- Overall comprehension score
- Key claims understood
- Weak sections
- Strongest answer
- Suggested review questions
- Shareable completion card

### Author Dashboard

Components:

- Views
- Completion rate
- Average comprehension score
- Most misunderstood section
- Best reader reflections

## Hackathon Demo Script

### Before

Show a normal AI summarizer:

> Paste article. Get instant summary. Feel informed. Forget everything.

### After

Show Unread:

> Paste article. Read slowly. Answer questions. Struggle. Leave with actual understanding.

Demo steps:

1. Paste a short article.
2. Let Unread split it into sections.
3. Read section one.
4. Submit a vague answer.
5. Show AI pushing back.
6. Submit a better answer.
7. Unlock next section.
8. Finish and show the understanding map.

## Product Metrics

Unread should avoid vanity metrics where possible.

Bad metrics:

- Views
- Likes
- Time on page by itself
- Number of articles summarized

Better metrics:

- Completion rate
- Clear answer rate
- Revision rate
- Recall score
- Most misunderstood sections
- Number of readers who changed their answer after pushback

## Design Principles

### 1. No Infinite Feed

Unread should not encourage passive scrolling.

### 2. Hidden Progression

Users should not see the whole article at once by default. The app should reveal content deliberately.

### 3. Friction With Purpose

The app should never add friction just to be annoying. Every pause, question, or lock should create better understanding.

### 4. AI as Tutor, Not Shortcut

AI should help the user think, not think for the user.

### 5. Understanding Over Engagement

The product should reward comprehension, not compulsive usage.

## Possible Tech Stack

Simple hackathon stack:

- Next.js or Vite React frontend
- Supabase, Firebase, or Convex for auth and database
- OpenAI or another LLM provider for chunking, prompts, grading, and reports
- Readability parser for URL extraction
- Tailwind or plain CSS for fast UI

## LLM Prompt Jobs

### Chunking Prompt

Input:

- Full article text

Output:

- 5 to 8 chunks
- Main claim for each chunk
- Reflection prompt for each chunk

### Grading Prompt

Input:

- Chunk text
- Prompt
- User answer

Output:

- Grade: `clear`, `vague`, or `incorrect`
- Short feedback
- Follow-up question if needed

### Report Prompt

Input:

- All chunks
- All user answers
- All grades

Output:

- Key claims understood
- Weak spots
- Recommended review
- Final comprehension summary

## Risks

### Risk: The app feels like homework

Mitigation:

- Keep prompts short
- Make feedback fast
- Use beautiful progress design
- Let users choose friction mode

### Risk: AI grading feels unfair

Mitigation:

- Show why an answer was graded
- Allow users to revise
- Avoid harsh language
- Use "not yet" framing instead of failure framing

### Risk: Users want summaries anyway

Mitigation:

- Only provide the final summary after completion
- Make the summary based on what the user understood, not just the article

## Best One-Liners

- Unread is an anti-summary app.
- Read slower. Understand more.
- AI should not read for you. It should stop you from pretending you did.
- The future of reading should not be faster. It should be harder to fake understanding.
- Unread adds friction between seeing words and claiming knowledge.

## Next Build Plan

Priority order:

1. Build a working reading setup flow on the homepage.
2. Build the guided reader loop with hidden next sections.
3. Persist pasted posts, reading sessions, chunks, and responses to InstantDB.
4. Replace local chunking and grading with AI jobs.
5. Connect authenticated users to saved rooms and reports.
6. Replace the placeholder public posts route with real published Unread posts.
7. Add route protection for private rooms and author dashboards.
8. Seed a polished demo post for hackathon and investor walkthroughs.
9. Tighten mobile layout, keyboard states, and empty states.
10. Commit cleanup and keep generated shadcn files out of unrelated changes.

## Implementation Todo

- [x] Document the next build plan in `unread.md`.
- [x] Create a concrete implementation todo list.
- [x] Implement the most important product slice: local reading setup.
- [x] Implement locked guided-reader progression.
- [x] Add local reflection grading for `clear`, `vague`, and `incorrect`.
- [x] Add a basic understanding report from completed checkpoints.
- [ ] Persist rooms and responses to InstantDB.
- [ ] Generate chunks, prompts, grades, and reports with an LLM.
- [ ] Add URL extraction for article imports.
- [ ] Build the authenticated saved-rooms dashboard.
- [ ] Build the public post reader route.
- [ ] Add real author analytics.

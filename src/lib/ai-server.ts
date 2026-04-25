import type { StreamChunk } from "@tanstack/ai";
import { chat, toServerSentEventsResponse } from "@tanstack/ai";
import { openRouterText } from "@tanstack/ai-openrouter";
import { createServerFn } from "@tanstack/react-start";
import { AI_PRIMARY_MODEL, type AiJobPayload, aiModels } from "@/lib/ai-jobs";

export const streamAiServer = createServerFn({ method: "POST" })
	.inputValidator((payload: AiJobPayload) => payload)
	.handler(async ({ data }) => {
		if (!process.env.OPENROUTER_API_KEY) {
			return new Response("AI unavailable.", { status: 503 });
		}

		const abortController = new AbortController();

		return toServerSentEventsResponse(createAiStream(data, abortController), {
			abortController,
			headers: {
				"Cache-Control": "no-store",
				"X-Accel-Buffering": "no",
				"X-Content-Type-Options": "nosniff",
			},
		});
	});

async function* createAiStream(
	payload: AiJobPayload,
	abortController: AbortController,
): AsyncIterable<StreamChunk> {
	let emittedText = false;

	for (const model of aiModels) {
		const stream = chat({
			adapter: openRouterText(model as never),
			abortController,
			maxTokens: getMaxTokens(payload.job),
			messages: [{ role: "user", content: buildPrompt(payload) }],
			modelOptions: {
				reasoning: {
					effort: model === AI_PRIMARY_MODEL ? "minimal" : "none",
					exclude: false,
					max_tokens:
						model === AI_PRIMARY_MODEL
							? getReasoningBudget(payload.job)
							: undefined,
				},
				temperature: payload.job === "grade" ? 0.15 : 0.35,
			},
			systemPrompts: [
				"You power Unread, an anti-summary reading product.",
				"Return only strict JSON. Do not wrap it in markdown. Do not add commentary.",
				"Keep reasoning brief. The final answer must be visible JSON text.",
				"Use concise language. Do not solve the reading for the user.",
			],
		} as never) as AsyncIterable<StreamChunk>;

		for await (const chunk of stream) {
			if (chunk.type === "TEXT_MESSAGE_CONTENT") emittedText = true;
			if (chunk.type === "RUN_ERROR" && !emittedText) {
				break;
			}
			yield chunk;
		}

		if (emittedText) return;
	}

	yield {
		type: "RUN_ERROR",
		timestamp: Date.now(),
		error: { message: "AI unavailable." },
		message: "AI unavailable.",
	} as StreamChunk;
}

function getMaxTokens(job: AiJobPayload["job"]) {
	if (job === "chunk") return 4200;
	if (job === "report") return 2400;
	return 1800;
}

function getReasoningBudget(job: AiJobPayload["job"]) {
	if (job === "chunk") return 192;
	return 128;
}

function buildPrompt(payload: AiJobPayload) {
	if (payload.job === "chunk") {
		return `Create a guided Unread session from this source.

Rules:
- Split into 5 to 8 meaningful sections.
- Preserve the author's wording inside each section text.
- Each section needs a mainClaim and a reflection prompt.
- Prompts should create cognitive friction, not summarize for the reader.
- Mode is ${payload.mode}; stricter modes should ask more exact questions.

Return JSON:
{"chunks":[{"index":0,"text":"...","mainClaim":"...","prompt":"..."}]}

Title: ${payload.title}

Source:
${payload.body}`;
	}

	if (payload.job === "grade") {
		return `Grade this reader answer for the current Unread checkpoint.

Grades:
- clear: captures the main claim in the reader's own words.
- vague: relevant but generic, thin, or missing the actual claim.
- incorrect: misses or distorts the section.

Mode: ${payload.mode}

Return a JSON object with:
- grade: exactly one of clear, vague, incorrect.
- feedback: one or two specific sentences about this answer.
- followUp: one short Socratic question if grade is vague or incorrect.

Do not copy these field instructions into the JSON values.

Section:
${payload.chunkText}

Prompt:
${payload.prompt}

Reader answer:
${payload.answer}`;
	}

	return `Generate the final Unread understanding report from the reader's actual answers.

Return JSON:
{"keyClaims":["..."],"strengths":["..."],"weakSpots":["..."],"recommendedReview":["..."],"summary":"..."}

Sections:
${payload.chunks
	.map(
		(chunk) =>
			`Section ${chunk.index + 1}
Claim: ${chunk.mainClaim ?? ""}
Prompt: ${chunk.prompt}
Text: ${chunk.text}`,
	)
	.join("\n\n")}

Reader answers:
${payload.responses
	.map(
		(response) =>
			`Section ${response.section}
Grade: ${response.grade}
Answer: ${response.answer}
Feedback: ${response.feedback ?? ""}`,
	)
	.join("\n\n")}`;
}

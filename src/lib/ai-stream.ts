import type { StreamChunk } from "@tanstack/ai";
import {
	type AiChunks,
	type AiGrade,
	type AiJobPayload,
	type AiReport,
	aiChunkSchema,
	aiGradeSchema,
	aiReportSchema,
	parseAiJson,
} from "@/lib/ai-jobs";
import { streamAiServer } from "@/lib/ai-server";

type AiJobResult<T extends AiJobPayload["job"]> = T extends "chunk"
	? AiChunks
	: T extends "grade"
		? AiGrade
		: AiReport;

const schemas = {
	chunk: aiChunkSchema,
	grade: aiGradeSchema,
	report: aiReportSchema,
};

export async function streamAiJob<T extends AiJobPayload["job"]>(
	payload: Extract<AiJobPayload, { job: T }>,
	onDelta?: (delta: string) => void,
): Promise<AiJobResult<T>> {
	const response = await streamAiServer({ data: payload });

	if (!response.ok || !response.body) {
		throw new Error("AI unavailable.");
	}

	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	let output = "";

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;

		buffer += decoder.decode(value, { stream: true });
		const events = buffer.split("\n\n");
		buffer = events.pop() ?? "";

		for (const event of events) {
			const line = event.split("\n").find((item) => item.startsWith("data: "));
			if (!line) continue;

			const raw = line.slice(6).trim();
			if (!raw || raw === "[DONE]") continue;

			const chunk = JSON.parse(raw) as StreamChunk;
			if (chunk.type === "RUN_ERROR") {
				throw new Error("AI unavailable.");
			}
			if (chunk.type === "TEXT_MESSAGE_CONTENT" && chunk.delta) {
				output += chunk.delta;
				onDelta?.(chunk.delta);
			}
		}
	}

	const schema = schemas[payload.job];
	return schema.parse(parseAiJson(output)) as AiJobResult<T>;
}

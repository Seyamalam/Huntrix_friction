import type { StreamChunk } from "@tanstack/ai";
import {
	type AiChunks,
	type AiGrade,
	type AiJobPayload,
	type AiReport,
	normalizeAiChunks,
	normalizeAiGrade,
	normalizeAiReport,
	parseAiJson,
} from "@/lib/ai-jobs";
import { streamAiServer } from "@/lib/ai-server";

type AiJobResult<T extends AiJobPayload["job"]> = T extends "chunk"
	? AiChunks
	: T extends "grade"
		? AiGrade
		: AiReport;

export async function streamAiJob<T extends AiJobPayload["job"]>(
	payload: Extract<AiJobPayload, { job: T }>,
	onDelta?: (delta: string, kind: "text" | "thinking") => void,
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
			const streamEvent = readAiEvent(event);
			if (streamEvent) {
				if (streamEvent.kind === "text") output += streamEvent.delta;
				onDelta?.(streamEvent.delta, streamEvent.kind);
			}
		}
	}

	if (buffer.trim()) {
		const streamEvent = readAiEvent(buffer);
		if (streamEvent) {
			if (streamEvent.kind === "text") output += streamEvent.delta;
			onDelta?.(streamEvent.delta, streamEvent.kind);
		}
	}

	try {
		const parsed = parseAiJson(output);
		return normalizeAiResult(payload.job, parsed) as AiJobResult<T>;
	} catch (error) {
		console.warn("Unread AI parse failed", { error, output });
		throw new Error("AI response was incomplete. Try again.");
	}
}

function readAiEvent(event: string) {
	const line = event.split("\n").find((item) => item.startsWith("data: "));
	if (!line) return "";

	const raw = line.slice(6).trim();
	if (!raw || raw === "[DONE]") return "";

	const chunk = JSON.parse(raw) as StreamChunk;
	if (chunk.type === "RUN_ERROR") {
		throw new Error(getRunErrorMessage(chunk));
	}
	if (chunk.type === "TEXT_MESSAGE_CONTENT" && chunk.delta) {
		return { delta: chunk.delta, kind: "text" as const };
	}
	if (chunk.type === "REASONING_MESSAGE_CONTENT" && "delta" in chunk) {
		const delta = typeof chunk.delta === "string" ? chunk.delta : "";
		if (delta) return { delta, kind: "thinking" as const };
	}
	return undefined;
}

function normalizeAiResult(job: AiJobPayload["job"], parsed: unknown) {
	if (job === "chunk") return normalizeAiChunks(parsed);
	if (job === "grade") return normalizeAiGrade(parsed);
	return normalizeAiReport(parsed);
}

function getRunErrorMessage(chunk: StreamChunk) {
	if (
		"error" in chunk &&
		chunk.error &&
		typeof chunk.error === "object" &&
		"message" in chunk.error &&
		typeof chunk.error.message === "string"
	) {
		return chunk.error.message;
	}
	if ("message" in chunk && typeof chunk.message === "string") {
		return chunk.message;
	}
	return "AI unavailable.";
}

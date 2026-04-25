import { z } from "zod";

export const AI_PRIMARY_MODEL = "liquid/lfm-2.5-1.2b-thinking:free";
export const AI_FALLBACK_MODELS = ["liquid/lfm-2.5-1.2b-instruct:free"];

export const aiModels = [AI_PRIMARY_MODEL, ...AI_FALLBACK_MODELS] as const;

export const aiChunkSchema = z.object({
	chunks: z
		.array(
			z.object({
				index: z.number().int().min(0),
				mainClaim: z.string().min(8),
				prompt: z.string().min(8),
				text: z.string().min(40),
			}),
		)
		.min(5)
		.max(8),
});

export const aiGradeSchema = z.object({
	feedback: z.string().min(8),
	followUp: z.string().min(8).optional(),
	grade: z.enum(["clear", "vague", "incorrect"]),
});

export const aiReportSchema = z.object({
	keyClaims: z.array(z.string().min(3)).min(1).max(8),
	recommendedReview: z.array(z.string().min(3)).min(1).max(8),
	strengths: z.array(z.string().min(3)).min(1).max(8),
	summary: z.string().min(12),
	weakSpots: z.array(z.string().min(3)).max(8),
});

export type AiChunks = z.infer<typeof aiChunkSchema>;
export type AiGrade = z.infer<typeof aiGradeSchema>;
export type AiReport = z.infer<typeof aiReportSchema>;

export type AiJobPayload =
	| {
			body: string;
			job: "chunk";
			mode: "light" | "serious" | "brutal";
			title: string;
	  }
	| {
			answer: string;
			chunkText: string;
			job: "grade";
			mode: "light" | "serious" | "brutal";
			prompt: string;
	  }
	| {
			chunks: Array<{
				index: number;
				mainClaim?: string;
				prompt: string;
				text: string;
			}>;
			job: "report";
			responses: Array<{
				answer: string;
				feedback?: string;
				grade: "clear" | "vague" | "incorrect";
				section: number;
			}>;
	  };

export function parseAiJson(text: string): unknown {
	const trimmed = text.trim();
	const withoutFence = trimmed
		.replace(/^```(?:json)?\s*/i, "")
		.replace(/\s*```$/i, "")
		.trim();

	try {
		return JSON.parse(withoutFence);
	} catch {
		const candidate = extractJsonObject(withoutFence);
		if (candidate) {
			return JSON.parse(candidate);
		}
		throw new Error("AI returned unreadable JSON.");
	}
}

function extractJsonObject(text: string) {
	const start = text.indexOf("{");
	if (start < 0) return "";

	let depth = 0;
	let inString = false;
	let escaped = false;

	for (let index = start; index < text.length; index += 1) {
		const char = text[index];

		if (escaped) {
			escaped = false;
			continue;
		}

		if (char === "\\") {
			escaped = true;
			continue;
		}

		if (char === '"') {
			inString = !inString;
			continue;
		}

		if (inString) continue;

		if (char === "{") depth += 1;
		if (char === "}") depth -= 1;

		if (depth === 0) {
			return text.slice(start, index + 1);
		}
	}

	return "";
}

export function normalizeAiGrade(input: unknown): AiGrade {
	const data = input && typeof input === "object" ? input : {};
	const record = data as Record<string, unknown>;
	const rawGrade = String(record.grade ?? record.result ?? "").toLowerCase();
	const grade = rawGrade.includes("clear")
		? "clear"
		: rawGrade.includes("incorrect")
			? "incorrect"
			: "vague";
	const feedback = cleanString(
		record.feedback ?? record.reason ?? record.explanation,
		"The AI checked this answer, but returned very brief feedback.",
	);
	const followUp =
		grade === "clear"
			? undefined
			: cleanOptionalString(
					record.followUp ??
						record.follow_up ??
						record.question ??
						record.nextQuestion,
				);

	return aiGradeSchema.parse({
		feedback,
		followUp,
		grade,
	});
}

export function normalizeAiChunks(input: unknown): AiChunks {
	const data = input && typeof input === "object" ? input : {};
	const record = data as Record<string, unknown>;
	const source = Array.isArray(record.chunks)
		? record.chunks
		: Array.isArray(record.sections)
			? record.sections
			: [];
	const chunks = source.slice(0, 8).map((item, index) => {
		const chunk = item && typeof item === "object" ? item : {};
		const chunkRecord = chunk as Record<string, unknown>;
		return {
			index,
			mainClaim: cleanString(
				chunkRecord.mainClaim ?? chunkRecord.main_claim ?? chunkRecord.claim,
				`Section ${index + 1}`,
			),
			prompt: cleanString(
				chunkRecord.prompt ?? chunkRecord.question,
				"What is the author actually claiming here?",
			),
			text: cleanString(chunkRecord.text ?? chunkRecord.content, ""),
		};
	});

	return aiChunkSchema.parse({ chunks });
}

export function normalizeAiReport(input: unknown): AiReport {
	const data = input && typeof input === "object" ? input : {};
	const record = data as Record<string, unknown>;

	return aiReportSchema.parse({
		keyClaims: cleanStringArray(record.keyClaims ?? record.key_claims, [
			"Completed checkpoint answers",
		]),
		recommendedReview: cleanStringArray(
			record.recommendedReview ?? record.recommended_review,
			["Revisit any section that required a follow-up"],
		),
		strengths: cleanStringArray(record.strengths, [
			"Finished the guided reading session",
		]),
		summary: cleanString(
			record.summary,
			"The reader completed the session. Review weak spots before treating the text as fully understood.",
		),
		weakSpots: cleanStringArray(record.weakSpots ?? record.weak_spots, []),
	});
}

function cleanString(value: unknown, fallback: string) {
	const text = typeof value === "string" ? value.trim() : "";
	return text || fallback;
}

function cleanOptionalString(value: unknown) {
	const text = typeof value === "string" ? value.trim() : "";
	return text || undefined;
}

function cleanStringArray(value: unknown, fallback: string[]) {
	if (!Array.isArray(value)) return fallback;
	const items = value
		.map((item) => (typeof item === "string" ? item.trim() : ""))
		.filter(Boolean)
		.slice(0, 8);
	return items.length ? items : fallback;
}

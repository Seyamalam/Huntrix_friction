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
		const start = withoutFence.indexOf("{");
		const end = withoutFence.lastIndexOf("}");
		if (start >= 0 && end > start) {
			return JSON.parse(withoutFence.slice(start, end + 1));
		}
		throw new Error("AI returned unreadable JSON.");
	}
}

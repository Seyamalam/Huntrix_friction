import { describe, expect, it } from "vitest";
import {
	normalizeAiChunks,
	normalizeAiGrade,
	normalizeAiReport,
	parseAiJson,
} from "./ai-jobs";

describe("parseAiJson", () => {
	it("extracts the first JSON object from thinking-prefixed model output", () => {
		const parsed = parseAiJson(
			'<think>checking the answer</think>\n{"grade":"vague","feedback":"Too broad.","followUp":"Which exact claim is missing?"}',
		);

		expect(parsed).toEqual({
			feedback: "Too broad.",
			followUp: "Which exact claim is missing?",
			grade: "vague",
		});
	});

	it("parses fenced JSON output", () => {
		const parsed = parseAiJson(
			'```json\n{"grade":"clear","feedback":"Specific enough."}\n```',
		);

		expect(parsed).toEqual({
			feedback: "Specific enough.",
			grade: "clear",
		});
	});
});

describe("normalizeAiGrade", () => {
	it("keeps copied grade schema text saveable as vague", () => {
		const result = normalizeAiGrade({
			feedback: "This answer is close but thin.",
			followUp: "What is the concrete claim?",
			grade: "clear|vague|incorrect",
		});

		expect(result).toEqual({
			feedback: "This answer is close but thin.",
			followUp: "What is the concrete claim?",
			grade: "vague",
		});
	});

	it("replaces copied field instructions with usable feedback", () => {
		const result = normalizeAiGrade({
			feedback: "one or two specific sentences about this answer",
			followUp: "one short Socratic question if grade is vague or incorrect",
			grade: "clear|vague|incorrect",
		});

		expect(result).toEqual({
			feedback:
				"The answer is relevant but still too generic about the section's claim.",
			followUp:
				"What exact claim from the section is your answer trying to restate?",
			grade: "vague",
		});
	});
});

describe("normalizeAiChunks", () => {
	it("accepts sections aliases from smaller models", () => {
		const result = normalizeAiChunks({
			sections: Array.from({ length: 5 }, (_, index) => ({
				claim: `Section ${index + 1} has one main claim`,
				content:
					"This is enough source text for the guided reading checkpoint to be valid.",
				question: "What is the author actually claiming in this section?",
			})),
		});

		expect(result.chunks).toHaveLength(5);
		expect(result.chunks[0]).toMatchObject({
			index: 0,
			mainClaim: "Section 1 has one main claim",
			prompt: "What is the author actually claiming in this section?",
		});
	});
});

describe("normalizeAiReport", () => {
	it("fills report defaults without failing a save", () => {
		const result = normalizeAiReport({
			key_claims: ["The reader named the main idea"],
			recommended_review: ["Revisit the follow-up section"],
			strengths: ["Completed the session"],
			summary: "The reader finished with a mostly clear understanding.",
		});

		expect(result).toEqual({
			keyClaims: ["The reader named the main idea"],
			recommendedReview: ["Revisit the follow-up section"],
			strengths: ["Completed the session"],
			summary: "The reader finished with a mostly clear understanding.",
			weakSpots: [],
		});
	});
});

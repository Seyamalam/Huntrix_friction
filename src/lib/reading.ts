export type FrictionMode = "light" | "serious" | "brutal";
export type Grade = "clear" | "vague" | "incorrect";

export type ReadingChunk = {
	id: string;
	index: number;
	mainClaim: string;
	markdown?: string;
	prompt: string;
	text: string;
};

export type ReaderResponse = {
	answer: string;
	feedback: string;
	grade: Grade;
	revisionCount: number;
};

export const sampleText = `Most reading tools promise speed. They compress articles into summaries, make highlights searchable, and reward the feeling of staying current. The problem is that speed can hide weak comprehension. A reader can recognize the topic without understanding the claim.

Unread takes the opposite approach. It treats difficulty as a useful signal. If a paragraph is important enough to read, it is important enough to explain in your own words before you move forward.

This does not mean every article should feel like an exam. Useful friction should be short, specific, and tied to the actual idea in front of the reader. A good checkpoint asks what changed, what the author is claiming, or what evidence supports the point.

The author also needs evidence. Views show that a page opened. Likes show that a reader reacted. Neither proves that the idea landed. Reflections, revisions, and missed sections create a better picture of whether the writing worked.

The goal is not to punish readers for being confused. The goal is to catch fake understanding early, while the text is still open and the reader can repair the gap.`;

const stopWords = new Set([
	"about",
	"after",
	"again",
	"also",
	"because",
	"before",
	"being",
	"between",
	"could",
	"every",
	"first",
	"their",
	"there",
	"these",
	"thing",
	"those",
	"through",
	"which",
	"while",
	"would",
	"reader",
	"readers",
	"reading",
]);

export function createChunks(input: string): ReadingChunk[] {
	const paragraphs = input
		.split(/\n{2,}/)
		.map((paragraph) => paragraph.trim().replace(/\s+/g, " "))
		.filter(Boolean);
	const sentenceUnits =
		input
			.trim()
			.replace(/\s+/g, " ")
			.match(/[^.!?]+[.!?]+|[^.!?]+$/g)
			?.map((sentence) => sentence.trim())
			.filter(Boolean) ?? [];
	const units = paragraphs.length >= 5 ? paragraphs : sentenceUnits;
	const targetCount = Math.min(8, Math.max(5, Math.ceil(units.length / 2)));
	const chunkSize = Math.max(1, Math.ceil(units.length / targetCount));

	return chunkArray(units, chunkSize)
		.slice(0, 8)
		.map((parts, index) => {
			const text = parts.join(" ");
			const keywords = extractKeywords(text);

			return {
				id: `chunk-${index}`,
				index,
				mainClaim: createMainClaim(text, keywords),
				markdown: text,
				prompt: createPrompt(index),
				text,
			};
		});
}

export function gradeAnswer(
	answer: string,
	chunk: Pick<ReadingChunk, "text">,
	mode: FrictionMode,
): Pick<ReaderResponse, "feedback" | "grade"> {
	const cleanAnswer = answer.trim().toLowerCase();
	const words = cleanAnswer.split(/\s+/).filter(Boolean);
	const minimumWords = mode === "light" ? 8 : mode === "serious" ? 13 : 18;
	const requiredOverlap = mode === "brutal" ? 2 : 1;
	const keywords = extractKeywords(chunk.text).slice(0, 8);
	const overlap = keywords.filter((keyword) => cleanAnswer.includes(keyword));

	if (words.length < Math.floor(minimumWords * 0.55)) {
		return {
			grade: "incorrect",
			feedback:
				"Too thin to trust yet. Name the actual claim, not just the topic.",
		};
	}

	if (words.length < minimumWords || overlap.length < requiredOverlap) {
		return {
			grade: "vague",
			feedback: `You are close, but the answer needs more contact with the section. Work in ${keywords.slice(0, 3).join(", ") || "a concrete phrase from the text"}.`,
		};
	}

	return {
		grade: "clear",
		feedback:
			"Specific enough. You named the idea in your own words, so the next section can unlock.",
	};
}

export function buildReport(
	chunks: Array<Pick<ReadingChunk, "id" | "index" | "mainClaim">>,
	responses: Record<string, ReaderResponse>,
) {
	const responseList = Object.values(responses);
	const clearAnswers = responseList.filter(
		(response) => response.grade === "clear",
	).length;
	const revisions = responseList.reduce(
		(total, response) => total + response.revisionCount,
		0,
	);
	const weakSections = chunks
		.filter((chunk) => {
			const response = responses[chunk.id];
			return response && response.grade !== "clear";
		})
		.map((chunk) => chunk.index + 1);
	const keyClaims = chunks
		.filter((chunk) => responses[chunk.id]?.grade === "clear")
		.map((chunk) => chunk.mainClaim)
		.slice(0, 5);

	return {
		clearAnswers,
		keyClaims,
		recommendedReview:
			weakSections.length > 0
				? weakSections.map((section) => `Revisit section ${section}`)
				: ["Run a recall check tomorrow"],
		revisions,
		strengths:
			clearAnswers > 0
				? [`Cleared ${clearAnswers} section${clearAnswers === 1 ? "" : "s"}`]
				: ["No clear checkpoint yet"],
		summary:
			weakSections.length > 0
				? `Strong pass with ${clearAnswers} clear checkpoints, but sections ${weakSections.join(", ")} should be revisited.`
				: `Clean pass: ${clearAnswers} sections cleared with ${revisions} revision${revisions === 1 ? "" : "s"}.`,
		weakSections,
	};
}

export function extractKeywords(text: string) {
	const counts = new Map<string, number>();
	const words = text
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, " ")
		.split(/\s+/)
		.filter((word) => word.length > 5 && !stopWords.has(word));

	for (const word of words) {
		counts.set(word, (counts.get(word) ?? 0) + 1);
	}

	return [...counts.entries()]
		.sort((a, b) => b[1] - a[1])
		.map(([word]) => word)
		.slice(0, 10);
}

function chunkArray<T>(items: T[], size: number): T[][] {
	const chunks: T[][] = [];

	for (let index = 0; index < items.length; index += size) {
		chunks.push(items.slice(index, index + size));
	}

	return chunks;
}

function createMainClaim(text: string, keywords: string[]) {
	const firstSentence = text.match(/[^.!?]+[.!?]+/)?.[0]?.trim() ?? text;

	if (keywords.length < 2) return firstSentence;

	return `This section seems to turn on ${keywords.slice(0, 2).join(" and ")}.`;
}

function createPrompt(index: number) {
	const prompts = [
		"What is the author actually claiming here?",
		"Explain this section in one precise sentence.",
		"What changed from the previous idea?",
		"What evidence or assumption matters most here?",
		"What would a careless reader miss?",
	];

	return prompts[index % prompts.length];
}

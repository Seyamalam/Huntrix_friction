import { type FrictionMode, sampleText } from "@/lib/reading";

export type PostVisibility = "private" | "public" | "unlisted";

export const defaultPostTitle = "The cost of fake understanding";
export const defaultPostBody = sampleText;

export const modeCopy: Record<
	FrictionMode,
	{ body: string; progress: number }
> = {
	light: {
		body: "Good for essays and newsletters. Short reflection unlocks are allowed.",
		progress: 34,
	},
	serious: {
		body: "The default mode. Readers must name the claim before moving on.",
		progress: 66,
	},
	brutal: {
		body: "Strict checkpoints for research papers, memos, and exam prep.",
		progress: 92,
	},
};

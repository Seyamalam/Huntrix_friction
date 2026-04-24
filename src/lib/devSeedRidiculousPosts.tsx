import { id } from "@instantdb/react";
import { Database, Trash, WarningCircle } from "@phosphor-icons/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { createChunks } from "@/lib/reading";

const POST_COUNT = 100;
const MIN_WORDS = 500;
const MAX_WORDS = 50_000;

const titleParts = [
	"False fluency",
	"The argument nobody checked",
	"Notes against skimming",
	"A memo on slow agreement",
	"How certainty gets manufactured",
	"The reader who nodded too early",
	"Evidence before endorsement",
	"Against passive comprehension",
	"Working notes on attention",
	"The meeting after nobody read",
];

const vocabulary = [
	"attention",
	"claim",
	"evidence",
	"revision",
	"memory",
	"argument",
	"checkpoint",
	"reader",
	"friction",
	"understanding",
	"context",
	"assumption",
	"counterpoint",
	"signal",
	"interpretation",
	"summary",
	"confusion",
	"decision",
	"meeting",
	"margin",
	"pressure",
	"source",
	"paragraph",
	"proof",
	"recall",
	"thesis",
	"response",
	"section",
	"question",
	"review",
];

type SeedStatus =
	| { kind: "idle" }
	| { created: number; kind: "running"; total: number }
	| { created: number; kind: "done"; total: number }
	| { created: number; kind: "error"; message: string; total: number };

export function DevSeedRidiculousPostsButton({ userId }: { userId?: string }) {
	const [status, setStatus] = useState<SeedStatus>({ kind: "idle" });
	const [deleteStatus, setDeleteStatus] = useState("");
	const postsQuery = db.useQuery(
		userId
			? {
					posts: {
						author: {},
						chunks: {},
						readingSessions: {
							responses: {},
							understandingReport: {},
						},
					},
				}
			: null,
	);
	const ownedPosts = (
		(postsQuery.data as DevPostsData | undefined)?.posts ?? []
	).filter((post) => post.author?.id === userId);

	async function seedPosts() {
		if (!userId || status.kind === "running") return;

		const confirmed = window.confirm(
			`Create ${POST_COUNT} public posts with bodies from ${MIN_WORDS.toLocaleString()} to ${MAX_WORDS.toLocaleString()} words? This is intentionally excessive dev data.`,
		);

		if (!confirmed) return;

		setStatus({ created: 0, kind: "running", total: POST_COUNT });

		for (let index = 0; index < POST_COUNT; index += 1) {
			try {
				await createPublishedPost(index, userId);
				setStatus({
					created: index + 1,
					kind: index + 1 === POST_COUNT ? "done" : "running",
					total: POST_COUNT,
				});
			} catch (error) {
				setStatus({
					created: index,
					kind: "error",
					message: getErrorMessage(error),
					total: POST_COUNT,
				});
				return;
			}
		}
	}

	async function deleteOwnedPosts() {
		if (!userId || status.kind === "running") return;

		const confirmed = window.confirm(
			`Delete ${ownedPosts.length} posts you own, including their chunks, sessions, responses, and reports? This cannot be undone.`,
		);

		if (!confirmed) return;

		setDeleteStatus("Deleting posts...");

		try {
			const tx = ownedPosts.flatMap((post) => {
				const sessions = post.readingSessions ?? [];
				const sessionDeletes = sessions.flatMap((session) => [
					...(session.responses ?? []).map((response) =>
						db.tx.responses[response.id].delete(),
					),
					...(session.understandingReport?.id
						? [
								db.tx.understandingReports[
									session.understandingReport.id
								].delete(),
							]
						: []),
					db.tx.readingSessions[session.id].delete(),
				]);
				const chunkDeletes = (post.chunks ?? []).map((chunk) =>
					db.tx.chunks[chunk.id].delete(),
				);

				return [
					...sessionDeletes,
					...chunkDeletes,
					db.tx.posts[post.id].delete(),
				];
			});

			if (tx.length > 0) {
				await db.transact(tx);
			}

			setDeleteStatus(`Deleted ${ownedPosts.length} posts.`);
		} catch (error) {
			setDeleteStatus(getErrorMessage(error));
		}
	}

	const running = status.kind === "running";
	const deletingDisabled =
		!userId || running || postsQuery.isLoading || ownedPosts.length === 0;

	return (
		<div className="mt-3 border border-amber-300/30 bg-amber-300/10 p-3">
			<div className="flex items-start gap-2">
				<WarningCircle className="mt-0.5 size-4 text-amber-200" />
				<div>
					<p className="text-xs font-semibold text-amber-100">Dev seed tool</p>
					<p className="mt-1 text-xs leading-5 text-[#d6cbbb]">
						Generates 100 public lorem posts. Remove
						<code className="mx-1 text-amber-100">
							src/lib/devSeedRidiculousPosts.tsx
						</code>
						later.
					</p>
				</div>
			</div>
			<Button
				type="button"
				disabled={!userId || running}
				onClick={seedPosts}
				className="mt-3 h-10 w-full justify-start bg-amber-200 text-[#11110d] hover:bg-amber-300"
			>
				<Database className="size-4" />
				{running ? "Generating posts" : "Seed 100 huge posts"}
			</Button>
			<Button
				type="button"
				variant="ghost"
				disabled={deletingDisabled}
				onClick={deleteOwnedPosts}
				className="mt-2 h-10 w-full justify-start border border-red-300/20 bg-red-300/10 text-red-100 hover:bg-red-300/20 hover:text-white"
			>
				<Trash className="size-4" />
				Delete all my posts
			</Button>
			{status.kind !== "idle" ? (
				<p className="mt-2 text-xs leading-5 text-[#d6cbbb]">
					{status.created}/{status.total} created
					{status.kind === "error" ? ` - ${status.message}` : ""}
					{status.kind === "done" ? " - done" : ""}
				</p>
			) : null}
			{deleteStatus ? (
				<p className="mt-2 text-xs leading-5 text-[#d6cbbb]">{deleteStatus}</p>
			) : null}
		</div>
	);
}

async function createPublishedPost(index: number, userId: string) {
	const now = Date.now();
	const postId = id();
	const wordCount = wordCountForIndex(index);
	const body = generateBody(index, wordCount);
	const chunks = createChunks(body);
	const chunkIds = chunks.map(() => id());

	await db.transact([
		db.tx.posts[postId]
			.update({
				body,
				createdAt: now + index,
				sourceType: "original",
				title: `[DEV SEED ${String(index + 1).padStart(3, "0")}] ${titleParts[index % titleParts.length]} (${wordCount.toLocaleString()} words)`,
				updatedAt: now + index,
				visibility: "public",
			})
			.link({ author: userId }),
		...chunks.map((chunk, chunkIndex) =>
			db.tx.chunks[chunkIds[chunkIndex]]
				.update({
					index: chunk.index,
					mainClaim: chunk.mainClaim,
					prompt: chunk.prompt,
					text: chunk.text,
				})
				.link({ post: postId }),
		),
	]);
}

function wordCountForIndex(index: number) {
	if (index === 0) return MIN_WORDS;
	if (index === POST_COUNT - 1) return MAX_WORDS;

	const ratio = index / (POST_COUNT - 1);
	const curved = ratio ** 1.6;
	return Math.round(MIN_WORDS + (MAX_WORDS - MIN_WORDS) * curved);
}

function generateBody(seed: number, targetWords: number) {
	const paragraphs: string[] = [];
	let remaining = targetWords;
	let paragraphIndex = 0;

	while (remaining > 0) {
		const paragraphWords = Math.min(
			remaining,
			90 + ((seed * 17 + paragraphIndex * 23) % 150),
		);
		paragraphs.push(generateParagraph(seed, paragraphIndex, paragraphWords));
		remaining -= paragraphWords;
		paragraphIndex += 1;
	}

	return paragraphs.join("\n\n");
}

function generateParagraph(
	seed: number,
	paragraphIndex: number,
	targetWords: number,
) {
	const words: string[] = [];

	for (let index = 0; index < targetWords; index += 1) {
		const vocabIndex =
			(seed * 31 + paragraphIndex * 13 + index * 7) % vocabulary.length;
		words.push(vocabulary[vocabIndex]);
	}

	const sentences: string[] = [];
	for (let index = 0; index < words.length; index += 18) {
		const sentenceWords = words.slice(index, index + 18);
		if (sentenceWords.length === 0) continue;
		sentenceWords[0] = capitalize(sentenceWords[0]);
		sentences.push(`${sentenceWords.join(" ")}.`);
	}

	return sentences.join(" ");
}

function capitalize(value: string) {
	return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	if (
		error &&
		typeof error === "object" &&
		"body" in error &&
		error.body &&
		typeof error.body === "object" &&
		"message" in error.body &&
		typeof error.body.message === "string"
	) {
		return error.body.message;
	}
	return "Something went wrong while seeding.";
}

type DevPostsData = {
	posts?: DevPost[];
};

type DevPost = {
	id: string;
	author?: {
		id: string;
	};
	chunks?: Array<{
		id: string;
	}>;
	readingSessions?: Array<{
		id: string;
		responses?: Array<{
			id: string;
		}>;
		understandingReport?: {
			id: string;
		};
	}>;
};

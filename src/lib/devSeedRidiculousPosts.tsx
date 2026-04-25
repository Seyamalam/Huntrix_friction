import { id } from "@instantdb/react";
import { Database, Trash, WarningCircle } from "@phosphor-icons/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { createChunks } from "@/lib/reading";

const DEMO_TITLE = "[DEMO] The meeting after nobody read";
const DEMO_BODY = `The meeting started with a sentence everyone had learned to say: "I read the memo." Nobody asked what the memo argued. Nobody asked which assumption was carrying the proposal. The team moved straight into opinions, because opinions are easier to offer than evidence.

By slide three, the room had already agreed to a plan that the memo itself warned against. The warning was not hidden. It sat in the second paragraph: the proposed launch would only work if support volume stayed flat, but the last two experiments had doubled support tickets. The sentence was visible. It simply had not become anyone's responsibility.

This is the strange social power of fake understanding. A reader can nod, quote a phrase, and keep the meeting moving while missing the claim that matters. Speed feels cooperative in the moment. Later, when the decision breaks, the cost appears as rework, blame, and another meeting.

The productive kind of friction interrupts that performance. It does not punish people for being confused. It asks them to locate the claim before they inherit the confidence of the room. A small pause at the point of reading can prevent a much larger pause at the point of repair.

Unread exists for that pause. It treats comprehension as something a reader demonstrates, not something a tool assumes. If you cannot say the section back in your own words, the next section should wait.`;

type SeedStatus =
	| { kind: "idle" }
	| { kind: "running" }
	| { kind: "done"; title: string }
	| { kind: "error"; message: string };

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
	const demoPost = ownedPosts.find((post) => post.title === DEMO_TITLE);

	async function seedDemoPost() {
		if (!userId || status.kind === "running") return;

		setStatus({ kind: "running" });

		try {
			if (demoPost) {
				setStatus({ kind: "done", title: demoPost.title });
				return;
			}

			await createDemoPost(userId);
			setStatus({ kind: "done", title: DEMO_TITLE });
		} catch (error) {
			setStatus({ kind: "error", message: getErrorMessage(error) });
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
					<p className="text-xs font-semibold text-amber-100">
						Judge demo seed
					</p>
					<p className="mt-1 text-xs leading-5 text-[#d6cbbb]">
						Creates one polished public post for the live rubric walkthrough.
					</p>
				</div>
			</div>
			<Button
				type="button"
				disabled={!userId || running}
				onClick={seedDemoPost}
				className="mt-3 h-10 w-full justify-start bg-amber-200 text-[#11110d] hover:bg-amber-300"
			>
				<Database className="size-4" />
				{running
					? "Seeding demo"
					: demoPost
						? "Demo post ready"
						: "Seed judge demo post"}
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
			{status.kind === "done" ? (
				<p className="mt-2 text-xs leading-5 text-[#d6cbbb]">
					Seeded: {status.title}
				</p>
			) : null}
			{status.kind === "error" ? (
				<p className="mt-2 text-xs leading-5 text-[#f0b999]">
					{status.message}
				</p>
			) : null}
			{deleteStatus ? (
				<p className="mt-2 text-xs leading-5 text-[#d6cbbb]">{deleteStatus}</p>
			) : null}
		</div>
	);
}

async function createDemoPost(userId: string) {
	const now = Date.now();
	const postId = id();
	const chunks = createChunks(DEMO_BODY);
	const chunkIds = chunks.map(() => id());

	await db.transact([
		db.tx.posts[postId]
			.update({
				body: DEMO_BODY,
				createdAt: now,
				sourceType: "original",
				title: DEMO_TITLE,
				updatedAt: now,
				visibility: "public",
			})
			.link({ author: userId }),
		...chunks.map((chunk, chunkIndex) =>
			db.tx.chunks[chunkIds[chunkIndex]]
				.update({
					index: chunk.index,
					mainClaim: chunk.mainClaim,
					markdown: chunk.markdown,
					prompt: chunk.prompt,
					text: chunk.text,
				})
				.link({ post: postId }),
		),
	]);
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
	title: string;
};

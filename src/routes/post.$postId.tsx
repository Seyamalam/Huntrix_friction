import { id } from "@instantdb/react";
import {
	ArrowRight,
	ChartBar,
	CheckCircle,
	FileText,
	LockKey,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { db, isInstantConfigured } from "@/lib/db";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/post/$postId")({
	component: PublicPostPage,
});

function PublicPostPage() {
	const { postId } = Route.useParams();
	const auth = db.useAuth();
	const query = db.useQuery(
		isInstantConfigured
			? {
					posts: {
						author: {},
						chunks: {
							responses: {},
						},
						readingSessions: {
							responses: {},
							understandingReport: {},
							user: {},
						},
					},
				}
			: null,
	);

	if (!isInstantConfigured) return <SetupRequired />;
	if (query.isLoading || auth.isLoading) return <PostSkeleton />;
	if (query.error) return <PostError message={query.error.message} />;

	const post = ((query.data as PostData | undefined)?.posts ?? []).find(
		(candidate) => candidate.id === postId,
	);

	if (
		!post ||
		(post.visibility !== "public" && post.visibility !== "unlisted")
	) {
		return <PostNotFound />;
	}

	return <PublicPostReader authUserId={auth.user?.id} post={post} />;
}

function PublicPostReader({
	authUserId,
	post,
}: {
	authUserId?: string;
	post: PublicPost;
}) {
	const navigate = useNavigate();
	const [isStarting, setIsStarting] = useState(false);
	const [error, setError] = useState("");
	const chunks = [...(post.chunks ?? [])].sort(
		(a, b) => Number(a.index ?? 0) - Number(b.index ?? 0),
	);
	const sessions = post.readingSessions ?? [];
	const responses = sessions.flatMap((session) => session.responses ?? []);
	const clearResponses = responses.filter(
		(response) => response.grade === "clear",
	);
	const completedSessions = sessions.filter(
		(session) => session.status === "completed",
	);
	const clearRate = responses.length
		? Math.round((clearResponses.length / responses.length) * 100)
		: 0;
	const activeSession = authUserId
		? sessions.find(
				(session) =>
					session.status === "active" && session.user?.id === authUserId,
			)
		: undefined;
	const readingMinutes = Math.max(
		4,
		Math.round((post.body?.split(/\s+/).filter(Boolean).length ?? 0) / 190),
	);

	async function startReading() {
		if (!authUserId) return;

		setError("");

		if (activeSession) {
			await navigate({
				to: "/app/session/$sessionId",
				params: { sessionId: activeSession.id },
			});
			return;
		}

		setIsStarting(true);

		const sessionId = id();

		try {
			await db.transact(
				db.tx.readingSessions[sessionId]
					.update({
						access: post.visibility === "public" ? "public" : "invite",
						createdAt: Date.now(),
						currentChunkIndex: 0,
						groupCurrentChunkIndex: 0,
						mode: "serious",
						status: "active",
					})
					.link({ post: post.id, user: authUserId }),
			);
			await navigate({
				to: "/app/session/$sessionId",
				params: { sessionId },
			});
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsStarting(false);
		}
	}

	return (
		<main className="min-h-dvh bg-[var(--unread-paper)] pt-28 text-[var(--unread-ink)]">
			<section className="unread-shell grid gap-8 pb-16 pt-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
				<div>
					<div className="flex flex-wrap items-center gap-2">
						<Badge className="unread-badge">{post.visibility} room</Badge>
						<Badge className="rounded-none bg-[var(--unread-ink)] text-[var(--unread-paper)]">
							{chunks.length} checkpoints
						</Badge>
					</div>
					<h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black leading-[0.84] text-balance">
						{post.title}
					</h1>
					<p className="mt-7 max-w-3xl text-base leading-8 text-[var(--unread-muted)]">
						This is a saved public reading room. You can preview the first
						section, but the real flow opens one checkpoint at a time and saves
						your evidence of understanding.
					</p>
				</div>

				<aside className="unread-panel bg-[var(--unread-ink)] p-5 text-[var(--unread-paper)]">
					<div className="grid grid-cols-2 gap-2">
						<DarkMetric label="minutes" value={readingMinutes} />
						<DarkMetric label="clear rate" suffix="%" value={clearRate} />
						<DarkMetric label="sessions" value={sessions.length} />
						<DarkMetric label="reports" value={completedSessions.length} />
					</div>
					{authUserId ? (
						<Button
							type="button"
							size="lg"
							disabled={isStarting}
							onClick={startReading}
							className="mt-4 h-12 w-full bg-[var(--unread-paper)] text-[var(--unread-ink)] hover:bg-[var(--unread-green)] hover:text-white"
						>
							{activeSession
								? "Continue room"
								: isStarting
									? "Starting"
									: "Start locked reader"}
							<ArrowRight className="size-4" />
						</Button>
					) : (
						<Link
							to="/login"
							className={cn(
								buttonVariants({ size: "lg" }),
								"mt-4 h-12 w-full bg-[var(--unread-paper)] text-[var(--unread-ink)] hover:bg-[var(--unread-green)] hover:text-white",
							)}
						>
							Sign in to read
							<ArrowRight className="size-4" />
						</Link>
					)}
					{error ? (
						<p className="mt-3 text-xs text-[#f0b999]">{error}</p>
					) : null}
				</aside>
			</section>

			<section className="unread-shell grid gap-5 pb-24 lg:grid-cols-[minmax(0,1fr)_20rem]">
				<div className="unread-panel bg-[var(--unread-paper)] p-5">
					<div className="flex items-center gap-2 text-[var(--unread-green)]">
						<FileText className="size-5" />
						<p className="font-mono text-xs uppercase tracking-[0.18em]">
							first visible checkpoint
						</p>
					</div>
					{chunks[0] ? (
						<>
							<h2 className="mt-6 text-3xl font-black leading-tight">
								{chunks[0].mainClaim ?? "Opening section"}
							</h2>
							<p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--unread-ink-soft)]">
								{chunks[0].markdown ?? chunks[0].text}
							</p>
							<div className="mt-6 border border-[var(--unread-ink)]/12 bg-[var(--unread-paper-2)] p-4">
								<p className="font-semibold">{chunks[0].prompt}</p>
							</div>
						</>
					) : (
						<p className="mt-5 text-sm leading-7 text-[var(--unread-ink-soft)]">
							This post has no checkpoints yet.
						</p>
					)}
				</div>

				<div className="grid gap-3">
					<ProofCard
						icon={LockKey}
						label="friction"
						text="Later sections stay hidden inside the saved session."
					/>
					<ProofCard
						icon={CheckCircle}
						label="evidence"
						text="Readers advance by writing the claim in their own words."
					/>
					<ProofCard
						icon={ChartBar}
						label="analytics"
						text="Authors see where readers are clear, vague, or stuck."
					/>
				</div>
			</section>
		</main>
	);
}

function DarkMetric({
	label,
	suffix,
	value,
}: {
	label: string;
	suffix?: string;
	value: number;
}) {
	return (
		<div className="border border-[var(--unread-paper)]/10 bg-[var(--unread-paper)]/7 p-3">
			<p className="font-mono text-3xl font-black tabular-nums">
				{value}
				{suffix}
			</p>
			<p className="text-xs font-semibold text-[var(--unread-paper)]/70">
				{label}
			</p>
		</div>
	);
}

function ProofCard({
	icon: Icon,
	label,
	text,
}: {
	icon: typeof LockKey;
	label: string;
	text: string;
}) {
	return (
		<div className="border border-[var(--unread-ink)]/10 bg-[var(--unread-ink)]/[0.055] p-4">
			<Icon className="size-6 text-[var(--unread-green)]" />
			<p className="mt-8 text-2xl font-black leading-none">{label}</p>
			<p className="mt-3 text-sm leading-6 text-[var(--unread-muted)]">
				{text}
			</p>
		</div>
	);
}

function SetupRequired() {
	return (
		<main className="grid min-h-dvh place-items-center bg-[var(--unread-paper)] px-4 py-24 text-[var(--unread-ink)]">
			<div className="unread-panel max-w-xl bg-[var(--unread-paper)] p-6">
				<Badge className="unread-badge">Setup required</Badge>
				<h1 className="mt-5 text-4xl font-black leading-none">
					Connect Instant first.
				</h1>
				<p className="mt-4 text-sm leading-7 text-[var(--unread-ink-soft)]">
					Public rooms load from saved posts. Set VITE_INSTANT_APP_ID before
					using this page.
				</p>
			</div>
		</main>
	);
}

function PostSkeleton() {
	return (
		<main className="min-h-dvh bg-[var(--unread-paper)] px-4 pt-32">
			<div className="unread-shell grid gap-5 lg:grid-cols-[minmax(0,1fr)_24rem]">
				<Skeleton className="h-96 bg-[var(--unread-ink)]/10" />
				<Skeleton className="h-80 bg-[var(--unread-ink)]/10" />
			</div>
		</main>
	);
}

function PostError({ message }: { message: string }) {
	return (
		<main className="bg-[var(--unread-paper)] px-4 py-28">
			<Alert className="mx-auto max-w-2xl border-[var(--unread-clay)]/40 bg-white text-[var(--unread-ink)]">
				<WarningCircle className="size-4 text-[var(--unread-clay)]" />
				<AlertTitle>Room failed to load</AlertTitle>
				<AlertDescription>{message}</AlertDescription>
			</Alert>
		</main>
	);
}

function PostNotFound() {
	return (
		<main className="grid min-h-dvh place-items-center bg-[var(--unread-paper)] px-4 py-24 text-[var(--unread-ink)]">
			<div className="unread-panel max-w-xl bg-[var(--unread-paper)] p-6">
				<Badge className="unread-badge">Room not found</Badge>
				<h1 className="mt-5 text-4xl font-black leading-none">
					This room is private or missing.
				</h1>
				<Link
					to="/blogs"
					className={cn(
						buttonVariants({ size: "lg" }),
						"mt-6 h-12 bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)]",
					)}
				>
					Browse public rooms
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</main>
	);
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
	return "Could not start this room.";
}

type PostData = {
	posts?: PublicPost[];
};

type PublicPost = {
	id: string;
	body?: string;
	chunks?: Array<{
		id: string;
		index?: number;
		mainClaim?: string;
		markdown?: string;
		prompt: string;
		responses?: Array<{ grade: string }>;
		text: string;
	}>;
	readingSessions?: Array<{
		id: string;
		responses?: Array<{ grade: string }>;
		status: string;
		understandingReport?: { id: string };
		user?: { id: string };
	}>;
	title: string;
	visibility?: string;
};

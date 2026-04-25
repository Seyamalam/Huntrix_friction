import {
	ArrowRight,
	ChartBar,
	ClockCounterClockwise,
	FileText,
	LockKey,
	NotePencil,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { db, isInstantConfigured } from "@/lib/db";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blogs")({
	component: PostsPage,
});

function PostsPage() {
	const query = db.useQuery(
		isInstantConfigured
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

	if (!isInstantConfigured) return <SetupRequired />;
	if (query.isLoading) return <PostsSkeleton />;
	if (query.error) return <PostsError message={query.error.message} />;

	const posts = ((query.data as PostsData | undefined)?.posts ?? [])
		.filter(
			(post) => post.visibility === "public" || post.visibility === "unlisted",
		)
		.sort((a, b) => Number(b.updatedAt ?? 0) - Number(a.updatedAt ?? 0));
	const totalSessions = posts.reduce(
		(sum, post) => sum + (post.readingSessions?.length ?? 0),
		0,
	);
	const allResponses = posts.flatMap((post) =>
		(post.readingSessions ?? []).flatMap((session) => session.responses ?? []),
	);
	const clearRate = allResponses.length
		? Math.round(
				(allResponses.filter((response) => response.grade === "clear").length /
					allResponses.length) *
					100,
			)
		: 0;

	return (
		<main className="min-h-dvh bg-[var(--unread-paper)] pt-28 text-[var(--unread-ink)]">
			<section className="unread-shell pb-14 pt-10">
				<div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-end">
					<div>
						<Badge className="unread-badge">Public reading rooms</Badge>
						<h1 className="mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[0.82] text-balance">
							Posts that ask for proof.
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-[var(--unread-muted)]">
							Browse saved public rooms. Each one opens section by section and
							measures whether readers can state the claim without being handed
							a summary.
						</p>
					</div>
					<div className="unread-panel bg-[var(--unread-ink)] p-5 text-[var(--unread-paper)]">
						<div className="grid grid-cols-3 gap-3">
							<Metric label="clear rate" value={`${clearRate}%`} />
							<Metric label="rooms" value={String(posts.length)} />
							<Metric label="sessions" value={String(totalSessions)} />
						</div>
					</div>
				</div>
			</section>

			<section className="unread-shell pb-24">
				{posts.length > 0 ? (
					<div className="grid gap-4 lg:grid-cols-3">
						{posts.map((post, index) => (
							<PostCard key={post.id} index={index} post={post} />
						))}
					</div>
				) : (
					<div className="unread-panel bg-[var(--unread-paper)] p-6">
						<FileText className="size-8 text-[var(--unread-green)]" />
						<h2 className="mt-5 text-4xl font-black leading-none">
							No public rooms yet.
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--unread-ink-soft)]">
							Sign in, seed the judge demo post, or publish your own room from
							the workspace.
						</p>
						<Link
							to="/app"
							className={cn(
								buttonVariants({ size: "lg" }),
								"mt-6 h-12 bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)]",
							)}
						>
							Open workspace
							<ArrowRight className="size-4" />
						</Link>
					</div>
				)}
			</section>
		</main>
	);
}

function PostCard({ index, post }: { index: number; post: PublicPost }) {
	const sessions = post.readingSessions ?? [];
	const responses = sessions.flatMap((session) => session.responses ?? []);
	const clearRate = responses.length
		? Math.round(
				(responses.filter((response) => response.grade === "clear").length /
					responses.length) *
					100,
			)
		: 0;
	const readingMinutes = Math.max(
		4,
		Math.round((post.body?.split(/\s+/).filter(Boolean).length ?? 0) / 190),
	);

	return (
		<article
			className={cn(
				"unread-panel group min-h-[28rem] bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--unread-paper-2)]",
				index % 3 === 1 && "lg:translate-y-10",
			)}
		>
			<div className="flex items-center justify-between gap-3">
				<span className="border border-[var(--unread-ink)]/15 px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--unread-ink)]/70">
					{post.visibility}
				</span>
				<LockKey className="size-5 text-[var(--unread-green)]" />
			</div>
			<h2 className="mt-10 text-4xl font-black leading-none text-balance">
				{post.title}
			</h2>
			<p className="mt-5 line-clamp-4 text-sm leading-7 text-[var(--unread-ink-soft)]">
				{post.body}
			</p>
			<div className="mt-10 grid gap-2">
				<Row
					icon={ClockCounterClockwise}
					label="reading time"
					value={`${readingMinutes} min`}
				/>
				<Row
					icon={NotePencil}
					label="checkpoints"
					value={String(post.chunks?.length ?? 0)}
				/>
				<Row
					icon={ChartBar}
					label="avg. comprehension"
					value={`${clearRate}%`}
				/>
			</div>
			<Link
				to="/post/$postId"
				params={{ postId: post.id }}
				className={cn(
					buttonVariants({ size: "lg" }),
					"mt-8 h-12 w-full bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)] hover:text-white",
				)}
			>
				Open room
				<ArrowRight className="size-4 transition group-hover:translate-x-1" />
			</Link>
		</article>
	);
}

function Metric({ label, value }: { label: string; value: string }) {
	return (
		<div className="border border-[var(--unread-ink)]/12 bg-[var(--unread-paper-2)] p-4 text-[var(--unread-ink)]">
			<p className="font-mono text-3xl font-black tabular-nums">{value}</p>
			<p className="mt-1 text-xs font-semibold text-[var(--unread-ink-soft)]">
				{label}
			</p>
		</div>
	);
}

function Row({
	icon: Icon,
	label,
	value,
}: {
	icon: typeof ChartBar;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-center justify-between gap-3 border-t border-[var(--unread-ink)]/10 py-3 text-sm">
			<span className="flex items-center gap-2 text-[var(--unread-ink-soft)]">
				<Icon className="size-4 text-[var(--unread-green)]" />
				{label}
			</span>
			<span className="font-mono font-black tabular-nums">{value}</span>
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

function PostsSkeleton() {
	return (
		<main className="min-h-dvh bg-[var(--unread-paper)] px-4 pt-32">
			<div className="unread-shell grid gap-4 lg:grid-cols-3">
				<Skeleton className="h-96 bg-[var(--unread-ink)]/10" />
				<Skeleton className="h-96 bg-[var(--unread-ink)]/10" />
				<Skeleton className="h-96 bg-[var(--unread-ink)]/10" />
			</div>
		</main>
	);
}

function PostsError({ message }: { message: string }) {
	return (
		<main className="bg-[var(--unread-paper)] px-4 py-28">
			<Alert className="mx-auto max-w-2xl border-[var(--unread-clay)]/40 bg-white text-[var(--unread-ink)]">
				<WarningCircle className="size-4 text-[var(--unread-clay)]" />
				<AlertTitle>Public posts failed to load</AlertTitle>
				<AlertDescription>{message}</AlertDescription>
			</Alert>
		</main>
	);
}

type PostsData = {
	posts?: PublicPost[];
};

type PublicPost = {
	id: string;
	body?: string;
	chunks?: Array<{ id: string }>;
	readingSessions?: Array<{
		id: string;
		responses?: Array<{ grade: string }>;
		understandingReport?: { id: string };
	}>;
	title: string;
	updatedAt?: number | Date;
	visibility?: string;
};

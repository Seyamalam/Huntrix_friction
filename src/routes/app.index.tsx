import { id } from "@instantdb/react";
import {
	ArrowRight,
	ChartBar,
	CheckCircle,
	ClockCounterClockwise,
	FileText,
	Plus,
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

export const Route = createFileRoute("/app/")({ component: AppDashboard });

function AppDashboard() {
	const auth = db.useAuth();
	const query = db.useQuery(
		auth.user
			? {
					posts: {
						author: {},
						chunks: {},
						readingSessions: {
							responses: {},
							understandingReport: {},
						},
					},
					readingSessions: {
						post: {
							chunks: {},
						},
						responses: {},
						understandingReport: {},
					},
				}
			: null,
	);

	if (!isInstantConfigured) return <AuthRequired reason="setup" />;
	if (auth.isLoading) return <DashboardSkeleton />;
	if (!auth.user) return <AuthRequired reason="login" />;
	if (auth.error) return <AuthError message={auth.error.message} />;
	if (query.error) return <AuthError message={query.error.message} />;

	const data = query.data as AppData | undefined;
	const posts = [...(data?.posts ?? [])]
		.filter((post) => post.author?.id === auth.user.id)
		.sort((a, b) => Number(b.updatedAt ?? 0) - Number(a.updatedAt ?? 0));
	const sessions = [...(data?.readingSessions ?? [])].sort(
		(a, b) => Number(b.createdAt ?? 0) - Number(a.createdAt ?? 0),
	);
	const activeSessions = sessions.filter(
		(session) => session.status === "active",
	);
	const completedSessions = sessions.filter(
		(session) => session.status === "completed",
	);
	const clearResponses = sessions
		.flatMap((session) => session.responses ?? [])
		.filter((response) => response.grade === "clear");
	const completionRate = sessions.length
		? Math.round((completedSessions.length / sessions.length) * 100)
		: 0;

	return (
		<main className="min-h-dvh px-4 py-5 sm:px-6 lg:px-8">
			<header className="flex flex-wrap items-start justify-between gap-4 border-b border-[#17140f]/10 pb-5">
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
						Workspace
					</p>
					<h1 className="mt-2 text-4xl font-black leading-none text-balance lg:text-5xl">
						Dashboard
					</h1>
					<p className="mt-3 max-w-2xl text-sm leading-6 text-[#5d574a]">
						Manage posts, continue active sessions, and review evidence of
						understanding.
					</p>
				</div>
				<Link
					to="/app/create"
					className={cn(
						buttonVariants({ size: "lg" }),
						"h-11 bg-[#11110d] text-white hover:bg-[#14876d]",
					)}
				>
					New reading session
					<Plus className="size-4" />
				</Link>
			</header>

			<section className="mt-5 grid gap-3 md:grid-cols-4">
				<Metric label="posts" value={posts.length} />
				<Metric label="active sessions" value={activeSessions.length} />
				<Metric label="clear answers" value={clearResponses.length} />
				<Metric label="completion" suffix="%" value={completionRate} />
			</section>

			<section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
				<div className="grid gap-5">
					<Panel
						icon={ClockCounterClockwise}
						title="Continue reading"
						subtitle="A session is one guided run through a post."
					>
						{activeSessions.length > 0 ? (
							<div className="grid gap-3">
								{activeSessions.map((session) => (
									<SessionCard key={session.id} session={session} />
								))}
							</div>
						) : (
							<EmptyPanel
								action="Create a room"
								body="No active sessions yet. Create a post, then start reading it through checkpoints."
								to="/app/create"
							/>
						)}
					</Panel>

					<Panel
						icon={ChartBar}
						title="Completed reports"
						subtitle="Sessions that reached a saved understanding report."
					>
						{completedSessions.length > 0 ? (
							<div className="grid gap-3 md:grid-cols-2">
								{completedSessions.slice(0, 4).map((session) => (
									<ReportCard key={session.id} session={session} />
								))}
							</div>
						) : (
							<div className="border border-[#17140f]/10 bg-[#f9f6ef] p-4 text-sm leading-7 text-[#5d574a]">
								Reports appear after every checkpoint in a room is cleared.
							</div>
						)}
					</Panel>
				</div>

				<Panel
					icon={FileText}
					title="Your posts"
					subtitle="Source texts that can become locked reading sessions."
				>
					{posts.length > 0 ? (
						<div className="grid gap-3">
							{posts.map((post) => (
								<PostCard key={post.id} post={post} userId={auth.user.id} />
							))}
						</div>
					) : (
						<EmptyPanel
							action="Create post"
							body="Paste an article, memo, or original post and Unread will split it into checkpoints."
							to="/app/create"
						/>
					)}
				</Panel>
			</section>
		</main>
	);
}

function Metric({
	label,
	suffix,
	value,
}: {
	label: string;
	suffix?: string;
	value: number;
}) {
	return (
		<div className="border border-[#17140f]/10 bg-white p-4">
			<p className="font-mono text-3xl font-black tabular-nums">
				{value}
				{suffix}
			</p>
			<p className="mt-1 text-xs font-semibold text-[#5d574a]">{label}</p>
		</div>
	);
}

function Panel({
	children,
	icon: Icon,
	subtitle,
	title,
}: {
	children: React.ReactNode;
	icon: typeof FileText;
	subtitle: string;
	title: string;
}) {
	return (
		<section className="border border-[#17140f]/10 bg-white">
			<header className="flex items-start justify-between gap-4 border-b border-[#17140f]/10 p-4">
				<div>
					<h2 className="flex items-center gap-2 text-lg font-black">
						<Icon className="size-5 text-[#14876d]" />
						{title}
					</h2>
					<p className="mt-1 text-sm leading-6 text-[#5d574a]">{subtitle}</p>
				</div>
			</header>
			<div className="p-4">{children}</div>
		</section>
	);
}

function SessionCard({ session }: { session: SessionRecord }) {
	const chunks = session.post?.chunks ?? [];
	const clearCount = (session.responses ?? []).filter(
		(response) => response.grade === "clear",
	).length;
	const progress = chunks.length
		? Math.round((clearCount / chunks.length) * 100)
		: 0;

	return (
		<Link
			to="/app/session/$sessionId"
			params={{ sessionId: session.id }}
			className="group block border border-[#17140f]/10 bg-[#f9f6ef] p-4 transition hover:-translate-y-0.5 hover:border-[#14876d]/45"
		>
			<div className="flex items-start justify-between gap-4">
				<div>
					<Badge className="rounded-none bg-[#14876d] text-white">
						{session.mode}
					</Badge>
					<h3 className="mt-3 text-2xl font-black leading-none text-balance">
						{session.post?.title ?? "Untitled session"}
					</h3>
					<p className="mt-2 text-sm text-[#5d574a]">
						{clearCount} of {chunks.length || 1} checkpoints cleared
					</p>
				</div>
				<div className="text-right">
					<p className="font-mono text-3xl font-black tabular-nums">
						{progress}%
					</p>
					<ArrowRight className="ml-auto mt-2 size-5 text-[#14876d] transition group-hover:translate-x-1" />
				</div>
			</div>
		</Link>
	);
}

function PostCard({ post, userId }: { post: PostRecord; userId: string }) {
	const navigate = useNavigate();
	const [isStarting, setIsStarting] = useState(false);
	const [error, setError] = useState("");
	const activeSession = post.readingSessions?.find(
		(session) => session.status === "active",
	);

	async function startReading() {
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
						access: post.visibility === "private" ? "private" : "invite",
						createdAt: Date.now(),
						currentChunkIndex: 0,
						groupCurrentChunkIndex: 0,
						mode: "serious",
						status: "active",
					})
					.link({ post: post.id, user: userId }),
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
		<article className="border border-[#17140f]/10 bg-[#f9f6ef] p-4">
			<div className="flex items-start justify-between gap-3">
				<div>
					<h3 className="text-lg font-black leading-tight text-balance">
						{post.title}
					</h3>
					<p className="mt-2 text-sm text-[#5d574a]">
						{post.chunks?.length ?? 0} checkpoints · {post.visibility} post
					</p>
				</div>
				<FileText className="size-5 text-[#14876d]" />
			</div>
			<Button
				type="button"
				disabled={isStarting}
				onClick={startReading}
				className="mt-4 h-10 w-full bg-[#11110d] text-white hover:bg-[#14876d]"
			>
				{activeSession
					? "Continue session"
					: isStarting
						? "Starting"
						: "Start reading"}
				<ArrowRight className="size-4" />
			</Button>
			{error ? <p className="mt-2 text-xs text-[#a75d3f]">{error}</p> : null}
		</article>
	);
}

function ReportCard({ session }: { session: SessionRecord }) {
	const report = session.understandingReport;

	return (
		<Link
			to="/app/session/$sessionId"
			params={{ sessionId: session.id }}
			className="block border border-[#17140f]/10 bg-[#f9f6ef] p-4 transition hover:-translate-y-0.5 hover:border-[#14876d]/45"
		>
			<CheckCircle className="size-5 text-[#14876d]" />
			<h3 className="mt-4 text-lg font-black leading-tight">
				{session.post?.title ?? "Completed session"}
			</h3>
			<p className="mt-3 text-sm leading-6 text-[#5d574a]">
				{report?.strengths?.[0] ?? "Completed with a saved report."}
			</p>
		</Link>
	);
}

function EmptyPanel({
	action,
	body,
	to,
}: {
	action: string;
	body: string;
	to: "/app/create";
}) {
	return (
		<div className="border border-dashed border-[#17140f]/20 bg-[#f9f6ef] p-4">
			<p className="max-w-xl text-sm leading-7 text-[#5d574a]">{body}</p>
			<Link
				to={to}
				className={cn(
					buttonVariants({ size: "lg" }),
					"mt-4 h-11 bg-[#11110d] text-white hover:bg-[#14876d]",
				)}
			>
				{action}
				<ArrowRight className="size-4" />
			</Link>
		</div>
	);
}

function AuthRequired({ reason }: { reason: "login" | "setup" }) {
	return (
		<main className="grid min-h-dvh place-items-center px-4 py-8">
			<div className="max-w-2xl border border-[#17140f]/10 bg-white p-6">
				<Badge className="rounded-none bg-[#14876d] text-white">
					{reason === "setup" ? "Setup required" : "Auth required"}
				</Badge>
				<h1 className="mt-6 text-4xl font-black leading-none">
					{reason === "setup"
						? "Connect Instant first."
						: "Sign in to continue."}
				</h1>
				<p className="mt-5 text-sm leading-7 text-[#5d574a]">
					{reason === "setup"
						? "Set VITE_INSTANT_APP_ID in .env before using the authenticated workspace."
						: "The product workspace stores posts, reading sessions, responses, and reports under your account."}
				</p>
				<Link
					to="/login"
					className={cn(
						buttonVariants({ size: "lg" }),
						"mt-6 h-11 bg-[#11110d] text-white hover:bg-[#14876d]",
					)}
				>
					Open login
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</main>
	);
}

function DashboardSkeleton() {
	return (
		<main className="grid min-h-dvh gap-4 px-4 py-5 sm:px-6 lg:px-8">
			<Skeleton className="h-28 bg-[#17140f]/10" />
			<Skeleton className="h-64 bg-[#17140f]/10" />
		</main>
	);
}

function AuthError({ message }: { message: string }) {
	return (
		<main className="px-4 py-8 sm:px-6 lg:px-8">
			<Alert className="max-w-2xl border-[#a75d3f]/40 bg-white text-[#17140f]">
				<WarningCircle className="size-4 text-[#a75d3f]" />
				<AlertTitle>Workspace failed to load</AlertTitle>
				<AlertDescription>{message}</AlertDescription>
			</Alert>
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
	return "Something went wrong. Try again.";
}

type AppData = {
	posts?: PostRecord[];
	readingSessions?: SessionRecord[];
};

type PostRecord = {
	id: string;
	author?: {
		id: string;
	};
	body?: string;
	chunks?: Array<{ id: string }>;
	readingSessions?: SessionRecord[];
	title: string;
	updatedAt?: number | Date;
	visibility?: string;
};

type SessionRecord = {
	id: string;
	createdAt?: number | Date;
	currentChunkIndex?: number;
	mode: string;
	post?: PostRecord & {
		chunks?: Array<{ id: string; index: number }>;
	};
	responses?: Array<{ grade: string }>;
	status: string;
	understandingReport?: {
		strengths?: string[];
	};
};

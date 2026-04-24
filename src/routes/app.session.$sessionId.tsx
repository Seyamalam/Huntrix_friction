import { id } from "@instantdb/react";
import {
	ArrowLeft,
	ArrowRight,
	CheckCircle,
	LockKey,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { db, isInstantConfigured } from "@/lib/db";
import {
	buildReport,
	gradeAnswer,
	type ReaderResponse,
	type ReadingChunk,
} from "@/lib/reading";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/session/$sessionId")({
	component: ReadingSessionPage,
});

function ReadingSessionPage() {
	const { sessionId } = Route.useParams();
	const auth = db.useAuth();
	const query = db.useQuery(
		auth.user
			? {
					readingSessions: {
						post: {
							chunks: {},
						},
						responses: {
							chunk: {},
						},
						understandingReport: {},
					},
				}
			: null,
	);
	const [answer, setAnswer] = useState("");
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");
	const [isSaving, setIsSaving] = useState(false);

	const session = (
		(query.data as SessionData | undefined)?.readingSessions ?? []
	).find((item) => item.id === sessionId);
	const chunks = useMemo(
		() =>
			[...(session?.post?.chunks ?? [])].sort(
				(a, b) => Number(a.index ?? 0) - Number(b.index ?? 0),
			),
		[session?.post?.chunks],
	);
	const latestResponses = useMemo(
		() => buildResponseMap(session?.responses ?? []),
		[session?.responses],
	);
	const completedCount = Object.values(latestResponses).filter(
		(response) => response.grade === "clear",
	).length;
	const progressValue = chunks.length
		? Math.round((completedCount / chunks.length) * 100)
		: 0;
	const currentIndex = Math.min(
		Number(session?.currentChunkIndex ?? 0),
		Math.max(chunks.length - 1, 0),
	);
	const currentChunk = chunks[currentIndex];
	const currentResponse = currentChunk
		? latestResponses[currentChunk.id]
		: undefined;
	const isComplete = Boolean(session?.status === "completed");
	const report = buildReport(chunks, latestResponses);

	async function submitReflection() {
		if (!auth.user || !session || !currentChunk) return;

		const cleanAnswer = answer.trim();

		if (cleanAnswer.length < 6) {
			setError("Write a little more before checking the reflection.");
			return;
		}

		setIsSaving(true);
		setStatus("");
		setError("");

		const result = gradeAnswer(cleanAnswer, currentChunk, session.mode);
		const nextResponse: ReaderResponse = {
			answer: cleanAnswer,
			feedback: result.feedback,
			grade: result.grade,
			revisionCount: result.grade === "clear" ? 0 : 1,
		};
		const nextResponseMap = {
			...latestResponses,
			[currentChunk.id]: nextResponse,
		};
		const responseId = id();
		const nextCompletedCount =
			result.grade === "clear" && currentResponse?.grade !== "clear"
				? completedCount + 1
				: completedCount;
		const completesSession =
			result.grade === "clear" && nextCompletedCount >= chunks.length;
		const now = Date.now();
		const reportForSave = buildReport(chunks, nextResponseMap);

		try {
			const tx = [
				db.tx.responses[responseId]
					.update({
						answer: cleanAnswer,
						createdAt: now,
						feedback: result.feedback,
						grade: result.grade,
					})
					.link({ chunk: currentChunk.id, session: session.id }),
			];

			if (result.grade === "clear") {
				const sessionUpdate = completesSession
					? {
							completedAt: now,
							currentChunkIndex: currentIndex,
							status: "completed" as const,
						}
					: {
							currentChunkIndex: Math.min(currentIndex + 1, chunks.length - 1),
							status: "active" as const,
						};

				tx.push(db.tx.readingSessions[session.id].update(sessionUpdate));
			}

			if (completesSession) {
				const reportId = session.understandingReport?.id ?? id();
				tx.push(
					db.tx.understandingReports[reportId]
						.update({
							createdAt: now,
							keyClaims: reportForSave.keyClaims,
							recommendedReview: reportForSave.recommendedReview,
							strengths: reportForSave.strengths,
							weakSpots: reportForSave.weakSections.map(
								(section) => `Section ${section}`,
							),
						})
						.link({ session: session.id }),
				);
			}

			await db.transact(tx);
			setAnswer("");
			setStatus(
				result.grade === "clear"
					? completesSession
						? "Session complete. Understanding report saved."
						: "Clear enough. The next section is open."
					: "Not clear yet. Revise your answer and try again.",
			);
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsSaving(false);
		}
	}

	if (!isInstantConfigured || (!auth.isLoading && !auth.user)) {
		return <AuthRequired />;
	}

	if (auth.isLoading || query.isLoading) {
		return (
			<main className="grid min-h-dvh gap-4 px-4 py-5 sm:px-6 lg:px-8">
				<Skeleton className="h-24 bg-[#17140f]/10" />
				<Skeleton className="h-96 bg-[#17140f]/10" />
			</main>
		);
	}

	if (query.error || auth.error) {
		return (
			<ErrorPage message={query.error?.message ?? auth.error?.message ?? ""} />
		);
	}

	if (!session) {
		return <ErrorPage message="This reading session was not found." />;
	}

	return (
		<main className="min-h-dvh px-4 py-5 sm:px-6 lg:px-8">
			<section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_24rem]">
				<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
					<Link
						to="/app"
						className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5d574a] hover:text-[#17140f]"
					>
						<ArrowLeft className="size-4" />
						Back to workspace
					</Link>
					<div className="flex flex-wrap items-start justify-between gap-4">
						<div>
							<Badge className="rounded-none bg-[#14876d] text-white">
								{session.mode}
							</Badge>
							<h1 className="mt-5 max-w-4xl text-4xl font-black leading-none text-balance lg:text-5xl">
								{session.post?.title ?? "Reading session"}
							</h1>
						</div>
						<p className="font-mono text-5xl font-black tabular-nums">
							{progressValue}%
						</p>
					</div>

					<Progress value={progressValue} className="mt-7">
						<ProgressLabel>Unlocked progress</ProgressLabel>
						<ProgressValue className="text-[#5d574a]">
							{() => `${completedCount}/${chunks.length}`}
						</ProgressValue>
					</Progress>

					{currentChunk ? (
						<div className="mt-6 grid gap-4">
							<div className="bg-[#f9f6ef] p-5 text-[#17140f]">
								<div className="flex flex-wrap gap-2">
									<Badge className="rounded-none bg-[#11110d] text-white">
										Section {currentIndex + 1}
									</Badge>
									<Badge className="rounded-none bg-[#d0aa57] text-[#17140f]">
										{Math.max(chunks.length - currentIndex - 1, 0)} locked
									</Badge>
								</div>
								<p className="mt-5 text-2xl font-black leading-tight">
									{currentChunk.mainClaim}
								</p>
								<p className="mt-4 text-base leading-8 text-[#5d574a]">
									{currentChunk.text}
								</p>
							</div>

							{isComplete ? (
								<Alert className="border-[#14876d]/25 bg-[#effaf2] text-[#17140f]">
									<CheckCircle className="size-4 text-[#14876d]" />
									<AlertTitle>Session completed</AlertTitle>
									<AlertDescription>
										The report is saved. Review the weak spots before sharing
										this as understood.
									</AlertDescription>
								</Alert>
							) : (
								<>
									<Field>
										<FieldLabel>{currentChunk.prompt}</FieldLabel>
										<Textarea
											value={answer}
											onChange={(event) => setAnswer(event.target.value)}
											className="min-h-32 border-[#17140f]/15 bg-[#f9f6ef] text-sm leading-6 text-[#17140f] placeholder:text-[#5d574a]"
											placeholder="Answer in your own words."
										/>
									</Field>
									<Button
										type="button"
										size="lg"
										disabled={isSaving || answer.trim().length < 6}
										onClick={submitReflection}
										className="h-12 w-fit bg-[#11110d] px-5 text-white hover:bg-[#14876d]"
									>
										{isSaving ? "Checking" : "Check and save"}
										<ArrowRight className="size-4" />
									</Button>
								</>
							)}

							{currentResponse ? (
								<Alert
									className={cn(
										"border-[#17140f]/10 text-[#17140f]",
										currentResponse.grade === "clear"
											? "bg-[#effaf2]"
											: "bg-[#fff4ed]",
									)}
								>
									{currentResponse.grade === "clear" ? (
										<CheckCircle className="size-4 text-[#14876d]" />
									) : (
										<WarningCircle className="size-4 text-[#a75d3f]" />
									)}
									<AlertTitle>
										{currentResponse.grade === "clear"
											? "Last answer was clear"
											: "Last answer needs revision"}
									</AlertTitle>
									<AlertDescription>
										{currentResponse.feedback}
									</AlertDescription>
								</Alert>
							) : null}

							{status ? (
								<Alert className="border-[#17140f]/10 bg-[#f9f6ef] text-[#17140f]">
									<LockKey className="size-4 text-[#14876d]" />
									<AlertTitle>Saved</AlertTitle>
									<AlertDescription>{status}</AlertDescription>
								</Alert>
							) : null}
							{error ? (
								<Alert className="border-[#a75d3f]/30 bg-[#fff4ed] text-[#17140f]">
									<WarningCircle className="size-4 text-[#a75d3f]" />
									<AlertTitle>Could not save answer</AlertTitle>
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							) : null}
						</div>
					) : null}
				</div>

				<aside className="grid content-start gap-4">
					<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
						<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
							section map
						</p>
						<div className="mt-5 grid gap-2">
							{chunks.map((chunk, index) => {
								const response = latestResponses[chunk.id];
								const active = index === currentIndex;
								return (
									<div
										key={chunk.id}
										className={cn(
											"border p-3 text-sm",
											active
												? "border-[#14876d] bg-[#14876d]/10"
												: "border-[#17140f]/10 bg-[#f9f6ef]",
										)}
									>
										<div className="flex items-center justify-between gap-2">
											<span className="font-semibold">Section {index + 1}</span>
											<span className="font-mono text-xs text-[#5d574a]">
												{response?.grade ?? "locked"}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
						<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
							understanding report
						</p>
						<p className="mt-5 text-3xl font-black leading-none">
							{isComplete ? "Saved report" : "In progress"}
						</p>
						<div className="mt-5 grid grid-cols-3 gap-2">
							<MiniMetric label="clear" value={report.clearAnswers} />
							<MiniMetric label="revise" value={report.revisions} />
							<MiniMetric label="weak" value={report.weakSections.length} />
						</div>
						<p className="mt-5 text-sm leading-7 text-[#5d574a]">
							{isComplete
								? report.summary
								: "Finish all checkpoints to save a report with claims, strengths, weak spots, and review prompts."}
						</p>
					</div>
				</aside>
			</section>
		</main>
	);
}

function MiniMetric({ label, value }: { label: string; value: number }) {
	return (
		<div className="bg-[#f9f6ef] p-3">
			<p className="font-mono text-2xl font-black tabular-nums">{value}</p>
			<p className="text-xs text-[#5d574a]">{label}</p>
		</div>
	);
}

function buildResponseMap(responses: ResponseRecord[]) {
	const ordered = [...responses].sort(
		(a, b) => Number(a.createdAt ?? 0) - Number(b.createdAt ?? 0),
	);
	const mapped: Record<string, ReaderResponse> = {};

	for (const response of ordered) {
		if (!response.chunk?.id) continue;
		mapped[response.chunk.id] = {
			answer: response.answer,
			feedback: response.feedback ?? "",
			grade: response.grade,
			revisionCount: response.grade === "clear" ? 0 : 1,
		};
	}

	return mapped;
}

function AuthRequired() {
	return (
		<main className="grid min-h-dvh place-items-center px-4 py-8">
			<div className="max-w-2xl border border-[#17140f]/10 bg-white p-6">
				<Badge className="rounded-none bg-[#14876d] text-white">
					Auth required
				</Badge>
				<h1 className="mt-6 text-5xl font-black leading-none">
					Sign in to read this room.
				</h1>
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

function ErrorPage({ message }: { message: string }) {
	return (
		<main className="px-4 py-8 sm:px-6 lg:px-8">
			<Alert className="max-w-2xl border-[#a75d3f]/40 bg-white text-[#17140f]">
				<WarningCircle className="size-4 text-[#a75d3f]" />
				<AlertTitle>Session failed to load</AlertTitle>
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

type SessionData = {
	readingSessions?: SessionRecord[];
};

type SessionRecord = {
	id: string;
	completedAt?: number | Date;
	currentChunkIndex?: number;
	mode: "light" | "serious" | "brutal";
	post?: {
		chunks?: ChunkRecord[];
		title?: string;
	};
	responses?: ResponseRecord[];
	status: "active" | "completed";
	understandingReport?: {
		id?: string;
	};
};

type ChunkRecord = ReadingChunk & {
	id: string;
	index: number;
};

type ResponseRecord = {
	answer: string;
	chunk?: {
		id: string;
	};
	createdAt?: number | Date;
	feedback?: string;
	grade: "clear" | "vague" | "incorrect";
};

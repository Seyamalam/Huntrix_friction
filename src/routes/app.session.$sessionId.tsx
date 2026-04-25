import { Cursors, id } from "@instantdb/react";
import {
	ArrowLeft,
	ArrowRight,
	ArrowsInSimple,
	ArrowsOutSimple,
	ChatCircleDots,
	ChatText,
	CheckCircle,
	Copy,
	Crown,
	CursorClick,
	Globe,
	LockKey,
	Megaphone,
	Minus,
	Plus,
	PushPin,
	Target,
	TextAa,
	UsersThree,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

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
import type { AiGrade, AiReport } from "@/lib/ai-jobs";
import { streamAiJob } from "@/lib/ai-stream";
import { db, isInstantConfigured } from "@/lib/db";
import {
	buildReport,
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
	const room = db.room("readingSessions", sessionId);
	const query = db.useQuery(
		auth.user
			? {
					readingSessions: {
						user: {},
						post: {
							author: {},
							chunks: {},
						},
						comments: {
							author: {},
							chunk: {},
						},
						responses: {
							chunk: {},
							responder: {},
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
	const [aiStream, setAiStream] = useState("");
	const [aiThinkingTokens, setAiThinkingTokens] = useState(0);
	const [comment, setComment] = useState("");
	const [facilitatorNote, setFacilitatorNote] = useState("");
	const [copied, setCopied] = useState(false);
	const [isPostingComment, setIsPostingComment] = useState(false);
	const [isUpdatingSession, setIsUpdatingSession] = useState(false);
	const [responseActionId, setResponseActionId] = useState("");
	const [isZenMode, setIsZenMode] = useState(false);
	const [fontScale, setFontScale] = useState(1);
	const [redFocusMode, setRedFocusMode] = useState(false);
	const submitReflectionRef = useRef<() => Promise<void>>(async () => {});
	const cursorColor = useRef(
		colorFromString(auth.user?.id ?? sessionId),
	).current;

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
	const userResponses = useMemo(
		() =>
			(session?.responses ?? []).filter(
				(response) => response.responder?.id === auth.user?.id,
			),
		[auth.user?.id, session?.responses],
	);
	const latestResponses = useMemo(
		() => buildResponseMap(userResponses),
		[userResponses],
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
	const sessionAccess = session?.access ?? "private";
	const isOwner = Boolean(
		auth.user?.id &&
			(auth.user.id === session?.user?.id ||
				auth.user.id === session?.post?.author?.id),
	);
	const displayName = getDisplayName(auth.user, sessionId);
	const presenceData = useMemo(
		() => ({
			currentSection: currentIndex + 1,
			email: auth.user?.email ?? "",
			id: auth.user?.id ?? "",
			name: displayName,
			progress: completedCount,
			status: isComplete ? "completed" : "active",
		}),
		[
			auth.user?.email,
			auth.user?.id,
			completedCount,
			currentIndex,
			displayName,
			isComplete,
		],
	);
	db.rooms.useSyncPresence(room, presenceData, [
		presenceData.currentSection,
		presenceData.email,
		presenceData.id,
		presenceData.name,
		presenceData.progress,
		presenceData.status,
	]);
	const presence = db.rooms.usePresence(room, { user: true });
	const typing = db.rooms.useTypingIndicator(room, "answerInput", {
		stopOnEnter: false,
	});
	const sharedAnswers = useMemo(
		() =>
			[...(session?.responses ?? [])].sort(
				(a, b) => Number(b.createdAt ?? 0) - Number(a.createdAt ?? 0),
			),
		[session?.responses],
	);
	const currentSectionAnswers = useMemo(
		() =>
			sharedAnswers.filter(
				(response) => response.chunk?.id === currentChunk?.id,
			),
		[sharedAnswers, currentChunk?.id],
	);
	const currentSectionComments = useMemo(
		() =>
			[...(session?.comments ?? [])]
				.filter((item) => item.chunk?.id === currentChunk?.id)
				.sort((a, b) => Number(a.createdAt ?? 0) - Number(b.createdAt ?? 0)),
		[session?.comments, currentChunk?.id],
	);
	const groupProgress = useMemo(
		() => buildParticipantProgress(sharedAnswers, chunks.length),
		[sharedAnswers, chunks.length],
	);
	const groupReport = useMemo(
		() => buildGroupReport(chunks, sharedAnswers),
		[chunks, sharedAnswers],
	);
	const canOverrideCurrent = Boolean(
		currentResponse && currentResponse.grade !== "clear" && !isComplete,
	);

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
		setAiStream("");
		setAiThinkingTokens(0);

		let result: AiGrade;
		try {
			result = await streamAiJob(
				{
					answer: cleanAnswer,
					chunkText: currentChunk.text,
					job: "grade",
					mode: session.mode,
					prompt: currentChunk.prompt,
				},
				(delta, kind) => {
					if (kind === "thinking") {
						setAiThinkingTokens((current) => current + 1);
						return;
					}
					setAiStream((current) => `${current}${delta}`);
				},
			);
		} catch (err) {
			setError(getAiErrorMessage(err));
			setIsSaving(false);
			return;
		}

		const nextResponse: ReaderResponse = {
			answer: cleanAnswer,
			feedback:
				result.grade === "clear" || !result.followUp
					? result.feedback
					: `${result.feedback} ${result.followUp}`,
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
		let aiReport: AiReport | undefined;

		if (isOwner && completesSession) {
			try {
				aiReport = await streamAiJob(
					buildReportPayload(chunks, nextResponseMap),
					(delta, kind) => {
						if (kind === "thinking") {
							setAiThinkingTokens((current) => current + 1);
							return;
						}
						setAiStream((current) => `${current}${delta}`);
					},
				);
			} catch (err) {
				setError(
					`${getAiErrorMessage(err)} The answer was checked, but the report was not generated.`,
				);
				setIsSaving(false);
				return;
			}
		}

		try {
			const tx: unknown[] = [
				db.tx.responses[responseId]
					.update({
						answer: cleanAnswer,
						createdAt: now,
						feedback: result.feedback,
						grade: result.grade,
						responderName: displayName,
					})
					.link({
						chunk: currentChunk.id,
						responder: auth.user.id,
						session: session.id,
					}),
			];

			if (isOwner && result.grade === "clear") {
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

			if (isOwner && completesSession) {
				const reportId = session.understandingReport?.id ?? id();
				tx.push(
					db.tx.understandingReports[reportId]
						.update({
							createdAt: now,
							keyClaims: aiReport?.keyClaims ?? [],
							recommendedReview: aiReport?.recommendedReview ?? [],
							strengths: aiReport?.strengths ?? [],
							weakSpots: aiReport?.weakSpots ?? [],
						})
						.link({ session: session.id }),
				);
			}

			await db.transact(tx as Parameters<typeof db.transact>[0]);
			setAnswer("");
			setStatus(
				result.grade === "clear"
					? completesSession
						? "Session complete. Understanding report saved."
						: "Clear enough. The next section is open."
					: "Not clear yet. Answer the follow-up, or continue anyway if you accept the weak spot.",
			);
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsSaving(false);
		}
	}

	async function continueAfterFollowUp() {
		if (!session || !currentChunk || !canOverrideCurrent || !isOwner) return;

		setIsSaving(true);
		setStatus("");
		setError("");
		setAiStream("");
		setAiThinkingTokens(0);

		const completesSession = currentIndex >= chunks.length - 1;
		let aiReport: AiReport | undefined;

		if (completesSession) {
			try {
				aiReport = await streamAiJob(
					buildReportPayload(chunks, latestResponses),
					(delta, kind) => {
						if (kind === "thinking") {
							setAiThinkingTokens((current) => current + 1);
							return;
						}
						setAiStream((current) => `${current}${delta}`);
					},
				);
			} catch (err) {
				setError(
					`${getAiErrorMessage(err)} The final report was not generated.`,
				);
				setIsSaving(false);
				return;
			}
		}

		try {
			const tx: unknown[] = [
				db.tx.readingSessions[session.id].update(
					completesSession
						? {
								completedAt: Date.now(),
								currentChunkIndex: currentIndex,
								status: "completed" as const,
							}
						: {
								currentChunkIndex: Math.min(
									currentIndex + 1,
									chunks.length - 1,
								),
								status: "active" as const,
							},
				),
			];

			if (completesSession) {
				const reportId = session.understandingReport?.id ?? id();
				tx.push(
					db.tx.understandingReports[reportId]
						.update({
							createdAt: Date.now(),
							keyClaims: aiReport?.keyClaims ?? [],
							recommendedReview: aiReport?.recommendedReview ?? [],
							strengths: aiReport?.strengths ?? [],
							weakSpots: aiReport?.weakSpots ?? [],
						})
						.link({ session: session.id }),
				);
			}

			await db.transact(tx as Parameters<typeof db.transact>[0]);
			setAnswer("");
			setStatus(
				completesSession
					? "Session complete with weak spots preserved in the report."
					: "Moved forward after the AI follow-up. This section stays marked as weak.",
			);
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsSaving(false);
		}
	}

	async function copySessionLink() {
		const link =
			typeof window === "undefined"
				? `/app/session/${sessionId}`
				: window.location.href;
		try {
			await navigator.clipboard.writeText(link);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {
			setError("Could not copy the session link from this browser.");
		}
	}

	async function updateAccess(access: SessionAccess) {
		if (!session || !isOwner) return;
		setIsUpdatingSession(true);
		setError("");
		try {
			await db.transact(db.tx.readingSessions[session.id].update({ access }));
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsUpdatingSession(false);
		}
	}

	async function publishFacilitatorNote() {
		if (!session || !isOwner) return;
		const cleanNote = facilitatorNote.trim();
		setIsUpdatingSession(true);
		setError("");
		try {
			await db.transact(
				db.tx.readingSessions[session.id].update({
					facilitatorNote: cleanNote,
				}),
			);
			setFacilitatorNote("");
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsUpdatingSession(false);
		}
	}

	async function moveGroupToCurrentSection() {
		if (!session || !isOwner) return;
		setIsUpdatingSession(true);
		setError("");
		try {
			await db.transact(
				db.tx.readingSessions[session.id].update({
					groupCurrentChunkIndex: currentIndex,
				}),
			);
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsUpdatingSession(false);
		}
	}

	async function postComment() {
		if (!auth.user || !session || !currentChunk) return;
		const cleanComment = comment.trim();
		if (cleanComment.length < 2) return;

		setIsPostingComment(true);
		setError("");
		try {
			await db.transact(
				db.tx.sectionComments[id()]
					.update({
						authorName: displayName,
						body: cleanComment,
						createdAt: Date.now(),
					})
					.link({
						author: auth.user.id,
						chunk: currentChunk.id,
						session: session.id,
					}),
			);
			setComment("");
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsPostingComment(false);
		}
	}

	async function toggleFeaturedResponse(response: ResponseRecord) {
		if (!isOwner) return;
		setResponseActionId(response.id);
		setError("");
		try {
			await db.transact(
				db.tx.responses[response.id].update({
					isFeatured: !response.isFeatured,
				}),
			);
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setResponseActionId("");
		}
	}

	submitReflectionRef.current = submitReflection;

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			const target = event.target as HTMLElement | null;
			const tagName = target?.tagName.toLowerCase();
			const isEditable =
				target?.isContentEditable ||
				tagName === "input" ||
				tagName === "textarea" ||
				tagName === "select";
			const key = event.key.toLowerCase();

			if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
				event.preventDefault();
				if (
					auth.user &&
					session &&
					currentChunk &&
					!isSaving &&
					!isComplete &&
					answer.trim().length >= 6
				) {
					void submitReflectionRef.current();
				}
				return;
			}

			if (isEditable || event.metaKey || event.ctrlKey || event.altKey) return;

			if (key === "z") {
				event.preventDefault();
				setIsZenMode((current) => !current);
				return;
			}

			if (key === "r") {
				event.preventDefault();
				setRedFocusMode((current) => !current);
				return;
			}

			if (event.key === "+" || event.key === "=") {
				event.preventDefault();
				setFontScale((current) => Math.min(1.45, roundFont(current + 0.1)));
				return;
			}

			if (event.key === "-" || event.key === "_") {
				event.preventDefault();
				setFontScale((current) => Math.max(0.85, roundFont(current - 0.1)));
				return;
			}

			if (event.key === "Escape" && isZenMode) {
				event.preventDefault();
				setIsZenMode(false);
			}
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [
		answer,
		auth.user,
		currentChunk,
		isComplete,
		isSaving,
		isZenMode,
		session,
	]);

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
		const message =
			getMaybeErrorMessage(query.error) ??
			getMaybeErrorMessage(auth.error) ??
			"";
		return <ErrorPage message={message} />;
	}

	if (!session) {
		return <ErrorPage message="This reading session was not found." />;
	}

	return (
		<Cursors
			room={room}
			spaceId="cursor"
			userCursorColor={cursorColor}
			className={cn(
				"bg-[#f5f1e8]",
				isZenMode
					? "fixed inset-0 z-50 px-3 py-3 sm:px-5"
					: "min-h-dvh px-4 py-5 sm:px-6 lg:px-8",
			)}
			zIndex={60}
		>
			<section
				className={cn(
					"grid h-[calc(100dvh-2.5rem)] min-h-0 gap-4 overflow-hidden",
					isZenMode
						? "grid-cols-1"
						: "xl:grid-cols-[minmax(0,1fr)_minmax(21rem,24rem)]",
				)}
			>
				<div className="flex min-h-0 flex-col border border-[#17140f]/10 bg-white text-[#17140f]">
					<header className="shrink-0 border-b border-[#17140f]/10 bg-white/95 p-4 backdrop-blur">
						<div className="flex flex-wrap items-center justify-between gap-3">
							{isZenMode ? (
								<div className="min-w-0">
									<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
										Zen reader
									</p>
									<p className="mt-1 truncate text-sm font-black">
										{session.post?.title ?? "Reading session"}
									</p>
								</div>
							) : (
								<Link
									to="/app"
									className="inline-flex items-center gap-2 text-sm font-semibold text-[#5d574a] hover:text-[#17140f]"
								>
									<ArrowLeft className="size-4" />
									Back to workspace
								</Link>
							)}
							<ReaderControls
								fontScale={fontScale}
								isZenMode={isZenMode}
								redFocusMode={redFocusMode}
								onDecreaseFont={() =>
									setFontScale((current) =>
										Math.max(0.85, roundFont(current - 0.1)),
									)
								}
								onIncreaseFont={() =>
									setFontScale((current) =>
										Math.min(1.45, roundFont(current + 0.1)),
									)
								}
								onResetFont={() => setFontScale(1)}
								onToggleRedFocus={() => setRedFocusMode((current) => !current)}
								onToggleZen={() => setIsZenMode((current) => !current)}
							/>
						</div>

						{!isZenMode ? (
							<>
								<div className="mt-5 flex flex-wrap items-start justify-between gap-4">
									<div>
										<Badge className="rounded-none bg-[#14876d] text-white">
											{session.mode}
										</Badge>
										<h1 className="mt-4 max-w-4xl text-3xl font-black leading-none text-balance lg:text-5xl">
											{session.post?.title ?? "Reading session"}
										</h1>
									</div>
									<p className="font-mono text-5xl font-black tabular-nums">
										{progressValue}%
									</p>
								</div>

								<Progress value={progressValue} className="mt-5">
									<ProgressLabel>Unlocked progress</ProgressLabel>
									<ProgressValue className="text-[#5d574a]">
										{() => `${completedCount}/${chunks.length}`}
									</ProgressValue>
								</Progress>

								<SessionShareControls
									access={sessionAccess}
									copied={copied}
									disabled={isUpdatingSession}
									isOwner={isOwner}
									onCopy={copySessionLink}
									onUpdateAccess={updateAccess}
								/>
							</>
						) : null}
					</header>

					{currentChunk ? (
						<div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto]">
							<article className="min-h-0 overflow-y-auto bg-[#fbf8f1] px-5 py-6 sm:px-8 lg:px-12">
								<div className="mx-auto max-w-4xl">
									<div className="flex flex-wrap gap-2">
										<Badge className="rounded-none bg-[#11110d] text-white">
											Section {currentIndex + 1}
										</Badge>
										<Badge className="rounded-none bg-[#d0aa57] text-[#17140f]">
											{Math.max(chunks.length - currentIndex - 1, 0)} locked
										</Badge>
										{redFocusMode ? (
											<Badge className="rounded-none bg-[#fff4ed] text-[#a75d3f]">
												red focus
											</Badge>
										) : null}
									</div>
									<h2 className="mt-6 text-3xl font-black leading-tight text-balance lg:text-5xl">
										{currentChunk.mainClaim}
									</h2>
									<FormattedReadingText
										fontScale={fontScale}
										redFocusMode={redFocusMode}
										text={currentChunk.markdown ?? currentChunk.text}
									/>
								</div>
							</article>

							<div className="max-h-[42dvh] overflow-y-auto border-t border-[#17140f]/10 bg-white p-4">
								<div className="mx-auto grid max-w-4xl gap-4">
									{isComplete ? (
										<Alert className="border-[#14876d]/25 bg-[#effaf2] text-[#17140f]">
											<CheckCircle className="size-4 text-[#14876d]" />
											<AlertTitle>Session completed</AlertTitle>
											<AlertDescription>
												The report is saved. Review the weak spots before
												sharing this as understood.
											</AlertDescription>
										</Alert>
									) : (
										<>
											<Field>
												<FieldLabel>{currentChunk.prompt}</FieldLabel>
												<Textarea
													value={answer}
													onChange={(event) => setAnswer(event.target.value)}
													onKeyDown={typing.inputProps.onKeyDown}
													onBlur={typing.inputProps.onBlur}
													className="min-h-32 border-[#17140f]/15 bg-[#f9f6ef] text-sm leading-6 text-[#17140f] placeholder:text-[#5d574a]"
													placeholder="Answer in your own words."
												/>
												<p className="min-h-5 text-xs font-medium text-[#5d574a]">
													{typing.active.length
														? typingInfo(typing.active)
														: " "}
												</p>
											</Field>
											<Button
												type="button"
												size="lg"
												disabled={isSaving || answer.trim().length < 6}
												onClick={submitReflection}
												className="h-12 w-fit bg-[#11110d] px-5 text-white hover:bg-[#14876d]"
											>
												{isSaving ? "Streaming AI check" : "Check and save"}
												<ArrowRight className="size-4" />
											</Button>
											{canOverrideCurrent && isOwner ? (
												<Button
													type="button"
													size="lg"
													disabled={isSaving}
													onClick={continueAfterFollowUp}
													className="h-12 w-fit border border-[#17140f]/15 bg-white px-5 text-[#17140f] hover:bg-[#f9f6ef]"
												>
													Continue after follow-up
													<ArrowRight className="size-4" />
												</Button>
											) : null}
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
									{isSaving && aiStream ? (
										<div className="max-h-44 overflow-hidden border border-[#17140f]/10 bg-[#11110d] p-4 font-mono text-xs leading-5 text-white/75">
											{aiStream.slice(-1200)}
										</div>
									) : null}
									{isSaving && aiThinkingTokens > 0 ? (
										<div className="border border-[#17140f]/10 bg-[#11110d] p-4 font-mono text-xs uppercase tracking-[0.14em] text-[#d0aa57]">
											AI thinking stream active · {aiThinkingTokens} ticks
										</div>
									) : null}
									{error ? (
										<Alert className="border-[#a75d3f]/30 bg-[#fff4ed] text-[#17140f]">
											<WarningCircle className="size-4 text-[#a75d3f]" />
											<AlertTitle>Could not save answer</AlertTitle>
											<AlertDescription>{error}</AlertDescription>
										</Alert>
									) : null}
								</div>
							</div>
						</div>
					) : null}
				</div>

				<aside
					className={cn("min-h-0 overflow-y-auto pr-1", isZenMode && "hidden")}
				>
					<div className="grid content-start gap-4">
						<PresencePanel
							chunkCount={chunks.length}
							currentSection={currentIndex + 1}
							presence={presence}
							typingPeers={typing.active}
						/>

						<FacilitatorPanel
							currentNote={session.facilitatorNote}
							currentSection={currentIndex + 1}
							disabled={isUpdatingSession}
							groupSection={Number(session.groupCurrentChunkIndex ?? 0) + 1}
							isOwner={isOwner}
							note={facilitatorNote}
							onMoveGroup={moveGroupToCurrentSection}
							onNoteChange={setFacilitatorNote}
							onPublishNote={publishFacilitatorNote}
						/>

						<ParticipantProgressPanel progress={groupProgress} />

						<SectionMapPanel
							chunks={chunks}
							currentIndex={currentIndex}
							latestResponses={latestResponses}
						/>

						<SectionAnswersPanel
							answers={currentSectionAnswers}
							isOwner={isOwner}
							onToggleFeatured={toggleFeaturedResponse}
							responseActionId={responseActionId}
						/>

						<SectionDiscussionPanel
							comment={comment}
							comments={currentSectionComments}
							disabled={isPostingComment}
							onCommentChange={setComment}
							onPostComment={postComment}
						/>

						<GroupReportPanel report={groupReport} />

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
					</div>
				</aside>
			</section>
		</Cursors>
	);
}

function ReaderControls({
	fontScale,
	isZenMode,
	redFocusMode,
	onDecreaseFont,
	onIncreaseFont,
	onResetFont,
	onToggleRedFocus,
	onToggleZen,
}: {
	fontScale: number;
	isZenMode: boolean;
	redFocusMode: boolean;
	onDecreaseFont: () => void;
	onIncreaseFont: () => void;
	onResetFont: () => void;
	onToggleRedFocus: () => void;
	onToggleZen: () => void;
}) {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<div className="flex items-center border border-[#17140f]/10 bg-[#f9f6ef]">
				<Button
					type="button"
					variant="ghost"
					onClick={onDecreaseFont}
					className="h-9 w-9 rounded-none text-[#17140f] hover:bg-[#17140f]/10"
					aria-label="Decrease font size"
					title="-"
				>
					<Minus className="size-4" />
				</Button>
				<Button
					type="button"
					variant="ghost"
					onClick={onResetFont}
					className="h-9 rounded-none px-3 font-mono text-xs text-[#5d574a] hover:bg-[#17140f]/10 hover:text-[#17140f]"
					title="Reset font size"
				>
					<TextAa className="size-4" />
					{Math.round(fontScale * 100)}%
				</Button>
				<Button
					type="button"
					variant="ghost"
					onClick={onIncreaseFont}
					className="h-9 w-9 rounded-none text-[#17140f] hover:bg-[#17140f]/10"
					aria-label="Increase font size"
					title="+"
				>
					<Plus className="size-4" />
				</Button>
			</div>
			<Button
				type="button"
				onClick={onToggleRedFocus}
				className={cn(
					"h-9 rounded-none border px-3 text-xs font-bold",
					redFocusMode
						? "border-[#a75d3f] bg-[#a75d3f] text-white hover:bg-[#8d4f35]"
						: "border-[#17140f]/10 bg-white text-[#5d574a] hover:bg-[#f9f6ef]",
				)}
				title="R"
			>
				Red focus
			</Button>
			<Button
				type="button"
				onClick={onToggleZen}
				className="h-9 rounded-none bg-[#11110d] px-3 text-white hover:bg-[#14876d]"
				title="Z"
			>
				{isZenMode ? (
					<ArrowsInSimple className="size-4" />
				) : (
					<ArrowsOutSimple className="size-4" />
				)}
				{isZenMode ? "Exit zen" : "Zen"}
			</Button>
		</div>
	);
}

function FormattedReadingText({
	fontScale,
	redFocusMode,
	text,
}: {
	fontScale: number;
	redFocusMode: boolean;
	text: string;
}) {
	const blocks = stableTextParts(expandReadingBlocks(text));

	return (
		<div
			className="mt-8 grid gap-5 text-[#3f392f]"
			style={{
				fontSize: `${1.1 * fontScale}rem`,
				lineHeight: 1.85,
			}}
		>
			{blocks.length ? (
				blocks.map((block) => (
					<ReadingBlock
						key={block.key}
						redFocusMode={redFocusMode}
						text={block.text}
					/>
				))
			) : (
				<p>{text}</p>
			)}
		</div>
	);
}

function ReadingBlock({
	redFocusMode,
	text,
}: {
	redFocusMode: boolean;
	text: string;
}) {
	const heading = text.match(/^(#{1,3})\s+(.+)/);
	const bullet = text.match(/^[-*]\s+(.+)/);
	const numbered = text.match(/^\d+\.\s+(.+)/);

	if (heading) {
		return (
			<h3 className="text-3xl font-black leading-tight text-[#17140f]">
				<InlineReadingText redFocusMode={redFocusMode} text={heading[2]} />
			</h3>
		);
	}

	if (bullet) {
		return (
			<div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-3">
				<span className="mt-3 size-1.5 bg-[#14876d]" />
				<p>
					<InlineReadingText redFocusMode={redFocusMode} text={bullet[1]} />
				</p>
			</div>
		);
	}

	if (numbered) {
		return (
			<div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
				<span className="font-mono text-sm font-black text-[#14876d]">
					{text.match(/^\d+/)?.[0]}.
				</span>
				<p>
					<InlineReadingText redFocusMode={redFocusMode} text={numbered[1]} />
				</p>
			</div>
		);
	}

	return (
		<p>
			<InlineReadingText redFocusMode={redFocusMode} text={text} />
		</p>
	);
}

function InlineReadingText({
	redFocusMode,
	text,
}: {
	redFocusMode: boolean;
	text: string;
}) {
	const segments = stableTextParts(
		text.split(
			/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*[^*]+\*|_[^_]+_)/g,
		),
	);

	return (
		<>
			{segments.map((segment) => (
				<InlineReadingSegment
					key={segment.key}
					redFocusMode={redFocusMode}
					text={segment.text}
				/>
			))}
		</>
	);
}

function InlineReadingSegment({
	redFocusMode,
	text,
}: {
	redFocusMode: boolean;
	text: string;
}) {
	const link = text.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
	if (link) {
		return (
			<a
				href={link[2]}
				target="_blank"
				rel="noreferrer"
				className="font-bold text-[#14876d] underline decoration-[#14876d]/30 underline-offset-4"
			>
				<FocusedText redFocusMode={redFocusMode} text={link[1]} />
			</a>
		);
	}

	if (text.startsWith("**") && text.endsWith("**")) {
		return (
			<strong className="font-black text-[#17140f]">
				<FocusedText redFocusMode={redFocusMode} text={text.slice(2, -2)} />
			</strong>
		);
	}

	if (text.startsWith("__") && text.endsWith("__")) {
		return (
			<strong className="font-black text-[#17140f]">
				<FocusedText redFocusMode={redFocusMode} text={text.slice(2, -2)} />
			</strong>
		);
	}

	if (text.startsWith("`") && text.endsWith("`")) {
		return (
			<code className="border border-[#17140f]/10 bg-white px-1.5 py-0.5 font-mono text-[0.9em] text-[#17140f]">
				{text.slice(1, -1)}
			</code>
		);
	}

	if (
		(text.startsWith("*") && text.endsWith("*")) ||
		(text.startsWith("_") && text.endsWith("_"))
	) {
		return (
			<em className="text-[#5d574a]">
				<FocusedText redFocusMode={redFocusMode} text={text.slice(1, -1)} />
			</em>
		);
	}

	return <FocusedText redFocusMode={redFocusMode} text={text} />;
}

function expandReadingBlocks(text: string) {
	return text
		.split(/\n{2,}/)
		.flatMap((block) => {
			const trimmed = block.trim();
			const lines = trimmed
				.split(/\n/)
				.map((line) => line.trim())
				.filter(Boolean);
			const isList = lines.every((line) => /^([-*]|\d+\.)\s+/.test(line));

			return isList ? lines : [trimmed.replace(/\n+/g, " ")];
		})
		.filter(Boolean);
}

function FocusedText({
	redFocusMode,
	text,
}: {
	redFocusMode: boolean;
	text: string;
}) {
	const tokens = stableTextParts(text.split(/(\s+)/));

	return (
		<>
			{tokens.map((token) =>
				token.text.trim() ? (
					<ReadingWord
						key={token.key}
						redFocusMode={redFocusMode}
						word={token.text}
					/>
				) : (
					token.text
				),
			)}
		</>
	);
}

function stableTextParts(parts: string[]) {
	const counts = new Map<string, number>();

	return parts.map((text) => {
		const count = counts.get(text) ?? 0;
		counts.set(text, count + 1);
		return {
			key: `${text.slice(0, 32)}:${count}`,
			text,
		};
	});
}

function roundFont(value: number) {
	return Number(value.toFixed(2));
}

function ReadingWord({
	redFocusMode,
	word,
}: {
	redFocusMode: boolean;
	word: string;
}) {
	if (!redFocusMode || word.length < 4) return <>{word}</>;

	const firstAlpha = word.search(/[A-Za-z0-9]/);
	const lastAlpha = Math.max(
		...Array.from(word)
			.map((char, index) => (/[A-Za-z0-9]/.test(char) ? index : -1))
			.filter((index) => index >= 0),
	);

	if (firstAlpha < 0 || lastAlpha < firstAlpha) return <>{word}</>;

	const middle = Math.floor((firstAlpha + lastAlpha) / 2);

	return (
		<>
			{word.slice(0, middle)}
			<span className="font-black text-[#c43f2f]">{word[middle]}</span>
			{word.slice(middle + 1)}
		</>
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

function SessionShareControls({
	access,
	copied,
	disabled,
	isOwner,
	onCopy,
	onUpdateAccess,
}: {
	access: SessionAccess;
	copied: boolean;
	disabled: boolean;
	isOwner: boolean;
	onCopy: () => void;
	onUpdateAccess: (access: SessionAccess) => void;
}) {
	const accessOptions: Array<{
		icon: typeof LockKey;
		label: string;
		value: SessionAccess;
	}> = [
		{ icon: LockKey, label: "Private", value: "private" },
		{ icon: UsersThree, label: "Invite link", value: "invite" },
		{ icon: Globe, label: "Public", value: "public" },
	];

	return (
		<div className="mt-5 grid gap-3 border border-[#17140f]/10 bg-[#f9f6ef] p-4 lg:grid-cols-[1fr_auto]">
			<div>
				<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
					share settings
				</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{accessOptions.map(({ icon: Icon, label, value }) => (
						<Button
							key={value}
							type="button"
							disabled={!isOwner || disabled}
							onClick={() => onUpdateAccess(value)}
							className={cn(
								"h-9 border px-3 text-xs font-bold",
								access === value
									? "border-[#11110d] bg-[#11110d] text-white"
									: "border-[#17140f]/10 bg-white text-[#5d574a] hover:bg-white",
							)}
						>
							<Icon className="size-4" />
							{label}
						</Button>
					))}
				</div>
			</div>
			<Button
				type="button"
				onClick={onCopy}
				className="h-11 self-end bg-[#14876d] text-white hover:bg-[#11110d]"
			>
				<Copy className="size-4" />
				{copied ? "Copied" : "Copy session link"}
			</Button>
		</div>
	);
}

function PresencePanel({
	chunkCount,
	currentSection,
	presence,
	typingPeers,
}: {
	chunkCount: number;
	currentSection: number;
	presence: {
		peers: Record<string, PresencePerson>;
		user?: PresencePerson;
	};
	typingPeers: PresencePerson[];
}) {
	const peers = Object.entries(presence.peers ?? {});
	const readers = [
		...(presence.user ? [["you", presence.user] as const] : []),
		...peers,
	];
	const activeIds = new Set(
		typingPeers.map((peer) => peer.id ?? peer.name).filter(Boolean),
	);

	return (
		<div className="border border-[#17140f]/10 bg-[#11110d] p-5 text-white">
			<div className="flex items-center justify-between gap-3">
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d0aa57]">
						live session
					</p>
					<p className="mt-2 text-2xl font-black leading-none">
						{readers.length || 1} reading now
					</p>
				</div>
				<UsersThree className="size-7 text-[#d0aa57]" />
			</div>

			<div className="mt-5 grid gap-3">
				{readers.map(([peerId, peer]) => {
					const name = peer.name || shortPeerId(peerId);
					const isTyping = activeIds.has(peer.id) || activeIds.has(peer.name);
					return (
						<div
							key={peerId}
							className="flex items-center gap-3 border border-white/10 bg-white/5 p-3"
						>
							<div className="relative">
								<img
									src={`https://instantdb.com/api/avatar?name=${encodeURIComponent(name)}&size=40`}
									alt=""
									className="size-10 rounded-full"
								/>
								<span className="absolute -right-0.5 -bottom-0.5 size-3 border-2 border-[#11110d] bg-[#14876d]" />
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-bold">{name}</p>
								<p className="text-xs text-white/55">
									Section {peer.currentSection ?? currentSection} ·{" "}
									{peer.progress ?? 0}/{chunkCount || 1} clear
								</p>
							</div>
							{isTyping ? (
								<span className="inline-flex items-center gap-1 bg-[#d0aa57] px-2 py-1 text-[11px] font-bold text-[#17140f]">
									<ChatCircleDots className="size-3" />
									typing
								</span>
							) : null}
						</div>
					);
				})}
			</div>

			<div className="mt-4 flex items-center gap-2 text-xs text-white/55">
				<CursorClick className="size-4 text-[#d0aa57]" />
				Cursors appear when collaborators move around this page.
			</div>
		</div>
	);
}

function FacilitatorPanel({
	currentNote,
	currentSection,
	disabled,
	groupSection,
	isOwner,
	note,
	onMoveGroup,
	onNoteChange,
	onPublishNote,
}: {
	currentNote?: string;
	currentSection: number;
	disabled: boolean;
	groupSection: number;
	isOwner: boolean;
	note: string;
	onMoveGroup: () => void;
	onNoteChange: (value: string) => void;
	onPublishNote: () => void;
}) {
	return (
		<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
			<div className="flex items-start justify-between gap-3">
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
						facilitator
					</p>
					<p className="mt-2 text-sm leading-6 text-[#5d574a]">
						Group target: section {groupSection}
					</p>
				</div>
				<Crown className="size-5 text-[#d0aa57]" />
			</div>
			{currentNote ? (
				<div className="mt-4 border border-[#17140f]/10 bg-[#f9f6ef] p-3">
					<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#14876d]">
						<Megaphone className="size-4" />
						note
					</p>
					<p className="mt-2 text-sm leading-6 text-[#5d574a]">{currentNote}</p>
				</div>
			) : null}
			{isOwner ? (
				<div className="mt-4 grid gap-3">
					<Button
						type="button"
						disabled={disabled}
						onClick={onMoveGroup}
						className="h-10 bg-[#11110d] text-white hover:bg-[#14876d]"
					>
						<Target className="size-4" />
						Nudge group to section {currentSection}
					</Button>
					<Textarea
						value={note}
						onChange={(event) => onNoteChange(event.target.value)}
						className="min-h-20 border-[#17140f]/15 bg-[#f9f6ef] text-sm"
						placeholder="Leave a short note for everyone in the session."
					/>
					<Button
						type="button"
						disabled={disabled}
						onClick={onPublishNote}
						className="h-10 bg-[#14876d] text-white hover:bg-[#11110d]"
					>
						<Megaphone className="size-4" />
						Publish note
					</Button>
				</div>
			) : null}
		</div>
	);
}

function ParticipantProgressPanel({
	progress,
}: {
	progress: ParticipantProgress[];
}) {
	return (
		<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
			<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
				reader progress
			</p>
			{progress.length ? (
				<div className="mt-5 grid gap-3">
					{progress.map((reader) => (
						<div key={reader.name} className="bg-[#f9f6ef] p-3">
							<div className="flex items-center justify-between gap-3">
								<p className="truncate text-sm font-black">{reader.name}</p>
								<p className="font-mono text-xs text-[#5d574a]">
									{reader.clear}/{reader.total}
								</p>
							</div>
							<div className="mt-3 h-2 bg-[#17140f]/10">
								<div
									className="h-full bg-[#14876d]"
									style={{ width: `${reader.percent}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="mt-5 text-sm leading-7 text-[#5d574a]">
					Reader progress appears after someone submits an answer.
				</p>
			)}
		</div>
	);
}

function SectionMapPanel({
	chunks,
	currentIndex,
	latestResponses,
}: {
	chunks: ChunkRecord[];
	currentIndex: number;
	latestResponses: Record<string, ReaderResponse>;
}) {
	return (
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
							<p className="mt-2 line-clamp-2 text-xs leading-5 text-[#5d574a]">
								{chunk.mainClaim}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function SectionAnswersPanel({
	answers,
	isOwner,
	onToggleFeatured,
	responseActionId,
}: {
	answers: ResponseRecord[];
	isOwner: boolean;
	onToggleFeatured: (response: ResponseRecord) => void;
	responseActionId: string;
}) {
	return (
		<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
			<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
				this section's answers
			</p>
			{answers.length ? (
				<div className="mt-5 grid gap-3 md:grid-cols-2">
					{answers.map((response) => {
						const name =
							response.responderName || response.responder?.name || "Reader";
						return (
							<article
								key={response.id}
								className="border border-[#17140f]/10 bg-[#f9f6ef] p-3"
							>
								<div className="flex items-start justify-between gap-3">
									<div className="min-w-0">
										<p className="flex items-center gap-2 truncate text-sm font-black">
											{name}
											{response.isFeatured ? (
												<PushPin className="size-4 text-[#d0aa57]" />
											) : null}
										</p>
										<p className="text-xs text-[#5d574a]">
											Section {response.chunk?.index ?? "?"} ·{" "}
											{formatStamp(response.createdAt)}
										</p>
									</div>
									<Badge
										className={cn(
											"rounded-none",
											response.grade === "clear"
												? "bg-[#14876d] text-white"
												: "bg-[#d0aa57] text-[#17140f]",
										)}
									>
										{response.grade}
									</Badge>
								</div>
								<p className="mt-3 line-clamp-5 text-sm leading-6 text-[#5d574a]">
									{response.answer}
								</p>
								{isOwner ? (
									<Button
										type="button"
										disabled={responseActionId === response.id}
										onClick={() => onToggleFeatured(response)}
										className="mt-3 h-9 bg-[#11110d] text-white hover:bg-[#14876d]"
									>
										<PushPin className="size-4" />
										{response.isFeatured ? "Unmark best" : "Mark best"}
									</Button>
								) : null}
							</article>
						);
					})}
				</div>
			) : (
				<p className="mt-5 text-sm leading-7 text-[#5d574a]">
					Answers from everyone reading this section will appear here.
				</p>
			)}
		</div>
	);
}

function SectionDiscussionPanel({
	comment,
	comments,
	disabled,
	onCommentChange,
	onPostComment,
}: {
	comment: string;
	comments: CommentRecord[];
	disabled: boolean;
	onCommentChange: (value: string) => void;
	onPostComment: () => void;
}) {
	return (
		<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
			<p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
				<ChatText className="size-4" />
				section discussion
			</p>
			<div className="mt-5 grid gap-3">
				{comments.map((item) => (
					<div
						key={item.id}
						className="border border-[#17140f]/10 bg-[#f9f6ef] p-3"
					>
						<div className="flex items-center justify-between gap-3">
							<p className="text-sm font-black">
								{item.authorName || item.author?.name || "Reader"}
							</p>
							<p className="font-mono text-xs text-[#5d574a]">
								{formatStamp(item.createdAt)}
							</p>
						</div>
						<p className="mt-2 text-sm leading-6 text-[#5d574a]">{item.body}</p>
					</div>
				))}
			</div>
			<div className="mt-4 grid gap-3">
				<Textarea
					value={comment}
					onChange={(event) => onCommentChange(event.target.value)}
					className="min-h-20 border-[#17140f]/15 bg-[#f9f6ef] text-sm"
					placeholder="Ask a question, challenge an interpretation, or add context."
				/>
				<Button
					type="button"
					disabled={disabled || comment.trim().length < 2}
					onClick={onPostComment}
					className="h-10 w-fit bg-[#11110d] text-white hover:bg-[#14876d]"
				>
					<ChatText className="size-4" />
					Post comment
				</Button>
			</div>
		</div>
	);
}

function GroupReportPanel({ report }: { report: GroupReport }) {
	return (
		<div className="border border-[#17140f]/10 bg-white p-5 text-[#17140f]">
			<p className="font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
				group understanding
			</p>
			<div className="mt-5 grid grid-cols-3 gap-2">
				<MiniMetric label="answers" value={report.answerCount} />
				<MiniMetric label="clear" value={report.clearCount} />
				<MiniMetric label="weak" value={report.weakSections.length} />
			</div>
			<p className="mt-5 text-sm leading-7 text-[#5d574a]">{report.summary}</p>
			{report.featured.length ? (
				<div className="mt-5 grid gap-2">
					<p className="text-xs font-bold uppercase tracking-[0.12em] text-[#14876d]">
						best answers
					</p>
					{report.featured.slice(0, 3).map((response) => (
						<p
							key={response.id}
							className="border border-[#17140f]/10 bg-[#f9f6ef] p-3 text-sm leading-6 text-[#5d574a]"
						>
							{response.responderName || "Reader"}: {response.answer}
						</p>
					))}
				</div>
			) : null}
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

function buildParticipantProgress(
	responses: ResponseRecord[],
	chunkCount: number,
): ParticipantProgress[] {
	const byReader = new Map<string, Map<string, ResponseRecord>>();

	for (const response of responses) {
		const chunkId = response.chunk?.id;
		if (!chunkId) continue;
		const readerName =
			response.responderName || response.responder?.name || "Reader";
		const reader =
			byReader.get(readerName) ?? new Map<string, ResponseRecord>();
		const previous = reader.get(chunkId);
		if (
			!previous ||
			Number(response.createdAt ?? 0) > Number(previous.createdAt ?? 0)
		) {
			reader.set(chunkId, response);
		}
		byReader.set(readerName, reader);
	}

	return [...byReader.entries()]
		.map(([name, latestByChunk]) => {
			const clear = [...latestByChunk.values()].filter(
				(response) => response.grade === "clear",
			).length;
			const total = Math.max(chunkCount, 1);
			return {
				clear,
				name,
				percent: Math.round((clear / total) * 100),
				total,
			};
		})
		.sort((a, b) => b.clear - a.clear || a.name.localeCompare(b.name));
}

function buildGroupReport(
	chunks: ChunkRecord[],
	responses: ResponseRecord[],
): GroupReport {
	const answerCount = responses.length;
	const clearCount = responses.filter(
		(response) => response.grade === "clear",
	).length;
	const weakSections = chunks
		.filter((chunk) =>
			responses.some(
				(response) =>
					response.chunk?.id === chunk.id && response.grade !== "clear",
			),
		)
		.map((chunk) => chunk.index + 1);
	const featured = responses.filter((response) => response.isFeatured);
	const summary = answerCount
		? `${clearCount}/${answerCount} submitted answers are clear. ${
				weakSections.length
					? `The group should revisit section${weakSections.length === 1 ? "" : "s"} ${weakSections.join(", ")}.`
					: "No weak section has surfaced yet."
			}`
		: "No group answers yet. Shared understanding appears as readers submit checkpoints.";

	return {
		answerCount,
		clearCount,
		featured,
		summary,
		weakSections,
	};
}

function buildReportPayload(
	chunks: ChunkRecord[],
	responses: Record<string, ReaderResponse>,
) {
	return {
		chunks: chunks.map((chunk) => ({
			index: chunk.index,
			mainClaim: chunk.mainClaim,
			prompt: chunk.prompt,
			text: chunk.text,
		})),
		job: "report" as const,
		responses: chunks.flatMap((chunk) => {
			const response = responses[chunk.id];
			if (!response) return [];
			return {
				answer: response.answer,
				feedback: response.feedback,
				grade: response.grade,
				section: chunk.index + 1,
			};
		}),
	};
}

function AuthRequired() {
	return (
		<main className="grid min-h-dvh place-items-center px-4 py-8">
			<div className="max-w-2xl border border-[#17140f]/10 bg-white p-6">
				<Badge className="rounded-none bg-[#14876d] text-white">
					Auth required
				</Badge>
				<h1 className="mt-6 text-5xl font-black leading-none">
					Sign in to read this session.
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

function getAiErrorMessage(error: unknown) {
	const message = getMaybeErrorMessage(error);
	if (!message || message === "AI unavailable.") {
		return "AI unavailable. Check provider limits or try again later.";
	}
	return message;
}

function getMaybeErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	if (
		error &&
		typeof error === "object" &&
		"message" in error &&
		typeof error.message === "string"
	) {
		return error.message;
	}
	return undefined;
}

function getDisplayName(
	user: { email?: string | null; id?: string } | null | undefined,
	sessionId: string,
) {
	if (user?.email) return user.email.split("@")[0] ?? user.email;
	if (user?.id) return `reader-${user.id.slice(0, 6)}`;
	return `reader-${sessionId.slice(0, 6)}`;
}

function colorFromString(value: string) {
	let hash = 0;
	for (let index = 0; index < value.length; index += 1) {
		hash = value.charCodeAt(index) + ((hash << 5) - hash);
	}
	const colors = ["#14876d", "#a75d3f", "#6b58c7", "#b56a20", "#1f6aa5"];
	return colors[Math.abs(hash) % colors.length];
}

function shortPeerId(peerId: string) {
	return `reader-${peerId.slice(0, 6)}`;
}

function typingInfo(active: PresencePerson[]) {
	if (active.length === 1) {
		const name = active[0]?.name ?? "A reader";
		return `${name} is typing...`;
	}
	return `${active.length} readers are typing...`;
}

function formatStamp(value?: number | Date) {
	if (!value) return "just now";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "just now";
	return date.toISOString().slice(0, 16).replace("T", " ");
}

type SessionData = {
	readingSessions?: SessionRecord[];
};

type SessionRecord = {
	access?: SessionAccess;
	comments?: CommentRecord[];
	id: string;
	completedAt?: number | Date;
	currentChunkIndex?: number;
	facilitatorNote?: string;
	groupCurrentChunkIndex?: number;
	mode: "light" | "serious" | "brutal";
	post?: {
		author?: {
			id: string;
		};
		chunks?: ChunkRecord[];
		title?: string;
	};
	responses?: ResponseRecord[];
	status: "active" | "completed";
	understandingReport?: {
		id?: string;
	};
	user?: {
		id: string;
	};
};

type ChunkRecord = ReadingChunk & {
	id: string;
	index: number;
};

type ResponseRecord = {
	id: string;
	answer: string;
	chunk?: {
		id: string;
		index?: number;
	};
	createdAt?: number | Date;
	feedback?: string;
	grade: "clear" | "vague" | "incorrect";
	isFeatured?: boolean;
	responderName?: string;
	responder?: {
		id?: string;
		name?: string;
	};
};

type CommentRecord = {
	id: string;
	author?: {
		id?: string;
		name?: string;
	};
	authorName?: string;
	body: string;
	chunk?: {
		id: string;
	};
	createdAt?: number | Date;
};

type PresencePerson = {
	answerInput?: boolean;
	currentSection?: number;
	email?: string;
	id?: string;
	name?: string;
	progress?: number;
	status?: string;
};

type ParticipantProgress = {
	clear: number;
	name: string;
	percent: number;
	total: number;
};

type GroupReport = {
	answerCount: number;
	clearCount: number;
	featured: ResponseRecord[];
	summary: string;
	weakSections: number[];
};

type SessionAccess = "private" | "invite" | "public";

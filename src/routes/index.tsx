import {
	ArrowRight,
	Brain,
	CheckCircle,
	ClockCounterClockwise,
	Compass,
	FileText,
	Fingerprint,
	LockKey,
	NotePencil,
	Scales,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
	buildReport,
	createChunks,
	type FrictionMode,
	gradeAnswer,
	type ReaderResponse,
	type ReadingChunk,
	sampleText,
} from "@/lib/reading";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: HomePage });

const frictionModes: Array<{
	body: string;
	progress: number;
	title: string;
	value: FrictionMode;
}> = [
	{
		value: "light",
		title: "Light",
		body: "Short reflections. Better for daily essays and newsletter reading.",
		progress: 34,
	},
	{
		value: "serious",
		title: "Serious",
		body: "Claim-level summaries are required before the next section opens.",
		progress: 66,
	},
	{
		value: "brutal",
		title: "Brutal",
		body: "Thin answers get follow-ups, recall pressure, and stricter overlap.",
		progress: 92,
	},
];

const workflow = [
	{
		icon: FileText,
		label: "Import",
		text: "Paste a memo, essay, article, or paper excerpt.",
	},
	{
		icon: LockKey,
		label: "Gate",
		text: "Only the current section is visible.",
	},
	{
		icon: NotePencil,
		label: "Answer",
		text: "Write the claim in your own words.",
	},
	{
		icon: Brain,
		label: "Repair",
		text: "Weak answers get pushed back, not summarized.",
	},
];

const judgingArc = [
	{
		icon: Scales,
		label: "Interpretation",
		score: "30%",
		text: "We take friction literally: the app blocks progress until the reader can name the claim.",
	},
	{
		icon: Compass,
		label: "Creative leap",
		score: "25%",
		text: "Unread is not a faster summarizer. It is a tool that makes knowledge harder to fake.",
	},
	{
		icon: Fingerprint,
		label: "Conviction",
		score: "10%",
		text: "The product is willing to frustrate you on purpose. That is the point.",
	},
];

const proofPoints = [
	"Next section hidden until the current claim is answered",
	"AI pushes back on vague summaries instead of revealing the answer",
	"Completion report is based on what the reader proved, not what the article said",
	"Shared rooms turn reading into evidence for teams, classes, and groups",
];

function HomePage() {
	const [sourceText, setSourceText] = useState(sampleText);
	const [mode, setMode] = useState<FrictionMode>("serious");
	const [chunks, setChunks] = useState<ReadingChunk[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [answer, setAnswer] = useState("");
	const [responses, setResponses] = useState<Record<string, ReaderResponse>>(
		{},
	);
	const [setupError, setSetupError] = useState("");

	const currentChunk = chunks[currentIndex];
	const currentResponse = currentChunk ? responses[currentChunk.id] : undefined;
	const completedCount = Object.values(responses).filter(
		(response) => response.grade === "clear",
	).length;
	const progressValue = chunks.length
		? Math.round((completedCount / chunks.length) * 100)
		: 0;
	const isComplete = chunks.length > 0 && completedCount === chunks.length;
	const report = useMemo(
		() => buildReport(chunks, responses),
		[chunks, responses],
	);

	function createReadingRoom() {
		const cleanText = sourceText.trim();

		if (cleanText.length < 240) {
			setSetupError(
				"Paste at least a few paragraphs so Unread can build a room.",
			);
			return;
		}

		setChunks(createChunks(cleanText));
		setCurrentIndex(0);
		setResponses({});
		setAnswer("");
		setSetupError("");
	}

	function submitReflection() {
		if (!currentChunk) return;

		const previous = responses[currentChunk.id];
		const result = gradeAnswer(answer, currentChunk, mode);

		setResponses((current) => ({
			...current,
			[currentChunk.id]: {
				answer: answer.trim(),
				feedback: result.feedback,
				grade: result.grade,
				revisionCount: previous
					? previous.revisionCount + Number(result.grade !== "clear")
					: Number(result.grade !== "clear"),
			},
		}));
	}

	function goToNextSection() {
		if (!currentChunk || currentResponse?.grade !== "clear") return;

		setCurrentIndex((index) => Math.min(index + 1, chunks.length - 1));
		setAnswer("");
	}

	return (
		<main className="min-h-dvh overflow-x-hidden bg-[var(--unread-paper)] text-[var(--unread-ink)]">
			<div className="unread-texture fixed inset-0 z-0 opacity-100" />

			<section className="unread-shell relative z-10 grid gap-10 pb-14 pt-28 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end lg:pt-36">
				<div>
					<Badge className="unread-badge">Hackathon stance</Badge>
					<p className="mt-7 max-w-3xl font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[var(--unread-clay)]">
						We built Unread to study productive friction because fake
						understanding is easier than reading.
					</p>
					<h1 className="mt-5 max-w-6xl text-[clamp(3.6rem,10vw,9.6rem)] font-black leading-[0.76] text-balance">
						AI should stop you from pretending you read.
					</h1>
					<p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--unread-ink-soft)]">
						Unread is an anti-summary app. It turns articles, memos, and essays
						into locked reading rooms where progress requires evidence: one
						section, one checkpoint, one claim in your own words.
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-3">
						<a
							href="#reader"
							className={cn(
								buttonVariants({ size: "lg" }),
								"h-12 bg-[var(--unread-ink)] px-5 text-[var(--unread-paper)] hover:bg-[var(--unread-gold)]",
							)}
						>
							Try the friction
							<ArrowRight className="size-4" />
						</a>
						<Link
							to="/login"
							className={cn(
								buttonVariants({ variant: "outline", size: "lg" }),
								"h-12 border-[var(--unread-ink)]/30 bg-[var(--unread-ink)]/[0.045] px-5 text-[var(--unread-ink)] hover:bg-[var(--unread-ink)]/12 hover:text-[var(--unread-ink)]",
							)}
						>
							Open workspace
						</Link>
					</div>
				</div>

				<aside className="unread-panel overflow-hidden bg-[var(--unread-ink)] p-5 text-[var(--unread-paper)]">
					<div className="unread-inset-grid relative border border-[var(--unread-paper)]/10 p-4">
						<div className="-right-12 -top-12 absolute size-40 border border-[var(--unread-gold)]/35 bg-[var(--unread-gold)]/12" />
						<div className="flex items-center justify-between">
							<span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--unread-muted)]">
								judge this in 60 sec
							</span>
							<span className="h-2 w-16 bg-[var(--unread-green)]" />
						</div>
						<p className="mt-10 max-w-xs text-4xl font-black leading-none">
							The interface withholds the shortcut.
						</p>
						<div className="mt-8 grid gap-2">
							{proofPoints.slice(0, 3).map((point, index) => (
								<div
									key={point}
									className="grid grid-cols-[2.5rem_minmax(0,1fr)] border border-[var(--unread-paper)]/12 bg-[var(--unread-paper)]/7"
								>
									<span className="grid place-items-center border-[var(--unread-paper)]/12 border-r font-mono text-sm text-[var(--unread-gold)]">
										{index + 1}
									</span>
									<span className="p-3 text-sm leading-5 text-[var(--unread-paper)]/88">
										{point}
									</span>
								</div>
							))}
						</div>
						<div className="mt-8 grid grid-cols-3 gap-2">
							<HeroMetric label="sections" value={chunks.length || 5} />
							<HeroMetric label="clear" value={report.clearAnswers} />
							<HeroMetric label="revise" value={report.revisions} />
						</div>
					</div>
				</aside>
			</section>

			<section className="unread-shell relative z-10 py-10">
				<div className="grid gap-3 lg:grid-cols-3">
					{judgingArc.map((item) => {
						const Icon = item.icon;
						return (
							<article
								key={item.label}
								className="group min-h-64 border border-[var(--unread-ink)]/12 bg-[var(--unread-paper)] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[var(--unread-ink)] hover:text-[var(--unread-paper)]"
							>
								<div className="flex items-start justify-between gap-4">
									<Icon className="size-8 text-[var(--unread-green)] transition group-hover:text-[var(--unread-gold)]" />
									<span className="font-mono text-5xl font-black leading-none text-[var(--unread-clay)] tabular-nums">
										{item.score}
									</span>
								</div>
								<p className="mt-14 text-3xl font-black leading-none">
									{item.label}
								</p>
								<p className="mt-4 max-w-sm text-sm leading-6 text-[var(--unread-ink-soft)] transition group-hover:text-[var(--unread-paper)]/78">
									{item.text}
								</p>
							</article>
						);
					})}
				</div>
			</section>

			<section className="unread-shell relative z-10 grid gap-3 py-10 md:grid-cols-4">
				{workflow.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.label}
							className="border border-[var(--unread-ink)]/10 bg-[var(--unread-ink)]/[0.055] p-4 transition duration-300 hover:-translate-y-1 hover:bg-[var(--unread-ink)]/[0.085]"
						>
							<Icon className="size-6 text-[var(--unread-gold)]" />
							<p className="mt-8 text-2xl font-black leading-none">
								{item.label}
							</p>
							<p className="mt-3 text-sm leading-6 text-[var(--unread-muted)]">
								{item.text}
							</p>
						</div>
					);
				})}
			</section>

			<section
				id="reader"
				className="unread-shell relative z-10 grid gap-6 py-16 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.28fr)] lg:py-24"
			>
				<div className="lg:sticky lg:top-28 lg:self-start">
					<Badge className="unread-badge">Working demo</Badge>
					<h2 className="mt-6 max-w-2xl text-[clamp(2.7rem,6vw,6.2rem)] font-black leading-[0.84] text-balance">
						The discomfort is the demo.
					</h2>
					<p className="mt-6 max-w-xl text-base leading-8 text-[var(--unread-muted)]">
						A stranger should understand the thesis without a pitch: the app
						refuses to summarize first. It asks you to make a claim, checks it,
						and only then lets the next section appear.
					</p>
					<div className="mt-6 border border-[var(--unread-ink)]/12 bg-[var(--unread-ink)]/[0.055] p-4">
						<p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--unread-clay)]">
							Our bet
						</p>
						<p className="mt-3 text-2xl font-black leading-tight">
							The best use of AI in reading is not speed. It is resistance.
						</p>
					</div>
				</div>

				<div className="grid gap-4">
					<div className="unread-panel bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)]">
						<div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_18rem]">
							<FieldGroup>
								<Field>
									<FieldLabel>Source text</FieldLabel>
									<Textarea
										value={sourceText}
										onChange={(event) => setSourceText(event.target.value)}
										className="min-h-72 border-[var(--unread-ink)]/14 bg-[var(--unread-paper)] text-sm leading-6 text-[var(--unread-ink)] placeholder:text-[var(--unread-ink-soft)]"
										placeholder="Paste an essay, memo, article, paper excerpt, or draft..."
									/>
									<FieldDescription className="text-[var(--unread-ink-soft)]">
										Local demo requires 240+ characters. The signed-in workspace
										saves rooms and streams AI checkpoints from OpenRouter.
									</FieldDescription>
								</Field>
								{setupError ? (
									<Alert className="border-[var(--unread-clay)]/35 bg-[var(--unread-alert-error)] text-[var(--unread-ink)]">
										<WarningCircle className="size-4 text-[var(--unread-clay)]" />
										<AlertTitle>Need more text</AlertTitle>
										<AlertDescription>{setupError}</AlertDescription>
									</Alert>
								) : null}
							</FieldGroup>

							<div className="grid content-between gap-4">
								<Tabs
									value={mode}
									onValueChange={(value) => setMode(value as FrictionMode)}
								>
									<TabsList className="grid h-auto grid-cols-3 bg-[var(--unread-ink)]/8 p-1">
										{frictionModes.map((frictionMode) => (
											<TabsTrigger
												key={frictionMode.value}
												value={frictionMode.value}
												className="text-[var(--unread-ink-soft)] hover:bg-[var(--unread-ink)]/10 data-active:bg-[var(--unread-ink)] data-active:text-[var(--unread-paper)]"
											>
												{frictionMode.title}
											</TabsTrigger>
										))}
									</TabsList>
									{frictionModes.map((frictionMode) => (
										<TabsContent
											key={frictionMode.value}
											value={frictionMode.value}
										>
											<div className="border border-[var(--unread-ink)]/12 bg-[var(--unread-paper)] p-4">
												<p className="text-xl font-black">
													{frictionMode.title}
												</p>
												<p className="mt-2 text-sm leading-6 text-[var(--unread-ink-soft)]">
													{frictionMode.body}
												</p>
												<Progress
													value={frictionMode.progress}
													className="mt-5"
												>
													<ProgressLabel>Friction level</ProgressLabel>
													<ProgressValue>
														{() => `${frictionMode.progress}%`}
													</ProgressValue>
												</Progress>
											</div>
										</TabsContent>
									))}
								</Tabs>

								<div className="grid gap-2">
									<Button
										type="button"
										size="lg"
										onClick={createReadingRoom}
										className="h-12 bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)] hover:text-white"
									>
										Create reading room
										<ArrowRight className="size-4" />
									</Button>
									<Button
										type="button"
										variant="ghost"
										onClick={() => setSourceText(sampleText)}
										className="h-11 text-[var(--unread-ink-soft)] hover:bg-[var(--unread-ink)]/8 hover:text-[var(--unread-ink)]"
									>
										Load demo text
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]">
						<ReaderPanel
							answer={answer}
							chunks={chunks}
							currentChunk={currentChunk}
							currentIndex={currentIndex}
							currentResponse={currentResponse}
							isComplete={isComplete}
							progressValue={progressValue}
							setAnswer={setAnswer}
							onNext={goToNextSection}
							onSubmit={submitReflection}
						/>
						<ReportPanel isComplete={isComplete} report={report} />
					</div>
				</div>
			</section>
		</main>
	);
}

function HeroMetric({ label, value }: { label: string; value: number }) {
	return (
		<div className="bg-[var(--unread-paper-2)] p-3 text-[var(--unread-ink)]">
			<p className="font-mono text-3xl font-black tabular-nums">{value}</p>
			<p className="text-xs font-semibold text-[var(--unread-ink-soft)]">
				{label}
			</p>
		</div>
	);
}

function ReaderPanel({
	answer,
	chunks,
	currentChunk,
	currentIndex,
	currentResponse,
	isComplete,
	progressValue,
	setAnswer,
	onNext,
	onSubmit,
}: {
	answer: string;
	chunks: ReadingChunk[];
	currentChunk?: ReadingChunk;
	currentIndex: number;
	currentResponse?: ReaderResponse;
	isComplete: boolean;
	progressValue: number;
	setAnswer: (value: string) => void;
	onNext: () => void;
	onSubmit: () => void;
}) {
	return (
		<div className="unread-panel bg-[var(--unread-green)] p-5 text-white">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<p className="text-3xl font-black leading-none">Guided reader</p>
					<p className="mt-2 text-sm leading-6 text-white/82">
						One section visible. Everything after it is locked.
					</p>
				</div>
				<Badge className="rounded-none bg-[var(--unread-paper)] text-[var(--unread-green)]">
					{chunks.length
						? `Section ${currentIndex + 1}/${chunks.length}`
						: "No room yet"}
				</Badge>
			</div>

			<Progress value={progressValue} className="mt-6 bg-white/20">
				<ProgressLabel className="text-white">Unlocked progress</ProgressLabel>
				<ProgressValue className="text-white/80">
					{() => `${progressValue}%`}
				</ProgressValue>
			</Progress>

			{currentChunk ? (
				<div className="mt-5 grid gap-4">
					<div className="bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)]">
						<div className="flex flex-wrap gap-2">
							<Badge className="rounded-none bg-[var(--unread-ink)] text-[var(--unread-paper)]">
								visible now
							</Badge>
							<Badge className="rounded-none bg-[var(--unread-gold)] text-[var(--unread-ink)]">
								{chunks.length - currentIndex - 1} locked
							</Badge>
						</div>
						<p className="mt-5 text-2xl font-black leading-tight">
							{currentChunk.mainClaim}
						</p>
						<p className="mt-4 text-sm leading-7 text-[var(--unread-ink-soft)]">
							{currentChunk.text}
						</p>
					</div>

					<Field>
						<FieldLabel className="text-white">
							{currentChunk.prompt}
						</FieldLabel>
						<Textarea
							value={answer}
							onChange={(event) => setAnswer(event.target.value)}
							className="min-h-28 border-[var(--unread-ink)]/25 bg-[var(--unread-paper)] text-sm leading-6 text-[var(--unread-ink)] placeholder:text-[var(--unread-ink-soft)]"
							placeholder="One precise sentence is enough."
						/>
					</Field>

					<div className="flex flex-wrap gap-3">
						<Button
							type="button"
							size="lg"
							onClick={onSubmit}
							disabled={answer.trim().length < 6}
							className="h-12 bg-[var(--unread-paper)] px-5 text-[var(--unread-green)] hover:bg-[var(--unread-gold)] hover:text-[var(--unread-paper)]"
						>
							Check reflection
						</Button>
						<Button
							type="button"
							variant="outline"
							size="lg"
							onClick={onNext}
							disabled={currentResponse?.grade !== "clear" || isComplete}
							className="h-12 border-white/45 bg-transparent px-5 text-white hover:bg-white/14 hover:text-white disabled:border-white/20 disabled:text-white/55"
						>
							Unlock next
							<LockKey className="size-4" />
						</Button>
					</div>

					{currentResponse ? (
						<Alert
							className={cn(
								"border-[var(--unread-ink)]/10 text-[var(--unread-ink)]",
								currentResponse.grade === "clear"
									? "bg-[var(--unread-alert-success)]"
									: "bg-[var(--unread-alert-error)]",
							)}
						>
							{currentResponse.grade === "clear" ? (
								<CheckCircle className="size-4 text-[var(--unread-green)]" />
							) : (
								<WarningCircle className="size-4 text-[var(--unread-clay)]" />
							)}
							<AlertTitle>
								{currentResponse.grade === "clear"
									? "Clear enough to continue"
									: "Not clear yet"}
							</AlertTitle>
							<AlertDescription>{currentResponse.feedback}</AlertDescription>
						</Alert>
					) : null}
				</div>
			) : (
				<div className="mt-5 border border-white/20 bg-white/10 p-5">
					<p className="max-w-xl text-sm leading-7 text-white/86">
						Create a room from the setup panel. Unread will split the text into
						locked sections and start the first checkpoint here.
					</p>
				</div>
			)}
		</div>
	);
}

function ReportPanel({
	isComplete,
	report,
}: {
	isComplete: boolean;
	report: ReturnType<typeof buildReport>;
}) {
	return (
		<aside className="unread-panel bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)]">
			<div className="flex items-center gap-2 text-[var(--unread-green)]">
				<ClockCounterClockwise className="size-5" />
				<p className="font-mono text-xs uppercase tracking-[0.18em]">
					understanding map
				</p>
			</div>
			<p className="mt-6 text-3xl font-black leading-none">
				Evidence, not vibes.
			</p>
			<div className="mt-6 grid gap-2">
				<HeroMetric label="clear answers" value={report.clearAnswers} />
				<HeroMetric label="revisions" value={report.revisions} />
				<HeroMetric label="weak spots" value={report.weakSections.length} />
			</div>
			<p className="mt-6 text-sm leading-7 text-[var(--unread-ink-soft)]">
				{isComplete
					? report.summary
					: "Complete the locked reader to generate a sharper report for this session."}
			</p>
			<Link
				to="/login"
				className={cn(
					buttonVariants({ size: "lg" }),
					"mt-6 h-12 w-full bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)] hover:text-white",
				)}
			>
				Save with auth
				<ArrowRight className="size-4" />
			</Link>
		</aside>
	);
}

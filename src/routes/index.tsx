import {
	ArrowRight,
	Brain,
	CheckCircle,
	ClockCounterClockwise,
	FileText,
	LockKey,
	NotePencil,
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
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: HomePage });

type FrictionMode = "light" | "serious" | "brutal";
type Grade = "clear" | "vague" | "incorrect";

type ReadingChunk = {
	id: string;
	index: number;
	mainClaim: string;
	prompt: string;
	text: string;
};

type ReaderResponse = {
	answer: string;
	feedback: string;
	grade: Grade;
	revisionCount: number;
};

const sampleText = `Most reading tools promise speed. They compress articles into summaries, make highlights searchable, and reward the feeling of staying current. The problem is that speed can hide weak comprehension. A reader can recognize the topic without understanding the claim.

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
		<main className="min-h-dvh overflow-x-hidden bg-[var(--unread-ink)] text-[var(--unread-paper)]">
			<div className="unread-texture fixed inset-0 z-0 opacity-100" />

			<section className="unread-shell relative z-10 grid gap-10 pb-14 pt-32 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end lg:pt-40">
				<div>
					<Badge className="unread-badge">Anti-summary app</Badge>
					<h1 className="mt-7 max-w-6xl text-[clamp(3.4rem,9vw,8.6rem)] font-black leading-[0.78] text-balance">
						Read slower. Ship understanding faster.
					</h1>
					<p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--unread-muted)]">
						Unread turns hard text into a locked reading room: one section, one
						checkpoint, one proof of comprehension at a time.
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-3">
						<a
							href="#reader"
							className={cn(
								buttonVariants({ size: "lg" }),
								"h-12 bg-[var(--unread-paper)] px-5 text-[var(--unread-ink)] hover:bg-[var(--unread-gold)]",
							)}
						>
							Start a room
							<ArrowRight className="size-4" />
						</a>
						<Link
							to="/blogs"
							className={cn(
								buttonVariants({ variant: "outline", size: "lg" }),
								"h-12 border-white/30 bg-white/[0.045] px-5 text-white hover:bg-white/12 hover:text-white",
							)}
						>
							Browse posts
						</Link>
					</div>
				</div>

				<aside className="unread-panel bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)]">
					<div className="unread-inset-grid border border-[var(--unread-ink)]/10 p-4">
						<div className="flex items-center justify-between">
							<span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--unread-ink-soft)]">
								live room
							</span>
							<span className="h-2 w-16 bg-[var(--unread-green)]" />
						</div>
						<p className="mt-10 max-w-xs text-4xl font-black leading-none">
							Next section remains hidden.
						</p>
						<div className="mt-8 grid grid-cols-3 gap-2">
							<HeroMetric label="sections" value={chunks.length || 5} />
							<HeroMetric label="clear" value={report.clearAnswers} />
							<HeroMetric label="revise" value={report.revisions} />
						</div>
					</div>
				</aside>
			</section>

			<section className="unread-shell relative z-10 grid gap-3 py-10 md:grid-cols-4">
				{workflow.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.label}
							className="border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.085]"
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
						The loop is the product.
					</h2>
					<p className="mt-6 max-w-xl text-base leading-8 text-[var(--unread-muted)]">
						This local room already splits text, gates progression, grades
						reflections, and builds a report. Backend persistence can land on
						top without changing the user flow.
					</p>
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
										className="min-h-72 border-[var(--unread-ink)]/14 bg-white/80 text-sm leading-6 text-[var(--unread-ink)] placeholder:text-[var(--unread-ink-soft)]"
										placeholder="Paste an essay, memo, article, paper excerpt, or draft..."
									/>
									<FieldDescription className="text-[var(--unread-ink-soft)]">
										Local demo requires 240+ characters. URL extraction and AI
										chunking come next.
									</FieldDescription>
								</Field>
								{setupError ? (
									<Alert className="border-[var(--unread-clay)]/35 bg-[#fff7ef] text-[var(--unread-ink)]">
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
												className="text-[var(--unread-ink-soft)] hover:bg-white/70 data-active:bg-[var(--unread-ink)] data-active:text-white"
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
											<div className="border border-[var(--unread-ink)]/12 bg-white/65 p-4">
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
										className="h-12 bg-[var(--unread-ink)] text-white hover:bg-[var(--unread-green)]"
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
		<div className="bg-white/70 p-3">
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
				<Badge className="rounded-none bg-white text-[var(--unread-green)]">
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
							<Badge className="rounded-none bg-[var(--unread-ink)] text-white">
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
							className="min-h-28 border-white/25 bg-white text-sm leading-6 text-[var(--unread-ink)] placeholder:text-[var(--unread-ink-soft)]"
							placeholder="One precise sentence is enough."
						/>
					</Field>

					<div className="flex flex-wrap gap-3">
						<Button
							type="button"
							size="lg"
							onClick={onSubmit}
							disabled={answer.trim().length < 6}
							className="h-12 bg-white px-5 text-[var(--unread-green)] hover:bg-[var(--unread-gold)]"
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
								"border-white/20 text-[var(--unread-ink)]",
								currentResponse.grade === "clear"
									? "bg-[#effaf2]"
									: "bg-[#fff4ed]",
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
					"mt-6 h-12 w-full bg-[var(--unread-ink)] text-white hover:bg-[var(--unread-green)]",
				)}
			>
				Save with auth
				<ArrowRight className="size-4" />
			</Link>
		</aside>
	);
}

function createChunks(input: string): ReadingChunk[] {
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
				prompt: createPrompt(index),
				text,
			};
		});
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

function gradeAnswer(
	answer: string,
	chunk: ReadingChunk,
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

function extractKeywords(text: string) {
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

function buildReport(
	chunks: ReadingChunk[],
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

	return {
		clearAnswers,
		revisions,
		summary:
			weakSections.length > 0
				? `Strong pass with ${clearAnswers} clear checkpoints, but sections ${weakSections.join(", ")} should be revisited.`
				: `Clean pass: ${clearAnswers} sections cleared with ${revisions} revision${revisions === 1 ? "" : "s"}.`,
		weakSections,
	};
}

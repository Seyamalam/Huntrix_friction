import {
	ArrowRight,
	Brain,
	CheckCircle,
	FileText,
	LockKey,
	PencilSimpleLine,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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

const readingSteps = [
	{
		title: "Paste the source",
		body: "Essay, memo, paper excerpt, transcript, or original draft.",
		icon: FileText,
	},
	{
		title: "Read one locked section",
		body: "Unread hides the next claim until the current one is handled.",
		icon: LockKey,
	},
	{
		title: "Answer the checkpoint",
		body: "Write the claim in plain language before moving on.",
		icon: PencilSimpleLine,
	},
	{
		title: "Repair weak understanding",
		body: "Vague answers get a follow-up instead of a free summary.",
		icon: Brain,
	},
];

const frictionModes: Array<{
	body: string;
	progress: number;
	title: string;
	value: FrictionMode;
}> = [
	{
		value: "light",
		title: "Light",
		body: "Reflection-first reading. Short answers can unlock the next section.",
		progress: 38,
	},
	{
		value: "serious",
		title: "Serious",
		body: "Summaries need enough detail to prove the claim landed.",
		progress: 67,
	},
	{
		value: "brutal",
		title: "Brutal",
		body: "Stricter checks. Thin answers get pushed back quickly.",
		progress: 91,
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
		if (!currentChunk) {
			return;
		}

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
		if (!currentChunk || currentResponse?.grade !== "clear") {
			return;
		}

		setCurrentIndex((index) => Math.min(index + 1, chunks.length - 1));
		setAnswer("");
	}

	return (
		<main className="min-h-dvh overflow-x-hidden bg-[#12110d] text-[#f7f2e8]">
			<div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_14%,rgba(229,197,118,0.18),transparent_27%),radial-gradient(circle_at_88%_18%,rgba(43,139,120,0.2),transparent_31%),linear-gradient(145deg,rgba(255,255,255,0.045),transparent_42%)]" />
			<div className="pointer-events-none fixed inset-0 z-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.38)_1px,transparent_1px)] [background-size:76px_76px]" />

			<section className="relative z-10 px-4 pt-32 pb-16 sm:px-6 lg:pt-40">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.78fr)] lg:items-end">
					<div>
						<Badge className="rounded-none border-[#e7ce8e]/35 bg-[#e7ce8e]/10 text-[#ead493]">
							Anti-summary reading system
						</Badge>
						<h1 className="mt-7 max-w-6xl text-[clamp(3.3rem,8vw,7.4rem)] leading-[0.84] font-black tracking-normal text-balance">
							Earn the next paragraph.
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-[#e7dccb] sm:text-lg">
							Unread locks difficult text behind short reflection checks, so
							speed stops pretending to be understanding.
						</p>
						<div className="mt-9 flex flex-wrap items-center gap-3">
							<a
								href="#reader"
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-12 bg-[#f7f2e8] px-5 text-[#17140f] hover:bg-[#e7ce8e]",
								)}
							>
								Build a room
								<ArrowRight className="size-4" />
							</a>
							<Link
								to="/login"
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"h-12 border-[#f7f2e8]/45 bg-transparent px-5 text-[#f7f2e8] hover:bg-[#f7f2e8]/14 hover:text-white",
								)}
							>
								Save with Instant
							</Link>
						</div>
					</div>

					<Card className="border-0 bg-[#f7f2e8] text-[#17140f] shadow-2xl shadow-black/30 ring-0">
						<CardHeader>
							<CardAction>
								<Badge className="rounded-none bg-[#2a8f78] text-white">
									Live local room
								</Badge>
							</CardAction>
							<CardTitle className="max-w-sm text-4xl leading-none font-black">
								One section visible. The rest stays locked.
							</CardTitle>
							<CardDescription className="pt-2 text-sm leading-6 text-[#5e5648]">
								This demo uses deterministic local checks first, then InstantDB
								and AI grading can persist the same flow.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-5">
							<Progress value={progressValue}>
								<ProgressLabel className="font-semibold text-[#17140f]">
									Room progress
								</ProgressLabel>
								<ProgressValue className="text-[#5e5648]">
									{() => `${progressValue}%`}
								</ProgressValue>
							</Progress>
							<Alert className="border-[#17140f]/18 bg-white/80 text-[#17140f]">
								<WarningCircle className="size-4 text-[#b45b32]" />
								<AlertTitle className="text-[#17140f]">
									Checkpoint rule
								</AlertTitle>
								<AlertDescription className="text-[#4a4136]">
									The next section unlocks only after a clear answer.
								</AlertDescription>
							</Alert>
						</CardContent>
						<CardFooter className="border-[#17140f]/10">
							<div className="grid w-full grid-cols-3 gap-2 text-xs">
								<div>
									<p className="font-mono text-2xl font-black">
										{chunks.length || 5}
									</p>
									<p className="text-[#5e5648]">sections</p>
								</div>
								<div>
									<p className="font-mono text-2xl font-black">
										{report.revisions}
									</p>
									<p className="text-[#5e5648]">revisions</p>
								</div>
								<div>
									<p className="font-mono text-2xl font-black">
										{report.weakSections.length}
									</p>
									<p className="text-[#5e5648]">weak spots</p>
								</div>
							</div>
						</CardFooter>
					</Card>
				</div>
			</section>

			<section className="relative z-10 px-4 py-16 sm:px-6 lg:py-24">
				<div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
					{readingSteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card
								key={step.title}
								className="border-white/10 bg-white/[0.055] text-[#f7f2e8] ring-0 transition-colors hover:bg-white/[0.085]"
							>
								<CardHeader>
									<CardAction>
										<Icon className="size-6 text-[#e7ce8e]" />
									</CardAction>
									<CardTitle className="text-2xl leading-none font-black">
										{step.title}
									</CardTitle>
									<CardDescription className="pt-2 text-sm leading-6 text-[#e7dccb]">
										{step.body}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			<section
				id="reader"
				className="relative z-10 px-4 py-16 sm:px-6 lg:py-28"
			>
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
					<div className="lg:sticky lg:top-28">
						<h2 className="max-w-4xl text-[clamp(2.6rem,6vw,6rem)] leading-[0.88] font-black text-balance">
							Paste. Split. Prove it.
						</h2>
						<p className="mt-6 max-w-xl text-base leading-8 text-[#e7dccb]">
							The highest leverage feature is the loop itself. This room runs
							now, with local chunking and grading, so the product has a real
							center of gravity before backend polish.
						</p>
					</div>

					<div className="space-y-4">
						<Card className="border-0 bg-[#f7f2e8] text-[#17140f] ring-0">
							<CardHeader>
								<CardTitle className="text-3xl leading-none font-black">
									Reading setup
								</CardTitle>
								<CardDescription className="text-sm leading-6 text-[#5e5648]">
									Paste a hard text, choose friction, then create a locked room.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<FieldGroup>
									<Field>
										<FieldLabel className="text-[#17140f]">
											Source text
										</FieldLabel>
										<Textarea
											value={sourceText}
											onChange={(event) => setSourceText(event.target.value)}
											className="min-h-64 border-[#17140f]/18 bg-white text-sm leading-6 text-[#17140f] placeholder:text-[#766c5b]"
											placeholder="Paste an essay, memo, article, paper excerpt, or draft..."
										/>
										<FieldDescription className="text-[#5e5648]">
											Local demo requires 240+ characters. URL extraction and AI
											chunking come next.
										</FieldDescription>
									</Field>

									<Tabs
										value={mode}
										onValueChange={(value) => setMode(value as FrictionMode)}
									>
										<TabsList className="bg-[#17140f]/10">
											{frictionModes.map((frictionMode) => (
												<TabsTrigger
													key={frictionMode.value}
													value={frictionMode.value}
													className="text-[#4a4136] hover:bg-[#17140f]/8 hover:text-[#17140f] data-active:bg-[#17140f] data-active:text-white"
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
												<div className="border border-[#17140f]/14 bg-white/82 p-4 text-[#17140f]">
													<p className="text-lg font-black">
														{frictionMode.title}
													</p>
													<p className="mt-2 max-w-md text-sm leading-6 text-[#5e5648]">
														{frictionMode.body}
													</p>
													<Progress
														value={frictionMode.progress}
														className="mt-5"
													>
														<ProgressLabel className="font-semibold">
															Friction level
														</ProgressLabel>
														<ProgressValue className="text-[#4a4136]">
															{() => `${frictionMode.progress}%`}
														</ProgressValue>
													</Progress>
												</div>
											</TabsContent>
										))}
									</Tabs>
									{setupError ? (
										<Alert className="border-[#b45b32]/40 bg-[#fff4ed] text-[#17140f]">
											<WarningCircle className="size-4 text-[#b45b32]" />
											<AlertTitle className="text-[#17140f]">
												Need more text
											</AlertTitle>
											<AlertDescription className="text-[#5e5648]">
												{setupError}
											</AlertDescription>
										</Alert>
									) : null}
								</FieldGroup>
							</CardContent>
							<CardFooter className="flex-wrap gap-3 border-[#17140f]/10">
								<Button
									type="button"
									size="lg"
									onClick={createReadingRoom}
									className="h-12 bg-[#17140f] px-5 text-white hover:bg-[#2a8f78]"
								>
									Create reading room
									<ArrowRight className="size-4" />
								</Button>
								<Button
									type="button"
									variant="outline"
									size="lg"
									onClick={() => setSourceText(sampleText)}
									className="h-12 border-[#17140f]/20 bg-transparent px-5 text-[#17140f] hover:bg-[#17140f]/8"
								>
									Load demo text
								</Button>
							</CardFooter>
						</Card>

						<Card className="border-0 bg-[#2a8f78] text-white ring-0">
							<CardHeader>
								<CardAction>
									<Badge className="rounded-none bg-white text-[#184e43]">
										{chunks.length
											? `Section ${currentIndex + 1} of ${chunks.length}`
											: "Room not created"}
									</Badge>
								</CardAction>
								<CardTitle className="text-3xl leading-none font-black">
									Guided reader
								</CardTitle>
								<CardDescription className="text-sm leading-6 text-white/88">
									The next section stays hidden until the current reflection is
									clear.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-5">
								<Progress value={progressValue} className="bg-white/20">
									<ProgressLabel className="font-semibold text-white">
										Unlocked progress
									</ProgressLabel>
									<ProgressValue className="text-white/82">
										{() => `${progressValue}%`}
									</ProgressValue>
								</Progress>

								{currentChunk ? (
									<div className="space-y-4">
										<div className="border border-white/20 bg-[#f7f2e8] p-5 text-[#17140f]">
											<div className="mb-4 flex flex-wrap items-center gap-2">
												<Badge className="rounded-none bg-[#17140f] text-white">
													Visible now
												</Badge>
												<Badge className="rounded-none bg-[#e7ce8e] text-[#17140f]">
													{chunks.length - currentIndex - 1} locked after this
												</Badge>
											</div>
											<p className="text-xl leading-8 font-black">
												{currentChunk.mainClaim}
											</p>
											<p className="mt-4 text-sm leading-7 text-[#4a4136]">
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
												className="min-h-28 border-white/24 bg-white text-sm leading-6 text-[#17140f] placeholder:text-[#766c5b]"
												placeholder="One sentence is enough if it is specific."
											/>
										</Field>

										<div className="flex flex-wrap gap-3">
											<Button
												type="button"
												size="lg"
												onClick={submitReflection}
												disabled={answer.trim().length < 6}
												className="h-12 bg-white px-5 text-[#184e43] hover:bg-[#e7ce8e]"
											>
												Check reflection
											</Button>
											<Button
												type="button"
												variant="outline"
												size="lg"
												onClick={goToNextSection}
												disabled={
													currentResponse?.grade !== "clear" || isComplete
												}
												className="h-12 border-white/45 bg-transparent px-5 text-white hover:bg-white/14 hover:text-white disabled:border-white/20 disabled:text-white/55"
											>
												Unlock next
												<LockKey className="size-4" />
											</Button>
										</div>

										{currentResponse ? (
											<Alert
												className={cn(
													"border-white/20 text-[#17140f]",
													currentResponse.grade === "clear"
														? "bg-[#effaf2]"
														: "bg-[#fff4ed]",
												)}
											>
												{currentResponse.grade === "clear" ? (
													<CheckCircle className="size-4 text-[#2a8f78]" />
												) : (
													<WarningCircle className="size-4 text-[#b45b32]" />
												)}
												<AlertTitle className="text-[#17140f]">
													{currentResponse.grade === "clear"
														? "Clear enough to continue"
														: "Not clear yet"}
												</AlertTitle>
												<AlertDescription className="text-[#4a4136]">
													{currentResponse.feedback}
												</AlertDescription>
											</Alert>
										) : null}
									</div>
								) : (
									<div className="border border-white/20 bg-white/10 p-5">
										<p className="max-w-xl text-sm leading-7 text-white/88">
											Create a room from the setup panel. Unread will split the
											text into locked chunks and start the first checkpoint
											here.
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section className="relative z-10 px-4 py-16 pb-28 sm:px-6 lg:py-28">
				<Card className="mx-auto max-w-7xl border-0 bg-[#e7ce8e] text-[#17140f] ring-0">
					<CardContent className="grid gap-8 p-6 lg:grid-cols-[1fr_auto] lg:items-end lg:p-8">
						<div>
							<Badge className="rounded-none bg-[#17140f] text-white">
								Understanding report
							</Badge>
							<h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,6.4rem)] leading-[0.86] font-black text-balance">
								Finish with evidence, not vibes.
							</h2>
							<div className="mt-7 grid gap-3 text-sm leading-6 md:grid-cols-3">
								<div className="border border-[#17140f]/16 bg-[#f7f2e8]/70 p-4">
									<p className="font-mono text-3xl font-black">
										{report.clearAnswers}
									</p>
									<p className="text-[#4a4136]">clear answers</p>
								</div>
								<div className="border border-[#17140f]/16 bg-[#f7f2e8]/70 p-4">
									<p className="font-mono text-3xl font-black">
										{report.revisions}
									</p>
									<p className="text-[#4a4136]">revisions made</p>
								</div>
								<div className="border border-[#17140f]/16 bg-[#f7f2e8]/70 p-4">
									<p className="font-mono text-3xl font-black">
										{report.weakSections.length}
									</p>
									<p className="text-[#4a4136]">sections to revisit</p>
								</div>
							</div>
							<p className="mt-6 max-w-2xl text-sm leading-7 text-[#4a4136]">
								{isComplete
									? report.summary
									: "Complete the guided reader to generate a sharper report. The backend version will save this to InstantDB per session."}
							</p>
						</div>
						<div className="flex flex-wrap gap-3 lg:justify-end">
							<Link
								to="/login"
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-12 bg-[#17140f] px-5 text-white hover:bg-[#2a8f78]",
								)}
							>
								Save rooms with auth
								<CheckCircle className="size-4" />
							</Link>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
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

	if (keywords.length < 2) {
		return firstSentence;
	}

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

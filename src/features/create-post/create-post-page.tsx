import { id } from "@instantdb/react";
import {
	ArrowLeft,
	ArrowRight,
	FileText,
	LinkSimple,
	LockKey,
	WarningCircle,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AiChunks } from "@/lib/ai-jobs";
import { streamAiJob } from "@/lib/ai-stream";
import { importArticleFromUrl } from "@/lib/article-import";
import { db, isInstantConfigured } from "@/lib/db";
import {
	attachSourceMarkdownToChunks,
	type FrictionMode,
	type ReadingChunk,
} from "@/lib/reading";
import { cn } from "@/lib/utils";

import {
	defaultPostBody,
	defaultPostTitle,
	modeCopy,
	type PostVisibility,
} from "./constants";

const CreatePostBodyField = lazy(() =>
	import("./create-post-body-field").then((module) => ({
		default: module.CreatePostBodyField,
	})),
);

export function CreatePostPage() {
	const auth = db.useAuth();
	const navigate = useNavigate();
	const [title, setTitle] = useState(defaultPostTitle);
	const [bodySeed, setBodySeed] = useState(defaultPostBody);
	const [bodyRevision, setBodyRevision] = useState(0);
	const [bodyMarkdown, setBodyMarkdown] = useState(defaultPostBody);
	const [bodyPlainText, setBodyPlainText] = useState(defaultPostBody);
	const [mode, setMode] = useState<FrictionMode>("serious");
	const [visibility, setVisibility] = useState<PostVisibility>("private");
	const [sourceMode, setSourceMode] = useState<"paste" | "url">("paste");
	const [sourceUrl, setSourceUrl] = useState("");
	const [importedUrl, setImportedUrl] = useState("");
	const [error, setError] = useState("");
	const [importStatus, setImportStatus] = useState("");
	const [isImporting, setIsImporting] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [chunks, setChunks] = useState<ReadingChunk[]>([]);
	const [aiStream, setAiStream] = useState("");
	const [aiThinkingTokens, setAiThinkingTokens] = useState(0);

	async function importUrl() {
		if (!sourceUrl.trim()) {
			setError("Paste an article URL first.");
			return;
		}

		setIsImporting(true);
		setError("");
		setImportStatus("Importing article text...");
		setAiStream("");
		setAiThinkingTokens(0);

		try {
			const article = await importArticleFromUrl({ data: { url: sourceUrl } });
			setTitle((current) => {
				const trimmed = current.trim();
				return !trimmed || trimmed === defaultPostTitle
					? article.title
					: current;
			});
			setBodySeed(article.text);
			setBodyMarkdown(article.text);
			setBodyPlainText(article.text);
			setBodyRevision((current) => current + 1);
			setImportedUrl(article.url);
			setImportStatus(
				`Imported ${article.text.length.toLocaleString()} characters from ${new URL(article.url).hostname}.`,
			);
		} catch (err) {
			setImportedUrl("");
			setImportStatus("");
			setError(getErrorMessage(err));
		} finally {
			setIsImporting(false);
		}
	}

	async function createRoom() {
		if (!auth.user) {
			setError("Sign in before creating a reading session.");
			return;
		}

		const cleanTitle = title.trim();
		const cleanBodyMarkdown = bodyMarkdown.trim();
		const cleanBodyPlainText = bodyPlainText.trim();

		if (!cleanTitle) {
			setError("Add a title before creating the post.");
			return;
		}

		if (cleanBodyPlainText.length < 240) {
			setError(
				"Paste at least a few paragraphs so Unread can make checkpoints.",
			);
			return;
		}

		setIsSaving(true);
		setError("");
		setAiStream("");
		setAiThinkingTokens(0);
		setChunks([]);

		const now = Date.now();
		const postId = id();
		const sessionId = id();

		try {
			const aiChunks = await streamAiJob(
				{
					body: cleanBodyPlainText,
					job: "chunk",
					mode,
					title: cleanTitle,
				},
				(delta, kind) => {
					if (kind === "thinking") {
						setAiThinkingTokens((current) => current + 1);
						return;
					}
					setAiStream((current) => `${current}${delta}`);
				},
			);
			const generatedChunks = attachSourceMarkdownToChunks(
				normalizeAiChunks(aiChunks),
				cleanBodyMarkdown,
			);
			const chunkIds = generatedChunks.map(() => id());
			setChunks(generatedChunks);

			await db.transact([
				db.tx.posts[postId]
					.update({
						body: cleanBodyMarkdown,
						createdAt: now,
						sourceType: importedUrl ? "url" : "pasted",
						title: cleanTitle,
						updatedAt: now,
						visibility,
					})
					.link({ author: auth.user.id }),
				db.tx.readingSessions[sessionId]
					.update({
						access: visibility === "private" ? "private" : "invite",
						createdAt: now,
						currentChunkIndex: 0,
						groupCurrentChunkIndex: 0,
						mode,
						status: "active",
					})
					.link({ post: postId, user: auth.user.id }),
				...generatedChunks.map((chunk, index) =>
					db.tx.chunks[chunkIds[index]]
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

			await navigate({
				to: "/app/session/$sessionId",
				params: { sessionId },
			});
		} catch (err) {
			setError(
				err instanceof Error && err.message === "AI unavailable."
					? "AI unavailable. Check provider limits or try again later."
					: getErrorMessage(err),
			);
		} finally {
			setIsSaving(false);
		}
	}

	if (!isInstantConfigured || (!auth.isLoading && !auth.user)) {
		return (
			<main className="grid min-h-dvh place-items-center px-4 py-8">
				<div className="max-w-2xl border border-[#17140f]/10 bg-white p-6">
					<Badge className="rounded-none bg-[#14876d] text-white">
						Auth required
					</Badge>
					<h1 className="mt-6 text-5xl font-black leading-none">
						Sign in before creating sessions.
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

	return (
		<main className="min-h-dvh px-4 py-5 sm:px-6 lg:h-dvh lg:overflow-hidden lg:px-8">
			<section className="grid gap-5 lg:h-full lg:min-h-0 xl:grid-cols-[minmax(0,1fr)_24rem]">
				<div className="flex min-h-0 flex-col border border-[#17140f]/10 bg-white p-5">
					<Link
						to="/app"
						className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5d574a] hover:text-[#17140f]"
					>
						<ArrowLeft className="size-4" />
						Back to workspace
					</Link>

					<FieldGroup className="mt-4 flex min-h-0 flex-1">
						<Field>
							<FieldLabel>Title</FieldLabel>
							<Input
								value={title}
								onChange={(event) => setTitle(event.target.value)}
								className="h-14 border-[#17140f]/15 bg-[#f9f6ef] text-xl font-semibold sm:text-2xl"
							/>
						</Field>

						<div className="grid gap-3">
							<Tabs
								value={sourceMode}
								onValueChange={(value) =>
									setSourceMode(value as "paste" | "url")
								}
							>
								<TabsList className="grid h-auto w-full max-w-sm grid-cols-2 bg-[#17140f]/8 p-1">
									<TabsTrigger
										value="paste"
										className="text-[#5d574a] data-active:bg-[#11110d] data-active:text-white"
									>
										Paste text
									</TabsTrigger>
									<TabsTrigger
										value="url"
										className="text-[#5d574a] data-active:bg-[#11110d] data-active:text-white"
									>
										Import URL
									</TabsTrigger>
								</TabsList>
								<TabsContent value="url" className="mt-3">
									<div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
										<Input
											type="url"
											value={sourceUrl}
											onChange={(event) => setSourceUrl(event.target.value)}
											placeholder="https://example.com/article"
											className="h-11 border-[#17140f]/15 bg-[#f9f6ef]"
										/>
										<Button
											type="button"
											disabled={isImporting || isSaving}
											onClick={importUrl}
											className="h-11 bg-[#11110d] text-white hover:bg-[#14876d]"
										>
											{isImporting ? "Importing" : "Import"}
											<LinkSimple className="size-4" />
										</Button>
									</div>
									{importStatus ? (
										<p className="mt-2 text-sm text-[#5d574a]">
											{importStatus}
										</p>
									) : null}
								</TabsContent>
							</Tabs>
						</div>

						<Suspense fallback={<EditorLoadingState />}>
							<CreatePostBodyField
								key={bodyRevision}
								defaultBody={bodySeed}
								onBodyChange={({ markdown, plainText }) => {
									setBodyMarkdown(markdown);
									setBodyPlainText(plainText);
									if (plainText.trim() !== bodySeed.trim()) {
										setImportedUrl("");
									}
								}}
							/>
						</Suspense>
					</FieldGroup>
				</div>

				<aside className="grid content-start gap-4 lg:min-h-0 lg:overflow-y-auto">
					<div className="border border-[#17140f]/10 bg-white p-5">
						<p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
							<LockKey className="size-4" />
							Reading mode
						</p>
						<Tabs
							value={mode}
							onValueChange={(value) => setMode(value as FrictionMode)}
							className="mt-5"
						>
							<TabsList className="grid h-auto grid-cols-3 bg-[#17140f]/8 p-1">
								{(["light", "serious", "brutal"] as const).map((item) => (
									<TabsTrigger
										key={item}
										value={item}
										className="capitalize text-[#5d574a] data-active:bg-[#11110d] data-active:text-white"
									>
										{item}
									</TabsTrigger>
								))}
							</TabsList>
							<TabsContent value={mode}>
								<p className="mt-4 text-sm leading-6 text-[#5d574a]">
									{modeCopy[mode].body}
								</p>
								<Progress value={modeCopy[mode].progress} className="mt-5">
									<ProgressLabel>Friction level</ProgressLabel>
									<ProgressValue>
										{() => `${modeCopy[mode].progress}%`}
									</ProgressValue>
								</Progress>
							</TabsContent>
						</Tabs>
					</div>

					<div className="border border-[#17140f]/10 bg-white p-5">
						<p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#14876d]">
							<FileText className="size-4" />
							Publishing
						</p>
						<Tabs
							value={visibility}
							onValueChange={(value) => setVisibility(value as PostVisibility)}
							className="mt-5"
						>
							<TabsList className="grid h-auto grid-cols-3 bg-[#17140f]/8 p-1">
								{(["private", "unlisted", "public"] as const).map((item) => (
									<TabsTrigger
										key={item}
										value={item}
										className="capitalize text-[#5d574a] data-active:bg-[#11110d] data-active:text-white"
									>
										{item}
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>

					<div className="border border-[#17140f]/10 bg-[#11110d] p-5 text-white">
						<p className="font-mono text-4xl font-black tabular-nums">
							{chunks.length || 0}
						</p>
						<p className="mt-1 text-sm text-white/80">generated checkpoints</p>
						<div className="mt-5 grid gap-2">
							{chunks.slice(0, 4).map((chunk) => (
								<div
									key={chunk.id}
									className="border border-white/18 bg-white/8 p-3"
								>
									<p className="text-sm font-semibold leading-5">
										{chunk.prompt}
									</p>
								</div>
							))}
							{isSaving && aiStream ? (
								<div className="max-h-40 overflow-hidden border border-white/18 bg-white/8 p-3 font-mono text-xs leading-5 text-white/75">
									{aiStream.slice(-900)}
								</div>
							) : null}
							{isSaving && aiThinkingTokens > 0 ? (
								<div className="border border-white/18 bg-white/8 p-3 font-mono text-xs uppercase tracking-[0.14em] text-[#d0aa57]">
									thinking stream active · {aiThinkingTokens} ticks
								</div>
							) : null}
						</div>
						{error ? (
							<Alert className="mt-5 border-white/20 bg-[#fff4ed] text-[#17140f]">
								<WarningCircle className="size-4 text-[#a75d3f]" />
								<AlertTitle>Could not create session</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						) : null}
						<Button
							type="button"
							size="lg"
							disabled={isSaving || auth.isLoading}
							onClick={createRoom}
							className="mt-5 h-12 w-full bg-white text-[#11110d] hover:bg-[#d0aa57]"
						>
							{isSaving
								? "Streaming AI checkpoints"
								: importedUrl
									? "Create imported session"
									: "Create session and start"}
							<ArrowRight className="size-4" />
						</Button>
					</div>
				</aside>
			</section>
		</main>
	);
}

function EditorLoadingState() {
	return (
		<Field className="min-h-0 flex-1">
			<FieldLabel>Body</FieldLabel>
			<div className="grid min-h-[28rem] place-items-center border border-[#17140f]/15 bg-[#f9f6ef] p-5">
				<div className="w-full max-w-xl">
					<div className="h-4 w-36 bg-[#17140f]/14" />
					<div className="mt-5 grid gap-3">
						<div className="h-4 w-full bg-[#17140f]/10" />
						<div className="h-4 w-11/12 bg-[#17140f]/10" />
						<div className="h-4 w-4/5 bg-[#17140f]/10" />
					</div>
					<p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[#5d574a]">
						Loading editor
					</p>
				</div>
			</div>
		</Field>
	);
}

function normalizeAiChunks(result: AiChunks): ReadingChunk[] {
	return result.chunks
		.sort((a, b) => a.index - b.index)
		.map((chunk, index) => ({
			id: `ai-chunk-${index}`,
			index,
			mainClaim: chunk.mainClaim.trim(),
			markdown: chunk.markdown?.trim(),
			prompt: chunk.prompt.trim(),
			text: chunk.text.trim(),
		}));
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

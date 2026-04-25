import { id } from "@instantdb/react";
import {
	ArrowLeft,
	ArrowRight,
	FileText,
	LockKey,
	WarningCircle,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";

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
import { db, isInstantConfigured } from "@/lib/db";
import {
	createChunks,
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
import { CreatePostBodyField } from "./create-post-body-field";

export function CreatePostPage() {
	const auth = db.useAuth();
	const navigate = useNavigate();
	const [title, setTitle] = useState(defaultPostTitle);
	const [bodyMarkdown, setBodyMarkdown] = useState(defaultPostBody);
	const [bodyPlainText, setBodyPlainText] = useState(defaultPostBody);
	const [mode, setMode] = useState<FrictionMode>("serious");
	const [visibility, setVisibility] = useState<PostVisibility>("private");
	const [error, setError] = useState("");
	const [isSaving, setIsSaving] = useState(false);
	const chunks = useMemo(() => {
		if (bodyPlainText.trim().length < 240) return [] as ReadingChunk[];
		return createChunks(bodyPlainText);
	}, [bodyPlainText]);

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

		if (cleanBodyPlainText.length < 240 || chunks.length === 0) {
			setError(
				"Paste at least a few paragraphs so Unread can make checkpoints.",
			);
			return;
		}

		setIsSaving(true);
		setError("");

		const now = Date.now();
		const postId = id();
		const sessionId = id();
		const chunkIds = chunks.map(() => id());

		try {
			await db.transact([
				db.tx.posts[postId]
					.update({
						body: cleanBodyMarkdown,
						createdAt: now,
						sourceType: "pasted",
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
				...chunks.map((chunk, index) =>
					db.tx.chunks[chunkIds[index]]
						.update({
							index: chunk.index,
							mainClaim: chunk.mainClaim,
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
			setError(getErrorMessage(err));
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

						<CreatePostBodyField
							defaultBody={defaultPostBody}
							onBodyChange={({ markdown, plainText }) => {
								setBodyMarkdown(markdown);
								setBodyPlainText(plainText);
							}}
						/>
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
							{isSaving ? "Creating" : "Create session and start"}
							<ArrowRight className="size-4" />
						</Button>
					</div>
				</aside>
			</section>
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

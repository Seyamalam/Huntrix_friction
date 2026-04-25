import {
	ArrowBendDownRight,
	ArrowRight,
	Brain,
	Check,
	EnvelopeSimple,
	LockKey,
	SignOut,
	WarningCircle,
} from "@phosphor-icons/react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { env } from "@/env";
import { db, isInstantConfigured } from "@/lib/db";

export const Route = createFileRoute("/login")({ component: LoginPage });

type AuthStep = "email" | "code";

const proofPanels = [
	{
		title: "Gate each claim",
		body: "Sections unlock after the reader writes what the author is actually saying.",
	},
	{
		title: "Reject shallow summaries",
		body: "Vague answers trigger a follow-up instead of a shortcut.",
	},
	{
		title: "Keep receipts",
		body: "Completion means evidence: answers, revisions, and weak spots.",
	},
];

const readingFlow = [
	"Paste a memo",
	"Read one slice",
	"Answer in plain language",
	"Unlock the next idea",
];

function LoginPage() {
	if (!isInstantConfigured) {
		return <InstantSetupPage />;
	}

	return <LoginExperience />;
}

function LoginExperience() {
	const auth = db.useAuth();
	const navigate = useNavigate();
	const isGoogleConfigured = Boolean(
		env.VITE_GOOGLE_CLIENT_ID && env.VITE_INSTANT_GOOGLE_CLIENT_NAME,
	);
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [step, setStep] = useState<AuthStep>("email");
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (!auth.isLoading && auth.user) {
			void navigate({ replace: true, to: "/app" });
		}
	}, [auth.isLoading, auth.user, navigate]);

	async function handleSendCode(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");
		setStatus("");
		setIsSubmitting(true);

		try {
			await db.auth.sendMagicCode({ email });
			setStep("code");
			setStatus("Magic code sent. Check your inbox.");
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsSubmitting(false);
		}
	}

	async function handleVerifyCode(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");
		setStatus("");
		setIsSubmitting(true);

		try {
			const result = await db.auth.signInWithMagicCode({
				email,
				code,
				extraFields: { createdAt: Date.now() },
			});
			setStatus(result.created ? "Account created." : "Signed in.");
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<main className="min-h-dvh overflow-x-hidden bg-[var(--unread-paper)] text-[var(--unread-ink)]">
			<div className="unread-texture fixed inset-0 z-0" />

			<section className="unread-shell relative z-10 pb-20 pt-32 lg:pt-40">
				<div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.72fr)] lg:items-end">
					<div className="max-w-5xl">
						<Badge className="unread-badge">
							Instant auth for slow reading
						</Badge>
						<h1 className="mt-7 max-w-6xl text-[clamp(3.2rem,8vw,7.2rem)] font-black leading-[0.86] text-balance">
							Get in fast. Get through the text slowly.
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-[var(--unread-muted)] sm:text-lg">
							Unread keeps authentication out of the way, then asks readers to
							prove the argument before the next section appears.
						</p>
					</div>

					<AuthPanel
						auth={auth}
						code={code}
						email={email}
						error={error}
						isGoogleConfigured={isGoogleConfigured}
						isSubmitting={isSubmitting}
						setCode={setCode}
						setEmail={setEmail}
						setError={setError}
						setStep={setStep}
						status={status}
						step={step}
						onSendCode={handleSendCode}
						onVerifyCode={handleVerifyCode}
					/>
				</div>
			</section>

			<section className="unread-shell relative z-10 py-20 lg:py-28">
				<div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
					<p className="sticky top-32 hidden max-w-xl text-[clamp(2.6rem,5vw,5.6rem)] font-black leading-[0.93] text-balance lg:block">
						Unread makes auth fast, then makes comprehension slow on purpose.
					</p>

					<div className="grid gap-4 md:grid-cols-6">
						{proofPanels.map((panel) => (
							<Card
								key={panel.title}
								className="unread-panel border-0 bg-[var(--unread-paper-2)] text-[var(--unread-ink)] ring-0 transition duration-300 hover:-translate-y-1 md:col-span-3 odd:md:translate-y-10"
							>
								<CardHeader>
									<CardTitle className="text-3xl leading-none font-black">
										{panel.title}
									</CardTitle>
									<CardDescription className="max-w-sm pt-2 text-sm leading-6 text-[var(--unread-ink-soft)]">
										{panel.body}
									</CardDescription>
								</CardHeader>
								<CardFooter className="border-[var(--unread-ink)]/10">
									<ArrowBendDownRight className="size-5 text-[var(--unread-green)]" />
								</CardFooter>
							</Card>
						))}
						<Card className="unread-panel border-0 bg-[var(--unread-green)] text-white ring-0 md:col-span-6">
							<CardContent className="grid gap-2 p-4 sm:grid-cols-4">
								{readingFlow.map((stepLabel) => (
									<div
										key={stepLabel}
										className="border border-white/18 bg-white/8 p-4 text-sm font-semibold"
									>
										{stepLabel}
									</div>
								))}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}

function AuthPanel({
	auth,
	code,
	email,
	error,
	isGoogleConfigured,
	isSubmitting,
	onSendCode,
	onVerifyCode,
	setCode,
	setEmail,
	setError,
	setStep,
	status,
	step,
}: {
	auth: ReturnType<typeof db.useAuth>;
	code: string;
	email: string;
	error: string;
	isGoogleConfigured: boolean;
	isSubmitting: boolean;
	onSendCode: (event: React.FormEvent<HTMLFormElement>) => void;
	onVerifyCode: (event: React.FormEvent<HTMLFormElement>) => void;
	setCode: (value: string) => void;
	setEmail: (value: string) => void;
	setError: (value: string) => void;
	setStep: (value: AuthStep) => void;
	status: string;
	step: AuthStep;
}) {
	if (auth.isLoading) {
		return (
			<Card className="bg-[var(--unread-paper)] ring-0">
				<CardHeader>
					<Skeleton className="h-4 w-28" />
					<Skeleton className="h-9 w-full" />
					<Skeleton className="h-4 w-3/4" />
				</CardHeader>
				<CardContent className="space-y-3">
					<Skeleton className="h-12 w-full" />
					<Skeleton className="h-12 w-full" />
				</CardContent>
			</Card>
		);
	}

	if (auth.error) {
		return (
			<Alert
				variant="destructive"
				className="border-[var(--unread-clay)]/25 bg-[var(--unread-paper)] text-[var(--unread-clay)]"
			>
				<WarningCircle className="size-4" />
				<AlertTitle className="text-[var(--unread-clay)]">
					Auth connection failed
				</AlertTitle>
				<AlertDescription className="text-[var(--unread-clay)]">
					{auth.error.message}
				</AlertDescription>
			</Alert>
		);
	}

	if (auth.user) {
		return (
			<Card className="border-0 bg-[var(--unread-paper)] text-[var(--unread-ink)] shadow-2xl shadow-black/30 ring-0">
				<CardHeader>
					<CardAction>
						<Check className="size-8 text-[var(--unread-green)]" />
					</CardAction>
					<CardTitle className="max-w-sm text-4xl leading-none font-black">
						Your reading room is open.
					</CardTitle>
					<CardDescription className="pt-2 text-sm text-[var(--unread-ink-soft)]">
						{auth.user.email}
					</CardDescription>
				</CardHeader>
				<CardFooter className="border-[var(--unread-ink)]/10">
					<Button
						type="button"
						className="h-12 w-full bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)]"
						onClick={() => db.auth.signOut()}
					>
						<SignOut className="size-4" />
						Sign out
					</Button>
				</CardFooter>
			</Card>
		);
	}

	return (
		<Card className="border-0 bg-[var(--unread-paper)] text-[var(--unread-ink)] shadow-2xl shadow-black/30 ring-0">
			<CardHeader>
				<CardAction>
					<LockKey className="size-6 text-[var(--unread-green)]" />
				</CardAction>
				<CardTitle className="text-4xl leading-none font-black">
					Enter Unread
				</CardTitle>
				<CardDescription className="max-w-sm pt-2 text-sm leading-6 text-[var(--unread-ink-soft)]">
					{isGoogleConfigured
						? "Use Google for the quickest entry, or fall back to a magic code."
						: "Magic codes keep sign-in short. Add Google env vars to enable OAuth."}
				</CardDescription>
			</CardHeader>
			<CardContent>
				{isGoogleConfigured ? (
					<>
						<GoogleSignIn setError={setError} />
						<div className="my-5 flex items-center gap-3 text-xs font-semibold text-[var(--unread-ink-soft)]">
							<Separator className="flex-1 bg-[var(--unread-ink)]/10" />
							<span>or use email</span>
							<Separator className="flex-1 bg-[var(--unread-ink)]/10" />
						</div>
					</>
				) : null}
				{step === "email" ? (
					<form onSubmit={onSendCode}>
						<FieldGroup>
							<Field>
								<FieldLabel>Email</FieldLabel>
								<div className="flex items-center border border-[var(--unread-ink)]/15 bg-[var(--unread-paper)] px-3">
									<EnvelopeSimple className="size-5 text-[var(--unread-ink-soft)]" />
									<Input
										required
										type="email"
										value={email}
										onChange={(event) => setEmail(event.target.value)}
										placeholder="reader@unread.app"
										className="h-12 border-0 bg-transparent text-base text-[var(--unread-ink)] shadow-none ring-0 placeholder:text-[var(--unread-ink-soft)] focus-visible:border-0 focus-visible:ring-0"
									/>
								</div>
								<FieldDescription className="text-[var(--unread-ink-soft)]">
									We will send a one-time code to this address.
								</FieldDescription>
							</Field>
							{error ? <FieldError>{error}</FieldError> : null}
							<Button
								type="submit"
								disabled={isSubmitting}
								className="h-12 w-full bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)]"
							>
								{isSubmitting ? "Sending" : "Send magic code"}
								<ArrowRight className="size-4" />
							</Button>
						</FieldGroup>
					</form>
				) : (
					<form onSubmit={onVerifyCode}>
						<FieldGroup>
							<Field>
								<FieldLabel>Verification code</FieldLabel>
								<InputOTP
									maxLength={6}
									value={code}
									onChange={setCode}
									containerClassName="gap-2"
								>
									<InputOTPGroup className="gap-2">
										{[0, 1, 2, 3, 4, 5].map((index) => (
											<InputOTPSlot
												key={`slot-${index.toString(36)}`}
												index={index}
												className="size-12 border-[var(--unread-ink)]/18 bg-[var(--unread-paper)] text-lg font-black"
											/>
										))}
									</InputOTPGroup>
								</InputOTP>
								<FieldDescription className="text-[var(--unread-ink-soft)]">
									Check the inbox for {email}. Codes expire quickly.
								</FieldDescription>
							</Field>
							{error ? <FieldError>{error}</FieldError> : null}
							<Button
								type="submit"
								disabled={isSubmitting || code.length < 6}
								className="h-12 w-full bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)]"
							>
								{isSubmitting ? "Checking" : "Verify code"}
								<Brain className="size-4" />
							</Button>
							<Button
								type="button"
								variant="ghost"
								className="h-10 text-[var(--unread-ink-soft)] hover:bg-[var(--unread-ink)]/8 hover:text-[var(--unread-ink)]"
								onClick={() => setStep("email")}
							>
								Use a different email
							</Button>
						</FieldGroup>
					</form>
				)}
			</CardContent>
			{status ? (
				<>
					<Separator className="bg-[var(--unread-ink)]/10" />
					<CardFooter className="border-0 text-sm text-[var(--unread-green)]">
						{status}
					</CardFooter>
				</>
			) : null}
		</Card>
	);
}

function GoogleSignIn({ setError }: { setError: (value: string) => void }) {
	const [nonce] = useState(() => createNonce());
	const googleClientId = env.VITE_GOOGLE_CLIENT_ID;
	const instantGoogleClientName = env.VITE_INSTANT_GOOGLE_CLIENT_NAME;

	if (!googleClientId || !instantGoogleClientName) {
		return null;
	}

	return (
		<div className="grid gap-3">
			<GoogleOAuthProvider clientId={googleClientId}>
				<div className="overflow-hidden border border-[var(--unread-ink)]/15 bg-[var(--unread-paper)] p-2">
					<GoogleLogin
						nonce={nonce}
						shape="rectangular"
						size="large"
						text="signin_with"
						theme="outline"
						width="320"
						onError={() => {
							setError("Google sign-in failed. Try again or use a magic code.");
						}}
						onSuccess={({ credential }) => {
							setError("");

							if (!credential) {
								setError(
									"Google did not return an ID token. Try again or use a magic code.",
								);
								return;
							}

							db.auth
								.signInWithIdToken({
									clientName: instantGoogleClientName,
									idToken: credential,
									nonce,
								})
								.catch((err) => {
									setError(getErrorMessage(err));
								});
						}}
					/>
				</div>
			</GoogleOAuthProvider>
			<p className="text-xs leading-5 text-[var(--unread-ink-soft)]">
				Google OAuth is active because both Google env vars are present.
			</p>
		</div>
	);
}

function InstantSetupPage() {
	return (
		<main className="min-h-dvh overflow-x-hidden bg-[var(--unread-paper)] px-4 pt-32 pb-20 text-[var(--unread-ink)] sm:px-6">
			<Card className="mx-auto max-w-3xl border-0 bg-[var(--unread-paper)] text-[var(--unread-ink)] shadow-2xl shadow-black/30 ring-0">
				<CardHeader>
					<Badge className="w-fit rounded-none bg-[var(--unread-green)] text-white">
						InstantDB setup
					</Badge>
					<CardTitle className="max-w-2xl pt-5 text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] font-black">
						Add your Instant app id to unlock auth.
					</CardTitle>
					<CardDescription className="max-w-xl pt-3 text-sm leading-7 text-[var(--unread-ink-soft)]">
						The schema and permission files are in place. Set the Vite app id
						from your Instant project, then reload the dev server.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="border border-[var(--unread-ink)]/12 bg-[var(--unread-paper-2)] p-4 font-mono text-sm text-[var(--unread-green)]">
						VITE_INSTANT_APP_ID=your-instant-app-id
					</div>
				</CardContent>
			</Card>
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

function createNonce() {
	return (
		globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2)
	);
}

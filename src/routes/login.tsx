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
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

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
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [step, setStep] = useState<AuthStep>("email");
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const revealRef = useRef<HTMLParagraphElement>(null);
	const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

	const revealWords = useMemo(
		() =>
			"Unread makes auth fast, then makes comprehension slow on purpose."
				.split(" ")
				.map((word, index) => ({ id: `${word}-${index.toString(36)}`, word })),
		[],
	);

	useEffect(() => {
		let cleanup = () => {};

		async function mountMotion() {
			const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
				import("gsap"),
				import("gsap/ScrollTrigger"),
			]);
			gsap.registerPlugin(ScrollTrigger);

			const words = gsap.utils.toArray<HTMLElement>(".word-reveal");
			gsap.fromTo(
				words,
				{ opacity: 0.18, y: 12 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.07,
					scrollTrigger: {
						trigger: revealRef.current,
						start: "top 78%",
						end: "bottom 35%",
						scrub: true,
					},
				},
			);

			cardRefs.current.forEach((node) => {
				if (!node) return;
				gsap.fromTo(
					node,
					{ opacity: 0.55, scale: 0.92, y: 24 },
					{
						opacity: 1,
						scale: 1,
						y: 0,
						scrollTrigger: {
							trigger: node,
							start: "top 88%",
							end: "bottom 36%",
							scrub: true,
						},
					},
				);
			});

			cleanup = () => {
				for (const trigger of ScrollTrigger.getAll()) {
					trigger.kill();
				}
			};
		}

		mountMotion();
		return () => cleanup();
	}, []);

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
		<main className="min-h-dvh overflow-x-hidden bg-[#12110d] text-[#f7f2e8]">
			<div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(231,206,142,0.18),transparent_27%),radial-gradient(circle_at_82%_20%,rgba(40,151,126,0.18),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.04),transparent_45%)]" />
			<div className="pointer-events-none fixed inset-0 z-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.38)_1px,transparent_1px)] [background-size:72px_72px]" />

			<section className="relative z-10 px-4 pt-32 pb-20 sm:px-6 lg:pt-40">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.72fr)] lg:items-end">
					<div className="max-w-5xl">
						<Badge className="rounded-none border-[#e7ce8e]/35 bg-[#e7ce8e]/10 text-[#ead493]">
							Instant auth for slow reading
						</Badge>
						<h1 className="mt-7 max-w-6xl text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.86] font-black tracking-normal text-balance">
							Get in fast. Get through the text slowly.
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-[#d9d0c1]/86 sm:text-lg">
							Unread keeps authentication out of the way, then asks readers to
							prove the argument before the next section appears.
						</p>
					</div>

					<AuthPanel
						auth={auth}
						code={code}
						email={email}
						error={error}
						isSubmitting={isSubmitting}
						setCode={setCode}
						setEmail={setEmail}
						setStep={setStep}
						status={status}
						step={step}
						onSendCode={handleSendCode}
						onVerifyCode={handleVerifyCode}
					/>
				</div>
			</section>

			<section className="relative z-10 px-4 py-24 sm:px-6 lg:py-36">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
					<p
						ref={revealRef}
						className="sticky top-32 hidden max-w-xl text-[clamp(2.6rem,5vw,5.6rem)] leading-[0.93] font-black text-balance lg:block"
					>
						{revealWords.map((item) => (
							<span key={item.id} className="word-reveal inline-block pr-3">
								{item.word}
							</span>
						))}
					</p>

					<div className="grid gap-4 md:grid-cols-6">
						{proofPanels.map((panel, index) => (
							<Card
								key={panel.title}
								ref={(node) => {
									cardRefs.current[index] = node;
								}}
								className="border-0 bg-[#f7f2e8] text-[#17140f] ring-0 md:col-span-3 odd:md:translate-y-10"
							>
								<CardHeader>
									<CardTitle className="text-3xl leading-none font-black">
										{panel.title}
									</CardTitle>
									<CardDescription className="max-w-sm pt-2 text-sm leading-6 text-[#4a4136]">
										{panel.body}
									</CardDescription>
								</CardHeader>
								<CardFooter className="border-[#17140f]/10">
									<ArrowBendDownRight className="size-5 text-[#2a8f78]" />
								</CardFooter>
							</Card>
						))}
						<Card className="border-0 bg-[#2a8f78] text-white ring-0 md:col-span-6">
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
	isSubmitting,
	onSendCode,
	onVerifyCode,
	setCode,
	setEmail,
	setStep,
	status,
	step,
}: {
	auth: ReturnType<typeof db.useAuth>;
	code: string;
	email: string;
	error: string;
	isSubmitting: boolean;
	onSendCode: (event: React.FormEvent<HTMLFormElement>) => void;
	onVerifyCode: (event: React.FormEvent<HTMLFormElement>) => void;
	setCode: (value: string) => void;
	setEmail: (value: string) => void;
	setStep: (value: AuthStep) => void;
	status: string;
	step: AuthStep;
}) {
	if (auth.isLoading) {
		return (
			<Card className="bg-[#f7f2e8] ring-0">
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
				className="border-[#7f1d1d]/25 bg-[#f7f2e8] text-[#7f1d1d]"
			>
				<WarningCircle className="size-4" />
				<AlertTitle className="text-[#7f1d1d]">
					Auth connection failed
				</AlertTitle>
				<AlertDescription className="text-[#7f1d1d]">
					{auth.error.message}
				</AlertDescription>
			</Alert>
		);
	}

	if (auth.user) {
		return (
			<Card className="border-0 bg-[#f7f2e8] text-[#17140f] shadow-2xl shadow-black/30 ring-0">
				<CardHeader>
					<CardAction>
						<Check className="size-8 text-[#2a8f78]" />
					</CardAction>
					<CardTitle className="max-w-sm text-4xl leading-none font-black">
						Your reading room is open.
					</CardTitle>
					<CardDescription className="pt-2 text-sm text-[#4a4136]">
						{auth.user.email}
					</CardDescription>
				</CardHeader>
				<CardFooter className="border-[#17140f]/10">
					<Button
						type="button"
						className="h-12 w-full bg-[#17140f] text-white hover:bg-[#2a8f78]"
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
		<Card className="border-0 bg-[#f7f2e8] text-[#17140f] shadow-2xl shadow-black/30 ring-0">
			<CardHeader>
				<CardAction>
					<LockKey className="size-6 text-[#2a8f78]" />
				</CardAction>
				<CardTitle className="text-4xl leading-none font-black">
					Enter Unread
				</CardTitle>
				<CardDescription className="max-w-sm pt-2 text-sm leading-6 text-[#4a4136]">
					Magic codes keep sign-in short. The hard part starts after the text
					appears.
				</CardDescription>
			</CardHeader>
			<CardContent>
				{step === "email" ? (
					<form onSubmit={onSendCode}>
						<FieldGroup>
							<Field>
								<FieldLabel>Email</FieldLabel>
								<div className="flex items-center border border-[#17140f]/15 bg-white/70 px-3">
									<EnvelopeSimple className="size-5 text-[#4a4136]" />
									<Input
										required
										type="email"
										value={email}
										onChange={(event) => setEmail(event.target.value)}
										placeholder="reader@unread.app"
										className="h-12 border-0 bg-transparent text-base text-[#17140f] shadow-none ring-0 placeholder:text-[#6b6254] focus-visible:border-0 focus-visible:ring-0"
									/>
								</div>
								<FieldDescription className="text-[#4a4136]">
									We will send a one-time code to this address.
								</FieldDescription>
							</Field>
							{error ? <FieldError>{error}</FieldError> : null}
							<Button
								type="submit"
								disabled={isSubmitting}
								className="h-12 w-full bg-[#17140f] text-white hover:bg-[#2a8f78]"
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
												className="size-12 border-[#17140f]/18 bg-white/75 text-lg font-black"
											/>
										))}
									</InputOTPGroup>
								</InputOTP>
								<FieldDescription className="text-[#4a4136]">
									Check the inbox for {email}. Codes expire quickly.
								</FieldDescription>
							</Field>
							{error ? <FieldError>{error}</FieldError> : null}
							<Button
								type="submit"
								disabled={isSubmitting || code.length < 6}
								className="h-12 w-full bg-[#17140f] text-white hover:bg-[#2a8f78]"
							>
								{isSubmitting ? "Checking" : "Verify code"}
								<Brain className="size-4" />
							</Button>
							<Button
								type="button"
								variant="ghost"
								className="h-10 text-[#4a4136] hover:bg-[#17140f]/8 hover:text-[#17140f]"
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
					<Separator className="bg-[#17140f]/10" />
					<CardFooter className="border-0 text-sm text-[#2a8f78]">
						{status}
					</CardFooter>
				</>
			) : null}
		</Card>
	);
}

function InstantSetupPage() {
	return (
		<main className="min-h-dvh overflow-x-hidden bg-[#12110d] px-4 pt-32 pb-20 text-[#f7f2e8] sm:px-6">
			<Card className="mx-auto max-w-3xl border-0 bg-[#f7f2e8] text-[#17140f] shadow-2xl shadow-black/30 ring-0">
				<CardHeader>
					<Badge className="w-fit rounded-none bg-[#2a8f78] text-white">
						InstantDB setup
					</Badge>
					<CardTitle className="max-w-2xl pt-5 text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] font-black">
						Add your Instant app id to unlock auth.
					</CardTitle>
					<CardDescription className="max-w-xl pt-3 text-sm leading-7 text-[#4a4136]">
						The schema and permission files are in place. Set the Vite app id
						from your Instant project, then reload the dev server.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="border border-[#17140f]/12 bg-white/70 p-4 font-mono text-sm text-[#2a8f78]">
						VITE_INSTANT_APP_ID=your-instant-app-id
					</div>
				</CardContent>
			</Card>
		</main>
	);
}

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return "Something went wrong. Try again.";
}

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

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: HomePage });

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
		body: "The reader writes the claim in plain language before moving on.",
		icon: PencilSimpleLine,
	},
	{
		title: "Repair weak understanding",
		body: "Vague answers get a follow-up instead of a free summary.",
		icon: Brain,
	},
];

const evidenceRows = [
	["Clear answer rate", "68.4%", "+11.7"],
	["Revision rate", "42.1%", "+8.2"],
	["Most missed section", "Counterclaim", "active"],
	["Recall score", "74.6%", "+5.9"],
];

const frictionModes = [
	{
		value: "light",
		title: "Light",
		body: "Reflection-first reading for newsletters and essays.",
		progress: 38,
	},
	{
		value: "serious",
		title: "Serious",
		body: "Accurate summaries required before the next section appears.",
		progress: 67,
	},
	{
		value: "brutal",
		title: "Brutal",
		body: "Follow-up questions, recall checks, and stricter grading.",
		progress: 91,
	},
];

function HomePage() {
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
						<h1 className="mt-7 max-w-6xl text-[clamp(3.4rem,8vw,7.7rem)] leading-[0.84] font-black tracking-normal text-balance">
							Read the part you were about to fake.
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-[#d9d0c1]/76 sm:text-lg">
							Unread turns difficult text into locked sections, short reflection
							checks, and evidence that the idea actually landed.
						</p>
						<div className="mt-9 flex flex-wrap items-center gap-3">
							<Link
								to="/login"
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-12 bg-[#f7f2e8] px-5 text-[#17140f] hover:bg-[#e7ce8e]",
								)}
							>
								Start a reading room
								<ArrowRight className="size-4" />
							</Link>
							<Link
								to="/blogs"
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"h-12 border-[#f7f2e8]/25 bg-transparent px-5 text-[#f7f2e8] hover:bg-[#f7f2e8]/10",
								)}
							>
								Browse public posts
							</Link>
						</div>
					</div>

					<Card className="border-0 bg-[#f7f2e8] text-[#17140f] shadow-2xl shadow-black/30 ring-0">
						<CardHeader>
							<CardAction>
								<Badge className="rounded-none bg-[#2a8f78] text-white">
									Live session
								</Badge>
							</CardAction>
							<CardTitle className="max-w-sm text-4xl leading-none font-black">
								The economics of attention
							</CardTitle>
							<CardDescription className="pt-2 text-sm leading-6 text-[#5e5648]">
								Section 3 of 7 is locked until the reader explains the author’s
								actual claim.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-5">
							<Progress value={43}>
								<ProgressLabel className="font-semibold text-[#17140f]">
									Reading progress
								</ProgressLabel>
								<ProgressValue className="text-[#5e5648]">
									{() => "43%"}
								</ProgressValue>
							</Progress>
							<Alert className="border-[#17140f]/12 bg-white/65">
								<WarningCircle className="size-4 text-[#b45b32]" />
								<AlertTitle>Checkpoint pending</AlertTitle>
								<AlertDescription>
									Explain why the author thinks speed hides weak comprehension.
								</AlertDescription>
							</Alert>
						</CardContent>
						<CardFooter className="border-[#17140f]/10">
							<div className="grid w-full grid-cols-3 gap-2 text-xs">
								<div>
									<p className="font-mono text-2xl font-black">7</p>
									<p className="text-[#5e5648]">sections</p>
								</div>
								<div>
									<p className="font-mono text-2xl font-black">2</p>
									<p className="text-[#5e5648]">revisions</p>
								</div>
								<div>
									<p className="font-mono text-2xl font-black">1</p>
									<p className="text-[#5e5648]">weak spot</p>
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
									<CardDescription className="pt-2 text-sm leading-6 text-[#d9d0c1]/68">
										{step.body}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			<section className="relative z-10 px-4 py-16 sm:px-6 lg:py-28">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-start">
					<div className="lg:sticky lg:top-32">
						<h2 className="max-w-3xl text-[clamp(2.6rem,6vw,6rem)] leading-[0.88] font-black text-balance">
							The feed is gone. The proof remains.
						</h2>
						<p className="mt-6 max-w-xl text-base leading-8 text-[#d9d0c1]/72">
							Unread is not a place to skim. It is a place to publish and read
							work where comprehension is visible.
						</p>
					</div>

					<div className="space-y-4">
						<Card className="border-0 bg-[#f7f2e8] text-[#17140f] ring-0">
							<CardHeader>
								<CardTitle className="text-3xl leading-none font-black">
									Friction dial
								</CardTitle>
								<CardDescription className="text-sm leading-6 text-[#5e5648]">
									Choose how strict the reading room should be.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Tabs defaultValue="serious">
									<TabsList className="bg-[#17140f]/8">
										{frictionModes.map((mode) => (
											<TabsTrigger key={mode.value} value={mode.value}>
												{mode.title}
											</TabsTrigger>
										))}
									</TabsList>
									{frictionModes.map((mode) => (
										<TabsContent key={mode.value} value={mode.value}>
											<div className="mt-4 border border-[#17140f]/10 bg-white/65 p-4">
												<p className="text-lg font-black">{mode.title}</p>
												<p className="mt-2 max-w-md text-sm leading-6 text-[#5e5648]">
													{mode.body}
												</p>
												<Progress value={mode.progress} className="mt-5">
													<ProgressLabel className="font-semibold">
														Friction level
													</ProgressLabel>
													<ProgressValue>
														{() => `${mode.progress}%`}
													</ProgressValue>
												</Progress>
											</div>
										</TabsContent>
									))}
								</Tabs>
							</CardContent>
						</Card>

						<Card className="border-0 bg-[#2a8f78] text-white ring-0">
							<CardHeader>
								<CardTitle className="text-3xl leading-none font-black">
									Author evidence
								</CardTitle>
								<CardDescription className="text-sm leading-6 text-white/72">
									Not views. Not likes. Signals that readers wrestled with the
									text.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow className="border-white/18 hover:bg-transparent">
											<TableHead className="text-white/72">Metric</TableHead>
											<TableHead className="text-white/72">Now</TableHead>
											<TableHead className="text-white/72">Delta</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{evidenceRows.map(([metric, value, delta]) => (
											<TableRow
												key={metric}
												className="border-white/14 hover:bg-white/8"
											>
												<TableCell className="font-semibold">
													{metric}
												</TableCell>
												<TableCell className="font-mono">{value}</TableCell>
												<TableCell className="font-mono text-[#e7ce8e]">
													{delta}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
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
								No infinite feed
							</Badge>
							<h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,6.4rem)] leading-[0.86] font-black text-balance">
								Make the reader stop at the exact sentence they skipped.
							</h2>
						</div>
						<div className="flex flex-wrap gap-3 lg:justify-end">
							<Link
								to="/login"
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-12 bg-[#17140f] px-5 text-white hover:bg-[#2a8f78]",
								)}
							>
								Start now
								<CheckCircle className="size-4" />
							</Link>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}

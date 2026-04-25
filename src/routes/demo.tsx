import {
	ArrowRight,
	ChartBar,
	CheckCircle,
	Compass,
	Database,
	FileText,
	Fingerprint,
	Lightning,
	Scales,
	Timer,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/demo")({
	component: DemoPage,
});

const rubric = [
	{
		icon: Scales,
		label: "Interpretation & stance",
		score: "30%",
		text: "We built Unread to study productive friction because reading tools usually remove the exact struggle that proves comprehension.",
	},
	{
		icon: Compass,
		label: "Creative leap",
		score: "25%",
		text: "The product refuses the obvious AI-summary answer. It uses AI as resistance: a gatekeeper that says, 'not clear yet.'",
	},
	{
		icon: ChartBar,
		label: "Craft & execution",
		score: "20%",
		text: "Saved rooms, streaming AI feedback, locked sections, presence, reports, public posts, and author analytics all serve one idea.",
	},
	{
		icon: Timer,
		label: "Communication",
		score: "15%",
		text: "A stranger should understand it in one minute: paste text, answer the claim, get blocked when you fake it.",
	},
	{
		icon: Fingerprint,
		label: "Conviction",
		score: "10%",
		text: "Unread is willing to be annoying. That discomfort is the stance, not a side effect.",
	},
];

const demoRun = [
	"Open the seeded post: The meeting after nobody read.",
	"Show that only the first section is visible.",
	"Submit a vague answer and let the AI push back.",
	"Submit a precise answer and unlock the next section.",
	"Open the dashboard analytics to show the weak checkpoint.",
];

const demoChecklist = [
	{
		body: "Creates the polished public post used in the live walkthrough.",
		icon: Database,
		label: "Seed demo",
		to: "/app",
	},
	{
		body: "Open the saved public room and choose the [DEMO] post.",
		icon: FileText,
		label: "Public post",
		to: "/blogs",
	},
	{
		body: "Show author analytics, weak spots, reports, and saved sessions.",
		icon: ChartBar,
		label: "Dashboard analytics",
		to: "/app",
	},
];

function DemoPage() {
	return (
		<main className="min-h-dvh bg-[var(--unread-paper)] pt-28 text-[var(--unread-ink)]">
			<section className="unread-shell grid gap-8 pb-14 pt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
				<div>
					<Badge className="unread-badge">Judge map</Badge>
					<h1 className="mt-6 max-w-6xl text-[clamp(3.4rem,9vw,8.6rem)] font-black leading-[0.8] text-balance">
						We made friction the product.
					</h1>
					<p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--unread-muted)]">
						Unread takes a hard position: the right AI for reading should not
						make every text easier. It should make pretending harder.
					</p>
					<div className="mt-9 flex flex-wrap gap-3">
						<Link
							to="/blogs"
							className={cn(
								buttonVariants({ size: "lg" }),
								"h-12 bg-[var(--unread-ink)] text-[var(--unread-paper)] hover:bg-[var(--unread-green)]",
							)}
						>
							Open public rooms
							<ArrowRight className="size-4" />
						</Link>
						<Link
							to="/app"
							className={cn(
								buttonVariants({ variant: "outline", size: "lg" }),
								"h-12 border-[var(--unread-ink)]/25 bg-transparent text-[var(--unread-ink)] hover:bg-[var(--unread-ink)]/10",
							)}
						>
							Seed demo post
						</Link>
					</div>
				</div>
				<aside className="unread-panel bg-[var(--unread-ink)] p-5 text-[var(--unread-paper)]">
					<Lightning className="size-8 text-[var(--unread-gold)]" />
					<p className="mt-8 text-4xl font-black leading-none">
						60-second pitch
					</p>
					<p className="mt-5 text-sm leading-7 text-[var(--unread-paper)]/78">
						AI usually reduces reading into summaries. We made the opposite: a
						room where AI withholds progress until you can prove what the text
						actually said.
					</p>
				</aside>
			</section>

			<section className="unread-shell pb-12">
				<div className="border border-[var(--unread-ink)]/10 bg-[var(--unread-ink)]/[0.045] p-4 sm:p-5">
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div>
							<Badge className="unread-badge">Demo checklist</Badge>
							<h2 className="mt-4 text-4xl font-black leading-none">
								Judge path in three clicks.
							</h2>
						</div>
						<CheckCircle className="size-9 text-[var(--unread-green)]" />
					</div>
					<div className="mt-5 grid gap-3 lg:grid-cols-3">
						{demoChecklist.map((item) => {
							const Icon = item.icon;
							return (
								<Link
									key={item.label}
									to={item.to}
									className="group border border-[var(--unread-ink)]/10 bg-[var(--unread-paper)] p-4 transition hover:-translate-y-1 hover:border-[var(--unread-green)]/40 hover:bg-[var(--unread-paper-2)]"
								>
									<div className="flex items-center justify-between gap-3">
										<Icon className="size-6 text-[var(--unread-green)]" />
										<ArrowRight className="size-4 text-[var(--unread-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--unread-green)]" />
									</div>
									<p className="mt-7 text-2xl font-black leading-none">
										{item.label}
									</p>
									<p className="mt-3 text-sm leading-6 text-[var(--unread-muted)]">
										{item.body}
									</p>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<section className="unread-shell grid gap-4 pb-12 lg:grid-cols-5">
				{rubric.map((item) => {
					const Icon = item.icon;
					return (
						<article
							key={item.label}
							className="border border-[var(--unread-ink)]/10 bg-[var(--unread-paper)] p-4 transition hover:-translate-y-1 hover:bg-[var(--unread-paper-2)]"
						>
							<div className="flex items-start justify-between gap-3">
								<Icon className="size-7 text-[var(--unread-green)]" />
								<span className="font-mono text-3xl font-black text-[var(--unread-clay)]">
									{item.score}
								</span>
							</div>
							<h2 className="mt-10 text-2xl font-black leading-none">
								{item.label}
							</h2>
							<p className="mt-4 text-sm leading-6 text-[var(--unread-ink-soft)]">
								{item.text}
							</p>
						</article>
					);
				})}
			</section>

			<section className="unread-shell grid gap-5 pb-24 lg:grid-cols-[22rem_minmax(0,1fr)]">
				<div>
					<Badge className="unread-badge">Demo path</Badge>
					<h2 className="mt-5 text-5xl font-black leading-none">
						Do this live.
					</h2>
				</div>
				<div className="grid gap-2">
					{demoRun.map((step, index) => (
						<div
							key={step}
							className="grid grid-cols-[3rem_minmax(0,1fr)] border border-[var(--unread-ink)]/10 bg-[var(--unread-ink)]/[0.055]"
						>
							<span className="grid place-items-center border-[var(--unread-ink)]/10 border-r font-mono text-xl font-black text-[var(--unread-green)]">
								{index + 1}
							</span>
							<p className="p-4 text-sm font-semibold leading-6">{step}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

import {
	ArrowRight,
	ChartBar,
	ClockCounterClockwise,
	LockKey,
	NotePencil,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blogs")({
	component: PostsPage,
});

const posts = [
	{
		author: "Mara Solen",
		comprehension: "74%",
		length: "14 min",
		mode: "Serious",
		title: "Why teams nod through strategy memos",
		topic: "work",
	},
	{
		author: "Eli Vance",
		comprehension: "61%",
		length: "22 min",
		mode: "Brutal",
		title: "A short history of fake certainty",
		topic: "essay",
	},
	{
		author: "Nadia Cho",
		comprehension: "83%",
		length: "9 min",
		mode: "Light",
		title: "The paragraph that changed my thesis",
		topic: "study",
	},
];

function PostsPage() {
	return (
		<main className="min-h-dvh bg-[var(--unread-ink)] pt-28 text-[var(--unread-paper)]">
			<section className="unread-shell pb-14 pt-10">
				<div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-end">
					<div>
						<Badge className="unread-badge">Public reading rooms</Badge>
						<h1 className="mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[0.82] text-balance">
							Posts that ask for proof.
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-[var(--unread-muted)]">
							Browse writing that opens as a guided reading session. The visible
							metric is comprehension, not applause.
						</p>
					</div>
					<div className="unread-panel bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)]">
						<div className="grid grid-cols-3 gap-3">
							<Metric label="clear rate" value="72%" />
							<Metric label="revisions" value="318" />
							<Metric label="rooms" value="27" />
						</div>
					</div>
				</div>
			</section>

			<section className="unread-shell pb-24">
				<div className="grid gap-4 lg:grid-cols-3">
					{posts.map((post, index) => (
						<article
							key={post.title}
							className={cn(
								"unread-panel group min-h-[28rem] bg-[var(--unread-paper)] p-5 text-[var(--unread-ink)] transition duration-300 hover:-translate-y-1 hover:bg-white",
								index === 1 && "lg:translate-y-10",
							)}
						>
							<div className="flex items-center justify-between gap-3">
								<span className="border border-[var(--unread-ink)]/15 px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--unread-ink)]/70">
									{post.topic}
								</span>
								<LockKey className="size-5 text-[var(--unread-green)]" />
							</div>
							<h2 className="mt-10 text-4xl font-black leading-none text-balance">
								{post.title}
							</h2>
							<p className="mt-5 text-sm leading-7 text-[var(--unread-ink-soft)]">
								By {post.author}. Opens section by section with checkpoints and
								a final understanding report.
							</p>
							<div className="mt-10 grid gap-2">
								<Row
									icon={ClockCounterClockwise}
									label="reading time"
									value={post.length}
								/>
								<Row
									icon={NotePencil}
									label="friction mode"
									value={post.mode}
								/>
								<Row
									icon={ChartBar}
									label="avg. comprehension"
									value={post.comprehension}
								/>
							</div>
							<Link
								to="/"
								hash="reader"
								className={cn(
									buttonVariants({ size: "lg" }),
									"mt-8 h-12 w-full bg-[var(--unread-ink)] text-white hover:bg-[var(--unread-green)]",
								)}
							>
								Open room
								<ArrowRight className="size-4 transition group-hover:translate-x-1" />
							</Link>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}

function Metric({ label, value }: { label: string; value: string }) {
	return (
		<div className="border border-[var(--unread-ink)]/12 bg-white/55 p-4">
			<p className="font-mono text-3xl font-black tabular-nums">{value}</p>
			<p className="mt-1 text-xs font-semibold text-[var(--unread-ink-soft)]">
				{label}
			</p>
		</div>
	);
}

function Row({
	icon: Icon,
	label,
	value,
}: {
	icon: typeof ChartBar;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-center justify-between gap-3 border-t border-[var(--unread-ink)]/10 py-3 text-sm">
			<span className="flex items-center gap-2 text-[var(--unread-ink-soft)]">
				<Icon className="size-4 text-[var(--unread-green)]" />
				{label}
			</span>
			<span className="font-mono font-black tabular-nums">{value}</span>
		</div>
	);
}

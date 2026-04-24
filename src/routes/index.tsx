import {
	ArrowRight,
	Brain,
	LockKey,
	PencilSimpleLine,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: HomePage });

const proofCards = [
	{
		title: "Paste a difficult text",
		body: "Drop in an essay, memo, paper excerpt, or original draft.",
		icon: PencilSimpleLine,
		className: "md:col-span-2 md:row-span-2",
	},
	{
		title: "Read in locked slices",
		body: "The next section stays hidden until the current claim is handled.",
		icon: LockKey,
		className: "md:col-span-1",
	},
	{
		title: "Prove the idea landed",
		body: "Short reflections become evidence of understanding, not empty time-on-page.",
		icon: Brain,
		className: "md:col-span-1",
	},
	{
		title: "Publish for comprehension",
		body: "Unread posts measure completion, revisions, and misconception repair.",
		icon: ArrowRight,
		className: "md:col-span-2",
	},
];

function HomePage() {
	return (
		<main className="min-h-screen overflow-x-hidden bg-[#f4f1e8] text-neutral-950">
			<section className="relative isolate flex min-h-screen items-center px-5 pt-36 pb-20 sm:px-8">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(42,180,158,0.24),transparent_34%),radial-gradient(circle_at_14%_78%,rgba(219,80,51,0.18),transparent_28%)]" />
				<div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
					<div>
						<h1 className="max-w-6xl text-[clamp(3rem,7vw,6.4rem)] leading-[0.9] font-black tracking-normal text-balance">
							Read slower.
							<span className="mx-3 inline-block h-12 w-32 align-middle grayscale contrast-125 sm:h-16 sm:w-44">
								<img
									src="https://picsum.photos/seed/annotated-reading/420/180"
									alt=""
									className="h-full w-full rounded-full object-cover"
								/>
							</span>
							Understand more.
						</h1>
						<p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700">
							Unread is an anti-summary app that uses AI to make reading harder
							to fake.
						</p>
						<div className="mt-10 flex flex-wrap gap-3">
							<Link
								to="/login"
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-12 bg-neutral-950 px-5 text-white hover:bg-neutral-800",
								)}
							>
								Start reading
								<ArrowRight className="size-4" />
							</Link>
							<Link
								to="/blogs"
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"h-12 border-neutral-950/30 bg-white/30 px-5 text-neutral-950 hover:bg-white/70",
								)}
							>
								Browse posts
							</Link>
						</div>
					</div>
					<div className="grid grid-flow-dense grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2">
						{proofCards.map((card) => {
							const Icon = card.icon;
							return (
								<article
									key={card.title}
									className={`group overflow-hidden border border-neutral-950/15 bg-white/55 p-5 backdrop-blur ${card.className}`}
								>
									<div className="flex h-full min-h-40 flex-col justify-between gap-8">
										<Icon className="size-7 text-teal-700 transition-transform duration-700 ease-out group-hover:scale-110" />
										<div>
											<h2 className="text-xl font-black">{card.title}</h2>
											<p className="mt-3 text-sm leading-6 text-neutral-600">
												{card.body}
											</p>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}

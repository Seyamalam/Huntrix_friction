import { ArrowRight, BookOpenText, CircleNotch } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
	{ name: "Reading room", to: "/" },
	{ name: "Posts", to: "/blogs" },
] as const;

export default function Header() {
	return (
		<header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#12110d]/88 text-[#f7f2e8] shadow-[0_16px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl">
			<nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
				<Link
					to="/"
					className="group grid min-w-0 grid-cols-[2.5rem_1fr] items-center gap-3"
					aria-label="Unread home"
				>
					<span className="flex size-10 items-center justify-center bg-[#f7f2e8] text-[#17140f] transition-colors group-hover:bg-[#e7ce8e]">
						<BookOpenText className="size-5" />
					</span>
					<span className="min-w-0">
						<span className="block text-lg leading-none font-black tracking-normal">
							Unread
						</span>
						<span className="hidden text-xs leading-5 text-[#d9d0c1]/58 sm:block">
							anti-summary reading
						</span>
					</span>
				</Link>

				<div className="hidden items-center gap-2 md:flex">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeProps={{
								className: "bg-[#f7f2e8] text-[#17140f]",
							}}
							inactiveProps={{
								className:
									"text-[#d9d0c1]/70 hover:bg-white/8 hover:text-white",
							}}
							className="inline-flex h-9 items-center px-3 text-xs font-semibold transition-colors"
						>
							{item.name}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-2">
					<Tooltip>
						<TooltipTrigger
							className={cn(
								buttonVariants({ variant: "ghost", size: "sm" }),
								"hidden h-9 border border-white/10 bg-white/[0.04] px-3 text-[#d9d0c1]/72 hover:bg-white/10 hover:text-white sm:inline-flex",
							)}
						>
							<CircleNotch className="size-4 text-[#e7ce8e]" />
							<Badge className="h-5 rounded-none bg-transparent px-0 text-[#e7ce8e]">
								friction on
							</Badge>
						</TooltipTrigger>
						<TooltipContent>
							Unread hides progression until the reader responds.
						</TooltipContent>
					</Tooltip>

					<Link
						to="/login"
						className={cn(
							buttonVariants({ size: "lg" }),
							"h-10 bg-[#f7f2e8] px-4 text-[#17140f] hover:bg-[#e7ce8e]",
						)}
					>
						<span className="hidden sm:inline">Enter</span>
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</nav>

			<div className="border-t border-white/7 px-4 py-2 md:hidden">
				<div className="mx-auto flex max-w-7xl gap-2">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeProps={{
								className: "bg-[#f7f2e8] text-[#17140f]",
							}}
							inactiveProps={{
								className: "bg-white/[0.04] text-[#d9d0c1]/72",
							}}
							className="flex h-9 flex-1 items-center justify-center text-xs font-semibold"
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}

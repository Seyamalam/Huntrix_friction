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
	{ name: "Workspace", to: "/app" },
	{ name: "Posts", to: "/blogs" },
] as const;

export default function Header() {
	return (
		<header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--header-text)]/10 bg-[var(--header-bg)]/78 text-[var(--header-text)] shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
			<nav className="unread-shell flex min-h-18 items-center justify-between gap-4 py-3">
				<Link
					to="/"
					className="group grid min-w-0 grid-cols-[2.25rem_1fr] items-center gap-3"
					aria-label="Unread home"
				>
					<span className="flex size-9 items-center justify-center bg-[var(--header-text)] text-[var(--header-bg)] transition-colors group-hover:bg-[var(--unread-gold)]">
						<BookOpenText className="size-5" />
					</span>
					<span className="min-w-0">
						<span className="block text-lg font-black leading-none">
							Unread
						</span>
						<span className="hidden text-xs leading-5 text-[var(--header-muted)] sm:block">
							anti-summary reading
						</span>
					</span>
				</Link>

				<div className="hidden items-center gap-1 border border-[var(--header-text)]/10 bg-[var(--header-text)]/[0.045] p-1 md:flex">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeProps={{
								className: "bg-[var(--header-text)] text-[var(--header-bg)]",
							}}
							inactiveProps={{
								className:
									"text-[var(--header-muted)] hover:bg-[var(--header-text)]/10 hover:text-[var(--header-text)]",
							}}
							className="inline-flex h-8 items-center px-3 text-xs font-semibold transition-colors"
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
								"hidden h-9 border border-[var(--header-text)]/16 bg-[var(--header-text)]/[0.06] px-3 text-[var(--header-text)] hover:bg-[var(--header-text)]/12 hover:text-[var(--header-text)] sm:inline-flex",
							)}
						>
							<CircleNotch className="size-4 text-[var(--unread-gold)]" />
							<Badge className="h-5 rounded-none bg-transparent px-0 text-[var(--unread-gold)]">
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
							"h-10 bg-[var(--header-text)] px-4 text-[var(--header-bg)] hover:bg-[var(--unread-gold)]",
						)}
					>
						<span className="hidden sm:inline">Enter</span>
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</nav>

			<div className="border-t border-[var(--header-text)]/7 px-4 py-2 md:hidden">
				<div className="mx-auto flex max-w-7xl gap-2">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeProps={{
								className: "bg-[var(--header-text)] text-[var(--header-bg)]",
							}}
							inactiveProps={{
								className: "bg-[var(--header-text)]/[0.06] text-[var(--header-text)]",
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

import {
	ArrowRightIcon,
	BookOpenTextIcon,
	FileTextIcon,
	HouseIcon,
	LightningIcon,
	PlusIcon,
	SignOutIcon,
} from "@phosphor-icons/react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app")({ component: AppLayout });

const appNav = [
	{ icon: HouseIcon, label: "Dashboard", to: "/app" },
	{ icon: PlusIcon, label: "New session", to: "/app/create" },
	{ icon: FileTextIcon, label: "Public posts", to: "/blogs" },
	{ icon: LightningIcon, label: "Judge demo", to: "/demo" },
] as const;

function AppLayout() {
	const auth = db.useAuth();

	return (
		<div className="min-h-dvh bg-[#f5f1e8] text-[#17140f]">
			<aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-[#17140f]/10 bg-[#11110d] text-[#f4efe4] lg:flex lg:flex-col">
				<div className="border-b border-white/10 p-5">
					<Link to="/app" className="flex items-center gap-3">
						<span className="flex size-10 items-center justify-center bg-[#f4efe4] text-[#11110d]">
							<BookOpenTextIcon className="size-5" />
						</span>
						<span>
							<span className="block text-lg font-black leading-none">
								Unread
							</span>
							<span className="text-xs text-[#d6cbbb]">workspace</span>
						</span>
					</Link>
				</div>

				<nav className="grid gap-1 p-3">
					{appNav.map((item) => {
						const Icon = item.icon;
						return (
							<Link
								key={item.label}
								to={item.to}
								activeProps={{
									className: "bg-[#f4efe4] text-[#11110d]",
								}}
								inactiveProps={{
									className: "text-[#d6cbbb] hover:bg-white/8 hover:text-white",
								}}
								activeOptions={{ exact: item.to === "/app" }}
								className="flex h-11 items-center gap-3 px-3 text-sm font-semibold transition-colors"
							>
								<Icon className="size-5" />
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="mt-auto border-t border-white/10 p-4">
					<div className="border border-white/10 bg-white/5.5 p-3">
						<p className="text-xs text-[#d6cbbb]">Signed in as</p>
						<p className="mt-1 truncate text-sm font-semibold">
							{auth.user?.email ?? "Not signed in"}
						</p>
					</div>
					{auth.user ? (
						<>
							{/* <DevSeedRidiculousPostsButton userId={auth.user.id} /> */}
							<Button
								type="button"
								variant="ghost"
								className="mt-3 h-11 w-full justify-start text-[#f4efe4] hover:bg-white/10 hover:text-white"
								onClick={() => db.auth.signOut()}
							>
								<SignOutIcon className="size-4" />
								Log out
							</Button>
						</>
					) : (
						<Link
							to="/login"
							className={cn(
								buttonVariants({ size: "lg" }),
								"mt-3 h-11 w-full bg-[#f4efe4] text-[#11110d] hover:bg-[#d0aa57]",
							)}
						>
							Sign in
							<ArrowRightIcon className="size-4" />
						</Link>
					)}
				</div>
			</aside>

			<header className="sticky top-0 z-40 border-b border-[#17140f]/10 bg-[#f5f1e8]/92 px-4 py-3 backdrop-blur-xl lg:hidden">
				<div className="flex items-center justify-between gap-3">
					<Link to="/app" className="flex items-center gap-2 font-black">
						<BookOpenTextIcon className="size-5" />
						Unread
					</Link>
					<div className="flex items-center gap-2">
						<Link
							to="/app/create"
							className={cn(
								buttonVariants({ size: "sm" }),
								"h-9 bg-[#11110d] text-white hover:bg-[#14876d]",
							)}
						>
							<PlusIcon className="size-4" />
						</Link>
						{auth.user ? (
							<Button
								type="button"
								size="sm"
								variant="outline"
								className="h-9 border-[#17140f]/20 bg-transparent"
								onClick={() => db.auth.signOut()}
							>
								<SignOutIcon className="size-4" />
							</Button>
						) : null}
					</div>
				</div>
				<nav className="mt-3 grid grid-cols-4 gap-2">
					{appNav.map((item) => (
						<Link
							key={item.label}
							to={item.to}
							activeProps={{ className: "bg-[#11110d] text-white" }}
							inactiveProps={{ className: "bg-white text-[#5d574a]" }}
							activeOptions={{ exact: item.to === "/app" }}
							className="flex h-9 items-center justify-center text-xs font-semibold"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</header>

			<div className="lg:pl-72">
				<Outlet />
			</div>
		</div>
	);
}

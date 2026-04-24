import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
} from "@tanstack/react-router";

import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import appCss from "@/styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Unread - Don't just click. Understand.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	notFoundComponent: NotFoundPage,
	shellComponent: RootDocument,
});

function NotFoundPage() {
	return (
		<section className="min-h-dvh bg-[var(--unread-paper)] px-4 pt-36 pb-20 text-[var(--unread-ink)] sm:px-6">
			<div className="mx-auto max-w-5xl">
				<p className="font-mono text-sm text-[var(--unread-gold)]">404</p>
				<h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,7rem)] leading-[0.88] font-black text-balance">
					This page has not earned a section yet.
				</h1>
				<p className="mt-7 max-w-xl text-base leading-8 text-[var(--unread-muted)]/86">
					The route you opened does not exist in Unread. Go back to the main
					reading room and continue from a known checkpoint.
				</p>
				<Link
					to="/"
					className={cn(
						buttonVariants({ size: "lg" }),
						"mt-9 h-12 bg-[var(--unread-ink)] px-5 text-[var(--unread-paper)] hover:bg-[var(--unread-gold)]",
					)}
				>
					Return home
				</Link>
			</div>
		</section>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: static inline script prevents theme flash before hydration. */}
				<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
				<TooltipProvider>
					<Header />
					<main className="w-full max-w-full overflow-x-hidden">
						{children}
					</main>
					<ThemeToggle />
					{/* <TanStackDevtools
					config={{
						position: "top-right",
					}}
					plugins={[
						{
							name: "Unread",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/> */}
				</TooltipProvider>
				<Scripts />
			</body>
		</html>
	);
}

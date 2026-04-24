import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

type ThemeMode = (typeof THEME_MODES)[number];

const THEME_MODES = ["light", "dark", "auto"] as const;

function getInitialMode(): ThemeMode {
	if (typeof window === "undefined") {
		return "auto";
	}

	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") {
		return stored;
	}

	return "auto";
}

function applyThemeMode(mode: ThemeMode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);

	if (mode === "auto") {
		document.documentElement.removeAttribute("data-theme");
	} else {
		document.documentElement.setAttribute("data-theme", mode);
	}

	document.documentElement.style.colorScheme = resolved;
}

export default function ThemeToggle() {
	const [isMounted, setIsMounted] = useState(false);
	const [mode, setMode] = useState<ThemeMode>("auto");

	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (mode !== "auto") {
			return;
		}

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");

		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);

	function toggleMode(nextMode: ThemeMode) {
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}

	if (!isMounted) {
		return null;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(
					buttonVariants({ variant: "secondary" }),
					"fixed right-5 bottom-5 z-50 border border-[#f7f2e8]/25 bg-[#12110d] text-[#f7f2e8] shadow-lg shadow-black/25 hover:bg-[#2a8f78] hover:text-white",
				)}
			>
				<SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sm:h-6 sm:w-6" />
				<MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 sm:h-6 sm:w-6" />
				<span className="sr-only">Toggle theme</span>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align="end"
				className="border-[var(--unread-ink)]/12 bg-[var(--unread-paper)] text-[var(--unread-ink)]"
			>
				{THEME_MODES.map((themeMode) => (
					<DropdownMenuItem
						key={themeMode}
						onClick={() => toggleMode(themeMode)}
						className="capitalize text-[var(--unread-ink)] hover:bg-[var(--unread-ink)]/8 hover:text-[var(--unread-ink)]"
					>
						{themeMode}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

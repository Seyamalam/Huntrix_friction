import { Link } from "@tanstack/react-router";

const ROUTES = [
	{ name: "Home", to: "/" },
	{ name: "Blogs", to: "/blogs" },
	{ name: "Login", to: "/login" },
];

export default function Header() {
	return (
		<header className="fixed top-4 right-3 left-3 z-50 mx-auto max-w-6xl">
			<nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border border-white/15 bg-neutral-950/75 px-4 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
				<Link to="/" className="inline-flex items-center text-xl tracking-none">
					<span className="text-cyan-200/70">Un</span>
					<strong>Read</strong>
				</Link>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-xs font-semibold uppercase sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
					{ROUTES.map((route) => (
						<Link
							key={route.to}
							to={route.to}
							className="text-white/60 hover:text-white"
						>
							{route.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}

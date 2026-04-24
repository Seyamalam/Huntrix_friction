import { Link } from "@tanstack/react-router";

const ROUTES = [
	{ name: "Home", to: "/" },
	{ name: "Blogs", to: "/blogs" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-10 backdrop-blur-lg">
			<nav className="flex flex-wrap items-center gap-x-8 gap-y-2 py-3 sm:py-4">
				<Link to="/" className="inline-flex items-center text-2xl">
					<span className="text-primary/50">Un</span>
					<strong>Read</strong>
				</Link>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
					{ROUTES.map((route) => (
						<Link
							key={route.to}
							to={route.to}
							className="text-primary/70 hover:text-primary"
						>
							{route.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}

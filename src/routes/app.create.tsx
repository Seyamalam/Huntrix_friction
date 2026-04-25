import { createFileRoute } from "@tanstack/react-router";

import { CreatePostPage } from "@/features/create-post/create-post-page";

export const Route = createFileRoute("/app/create")({
	component: CreatePostPage,
});

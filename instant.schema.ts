import { i } from "@instantdb/react";

const schema = i.schema({
	entities: {
		$users: i.entity({
			email: i.string().unique().indexed().optional(),
			name: i.string().optional(),
			createdAt: i.number().indexed().optional(),
		}),
		posts: i.entity({
			title: i.string().indexed(),
			body: i.string(),
			sourceType: i.string<"original" | "pasted" | "url">().indexed(),
			visibility: i.string<"private" | "public" | "unlisted">().indexed(),
			createdAt: i.number().indexed(),
			updatedAt: i.number().indexed(),
		}),
		readingSessions: i.entity({
			mode: i.string<"light" | "serious" | "brutal">().indexed(),
			status: i.string<"active" | "completed">().indexed(),
			currentChunkIndex: i.number(),
			createdAt: i.number().indexed(),
			completedAt: i.number().indexed().optional(),
		}),
		chunks: i.entity({
			index: i.number().indexed(),
			text: i.string(),
			mainClaim: i.string().optional(),
			prompt: i.string(),
		}),
		responses: i.entity({
			answer: i.string(),
			grade: i.string<"clear" | "vague" | "incorrect">().indexed(),
			feedback: i.string().optional(),
			responderName: i.string().optional(),
			createdAt: i.number().indexed(),
		}),
		understandingReports: i.entity({
			keyClaims: i.json<string[]>(),
			strengths: i.json<string[]>(),
			weakSpots: i.json<string[]>(),
			recommendedReview: i.json<string[]>(),
			createdAt: i.number().indexed(),
		}),
	},
	links: {
		postAuthor: {
			forward: { on: "posts", has: "one", label: "author" },
			reverse: { on: "$users", has: "many", label: "posts" },
		},
		sessionUser: {
			forward: { on: "readingSessions", has: "one", label: "user" },
			reverse: { on: "$users", has: "many", label: "readingSessions" },
		},
		sessionPost: {
			forward: { on: "readingSessions", has: "one", label: "post" },
			reverse: { on: "posts", has: "many", label: "readingSessions" },
		},
		chunkPost: {
			forward: { on: "chunks", has: "one", label: "post" },
			reverse: { on: "posts", has: "many", label: "chunks" },
		},
		responseSession: {
			forward: { on: "responses", has: "one", label: "session" },
			reverse: { on: "readingSessions", has: "many", label: "responses" },
		},
		responseChunk: {
			forward: { on: "responses", has: "one", label: "chunk" },
			reverse: { on: "chunks", has: "many", label: "responses" },
		},
		responseResponder: {
			forward: { on: "responses", has: "one", label: "responder" },
			reverse: { on: "$users", has: "many", label: "responses" },
		},
		reportSession: {
			forward: { on: "understandingReports", has: "one", label: "session" },
			reverse: {
				on: "readingSessions",
				has: "one",
				label: "understandingReport",
			},
		},
	},
	rooms: {
		readingSessions: {
			presence: i.entity({
				id: i.string().optional(),
				name: i.string().optional(),
				email: i.string().optional(),
				currentSection: i.number().optional(),
				answerInput: i.boolean().optional(),
				cursor: i.any().optional(),
			}),
		},
	},
});

export type AppSchema = typeof schema;

export default schema;

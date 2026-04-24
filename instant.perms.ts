import type { InstantRules } from "@instantdb/react";

const rules = {
	$users: {
		allow: {
			view: "auth.id != null",
			create: "true",
			update: "auth.id == data.id",
			delete: "false",
		},
		fields: {
			email: "auth.id == data.id",
		},
	},
	posts: {
		allow: {
			view: "data.visibility == 'public' || data.visibility == 'unlisted' || auth.id in data.ref('author.id')",
			create: "auth.id != null",
			update: "auth.id in data.ref('author.id')",
			delete: "auth.id in data.ref('author.id')",
		},
	},
	readingSessions: {
		allow: {
			view: "auth.id in data.ref('user.id') || 'public' in data.ref('post.visibility') || 'unlisted' in data.ref('post.visibility') || auth.id in data.ref('post.author.id')",
			create: "auth.id != null",
			update: "auth.id in data.ref('user.id') || 'public' in data.ref('post.visibility') || 'unlisted' in data.ref('post.visibility') || auth.id in data.ref('post.author.id')",
			delete: "auth.id in data.ref('user.id')",
		},
	},
	chunks: {
		allow: {
			view: "auth.id != null",
			create: "auth.id in data.ref('post.author.id')",
			update: "auth.id in data.ref('post.author.id')",
			delete: "auth.id in data.ref('post.author.id')",
		},
	},
	responses: {
		allow: {
			view: "auth.id in data.ref('session.user.id') || 'public' in data.ref('session.post.visibility') || 'unlisted' in data.ref('session.post.visibility') || auth.id in data.ref('session.post.author.id')",
			create: "auth.id != null",
			update: "auth.id in data.ref('session.user.id') || auth.id in data.ref('responder.id')",
			delete: "auth.id in data.ref('session.user.id') || auth.id in data.ref('responder.id')",
		},
	},
	understandingReports: {
		allow: {
			view: "auth.id in data.ref('session.user.id') || 'public' in data.ref('session.post.visibility') || 'unlisted' in data.ref('session.post.visibility') || auth.id in data.ref('session.post.author.id')",
			create: "auth.id != null",
			update: "auth.id in data.ref('session.user.id') || 'public' in data.ref('session.post.visibility') || 'unlisted' in data.ref('session.post.visibility') || auth.id in data.ref('session.post.author.id')",
			delete: "auth.id in data.ref('session.user.id')",
		},
	},
} satisfies InstantRules;

export default rules;

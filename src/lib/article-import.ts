import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MAX_IMPORT_CHARS = 80_000;
const MIN_ARTICLE_CHARS = 240;

const articleImportInput = z.object({
	url: z.string().min(1).max(2_000),
});

export type ImportedArticle = {
	text: string;
	title: string;
	url: string;
};

export const importArticleFromUrl = createServerFn({ method: "POST" })
	.inputValidator((input: { url: string }) => articleImportInput.parse(input))
	.handler(async ({ data }) => {
		const url = normalizeArticleUrl(data.url);
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 12_000);

		try {
			const response = await fetch(url, {
				headers: {
					Accept: "text/html,text/plain;q=0.9,*/*;q=0.1",
					"User-Agent":
						"Unread/1.0 (+https://unread.app; article import for user-requested reading sessions)",
				},
				redirect: "follow",
				signal: controller.signal,
			});

			if (!response.ok) {
				throw new Error("Could not fetch that URL.");
			}

			const contentType = response.headers.get("content-type") ?? "";
			const raw = (await response.text()).slice(0, MAX_IMPORT_CHARS);
			const imported = contentType.includes("text/plain")
				? parsePlainTextArticle(raw, response.url)
				: parseHtmlArticle(raw, response.url);

			if (imported.text.length < MIN_ARTICLE_CHARS) {
				throw new Error(
					"That URL did not contain enough readable article text. Paste the text instead.",
				);
			}

			return imported;
		} catch (error) {
			if (error instanceof Error) {
				if (error.name === "AbortError") {
					throw new Error("Article import timed out. Paste the text instead.");
				}
				throw error;
			}
			throw new Error("Could not import that article.");
		} finally {
			clearTimeout(timeout);
		}
	});

export function normalizeArticleUrl(rawUrl: string) {
	const trimmed = rawUrl.trim();
	const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
		? trimmed
		: `https://${trimmed}`;
	const url = new URL(withProtocol);

	if (url.protocol !== "http:" && url.protocol !== "https:") {
		throw new Error("Use an http or https article URL.");
	}

	url.hash = "";
	return url.toString();
}

export function parsePlainTextArticle(
	text: string,
	url: string,
): ImportedArticle {
	return {
		text: cleanExtractedText(text),
		title: titleFromUrl(url),
		url,
	};
}

export function parseHtmlArticle(html: string, url: string): ImportedArticle {
	const title =
		cleanExtractedText(htmlToText(extractTitle(html))) || titleFromUrl(url);
	const contentHtml = pickReadableHtml(html);
	const text = cleanExtractedText(htmlToText(contentHtml));

	return { text, title, url };
}

function pickReadableHtml(html: string) {
	const cleaned = html
		.replace(/<script[\s\S]*?<\/script>/gi, " ")
		.replace(/<style[\s\S]*?<\/style>/gi, " ")
		.replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
		.replace(/<svg[\s\S]*?<\/svg>/gi, " ")
		.replace(/<nav[\s\S]*?<\/nav>/gi, " ")
		.replace(/<footer[\s\S]*?<\/footer>/gi, " ")
		.replace(/<aside[\s\S]*?<\/aside>/gi, " ");

	const candidates = [
		...matchTagContent(cleaned, "article"),
		...matchTagContent(cleaned, "main"),
		...matchTagContent(cleaned, "body"),
	];

	return (
		candidates
			.map((candidate) => ({
				html: candidate,
				score: cleanExtractedText(htmlToText(candidate)).length,
			}))
			.sort((a, b) => b.score - a.score)[0]?.html ?? cleaned
	);
}

function matchTagContent(html: string, tag: string) {
	return [
		...html.matchAll(
			new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi"),
		),
	]
		.map((match) => match[1])
		.filter(Boolean);
}

function extractTitle(html: string) {
	return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "";
}

function htmlToText(html: string) {
	return decodeHtmlEntities(
		html
			.replace(/<(br|hr)\b[^>]*>/gi, "\n")
			.replace(
				/<\/(p|div|section|article|main|header|h[1-6]|li|blockquote)>/gi,
				"\n",
			)
			.replace(/<li\b[^>]*>/gi, "\n- ")
			.replace(/<[^>]+>/g, " "),
	);
}

function cleanExtractedText(text: string) {
	return text
		.replace(/\r/g, "\n")
		.replace(/[ \t]+/g, " ")
		.replace(/\n[ \t]+/g, "\n")
		.replace(/\n{3,}/g, "\n\n")
		.trim();
}

function decodeHtmlEntities(text: string) {
	const named: Record<string, string> = {
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		nbsp: " ",
		quot: '"',
	};

	return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_, entity: string) => {
		const key = entity.toLowerCase();
		if (key in named) return named[key];
		if (key.startsWith("#x")) {
			return String.fromCodePoint(Number.parseInt(key.slice(2), 16));
		}
		if (key.startsWith("#")) {
			return String.fromCodePoint(Number.parseInt(key.slice(1), 10));
		}
		return `&${entity};`;
	});
}

function titleFromUrl(url: string) {
	const parsed = new URL(url);
	const lastPathPart = parsed.pathname.split("/").filter(Boolean).at(-1);
	return lastPathPart
		? decodeURIComponent(lastPathPart).replace(/[-_]+/g, " ")
		: parsed.hostname.replace(/^www\./, "");
}

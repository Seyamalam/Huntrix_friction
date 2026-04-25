import { describe, expect, it } from "vitest";
import {
	normalizeArticleUrl,
	parseHtmlArticle,
	parsePlainTextArticle,
} from "./article-import";

describe("normalizeArticleUrl", () => {
	it("defaults bare domains to https", () => {
		expect(normalizeArticleUrl("example.com/post#comments")).toBe(
			"https://example.com/post",
		);
	});

	it("rejects non-web protocols", () => {
		expect(() => normalizeArticleUrl("file:///etc/passwd")).toThrow(
			"Use an http or https article URL.",
		);
	});
});

describe("parseHtmlArticle", () => {
	it("extracts title and article text while dropping chrome", () => {
		const article = parseHtmlArticle(
			`<!doctype html>
			<html>
				<head><title>Slow Reading &amp; Hard Claims</title></head>
				<body>
					<nav>Subscribe Login Share</nav>
					<article>
						<h1>Slow Reading</h1>
						<p>Unread argues that readers need productive friction before claiming understanding.</p>
						<p>The checkpoint forces the reader to name the actual claim instead of repeating the topic.</p>
					</article>
					<footer>Copyright</footer>
				</body>
			</html>`,
			"https://example.com/slow-reading",
		);

		expect(article.title).toBe("Slow Reading & Hard Claims");
		expect(article.text).toContain(
			"Unread argues that readers need productive friction",
		);
		expect(article.text).not.toContain("Subscribe Login Share");
	});
});

describe("parsePlainTextArticle", () => {
	it("cleans whitespace and derives a fallback title", () => {
		const article = parsePlainTextArticle(
			"One claim.\n\n\n  Another claim.",
			"https://example.com/posts/fake-understanding",
		);

		expect(article).toEqual({
			text: "One claim.\n\nAnother claim.",
			title: "fake understanding",
			url: "https://example.com/posts/fake-understanding",
		});
	});
});

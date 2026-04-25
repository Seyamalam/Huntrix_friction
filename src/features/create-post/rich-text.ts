import {
	$convertToMarkdownString,
	CHECK_LIST,
	ELEMENT_TRANSFORMERS,
	MULTILINE_ELEMENT_TRANSFORMERS,
	TEXT_FORMAT_TRANSFORMERS,
	TEXT_MATCH_TRANSFORMERS,
} from "@lexical/markdown";
import {
	$getRoot,
	type EditorState,
	type SerializedEditorState,
} from "lexical";
import { EMOJI } from "@/components/editor/transformers/markdown-emoji-transformer";
import { HR } from "@/components/editor/transformers/markdown-hr-transformer";
import { TABLE } from "@/components/editor/transformers/markdown-table-transformer";

const MARKDOWN_TRANSFORMERS = [
	TABLE,
	HR,
	EMOJI,
	CHECK_LIST,
	...ELEMENT_TRANSFORMERS,
	...MULTILINE_ELEMENT_TRANSFORMERS,
	...TEXT_FORMAT_TRANSFORMERS,
	...TEXT_MATCH_TRANSFORMERS,
];

function createTextNode(text: string) {
	return {
		detail: 0,
		format: 0,
		mode: "normal" as const,
		style: "",
		text,
		type: "text" as const,
		version: 1,
	};
}

function createParagraphNode(text: string) {
	return {
		children: [createTextNode(text)],
		direction: null,
		format: "",
		indent: 0,
		textFormat: 0,
		textStyle: "",
		type: "paragraph" as const,
		version: 1,
	};
}

export function createSerializedStateFromText(
	text: string,
): SerializedEditorState {
	const paragraphs = text
		.replace(/\r\n/g, "\n")
		.split(/\n{2,}/)
		.map((paragraph) => paragraph.trim())
		.filter(Boolean)
		.map((paragraph) => paragraph.replace(/\n/g, " "));

	return {
		root: {
			children:
				paragraphs.length > 0
					? paragraphs.map((paragraph) => createParagraphNode(paragraph))
					: [createParagraphNode("")],
			direction: null,
			format: "",
			indent: 0,
			type: "root",
			version: 1,
		},
	};
}

export function getPlainTextFromEditorState(editorState: EditorState) {
	let plainText = "";

	editorState.read(() => {
		plainText = $getRoot()
			.getTextContent()
			.replace(/\u00A0/g, " ");
	});

	return plainText;
}

export function getMarkdownFromEditorState(editorState: EditorState) {
	let markdown = "";

	editorState.read(() => {
		markdown = $convertToMarkdownString(MARKDOWN_TRANSFORMERS, undefined, true);
	});

	return markdown;
}

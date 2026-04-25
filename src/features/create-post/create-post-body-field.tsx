import type { SerializedEditorState } from "lexical";
import { useState } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { RichEditor } from "@/components/ui/rich-editor";

import {
	createSerializedStateFromText,
	getPlainTextFromEditorState,
} from "./rich-text";

export function CreatePostBodyField({
	defaultBody,
	onBodyChange,
}: {
	defaultBody: string;
	onBodyChange: (body: string) => void;
}) {
	const [initialSerializedState] = useState<SerializedEditorState>(() =>
		createSerializedStateFromText(defaultBody),
	);

	return (
		<Field className="min-h-0 flex-1">
			<FieldLabel>Body</FieldLabel>
			<FieldDescription className="text-[#5d574a]">
				Unread will create 5 to 8 local checkpoints from this text.
			</FieldDescription>
			<RichEditor
				editorSerializedState={initialSerializedState}
				onChange={(editorState) => {
					onBodyChange(getPlainTextFromEditorState(editorState));
				}}
				placeholder="Paste the article, memo, or essay here. Use the toolbar to structure it before publishing."
				maxLength={20_000}
				showAdvancedActions={false}
				className="flex min-h-0 flex-1 border-[#17140f]/15 bg-[#f9f6ef] shadow-none"
				contentEditableClassName="h-full min-h-[24rem] flex-1 px-4 py-4 text-base leading-7 sm:text-lg"
			/>
		</Field>
	);
}

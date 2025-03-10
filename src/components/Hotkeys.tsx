import type { ComponentProps } from "react";
import { cn } from "@/styles/utils";
import { Commands, type CommandType } from "./Command";
import { modeAtom, problemWordsAtom, useInit } from "@/jotai";
import { useAtomValue } from "jotai";
import { mod } from "@/types/keyboard";

export type HotkeysProps = {
	//
} & Omit<ComponentProps<"div">, "children">;

export function Hotkeys({ className, ...props }: HotkeysProps) {
	const mode = useAtomValue(modeAtom);
	const problemWords = useAtomValue(problemWordsAtom);
	const { init, retry } = useInit();

	return (
		<div className={cn("", className)} {...props}>
			<Commands
				vertical
				commands={(
					[
						mode === "book"
							? {
									keyboard_key: "KeyZ",
									modifiers: [mod],
									label: "Back",
									disabled: mode !== "book",
									handler(event) {
										event.preventDefault();
										init({
											direction: "back",
										});
									},
								}
							: null,
						{
							keyboard_key: "KeyR",
							modifiers: [mod],
							label: "Retry",
							handler: (e) => {
								e.preventDefault();
								retry();
							},
						},
						{
							keyboard_key: "Enter",
							label: "Next",
							handler(event) {
								event.preventDefault();
								if (mode === "book") {
									init({
										direction: "next",
									});
									return;
								}
								init({
									problemWords,
								});
							},
						},
					] satisfies (CommandType | null)[]
				).filter(Boolean)}
			/>
		</div>
	);
}

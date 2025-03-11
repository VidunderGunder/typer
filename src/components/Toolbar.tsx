import type { ComponentProps } from "react";
import { cn } from "@/styles/utils";
import { useAtom } from "jotai";
import { amountAtom, amounts, modeAtom, modes } from "@/jotai";

export type ToolbarProps = {
	//
} & Omit<ComponentProps<"div">, "children">;

export function Toolbar({ className, ...props }: ToolbarProps) {
	const [amount, setAmount] = useAtom(amountAtom);
	const [mode, setMode] = useAtom(modeAtom);

	return (
		<div className={cn("flex gap-5", className)} {...props}>
			<div className="rounded-xl bg-black/40 p-1">
				<div className="flex">
					{modes.map((m) => {
						return (
							<button
								type="button"
								key={m}
								disabled={m === mode}
								onClick={() => {
									setMode(m);
									// init({
									// 	amount,
									// 	mode: m,
									// 	problemWords,
									// });
								}}
								className={cn(
									"rounded-lg px-4 py-1.5",
									"not-disabled:cursor-pointer not-disabled:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-0",
									mode === m ? "bg-white/15" : "",
								)}
							>
								{m}
							</button>
						);
					})}
				</div>
			</div>
			<div className="rounded-xl bg-black/60 p-1">
				<div className="flex">
					{amounts.map((a) => {
						return (
							<button
								type="button"
								key={a}
								disabled={a === amount}
								onClick={() => {
									setAmount(a);
									// init({
									// 	amount: a,
									// 	mode,
									// 	problemWords,
									// });
								}}
								className={cn(
									"rounded-lg px-4 py-1.5",
									"not-disabled:cursor-pointer not-disabled:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-0",
									amount === a ? "bg-white/15" : "",
								)}
							>
								{a}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

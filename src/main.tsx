import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/reset.css";
import "@/styles/styles.css";
import "@/styles/tailwind.css";
import { App } from "./App";

const root = document.getElementById("root");

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}

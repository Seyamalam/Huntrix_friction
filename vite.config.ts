import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, type UserConfig } from "vite";

function clientChunkConfig(): UserConfig["build"] {
	return {
		rolldownOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return;
					if (id.includes("@tanstack")) return "vendor-tanstack";
					if (id.includes("@instantdb")) return "vendor-instant";
					if (id.includes("@base-ui") || id.includes("@radix-ui")) {
						return "vendor-ui";
					}
					if (id.includes("lexical") || id.includes("@lexical")) {
						return "vendor-editor";
					}
					if (id.includes("react") || id.includes("react-dom")) {
						return "vendor-react";
					}
				},
			},
		},
	};
}

const config = defineConfig(({ isSsrBuild }) => ({
	build: isSsrBuild ? undefined : clientChunkConfig(),
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		nitro({ rollupConfig: { external: [/^@sentry\//] } }),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
	],
}));

export default config;

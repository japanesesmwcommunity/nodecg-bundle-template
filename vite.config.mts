import react from "@vitejs/plugin-react";
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";
import {defineConfig} from "vite";
import nodecg from "./vite-plugin-nodecg.mjs";

export default defineConfig(() => {
	return {
		plugins: [
			react(),
			nodecg({
				bundleName: "nodecg-bundle-template",
				graphics: "./src/browser/graphics/views/**/*.tsx",
				dashboard: "./src/browser/dashboard/views/**/*.tsx",
				extension: {
					input: "./src/extension/index.ts",
					plugins: [nodeExternals(), esbuild()],
				},
			}),
		],
	};
});

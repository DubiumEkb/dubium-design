import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
		postcss: "./postcss.config.mjs",
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "DubiumUI",
			fileName: (format) => `index.${format}.js`,
			formats: ["es", "umd"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		sourcemap: true,
	},
});

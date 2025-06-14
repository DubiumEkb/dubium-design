import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
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
			plugins: [
				postcss({
					modules: true,
					inject: true,
					extract: false,
					minimize: true,
					sourceMap: false,
				}),
			],
		},
		sourcemap: true,
	},
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({
			entryRoot: "src",
			outDir: "dist",
			rollupTypes: false,
			include: ["src/hooks/**/*.ts"],
			exclude: ["src/**/*.test.ts"],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "dubiumHooks",
			fileName: (format) => `index.${format}.js`,
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				preserveModules: true,
				preserveModulesRoot: "src",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
});

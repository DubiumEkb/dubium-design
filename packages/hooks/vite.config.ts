import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import fs from "fs";
import dts from "vite-plugin-dts";
function getHookEntries() {
	const hooksDir = resolve(__dirname, "src/hooks");
	const files = fs.readdirSync(hooksDir);
	const entries: Record<string, string> = {};
	for (const file of files) {
		if (file.endsWith(".ts")) {
			const name = file.replace(/\.ts$/, "");
			entries[name] = resolve(hooksDir, file);
		}
	}
	return entries;
}
export default defineConfig({
	plugins: [
		react(),
		dts({
			entryRoot: "src/hooks",
			outDir: "dist",
			rollupTypes: true, // Генерировать один .d.ts файл на вход
		}),
	],
	build: {
		lib: {
			entry: getHookEntries(),
			formats: ["es"],
			fileName: (format, entryName) => `${entryName}.js`,
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
	},
});

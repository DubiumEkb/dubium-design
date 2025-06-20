import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, join, dirname } from "path";
import fs from "fs";
import { libInjectCss } from "vite-plugin-lib-inject-css";

function getEntries() {
	const componentsDir = resolve(__dirname, "src/components");
	const entries: Record<string, string> = {
		index: resolve(__dirname, "src/index.ts"),
	};

	const folders = fs
		.readdirSync(componentsDir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	for (const folder of folders) {
		const tsxFile = join(componentsDir, folder, `${folder}.tsx`);
		const tsFile = join(componentsDir, folder, `${folder}.ts`);

		if (fs.existsSync(tsxFile)) {
			entries[`${folder}/${folder}`] = tsxFile;
		} else if (fs.existsSync(tsFile)) {
			entries[`${folder}/${folder}`] = tsFile;
		}
	}

	return entries;
}

export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "react",
		}),
		libInjectCss(),
	],
	build: {
		lib: {
			entry: getEntries(),
			formats: ["es"],
		},
		rollupOptions: {
			external: [
				"react",
				"react-dom",
				"react/jsx-runtime",
				"@dubium/hooks",
				"classnames",
			],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name?.endsWith(".css")) {
						// assetInfo.name может быть, например, "Button.css"
						// Нужно найти папку с таким же именем компонента в dist
						const baseName = assetInfo.name.replace(/\.css$/, ""); // "Button"
						// Возвращаем путь как "Button/Button.css" чтобы css лежал рядом с Button.js
						return `${baseName}/${assetInfo.name}`;
					}
					return "[name].js";
				},
				chunkFileNames: "[name].js",
				entryFileNames: "[name].js",
			},
		},
		cssCodeSplit: true,
	},
});

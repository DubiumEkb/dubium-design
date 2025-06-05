import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import * as sass from "sass";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcComponentsDir = path.resolve(__dirname, "../src/components");
const distComponentsDir = path.resolve(__dirname, "../dist/components");

async function compileAllScss(srcDir, distDir) {
	const entries = await fs.readdir(srcDir, { withFileTypes: true });

	for (const entry of entries) {
		const srcPath = path.join(srcDir, entry.name);
		const distPath = path.join(distDir, entry.name);

		if (entry.isDirectory()) {
			await compileAllScss(srcPath, distPath);
		} else if (entry.isFile() && entry.name.endsWith(".scss")) {
			const cssDistPath = distPath.replace(/\.scss$/, ".css");
			const result = sass.compile(srcPath, { style: "compressed" });

			await fs.mkdir(path.dirname(cssDistPath), { recursive: true });
			await fs.writeFile(cssDistPath, result.css);
			console.log(`✅ Скомпилировано: ${srcPath} → ${cssDistPath}`);
		}
	}
}

compileAllScss(srcComponentsDir, distComponentsDir).catch((e) => {
	console.error("Ошибка при компиляции SCSS:", e);
	process.exit(1);
});

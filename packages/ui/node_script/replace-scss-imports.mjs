import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");

const validExtensions = [".js", ".ts", ".mjs", ".cjs", ".d.ts"];

async function replaceScssImports(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			await replaceScssImports(fullPath);
		} else if (
			entry.isFile() &&
			validExtensions.some((ext) => fullPath.endsWith(ext))
		) {
			let code = await fs.readFile(fullPath, "utf8");

			const updatedCode = code.replace(
				/((?:import\s+[^'"]*\s*from\s*|import\s*|require\()\s*['"])([^'"]+?)(\.module)?\.scss(\?[^'"]*)?(['"]\)?)/g,
				(_, pre, path, modulePart = "", query = "", post) =>
					`${pre}${path}${modulePart}.css${query}${post}`
			);

			if (updatedCode !== code) {
				await fs.writeFile(fullPath, updatedCode);
				console.log(`🛠️  Обновлены импорты в файле: ${fullPath}`);
			}
		}
	}
}

replaceScssImports(distDir).catch((err) => {
	console.error("Ошибка при замене импортов SCSS:", err);
	process.exit(1);
});

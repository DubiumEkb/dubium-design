import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "./dist");
const files = fs
	.readdirSync(distDir)
	.filter((f) => f.endsWith(".js") && f !== "index.js");

const exportsField = {
	".": {
		types: "./dist/index.d.ts",
		import: "./dist/index.js",
	},
};

for (const file of files) {
	const base = path.basename(file, ".js");
	exportsField[`./${base}`] = {
		types: `./dist/${base}.d.ts`,
		import: `./dist/${base}.js`,
	};
}

const pkgPath = path.resolve(__dirname, "./package.json");
const pkgJson = await fs.promises.readFile(pkgPath, "utf-8");
const pkg = JSON.parse(pkgJson);

pkg.exports = exportsField;

await fs.promises.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log("✅ package.json exports updated");

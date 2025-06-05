import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist/components");

const components = fs
	.readdirSync(distDir, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

const exportsField = {
	".": {
		types: "./dist/index.d.ts",
		import: "./dist/index.js",
	},
};

for (const comp of components) {
	const compDir = path.join(distDir, comp);
	const files = fs.readdirSync(compDir);

	const jsFile = files.find((f) => f === `${comp}.js`);
	const dtsFile = files.find((f) => f === `${comp}.d.ts`);
	const cssFile = files.find((f) => f === `${comp}.css`);

	if (!jsFile || !dtsFile) {
		console.warn(`⚠️ Пропускаем компонент ${comp}, нет js или d.ts`);
		continue;
	}

	exportsField[`./${comp}`] = {
		types: `./dist/components/${comp}/${dtsFile}`,
		import: `./dist/components/${comp}/${jsFile}`,
	};
}

const pkgPath = path.resolve(__dirname, "../package.json");
const pkgJson = await fs.promises.readFile(pkgPath, "utf-8");
const pkg = JSON.parse(pkgJson);

pkg.exports = exportsField;

await fs.promises.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log("✅ package.json exports обновлены!");

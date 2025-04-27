import { defineConfig } from "eslint/config";
import { base } from "./config/index.js";

export default defineConfig([
	base,
	{
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
		rules: {},
	},
]);

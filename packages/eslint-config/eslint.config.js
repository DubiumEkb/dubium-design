import { defineConfig } from "eslint/config";
import { base, react, typescript } from "./config/index.js";

export default defineConfig([
	base,
	react,
	typescript,
	{
		rules: {},
	},
]);

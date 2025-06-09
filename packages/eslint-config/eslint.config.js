import { defineConfig } from "eslint/config";
import { base } from "./config/base.js";
import { react } from "./config/react.js";
import { typescript } from "./config/typescript.js";

export default defineConfig([
	base,
	react,
	typescript,
	{
		rules: {},
	},
]);

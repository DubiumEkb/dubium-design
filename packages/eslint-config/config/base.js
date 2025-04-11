import globals from "globals";

export const base = {
	name: "@dubium/eslint-config/base",
	files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
	languageOptions: {
		ecmaVersion: "latest",
		globals: {
			...globals.browser,
			...globals.commonjs,
			...globals.node,
			...globals.jest,
		},
	},
	rules: {
		"no-console": "warn",
		strict: ["error", "global"],
	},
};

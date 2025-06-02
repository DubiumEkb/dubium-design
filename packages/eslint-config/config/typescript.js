import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export const typescript = {
	name: "@dubium/eslint-config/typescript",

	files: ["**/*.{ts,tsx}", "**/*.d.ts"],

	languageOptions: {
		parser: tsParser,
		parserOptions: {
			project: "./tsconfig.json",
			tsconfigRootDir: process.cwd(),
		},
	},

	plugins: {
		"@typescript-eslint": tsPlugin,
	},

	rules: {
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/no-unused-vars": ["warn"],
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/require-await": "warn",
		"@typescript-eslint/await-thenable": "warn",
	},
};

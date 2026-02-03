import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"

export const typescript = {
	name: "@dubium/eslint-config/typescript",

	files: [ "**/*.{ts,tsx}", "**/*.d.ts" ],

	languageOptions: {
		parser: tsParser,
	},

	plugins: {
		"@typescript-eslint": tsPlugin,
	},

	rules: {
		/**
		 * Запрещает объявление неиспользуемых переменных
		 * Disallows unused variables
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unused-vars
		 */
		"no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/no-unused-vars": [ "warn" ],
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "warn",
		"@typescript-eslint/no-unsafe-call": "warn",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/require-await": "warn",
		"@typescript-eslint/await-thenable": "warn",
		"@typescript-eslint/no-indexed-access-type": "error",

		// Дополнительные правила для чистоты типов:
		"@typescript-eslint/no-type-alias": [
			"error",
			{
				"allowAliases": "in-unions-and-intersections",
				"allowCallbacks": "always",
				"allowConditionalTypes": "always",
				"allowConstructors": "never",
				"allowLiterals": "in-unions-and-intersections",
				"allowMappedTypes": "always",
				"allowTupleTypes": "always",
				"allowGenerics": "always"
			}
		],

		// Запрещает сложные utility types
		"@typescript-eslint/no-unnecessary-type-parameters": "error",

		// Требует явных типов вместо infer
		"@typescript-eslint/no-inferrable-types": "error",

		// Запрещает unsafe keyof
		"@typescript-eslint/no-unsafe-declaration-merging": "error",
	},
}

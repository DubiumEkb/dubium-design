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
		// Отключаем базовые ESLint правила в пользу TypeScript
		"no-unused-vars": "off",
		"no-duplicate-imports": "off",

		// TypeScript правила
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/no-unused-vars": [ "warn" ],
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "warn",
		"@typescript-eslint/no-unsafe-call": "warn",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/require-await": "warn",
		"@typescript-eslint/await-thenable": "warn",

		// Вместо удалённого no-indexed-access-type используйте:
		"@typescript-eslint/consistent-indexed-object-style": [ "error", "record" ],

		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-unsafe-declaration-merging": "error",

		// Дополнительные полезные правила:
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unnecessary-condition": "warn",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "warn",
		"@typescript-eslint/prefer-optional-chain": "warn",

		// Безопасность типов
		"@typescript-eslint/no-unsafe-return": "error",
		"@typescript-eslint/no-unsafe-enum-comparison": "error",

		// Чистота кода
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",
	}
}
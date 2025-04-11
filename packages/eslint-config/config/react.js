import pluginReact from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginReactHooks from "eslint-plugin-react-hooks";

export const react = {
	name: "@dubium/eslint-config/react",
	files: ["**/*.{jsx,js,ts,tsx}"],
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	plugins: {
		react: pluginReact,
		"react-hooks": pluginReactHooks,
		"react-refresh": reactRefresh,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/jsx-uses-react": "error",
		"react/react-in-jsx-scope": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react-refresh/only-export-components": ["warn"],
	},
};

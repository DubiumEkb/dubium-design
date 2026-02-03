import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		getAbsolutePath("@storybook/addon-docs"),
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@storybook/addon-onboarding"),
	],

	core: {
		builder: getAbsolutePath("@storybook/builder-vite"),
	},

	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
};

export default config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}

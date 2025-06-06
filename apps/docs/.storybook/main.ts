import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

/**
 * Эта функция используется для получения абсолютного пути пакета.
 * Она необходима в проектах, использующих Yarn PnP или настроенных в монорепозиториях.
 */
function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-interactions"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
};

export default config;

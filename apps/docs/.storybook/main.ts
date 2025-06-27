import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-docs")
    ],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

	viteFinal: async (config) => {
		return {
			...config,
			css: {
				modules: {
					localsConvention: "camelCaseOnly",
				},
			},
		};
	},
};

export default config;

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}

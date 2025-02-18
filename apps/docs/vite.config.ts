import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/DubiumUI/" : "/",
	plugins: [
		react(),
		process.env.STORYBOOK_BUILD
			? ghPages({
					onError: (error: any) => {
						console.error("Deployment failed:", error);
						process.exit(1);
					},
				})
			: null,
	],
});

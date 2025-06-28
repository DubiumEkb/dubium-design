import { defineConfig } from "vite";

// Используем SWC-компилятор для React (быстрее Babel)
import react from "@vitejs/plugin-react-swc";

// Для работы с путями
import { resolve } from "path";

// Плагин для инжекта CSS в сборку библиотеки
import { libInjectCss } from "vite-plugin-lib-inject-css";

import dts from "vite-plugin-dts"

export default defineConfig({
	plugins: [
    react({
      // Указываем, что используем стандартный React JSX
			jsxImportSource: "react",
    }),

    // Инжектит CSS прямо в JS-бандлы (важно для библиотек)
    libInjectCss(),

    dts()
	],
	build: {
    lib: {
      // Настройки сборки библиотеки
      entry: {
        // Главный входной файл
        index: resolve(__dirname, "src/index.ts"),

        // Отдельный entry для Button
				"components/Button/Button": resolve(
					__dirname,
					"src/components/Button/Button.tsx"
        ),

        // Отдельный entry для Link
				"components/Link/Link": resolve(__dirname, "src/components/Link/Link.tsx"),
      },

      // Собираем только в ES-формате
			formats: ["es"],
      fileName: (format, name) => `${name}.js`,
		},
    rollupOptions: {
      // Внешние зависимости
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
        assetFileNames: () => {
          return 'components/[name]/[name][extname]';
        },
        // Именование чанков
        chunkFileNames: "[name].js",
        // Именование entry-файлов
				entryFileNames: "[name].js",
			},
    },
    // чтобы обычные (не-модульные) стили выносились отдельно
		cssCodeSplit: true,
	},
});

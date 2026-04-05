# @dubium/eslint-config

**Flat ESLint config** for Dubium projects — modular, extensible, and strictly structured.
Supports **TypeScript**, **React**, and **accessibility (a11y)** best practices.

[Русская версия](https://github.com/DubiumEkb/dubium-design/blob/main/packages/eslint-config/README-RU.md)

---

## 📦 Installation

Install the config and the required peer dependencies according to your needs.

### 🔹 Base configuration (`base`)

```bash
npm install -D eslint @eslint/js globals @dubium/eslint-config
# or
yarn add -D eslint @eslint/js globals @dubium/eslint-config
```

<sub>It is also recommended to install `globals` if you use global variables in your ESLint config.</sub>

---

### 🔹 TypeScript (`typescript`)

```bash
npm install -D typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
# or
yarn add -D typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

---

### 🔹 React (`react`)

```bash
npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
# or
yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

---

### 🔹 Accessibility (`jsxA11y`)

```bash
npm install -D eslint-plugin-jsx-a11y
# or
yarn add -D eslint-plugin-jsx-a11y
```

---

### 🔹 Prettier

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
# or
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

###

## ⚙️ Usage

Create an `eslint.config.cjs` file:

```js
import { defineConfig } from "eslint/config"
import { base } from "@dubium/eslint-config/base"
import { typescript } from "@dubium/eslint-config/typescript"
import { react } from "@dubium/eslint-config/react"
import globals from "globals"
import prettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

// Модифицируем typescript конфиг для поддержки type-aware правил
const enhancedTypescript = {
  ...typescript,
  languageOptions: {
    ...typescript.languageOptions,
    parserOptions: {
      ...( typescript.languageOptions?.parserOptions || {} ),
      project: "./tsconfig.json",
      tsconfigRootDir: process.cwd(),
      // Для поддержки path aliases (@/*)
      EXPERIMENTAL_useProjectService: true,
    },
  },
}

export default defineConfig( [
  base,
  enhancedTypescript,
  react,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  prettier,
  {
    files: [ "**/*.schema.ts" ],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off"
    }
  }
] )


```

### Or Example for Nestjs

```js
import { defineConfig } from "eslint/config"
import { base } from "@dubium/eslint-config/base"
import { typescript } from "@dubium/eslint-config/typescript"
import globals from "globals"
import prettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

// Модифицируем typescript конфиг для поддержки type-aware правил
const enhancedTypescript = {
	...typescript,
	languageOptions: {
		...typescript.languageOptions,
		parserOptions: {
			...(typescript.languageOptions?.parserOptions || {}),
			project: "./tsconfig.json",
			tsconfigRootDir: process.cwd(),
			// Для поддержки path aliases (@/*)
			EXPERIMENTAL_useProjectService: true,
		},
	},
}

export default defineConfig([
	base,
	enhancedTypescript,
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			"prettier/prettier": "error",
		},
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
	},
	prettier,
	{
		rules: {
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"new-cap": [
				"error",
				{
					capIsNew: false,
					newIsCap: false,
					properties: true,
				},
			],
			"class-methods-use-this": "off",
		},
	},
])
```

You can also use only the configs you need:

```js
export default defineConfig([
  base,
  typescript,
]);
```

---

> If your project uses global variables (e.g. `window`, `process`, `jest`, etc.), we recommend installing the `globals` package and adding them to your ESLint configuration:
>
> ```js
> import globals from "globals";
>
> export default defineConfig({
>   languageOptions: {
>     globals: {
>       ...globals.browser,
>       ...globals.node,
>       ...globals.jest,
>     },
>   },
>   // other settings
> });
> ```

---

## 🧩 Available configs

| Config       | Import from                        | Description                          |
| ------------ | ---------------------------------- | ------------------------------------ |
| `base`       | `@dubium/eslint-config/base`       | Basic JS/TS setup + globals          |
| `typescript` | `@dubium/eslint-config/typescript` | TypeScript support                   |
| `react`      | `@dubium/eslint-config/react`      | React, hooks, and React Refresh      |
| `jsxA11y`    | `@dubium/eslint-config/jsx-a11y`   | Accessibility (a11y) recommendations |

---

## 🔍 Inspect final config

```bash
npx eslint --print-config src/index.ts
```

Or, if you have the script added:

```bash
npm run lint:inspect
```

---

## 🔧 Requirements

* **Node.js** `>=18`
* **ESLint** `^9.0.0` (Flat Config)
* Your project must use `"type": "module"`

---

## 📝 License

[MIT](./LICENSE) © [Dubium](https://github.com/DubiumEkb)

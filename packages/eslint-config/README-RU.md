# @dubium/eslint-config

**Flat ESLint config** для проектов Dubium — модульный, расширяемый и строго структурированный.
Поддерживает **TypeScript**, **React** и **доступность (a11y)**.

[English version](./README.md)

---

## 📦 Установка

Установи сам конфиг и нужные peer-зависимости под конкретные нужды.

### 🔹 Базовая конфигурация (`base`)

```bash
npm install -D eslint @dubium/eslint-config
# или
yarn add -D eslint @dubium/eslint-config
```

<sub>Также рекомендуется установить `globals`, если используется в `.eslintrc`.</sub>

---

### 🔹 TypeScript (`typescript`)

```bash
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
# или
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

---

### 🔹 React (`react`)

```bash
npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
# или
yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

---

### 🔹 Доступность (`jsxA11y`)

```bash
npm install -D eslint-plugin-jsx-a11y
# или
yarn add -D eslint-plugin-jsx-a11y
```

---

## ⚙️ Использование

Создай файл `eslint.config.js`:

```js
import { defineConfig } from "eslint/config";
import {
  base,
  typescript,
  react,
  jsxA11y,
} from "@dubium/eslint-config";

export default defineConfig([
  base,
  typescript,
  react,
  jsxA11y,
]);
```

Можно использовать только нужные конфиги:

```js
export default defineConfig([
  base,
  typescript,
]);
```

---

> Если в проекте используются глобальные переменные (например, `window`, `process`, `jest` и т.п.), рекомендуем дополнительно установить пакет `globals` и добавить их в конфигурацию ESLint:
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
>   // другие настройки
> });
> ```

---

## 🧩 Доступные конфиги

| Конфиг       | Импорт из                          | Описание                           |
| ------------ | ---------------------------------- | ---------------------------------- |
| `base`       | `@dubium/eslint-config/base`       | Базовая настройка JS/TS + globals  |
| `typescript` | `@dubium/eslint-config/typescript` | Поддержка TypeScript               |
| `react`      | `@dubium/eslint-config/react`      | React, хуки и React Refresh        |
| `jsxA11y`    | `@dubium/eslint-config/jsx-a11y`   | Рекомендации по доступности (a11y) |

---

## 🔍 Проверка финального конфига

```bash
npx eslint --print-config src/index.ts
```

Или:

```bash
npm run lint:inspect
```

---

## 🔧 Требования

* **Node.js** `>=18`
* **ESLint** `^9.0.0` (Flat Config)
* Проект должен использовать `type: "module"`

---

## 📝 Лицензия

[MIT](./LICENSE) © [Dubium](https://github.com/DubiumEkb)

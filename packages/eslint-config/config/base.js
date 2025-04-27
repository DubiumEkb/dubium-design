import globals from "globals";

export const base = {
	name: "@dubium/eslint-config/base",
	files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
	languageOptions: {
		ecmaVersion: "latest",
		globals: {
			...globals.browser,
			...globals.commonjs,
			...globals.node,
			...globals.jest,
		},
	},
	rules: {
		// "no-console": "warn",
		// strict: ["error", "global"],

		/**
		 * Требует возврата значения в коллбэках методов массивов
		 * Enforces return statements in callbacks of array methods
		 * Ссылка: https://eslint.org/docs/latest/rules/array-callback-return
		 */
		"array-callback-return": "error",

		/**
		 * Требует вызова `super()` в конструкторах производных классов
		 * Requires `super()` calls in constructors of derived classes
		 * Ссылка: https://eslint.org/docs/latest/rules/constructor-super
		 */
		"constructor-super": "error",

		/**
		 * Запрещает неправильное направление изменения счетчика в цикле `for`
		 * Ensures that a `for` loop update clause moves the counter in the right direction
		 * Ссылка: https://eslint.org/docs/latest/rules/for-direction
		 */
		"for-direction": "error",

		/**
		 * Требует возврата значения в геттерах
		 * Enforces return statements in getters
		 * Ссылка: https://eslint.org/docs/latest/rules/getter-return
		 */
		"getter-return": "error",

		/**
		 * Запрещает использование async-функций в качестве исполнителя Promise
		 * Disallows using an async function as a Promise executor
		 * Ссылка: https://eslint.org/docs/latest/rules/no-async-promise-executor
		 */
		"no-async-promise-executor": "error",

		/**
		 * Запрещает использование await внутри циклов
		 * Disallows using await inside of loops
		 * Ссылка: https://eslint.org/docs/latest/rules/no-await-in-loop
		 */
		"no-await-in-loop": "error",

		/**
		 * Запрещает переопределение классов
		 * Disallows reassigning class declarations
		 * Ссылка: https://eslint.org/docs/latest/rules/no-class-assign
		 */
		"no-class-assign": "error",

		/**
		 * Запрещает сравнение с -0 (минус ноль)
		 * Disallows comparing against -0 (negative zero)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-compare-neg-zero
		 */
		"no-compare-neg-zero": "error",

		/**
		 * Запрещает присваивание в условиях условных операторов
		 * Disallows assignment operators in conditional expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-cond-assign
		 */
		"no-cond-assign": "error",

		/**
		 * Запрещает переопределение переменных, объявленных через const
		 * Disallows reassigning const variables
		 * Ссылка: https://eslint.org/docs/latest/rules/no-const-assign
		 */
		"no-const-assign": "error",

		/**
		 * Запрещает бессмысленные сравнения с заведомо известным результатом
		 * Disallows obviously useless constant comparisons
		 * Ссылка: https://eslint.org/docs/latest/rules/no-constant-binary-expression
		 */
		"no-constant-binary-expression": "error",

		/**
		 * Запрещает условия, которые всегда истинны или ложны
		 * Disallows constant expressions in conditions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-constant-condition
		 */
		"no-constant-condition": "error",

		/**
		 * Запрещает возврат значений в конструкторе класса
		 * Disallows returning values from class constructors
		 * Ссылка: https://eslint.org/docs/latest/rules/no-constructor-return
		 */
		"no-constructor-return": "error",

		/**
		 * Запрещает контрольные символы в регулярных выражениях
		 * Disallows control characters in regular expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-control-regex
		 */
		"no-control-regex": "error",

		/**
		 * Запрещает использование debugger
		 * Disallows the use of debugger statements
		 * Ссылка: https://eslint.org/docs/latest/rules/no-debugger
		 */
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",

		/**
		 * Запрещает дублирование имен параметров в функциях
		 * Disallows duplicate parameter names in function definitions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-dupe-args
		 */
		"no-dupe-args": "error",

		/**
		 * Запрещает дублирование имен методов в классе
		 * Disallows duplicate class member names
		 * Ссылка: https://eslint.org/docs/latest/rules/no-dupe-class-members
		 */
		"no-dupe-class-members": "error",

		/**
		 * Запрещает дублирующие условия в цепочке else-if
		 * Disallows duplicate conditions in if-else-if chains
		 * Ссылка: https://eslint.org/docs/latest/rules/no-dupe-else-if
		 */
		"no-dupe-else-if": "error",

		/**
		 * Запрещает дублирование ключей в объектах
		 * Disallows duplicate keys in object literals
		 * Ссылка: https://eslint.org/docs/latest/rules/no-dupe-keys
		 */
		"no-dupe-keys": "error",

		/**
		 * Запрещает дублирующие case-ветки в switch-операторах
		 * Disallows duplicate case labels in switch statements
		 * Ссылка: https://eslint.org/docs/latest/rules/no-duplicate-case
		 */
		"no-duplicate-case": "error",

		/**
		 * Запрещает дублирование импортов из одного модуля
		 * Disallows duplicate imports from the same module
		 * Ссылка: https://eslint.org/docs/latest/rules/no-duplicate-imports
		 */
		"no-duplicate-imports": "error",

		/**
		 * Запрещает пустые символьные классы в регулярных выражениях (например, /[]/)
		 * Disallows empty character classes in regular expressions (e.g., /[]/)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-empty-character-class
		 */
		"no-empty-character-class": "error",

		/**
		 * Запрещает пустые паттерны в деструктуризации
		 * Disallows empty destructuring patterns
		 * Ссылка: https://eslint.org/docs/latest/rules/no-empty-pattern
		 */
		"no-empty-pattern": "error",

		/**
		 * Запрещает перезапись переменной исключения в catch(error)
		 * Disallows reassigning exceptions in catch clauses
		 * Ссылка: https://eslint.org/docs/latest/rules/no-ex-assign
		 */
		"no-ex-assign": "error",

		/**
		 * Запрещает случайный переход между case в switch без break или return
		 * Disallows unintentional case fallthrough in switch statements without break/return
		 * Ссылка: https://eslint.org/docs/latest/rules/no-fallthrough
		 */
		"no-fallthrough": "error",

		/**
		 * Запрещает переопределение функций
		 * Disallows reassigning function declarations
		 * Ссылка: https://eslint.org/docs/latest/rules/no-func-assign
		 */
		"no-func-assign": "error",

		/**
		 * Запрещает переопределение импортированных модулей
		 * Disallows reassigning imported bindings
		 * Ссылка: https://eslint.org/docs/latest/rules/no-import-assign
		 */
		"no-import-assign": "error",

		/**
		 * Запрещает объявления функций и переменных внутри блоков (например, в условиях или циклах)
		 * Disallows function or variable declarations in nested blocks
		 * Ссылка: https://eslint.org/docs/latest/rules/no-inner-declarations
		 */
		"no-inner-declarations": "error",

		/**
		 * Запрещает некорректные регулярные выражения
		 * Disallows invalid regular expression patterns
		 * Ссылка: https://eslint.org/docs/latest/rules/no-invalid-regexp
		 */
		"no-invalid-regexp": "error",

		/**
		 * Запрещает нестандартные пробельные символы в коде
		 * Disallows irregular whitespace characters in code
		 * Ссылка: https://eslint.org/docs/latest/rules/no-irregular-whitespace
		 */
		"no-irregular-whitespace": "error",

		/**
		 * Запрещает использование чисел с потерей точности
		 * Disallows numeric literals that lose precision
		 * Ссылка: https://eslint.org/docs/latest/rules/no-loss-of-precision
		 */
		"no-loss-of-precision": "error",

		/**
		 * Запрещает неочевидные или потенциально ошибочные символьные классы в регулярных выражениях
		 * Disallows misleading or potentially erroneous character classes in regular expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-misleading-character-class
		 */
		"no-misleading-character-class": "error",

		/**
		 * Запрещает создание экземпляров нативных типов (Number/String/Boolean/Symbol) через new
		 * Disallows constructor calls for native non-constructors (Number/String/Boolean/Symbol)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
		 */
		"no-new-native-nonconstructor": "error",

		/**
		 * Запрещает вызов глобальных объектов (Math, JSON и др.) как функций
		 * Disallows calling global objects (Math, JSON etc.) as functions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-obj-calls
		 */
		"no-obj-calls": "error",

		/**
		 * Запрещает возврат значений в исполнителе Promise (может приводить к "зависшим" промисам)
		 * Disallows return statements in Promise executor (can lead to dangling Promises)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-promise-executor-return
		 */
		"no-promise-executor-return": "error",

		/**
		 * Запрещает прямое использование методов Object.prototype (hasOwnProperty, isPrototypeOf и др.)
		 * Disallows direct calls to Object.prototype methods (hasOwnProperty, isPrototypeOf etc.)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-prototype-builtins
		 */
		"no-prototype-builtins": "error",

		/**
		 * Запрещает самоприсваивание переменных (например, `x = x`)
		 * Disallows self-assignment of variables (e.g. `x = x`)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-self-assign
		 */
		"no-self-assign": "error",

		/**
		 * Запрещает сравнение переменной с самой собой (например, `x === x`)
		 * Disallows comparing a variable with itself (e.g. `x === x`)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-self-compare
		 */
		"no-self-compare": "error",

		/**
		 * Запрещает возврат значений в сеттерах (которые игнорируются)
		 * Disallows return statements in setters (which are ignored)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-setter-return
		 */
		"no-setter-return": "error",

		/**
		 * Запрещает разреженные массивы с пропущенными элементами (например, [1,,3])
		 * Disallows sparse arrays with missing elements (e.g. [1,,3])
		 * Ссылка: https://eslint.org/docs/latest/rules/no-sparse-arrays
		 */
		"no-sparse-arrays": "error",

		/**
		 * Запрещает использование шаблонных литералов в обычных строках (например, "Hello ${name}")
		 * Disallows template literal syntax in regular strings (e.g. "Hello ${name}")
		 * Ссылка: https://eslint.org/docs/latest/rules/no-template-curly-in-string
		 */
		"no-template-curly-in-string": "error",

		/**
		 * Запрещает использование `this` до вызова `super()` в конструкторах производных классов
		 * Disallows using `this` before `super()` in derived class constructors
		 * Ссылка: https://eslint.org/docs/latest/rules/no-this-before-super
		 */
		"no-this-before-super": "error",

		/**
		 * Запрещает использование необъявленных переменных
		 * Disallows usage of undeclared variables
		 * Ссылка: https://eslint.org/docs/latest/rules/no-undef
		 */
		"no-undef": "error",

		/**
		 * Запрещает неочевидные многострочные выражения, которые могут работать неожиданно
		 * Disallows confusing multiline expressions that may parse unexpectedly
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unexpected-multiline
		 */
		"no-unexpected-multiline": "error",

		/**
		 * Запрещает неизменяемые условия в циклах (может приводить к бесконечным циклам)
		 * Disallows unmodified loop conditions (may lead to infinite loops)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
		 */
		"no-unmodified-loop-condition": "error",

		/**
		 * Запрещает недостижимый код после return, throw, break и continue
		 * Disallows unreachable code after return, throw, break and continue
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unreachable
		 */
		"no-unreachable": "error",

		/**
		 * Запрещает недостижимые итерации в циклах (когда условие всегда false)
		 * Disallows unreachable loop iterations (when condition is always false)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unreachable-loop
		 */
		"no-unreachable-loop": "error",
	},
};

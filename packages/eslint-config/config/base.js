export const base = {
	name: "@dubium/eslint-config/base",

	files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],

	languageOptions: {
		ecmaVersion: "latest",
	},

	rules: {
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

		/**
		 * Запрещает использование управляющих операторов (return, throw, break, continue) внутри блоков finally
		 * Disallows control flow statements (return, throw, break, continue) inside finally blocks
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unsafe-finally
		 */
		"no-unsafe-finally": "error",

		/**
		 * Запрещает небезопасные операции отрицания в выражениях отношений
		 * Disallows unsafe negation in relational expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unsafe-negation
		 */
		"no-unsafe-negation": "error",

		/**
		 * Запрещает небезопасное использование опциональной цепочки вызовов
		 * Disallows unsafe usage of optional chaining
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
		 */
		"no-unsafe-optional-chaining": "error",

		/**
		 * Запрещает неиспользуемые приватные поля и методы классов
		 * Disallows unused private class members
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unused-private-class-members
		 */
		"no-unused-private-class-members": "error",

		/**
		 * Запрещает объявление неиспользуемых переменных
		 * Disallows unused variables
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unused-vars
		 */
		"no-unused-vars": "error",

		/**
		 * Запрещает использование переменных до их объявления
		 * Disallows the use of variables before they are defined
		 * Ссылка: https://eslint.org/docs/latest/rules/no-use-before-define
		 */
		"no-use-before-define": "error",

		/**
		 * Запрещает бесполезные присваивания переменным
		 * Disallows useless variable assignments
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-assignment
		 */
		"no-useless-assignment": "error",

		/**
		 * Запрещает бесполезные обратные ссылки в регулярных выражениях
		 * Disallows useless backreferences in regular expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-backreference
		 */
		"no-useless-backreference": "error",

		/**
		 * Требует атомарных обновлений асинхронных переменных
		 * Requires atomic updates of asynchronous variables
		 * Ссылка: https://eslint.org/docs/latest/rules/require-atomic-updates
		 */
		"require-atomic-updates": error,

		/**
		 * Требует использования метода isNaN() для проверки на NaN
		 * Requires using isNaN() method to check for NaN values
		 * Ссылка: https://eslint.org/docs/latest/rules/use-isnan#rule-details
		 */
		"use-isnan": "error",

		/**
		 * Требует корректного использования оператора typeof
		 * Enforces proper use of the typeof operator
		 * Ссылка: https://eslint.org/docs/latest/rules/valid-typeof
		 */
		"valid-typeof": "error",

		/**
		 * Требует использования this в методах класса (кроме статических)
		 * Enforces that class methods utilize this (except static methods)
		 * Ссылка: https://eslint.org/docs/latest/rules/class-methods-use-this
		 */
		"class-methods-use-this": ["warn"],

		/**
		 * Ограничивает цикломатическую сложность функций
		 * Limits the cyclomatic complexity of functions
		 * Ссылка: https://eslint.org/docs/latest/rules/complexity
		 */
		complexity: ["warn", { max: 3 }],

		/**
		 * Требует согласованного возврата значений из функций
		 * Requires consistent return values from functions
		 * Ссылка: https://eslint.org/docs/latest/rules/consistent-return
		 */
		"consistent-return": "error",

		/**
		 * Требует наличия ветки default в операторах switch
		 * Requires default case in switch statements
		 * Ссылка: https://eslint.org/docs/latest/rules/default-case
		 */
		"default-case": "error",

		/**
		 * Требует размещения ветки default в конце оператора switch
		 * Requires default case to be last in switch statements
		 * Ссылка: https://eslint.org/docs/latest/rules/default-case-last
		 */
		"default-case-last": "error",

		/**
		 * Требует использования строгого равенства (=== и !==)
		 * Requires the use of strict equality operators (=== and !==)
		 * Ссылка: https://eslint.org/docs/latest/rules/eqeqeq
		 */
		eqeqeq: "error",

		/**
		 * Требует именованных функциональных выражений (запрещает анонимные стрелочные и function-выражения)
		 * Requires named function expressions (disallows anonymous arrow and function expressions)
		 * Ссылка: https://eslint.org/docs/latest/rules/func-names
		 */
		"func-names": ["error", "always"],

		/**
		 * Ограничивает количество классов в одном файле
		 * Limits the number of classes per file
		 * Ссылка: https://eslint.org/docs/latest/rules/max-classes-per-file
		 */
		"max-classes-per-file": ["error", 1],

		/**
		 * Ограничивает глубину вложенности блоков кода
		 * Limits the depth of nested code blocks
		 * Ссылка: https://eslint.org/docs/latest/rules/max-depth
		 */
		"max-depth": ["error", 3],

		/**
		 * Ограничивает максимальное количество параметров функции
		 * Limits the maximum number of function parameters
		 * Ссылка: https://eslint.org/docs/latest/rules/max-params
		 */
		"max-params": ["error", 5],

		/**
		 * Требует использования заглавной буквы для конструкторов (new)
		 * Requires constructor names to begin with a capital letter
		 * Ссылка: https://eslint.org/docs/latest/rules/new-cap
		 */
		"new-cap": ["error"],

		/**
		 * Запрещает использование функций alert, confirm и prompt
		 * Disallows the use of alert, confirm and prompt
		 * Ссылка: https://eslint.org/docs/latest/rules/no-alert
		 */
		"no-alert": "error",

		/**
		 * Запрещает использование конструктора Array для создания массивов
		 * Disallows the use of the Array constructor to create arrays
		 * Ссылка: https://eslint.org/docs/latest/rules/no-array-constructor
		 */
		"no-array-constructor": "error",

		/**
		 * Запрещает использование побитовых операторов
		 * Disallows the use of bitwise operators
		 * Ссылка: https://eslint.org/docs/latest/rules/no-bitwise
		 */
		"no-bitwise": "error",

		/**
		 * Запрещает использование arguments.caller и arguments.callee
		 * Disallows the use of arguments.caller and arguments.callee
		 * Ссылка: https://eslint.org/docs/latest/rules/no-caller
		 */
		"no-caller": "error",

		/**
		 * Запрещает объявления в case-блоках без фигурных скобок
		 * Disallows lexical declarations in case clauses without block scoping
		 * Ссылка: https://eslint.org/docs/latest/rules/no-case-declarations
		 */
		"no-case-declarations": "error",

		/**
		 * Запрещает использование методов console
		 * Disallows the use of console methods
		 * Ссылка: https://eslint.org/docs/latest/rules/no-console
		 */
		"no-console": process.env.NODE_ENV === "production" ? "error" : "warn",

		/**
		 * Запрещает удаление переменных оператором delete
		 * Disallows deletion of variables using the delete operator
		 * Ссылка: https://eslint.org/docs/latest/rules/no-delete-var
		 */
		"no-delete-var": "error",

		/**
		 * Запрещает пустые блоки операторов
		 * Disallows empty block statements
		 * Ссылка: https://eslint.org/docs/latest/rules/no-empty
		 */
		"no-empty": "error",

		/**
		 * Запрещает пустые функции
		 * Disallows empty functions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-empty-function
		 */
		"no-empty-function": "error",

		/**
		 * Запрещает пустые статические блоки в классах
		 * Disallows empty static blocks in classes
		 * Ссылка: https://eslint.org/docs/latest/rules/no-empty-static-block
		 */
		"no-empty-static-block": "error",

		/**
		 * Запрещает расширение нативных объектов
		 * Disallows extending native objects
		 * Ссылка: https://eslint.org/docs/latest/rules/no-extend-native
		 */
		"no-extend-native": "error",

		/**
		 * Запрещает излишнее использование метода bind()
		 * Disallows unnecessary use of bind() method
		 * Ссылка: https://eslint.org/docs/latest/rules/no-extra-bind
		 */
		"no-extra-bind": "error",

		/**
		 * Запрещает переопределение глобальных переменных
		 * Disallows reassignment of global variables
		 * Ссылка: https://eslint.org/docs/latest/rules/no-global-assign
		 */
		"no-global-assign": "error",

		/**
		 * Запрещает неявное объявление глобальных переменных
		 * Disallows implicit global variable declarations
		 * Ссылка: https://eslint.org/docs/latest/rules/no-implicit-globals
		 */
		"no-implicit-globals": "error",

		/**
		 * Запрещает использование строк в качестве аргументов setTimeout/setInterval (неявный eval)
		 * Disallows strings as setTimeout/setInterval arguments (implied eval)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-implied-eval
		 */
		"no-implied-eval": "error",

		/**
		 * Запрещает использование this в недопустимых контекстах
		 * Disallows usage of this in invalid contexts
		 * Ссылка: https://eslint.org/docs/latest/rules/no-invalid-this
		 */
		"no-invalid-this": "error",

		/**
		 * Запрещает использование устаревшего протокола __iterator__
		 * Disallows the use of deprecated __iterator__ protocol
		 * Ссылка: https://eslint.org/docs/latest/rules/no-iterator
		 */
		"no-iterator": "error",

		/**
		 * Запрещает изолированные блоки кода без управляющих конструкций
		 * Disallows lone blocks without control statements
		 * Ссылка: https://eslint.org/docs/latest/rules/no-lone-blocks
		 */
		"no-lone-blocks": "error",

		/**
		 * Запрещает создание функций внутри циклов
		 * Disallows function declarations inside loops
		 * Ссылка: https://eslint.org/docs/latest/rules/no-loop-func
		 */
		"no-loop-func": "error",

		/**
		 * Запрещает множественное присваивание в одной строке
		 * Disallows multiple assignments in single statement
		 * Ссылка: https://eslint.org/docs/latest/rules/no-multi-assign
		 */
		"no-multi-assign": "error",

		/**
		 * Запрещает использование конструкторов без присваивания
		 * Disallows constructor use without assignment
		 * Ссылка: https://eslint.org/docs/latest/rules/no-new
		 */
		"no-new": "error",

		/**
		 * Запрещает использование конструктора Function
		 * Disallows the Function constructor
		 * Ссылка: https://eslint.org/docs/latest/rules/no-new-func
		 */
		"no-new-func": "error",

		/**
		 * Запрещает использование конструкторов-обёрток (String, Number, Boolean)
		 * Disallows wrapper object constructors (String, Number, Boolean)
		 * Ссылка: https://eslint.org/docs/latest/rules/no-new-wrappers
		 */
		"no-new-wrappers": "error",

		/**
		 * Запрещает восьмеричные escape-последовательности в строковых литералах
		 * Disallows octal escape sequences in string literals
		 * Ссылка: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
		 */
		"no-nonoctal-decimal-escape": "error",

		/**
		 * Запрещает использование конструктора Object
		 * Disallows the Object constructor
		 * Ссылка: https://eslint.org/docs/latest/rules/no-object-constructor
		 */
		"no-object-constructor": "error",

		/**
		 * Запрещает восьмеричные числовые литералы
		 * Disallows octal numeric literals
		 * Ссылка: https://eslint.org/docs/latest/rules/no-octal
		 */
		"no-octal": "error",

		/**
		 * Запрещает переприсваивание параметров функции
		 * Disallows reassignment of function parameters
		 * Ссылка: https://eslint.org/docs/latest/rules/no-param-reassign
		 */
		"no-param-reassign": "error",

		/**
		 * Запрещает использование свойства __proto__
		 * Disallows the use of __proto__ property
		 * Ссылка: https://eslint.org/docs/latest/rules/no-proto
		 */
		"no-proto": "error",

		/**
		 * Запрещает повторное объявление переменных
		 * Disallows variable redeclaration
		 * Ссылка: https://eslint.org/docs/latest/rules/no-redeclare
		 */
		"no-redeclare": "error",

		/**
		 * Запрещает множественные пробелы в регулярных выражениях
		 * Disallows multiple spaces in regular expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-regex-spaces
		 */
		"no-regex-spaces": "error",

		/**
		 * Запрещает присваивание в return-выражениях
		 * Disallows assignment in return statements
		 * Ссылка: https://eslint.org/docs/latest/rules/no-return-assign
		 */
		"no-return-assign": "error",

		/**
		 * Запрещает использование javascript: в URL
		 * Disallows javascript: URLs
		 * Ссылка: https://eslint.org/docs/latest/rules/no-script-url
		 */
		"no-script-url": "error",

		/**
		 * Запрещает использование оператора запятая в выражениях
		 * Disallows comma operator in expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-sequences
		 */
		"no-sequences": "error",

		/**
		 * Запрещает переопределение зарезервированных имен
		 * Disallows shadowing of restricted names
		 * Ссылка: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
		 */
		"no-shadow-restricted-names": "error",

		/**
		 * Запрещает возбуждение литералов как исключений
		 * Disallows throwing literals as exceptions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-throw-literal
		 */
		"no-throw-literal": "error",

		/**
		 * Запрещает неиспользуемые выражения
		 * Disallows unused expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unused-expressions
		 */
		"no-unused-expressions": "error",

		/**
		 * Запрещает неиспользуемые метки
		 * Disallows unused labels
		 * Ссылка: https://eslint.org/docs/latest/rules/no-unused-labels
		 */
		"no-unused-labels": "error",

		/**
		 * Запрещает бесполезные вызовы call/apply
		 * Disallows unnecessary call/apply usage
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-call
		 */
		"no-useless-call": "error",

		/**
		 * // TODO: Тестировать, возможно необходимо перевести в "error"
		 * Запрещает бесполезные блоки catch без обработки ошибки
		 * Disallows unnecessary catch clauses without error handling
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-catch
		 */
		"no-useless-catch": "warn",

		/**
		 * Запрещает бесполезные конструкторы
		 * Disallows unnecessary constructors
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-constructor
		 */
		"no-useless-constructor": "error",

		/**
		 * Запрещает бесполезные escape-последовательности
		 * Disallows unnecessary escape characters
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-escape
		 */
		"no-useless-escape": "error",

		/**
		 * Запрещает бесполезные переименования при деструктуризации
		 * Disallows useless renaming in destructuring
		 * Ссылка: https://eslint.org/docs/latest/rules/no-useless-rename
		 */
		"no-useless-rename": "error",

		/**
		 * Запрещает использование var в пользу let/const
		 * Disallows var in favor of let/const
		 * Ссылка: https://eslint.org/docs/latest/rules/no-var
		 */
		"no-var": "error",

		/**
		 * Запрещает использование оператора with
		 * Disallows with statements
		 * Ссылка: https://eslint.org/docs/latest/rules/no-with
		 */
		"no-with": "error",

		/**
		 * Требует использования именованных групп захвата в регулярных выражениях
		 * Requires using named capture groups in regular expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/prefer-named-capture-group
		 */
		"prefer-named-capture-group": "error",

		/**
		 * Требует использования метода Object.hasOwn() вместо Object.prototype.hasOwnProperty.call()
		 * Requires using Object.hasOwn() over Object.prototype.hasOwnProperty.call()
		 * Ссылка: https://eslint.org/docs/latest/rules/prefer-object-has-own
		 */
		"prefer-object-has-own": "error",

		/**
		 * Требует использования литералов регулярных выражений вместо конструктора RegExp
		 * Requires using regular expression literals instead of the RegExp constructor
		 * Ссылка: https://eslint.org/docs/latest/rules/prefer-regex-literals
		 */
		"prefer-regex-literals": "error",

		/**
		 * Требует использования rest-параметров вместо arguments
		 * Requires using rest parameters instead of arguments object
		 * Ссылка: https://eslint.org/docs/latest/rules/prefer-rest-params
		 */
		"prefer-rest-params": "error",

		/**
		 * Требует указания основания системы счисления при использовании parseInt()
		 * Requires the radix parameter when using parseInt()
		 * Ссылка: https://eslint.org/docs/latest/rules/radix
		 */
		radix: "error",

		/**
		 * Требует наличия await в асинхронных функциях
		 * Requires await in async functions
		 * Ссылка: https://eslint.org/docs/latest/rules/require-await
		 */
		"require-await": "error",

		/**
		 * Требует использования флага u в регулярных выражениях
		 * Requires the u flag in regular expressions
		 * Ссылка: https://eslint.org/docs/latest/rules/require-unicode-regexp
		 */
		"require-unicode-regexp": "error",

		/**
		 * Требует наличия yield в функциях-генераторах
		 * Requires yield in generator functions
		 * Ссылка: https://eslint.org/docs/latest/rules/require-yield
		 */
		"require-yield": "error",

		/**
		 * Требует использования строгого режима ('use strict')
		 * Requires strict mode directives
		 * Ссылка: https://eslint.org/docs/latest/rules/strict
		 */
		strict: ["error", "global"],

		/**
		 * Требует описания при создании Symbol
		 * Requires description when creating Symbols
		 * Ссылка: https://eslint.org/docs/latest/rules/symbol-description
		 */
		"symbol-description": "error",
	},
};

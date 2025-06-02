import pluginReact from "eslint-plugin-react";
import pluginReactRefresh from "eslint-plugin-react-refresh";
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
		"react-refresh": pluginReactRefresh,
	},

	settings: {
		react: {
			version: "detect",
		},
	},

	rules: {
		...pluginReact.configs.recommended.rules,
		...pluginReactHooks.configs.recommended.rules,
		...pluginReactRefresh.configs.recommended.rules,

		/**
		 * Обеспечивает, чтобы React переменная использовалась в JSX
		 * Prevents React being incorrectly marked as unused
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		 */
		"react/jsx-uses-react": "error",

		/**
		 * Отключает требование иметь React в области видимости JSX (не нужно с React 17+)
		 * React must be in scope when using JSX (off for React 17+)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		 */
		"react/react-in-jsx-scope": "off",

		/**
		 * Требует, чтобы булевые пропсы начинались с 'is' или 'has'
		 * Enforces naming convention for boolean props
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
		 */
		"react/boolean-prop-naming": [
			"error",
			{
				rule: "^(is|has)[A-Z]",
				message:
					"Имена булевых пропов должны начинаться с 'is' или 'has'",
			},
		],

		/**
		 * Требует явно указывать type у <button>
		 * Prevents <button> from behaving unexpectedly without an explicit type
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
		 */
		"react/button-has-type": [
			"error",
			{
				button: true,
				submit: true,
				reset: true,
			},
		],

		/**
		 * Требует указания `onChange` или `readOnly` для контролируемых input с `checked`
		 * Prevents controlled <input type="checkbox" or "radio"> without `onChange` or `readOnly`
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
		 */
		"react/checked-requires-onchange-or-readonly": "error",

		/**
		 * Не используется в TypeScript-проектах — проверяет соответствие defaultProps и propTypes
		 * Disabled in TypeScript projects (uses propTypes, which TS replaces with static typing)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
		 */
		"react/default-props-match-prop-types": "off",

		/**
		 * Требует использовать деструктуризацию для пропсов и/или state в компонентах
		 * Enforces consistent use of destructuring assignment in React components
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		 */
		"react/destructuring-assignment": [
			"error",
			"always",
			{ ignoreClassFields: true },
		],

		/**
		 * Требует явно указывать displayName для React-компонентов
		 * Enforces that React components have a displayName for debugging
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
		 */
		"react/display-name": "warn",

		/**
		 * Запрещает использовать определённые пропы в компонентах React
		 * Forbids specified props on components to enforce code conventions or avoid bugs
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
		 */
		"react/forbid-component-props": [
			"error",
			{
				forbid: ["style", "className"], // пример — запрещаем использовать style и className
			},
		],

		/**
		 * Запрещает использование определённых пропов на DOM-элементах (например, <div>, <input>)
		 * Forbids specified props on DOM nodes to enforce code style or prevent errors
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
		 */
		"react/forbid-dom-props": [
			"warn",
			{
				forbid: ["style"], // пример — запрещаем inline-стили на DOM-элементах
			},
		],

		/**
		 * Требует, чтобы ref, переданный через React.forwardRef, использовался внутри компонента
		 * Ensures that the ref passed to a component via React.forwardRef is actually used
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
		 */
		"react/forward-ref-uses-ref": "error",

		/**
		 * Контролирует стиль объявления функциональных компонентов React
		 * Controls the style of defining React function components
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
		 */
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function", // для именованных компонентов — стрелочные функции
				unnamedComponents: "arrow-function", // для анонимных тоже стрелочные функции
			},
		],

		/**
		 * Требует симметричного именования переменных, полученных из useState
		 * Ensures destructuring of useState hook follows [value, setValue] naming convention
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react-hooks/blob/master/docs/rules/hook-use-state.md
		 */
		"react/hook-use-state": [
			"error",
			{
				allowDestructuredState: false, // false — требует строгого соответствия [value, setValue]
			},
		],

		/**
		 * Требует, чтобы у элементов <iframe> был атрибут sandbox для безопасности
		 * Enforces that <iframe> elements have a sandbox attribute for security reasons
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
		 */
		"react/iframe-missing-sandbox": "error",

		/**
		 * Контролирует, как писать булевые пропсы в JSX — с явным значением или без
		 * Enforces consistent usage of boolean attributes in JSX (explicit or shorthand)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		 */
		"react/jsx-boolean-value": [
			"error",
			"never", // "never" — запрещает писать `prop={true}`, оставляя просто `prop`
		],

		/**
		 * Требует или запрещает пробелы между дочерними JSX-элементами для улучшения читаемости
		 * Enforces or forbids spaces between JSX child elements for readability
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
		 */
		"react/jsx-child-element-spacing": [
			"warn",
			{
				allowMultiline: true, // разрешает пробелы и переносы строк между элементами
				before: true, // требует пробел перед дочерним элементом
				after: true, // требует пробел после дочернего элемента
			},
		],

		/**
		 * Контролирует расположение закрывающей скобки JSX-элементов
		 * Controls the location of the closing bracket for JSX elements
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		 */
		"react/jsx-closing-bracket-location": [
			"error",
			{
				selfClosing: "line-aligned", // для самозакрывающихся тегов — на той же линии, что и последний проп
				multiline: "line-aligned", // для многострочных — на отдельной линии, выровненной по открывающему тегу
			},
		],

		/**
		 * Контролирует расположение закрывающего тега JSX-элементов
		 * Enforces the location of the closing tag in multiline JSX elements
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
		 */
		"react/jsx-closing-tag-location": "error",

		/**
		 * Контролирует, когда в JSX использовать фигурные скобки для литеральных значений
		 * Enforces consistent usage of curly braces in JSX props and children
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
		 */
		"react/jsx-curly-brace-presence": [
			"error",
			{
				props: "never", // запрещает использовать {} для строковых литералов в пропсах
				children: "never", // запрещает использовать {} для строковых литералов в дочерних элементах
			},
		],

		/**
		 * Контролирует переносы строк внутри фигурных скобок в JSX
		 * Enforces consistent line breaks inside JSX curly braces
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
		 */
		"react/jsx-curly-newline": [
			"error",
			{
				multiline: "require", // требует переносы строк внутри {} если содержимое многострочное
				singleline: "forbid", // запрещает переносы строк внутри {} если содержимое в одну строку
			},
		],

		/**
		 * Контролирует пробелы внутри фигурных скобок в JSX (например, { value })
		 * Enforces consistent spacing inside JSX curly braces
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		 */
		"react/jsx-curly-spacing": [
			"error",
			"never", // запрещает пробелы внутри {}, например {value}, не { value }
			{
				allowMultiline: true, // разрешает переносы строк внутри {}, если содержимое многострочное
			},
		],

		/**
		 * Контролирует пробелы вокруг знака равенства (=) в JSX пропсах
		 * Enforces consistent spacing around equal signs in JSX attributes
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		 */
		"react/jsx-equals-spacing": [
			"error",
			"never", // запрещает пробелы вокруг знака '=': prop="value", не prop = "value"
		],

		/**
		 * Ограничивает использование JSX только в файлах с определёнными расширениями
		 * Restricts file extensions that may contain JSX syntax
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		 */
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".tsx", ".jsx"], // разрешённые расширения файлов с JSX
			},
		],

		/**
		 * Контролирует расположение первого пропа в JSX — на той же строке или на новой
		 * Enforces the position of the first prop in JSX (same line or new line)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		 */
		"react/jsx-first-prop-new-line": [
			"error",
			"multiline", // если элемент многострочный, первый проп должен быть на новой строке
		],

		/**
		 * Требует использовать сокращённый синтаксис фрагментов <>...</>,
		 * но разрешает полную форму <React.Fragment>...</React.Fragment> с пропсами (например, key)
		 * Enforces shorthand <>...</> for fragments, but allows <React.Fragment> with props
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
		 */
		"react/jsx-fragments": ["error", "syntax"],

		/**
		 * Требует, чтобы имена обработчиков событий в JSX соответствовали определённым шаблонам
		 * Enforces event handler naming conventions in JSX props
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		 */
		"react/jsx-handler-names": [
			"error",
			{
				eventHandlerPrefix: "handle", // префикс для функций-обработчиков, например handleClick
				eventHandlerPropPrefix: "on", // префикс для пропов с обработчиками, например onClick
				checkLocalVariables: true, // проверять локальные переменные с функциями-обработчиками
				checkInlineFunction: true, // проверять анонимные функции в пропсах
			},
		],

		/**
		 * Требует указывать уникальный проп `key` для элементов в списках и при использовании массива в JSX
		 * Enforces that elements in iterators and arrays have a unique `key` prop
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		 */
		"react/jsx-key": "error",

		/**
		 * Ограничивает максимальную глубину вложенности JSX-элементов в дереве
		 * Limits the maximum depth of JSX elements to improve readability and maintainability
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
		 */
		"react/jsx-max-depth": ["warn", { max: 4 }],

		/**
		 * Требует соблюдать перенос строки вокруг JSX-элементов для улучшения читаемости
		 * Enforces newlines around JSX elements to improve code readability
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
		 */
		"react/jsx-newline": [
			"error",
			{
				prevent: false, // false — требует переносов между JSX элементами, true — запрещает лишние переносы
			},
		],

		/**
		 * Запрещает использование inline-функций и bind в JSX пропсах для оптимизации производительности
		 * Disallows usage of bind() or inline functions in JSX props to avoid unnecessary re-renders
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		 */
		"react/jsx-no-bind": [
			"warn",
			{
				ignoreRefs: true, // игнорировать ref колбэки
				allowArrowFunctions: false, // запрещать стрелочные функции в пропсах
				allowBind: false, // запрещать .bind() в пропсах
				ignoreDOMComponents: true, // игнорировать DOM-элементы (<div>, <button> и т.п.)
			},
		],

		/**
		 * Запрещает использовать текстовые комментарии как узлы в JSX, чтобы избежать неожиданных рендеров
		 * Disallows comments as text nodes in JSX to prevent rendering issues
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
		 */
		"react/jsx-no-comment-textnodes": "error",

		/**
		 * Запрещает создавать новые объекты или функции напрямую в значениях для React Context.Provider
		 * Prevents creating new objects or functions inline as values for React Context.Provider
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
		 */
		"react/jsx-no-constructed-context-values": "error",

		/**
		 * Запрещает дублирование пропсов в одном JSX-элементе
		 * Disallows duplicate props in JSX to avoid unexpected behavior
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		 */
		"react/jsx-no-duplicate-props": "error",

		/**
		 * Предотвращает утечку потенциально «небезопасных» значений в JSX (например, ошибки или промисы)
		 * Prevents rendering potentially unsafe values (like Promises or errors) into JSX
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
		 */
		"react/jsx-no-leaked-render": [
			"warn",
			{
				validStrategies: ["ternary", "logical", "coerce"], // допустимые способы безопасного рендера
			},
		],

		/**
		 * Запрещает использовать `javascript:` в href внутри JSX (например, <a href="javascript:void(0)">)
		 * Disallows `javascript:` URLs in JSX to prevent XSS and bad practices
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
		 */
		"react/jsx-no-script-url": "error",

		/**
		 * Предотвращает использование target="_blank" без rel="noopener noreferrer"
		 * Prevents usage of target="_blank" without rel="noopener noreferrer" for security reasons
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
		 */
		"react/jsx-no-target-blank": [
			"error",
			{ enforceDynamicLinks: "always" }, // проверяет и статические, и динамические ссылки
		],

		/**
		 * Запрещает использование JSX-компонентов, не объявленных в области видимости
		 * Disallows undeclared variables in JSX (e.g., забытые импорты компонентов)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		 */
		"react/jsx-no-undef": "error",

		/**
		 * Запрещает бесполезные React-фрагменты — <></> или <Fragment></Fragment>, если их можно опустить
		 * Disallow unnecessary fragments when a single child or no wrapper is needed
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
		 */
		"react/jsx-no-useless-fragment": "warn",

		/**
		 * Требует использовать PascalCase для имен JSX-компонентов
		 * Enforce PascalCase for user-defined JSX components for consistency and clarity
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		 */
		"react/jsx-pascal-case": "error",

		/**
		 * Запрещает множественные spread-пропсы в одном JSX-элементе
		 * Disallow multiple props spreading in a single JSX tag to reduce ambiguity
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
		 */
		"react/jsx-props-no-spread-multi": "error",

		/**
		 * Требует сортировки JSX-пропов для единообразия и читаемости
		 * Enforce consistent sorting of props in JSX elements
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		 */
		"react/jsx-sort-props": [
			"warn",
			{
				callbacksLast: true, // коллбэки (onClick и т.п.) идут последними
				shorthandFirst: false, // не обязательно короткие пропсы (например, `disabled`) ставить первыми
				shorthandLast: true, // короткие пропсы идут в конце
				ignoreCase: true, // сортировка без учёта регистра
				noSortAlphabetically: false, // включить алфавитную сортировку
				reservedFirst: true, // зарезервированные пропсы (key, ref) идут первыми
			},
		],

		/**
		 * Требует соблюдения отступов внутри JSX-тегов (вокруг угловых скобок)
		 * Enforce spacing around JSX tags for better readability
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
		 */
		"react/jsx-tag-spacing": [
			"error",
			{
				closingSlash: "never", // пробел перед закрывающим слэшем: <br /> ❌ <br/> ✅
				beforeSelfClosing: "always", // пробел перед />: <Foo/> ❌ <Foo /> ✅
				afterOpening: "never", // пробел после <: < Foo> ❌ <Foo> ✅
				beforeClosing: "never", // пробел перед >: <Foo > ❌ <Foo> ✅
			},
		],

		/**
		 * Требует оборачивать многострочные JSX-выражения в круглые скобки
		 * Enforce wrapping of multiline JSX expressions in parentheses for better readability
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
		 */
		"react/jsx-wrap-multilines": [
			"error",
			{
				declaration: "parens-new-line", // при объявлении переменной
				assignment: "parens-new-line", // при присваивании
				return: "parens-new-line", // при возврате из функции
				arrow: "parens-new-line", // в стрелочных функциях
				condition: "parens-new-line", // в тернарных операторах
				logical: "parens-new-line", // в логических выражениях
				prop: "ignore", // можно не оборачивать в пропсах
			},
		],

		/**
		 * Запрещает соседние JSX-элементы в строке без обёртки
		 * Prevents adjacent inline JSX elements which can break formatting
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
		 */
		"react/no-adjacent-inline-elements": "off",

		/**
		 * Запрещает использовать индекс массива в качестве ключа в списках
		 * Forbids using array index as key in JSX lists to avoid rendering issues
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		 */
		"react/no-array-index-key": "warn",

		/**
		 * Запрещает передавать `children` через пропсы напрямую (children проп должен задаваться как вложенный JSX)
		 * Disallow passing children as a prop – use JSX nesting instead
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
		 */
		"react/no-children-prop": "error",

		/**
		 * Запрещает использование dangerouslySetInnerHTML
		 * Disallow usage of dangerouslySetInnerHTML to prevent XSS vulnerabilities
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		 */
		"react/no-danger": "warn",

		/**
		 * Запрещает одновременное использование dangerouslySetInnerHTML и children
		 * Prevents using both `children` and `dangerouslySetInnerHTML` on the same element
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		 */
		"react/no-danger-with-children": "error",

		/**
		 * Запрещает использование устаревших (deprecated) методов и API React
		 * Disallow usage of deprecated React APIs
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		 */
		"react/no-deprecated": "warn",

		/**
		 * Запрещает использование невалидных HTML-атрибутов в JSX
		 * Disallow invalid HTML attributes in JSX
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
		 */
		"react/no-invalid-html-attribute": "error",

		/**
		 * Запрещает JSX-синтаксис с пространствами имён (NS) вроде <Svg.Use />
		 * Disallow namespace components in JSX
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
		 */
		"react/no-namespace": "error",

		/**
		 * Запрещает использовать возвращаемое значение ReactDOM.render()
		 * Disallow using the return value of ReactDOM.render
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		 */
		"react/no-render-return-value": "error",

		/**
		 * Запрещает использование `this` в функциональных компонентах
		 * Disallow usage of `this` in stateless functional components
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
		 */
		"react/no-this-in-sfc": "error",

		/**
		 * Запрещает неэкранированные символы в JSX, такие как `'`, `>`, `"`
		 * Disallow unescaped HTML entities in JSX (например, &, <, >, ')
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		 */
		"react/no-unescaped-entities": "error",

		/**
		 * Запрещает использование несуществующих/ошибочных HTML-атрибутов в JSX
		 * Disallow unknown DOM properties (например, `class` вместо `className`)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		 */
		"react/no-unknown-property": "error",

		/**
		 * Запрещает создание компонентов внутри JSX (вложенных компонентов) — например, внутри `.map()`
		 * Disallow creating unstable components inside components (например, в render или внутри JSX)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
		 */
		"react/no-unstable-nested-components": "warn",

		/**
		 * Требует передавать `style` как объект, а не литерал внутри JSX
		 * Enforce passing `style` props as objects, не inline литералами
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
		 */
		"react/style-prop-object": "error",

		/**
		 * Запрещает передавать детей в void-элементы (например, <img>, <br>, <input>)
		 * Disallow children prop on void DOM elements
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		 */
		"react/void-dom-elements-no-children": "error",

		/**
		 * Требует правильного использования хуков React
		 * Enforces the Rules of Hooks
		 * Ссылка: https://react.dev/learn/rules-of-hooks
		 */
		"react-hooks/rules-of-hooks": "error",

		/**
		 * Проверяет список зависимостей в useEffect/useCallback/useMemo
		 * Verifies the list of dependencies for Hooks
		 * Ссылка: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
		 */
		"react-hooks/exhaustive-deps": "warn",

		/**
		 * Предупреждает, если экспортируются не только компоненты (нужно для React Fast Refresh)
		 * Ensures only components are exported for React Fast Refresh
		 * Ссылка: https://github.com/react-refresh/eslint-plugin-react-refresh
		 */
		"react-refresh/only-export-components": ["warn"],
	},
};

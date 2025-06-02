import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export const jsxA11y = {
	name: "@dubium/eslint-config/jsx-a11y",
	files: ["**/*.{js,jsx,ts,tsx}"],

	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},

	plugins: {
		"jsx-a11y": pluginJsxA11y,
	},

	settings: {
		react: {
			version: "detect",
		},
	},

	rules: {
		...pluginJsxA11y.configs.recommended.rules,

		/**
		 * Требует наличие доступного текста (`alt`, `aria-label`, `title`) для медиа-элементов
		 * Enforces that <img>, <object>, <area>, <input type="image"> have alternative text
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
		 */
		"jsx-a11y/alt-text": [
			"error",
			{
				elements: ["img", "object", "area", 'input[type="image"]'],
				img: ["Image"], // можно указать кастомные компоненты, например, из UI-библиотеки
			},
		],

		/**
		 * Запрещает неинформативный текст внутри <a> (например, "click here", "подробнее")
		 * Prevents ambiguous link text that provides no context (e.g., "click here", "read more")
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md
		 */
		"jsx-a11y/anchor-ambiguous-text": [
			"warn",
			[
				"click here",
				"here",
				"link",
				"a link",
				"learn more",
				"подробнее",
				"узнать больше",
				"смотреть",
				"читать",
			],
		],

		/**
		 * Требует, чтобы <a> имел видимый/доступный контент (текст, иконку, aria-label и т.п.)
		 * Enforces that <a> tags have content for screen readers and users
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
		 */
		"jsx-a11y/anchor-has-content": "error",

		/**
		 * Требует валидные и доступные <a> — с корректным href или role="button", если это не ссылка
		 * Ensures <a> elements are valid, usable, and accessible
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
		 */
		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				components: ["Link"], // кастомные компоненты, считающиеся ссылками
				specialLink: ["href", "to"], // пропсы, аналогичные href (например, для React Router)
				aspects: ["noHref", "invalidHref", "preferButton"],
			},
		],

		/**
		 * Требует, чтобы элементы с aria-activedescendant были фокусируемыми (то есть имели tabIndex)
		 * Enforce tabIndex on elements that use aria-activedescendant
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
		 */
		"jsx-a11y/aria-activedescendant-has-tabindex": "error",

		/**
		 * Запрещает опечатки и несуществующие ARIA-атрибуты
		 * Enforce correct spelling of ARIA properties
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
		 */
		"jsx-a11y/aria-props": "error",

		/**
		 * Проверяет, что ARIA-атрибуты имеют корректные типы значений
		 * Enforce correct value types for ARIA properties (boolean, string, token list и т.д.)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
		 */
		"jsx-a11y/aria-proptypes": "error",

		/**
		 * Проверяет корректность значений атрибута role (по ARIA-спецификации)
		 * Enforce valid values for the `role` attribute
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
		 */
		"jsx-a11y/aria-role": [
			"error",
			{ ignoreNonDOM: false }, // проверять даже нестандартные/кастомные элементы
		],

		/**
		 * Запрещает использовать ARIA-атрибуты на элементах, которые их не поддерживают
		 * Disallow ARIA props on elements that do not support them (по спецификации WAI-ARIA)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
		 */
		"jsx-a11y/aria-unsupported-elements": "error",

		/**
		 * Требует использовать валидные значения атрибута autocomplete на <input> и <form>
		 * Enforce valid values for the `autocomplete` attribute
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
		 */
		"jsx-a11y/autocomplete-valid": [
			"warn",
			{
				inputComponents: ["Input", "FormField"], // сюда можно добавить кастомные input-компоненты (например, <Input />)
			},
		],

		/**
		 * Требует, чтобы элементы с onClick обрабатывали также клавиатурные события (onKeyDown, onKeyUp, onKeyPress)
		 * Enforce keyboard event handlers on elements with onClick to support keyboard users
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
		 */
		"jsx-a11y/click-events-have-key-events": "warn",

		/**
		 * Требует наличие текстовой метки (label) у интерактивных элементов управления
		 * Enforce that interactive controls have an associated label for screen reader users
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
		 */
		"jsx-a11y/control-has-associated-label": "error",

		/**
		 * Требует наличие контента внутри заголовков (<h1>–<h6>) — текст, aria-label и т.п.
		 * Enforce that heading elements (<h1>–<h6>) have accessible content
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
		 */
		"jsx-a11y/heading-has-content": "error",

		/**
		 * Требует наличие атрибута `lang` у тега <html> для корректной работы screen reader'ов
		 * Enforce that <html> element has a valid `lang` attribute
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
		 */
		"jsx-a11y/html-has-lang": "error",

		/**
		 * Требует наличие атрибута `title` у <iframe> для описания его содержимого
		 * Enforce that <iframe> elements have a title attribute for screen reader users
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
		 */
		"jsx-a11y/iframe-has-title": "error",

		/**
		 * Запрещает дублировать слово "изображение" в alt у <img>
		 * Avoid redundant words like "image", "picture", "photo" in <img alt>
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
		 */
		"jsx-a11y/img-redundant-alt": "warn",

		/**
		 * Требует, чтобы интерактивные элементы (с onClick и role) были фокусируемыми (через tabIndex или нативную поддержку)
		 * Enforce that interactive elements are focusable
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
		 */
		"jsx-a11y/interactive-supports-focus": "error",

		/**
		 * Требует, чтобы <label> был связан с элементом управления (input, select и т.п.)
		 * Enforce that <label> elements are associated with a control (via nesting or htmlFor)
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
		 */
		"jsx-a11y/label-has-associated-control": [
			"error",
			{
				controlComponents: [], // можно указать свои кастомные компоненты (например, <Input />)
				depth: 25, // насколько глубоко искать вложенные элементы
				labelAttributes: ["label"], // кастомные пропсы, которые играют роль label
				assert: "either", // способ связывания: "htmlFor", "nesting" или "either"
			},
		],

		/**
		 * Проверяет, что атрибут `lang` задан и имеет валидное значение по спецификации BCP 47
		 * Enforce that the `lang` attribute on <html> is present and valid
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
		 */
		"jsx-a11y/lang": "error",

		/**
		 * Требует наличие подписей (caption) у медиа-контента: <video> и <audio>
		 * Enforce that <audio> and <video> elements have captions for accessibility
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
		 */
		"jsx-a11y/media-has-caption": [
			"warn",
			{
				audio: [],
				video: [],
				track: ["track"], // какие компоненты считаются caption-треками
			},
		],

		/**
		 * Требует, чтобы элементы с обработчиками мыши (onClick, onMouseOver) также реагировали на клавиатуру
		 * Enforce that elements with mouse events are also accessible with keyboard events
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
		 */
		"jsx-a11y/mouse-events-have-key-events": "warn",

		/**
		 * Запрещает использование атрибута accessKey, который задаёт клавишу быстрого доступа.
		 * Использование accessKey не рекомендуется из-за плохой поддержки и конфликтов с экранными читалками и системными шорткатами.
		 * Disallow the use of the accessKey attribute because it can cause accessibility issues and inconsistent behavior across browsers and assistive technologies.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
		 */
		"jsx-a11y/no-access-key": "warn",

		/**
		 * Запрещает использовать aria-hidden="true" на элементах, которые могут получать фокус (focusable),
		 * так как это скрывает элемент от ассистивных технологий, но оставляет его доступным для клавиатуры,
		 * что создаёт несогласованное поведение и ухудшает доступность.
		 * Disallow aria-hidden="true" on focusable elements because it hides them from assistive technologies
		 * while keeping them keyboard-focusable, causing confusing and inaccessible UX.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md
		 */
		"jsx-a11y/no-aria-hidden-on-focusable": "warn",

		/**
		 * Предупреждает об использовании атрибута autoFocus, так как автоматический фокус может сбивать с толку пользователей,
		 * особенно тех, кто использует ассистивные технологии.
		 * Однако в случаях, когда элемент появляется динамически (например, в модальном окне),
		 * установка фокуса оправдана, но рекомендуется делать это программно через JavaScript, а не через autoFocus.
		 * Disallow the use of the autoFocus attribute because it can be disruptive,
		 * especially for assistive technology users.
		 * In dynamic UIs like modals, managing focus programmatically is preferred.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
		 */
		"jsx-a11y/no-autofocus": "warn",

		/**
		 * Запрещает использовать элементы, которые могут отвлекать пользователей (например, <marquee> и <blink>),
		 * так как они создают визуальные или аудиальные эффекты, затрудняющие восприятие и негативно влияющие на доступность.
		 * Disallow distracting elements such as <marquee> and <blink> because they cause distracting
		 * visual or auditory effects that can impair user experience and accessibility.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
		 */
		"jsx-a11y/no-distracting-elements": "warn",

		/**
		 * Запрещает присваивать интерактивным элементам (например, <button>, <a>, <input>) неинтерактивные роли (например, role="presentation" или role="none").
		 * Это нарушает ожидания пользователей и ассистивных технологий, приводя к проблемам с доступностью.
		 * Disallow assigning non-interactive ARIA roles (like "presentation" or "none") to interactive elements,
		 * because it breaks accessibility and user expectations.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
		 */
		"jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",

		/**
		 * Запрещает добавлять обработчики интерактивных событий (onClick, onKeyDown, onKeyUp, onKeyPress)
		 * на неинтерактивные HTML-элементы (например, <div>, <span>) без явного указания роли и поддержки клавиатуры.
		 * Это нужно для того, чтобы элементы оставались доступными и ожидаемо взаимодействовали с пользователями.
		 * Disallow mouse or keyboard event handlers on non-interactive elements unless
		 * they have a role that supports interaction and keyboard event handlers for accessibility.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
		 */
		"jsx-a11y/no-noninteractive-element-interactions": "warn",

		/**
		 * Запрещает назначать неинтерактивным элементам (например, <div>, <span>) интерактивные роли (например, role="button", role="link").
		 * Это может вводить в заблуждение пользователей ассистивных технологий и создавать проблемы с доступностью,
		 * если элемент не ведет себя как интерактивный.
		 * Disallow assigning interactive ARIA roles (like "button", "link") to non-interactive HTML elements
		 * unless the element is made fully accessible (focusable, keyboard handlers, etc.).
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
		 */
		"jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",

		/**
		 * Запрещает добавлять атрибут tabindex со значением, позволяющим фокусироваться (tabindex="0" или положительные числа),
		 * на неинтерактивные элементы (например, <div>, <span>) без дополнительного контекста (роли и обработки событий),
		 * так как это нарушает доступность и может сбивать с толку пользователей.
		 * Disallow tabindex="0" or positive values on non-interactive elements
		 * without appropriate role and keyboard event handlers.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
		 */
		"jsx-a11y/no-noninteractive-tabindex": "warn",

		/**
		 * Запрещает назначать элементам ARIA-роль, которая уже подразумевается самим HTML-тегом.
		 * Назначение избыточной роли не улучшает доступность, а только усложняет код и может запутать ассистивные технологии.
		 * Disallow redundant roles that are implicit in the HTML element itself.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
		 */
		"jsx-a11y/no-redundant-roles": "warn",

		/**
		 * Запрещает добавлять обработчики интерактивных событий (onClick, onKeyDown и т.п.)
		 * на статические (неинтерактивные) элементы, такие как <div> и <span>,
		 * без соответствующих атрибутов доступности (role, tabIndex и обработка клавиатуры).
		 * Это помогает обеспечить, что элементы, вызывающие взаимодействие,
		 * доступны для пользователей клавиатуры и ассистивных технологий.
		 * Disallow mouse or keyboard event handlers on non-interactive elements
		 * without proper role and keyboard event handlers for accessibility.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
		 */
		"jsx-a11y/no-static-element-interactions": "warn",

		/**
		 * Рекомендует использовать семантические HTML-теги вместо ненужного назначения ARIA-ролей,
		 * так как встроенная семантика тегов лучше поддерживается ассистивными технологиями.
		 * Prefer using native HTML elements over assigning ARIA roles manually when possible.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md
		 */
		"jsx-a11y/prefer-tag-over-role": "warn",

		/**
		 * Требует, чтобы элементы с определёнными ARIA-ролями содержали все обязательные ARIA-свойства,
		 * необходимые для корректного описания роли.
		 * Disallow roles that require certain ARIA properties unless those properties are provided.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
		 */
		"jsx-a11y/role-has-required-aria-props": "warn",

		/**
		 * Требует, чтобы элементы с ARIA-атрибутами использовали только те свойства aria-*, которые поддерживаются их ролью.
		 * Использование неподдерживаемых aria-свойств может вызвать путаницу у ассистивных технологий.
		 * Require that elements only use ARIA properties supported by their role.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
		 */
		"jsx-a11y/role-supports-aria-props": "warn",

		/**
		 * Требует использовать атрибут scope в элементах <th> таблиц для указания области заголовков,
		 * что помогает ассистивным технологиям правильно интерпретировать таблицы.
		 * Require that <th> elements have a valid scope attribute (e.g., "col", "row", "colgroup", "rowgroup").
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
		 */
		"jsx-a11y/scope": "warn",

		/**
		 * Запрещает использовать положительные значения tabindex (например, tabindex="1", "2" и т.д.),
		 * так как они создают сложный и непредсказуемый порядок фокусировки для пользователей клавиатуры.
		 * Рекомендуется использовать tabindex="0" для включения элемента в естественный порядок табуляции.
		 * Disallow positive tabindex values to avoid confusing keyboard navigation order.
		 * Ссылка: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
		 */
		"jsx-a11y/tabindex-no-positive": "warn",
	},
};

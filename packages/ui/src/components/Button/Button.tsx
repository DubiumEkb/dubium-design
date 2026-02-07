import {
	memo,
	useCallback,
	type ButtonHTMLAttributes,
	type JSX,
	type ReactNode,
} from "react";
import style from "./Button.module.scss";

/**
 * Пропсы компонента `Button`.
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Дополнительный CSS-класс для корневого элемента кнопки.
	 *
	 * @example
	 * ```tsx
	 * <Button className="my-custom-class">Click me</Button>
	 * ```
	 */
	className?: string;

	/**
	 * Контент, отображаемый внутри кнопки.
	 *
	 * @example
	 * ```tsx
	 * <Button>Click me</Button>
	 * ```
	 */
	children: ReactNode;

	/**
	 * Останавливать ли всплытие события `click`.
	 *
	 * @defaultValue false
	 *
	 * @example
	 * ```tsx
	 * <Button stopPropagation onClick={() => console.log("Clicked")}>
	 *   Click me (no propagation)
	 * </Button>
	 * ```
	 */
	stopPropagation?: boolean;
}

/**
 * Универсальный компонент кнопки с поддержкой всех стандартных HTML-атрибутов.
 *
 * Компонент `Button` используется для выполнения действий при клике
 * и поддерживает все стандартные свойства HTML-кнопок.
 *
 * **Примеры использования:**
 *
 * — Простое использование
 * `<Button onClick={() => console.log("Clicked")}>Click me</Button>`
 *
 * — С остановкой всплытия
 * `<Button stopPropagation onClick={() => console.log("Clicked")}>
 *   Click me (no propagation)
 * </Button>`
 *
 * — Отправка формы
 * `<Button type="submit">Submit Form</Button>`
 *
 * **Основные пропсы:**
 * - `className` — дополнительный CSS-класс.
 * - `children` — содержимое кнопки.
 * - `type` — тип кнопки (`"button" | "submit" | "reset"`). По умолчанию `"button"`.
 * - `role` — ARIA-роль. По умолчанию `"button"`.
 * - `disabled` — отключает кнопку.
 * - `stopPropagation` — останавливает всплытие клика.
 * - `onClick` — обработчик события клика.
 */

export const Button = memo(
	({
		className,
		children,
		type = "button",
		onClick,
		stopPropagation = false,
		...props
	}: ButtonProps): JSX.Element => {
		const handleClick = useCallback(
			(event: React.MouseEvent<HTMLButtonElement>) => {
				if (stopPropagation) {
					event.stopPropagation();
				}

				if (onClick) {
					onClick(event);
				}
			},
			[onClick, stopPropagation],
		);

		return (
			<button
				className={`${style.button} ${className}`}
				type={type}
				onClick={handleClick}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

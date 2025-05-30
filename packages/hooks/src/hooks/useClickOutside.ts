import { useCallback, useEffect, type RefObject } from "react";
import { useEventListener } from "./useEventListener";

/**
 * Хук `useClickOutside` вызывает переданный колбэк, когда пользователь кликает или касается вне указанного DOM-элемента.
 *
 * @param ref - Ссылка на DOM-элемент, для которого нужно отлавливать внешние клики.
 * @param callback - Функция, вызываемая при клике или касании вне указанного элемента.
 * @param enabled - Условие активации обработчиков. По умолчанию `true`.
 *
 * @example
 * ```tsx
 * const ref = useRef(null);
 * useClickOutside(ref, () => setOpen(false));
 *
 * return <div ref={ref}>Контент</div>;
 * ```
 */
export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	callback: (event: MouseEvent | TouchEvent) => void,
	enabled: boolean = true
): void => {
	const handleClickOutside = useCallback(
		(event: Event) => {
			const el = ref.current;
			if (!el || el.contains(event.target as Node)) {
				return;
			}
			callback(event as MouseEvent | TouchEvent);
		},
		[ref, callback]
	);

	const [bindMouseDown, unbindMouseDown] = useEventListener({
		type: "mousedown",
		target: document,
		listener: handleClickOutside,
		when: enabled,
	});

	const [bindTouchStart, unbindTouchStart] = useEventListener({
		type: "touchstart",
		target: document,
		listener: handleClickOutside,
		when: enabled,
	});

	useEffect(() => {
		if (!enabled) return;

		bindMouseDown();
		bindTouchStart();

		return () => {
			unbindMouseDown();
			unbindTouchStart();
		};
	}, [
		bindMouseDown,
		bindTouchStart,
		unbindMouseDown,
		unbindTouchStart,
		enabled,
	]);
};

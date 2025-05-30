import { useState, useEffect, RefObject, useMemo } from "react";

/**
 * Хук для отслеживания видимости элемента на странице с использованием IntersectionObserver.
 *
 * @param ref - Референс на DOM-элемент, видимость которого нужно отслеживать.
 * @param options - Опции для IntersectionObserver (корневой элемент, порог срабатывания и т.п.).
 *                  По умолчанию пустой объект (используются стандартные настройки).
 *
 * @returns Булево значение `true`, если элемент видим, иначе `false`.
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
 *
 * return <div ref={ref}>{isVisible ? "Видим" : "Не видим"}</div>;
 * ```
 */
export function useIntersectionObserver(
	ref: RefObject<Element>,
	options: IntersectionObserverInit = {}
): boolean {
	const [isVisible, setIsVisible] = useState(false);

	// Стабилизируем опции: рекомендуем вызывать хук с мемоизированными опциями
	const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		if (!("IntersectionObserver" in window)) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible((prev) =>
				prev !== entry.isIntersecting ? entry.isIntersecting : prev
			);
		}, memoizedOptions);

		observer.observe(node);

		return () => {
			observer.disconnect();
		};
	}, [ref.current, memoizedOptions]);

	return isVisible;
}

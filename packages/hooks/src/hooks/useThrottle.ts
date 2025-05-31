import { useEffect, useRef, useState } from "react";
import { useUnmountEffect } from "./useUnmountEffect";

/**
 * Хук `useThrottle` ограничивает частоту обновления значения.
 * Возвращаемое значение будет обновляться не чаще указанного интервала.
 *
 * Подходит для оптимизации часто меняющихся данных — например, scroll, resize,
 * координаты курсора, и т.д.
 *
 * @template T Тип значения
 * @param value Значение, которое нужно троттлить
 * @param delay Интервал (в миллисекундах), с которым допускается обновление значения
 * @returns Троттлированное значение (обновляется не чаще, чем раз в `delay` мс)
 *
 * @example
 * const throttledScroll = useThrottle(scrollTop, 100);
 *
 * @example
 * const throttledInput = useThrottle(inputValue, 300);
 * useEffect(() => {
 *   fetchSuggestions(throttledInput);
 * }, [throttledInput]);
 */
export const useThrottle = <T>(value: T, delay: number = 200): T => {
	const [throttledValue, setThrottledValue] = useState<T>(value);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const nextValueRef = useRef<T | null>(null);
	const hasPendingValueRef = useRef(false);

	useEffect(() => {
		if (delay <= 0) {
			setThrottledValue(value);
			return;
		}

		if (!timeoutRef.current) {
			setThrottledValue(value);

			const handleTimeout = () => {
				if (
					hasPendingValueRef.current &&
					nextValueRef.current !== null
				) {
					setThrottledValue(nextValueRef.current);
					hasPendingValueRef.current = false;
					nextValueRef.current = null;
					timeoutRef.current = setTimeout(handleTimeout, delay);
				} else {
					timeoutRef.current = null;
				}
			};

			timeoutRef.current = setTimeout(handleTimeout, delay);
		} else {
			nextValueRef.current = value;
			hasPendingValueRef.current = true;
		}
	}, [value, delay]);

	useUnmountEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	});

	return throttledValue;
};

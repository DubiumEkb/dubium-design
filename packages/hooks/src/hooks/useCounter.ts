import { useCallback, useState } from "react";

interface UseCounterOptions {
	step?: number;
	min?: number;
	max?: number;
}

/**
 * Хук-счётчик с поддержкой шагов и границ (min/max).
 *
 * @param initialValue Начальное значение счётчика (по умолчанию 0)
 * @param options Настройки шага и границ счётчика
 * @returns Объект с текущим значением, функциями увеличения, уменьшения и сброса
 */
export const useCounter = (
	initialValue = 0,
	options: UseCounterOptions = { step: 1 }
) => {
	const step = options.step ?? 1;
	const [count, setCount] = useState(initialValue);

	const increment = useCallback(() => {
		setCount((prev) => {
			const next = prev + step;
			return options.max !== undefined && next > options.max
				? prev
				: next;
		});
	}, [step, options.max]);

	const decrement = useCallback(() => {
		setCount((prev) => {
			const next = prev - step;
			return options.min !== undefined && next < options.min
				? prev
				: next;
		});
	}, [step, options.min]);

	const reset = useCallback(() => {
		setCount(initialValue);
	}, [initialValue]);

	return { count, increment, decrement, reset };
};

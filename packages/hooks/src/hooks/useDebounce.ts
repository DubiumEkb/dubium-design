import { useState, useEffect } from "react";

/**
 * Хук для задержки обновления значения (debounce)
 *
 * @template T - Тип значения
 * @param {T} value - Значение, которое нужно дебаунсить
 * @param {number} delay - Задержка в миллисекундах
 * @returns {T} - Дебаунсированное значение (обновляется через указанную задержку после последнего изменения)
 *
 * @example
 * // Базовое использование
 * const [input, setInput] = useState('');
 * const debouncedInput = useDebounce(input, 300);
 *
 * @example
 * // Использование с поиском
 * useEffect(() => {
 *   if (debouncedInput) {
 *     fetchResults(debouncedInput);
 *   }
 * }, [debouncedInput]);
 *
 * @example
 * // Использование с useMemo для фильтрации
 * const filteredItems = useMemo(() => {
 *   return items.filter(item =>
 *     item.name.includes(debouncedInput)
 *   );
 * }, [items, debouncedInput]);
 */
export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Устанавливаем таймер для обновления значения
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Отменяем таймер при изменении значения или размонтировании
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]); // Эффект зависит от значения и задержки

	return debouncedValue;
};

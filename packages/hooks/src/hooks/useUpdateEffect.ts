import { useEffect, useRef, type DependencyList } from "react";

type EffectFn = () => void | (() => void);

/**
 * Хук, имитирующий поведение componentDidUpdate.
 *
 * Выполняет функцию `fn` только при обновлении зависимостей, пропуская первый рендер (монтаж).
 *
 * @param fn - Функция-эффект, вызываемая при изменении зависимостей (кроме первого рендера).
 *             Может возвращать функцию очистки.
 * @param deps - Массив зависимостей, при изменении которых будет вызван `fn`.
 *
 * @example
 * useUpdateEffect(() => {
 *   console.log('Это не сработает при первом рендере, но сработает при обновлениях deps');
 * }, [someValue]);
 */
export const useUpdateEffect = (fn: EffectFn, deps: DependencyList): void => {
	const mounted = useRef(false);

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}

		return fn();
	}, deps);
};

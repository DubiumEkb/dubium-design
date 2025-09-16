import { useCallback, useEffect, useRef } from "react";

/**
	* Хук для создания дебаунсированной функции
	* @param delay Задержка в миллисекундах
	* @returns Функция, которая принимает callback для выполнения с задержкой
	* 
	* @example
	* const debounce = useDebounceFn(300);
	* 
	* // Использование
	* debounce(() => {
	*   console.log('Выполняется после 300ms задержки');
	* });
*/
export const useDebounceFn = (delay: number): ((callback: () => void) => void) => {
	// eslint-disable-next-line no-undef
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Очистка при размонтировании
	useEffect(() => {
    	return () => {
      		if (timeoutRef.current) {
        		clearTimeout(timeoutRef.current);
      		}
    	};
  	}, []);

  	return useCallback((callback: () => void) => {
    	// Очищаем предыдущий таймер
    	if (timeoutRef.current) {
      		clearTimeout(timeoutRef.current);
    	}

    	// Устанавливаем новый таймер
    	timeoutRef.current = setTimeout(() => {
      		callback();
    	}, delay);
  	}, [delay]);
};

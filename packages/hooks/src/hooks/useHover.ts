import { useState, useRef } from "react";
import { useEventListener } from "./useEventListener";

/**
 * Хук для отслеживания наведения курсора на элемент
 *
 * @returns Кортеж: ref для привязки и булевое значение hovered
 */
export const useHover = <T extends HTMLElement = HTMLElement>() => {
	const ref = useRef<T | null>(null);
	const [hovered, setHovered] = useState(false);

	useEventListener({
		type: "mouseenter",
		target: ref,
		listener: () => setHovered(true),
	});

	useEventListener({
		type: "mouseleave",
		target: ref,
		listener: () => setHovered(false),
	});

	return [ref, hovered] as const;
};

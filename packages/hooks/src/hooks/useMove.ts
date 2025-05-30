import { useCallback, useRef, useState, type RefObject } from "react";
import { useEventListener } from "./useEventListener";

/**
 * Двумерная координата, используемая для отслеживания позиции указателя.
 *
 * @property x - Горизонтальная позиция (от 0 до 1). По умолчанию `0`.
 * @property y - Вертикальная позиция (от 0 до 1). По умолчанию `0`.
 */
export interface Position {
	x?: number;
	y?: number;
}

/**
 * Параметры для хука `useMove`.
 *
 * @property mode - Ограничение направления движения: "horizontal", "vertical" или "both" (по умолчанию "both").
 * @property initialValue - Начальное значение позиции. По умолчанию `{ x: 0, y: 0 }`.
 */
export interface UseMoveParams {
	mode?: "both" | "vertical" | "horizontal";
	initialValue?: Position;
}

/**
 * Возвращаемые значения хука `useMove`.
 *
 * @property ref - Реф для DOM-элемента, за которым будет вестись наблюдение.
 * @property x - Текущее нормализованное значение по оси X (от 0 до 1).
 * @property y - Текущее нормализованное значение по оси Y (от 0 до 1).
 * @property active - Активно ли в данный момент перемещение.
 * @property reset - Сброс значений позиции к `initialValue`.
 */
export interface UseMoveReturn extends Position {
	ref: RefObject<HTMLElement | null>;
	active: boolean;
	reset: () => void;
}

/**
 * Хук для отслеживания движения указателя (мыши или пальца) внутри элемента.
 * Подходит для реализации компонентов типа Slider, Drag-n-Drop, Pan и т.д.
 *
 * @param params - Объект с настройками хука.
 * @returns Объект с текущими координатами, флагом активности и методами управления.
 *
 * @example
 * const { ref, x, y, active } = useMove({ mode: "horizontal" });
 *
 * // Чтобы отобразить значение от 0 до 100:
 * const percent = Math.round((x ?? 0) * 100);
 */
export function useMove({
	mode = "both",
	initialValue = { x: 0, y: 0 },
}: UseMoveParams = {}): UseMoveReturn {
	const [positions, setPositions] = useState<Position>(initialValue);
	const [active, setActive] = useState(false);
	const ref = useRef<HTMLElement | null>(null);
	const isSliding = useRef(false);

	const clamp = (value: number, min: number, max: number) =>
		Math.min(Math.max(value, min), max);

	const clampPositions = ({ x, y }: Position) => ({
		clampedX: clamp(x ?? 0, 0, 1),
		clampedY: clamp(y ?? 0, 0, 1),
	});

	const updatePosition = useCallback(
		({ clampedX, clampedY }: { clampedX: number; clampedY: number }) => {
			setPositions((prev) => {
				if (mode === "vertical") return { x: prev.x, y: 1 - clampedY };
				if (mode === "horizontal") return { x: clampedX, y: prev.y };
				return { x: clampedX, y: clampedY };
			});
		},
		[mode]
	);

	const updatePointerPosition = useCallback(
		({ x, y }: Position) => {
			const el = ref.current;
			if (!el || !isSliding.current) return;

			const rect = el.getBoundingClientRect();
			const relativeX = (x! - rect.left) / rect.width;
			const relativeY = (y! - rect.top) / rect.height;

			updatePosition(clampPositions({ x: relativeX, y: relativeY }));
		},
		[updatePosition]
	);

	const stop = useCallback(() => {
		isSliding.current = false;
		setActive(false);
	}, []);

	const start = useCallback(() => {
		isSliding.current = true;
		setActive(true);
	}, []);

	const onMouseDown = useCallback(
		(event: MouseEvent) => {
			event.preventDefault();
			start();
			updatePointerPosition({ x: event.clientX, y: event.clientY });
		},
		[start, updatePointerPosition]
	);

	const onTouchStart = useCallback(
		(event: TouchEvent) => {
			if (event.cancelable) event.preventDefault();
			start();
			const touch = event.changedTouches[0];
			updatePointerPosition({ x: touch.clientX, y: touch.clientY });
		},
		[start, updatePointerPosition]
	);

	const onMouseMove = useCallback(
		(event: MouseEvent) => {
			updatePointerPosition({ x: event.clientX, y: event.clientY });
		},
		[updatePointerPosition]
	);

	const onTouchMove = useCallback(
		(event: TouchEvent) => {
			if (event.cancelable) event.preventDefault();
			const touch = event.changedTouches[0];
			updatePointerPosition({ x: touch.clientX, y: touch.clientY });
		},
		[updatePointerPosition]
	);

	const onWindowBlur = useCallback(() => {
		stop();
	}, [stop]);

	// Слушатели для движения и окончания перемещения
	useEventListener({
		type: "mousemove",
		listener: onMouseMove as EventListener,
		when: active,
	});
	useEventListener({
		type: "mouseup",
		listener: stop as EventListener,
		when: active,
	});
	useEventListener({
		type: "touchmove",
		listener: onTouchMove as EventListener,
		options: { passive: false },
		when: active,
	});
	useEventListener({
		type: "touchend",
		listener: stop as EventListener,
		when: active,
	});
	useEventListener({
		type: "blur",
		listener: onWindowBlur as EventListener,
		target: "window",
		when: active,
	});

	// Слушатели на элементе
	useEventListener({
		target: ref as RefObject<EventTarget>,
		type: "mousedown",
		listener: onMouseDown as EventListener,
	});
	useEventListener({
		target: ref as RefObject<EventTarget>,
		type: "touchstart",
		listener: onTouchStart as EventListener,
		options: { passive: false },
	});

	const reset = useCallback(() => {
		setPositions(initialValue);
	}, [initialValue]);

	return { ref, ...positions, active, reset };
}

import { useState } from "react";
import { useEventListener } from "./useEventListener";

/**
 * Упрощённый тип объекта NetworkInformation, представляющий свойства
 * и методы для отслеживания параметров сетевого соединения.
 * Наследует EventTarget, чтобы поддерживать подписку на события 'change'.
 */
type NetworkInformationLite = EventTarget & {
	/** Пропускная способность соединения в мегабитах в секунду */
	readonly downlink: number;
	/** Максимальная пропускная способность (если доступна) */
	readonly downlinkMax?: number;
	/** Эффективный тип соединения */
	readonly effectiveType: "slow-2g" | "2g" | "3g" | "4g";
	/** Оценка задержки в миллисекундах */
	readonly rtt: number;
	/** Режим экономии трафика */
	readonly saveData: boolean;
	/** Тип соединения */
	readonly type:
		| "bluetooth"
		| "cellular"
		| "ethernet"
		| "none"
		| "wifi"
		| "wimax"
		| "other"
		| "unknown";
};

/**
 * Интерфейс, описывающий текущее состояние сети и параметры соединения.
 */
export interface NetworkState {
	/** Флаг онлайн статуса браузера (true если есть сеть) */
	online: boolean;
	/** Текущая пропускная способность в мегабитах в секунду, либо null */
	downlink: number | null;
	/** Максимальная пропускная способность, либо null */
	downlinkMax: number | null;
	/** Эффективный тип соединения, либо null */
	effectiveType: "slow-2g" | "2g" | "3g" | "4g" | null;
	/** Оценка задержки в миллисекундах, либо null */
	rtt: number | null;
	/** Режим экономии трафика, либо null */
	saveData: boolean | null;
	/** Тип соединения, либо null */
	type:
		| "bluetooth"
		| "cellular"
		| "ethernet"
		| "none"
		| "wifi"
		| "wimax"
		| "other"
		| "unknown"
		| null;
}

/**
 * React-хук для получения актуального состояния сети и параметров соединения.
 *
 * Отслеживает статус онлайн/оффлайн, а также свойства объекта
 * navigator.connection (если он доступен).
 * Подписывается на события изменения статуса сети и параметров соединения.
 *
 * @returns Текущий объект состояния сети {@link NetworkState}
 *
 * @example
 * ```tsx
 * const network = useNetworkState();
 * console.log(network.online);
 * ```
 */
export const useNetworkState = (): NetworkState => {
	// Получаем объект соединения с проверкой наличия
	const connection =
		typeof navigator !== "undefined" && "connection" in navigator
			? (navigator.connection as NetworkInformationLite)
			: null;

	// Функция для получения текущих данных о сети
	const getNetworkInformation = (): NetworkState => ({
		online: typeof navigator !== "undefined" ? navigator.onLine : false,
		downlink: connection?.downlink ?? null,
		downlinkMax: connection?.downlinkMax ?? null,
		effectiveType: connection?.effectiveType ?? null,
		rtt: connection?.rtt ?? null,
		saveData: connection?.saveData ?? null,
		type: connection?.type ?? null,
	});

	const [networkState, setNetworkState] = useState<NetworkState>(
		getNetworkInformation
	);

	const updateNetworkState = () => {
		setNetworkState(getNetworkInformation());
	};

	// Подписываемся на события изменения статуса сети
	useEventListener({
		target: window,
		type: "online",
		listener: updateNetworkState,
	});

	useEventListener({
		target: window,
		type: "offline",
		listener: updateNetworkState,
	});

	// Подписываемся на изменения параметров соединения
	useEventListener({
		target: connection,
		type: "change",
		listener: updateNetworkState,
	});

	return networkState;
};

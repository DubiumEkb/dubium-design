import { useState } from "react";
import { useEventListener } from "./useEventListener";

/**
 * Тип состояния сети, отражающий свойства NetworkInformation и статус онлайн.
 */
export interface NetworkState {
	/** Онлайн статус браузера */
	online: boolean;
	/** Оценочная пропускная способность в мегабитах в секунду */
	downlink: number | null;
	/** Максимальная пропускная способность в мегабитах в секунду */
	downlinkMax: number | null;
	/** Эффективный тип соединения ('slow-2g', '2g', '3g', '4g') */
	effectiveType: "slow-2g" | "2g" | "3g" | "4g" | null;
	/** Оцененная задержка (round-trip time) в миллисекундах */
	rtt: number | null;
	/** Запрос режима экономии трафика */
	saveData: boolean | null;
	/** Тип соединения ('bluetooth', 'cellular', 'ethernet', 'none', 'wifi', 'wimax', 'other', 'unknown') */
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

interface Navigator {
	readonly connection?: NetworkState;
}

/**
 * Хук для получения текущего состояния сети и параметров соединения.
 *
 * @returns Объект состояния сети {@link NetworkState}
 */
export const useNetworkState = (): NetworkState => {
	const getNetworkInformation = (): NetworkState => {
		const connection = (
			navigator as Navigator & { connection?: NetworkState }
		).connection;

		return {
			online: typeof navigator !== "undefined" ? navigator.onLine : false,
			downlink: connection?.downlink ?? null,
			downlinkMax: connection?.downlinkMax ?? null,
			effectiveType: connection?.effectiveType ?? null,
			rtt: connection?.rtt ?? null,
			saveData: connection?.saveData ?? null,
			type: connection?.type ?? null,
		};
	};

	const [networkState, setNetworkState] = useState<NetworkState>(
		getNetworkInformation
	);

	const updateNetworkState = () => {
		setNetworkState(getNetworkInformation());
	};

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

	useEventListener({
		target: typeof navigator !== "undefined" ? navigator.connection : null,
		type: "change",
		listener: updateNetworkState,
	});

	return networkState;
};

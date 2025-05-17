import { useEffect, useState } from "react";

export const useInitData = () => {
	const [initData, setInitData] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const tg = window.Telegram?.WebApp;
		const tgData = tg?.initData;
		const cloudStorage = tg?.CloudStorage;

		const handleData = (data: string | null) => {
			setInitData(data);
			setIsLoading(false);
			setError(null);
		};

		const handleError = (error: string) => {
			console.error("CloudStorage error:", error);
			setError(error);
			setIsLoading(false);
			setInitData(null);
		};

		if (tgData) {
			if (cloudStorage) {
				cloudStorage.setItem("initData", tgData, (error) => {
					if (error) {
						console.warn("Failed to save initData:", error);
					}
				});
			}
			handleData(tgData);
			return;
		}

		if (cloudStorage) {
			cloudStorage.getItem("initData", (error, value) => {
				if (error) {
					handleError(error);
				} else {
					handleData(value);
				}
			});
		} else {
			handleData(null);
		}
	}, []);

	return { initData, isLoading, error };
};

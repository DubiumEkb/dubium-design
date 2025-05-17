import { useMemo, useState } from "react";

interface ICloudStorage {
	isLoading: boolean;
	error: string | null;
	setItem(key: string, value: string): Promise<boolean>;
	getItem(key: string): Promise<string | null>;
	getItems(keys: string[]): Promise<Record<string, string>>;
	removeItem(key: string): Promise<boolean>;
	removeItems(keys: string[]): Promise<boolean>;
	getKeys(): Promise<string[]>;
}

export const useCloudStorage = (): ICloudStorage => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const storage = useMemo(() => {
		if (!window.Telegram?.WebApp?.CloudStorage) {
			throw new Error("Telegram WebApp CloudStorage is not available");
		}
		return window.Telegram.WebApp.CloudStorage;
	}, []);

	const withLoadingAndErrorHandling = async <T>(
		operation: () => Promise<T>
	): Promise<T> => {
		setIsLoading(true);
		setError(null);

		try {
			return await operation();
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : String(err);
			setError(errorMessage);
			throw err;
		} finally {
			setIsLoading(false);
		}
	};

	const promisifySetItem = (key: string, value: string): Promise<boolean> => {
		return new Promise<boolean>((resolve, reject) => {
			storage.setItem(key, value, (error, success) => {
				if (error) {
					reject(error);
				} else {
					resolve(success ?? true);
				}
			});
		});
	};

	const promisifyGetItem = (key: string): Promise<string | null> => {
		return new Promise<string | null>((resolve, reject) => {
			storage.getItem(key, (error, value) => {
				if (error) {
					reject(error);
				} else {
					resolve(value ?? null);
				}
			});
		});
	};

	const promisifyGetItems = (
		keys: string[]
	): Promise<Record<string, string>> => {
		return new Promise<Record<string, string>>((resolve, reject) => {
			storage.getItems(keys, (error, values) => {
				if (error) {
					reject(error);
				} else {
					resolve(values ?? {});
				}
			});
		});
	};

	const promisifyRemoveItem = (key: string): Promise<boolean> => {
		return new Promise<boolean>((resolve, reject) => {
			storage.removeItem(key, (error, success) => {
				if (error) {
					reject(error);
				} else {
					resolve(success ?? true);
				}
			});
		});
	};

	const promisifyRemoveItems = (keys: string[]): Promise<boolean> => {
		return new Promise<boolean>((resolve, reject) => {
			storage.removeItems(keys, (error, success) => {
				if (error) {
					reject(error);
				} else {
					resolve(success ?? true);
				}
			});
		});
	};

	const promisifyGetKeys = (): Promise<string[]> => {
		return new Promise<string[]>((resolve, reject) => {
			storage.getKeys((error, keys) => {
				if (error) {
					reject(error);
				} else {
					resolve(keys ?? []);
				}
			});
		});
	};

	const setItem = (key: string, value: string): Promise<boolean> => {
		return withLoadingAndErrorHandling(() => promisifySetItem(key, value));
	};

	const getItem = (key: string): Promise<string | null> => {
		return withLoadingAndErrorHandling(() => promisifyGetItem(key));
	};

	const getItems = (keys: string[]): Promise<Record<string, string>> => {
		return withLoadingAndErrorHandling(() => promisifyGetItems(keys));
	};

	const removeItem = (key: string): Promise<boolean> => {
		return withLoadingAndErrorHandling(() => promisifyRemoveItem(key));
	};

	const removeItems = (keys: string[]): Promise<boolean> => {
		return withLoadingAndErrorHandling(() => promisifyRemoveItems(keys));
	};

	const getKeys = (): Promise<string[]> => {
		return withLoadingAndErrorHandling(() => promisifyGetKeys());
	};

	return {
		isLoading,
		error,
		setItem,
		getItem,
		getItems,
		removeItem,
		removeItems,
		getKeys,
	};
};

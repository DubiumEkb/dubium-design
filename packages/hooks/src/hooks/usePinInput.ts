import {
	FormEventHandler,
	InputHTMLAttributes,
	KeyboardEventHandler,
	Ref,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

/**
 * Массив значений для каждого поля ввода PIN.
 */
type PinInputValues = string[];

/**
 * Действия, доступные извне через `ref`.
 */
export interface PinInputActions {
	/**
	 * Установить фокус на поле.
	 * @param index Индекс поля (по умолчанию 0).
	 */
	focus: (index?: number) => void;

	/**
	 * Убрать фокус со всех полей.
	 */
	blur: () => void;
}

/**
 * Опции хука `usePinInput`.
 */
export interface UsePinInputProps {
	/**
	 * Значения, если используется контролируемый режим.
	 */
	values?: PinInputValues;

	/**
	 * Колбэк при любом изменении значений.
	 * @param values Текущие значения полей.
	 */
	onChange?: (values: PinInputValues) => void;

	/**
	 * Колбэк при полном заполнении всех полей.
	 * @param value Объединённое значение PIN-кода.
	 */
	onComplete?: (value: string) => void;

	/**
	 * Ссылка на методы управления фокусом.
	 */
	actionRef?: Ref<PinInputActions>;

	/**
	 * Автоматически установить фокус на первое поле.
	 */
	autoFocus?: boolean;

	/**
	 * Значения по умолчанию (если неконтролируемый режим).
	 * @example Array(4).fill("")
	 */
	defaultValues?: PinInputValues;

	/**
	 * Тип ввода: только цифры или буквенно-цифровой.
	 */
	type?: "numeric" | "alphanumeric";

	/**
	 * Использовать автозаполнение OTP (например, на iOS).
	 */
	otp?: boolean;

	/**
	 * Символ-плейсхолдер для пустых полей.
	 */
	placeholder?: string;

	/**
	 * Отключить все поля ввода.
	 */
	disabled?: boolean;

	/**
	 * Скрывать символы ввода (например, как пароль).
	 */
	mask?: boolean;

	/**
	 * Индикатор ошибки (влияет на поведение автофокуса).
	 */
	error?: boolean;
}

/**
 * Опции для метода очистки полей.
 */
export type PinInputClearOptions = {
	/**
	 * Установить фокус на первое поле после очистки.
	 */
	focus?: boolean;
};

/**
 * Свойства для отдельного поля PIN-ввода.
 */
export interface PinInputFieldProps
	extends InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Реф для установки ссылки на поле.
	 */
	ref: (ref: HTMLInputElement) => void;

	/**
	 * Значение поля.
	 */
	value: string;
}

/**
 * Хук для создания PIN/OTP ввода с фокусом, маской, валидацией и обратным вызовом при завершении ввода.
 *
 * @param props Настройки хука
 * @returns Объект с полями ввода, методом очистки и флагом фокуса
 */
export function usePinInput({
	values: valuesProp,
	onChange: onChangeProp,
	onComplete,
	actionRef,
	autoFocus = false,
	defaultValues = Array(6).fill(""),
	type = "numeric",
	otp = false,
	placeholder = "○",
	disabled = false,
	mask = false,
	error = false,
}: UsePinInputProps = {}) {
	const isControlled = valuesProp !== undefined;
	const [valuesState, setValuesState] = useState(defaultValues);
	const [focusedIndex, setFocusedIndex] = useState(-1);

	const values = (isControlled ? valuesProp : valuesState) as PinInputValues;
	const isTypeAlphanumeric = type === "alphanumeric";

	const fieldRefs = useRef<HTMLInputElement[]>(
		Array(values.length).fill(null)
	);

	const setFocus = useCallback((index = 0) => {
		fieldRefs.current[index]?.focus();
	}, []);

	const setBlur = useCallback(() => {
		fieldRefs.current[focusedIndex]?.blur();
	}, [focusedIndex]);

	useEffect(() => {
		if (autoFocus) setFocus();
	}, [autoFocus, setFocus]);

	useImperativeHandle(
		actionRef,
		() => ({
			focus: (index = 0) => {
				const emptyIndex = values.findIndex((v) => !v);
				setFocus(
					error ? (emptyIndex !== -1 ? emptyIndex : index) : index
				);
			},
			blur: setBlur,
		}),
		[setBlur, setFocus, values, error]
	);

	const setFieldRef = useCallback(
		(index: number) => (ref: HTMLInputElement) => {
			fieldRefs.current[index] = ref;
		},
		[]
	);

	const updateValues = useCallback(
		(values: PinInputValues) => {
			if (!isControlled) {
				setValuesState(values);
			}
			onChangeProp?.(values);
		},
		[isControlled, onChangeProp]
	);

	const onInput = useCallback(
		(index: number): FormEventHandler<HTMLInputElement> =>
			(event) => {
				let value = (event.target as HTMLInputElement).value.trim();

				const regex = isTypeAlphanumeric ? /^[a-z\d]*$/i : /^\d*$/;
				if (!regex.test(value)) return;

				if (isTypeAlphanumeric) value = value.toUpperCase();

				if (value.length === values.length) {
					updateValues(value.split(""));
					return;
				}

				if (value.length === 2) {
					const current = values[index];
					if (value.includes(current)) {
						value = value.replace(current, "");
					} else return;
				}

				if (value.length > 1) return;

				const newValues = [...values];
				newValues[index] = value;
				updateValues(newValues);

				if (value) {
					if (index < values.length - 1) {
						if (error) {
							const emptyIndex = newValues.findIndex((v) => !v);
							if (emptyIndex !== -1) setFocus(emptyIndex);
						} else {
							setFocus(index + 1);
						}
					}
				}
			},
		[isTypeAlphanumeric, values, updateValues, error, setFocus]
	);

	const onKeyDown = useCallback(
		(index: number): KeyboardEventHandler<HTMLInputElement> =>
			(event) => {
				if (event.key === "Backspace" && !values[index] && index > 0) {
					setFocus(index - 1);
				}
			},
		[values, setFocus]
	);

	const clear = useCallback(
		({ focus = false }: PinInputClearOptions = {}) => {
			updateValues(Array(values.length).fill(""));
			if (focus) setFocus();
			else setBlur();
		},
		[updateValues, values.length, setFocus, setBlur]
	);

	const onFocus = useCallback(
		(index: number) => () => {
			setFocusedIndex(index);
		},
		[]
	);

	const onBlur = useCallback(() => {
		setFocusedIndex(-1);
	}, []);

	const hasFocus = focusedIndex !== -1;

	const lastCompleteValue = useRef<string>("");

	useEffect(() => {
		const isFilled = values.every((v) => v !== "");
		const currentValue = values.join("");
		if (isFilled && currentValue !== lastCompleteValue.current) {
			lastCompleteValue.current = currentValue;
			const timeoutId = setTimeout(() => {
				onComplete?.(currentValue);
			}, 100);

			return () => clearTimeout(timeoutId);
		}
	}, [values, onComplete]);

	const fields: PinInputFieldProps[] = values.map((value, index) => ({
		ref: setFieldRef(index),
		value,
		disabled,
		autoComplete: otp ? "one-time-code" : "off",
		inputMode: isTypeAlphanumeric ? "text" : "numeric",
		type: mask ? "password" : "text",
		placeholder: hasFocus ? "" : placeholder,
		...(!disabled && {
			onFocus: onFocus(index),
			onBlur,
			onInput: onInput(index),
			onKeyDown: onKeyDown(index),
		}),
	}));

	return { fields, clear, isFocused: hasFocus };
}

/**
 * Возвращаемый результат `usePinInput`.
 */
export type UsePinInputReturn = ReturnType<typeof usePinInput>;

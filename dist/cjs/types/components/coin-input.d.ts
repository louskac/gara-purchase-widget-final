interface CoinInputProps {
    coin: string;
    placeholder?: string;
    readOnly?: boolean;
    className?: string;
    showIcon?: boolean;
    form?: any;
    error?: string;
    value?: string | number;
    onChange?: (e: any) => void;
    name?: string;
    disabled?: boolean;
    autoComplete?: string;
    id?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    [key: string]: any;
}
export declare const CoinInput: import("react").ForwardRefExoticComponent<Omit<CoinInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export {};

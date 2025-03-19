export { CoinInput } from './components/coin-input';
export { ConnectButton } from './components/connect-button';
export { CurrencySelect } from './components/currency-select';
export { default as TransactionStatusModal } from './components/transaction-status-modal';
export { WalletProviders } from './components/wallet-providers';
export { BuyGara } from './components/widget';
export { default as CountdownTimer } from './components/countdown-timer';
export { sendPayment } from './lib/send-payment';
export { getTokenBalance } from './lib/get-balance';
export { cn, formatAmount, getGaraEstimate, usdcToGara } from './utils/utils';
export * from './types';
export { useGaraStore } from './lib/store/provider';
export declare const createWidgetTheme: (config: {
    primaryColor: string;
    secondaryColor: string;
    [key: string]: any;
}) => {
    [key: string]: any;
    primaryColor: string;
    secondaryColor: string;
};

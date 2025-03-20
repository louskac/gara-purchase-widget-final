import { FC, ReactNode } from 'react';

type HexAddress = `0x${string}`;
/**
 *  Any type that can be used where a numeric value is needed.
 */
type Numeric = number | bigint;
/**
 *  Any type that can be used where a big number is needed.
 */
type BigNumberish = string | Numeric;
type SupportedChains = "Polygon" | "Ethereum" | "BNB Smart Chain";
type SupportedTokens = "USDC" | "USDT" | "ETH" | "POL" | "BNB";

// Component interfaces
interface BuyGaraProps {
  hideHeader?: boolean;
  className?: string;
  onTransactionSuccess?: ((data: TransactionData) => void) | null;
  [key: string]: any;
}

// Define the transaction data structure for better type safety
interface TransactionData {
  tokenAmount: string;
  tokenPrice: number;
  paymentToken: string;
  paymentAmount: string;
  timestamp: string;
  txHash: string;
}

// Component exports
declare const CoinInput: FC<any>;
declare const ConnectButton: FC<any>;
declare const CurrencySelect: FC<any>;
declare const TransactionStatusModal: FC<any>;
declare const WalletProviders: FC<any>;
declare const BuyGara: FC<BuyGaraProps>;
declare const CountdownTimer: FC<any>;

// Utility exports
declare function sendPayment(args: any): Promise<any>;
declare function getTokenBalance(args: any): Promise<any>;
declare function cn(...args: any[]): string;
declare function formatAmount(amount: number, decimals?: number): string;
declare function getGaraEstimate(amount: number): number;
declare function usdcToGara(amount: number): number;


// Store export
declare const useGaraStore: any;
declare const GaraStoreProvider: FC<{ children: ReactNode }>; // Added this line

// Theme utility
interface WidgetThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  [key: string]: any;
}

declare function createWidgetTheme(config: WidgetThemeConfig): WidgetThemeConfig;

export { BigNumberish, BuyGara, CoinInput, ConnectButton, CountdownTimer, CurrencySelect, GaraStoreProvider, HexAddress, Numeric, SupportedChains, SupportedTokens, TransactionStatusModal, WalletProviders, WidgetThemeConfig, cn, createWidgetTheme, formatAmount, getGaraEstimate, getTokenBalance, sendPayment, usdcToGara, useGaraStore };

import { FC, ReactNode } from 'react';

// Component interfaces
interface BuyGaraProps {
  hideHeader?: boolean;
  [key: string]: any;
}

// Component exports
export const CoinInput: FC<any>;
export const ConnectButton: FC<any>;
export const CurrencySelect: FC<any>;
export const TransactionStatusModal: FC<any>;
export const WalletProviders: FC<any>;
export const BuyGara: FC<BuyGaraProps>;
export const CountdownTimer: FC<any>;

// Utility exports
export function sendPayment(args: any): Promise<any>;
export function getTokenBalance(args: any): Promise<any>;
export function cn(...args: any[]): string;
export function formatAmount(amount: number, decimals?: number): string;
export function getGaraEstimate(amount: number): number;
export function usdcToGara(amount: number): number;

// Re-export types
export * from './types';

// Store export
export const useGaraStore: any;

// Theme utility
export interface WidgetThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  [key: string]: any;
}

export function createWidgetTheme(config: WidgetThemeConfig): WidgetThemeConfig;
import { type ClassValue } from "clsx";
import { type Chain } from "viem/chains";
import { HexAddress } from "../types";
export declare const getGaraEstimate: (round: number, token: string, amount: number, tokenValue?: number) => number;
export declare const usdcToGara: (usdc: number) => number;
export declare const getChainByName: (chain: string) => Chain;
export declare function validateTransactionHash(txHash: string): boolean;
export declare const ethereumRpcUrl: string;
export declare const polygonRpcUrl: string;
export declare const bscRpcUrl: string;
export declare const getRpcNode: (chain: string) => import("viem").HttpTransport<undefined, false>;
export declare function validateTransaction({ chain, txHash, from, to, amount, }: {
    chain: string;
    txHash: HexAddress;
    from: HexAddress;
    to: HexAddress;
    amount: string;
}): Promise<{
    success: boolean;
    message?: undefined;
} | {
    success: boolean;
    message: string;
}>;
export declare function cn(...inputs: ClassValue[]): string;
export declare const formatAmount: (amount?: number, fraction?: number) => string;
export declare const formatCurrency: (amount?: number, fraction?: number) => string;
export declare const formatPercentage: (amount?: number) => string;
export declare const timeAgo: (timestamp: Date, locale?: string) => any;
export declare const formatBalance: (rawBalance: string) => string;
export declare const formatChainAsNum: (chainIdHex: string) => number;
export declare const formatAddress: (addr: string | undefined, length?: number | undefined) => string;
export declare const formatDateString: (date: string) => string;

import { SupportedTokens } from "../types";
export type SupportedTokens = "ETH" | "POL" | "BNB" | "USDT" | "USDC";
export type ContractAddresses = {
    [token in SupportedTokens]: {
        Polygon: `0x${string}`;
        Ethereum: `0x${string}`;
        "BNB Smart Chain": `0x${string}`;
    };
};
export declare const contractAddresses: ContractAddresses;
export declare const getUsdcOnChain: (chain: any) => `0x${string}`;

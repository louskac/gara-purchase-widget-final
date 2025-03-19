import { ReactNode } from "react";
import { type Locale } from "wagmi";
export declare const config: import("wagmi").Config<[{
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://polygonscan.com";
            readonly apiUrl: "https://api.polygonscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 25770160;
        };
    };
    id: 137;
    name: "Polygon";
    nativeCurrency: {
        readonly name: "POL";
        readonly symbol: "POL";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://polygon-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
            readonly apiUrl: "https://api.etherscan.io/api";
        };
    };
    contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
            readonly blockCreated: 19258213;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://eth.merkle.io"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
            readonly apiUrl: "https://api.bscscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15921452;
        };
    };
    id: 56;
    name: "BNB Smart Chain";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/bsc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
}], {
    1: import("viem").HttpTransport<undefined, false>;
    137: import("viem").HttpTransport<undefined, false>;
    56: import("viem").HttpTransport<undefined, false>;
}, import("wagmi").CreateConnectorFn<unknown, Record<string, unknown>, Record<string, unknown>>[]>;
export declare const WalletProviders: ({ children, locale }: {
    children: ReactNode;
    locale: Locale;
}) => import("react/jsx-runtime").JSX.Element;

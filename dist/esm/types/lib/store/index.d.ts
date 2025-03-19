import { HexAddress } from "../../types";
export type GaraState = {
    transactionStatus: {
        process: string;
        status: string;
    };
    outcomingTransaction: {
        txHash: HexAddress | undefined;
        done: boolean;
        receipt: any;
        error: any;
    };
    incomingTransaction: {
        txHash: HexAddress | undefined;
        done: boolean;
        receipt: any;
        error: any;
    };
};
export type GaraActios = {
    setTransactionStatus: (transactionStatus: {
        process: string;
        status: string;
    }) => void;
    setOutcomingTransaction: (outcomingTransaction: {
        txHash?: HexAddress;
        done?: boolean;
        receipt?: any;
        error?: any;
    }) => void;
    setIncomingTransaction: (incomingTransaction: {
        txHash?: HexAddress;
        done?: boolean;
        receipt?: any;
        error?: any;
    }) => void;
    reset: () => void;
};
export type GaraStore = GaraState & GaraActios;
export declare const defaultInitState: GaraState;
export declare const createGaraStore: (initState?: GaraState) => import("zustand/vanilla").StoreApi<GaraStore>;

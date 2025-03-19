import { InsertClientTransactionLog } from "./db/schema";
export declare const writeClientTransactionLog: ({ account_address, transaction_tx_hash, chain, token, log, }: InsertClientTransactionLog) => Promise<{
    success: boolean;
    message?: undefined;
} | {
    success: boolean;
    message: any;
}>;

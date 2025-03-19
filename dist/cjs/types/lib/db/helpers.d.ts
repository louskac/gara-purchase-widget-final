import { InsertTransaction, InsertTransactionLog, SelectTransaction, InsertClientTransactionLog } from "./schema";
export declare function createTransaction(data: InsertTransaction): Promise<void>;
export declare function getTransactionByTxHash(txHash: SelectTransaction["tx_hash"]): Promise<SelectTransaction[]>;
export declare function updateTransactionByTxHash(txHash: SelectTransaction["tx_hash"], data: Partial<Omit<SelectTransaction, "tx_hash">>): Promise<void>;
export declare function createTransactionLog(data: InsertTransactionLog): Promise<void>;
export declare function createClientTransactionLog(data: InsertClientTransactionLog): Promise<void>;

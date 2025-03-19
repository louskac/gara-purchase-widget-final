import { createWalletClient, Chain } from "viem";
import { type UseSendTransactionParameters, UseSendTransactionReturnType } from "wagmi";
import { BigNumberish, HexAddress, SupportedTokens } from "@/types";
type Address = `0x${string}`;
type SendPaymentProps = {
    token: SupportedTokens;
    chain: Chain;
    senderAddress: Address;
    recipientAddress: Address;
    amount: BigNumberish;
    walletClient: ReturnType<typeof createWalletClient>;
    setTransactionStatus: (status: {
        process: string;
        status: string;
    }) => void;
    setOutcomingTransaction: (transaction: {
        txHash?: HexAddress;
        done?: boolean;
        receipt?: any;
        error?: any;
    }) => void;
    setIncomingTransaction: (transaction: {
        txHash?: HexAddress;
        done?: boolean;
        receipt?: any;
        error?: any;
    }) => void;
    resetState: () => void;
    sendTransaction: (params: UseSendTransactionParameters) => UseSendTransactionReturnType;
};
type SendPaymentResponse = {
    txHash: HexAddress;
    receipt: object;
};
export declare const sendPayment: ({ token, chain, senderAddress, recipientAddress, amount, walletClient, setTransactionStatus, setOutcomingTransaction, setIncomingTransaction, resetState, }: SendPaymentProps) => Promise<SendPaymentResponse | undefined>;
export {};

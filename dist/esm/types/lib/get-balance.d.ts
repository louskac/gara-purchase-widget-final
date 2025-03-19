export declare function getTokenBalance({ walletAddress, token, chainName, }: {
    walletAddress: string;
    token: string;
    chainName: "Polygon" | "Ethereum" | "BNB Smart Chain";
}): Promise<{
    balance: string;
    humanReadableBalance: number;
}>;

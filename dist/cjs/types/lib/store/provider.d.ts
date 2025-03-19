import { type ReactNode } from "react";
import { type GaraStore, createGaraStore } from ".";
export type GaraStoreApi = ReturnType<typeof createGaraStore>;
export declare const GaraStoreContext: import("react").Context<import("zustand").StoreApi<GaraStore>>;
export interface GaraStoreProviderProps {
    children: ReactNode;
}
export declare const GaraStoreProvider: ({ children }: GaraStoreProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useGaraStore: <T>(selector: (store: GaraStore) => T) => T;

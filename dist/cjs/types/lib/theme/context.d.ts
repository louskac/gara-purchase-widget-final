import React, { ReactNode } from 'react';
import { GaraWidgetThemeConfig } from './index';
export type { GaraWidgetThemeConfig };
interface ThemeContextProps {
    theme: GaraWidgetThemeConfig;
}
export declare const useTheme: () => ThemeContextProps;
interface ThemeProviderProps {
    theme?: Partial<GaraWidgetThemeConfig>;
    children: ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;

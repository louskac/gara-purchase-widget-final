import React, { createContext, useContext, ReactNode } from 'react';
import { defaultTheme, GaraWidgetThemeConfig } from './index';

// Re-export the type so components can import it from context
export type { GaraWidgetThemeConfig };

interface ThemeContextProps {
  theme: GaraWidgetThemeConfig;
}

const ThemeContext = createContext<ThemeContextProps>({ theme: defaultTheme });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  theme?: Partial<GaraWidgetThemeConfig>;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  theme = {}, 
  children 
}) => {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    progressBar: {
      ...defaultTheme.progressBar,
      ...(theme.progressBar || {})
    },
    networkButtons: {
      ...defaultTheme.networkButtons,
      ...(theme.networkButtons || {})
    },
    inputFields: {
      ...defaultTheme.inputFields,
      ...(theme.inputFields || {})
    },
    connectButton: {
      ...defaultTheme.connectButton,
      ...(theme.connectButton || {})
    },
    buyButton: {
      ...defaultTheme.buyButton,
      ...(theme.buyButton || {})
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export interface GaraWidgetThemeConfig {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    borderRadius: string;
    progressBar?: {
        backgroundColor: string;
        fillColor: string;
    };
    networkButtons?: {
        activeBackgroundColor: string;
        inactiveBackgroundColor: string;
        activeTextColor: string;
        inactiveTextColor: string;
    };
    inputFields?: {
        backgroundColor: string;
        textColor: string;
        borderColor: string;
    };
    connectButton?: {
        backgroundColor: string;
        textColor: string;
    };
    buyButton?: {
        backgroundColor: string;
        textColor: string;
    };
}
export declare const defaultTheme: GaraWidgetThemeConfig;
export declare const darkTheme: GaraWidgetThemeConfig;
export declare function createWidgetTheme(config: Partial<GaraWidgetThemeConfig>): GaraWidgetThemeConfig;

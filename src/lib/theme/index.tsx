export interface GaraWidgetThemeConfig {
    // Colors
    primaryColor: string;    // Main action color
    secondaryColor: string;  // Accent color
    backgroundColor: string; // Background color of the widget
    textColor: string;       // Primary text color
    
    // Styling
    borderRadius: string;    // Border radius for components
    
    // Component specific overrides (optional)
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

// Default theme
export const defaultTheme: GaraWidgetThemeConfig = {
  primaryColor: '#FF4473',
  secondaryColor: '#28E0B9',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  borderRadius: '16px',
  progressBar: {
    backgroundColor: '#0D1E35',
    fillColor: '#28E0B9'
  },
  networkButtons: {
    activeBackgroundColor: '#024365',
    inactiveBackgroundColor: '#FFEEDC',
    activeTextColor: '#FFFFFF',
    inactiveTextColor: '#000000'
  },
  inputFields: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    borderColor: '#E5E7EB'
  },
  connectButton: {
    backgroundColor: '#FF4473',
    textColor: '#000000'
  },
  buyButton: {
    backgroundColor: '#061022',
    textColor: '#FFAE17'
  }
};

// Dark theme
export const darkTheme: GaraWidgetThemeConfig = {
  primaryColor: '#FF3E6C',
  secondaryColor: '#5CCEA4',
  backgroundColor: '#121212',
  textColor: '#FFFFFF',
  borderRadius: '20px',
  progressBar: {
    backgroundColor: '#4B4A4A',
    fillColor: '#5CCEA4'
  },
  networkButtons: {
    activeBackgroundColor: '#FF3E6C',
    inactiveBackgroundColor: '#302E2E',
    activeTextColor: '#FFFFFF',
    inactiveTextColor: '#FFFFFF'
  },
  inputFields: {
    backgroundColor: '#302E2E',
    textColor: '#FFFFFF',
    borderColor: '#444444'
  },
  connectButton: {
    backgroundColor: '#FF3E6C',
    textColor: '#FFFFFF'
  },
  buyButton: {
    backgroundColor: '#FF3E6C',
    textColor: '#FFFFFF'
  }
};

// Theme creator function
export function createWidgetTheme(config: Partial<GaraWidgetThemeConfig>): GaraWidgetThemeConfig {
  return {
    ...defaultTheme,
    ...config,
    progressBar: {
      ...defaultTheme.progressBar,
      ...(config.progressBar || {})
    },
    networkButtons: {
      ...defaultTheme.networkButtons,
      ...(config.networkButtons || {})
    },
    inputFields: {
      ...defaultTheme.inputFields,
      ...(config.inputFields || {})
    },
    connectButton: {
      ...defaultTheme.connectButton,
      ...(config.connectButton || {})
    },
    buyButton: {
      ...defaultTheme.buyButton,
      ...(config.buyButton || {})
    }
  };
}
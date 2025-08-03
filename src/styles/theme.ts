export const theme = {
  colors: {
    // Modern gradient-based color system
    primary: '#667eea',
    primaryDark: '#5a67d8',
    primaryLight: '#7c3aed',
    
    secondary: '#f093fb',
    secondaryDark: '#f093fb',
    secondaryLight: '#f5a3ff',
    
    accent: '#4facfe',
    accentDark: '#00f2fe',
    accentLight: '#43e97b',
    
    // Neutral colors
    background: '#fafbfc',
    backgroundAlt: '#f7fafc',
    surface: '#ffffff',
    surfaceAlt: '#edf2f7',
    surfaceHover: '#e2e8f0',
    
    // Text colors
    text: '#2d3748',
    textLight: '#4a5568',
    textMuted: '#718096',
    textInverse: '#ffffff',
    
    // Status colors
    success: '#48bb78',
    warning: '#ed8936',
    error: '#f56565',
    info: '#4299e1',
    
    // Special colors
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    
    // Overlay colors
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(0, 0, 0, 0.25)',
    overlayDark: 'rgba(0, 0, 0, 0.75)',
    
    // Border colors
    border: '#e2e8f0',
    borderLight: '#f7fafc',
    borderDark: '#cbd5e0',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    success: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    cool: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    sunset: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
    // Card gradients
    card: 'linear-gradient(145deg, #ffffff 0%, #f7fafc 100%)',
    cardHover: 'linear-gradient(145deg, #f7fafc 0%, #edf2f7 100%)',
    
    // Background gradients
    backgroundGradient: 'linear-gradient(135deg, #fafbfc 0%, #f7fafc 100%)',
    sidebarGradient: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
  },
  
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
    display: "'Playfair Display', serif",
  },
  
  fontSizes: {
    xs: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    sm: 'clamp(0.875rem, 2vw, 1rem)',
    base: 'clamp(1rem, 2.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 3vw, 1.25rem)',
    xl: 'clamp(1.25rem, 3.5vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 4vw, 1.875rem)',
    '3xl': 'clamp(1.875rem, 5vw, 2.25rem)',
    '4xl': 'clamp(2.25rem, 6vw, 3rem)',
    '5xl': 'clamp(3rem, 7vw, 4rem)',
    '6xl': 'clamp(4rem, 8vw, 5rem)',
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Custom shadows
    card: '0 4px 20px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 30px rgba(0, 0, 0, 0.12)',
    floating: '0 10px 40px rgba(102, 126, 234, 0.15)',
    glow: '0 0 20px rgba(102, 126, 234, 0.3)',
  },
  
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1020,
    banner: 1030,
    overlay: 1040,
    modal: 1050,
    popover: 1060,
    skipLink: 1070,
    toast: 1080,
    tooltip: 1090,
  },
  
  transitions: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Layout
  layout: {
    sidebarWidth: '320px',
    sidebarWidthCollapsed: '80px',
    headerHeight: '70px',
    maxWidth: '1400px',
    containerPadding: '1rem',
  },
  
  // Animation presets
  animations: {
    fadeIn: 'fadeIn 0.5s ease-in-out',
    slideUp: 'slideUp 0.5s ease-out',
    slideDown: 'slideDown 0.5s ease-out',
    scaleIn: 'scaleIn 0.3s ease-out',
    pulse: 'pulse 2s infinite',
    float: 'float 3s ease-in-out infinite',
    spin: 'spin 1s linear infinite',
  },
};

export type Theme = typeof theme;
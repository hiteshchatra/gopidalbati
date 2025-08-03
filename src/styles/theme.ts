export const theme = {
  colors: {
    // Modern green and orange theme for restaurant
    primary: '#16a34a', // Fresh green
    primaryDark: '#15803d',
    primaryLight: '#22c55e',
    
    secondary: '#ea580c', // Warm orange
    secondaryDark: '#c2410c',
    secondaryLight: '#fb923c',
    
    accent: '#0ea5e9', // Sky blue accent
    accentDark: '#0284c7',
    accentLight: '#38bdf8',
    
    // Clean neutral backgrounds
    background: '#fefefe', // Almost white
    backgroundAlt: '#f8fafc', // Very light gray
    surface: '#ffffff', // Pure white
    surfaceAlt: '#f1f5f9', // Light gray
    surfaceHover: '#e2e8f0', // Hover state
    
    // Text colors
    text: '#1f2937', // Dark gray
    textLight: '#4b5563', // Medium gray
    textMuted: '#6b7280', // Light gray
    textInverse: '#ffffff',
    
    // Status colors
    success: '#16a34a', // Green
    warning: '#eab308', // Yellow
    error: '#dc2626', // Red
    info: '#0ea5e9', // Blue
    
    // Special colors
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    
    // Border colors
    border: '#e5e7eb',
    borderLight: '#f3f4f6',
    borderDark: '#d1d5db',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
    secondary: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)',
    accent: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    success: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
    warm: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)',
    cool: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    
    // Background gradients
    backgroundGradient: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 100%)',
    sidebarGradient: 'linear-gradient(180deg, #16a34a 0%, #22c55e 100%)',
    
    // Card gradients
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    hoverGradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    
    // Button gradients
    button: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
    buttonHover: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)',
  },
  
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
    display: "'Playfair Display', serif",
    accent: "'Poppins', sans-serif",
  },
  
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
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
    sm: '0.25rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '2xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Colored shadows
    primary: '0 10px 40px rgba(22, 163, 74, 0.15)',
    primaryHover: '0 20px 60px rgba(22, 163, 74, 0.25)',
    secondary: '0 10px 40px rgba(234, 88, 12, 0.15)',
    accent: '0 10px 40px rgba(14, 165, 233, 0.15)',
    
    // Card shadows
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    
    // Floating shadows
    floating: '0 20px 40px rgba(0, 0, 0, 0.1)',
    floatingHover: '0 30px 60px rgba(0, 0, 0, 0.15)',
  },
  
  breakpoints: {
    xs: '360px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1920px',
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
    bounce: '0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
    fadeIn: 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    slideUp: 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    slideDown: 'slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    scaleIn: 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    float: 'float 3s ease-in-out infinite',
    spin: 'spin 1s linear infinite',
    bounce: 'bounce 1s infinite',
    wiggle: 'wiggle 1s ease-in-out infinite',
  },
};

export type Theme = typeof theme;
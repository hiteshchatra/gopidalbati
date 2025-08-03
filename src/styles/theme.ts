export const theme = {
  colors: {
    // Clean, modern color palette
    primary: '#3b82f6', // Clean blue
    primaryDark: '#2563eb',
    primaryLight: '#60a5fa',
    
    secondary: '#8b5cf6', // Purple accent
    secondaryDark: '#7c3aed',
    secondaryLight: '#a78bfa',
    
    accent: '#06b6d4', // Cyan accent
    accentDark: '#0891b2',
    accentLight: '#22d3ee',
    
    // Clean neutral backgrounds
    background: '#fafbfc', // Very light gray
    backgroundAlt: '#f8fafc', // Slightly darker
    surface: '#ffffff', // Pure white
    surfaceAlt: '#f1f5f9', // Light gray
    surfaceHover: '#e2e8f0', // Hover state
    
    // Glass effect colors
    glass: 'rgba(255, 255, 255, 0.25)',
    glassHover: 'rgba(255, 255, 255, 0.35)',
    glassBorder: 'rgba(255, 255, 255, 0.18)',
    
    // Text colors
    text: '#1e293b', // Dark slate
    textLight: '#475569', // Medium slate
    textMuted: '#64748b', // Light slate
    textInverse: '#ffffff',
    
    // Status colors
    success: '#10b981', // Emerald
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#3b82f6', // Blue
    
    // Special colors
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    
    // Overlay colors
    overlay: 'rgba(15, 23, 42, 0.5)',
    overlayLight: 'rgba(15, 23, 42, 0.25)',
    overlayDark: 'rgba(15, 23, 42, 0.75)',
    
    // Border colors
    border: 'rgba(226, 232, 240, 0.8)',
    borderLight: 'rgba(241, 245, 249, 0.8)',
    borderDark: 'rgba(203, 213, 225, 0.8)',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    secondary: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    accent: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    warm: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    cool: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    
    // Glass gradients
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
    glassHover: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 100%)',
    
    // Background gradients
    backgroundGradient: 'linear-gradient(135deg, #fafbfc 0%, #f8fafc 100%)',
    sidebarGradient: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%)',
    
    // Mesh gradients for modern look
    mesh1: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
    mesh2: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
    mesh3: 'radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
  },
  
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
    display: "'Inter', sans-serif",
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
    
    // Glass morphism shadows
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    glassHover: '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
    
    // Colored shadows
    primary: '0 10px 40px rgba(59, 130, 246, 0.15)',
    primaryHover: '0 20px 60px rgba(59, 130, 246, 0.25)',
    secondary: '0 10px 40px rgba(139, 92, 246, 0.15)',
    accent: '0 10px 40px rgba(6, 182, 212, 0.15)',
    
    // Floating shadows
    floating: '0 20px 40px rgba(0, 0, 0, 0.1)',
    floatingHover: '0 30px 60px rgba(0, 0, 0, 0.15)',
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
  
  // Glass morphism properties
  glass: {
    background: 'rgba(255, 255, 255, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
};

export type Theme = typeof theme;
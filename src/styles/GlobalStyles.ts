import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  // Import modern fonts
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

  // Reset
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    height: 100%;
    overflow-x: hidden;
    
    // Animated mesh background
    background-image: 
      ${({ theme }) => theme.gradients.mesh1},
      ${({ theme }) => theme.gradients.mesh2},
      ${({ theme }) => theme.gradients.mesh3};
    background-attachment: fixed;
    background-size: 100% 100%;
    animation: meshShift 20s ease-in-out infinite;
  }

  #root {
    height: 100%;
  }

  // App container layout
  .app-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
    }
  }

  // Enhanced scrollbar styling
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: ${({ theme }) => theme.transitions.normal};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.1);
  }

  // Selection styling
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  // Typography
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    margin-bottom: 0.5em;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    font-weight: ${({ theme }) => theme.fontWeights.black};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  p {
    margin-bottom: 1em;
    color: ${({ theme }) => theme.colors.textLight};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-1px);
    }
  }

  // Button base styles
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  // Input base styles
  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: ${({ theme }) => theme.transitions.normal};
  }

  // Image optimization
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  // List styles
  ul, ol {
    list-style: none;
  }

  // Glass morphism utility classes
  .glass {
    background: ${({ theme }) => theme.glass.background};
    backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
    border: ${({ theme }) => theme.glass.border};
    box-shadow: ${({ theme }) => theme.glass.boxShadow};
  }

  .glass-hover {
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      background: ${({ theme }) => theme.colors.glassHover};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.glassHover};
    }
  }

  // Utility classes
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .text-center {
    text-align: center;
  }

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .fixed {
    position: fixed;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .overflow-auto {
    overflow: auto;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  // Enhanced animations
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }

  @keyframes meshShift {
    0%, 100% {
      background-position: 0% 50%, 100% 50%, 50% 0%;
    }
    50% {
      background-position: 100% 50%, 0% 50%, 50% 100%;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }

  // Loading animation
  .loading-shimmer {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.surface} 0%,
      ${({ theme }) => theme.colors.surfaceAlt} 50%,
      ${({ theme }) => theme.colors.surface} 100%
    );
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite;
  }

  // Hover effects
  .hover-lift {
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: ${({ theme }) => theme.shadows.floatingHover};
    }
  }

  .hover-scale {
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      transform: scale(1.05);
    }
  }

  .hover-glow {
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.primary};
    }
  }

  // Focus styles
  .focus-ring {
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }

  // Animation utility classes
  .animate-fadeIn {
    animation: ${({ theme }) => theme.animations.fadeIn};
  }

  .animate-slideUp {
    animation: ${({ theme }) => theme.animations.slideUp};
  }

  .animate-scaleIn {
    animation: ${({ theme }) => theme.animations.scaleIn};
  }

  .animate-pulse {
    animation: ${({ theme }) => theme.animations.pulse};
  }

  .animate-float {
    animation: ${({ theme }) => theme.animations.float};
  }

  .animate-bounce {
    animation: ${({ theme }) => theme.animations.bounce};
  }

  .animate-wiggle {
    animation: ${({ theme }) => theme.animations.wiggle};
  }

  // Responsive utilities
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .lg\\:hidden {
      display: none;
    }
    
    .lg\\:block {
      display: block;
    }
    
    .lg\\:flex {
      display: flex;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .md\\:hidden {
      display: none;
    }
    
    .md\\:block {
      display: block;
    }
    
    .md\\:flex {
      display: flex;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .sm\\:hidden {
      display: none;
    }
    
    .sm\\:block {
      display: block;
    }
    
    .sm\\:flex {
      display: flex;
    }
  }

  // Print styles
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    .no-print {
      display: none !important;
    }
  }

  // Reduced motion
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // High contrast mode
  @media (prefers-contrast: high) {
    * {
      border-color: currentColor;
    }
  }
`;
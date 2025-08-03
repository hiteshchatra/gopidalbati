import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  // Import fonts
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

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

  // Scrollbar styling
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
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
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
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

  // Grid utilities
  .grid {
    display: grid;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-cols-5 {
    grid-template-columns: repeat(5, 1fr);
  }

  .grid-cols-6 {
    grid-template-columns: repeat(6, 1fr);
  }

  // Auto-fit grids for responsive design
  .grid-auto-fit-xs {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .grid-auto-fit-sm {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .grid-auto-fit-md {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .grid-auto-fit-lg {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .gap-2 {
    gap: ${({ theme }) => theme.spacing[2]};
  }

  .gap-4 {
    gap: ${({ theme }) => theme.spacing[4]};
  }

  .gap-6 {
    gap: ${({ theme }) => theme.spacing[6]};
  }

  .gap-8 {
    gap: ${({ theme }) => theme.spacing[8]};
  }

  // Spacing utilities
  .p-2 {
    padding: ${({ theme }) => theme.spacing[2]};
  }

  .p-4 {
    padding: ${({ theme }) => theme.spacing[4]};
  }

  .p-6 {
    padding: ${({ theme }) => theme.spacing[6]};
  }

  .p-8 {
    padding: ${({ theme }) => theme.spacing[8]};
  }

  .m-2 {
    margin: ${({ theme }) => theme.spacing[2]};
  }

  .m-4 {
    margin: ${({ theme }) => theme.spacing[4]};
  }

  .m-6 {
    margin: ${({ theme }) => theme.spacing[6]};
  }

  .m-8 {
    margin: ${({ theme }) => theme.spacing[8]};
  }

  .mt-auto {
    margin-top: auto;
  }

  .mb-auto {
    margin-bottom: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  // Border radius utilities
  .rounded {
    border-radius: ${({ theme }) => theme.borderRadius.base};
  }

  .rounded-lg {
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  .rounded-xl {
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }

  .rounded-full {
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  // Shadow utilities
  .shadow {
    box-shadow: ${({ theme }) => theme.shadows.base};
  }

  .shadow-md {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  .shadow-lg {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  .shadow-xl {
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  // Animations
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
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
    
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
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
    
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    
    .sm\\:text-center {
      text-align: center;
    }
  }

  // Focus styles
  .focus\\:outline-none:focus {
    outline: none;
  }

  .focus\\:ring:focus {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  // Hover effects
  .hover\\:shadow-lg:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  .hover\\:scale-110:hover {
    transform: scale(1.1);
  }

  // Transition utilities
  .transition {
    transition: ${({ theme }) => theme.transitions.normal};
  }

  .transition-fast {
    transition: ${({ theme }) => theme.transitions.fast};
  }

  .transition-slow {
    transition: ${({ theme }) => theme.transitions.slow};
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
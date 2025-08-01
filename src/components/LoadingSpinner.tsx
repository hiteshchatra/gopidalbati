import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

interface LoadingSpinnerProps {
  restaurantName?: string;
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.gradients.hero};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${theme.zIndex.modal};
  overflow: hidden;
  padding: ${theme.spacing.lg};
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height for mobile */
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%);
    animation: ${keyframes`
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.1); }
      100% { transform: rotate(360deg) scale(1); }
    `} 20s linear infinite;
  }
`;

const LoadingContent = styled.div`
  text-align: center;
  color: ${theme.colors.white};
  position: relative;
  z-index: 2;
  max-width: 90vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 95vw;
    padding: 0 ${theme.spacing.md};
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: clamp(80px, 15vw, 120px);
  height: clamp(80px, 15vw, 120px);
  margin-bottom: clamp(${theme.spacing.xl}, 5vw, ${theme.spacing['3xl']});
  flex-shrink: 0;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    width: clamp(70px, 20vw, 100px);
    height: clamp(70px, 20vw, 100px);
    margin-bottom: ${theme.spacing.xl};
  }
`;

const SpinnerRing = styled.div<{ delay?: number; size?: number }>`
  position: absolute;
  top: ${props => props.size ? `${(100 - props.size) / 2}%` : '0'};
  left: ${props => props.size ? `${(100 - props.size) / 2}%` : '0'};
  width: ${props => props.size ? `${props.size}%` : '100%'};
  height: ${props => props.size ? `${props.size}%` : '100%'};
  border: clamp(2px, 0.5vw, 4px) solid transparent;
  border-top: clamp(2px, 0.5vw, 4px) solid ${theme.colors.white};
  border-radius: 50%;
  animation: ${spin} ${props => 1.5 + (props.delay || 0) * 0.5}s linear infinite;
  animation-delay: ${props => props.delay || 0}s;
  opacity: ${props => props.delay ? 0.7 - (props.delay * 0.2) : 1};
`;

const LoadingTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(${theme.fontSizes['2xl']}, 6vw, ${theme.fontSizes['4xl']});
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin: 0 0 clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.md}) 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  letter-spacing: clamp(1px, 0.2vw, 3px);
  background: linear-gradient(45deg, #ffffff, #ffcccc, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `} 3s ease infinite;
  text-align: center;
  line-height: 1.2;
  word-break: break-word;
  hyphens: auto;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: clamp(${theme.fontSizes.xl}, 8vw, ${theme.fontSizes['3xl']});
    letter-spacing: clamp(0.5px, 0.1vw, 2px);
    margin-bottom: ${theme.spacing.sm};
  }
`;

const LoadingSubtitle = styled(motion.p)`
  font-family: ${theme.fonts.accent};
  font-size: clamp(${theme.fontSizes.sm}, 3.5vw, ${theme.fontSizes.xl});
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 clamp(${theme.spacing.lg}, 4vw, ${theme.spacing['2xl']}) 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1.4;
  max-width: 100%;
  word-break: break-word;
  hyphens: auto;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: clamp(${theme.fontSizes.xs}, 4vw, ${theme.fontSizes.lg});
    margin-bottom: ${theme.spacing.xl};
    padding: 0 ${theme.spacing.sm};
  }
`;

const ProgressBar = styled.div`
  width: clamp(150px, 50vw, 250px);
  height: clamp(3px, 0.5vw, 5px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  margin: clamp(${theme.spacing.md}, 3vw, ${theme.spacing.xl}) 0;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    width: clamp(120px, 70vw, 200px);
    height: 3px;
    margin: ${theme.spacing.md} 0;
  }
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.white}, rgba(255, 255, 255, 0.8), ${theme.colors.white});
  background-size: 200% 100%;
  border-radius: ${theme.borderRadius.full};
  animation: ${keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  `} 2s ease-in-out infinite;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.md});
  justify-content: center;
  margin-top: clamp(${theme.spacing.md}, 3vw, ${theme.spacing.lg});
  align-items: center;
`;

const Dot = styled(motion.div)<{ delay: number }>`
  width: clamp(8px, 2vw, 14px);
  height: clamp(8px, 2vw, 14px);
  background: ${theme.colors.white};
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    width: clamp(6px, 3vw, 10px);
    height: clamp(6px, 3vw, 10px);
  }
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ restaurantName = 'Restaurant' }) => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <SpinnerContainer>
          <SpinnerRing />
          <SpinnerRing delay={0.2} size={80} />
          <SpinnerRing delay={0.4} size={60} />
        </SpinnerContainer>

        <LoadingTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {restaurantName}
        </LoadingTitle>

        <LoadingSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Preparing your authentic Mexican experience...
        </LoadingSubtitle>

        <ProgressBar>
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </ProgressBar>

        <LoadingDots>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </LoadingDots>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
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
`;

const LoadingContent = styled.div`
  text-align: center;
  color: ${theme.colors.white};
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
    opacity: 0.7;
    transform: scale(1.05);
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: ${theme.spacing.xl};
`;

const SpinnerRing = styled.div<{ delay?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid ${theme.colors.white};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  animation-delay: ${props => props.delay || 0}s;
  opacity: ${props => props.delay ? 0.6 : 1};
`;

const SpinnerIcon = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${theme.fontSizes['2xl']};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const LoadingSubtitle = styled(motion.p)`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.lg};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;

const LoadingDots = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  justify-content: center;
`;

const Dot = styled(motion.div)<{ delay: number }>`
  width: 8px;
  height: 8px;
  background: ${theme.colors.white};
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ restaurantName = 'Restaurant' }) => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <SpinnerContainer>
          <SpinnerRing />
          <SpinnerRing delay={0.3} />
          <SpinnerIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🍽️
          </SpinnerIcon>
        </SpinnerContainer>

        <LoadingTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {restaurantName}
        </LoadingTitle>

        <LoadingSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Preparing your culinary experience
        </LoadingSubtitle>

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
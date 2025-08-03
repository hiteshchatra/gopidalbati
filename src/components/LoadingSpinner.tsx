import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  restaurantName: string;
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    animation: backgroundShift 10s ease-in-out infinite;
  }
`;

const LoadingContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  z-index: 1;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.6);
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const SpinnerRing = styled.div<{ $delay?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-right: 3px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  animation: ${spinAnimation} 1.5s linear infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
`;

const SpinnerCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulseAnimation} 2s ease-in-out infinite, ${glowAnimation} 3s ease-in-out infinite;
  
  &::before {
    content: '🍽️';
    font-size: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const LoadingText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const RestaurantName = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const LoadingMessage = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const LoadingSubtext = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.accent};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)<{ $delay: number; $duration: number }>`
  position: absolute;
  font-size: 2rem;
  opacity: 0.3;
  animation: float ${({ $duration }) => $duration}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ restaurantName }) => {
  const floatingEmojis = ['🌮', '🌯', '🥑', '🌶️', '🧀', '🍅', '🥬', '🌽'];

  return (
    <LoadingContainer>
      <FloatingElements>
        {floatingEmojis.map((emoji, index) => (
          <FloatingElement
            key={index}
            $delay={index * 0.5}
            $duration={3 + index * 0.5}
            style={{
              left: `${10 + index * 10}%`,
              top: `${20 + (index % 3) * 20}%`,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {emoji}
          </FloatingElement>
        ))}
      </FloatingElements>

      <LoadingContent>
        <SpinnerContainer>
          <SpinnerRing />
          <SpinnerRing $delay={0.3} />
          <SpinnerRing $delay={0.6} />
          <SpinnerCore />
        </SpinnerContainer>

        <LoadingText>
          <RestaurantName
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {restaurantName}
          </RestaurantName>

          <LoadingMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Preparing your culinary journey...
          </LoadingMessage>

          <LoadingSubtext
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Authentic Mexican Flavors
          </LoadingSubtext>
        </LoadingText>

        <ProgressBar>
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          />
        </ProgressBar>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
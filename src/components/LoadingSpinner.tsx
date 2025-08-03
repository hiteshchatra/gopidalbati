import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  restaurantName: string;
}

// Keyframe animations
const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(2deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

// Styled components
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
  background-size: 400% 400%;
  animation: ${gradientShift} 8s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow: hidden;
`;

const LoadingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
`;

const LogoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
`;

const LogoIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
`;

const LoadingRings = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
`;

const Ring = styled.div<{ $delay: number; $size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin-left: ${({ $size }) => -$size / 2}px;
  margin-top: ${({ $size }) => -$size / 2}px;
  border: 2px solid transparent;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const RestaurantName = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
  margin: 0;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: ${shimmer} 2s infinite;
    animation-delay: 1s;
  }
`;

const LoadingMessage = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const LoadingSubtext = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const DotsContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled(motion.div)<{ $delay: number }>`
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProgressContainer = styled(motion.div)`
  width: 280px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.8) 100%
  );
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const FloatingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Particle = styled(motion.div)<{ $size: number; $left: number; $delay: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  left: ${({ $left }) => $left}%;
  top: 100%;
  backdrop-filter: blur(2px);
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ restaurantName }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Preparing your culinary journey...",
    "Loading delicious menu items...",
    "Setting up your dining experience...",
    "Almost ready to serve you!"
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <LoadingContainer>
      <FloatingParticles>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            $size={particle.size}
            $left={particle.left}
            $delay={particle.delay}
            animate={{
              y: [-100, -window.innerHeight - 100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </FloatingParticles>

      <LoadingContent
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <LogoContainer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LogoBackground />
          <LoadingRings>
            <Ring $delay={0} $size={140} />
            <Ring $delay={0.3} $size={160} />
            <Ring $delay={0.6} $size={180} />
          </LoadingRings>
          <LogoIcon>🍽️</LogoIcon>
        </LogoContainer>

        <TextContainer>
          <RestaurantName
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {restaurantName}
          </RestaurantName>

          <AnimatePresence mode="wait">
            <LoadingMessage
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {messages[currentMessage]}
            </LoadingMessage>
          </AnimatePresence>

          <LoadingSubtext
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Premium Dining Experience
          </LoadingSubtext>
        </TextContainer>

        <ProgressContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <ProgressBar
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </ProgressContainer>

        <DotsContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[0, 1, 2].map((index) => (
            <Dot key={index} $delay={index * 0.2} />
          ))}
        </DotsContainer>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
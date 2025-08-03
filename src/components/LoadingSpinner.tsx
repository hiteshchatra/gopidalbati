import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  restaurantName: string;
}

// Modern keyframe animations
const morphing = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
    transform: rotate(180deg) scale(0.9);
  }
  75% {
    border-radius: 60% 40% 60% 30% / 70% 30% 60% 40%;
    transform: rotate(270deg) scale(1.05);
  }
`;

const liquidWave = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0px);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(22, 163, 74, 0.5), 0 0 40px rgba(22, 163, 74, 0.3);
  }
  50% {
    text-shadow: 0 0 30px rgba(22, 163, 74, 0.8), 0 0 60px rgba(22, 163, 74, 0.5);
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`;

// Styled components
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
  }
`;

const LoadingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const LogoSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MorphingShape = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #16a34a, #22c55e, #10b981);
  animation: ${morphing} 4s ease-in-out infinite;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 60px rgba(22, 163, 74, 0.4),
    inset 0 0 60px rgba(255, 255, 255, 0.1);
  z-index: 2;
`;

const LogoIcon = styled.div`
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  position: relative;
  z-index: 1;
`;

const OrbitingDots = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 240px;
  z-index: 1;
`;

const OrbitDot = styled.div<{ $delay: number; $size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: linear-gradient(45deg, #22c55e, #10b981);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
  animation: ${orbit} 3s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  transform-origin: 0 0;
  margin-top: ${({ $size }) => -$size / 2}px;
  margin-left: ${({ $size }) => -$size / 2}px;
`;

const TextSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const RestaurantName = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #ffffff;
  margin: 0;
  background: linear-gradient(45deg, #ffffff, #22c55e, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${textGlow} 3s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #22c55e, transparent);
    border-radius: 2px;
  }
`;

const LoadingText = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ProgressSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #16a34a, #22c55e, #10b981);
  border-radius: 4px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${liquidWave} 2s ease-in-out infinite;
  }
`;

const ProgressText = styled(motion.div)`
  color: rgba(255, 255, 255, 0.6);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 1px;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)<{ $left: number; $size: number }>`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: 100%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3));
  border-radius: 50%;
  backdrop-filter: blur(2px);
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LoadingDot = styled(motion.div)<{ $delay: number }>`
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ restaurantName }) => {
  const [progress, setProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Initializing kitchen...",
    "Preparing ingredients...",
    "Heating up the stove...",
    "Plating your experience...",
    "Ready to serve!"
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 45);

    // Loading step animation
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  // Generate floating elements
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 6,
  }));

  return (
    <LoadingContainer>
      <FloatingElements>
        {floatingElements.map((element) => (
          <FloatingElement
            key={element.id}
            $left={element.left}
            $size={element.size}
            animate={{
              y: [-100, -window.innerHeight - 100],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "linear",
            }}
          />
        ))}
      </FloatingElements>

      <LoadingContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LogoSection
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitingDots>
            {[0, 1, 2, 3].map((index) => (
              <OrbitDot
                key={index}
                $delay={index * 0.75}
                $size={12}
              />
            ))}
          </OrbitingDots>
          
          <MorphingShape>
            <LogoIcon>🍽️</LogoIcon>
          </MorphingShape>
        </LogoSection>

        <TextSection
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <RestaurantName>{restaurantName}</RestaurantName>
          
          <LoadingText>
            <AnimatePresence mode="wait">
              <motion.span
                key={loadingStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {loadingSteps[loadingStep]}
              </motion.span>
            </AnimatePresence>
            
            <LoadingDots>
              {[0, 1, 2].map((index) => (
                <LoadingDot
                  key={index}
                  $delay={index * 0.2}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </LoadingDots>
          </LoadingText>
        </TextSection>

        <ProgressSection
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ProgressTrack>
            <ProgressFill
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </ProgressTrack>
          
          <ProgressText>
            {Math.round(progress)}% Complete
          </ProgressText>
        </ProgressSection>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
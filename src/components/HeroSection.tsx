import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Container } from '../styles/GlobalStyles';

interface HeroSectionProps {
  restaurantInfo: {
    name: string;
    tagline?: string;
    tagline2?: string;
    heroImage?: string;
  };
}

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
`;

const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(229, 57, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(229, 57, 53, 0.05) 0%, transparent 50%);
  z-index: 1;
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 3;
  text-align: center;
  padding-top: 120px;
  padding-bottom: ${theme.spacing['4xl']};
`;

const HeroWelcome = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.9);
  font-weight: ${theme.fontWeights.medium};
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: ${theme.fontWeights.extrabold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  font-weight: ${theme.fontWeights.normal};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${theme.spacing.sm};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

const HeroSubtitle2 = styled(motion.p)`
  font-family: ${theme.fonts.accent};
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  font-weight: ${theme.fontWeights.medium};
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: ${theme.spacing['3xl']};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HeroActions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  align-items: center;
  margin-bottom: ${theme.spacing['3xl']};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
    gap: ${theme.spacing.lg};
  }
`;

const HeroButton = styled(motion.button) <{ variant?: 'primary' | 'secondary' }>`
  position: relative;
  padding: ${theme.spacing.lg} ${theme.spacing['2xl']};
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  border: none;
  border-radius: ${theme.borderRadius.xl};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-width: 180px;
  justify-content: center;
  overflow: hidden;
  
  ${props => props.variant === 'secondary' ? `
    background: rgba(255, 255, 255, 0.1);
    color: ${theme.colors.white};
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  ` : `
    background: ${theme.gradients.primary};
    color: ${theme.colors.white};
    box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(229, 57, 53, 0.4);
    }
  `}
  
  &:active {
    transform: translateY(0);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  z-index: 3;
`;

const ScrollText = styled.span`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ScrollArrow = styled(motion.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div) <{
  size: number;
  top: string;
  left: string;
  delay: number;
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(229, 57, 53, 0.1);
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  backdrop-filter: blur(5px);
  border: 1px solid rgba(229, 57, 53, 0.2);
`;

const HeroSection: React.FC<HeroSectionProps> = ({ restaurantInfo }) => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('.menu-container');
    if (menuSection) {
      const headerHeight = 80;
      const elementPosition = menuSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const floatingElements = [
    { size: 80, top: '15%', left: '10%', delay: 0 },
    { size: 60, top: '25%', left: '85%', delay: 1 },
    { size: 100, top: '65%', left: '5%', delay: 2 },
    { size: 70, top: '75%', left: '90%', delay: 3 },
    { size: 50, top: '35%', left: '75%', delay: 4 },
  ];

  return (
    <HeroContainer id="hero">
      <HeroPattern />

      <FloatingElements>
        {floatingElements.map((element, index) => (
          <FloatingElement
            key={index}
            size={element.size}
            top={element.top}
            left={element.left}
            delay={element.delay}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: element.delay,
            }}
          />
        ))}
      </FloatingElements>

      <HeroContent>
        <HeroWelcome
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>🍽️</span>
          <span>Welcome to</span>
        </HeroWelcome>

        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {restaurantInfo.name}
        </HeroTitle>

        {restaurantInfo.tagline && (
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {restaurantInfo.tagline}
          </HeroSubtitle>
        )}

        {restaurantInfo.tagline2 && (
          <HeroSubtitle2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {restaurantInfo.tagline2}
          </HeroSubtitle2>
        )}

        <HeroActions
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <HeroButton
            onClick={scrollToMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </HeroButton>

          <HeroButton
            variant="secondary"
            as="a"
            href="tel:+916376535219"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now</span>
          </HeroButton>
        </HeroActions>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <ScrollText>Scroll to Menu</ScrollText>
        <ScrollArrow
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
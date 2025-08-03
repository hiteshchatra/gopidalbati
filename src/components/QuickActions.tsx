import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

interface RestaurantInfo {
  name: string;
  phone?: string;
}

interface QuickActionsProps {
  restaurantInfo: RestaurantInfo;
  isMobile: boolean;
}

const ActionsContainer = styled.div<{ $isMobile: boolean }>`
  position: fixed;
  ${({ $isMobile }) => $isMobile ? `
    bottom: 20px;
    right: 20px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  ` : `
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `}
  z-index: ${({ theme }) => theme.zIndex.floating};
`;

const ActionButton = styled(motion.button)<{ $variant?: 'primary' | 'secondary' | 'accent' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
      case 'accent':
        return `
          background: ${theme.colors.accent};
          color: ${theme.colors.white};
        `;
      default:
        return `
          background: ${theme.colors.surface};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};
        `;
    }
  }}
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const CallButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    background: ${({ theme }) => theme.colors.primaryDark};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ScrollToTopButton = styled(ActionButton)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
`;

const QuickActions: React.FC<QuickActionsProps> = ({ restaurantInfo, isMobile }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCall = () => {
    if (restaurantInfo.phone) {
      window.location.href = `tel:${restaurantInfo.phone}`;
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like to know more about ${restaurantInfo.name}`;
    const phone = restaurantInfo.phone?.replace(/[^0-9]/g, '') || '916376535219';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isMobile) {
    return (
      <ActionsContainer $isMobile={true}>
        <ActionButton
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle />
        </ActionButton>

        <CallButton
          href={`tel:${restaurantInfo.phone}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone />
          Call Now
        </CallButton>
      </ActionsContainer>
    );
  }

  return (
    <ActionsContainer $isMobile={false}>
      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp />
          </ScrollToTopButton>
        )}
      </AnimatePresence>

      <ActionButton
        onClick={handleWhatsApp}
        $variant="accent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle />
      </ActionButton>

      <ActionButton
        $variant="primary"
        onClick={handleCall}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone />
      </ActionButton>
    </ActionsContainer>
  );
};

export default QuickActions;
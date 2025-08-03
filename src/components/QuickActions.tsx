import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp, ShoppingCart, Heart, Share2 } from 'lucide-react';

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
  box-shadow: ${({ theme }) => theme.shadows.floating};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${theme.gradients.primary};
          color: ${theme.colors.white};
        `;
      case 'accent':
        return `
          background: ${theme.gradients.accent};
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

const MobileActionBar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[3]};
  box-shadow: ${({ theme }) => theme.shadows.floating};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(20px);
`;

const MobileActionButton = styled(motion.button)<{ $variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${theme.gradients.primary};
          color: ${theme.colors.white};
        `;
      default:
        return `
          background: ${theme.colors.backgroundAlt};
          color: ${theme.colors.text};
        `;
    }
  }}
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CallButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  box-shadow: ${({ theme }) => theme.shadows.floating};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ScrollToTopButton = styled(ActionButton)`
  ${({ theme }) => `
    background: ${theme.gradients.accent};
    color: ${theme.colors.white};
  `}
`;

const CartBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border: 2px solid ${({ theme }) => theme.colors.surface};
`;

const QuickActions: React.FC<QuickActionsProps> = ({ restaurantInfo, isMobile }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [favorites, setFavorites] = useState(0);

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: restaurantInfo.name,
          text: `Check out ${restaurantInfo.name} - Amazing Mexican food!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  if (isMobile) {
    return (
      <ActionsContainer $isMobile={true}>
        <MobileActionBar
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MobileActionButton
            onClick={handleShare}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share2 />
          </MobileActionButton>
          
          <MobileActionButton
            style={{ position: 'relative' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart />
            {favorites > 0 && <CartBadge>{favorites}</CartBadge>}
          </MobileActionButton>
          
          <MobileActionButton
            style={{ position: 'relative' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart />
            {cartItems > 0 && <CartBadge>{cartItems}</CartBadge>}
          </MobileActionButton>
          
          <MobileActionButton
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle />
          </MobileActionButton>
        </MobileActionBar>

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
        onClick={handleShare}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Share2 />
      </ActionButton>

      <ActionButton
        style={{ position: 'relative' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart />
        {favorites > 0 && <CartBadge>{favorites}</CartBadge>}
      </ActionButton>

      <ActionButton
        style={{ position: 'relative' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ShoppingCart />
        {cartItems > 0 && <CartBadge>{cartItems}</CartBadge>}
      </ActionButton>

      <ActionButton
        $variant="accent"
        onClick={handleWhatsApp}
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
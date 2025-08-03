import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Leaf, Flame, Heart, Plus, Minus, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image?: string;
  description?: string;
  isVeg: boolean;
  isPopular?: boolean;
  rating?: number;
  prepTime?: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  animationDelay?: number;
}

const CardContainer = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: rgba(99, 102, 241, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.cardHover};
    opacity: 0;
    transition: ${({ theme }) => theme.transitions.normal};
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 180px;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transitions.slow};
  
  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  
  &::before {
    content: '🍽️';
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 2;
`;

const Badge = styled(motion.div)<{ $variant: 'popular' | 'veg' | 'rating' }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'popular':
        return `
          background: rgba(245, 158, 11, 0.9);
          color: ${theme.colors.white};
          border: 1px solid rgba(245, 158, 11, 0.3);
        `;
      case 'veg':
        return `
          background: rgba(16, 185, 129, 0.9);
          color: ${theme.colors.white};
          border: 1px solid rgba(16, 185, 129, 0.3);
        `;
      case 'rating':
        return `
          background: rgba(99, 102, 241, 0.9);
          color: ${theme.colors.white};
          border: 1px solid rgba(99, 102, 241, 0.3);
        `;
      default:
        return '';
    }
  }}
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const FavoriteButton = styled(motion.button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.normal};
  z-index: 2;
  
  &:hover {
    background: rgba(239, 68, 68, 0.8);
    transform: scale(1.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.3;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Price = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const OriginalPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: line-through;
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xs};
`;

const QuantityButton = styled(motion.button)`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.gradients.buttonHover};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const QuantityDisplay = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  min-width: 24px;
  text-align: center;
`;

const AddToCartButton = styled(motion.button)`
  flex: 1;
  background: ${({ theme }) => theme.gradients.button};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.gradients.buttonHover};
    transform: translateY(-2px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, animationDelay = 0 }) => {
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(0, quantity + delta));
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
    }
    // Add to cart logic here
    console.log(`Added ${quantity || 1} of ${item.name} to cart`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <CardContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <ImageContainer>
        {item.image ? (
          <ItemImage src={item.image} alt={item.name} />
        ) : (
          <ImagePlaceholder />
        )}
        
        <BadgeContainer>
          {item.isPopular && (
            <Badge
              $variant="popular"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: animationDelay + 0.2 }}
            >
              <Flame />
              Popular
            </Badge>
          )}
          
          {item.isVeg && (
            <Badge
              $variant="veg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: animationDelay + 0.3 }}
            >
              <Leaf />
              Veg
            </Badge>
          )}
          
          {item.rating && (
            <Badge
              $variant="rating"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: animationDelay + 0.4 }}
            >
              <Star />
              {item.rating}
            </Badge>
          )}
        </BadgeContainer>
        
        <FavoriteButton
          onClick={toggleFavorite}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ color: isFavorite ? '#ef4444' : '#ffffff' }}
        >
          <Heart fill={isFavorite ? 'currentColor' : 'none'} />
        </FavoriteButton>
      </ImageContainer>
      
      <CardContent>
        <ItemHeader>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            {item.description && (
              <ItemDescription>{item.description}</ItemDescription>
            )}
          </ItemInfo>
          
          <PriceContainer>
            <Price>{item.price}</Price>
            {item.originalPrice && (
              <OriginalPrice>{item.originalPrice}</OriginalPrice>
            )}
          </PriceContainer>
        </ItemHeader>
        
        <ItemMeta>
          {item.rating && (
            <MetaItem>
              <Star />
              <span>{item.rating}</span>
            </MetaItem>
          )}
          
          {item.prepTime && (
            <MetaItem>
              <Clock />
              <span>{item.prepTime}</span>
            </MetaItem>
          )}
          
          {item.isVeg && (
            <MetaItem>
              <Leaf />
              <span>Vegetarian</span>
            </MetaItem>
          )}
        </ItemMeta>
        
        <ActionContainer>
          <AnimatePresence>
            {quantity > 0 && (
              <QuantityControl>
                <QuantityButton
                  onClick={() => handleQuantityChange(-1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={quantity <= 0}
                >
                  <Minus />
                </QuantityButton>
                
                <QuantityDisplay>{quantity}</QuantityDisplay>
                
                <QuantityButton
                  onClick={() => handleQuantityChange(1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus />
                </QuantityButton>
              </QuantityControl>
            )}
          </AnimatePresence>
          
          <AddToCartButton
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ShoppingCart />
            {quantity > 0 ? `Update Cart` : 'Add to Cart'}
          </AddToCartButton>
        </ActionContainer>
      </CardContent>
    </CardContainer>
  );
};

export default MenuItemCard;
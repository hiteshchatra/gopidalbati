import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

interface MenuItemProps {
  item: {
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
  };
  index: number;
}

const ItemContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.surface} 0%, rgba(248, 246, 243, 0.8) 100%);
  transition: ${theme.transitions.normal};
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${theme.gradients.primary};
    transform: scaleY(0);
    transition: ${theme.transitions.normal};
    transform-origin: bottom;
  }
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.surface} 0%, rgba(229, 57, 53, 0.02) 100%);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.08),
      0 4px 12px rgba(229, 57, 53, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
    
    &::before {
      transform: scaleY(1);
    }
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  &:nth-child(even) {
    background: linear-gradient(135deg, rgba(248, 246, 243, 0.6) 0%, ${theme.colors.surface} 100%);
    
    &:hover {
      background: linear-gradient(135deg, rgba(229, 57, 53, 0.01) 0%, ${theme.colors.surface} 100%);
    }
  }
`;

const ItemImage = styled.div<{ backgroundImage?: string }>`
  width: 85px;
  height: 85px;
  min-width: 85px;
  border-radius: ${theme.borderRadius.lg};
  background: ${props => props.backgroundImage 
    ? `url(${props.backgroundImage})` 
    : `linear-gradient(135deg, ${theme.colors.surfaceAlt} 0%, ${theme.colors.backgroundAlt} 100%)`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textMuted};
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.8);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(229, 57, 53, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: ${theme.transitions.normal};
  }
  
  ${ItemContainer}:hover &::after {
    opacity: 1;
  }
  
  ${ItemContainer}:hover & {
    transform: scale(1.05);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.15),
      0 4px 12px rgba(229, 57, 53, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`;

const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 85px;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const ItemName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.3;
  flex: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  
  ${ItemContainer}:hover & {
    color: ${theme.colors.primary};
    text-shadow: 0 2px 4px rgba(229, 57, 53, 0.2);
  }
`;

const ItemBadges = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  flex-shrink: 0;
`;

const VegBadge = styled.div<{ isVeg: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid ${props => props.isVeg ? theme.colors.success : theme.colors.error};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 2px;
  box-shadow: 
    0 3px 8px ${props => props.isVeg ? 'rgba(67, 160, 71, 0.25)' : 'rgba(244, 67, 54, 0.25)'},
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.9);
  
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${props => props.isVeg ? theme.colors.success : theme.colors.error};
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

const PopularBadge = styled.span`
  background: linear-gradient(135deg, ${theme.colors.warning} 0%, #ff8f00 100%);
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  padding: 3px 8px;
  border-radius: ${theme.borderRadius.sm};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 
    0 3px 10px rgba(255, 152, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const ItemDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textLight};
  line-height: 1.5;
  margin: 0 0 ${theme.spacing.sm} 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: ${theme.fontWeights.normal};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textMuted};
`;

const ItemRating = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0.08) 100%);
  padding: 3px 8px;
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid rgba(255, 193, 7, 0.3);
  box-shadow: 0 2px 6px rgba(255, 193, 7, 0.2);
`;

const ItemPrepTime = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background: linear-gradient(135deg, rgba(67, 160, 71, 0.15) 0%, rgba(67, 160, 71, 0.08) 100%);
  padding: 3px 8px;
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid rgba(67, 160, 71, 0.3);
  box-shadow: 0 2px 6px rgba(67, 160, 71, 0.2);
`;

const ItemPricing = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  flex-direction: column;
  align-items: flex-end;
`;

const ItemPrice = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  text-shadow: 
    0 2px 4px rgba(229, 57, 53, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1);
  
  ${ItemContainer}:hover & {
    text-shadow: 
      0 3px 6px rgba(229, 57, 53, 0.4),
      0 1px 3px rgba(0, 0, 0, 0.15);
  }
`;

const ItemOriginalPrice = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textMuted};
  text-decoration: line-through;
  font-weight: ${theme.fontWeights.medium};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const MenuItemCard: React.FC<MenuItemProps> = ({ item, index }) => {
  return (
    <ItemContainer
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: 'easeOut'
      }}
    >
      <ItemImage backgroundImage={item.image}>
        {!item.image && '🍽️'}
      </ItemImage>

      <ItemContent>
        <div>
          <ItemHeader>
            <ItemName>{item.name}</ItemName>
            <ItemBadges>
              <VegBadge isVeg={item.isVeg} />
              {item.isPopular && <PopularBadge>★</PopularBadge>}
            </ItemBadges>
          </ItemHeader>

          {item.description && (
            <ItemDescription>{item.description}</ItemDescription>
          )}
        </div>

        <ItemFooter>
          <ItemMeta>
            {item.rating && (
              <ItemRating>
                <span>⭐</span>
                <span>{item.rating}</span>
              </ItemRating>
            )}
            {item.prepTime && (
              <ItemPrepTime>
                <span>🕐</span>
                <span>{item.prepTime}</span>
              </ItemPrepTime>
            )}
          </ItemMeta>

          <ItemPricing>
            <ItemPrice>{item.price}</ItemPrice>
            {item.originalPrice && (
              <ItemOriginalPrice>{item.originalPrice}</ItemOriginalPrice>
            )}
          </ItemPricing>
        </ItemFooter>
      </ItemContent>
    </ItemContainer>
  );
};

export default MenuItemCard;
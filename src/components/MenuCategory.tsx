import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Container } from '../styles/GlobalStyles';
import MenuItemCard from './MenuItemCard';

interface MenuCategoryProps {
  category: {
    id: string;
    name: string;
    icon?: string;
    image?: string;
    description?: string;
    items: Array<{
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
    }>;
  };
  animationDelay?: number;
}

const CategorySection = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

const CategoryHeader = styled(motion.div)`
  background: ${theme.colors.surface};
  border-left: 4px solid ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const CategoryHeaderContent = styled(Container)`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const CategoryIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
`;

const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.lg};
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CategoryIcon = styled.span`
  font-size: ${theme.fontSizes.xl};
  min-width: 40px;
  text-align: center;
`;

const CategoryInfo = styled.div`
  flex: 1;
`;

const CategoryTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin: 0 0 ${theme.spacing.xs} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xl};
  }
`;

const CategoryMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textLight};
  flex-wrap: wrap;
`;

const CategoryStat = styled.span`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.accent};
`;

const ItemsList = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: ${theme.spacing['2xl']} ${theme.spacing.lg};
  color: ${theme.colors.textMuted};
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  margin: ${theme.spacing.md} ${theme.spacing.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const EmptyIcon = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  margin-bottom: ${theme.spacing.md};
  opacity: 0.5;
`;

const EmptyText = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textMuted};
  margin: 0;
`;

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, animationDelay = 0 }) => {
  const vegCount = category.items.filter(item => item.isVeg).length;
  const nonVegCount = category.items.filter(item => !item.isVeg).length;
  const popularCount = category.items.filter(item => item.isPopular).length;

  // Function to render category icon or image
  const renderCategoryIcon = () => {
    // Check if category has a valid image URL
    if (category.image && category.image.trim() !== '' && category.image !== 'undefined') {
      return (
        <CategoryImage 
          src={category.image} 
          alt={category.name}
          onError={(e) => {
            // If image fails to load, hide it and show emoji icon instead
            e.currentTarget.style.display = 'none';
            const iconElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (iconElement) {
              iconElement.style.display = 'block';
            }
          }}
        />
      );
    }
    
    // Fallback to emoji icon
    return (
      <CategoryIcon>
        {category.icon || '🍽️'}
      </CategoryIcon>
    );
  };

  if (category.items.length === 0) {
    return (
      <CategorySection id={category.id} className="category-section">
        <Container>
          <CategoryHeader
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: animationDelay }}
          >
            <CategoryHeaderContent>
              <CategoryIconContainer>
                {renderCategoryIcon()}
              </CategoryIconContainer>
              <CategoryInfo>
                <CategoryTitle>{category.name}</CategoryTitle>
                <CategoryMeta>
                  <CategoryStat>
                    <span>📋</span>
                    <span>0 items</span>
                  </CategoryStat>
                </CategoryMeta>
              </CategoryInfo>
            </CategoryHeaderContent>
          </CategoryHeader>

          <EmptyState
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: animationDelay + 0.1 }}
          >
            <EmptyIcon>🍽️</EmptyIcon>
            <EmptyText>No items available in this category</EmptyText>
          </EmptyState>
        </Container>
      </CategorySection>
    );
  }

  return (
    <CategorySection id={category.id} className="category-section">
      <Container>
        <CategoryHeader
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: animationDelay }}
        >
          <CategoryHeaderContent>
            <CategoryIconContainer>
              {renderCategoryIcon()}
              {/* Hidden emoji icon as fallback */}
              {category.image && category.image.trim() !== '' && category.image !== 'undefined' && (
                <CategoryIcon style={{ display: 'none' }}>
                  {category.icon || '🍽️'}
                </CategoryIcon>
              )}
            </CategoryIconContainer>
            <CategoryInfo>
              <CategoryTitle>{category.name}</CategoryTitle>
              <CategoryMeta>
                <CategoryStat>
                  <span>📋</span>
                  <span>{category.items.length} items</span>
                </CategoryStat>
                
                {vegCount > 0 && (
                  <CategoryStat>
                    <span>🥬</span>
                    <span>{vegCount} veg</span>
                  </CategoryStat>
                )}
                
                {nonVegCount > 0 && (
                  <CategoryStat>
                    <span>🍖</span>
                    <span>{nonVegCount} non-veg</span>
                  </CategoryStat>
                )}
                
                {popularCount > 0 && (
                  <CategoryStat>
                    <span>⭐</span>
                    <span>{popularCount} popular</span>
                  </CategoryStat>
                )}
              </CategoryMeta>
            </CategoryInfo>
          </CategoryHeaderContent>
        </CategoryHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: animationDelay + 0.1 }}
        >
          <ItemsList>
            {category.items.map((item, index) => (
              <MenuItemCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </ItemsList>
        </motion.div>
      </Container>
    </CategorySection>
  );
};

export default MenuCategory;
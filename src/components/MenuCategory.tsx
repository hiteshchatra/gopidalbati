import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuItemCard from './MenuItemCard';

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

interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
  image?: string;
  description?: string;
  items: MenuItem[];
}

interface MenuCategoryProps {
  category: MenuCategory;
  animationDelay?: number;
}

const CategorySection = styled(motion.section)`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  scroll-margin-top: 100px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  }
`;

const CategoryContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const CategoryHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.gradients.primary};
    opacity: 0.3;
    z-index: 0;
  }
`;

const CategoryTitleWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  z-index: 1;
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
  animation: float 3s ease-in-out infinite;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const CategoryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  text-transform: capitalize;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const CategoryDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: ${({ theme }) => theme.spacing.md} auto 0;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const CategoryStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  .emoji {
    font-size: 1.2em;
  }
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    
    span {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;

const ItemsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  
  .emoji {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    opacity: 0.5;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textLight};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    max-width: 400px;
    margin: 0 auto;
  }
`;

const CategoryImage = styled(motion.div)<{ $image?: string }>`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background-image: ${({ $image }) => $image ? `url(${$image})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  opacity: 0.1;
  filter: blur(2px);
  z-index: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, animationDelay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: animationDelay,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: animationDelay }
    }
  };

  if (!category.items || category.items.length === 0) {
    return (
      <CategorySection
        id={category.id}
        className="category-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <CategoryContainer>
          <CategoryHeader variants={headerVariants}>
            <CategoryTitleWrapper>
              {category.icon && <CategoryIcon>{category.icon}</CategoryIcon>}
              <CategoryTitle>{category.name}</CategoryTitle>
            </CategoryTitleWrapper>
            {category.description && (
              <CategoryDescription>{category.description}</CategoryDescription>
            )}
          </CategoryHeader>
          
          <EmptyState
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="emoji">🍽️</div>
            <h3>No items available</h3>
            <p>This category is currently empty. Check back soon for delicious new additions!</p>
          </EmptyState>
        </CategoryContainer>
      </CategorySection>
    );
  }

  const popularItems = category.items.filter(item => item.isPopular).length;
  const avgRating = category.items.reduce((acc, item) => acc + (item.rating || 4.5), 0) / category.items.length;

  return (
    <CategorySection
      id={category.id}
      className="category-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <CategoryContainer>
        <CategoryHeader variants={headerVariants}>
          <CategoryTitleWrapper>
            {category.icon && <CategoryIcon>{category.icon}</CategoryIcon>}
            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryTitleWrapper>
          
          {category.description && (
            <CategoryDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
            >
              {category.description}
            </CategoryDescription>
          )}
          
          <CategoryStats
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.3 }}
          >
            <StatItem>
              <span className="emoji">🍽️</span>
              <span>{category.items.length} items</span>
            </StatItem>
            
            {popularItems > 0 && (
              <StatItem>
                <span className="emoji">🔥</span>
                <span>{popularItems} popular</span>
              </StatItem>
            )}
            
            <StatItem>
              <span className="emoji">⭐</span>
              <span>{avgRating.toFixed(1)} rating</span>
            </StatItem>
          </CategoryStats>
          
          {category.image && <CategoryImage $image={category.image} />}
        </CategoryHeader>
        
        <ItemsGrid variants={containerVariants}>
          {category.items.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <MenuItemCard 
                item={item} 
                animationDelay={index * 0.05}
              />
            </motion.div>
          ))}
        </ItemsGrid>
      </CategoryContainer>
    </CategorySection>
  );
};

export default MenuCategory;
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, Filter, SortAsc, Star, Clock, Heart, Plus, Minus, ShoppingCart, Leaf } from 'lucide-react';

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
  categoryName?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
  items: MenuItem[];
}

interface MenuGridProps {
  items: MenuItem[];
  categories: MenuCategory[];
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  searchQuery: string;
  activeCategory: string;
  isMobile?: boolean;
}

const GridContainer = styled.div`
  width: 100%;
`;

const GridHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const HeaderTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const HeaderSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ViewButton = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : 'transparent'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.textMuted};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? theme.gradients.primary : theme.colors.surfaceHover};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SortButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ItemsGrid = styled(motion.div)<{ $viewMode: 'grid' | 'list' }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  
  ${({ $viewMode }) => $viewMode === 'grid' ? `
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
    
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  ` : `
    grid-template-columns: 1fr;
    gap: 1rem;
  `}
`;

const ItemCard = styled(motion.div)<{ $viewMode: 'grid' | 'list' }>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
  ${({ $viewMode }) => $viewMode === 'list' ? `
    display: flex;
    align-items: stretch;
    padding: 1rem;
    min-height: 140px;
  ` : ''}
  
  &:hover {
    transform: ${({ $viewMode }) => $viewMode === 'list' ? 'translateX(4px)' : 'translateY(-4px)'};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ItemImage = styled.div<{ $image?: string; $viewMode: 'grid' | 'list' }>`
  ${({ $viewMode }) => $viewMode === 'grid' ? `
    width: 100%;
    height: 200px;
  ` : `
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-right: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    
    @media (max-width: 640px) {
      width: 100px;
      height: 100px;
      margin-right: 0.75rem;
    }
  `}
  
  background: ${({ $image, theme }) => 
    $image ? `url(${$image})` : theme.gradients.primary};
  background-size: cover;
  background-position: center;
  position: relative;
  
  ${({ $image, $viewMode }) => !$image && `
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
      content: '🍽️';
      font-size: ${$viewMode === 'list' ? '2rem' : '3rem'};
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
  `}
`;

const ItemBadges = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  left: ${({ theme }) => theme.spacing[3]};
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Badge = styled.div<{ $variant: 'popular' | 'veg' | 'rating' }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  backdrop-filter: blur(10px);
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'popular':
        return `
          background: rgba(237, 137, 54, 0.9);
          color: ${theme.colors.white};
        `;
      case 'veg':
        return `
          background: rgba(72, 187, 120, 0.9);
          color: ${theme.colors.white};
        `;
      case 'rating':
        return `
          background: rgba(102, 126, 234, 0.9);
          color: ${theme.colors.white};
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

const ItemContent = styled.div<{ $viewMode: 'grid' | 'list' }>`
  padding: ${({ $viewMode }) => $viewMode === 'grid' ? '1.5rem' : '0'};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ $viewMode }) => $viewMode === 'list' ? '120px' : 'auto'};
`;

const ItemHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const ItemName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  line-height: 1.3;
`;

const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
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

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
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

const AddButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const FavoriteButton = styled(motion.button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textMuted};
  
  .emoji {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    opacity: 0.5;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.textLight};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    max-width: 400px;
    margin: 0 auto;
  }
`;

const MenuGrid: React.FC<MenuGridProps> = ({
  items,
  categories,
  viewMode,
  onViewModeChange,
  searchQuery,
  activeCategory,
  isMobile = false,
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleQuantityChange = (itemId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + delta)
    }));
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  const getHeaderTitle = () => {
    if (searchQuery) {
      return `Search Results`;
    }
    if (activeCategory === 'all') {
      return 'All Menu Items';
    }
    const category = categories.find(cat => cat.id === activeCategory);
    return category?.name || 'Menu Items';
  };

  const getHeaderSubtitle = () => {
    if (searchQuery) {
      return `${items.length} items found for "${searchQuery}"`;
    }
    return `${items.length} delicious items to choose from`;
  };

  if (items.length === 0) {
    return (
      <GridContainer>
        <EmptyState
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="emoji">🔍</div>
          <h3>No items found</h3>
          <p>
            {searchQuery 
              ? `No dishes match "${searchQuery}". Try a different search term.`
              : 'This category is currently empty. Check back soon for delicious new additions!'
            }
          </p>
        </EmptyState>
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      <GridHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderLeft>
          <HeaderTitle>{getHeaderTitle()}</HeaderTitle>
          <HeaderSubtitle>{getHeaderSubtitle()}</HeaderSubtitle>
        </HeaderLeft>
        
        <HeaderControls>
          <ViewToggle>
            <ViewButton
              $isActive={viewMode === 'grid'}
              onClick={() => onViewModeChange('grid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid />
            </ViewButton>
            <ViewButton
              $isActive={viewMode === 'list'}
              onClick={() => onViewModeChange('list')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <List />
            </ViewButton>
          </ViewToggle>
          
          <SortButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SortAsc />
            Sort
          </SortButton>
        </HeaderControls>
      </GridHeader>

      <ItemsGrid
        $viewMode={viewMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {items.map((item, index) => (
            <ItemCard
              key={item.id}
              $viewMode={viewMode}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              layout
            >
              <ItemImage $image={item.image} $viewMode={viewMode}>
                <ItemBadges>
                  {item.isPopular && (
                    <Badge $variant="popular">
                      <Star />
                      Popular
                    </Badge>
                  )}
                  {item.isVeg && (
                    <Badge $variant="veg">
                      <Leaf />
                      Veg
                    </Badge>
                  )}
                  {item.rating && (
                    <Badge $variant="rating">
                      <Star />
                      {item.rating}
                    </Badge>
                  )}
                </ItemBadges>
                
                <FavoriteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart fill={favorites.has(item.id) ? 'currentColor' : 'none'} />
                </FavoriteButton>
              </ItemImage>
              
              <ItemContent $viewMode={viewMode}>
                <div>
                  <ItemHeader>
                    <ItemName>{item.name}</ItemName>
                    {item.description && (
                      <ItemDescription>{item.description}</ItemDescription>
                    )}
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
                    {viewMode === 'list' && item.categoryName && (
                      <MetaItem>
                        <span>{item.categoryName}</span>
                      </MetaItem>
                    )}
                  </ItemMeta>
                </div>
                
                <ItemFooter>
                  <PriceContainer>
                    <Price>{item.price}</Price>
                    {item.originalPrice && (
                      <OriginalPrice>{item.originalPrice}</OriginalPrice>
                    )}
                  </PriceContainer>
                  
                  <ActionContainer>
                    {quantities[item.id] > 0 ? (
                      <QuantityControl>
                        <QuantityButton
                          onClick={() => handleQuantityChange(item.id, -1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus />
                        </QuantityButton>
                        <QuantityDisplay>{quantities[item.id]}</QuantityDisplay>
                        <QuantityButton
                          onClick={() => handleQuantityChange(item.id, 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Plus />
                        </QuantityButton>
                      </QuantityControl>
                    ) : (
                      <AddButton
                        onClick={() => handleQuantityChange(item.id, 1)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Plus />
                        Add
                      </AddButton>
                    )}
                  </ActionContainer>
                </ItemFooter>
              </ItemContent>
            </ItemCard>
          ))}
        </AnimatePresence>
      </ItemsGrid>
    </GridContainer>
  );
};

export default MenuGrid;
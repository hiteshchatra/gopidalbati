import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, SortAsc, Star, Clock, ChevronDown } from 'lucide-react';

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

type SortOption = 'name' | 'price-low' | 'price-high' | 'popular' | 'rating';

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
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[1]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ViewButton = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : 'transparent'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.textMuted};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? theme.gradients.primary : theme.colors.surfaceHover};
    transform: scale(1.05);
  }
  
  svg {
    width: 22px;
    height: 22px;
  }
`;

const SortContainer = styled.div`
  position: relative;
`;

const SortButton = styled(motion.button)<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  min-width: 120px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: ${({ theme }) => theme.transitions.fast};
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const SortDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  min-width: 180px;
`;

const SortOption = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: left;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const ItemsGrid = styled(motion.div)<{ $viewMode: 'grid' | 'list' }>`
  display: grid;
  gap: ${({ theme, $viewMode }) => $viewMode === 'grid' ? theme.spacing[6] : theme.spacing[4]};
  
  ${({ $viewMode }) => $viewMode === 'grid' ? `
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  ` : `
    grid-template-columns: 1fr;
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
  position: relative;
  
  ${({ $viewMode }) => $viewMode === 'list' ? `
    display: flex;
    align-items: stretch;
    padding: 1.25rem;
    min-height: 150px;
  ` : ''}
  
  &:hover {
    transform: ${({ $viewMode }) => $viewMode === 'list' ? 'translateX(6px)' : 'translateY(-6px)'};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.primary};
    opacity: 0;
    transition: ${({ theme }) => theme.transitions.normal};
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.02;
  }
`;

const ItemImage = styled.div<{ $image?: string; $viewMode: 'grid' | 'list' }>`
  ${({ $viewMode }) => $viewMode === 'grid' ? `
    width: 100%;
    height: 220px;
  ` : `
    width: 130px;
    height: 130px;
    flex-shrink: 0;
    margin-right: 1.25rem;
    border-radius: 1rem;
    overflow: hidden;
    
    @media (max-width: 640px) {
      width: 110px;
      height: 110px;
      margin-right: 1rem;
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
      font-size: ${$viewMode === 'list' ? '2.5rem' : '3.5rem'};
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  left: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background: rgba(245, 158, 11, 0.95);
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const ItemContent = styled.div<{ $viewMode: 'grid' | 'list' }>`
  padding: ${({ $viewMode }) => $viewMode === 'grid' ? '1.75rem' : '0'};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ $viewMode }) => $viewMode === 'list' ? '130px' : 'auto'};
  position: relative;
  z-index: 1;
`;

const ItemHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ItemName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  line-height: 1.3;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
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
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const OriginalPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: line-through;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textMuted};
  
  .emoji {
    font-size: 5rem;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    opacity: 0.6;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
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
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const sortedItems = useMemo(() => {
    const itemsCopy = [...items];
    
    switch (sortBy) {
      case 'name':
        return itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
      
      case 'price-low':
        return itemsCopy.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
          return priceA - priceB;
        });
      
      case 'price-high':
        return itemsCopy.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
          return priceB - priceA;
        });
      
      case 'popular':
        return itemsCopy.sort((a, b) => {
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          return 0;
        });
      
      case 'rating':
        return itemsCopy.sort((a, b) => {
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          return ratingB - ratingA;
        });
      
      default:
        return itemsCopy;
    }
  }, [items, sortBy]);

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

  const getCurrentSortLabel = () => {
    return sortOptions.find(option => option.value === sortBy)?.label || 'Sort';
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
              ? `No dishes match "${searchQuery}". Try a different search term or browse our categories.`
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
          
          <SortContainer>
            <SortButton
              $isOpen={isSortOpen}
              onClick={() => setIsSortOpen(!isSortOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SortAsc />
              <span>{getCurrentSortLabel()}</span>
              <ChevronDown />
            </SortButton>
            
            <AnimatePresence>
              {isSortOpen && (
                <SortDropdown
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {sortOptions.map((option) => (
                    <SortOption
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value as SortOption);
                        setIsSortOpen(false);
                      }}
                      whileHover={{ x: 4 }}
                    >
                      {option.label}
                    </SortOption>
                  ))}
                </SortDropdown>
              )}
            </AnimatePresence>
          </SortContainer>
        </HeaderControls>
      </GridHeader>

      <ItemsGrid
        $viewMode={viewMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {sortedItems.map((item, index) => (
            <ItemCard
              key={item.id}
              $viewMode={viewMode}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ scale: viewMode === 'grid' ? 1.02 : 1.01 }}
              layout
            >
              <ItemImage $image={item.image} $viewMode={viewMode}>
                {item.isPopular && (
                  <PopularBadge>
                    <Star />
                    Popular
                  </PopularBadge>
                )}
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
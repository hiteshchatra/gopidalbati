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
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const HeaderTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const HeaderSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
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
    $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.textMuted};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? theme.colors.primaryDark : theme.colors.surfaceHover};
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const SortContainer = styled.div`
  position: relative;
`;

const SortButton = styled(motion.button)<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  min-width: 120px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
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
  margin-top: ${({ theme }) => theme.spacing[1]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  min-width: 180px;
`;

const SortOption = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
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
  gap: ${({ theme, $viewMode }) => $viewMode === 'grid' ? theme.spacing[4] : theme.spacing[3]};
  
  ${({ $viewMode }) => $viewMode === 'grid' ? `
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
  ${({ $viewMode }) => $viewMode === 'list' ? `
    display: flex;
    align-items: stretch;
    padding: 1rem;
    min-height: 120px;
  ` : ''}
  
  &:hover {
    transform: ${({ $viewMode }) => $viewMode === 'list' ? 'translateX(4px)' : 'translateY(-4px)'};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ItemImage = styled.div<{ $image?: string; $viewMode: 'grid' | 'list' }>`
  ${({ $viewMode }) => $viewMode === 'grid' ? `
    width: 100%;
    height: 180px;
  ` : `
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    margin-right: 1rem;
    border-radius: 0.75rem;
    overflow: hidden;
    
    @media (max-width: 640px) {
      width: 80px;
      height: 80px;
      margin-right: 0.75rem;
    }
  `}
  
  background: ${({ $image, theme }) => 
    $image ? `url(${$image})` : theme.colors.backgroundAlt};
  background-size: cover;
  background-position: center;
  position: relative;
  
  ${({ $image, $viewMode }) => !$image && `
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    &::before {
      content: '🍽️';
      font-size: ${$viewMode === 'list' ? '1.5rem' : '2.5rem'};
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  left: ${({ theme }) => theme.spacing[2]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  background: rgba(245, 158, 11, 0.9);
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  backdrop-filter: blur(10px);
  
  svg {
    width: 10px;
    height: 10px;
  }
`;

const ItemContent = styled.div<{ $viewMode: 'grid' | 'list' }>`
  padding: ${({ $viewMode }) => $viewMode === 'grid' ? '1.25rem' : '0'};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ $viewMode }) => $viewMode === 'list' ? '100px' : 'auto'};
`;

const ItemHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const ItemName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  line-height: 1.3;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  svg {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
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
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textMuted};
  
  .emoji {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    opacity: 0.6;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.5;
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
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
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowUp, X } from 'lucide-react';

interface FloatingFilterProps {
  categories: Array<{
    id: string;
    name: string;
    icon?: string;
  }>;
  activeFilter: 'all' | 'veg' | string;
  onFilterChange: (filter: 'all' | 'veg' | string) => void;
}

const FloatingContainer = styled(motion.div)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.lg};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: ${({ theme }) => theme.spacing.md};
    bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const FilterButton = styled(motion.button)<{ $isActive?: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : theme.gradients.card};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.cardHover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: ${({ theme }) => theme.transitions.normal};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'transparent' : 'rgba(99, 102, 241, 0.2)'};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 28px;
    height: 28px;
  }
`;

const FilterMenu = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  min-width: 280px;
  max-width: 320px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: -100px;
    min-width: 260px;
  }
`;

const FilterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const FilterSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterSectionTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FilterOption = styled(motion.button)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ $isActive, theme }) => 
    $isActive ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.05)'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.textLight};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: left;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'rgba(99, 102, 241, 0.3)' : 'transparent'};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.1)'};
    transform: translateX(3px);
  }
`;

const FilterIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  min-width: 24px;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const FilterText = styled.span`
  flex: 1;
`;

const CategoryList = styled.div`
  max-height: 240px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(99, 102, 241, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const CategoryOption = styled(motion.button)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ $isActive, theme }) => 
    $isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.textLight};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: left;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'rgba(99, 102, 241, 0.3)' : 'transparent'};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.1)'};
    transform: translateX(3px);
  }
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.lg};
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  background: ${({ theme }) => theme.gradients.accent};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardHover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  transition: ${({ theme }) => theme.transitions.normal};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 158, 11, 0.2);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: ${({ theme }) => theme.spacing.md};
    bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const FloatingFilter: React.FC<FloatingFilterProps> = ({ 
  categories, 
  activeFilter, 
  onFilterChange 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const getFilterIcon = () => {
    if (activeFilter === 'veg') return '🥬';
    if (activeFilter === 'all') return '🍽️';
    const category = categories.find(cat => cat.id === activeFilter);
    return category?.icon || '🍽️';
  };

  return (
    <>
      <FloatingContainer>
        <AnimatePresence>
          {isMenuOpen && (
            <FilterMenu
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <FilterTitle>Filter & Navigate</FilterTitle>
              
              <FilterSection>
                <FilterSectionTitle>Diet Preferences</FilterSectionTitle>
                <FilterOptions>
                  <FilterOption
                    $isActive={activeFilter === 'all'}
                    onClick={() => {
                      onFilterChange('all');
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FilterIcon>🍽️</FilterIcon>
                    <FilterText>All Items</FilterText>
                  </FilterOption>
                  
                  <FilterOption
                    $isActive={activeFilter === 'veg'}
                    onClick={() => {
                      onFilterChange('veg');
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FilterIcon>🥬</FilterIcon>
                    <FilterText>Vegetarian Only</FilterText>
                  </FilterOption>
                </FilterOptions>
              </FilterSection>

              <FilterSection>
                <FilterSectionTitle>Menu Categories</FilterSectionTitle>
                <CategoryList>
                  {categories.map((category) => (
                    <CategoryOption
                      key={category.id}
                      $isActive={activeFilter === category.id}
                      onClick={() => scrollToCategory(category.id)}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FilterIcon>{category.icon || '🍽️'}</FilterIcon>
                      <FilterText>{category.name}</FilterText>
                    </CategoryOption>
                  ))}
                </CategoryList>
              </FilterSection>
            </FilterMenu>
          )}
        </AnimatePresence>

        <FilterButton
          $isActive={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
        >
          {isMenuOpen ? <X /> : <Filter />}
        </FilterButton>
      </FloatingContainer>

      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp />
          </ScrollToTopButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFilter;
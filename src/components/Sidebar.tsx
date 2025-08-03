import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, MapPin, Clock, Filter, ChefHat } from 'lucide-react';

interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
  items: any[];
}

interface RestaurantInfo {
  name: string;
  tagline?: string;
  logo?: string;
  phone?: string;
  address?: string;
}

interface SidebarProps {
  restaurantInfo: RestaurantInfo;
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SidebarContainer = styled(motion.aside)`
  width: ${({ theme }) => theme.layout.sidebarWidth};
  height: 100vh;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const SidebarContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const RestaurantHeader = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const RestaurantLogo = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
  
  &::before {
    content: '🍽️';
    font-size: 1.5rem;
    display: ${props => props.children ? 'none' : 'block'};
    color: white;
  }
`;

const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const RestaurantTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const SearchWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[10]};
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const QuickStats = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const CategoriesSection = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  
  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CategoriesList = styled.div`
  flex: 1;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const CategoryItem = styled(motion.button)<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : theme.colors.surface};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: left;
  box-shadow: ${({ $isActive, theme }) => 
    $isActive ? theme.shadows.md : theme.shadows.sm};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? theme.colors.primaryDark : theme.colors.surfaceHover};
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 1;
`;

const CategoryIcon = styled.div<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isActive }) => $isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(22, 163, 74, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const CategoryInfo = styled.div`
  flex: 1;
`;

const CategoryName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  line-height: 1.2;
`;

const CategoryCount = styled.div<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.8;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background: ${({ $isActive }) => $isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(22, 163, 74, 0.1)'};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.white : theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: inline-block;
  min-width: 24px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({
  restaurantInfo,
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  const allCategories = [
    { id: 'all', name: 'All Items', icon: '🍽️', items: { length: totalItems } },
    ...categories
  ];

  return (
    <SidebarContainer
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <SidebarContent>
        <RestaurantHeader>
          <RestaurantLogo>
            {restaurantInfo.logo && (
              <img src={restaurantInfo.logo} alt={restaurantInfo.name} />
            )}
          </RestaurantLogo>
          <RestaurantName>{restaurantInfo.name}</RestaurantName>
          <RestaurantTagline>{restaurantInfo.tagline}</RestaurantTagline>
        </RestaurantHeader>

        <SearchContainer>
          <SearchWrapper>
            <SearchIcon>
              <Search />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </SearchWrapper>
        </SearchContainer>

        <QuickStats>
          <StatCard>
            <StatValue>{totalItems}</StatValue>
            <StatLabel>Total Items</StatLabel>
          </StatCard>
        </QuickStats>

        <CategoriesSection>
          <SectionTitle>
            <Filter />
            Categories
          </SectionTitle>
          
          <CategoriesList>
            {allCategories.map((category, index) => (
              <CategoryItem
                key={category.id}
                $isActive={activeCategory === category.id}
                onClick={() => onCategoryChange(category.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CategoryLeft>
                  <CategoryIcon $isActive={activeCategory === category.id}>
                    {category.icon}
                  </CategoryIcon>
                  <CategoryInfo>
                    <CategoryName>{category.name}</CategoryName>
                  </CategoryInfo>
                </CategoryLeft>
                <CategoryCount $isActive={activeCategory === category.id}>
                  {category.items?.length || category.items.length}
                </CategoryCount>
              </CategoryItem>
            ))}
          </CategoriesList>
        </CategoriesSection>

        <ContactInfo>
          {restaurantInfo.phone && (
            <ContactItem>
              <Phone />
              <span>{restaurantInfo.phone}</span>
            </ContactItem>
          )}
          <ContactItem>
            <Clock />
            <span>9 AM - 11 PM</span>
          </ContactItem>
          <ContactItem>
            <ChefHat />
            <span>Fresh & Delicious Food</span>
          </ContactItem>
        </ContactInfo>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
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
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.gradients.cardGradient};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const RestaurantLogo = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  &::before {
    content: '🍽️';
    font-size: 1.8rem;
    display: ${props => props.children ? 'none' : 'block'};
    color: white;
  }
`;

const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  line-height: 1.2;
`;

const RestaurantTagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const SearchWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
    transform: translateY(-1px);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]};
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CategoriesSection = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CategoriesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing[1]};
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

const CategoryItem = styled(motion.button)<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  box-shadow: ${({ $isActive, theme }) => 
    $isActive ? theme.shadows.md : theme.shadows.sm};
  overflow: hidden;
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateX(2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryIcon = styled.div<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isActive, theme }) => 
    $isActive ? 'rgba(22, 163, 74, 0.2)' : 'rgba(22, 163, 74, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;
  flex-shrink: 0;
`;

const CategoryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const CategoryInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CategoryName = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CategoryCount = styled.div<{ $isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : 'rgba(22, 163, 74, 0.1)'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  min-width: 24px;
  text-align: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.gradients.cardGradient};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
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
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <SidebarContent>
        <RestaurantHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
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
              placeholder="Search delicious dishes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </SearchWrapper>
        </SearchContainer>

        <CategoriesSection>
          <SectionTitle>
            <Filter />
            Browse Categories
          </SectionTitle>
          
          <CategoriesList>
            {allCategories.map((category, index) => (
              <CategoryItem
                key={category.id}
                $isActive={activeCategory === category.id}
                onClick={() => onCategoryChange(category.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.2 + (index * 0.05),
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <CategoryIcon $isActive={activeCategory === category.id}>
                  {category.icon}
                </CategoryIcon>
                <CategoryContent>
                  <CategoryInfo>
                    <CategoryName>{category.name}</CategoryName>
                  </CategoryInfo>
                  <CategoryCount $isActive={activeCategory === category.id}>
                    {category.items?.length || category.items.length}
                  </CategoryCount>
                </CategoryContent>
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
            <span>Open Daily: 9 AM - 11 PM</span>
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
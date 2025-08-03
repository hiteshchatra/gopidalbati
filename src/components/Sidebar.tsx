import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, MapPin, Clock, Star, Filter, Grid, List } from 'lucide-react';

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
  background: ${({ theme }) => theme.gradients.sidebarGradient};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.03)"/><circle cx="20" cy="80" r="0.5" fill="rgba(255,255,255,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }
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
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;

const RestaurantLogo = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
  
  &::before {
    content: '🍽️';
    font-size: 2rem;
    display: ${props => props.children ? 'none' : 'block'};
  }
`;

const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const RestaurantTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const SearchWrapper = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:focus-within {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]};
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const QuickStats = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CategoriesSection = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CategoriesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing[2]};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const CategoryItem = styled(motion.button)<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  background: ${({ $isActive }) => 
    $isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${({ $isActive }) => 
    $isActive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: left;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(4px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  min-width: 32px;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const CategoryInfo = styled.div`
  flex: 1;
`;

const CategoryName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const CategoryCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.7);
`;

const ContactInfo = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: rgba(255, 255, 255, 0.8);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.6);
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
  const avgRating = 4.8; // You can calculate this from actual data

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
        <RestaurantHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </SearchWrapper>
        </SearchContainer>

        <QuickStats
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <StatCard whileHover={{ scale: 1.05 }}>
            <StatValue>{totalItems}</StatValue>
            <StatLabel>Items</StatLabel>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }}>
            <StatValue>{avgRating}★</StatValue>
            <StatLabel>Rating</StatLabel>
          </StatCard>
        </QuickStats>

        <CategoriesSection>
          <SectionTitle>
            <Filter />
            Categories
          </SectionTitle>
          
          <CategoriesList>
            <AnimatePresence>
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
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryInfo>
                    <CategoryName>{category.name}</CategoryName>
                    <CategoryCount>
                      {category.items?.length || category.items.length} items
                    </CategoryCount>
                  </CategoryInfo>
                </CategoryItem>
              ))}
            </AnimatePresence>
          </CategoriesList>
        </CategoriesSection>

        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
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
            <Star />
            <span>4.8 Rating • 500+ Reviews</span>
          </ContactItem>
        </ContactInfo>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
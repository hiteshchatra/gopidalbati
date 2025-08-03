import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, MapPin, Clock, Star, Filter } from 'lucide-react';

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
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      ${({ theme }) => theme.gradients.mesh1},
      ${({ theme }) => theme.gradients.mesh2};
    opacity: 0.5;
    pointer-events: none;
    animation: meshShift 15s ease-in-out infinite;
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
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.colors.glassHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glassHover};
  }
`;

const RestaurantLogo = styled(motion.div)`
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.glassBorder};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: ${({ theme }) => theme.shadows.primaryHover};
  }
  
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
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const RestaurantName = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const RestaurantTagline = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SearchContainer = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const SearchWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  
  &:focus-within {
    background: ${({ theme }) => theme.colors.glassHover};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.glassHover};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]};
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SearchIcon = styled(motion.div)`
  position: absolute;
  left: ${({ theme }) => theme.spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
  
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
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  
  &:hover {
    background: ${({ theme }) => theme.colors.glassHover};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.glassHover};
  }
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
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

const SectionTitle = styled(motion.h3)`
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
  padding-right: ${({ theme }) => theme.spacing[2]};
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const CategoryItem = styled(motion.button)<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : theme.colors.glass};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'transparent' : theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: left;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({ $isActive, theme }) => 
    $isActive ? theme.shadows.primary : theme.shadows.glass};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? theme.gradients.primary : theme.colors.glassHover};
    transform: translateX(6px) scale(1.02);
    box-shadow: ${({ $isActive, theme }) => 
      $isActive ? theme.shadows.primaryHover : theme.shadows.glassHover};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryIcon = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  min-width: 32px;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: ${({ theme }) => theme.transitions.normal};
`;

const CategoryInfo = styled.div`
  flex: 1;
`;

const CategoryName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const CategoryCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.8;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ContactInfo = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.colors.glassHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glassHover};
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }
  
  svg {
    width: 16px;
    height: 16px;
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
  const avgRating = 4.8;

  const allCategories = [
    { id: 'all', name: 'All Items', icon: '🍽️', items: { length: totalItems } },
    ...categories
  ];

  const containerVariants = {
    hidden: { x: -320, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <SidebarContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SidebarContent>
        <RestaurantHeader variants={itemVariants}>
          <RestaurantLogo
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            {restaurantInfo.logo && (
              <img src={restaurantInfo.logo} alt={restaurantInfo.name} />
            )}
          </RestaurantLogo>
          <RestaurantName
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {restaurantInfo.name}
          </RestaurantName>
          <RestaurantTagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {restaurantInfo.tagline}
          </RestaurantTagline>
        </RestaurantHeader>

        <SearchContainer variants={itemVariants}>
          <SearchWrapper>
            <SearchIcon
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
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

        <QuickStats variants={itemVariants}>
          <StatCard
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <StatValue>{totalItems}</StatValue>
            <StatLabel>Items</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <StatValue>{avgRating}★</StatValue>
            <StatLabel>Rating</StatLabel>
          </StatCard>
        </QuickStats>

        <CategoriesSection>
          <SectionTitle variants={itemVariants}>
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
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  custom={index}
                >
                  <CategoryIcon
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.icon}
                  </CategoryIcon>
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

        <ContactInfo variants={itemVariants}>
          {restaurantInfo.phone && (
            <ContactItem
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Phone />
              <span>{restaurantInfo.phone}</span>
            </ContactItem>
          )}
          <ContactItem
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Clock />
            <span>9 AM - 11 PM</span>
          </ContactItem>
          <ContactItem
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Star />
            <span>4.8 Rating • 500+ Reviews</span>
          </ContactItem>
        </ContactInfo>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
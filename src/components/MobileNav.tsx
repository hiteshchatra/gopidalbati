import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Phone, Clock } from 'lucide-react';

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
}

interface MobileNavProps {
  restaurantInfo: RestaurantInfo;
  isOpen: boolean;
  onToggle: () => void;
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]};
  height: 70px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const LogoImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '🍽️';
    font-size: 1.2rem;
    display: ${props => props.children ? 'none' : 'block'};
    color: white;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 1.2;
`;

const RestaurantTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MenuButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  max-height: calc(100vh - 70px);
  overflow-y: auto;
`;

const SearchSection = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SearchWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[10]};
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  
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
  padding: ${({ theme }) => theme.spacing[4]};
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const CategoriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

const CategoryCard = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : theme.colors.backgroundAlt};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'transparent' : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const CategoryIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const CategoryName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.2;
`;

const CategoryCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.8;
`;

const ContactSection = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.white};
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const MobileNav: React.FC<MobileNavProps> = ({
  restaurantInfo,
  isOpen,
  onToggle,
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

  const handleCategorySelect = (categoryId: string) => {
    onCategoryChange(categoryId);
    onToggle();
  };

  return (
    <MobileNavContainer>
      <NavHeader>
        <LogoSection>
          <LogoImage>
            {restaurantInfo.logo && (
              <img src={restaurantInfo.logo} alt={restaurantInfo.name} />
            )}
          </LogoImage>
          <LogoText>
            <RestaurantName>{restaurantInfo.name}</RestaurantName>
            <RestaurantTagline>{restaurantInfo.tagline}</RestaurantTagline>
          </LogoText>
        </LogoSection>
        
        <MenuButton
          onClick={onToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? <X /> : <Menu />}
        </MenuButton>
      </NavHeader>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SearchSection>
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
            </SearchSection>

            <CategoriesSection>
              <SectionTitle>Categories</SectionTitle>
              <CategoriesList>
                {allCategories.map((category, index) => (
                  <CategoryCard
                    key={category.id}
                    $isActive={activeCategory === category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CategoryIcon>{category.icon}</CategoryIcon>
                    <CategoryName>{category.name}</CategoryName>
                    <CategoryCount>
                      {category.items?.length || category.items.length} items
                    </CategoryCount>
                  </CategoryCard>
                ))}
              </CategoriesList>
            </CategoriesSection>

            <ContactSection>
              <ContactGrid>
                <ContactCard>
                  <ContactIcon>
                    <Phone />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Call Us</ContactLabel>
                    <ContactValue>
                      {restaurantInfo.phone || '+91 63765 35219'}
                    </ContactValue>
                  </ContactText>
                </ContactCard>
                
                <ContactCard>
                  <ContactIcon>
                    <Clock />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Hours</ContactLabel>
                    <ContactValue>9 AM - 11 PM</ContactValue>
                  </ContactText>
                </ContactCard>
              </ContactGrid>
            </ContactSection>
          </MobileMenu>
        )}
      </AnimatePresence>
    </MobileNavContainer>
  );
};

export default MobileNav;
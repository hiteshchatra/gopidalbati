import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, Star } from 'lucide-react';

interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
  items: any[];
}

interface RestaurantInfo {
  name: string;
  tagline?: string;
  tagline2?: string;
  logo?: string;
  phone?: string;
  address?: string;
}

interface HeaderProps {
  restaurantInfo: RestaurantInfo;
  categories: MenuCategory[];
  activeCategory: string;
}

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  transition: ${({ theme }) => theme.transitions.normal};
  
  &.scrolled {
    background: rgba(15, 15, 35, 0.98);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.layout.headerHeight};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const LogoSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
`;

const RestaurantTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)<{ $isActive?: boolean }>`
  position: relative;
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary : theme.colors.textLight};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.primary};
    opacity: ${({ $isActive }) => $isActive ? 0.1 : 0};
    transition: ${({ theme }) => theme.transitions.normal};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    
    &::before {
      opacity: 0.1;
    }
  }
  
  .emoji {
    font-size: 1.2em;
    filter: ${({ $isActive }) => $isActive ? 'brightness(1.2)' : 'brightness(0.8)'};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: rgba(99, 102, 241, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(99, 102, 241, 0.2);
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: scale(1.05);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(15, 15, 35, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MobileNavItem = styled(motion.li)``;

const MobileNavLink = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ $isActive, theme }) => 
    $isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent'};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary : theme.colors.textLight};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
  
  .emoji {
    font-size: 1.5em;
  }
`;

const MobileContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Header: React.FC<HeaderProps> = ({ restaurantInfo, categories, activeCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer
      className={isScrolled ? 'scrolled' : ''}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <HeaderContent>
        <LogoSection
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {restaurantInfo.logo && (
            <LogoImage src={restaurantInfo.logo} alt={restaurantInfo.name} />
          )}
          <LogoText>
            <RestaurantName>{restaurantInfo.name}</RestaurantName>
            <RestaurantTagline>{restaurantInfo.tagline}</RestaurantTagline>
          </LogoText>
        </LogoSection>

        <Navigation>
          <NavList>
            {categories.map((category, index) => (
              <NavItem
                key={category.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  $isActive={activeCategory === category.id}
                  onClick={() => scrollToCategory(category.id)}
                >
                  <span className="emoji">{category.icon}</span>
                  {category.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Navigation>

        <ContactInfo>
          {restaurantInfo.phone && (
            <ContactItem
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone />
              <span>{restaurantInfo.phone}</span>
            </ContactItem>
          )}
          <ContactItem
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star />
            <span>4.8★</span>
          </ContactItem>
        </ContactInfo>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </MobileMenuButton>
      </HeaderContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavList>
              {categories.map((category, index) => (
                <MobileNavItem
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink
                    $isActive={activeCategory === category.id}
                    onClick={() => scrollToCategory(category.id)}
                  >
                    <span className="emoji">{category.icon}</span>
                    <span>{category.name}</span>
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavList>

            <MobileContactInfo>
              {restaurantInfo.phone && (
                <ContactItem>
                  <Phone />
                  <span>{restaurantInfo.phone}</span>
                </ContactItem>
              )}
              {restaurantInfo.address && (
                <ContactItem>
                  <MapPin />
                  <span>{restaurantInfo.address}</span>
                </ContactItem>
              )}
              <ContactItem>
                <Clock />
                <span>Open 9 AM - 11 PM</span>
              </ContactItem>
            </MobileContactInfo>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
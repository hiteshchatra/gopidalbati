import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';
import { Container, Flex } from '../styles/GlobalStyles';

interface HeaderProps {
  restaurantInfo: {
    name: string;
    logo?: string;
  };
  categories: Array<{
    id: string;
    name: string;
  }>;
  activeCategory?: string;
}

const HeaderContainer = styled(motion.header)<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.sticky};
  background: ${props => props.isScrolled 
    ? 'rgba(255, 255, 255, 0.98)' 
    : 'rgba(254, 252, 249, 0.95)'};
  backdrop-filter: blur(20px);
  border-bottom: ${props => props.isScrolled 
    ? `2px solid ${theme.colors.primary}` 
    : '1px solid rgba(229, 57, 53, 0.1)'};
  transition: ${theme.transitions.normal};
  box-shadow: ${props => props.isScrolled 
    ? `0 8px 32px rgba(229, 57, 53, 0.15)` 
    : '0 2px 20px rgba(0, 0, 0, 0.05)'};
`;

const HeaderContent = styled(Container)`
  padding-top: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.md};
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  cursor: pointer;
  flex-shrink: 0;
`;

const LogoImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: ${theme.borderRadius.full};
  object-fit: cover;
  box-shadow: ${theme.shadows.md};
  transition: ${theme.transitions.fast};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    width: 50px;
    height: 50px;
  }
`;

const LogoText = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 50%, ${theme.colors.primary} 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  white-space: nowrap;
  text-shadow: 0 2px 4px rgba(229, 57, 53, 0.3);
  letter-spacing: 0.5px;
  position: relative;
  transition: all ${theme.transitions.normal};
  animation: shimmer 3s ease-in-out infinite;
  
  @keyframes shimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent);
    opacity: 0;
    transition: opacity ${theme.transitions.fast};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['2xl']};
    letter-spacing: 1px;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes['3xl']};
    letter-spacing: 1.5px;
  }
`;

const Navigation = styled.nav`
  display: none;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xl};
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled.a<{ isActive?: boolean }>`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.fast};
  position: relative;
  white-space: nowrap;
  display: block;
  
  &:hover {
    color: ${theme.colors.primary};
    background: rgba(229, 57, 53, 0.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background: ${theme.colors.primary};
    transition: ${theme.transitions.fast};
  }
`;

// Menu Dropdown for Desktop
const MenuDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuButton = styled(motion.button)<{ isOpen: boolean; hasActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: ${props => props.hasActive ? theme.colors.primary : theme.colors.text};
  background: ${props => props.hasActive ? 'rgba(229, 57, 53, 0.05)' : 'transparent'};
  border: 2px solid ${props => props.hasActive ? theme.colors.primary : 'transparent'};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: ${theme.transitions.fast};
  position: relative;
  
  &:hover {
    color: ${theme.colors.primary};
    background: rgba(229, 57, 53, 0.05);
    border-color: ${theme.colors.primary};
  }
  
  svg {
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: ${theme.transitions.fast};
  }
`;

const MenuDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + ${theme.spacing.sm});
  right: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 252, 249, 0.98) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(229, 57, 53, 0.15);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(229, 57, 53, 0.1);
  min-width: 240px;
  max-width: 280px;
  max-height: 400px;
  overflow: hidden;
  z-index: ${theme.zIndex.dropdown};
  
  /* Ensure dropdown stays within viewport */
  @media (max-width: 1200px) {
    right: -20px;
    min-width: 220px;
    max-width: 260px;
  }
  
  @media (max-width: 768px) {
    right: -40px;
    min-width: 200px;
    max-width: 240px;
  }
`;

const MenuDropdownHeader = styled.div`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: linear-gradient(135deg, rgba(229, 57, 53, 0.05) 0%, rgba(229, 57, 53, 0.02) 100%);
  border-bottom: 1px solid rgba(229, 57, 53, 0.1);
  text-align: center;
`;

const MenuDropdownTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin: 0;
  
  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const MenuDropdownList = styled.div`
  max-height: 320px;
  overflow-y: auto;
  padding: ${theme.spacing.xs} 0;
  
  /* Clean scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 57, 53, 0.3);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(229, 57, 53, 0.5);
  }
`;

const MenuDropdownItem = styled(motion.div)`
  position: relative;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(229, 57, 53, 0.05);
  }
`;

const MenuDropdownLink = styled.a<{ isActive?: boolean }>`
  display: block;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  transition: all ${theme.transitions.fast};
  position: relative;
  background: ${props => props.isActive ? 'rgba(229, 57, 53, 0.05)' : 'transparent'};
  
  &:hover {
    color: ${theme.colors.primary};
    background: rgba(229, 57, 53, 0.08);
    padding-left: ${theme.spacing.xl};
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${props => props.isActive ? '3px' : '0'};
    background: ${theme.colors.primary};
    transition: width ${theme.transitions.fast};
  }
  
  &:hover::before {
    width: 3px;
  }
  
  @media (min-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: ${theme.fontSizes.base};
    
    &:hover {
      padding-left: calc(${theme.spacing.xl} + ${theme.spacing.sm});
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.fast};
  flex-shrink: 0;
  
  &:hover {
    background: rgba(229, 57, 53, 0.05);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 24px;
  height: 18px;
  
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${theme.colors.text};
    border-radius: 1px;
    transition: ${theme.transitions.fast};
    
    &:nth-child(1) {
      top: 0;
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      top: 8px;
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      top: 16px;
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(229, 57, 53, 0.1);
  box-shadow: ${theme.shadows.lg};
`;

const MobileNavList = styled.ul`
  padding: ${theme.spacing.lg} 0;
  max-height: 60vh;
  overflow-y: auto;
  
  /* Custom scrollbar for mobile menu */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(229, 57, 53, 0.1);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primaryDark};
  }
`;

const MobileNavItem = styled(motion.li)`
  border-bottom: 1px solid rgba(229, 57, 53, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileNavLink = styled.a<{ isActive?: boolean }>`
  display: block;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  transition: ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primary};
    background: rgba(229, 57, 53, 0.05);
  }
`;

const Header: React.FC<HeaderProps> = ({ restaurantInfo, categories, activeCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasActiveCategory = !!activeCategory;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (categoryId: string) => {
    // Close menus first
    setIsMobileMenuOpen(false);
    setIsMenuDropdownOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(categoryId);
      if (element) {
        const headerHeight = 100; // Increased header height for better spacing
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with ID "${categoryId}" not found`);
      }
    }, 100);
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    setIsMenuDropdownOpen(false);
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <HeaderContent>
        <Flex align="center" justify="space-between" gap={theme.spacing.md}>
          <Logo
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {restaurantInfo.logo && (
              <LogoImage 
                src={restaurantInfo.logo} 
                alt={restaurantInfo.name}
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(229, 57, 53, 0.2))'
                }}
              />
            )}
            <LogoText 
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
              }}
            >
              {restaurantInfo.name}
            </LogoText>
          </Logo>

          <Navigation>
            <NavList>
              <NavItem
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  isActive={!activeCategory}
                >
                  Home
                </NavLink>
              </NavItem>
            </NavList>
            
            {categories.length > 0 && (
              <MenuDropdownContainer ref={dropdownRef}>
                <MenuButton
                  isOpen={isMenuDropdownOpen}
                  hasActive={hasActiveCategory}
                  onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <path d="M9 9h6v6H9z"/>
                  </svg>
                  Menu
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </MenuButton>
                
                <AnimatePresence>
                  {isMenuDropdownOpen && (
                    <MenuDropdown
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuDropdownHeader>
                        <MenuDropdownTitle>
                          Menu Categories
                        </MenuDropdownTitle>
                      </MenuDropdownHeader>
                      
                      <MenuDropdownList>
                        {categories.map((category, index) => (
                          <MenuDropdownItem
                            key={category.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <MenuDropdownLink
                              href={`#${category.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(category.id);
                              }}
                              isActive={activeCategory === category.id}
                            >
                              {category.name}
                            </MenuDropdownLink>
                          </MenuDropdownItem>
                        ))}
                      </MenuDropdownList>
                    </MenuDropdown>
                  )}
                </AnimatePresence>
              </MenuDropdownContainer>
            )}
          </Navigation>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <MobileMenuIcon isOpen={isMobileMenuOpen}>
              <span />
              <span />
              <span />
            </MobileMenuIcon>
          </MobileMenuButton>
        </Flex>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Container>
                <MobileNavList>
                  <MobileNavItem
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <MobileNavLink
                      href="#hero"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToTop();
                      }}
                      isActive={!activeCategory}
                    >
                      Home
                    </MobileNavLink>
                  </MobileNavItem>
                  {categories.map((category, index) => (
                    <MobileNavItem
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index + 1) * 0.05 }}
                    >
                      <MobileNavLink
                        href={`#${category.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(category.id);
                        }}
                        isActive={activeCategory === category.id}
                      >
                        {category.name}
                      </MobileNavLink>
                    </MobileNavItem>
                  ))}
                </MobileNavList>
              </Container>
            </MobileMenu>
          )}
        </AnimatePresence>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
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
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.isScrolled 
    ? 'rgba(229, 57, 53, 0.1)' 
    : 'transparent'};
  transition: ${theme.transitions.normal};
  box-shadow: ${props => props.isScrolled ? theme.shadows.md : 'none'};
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
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${theme.borderRadius.full};
  object-fit: cover;
  box-shadow: ${theme.shadows.md};
`;

const LogoText = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin: 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const Navigation = styled.nav`
  display: none;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
`;

const NavItem = styled(motion.li)<{ isActive?: boolean }>`
  position: relative;
`;

const NavLink = styled.a<{ isActive?: boolean }>`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.fast};
  position: relative;
  
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <HeaderContent>
        <Flex align="center" justify="space-between">
          <Logo
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {restaurantInfo.logo && (
              <LogoImage src={restaurantInfo.logo} alt={restaurantInfo.name} />
            )}
            <LogoText>{restaurantInfo.name}</LogoText>
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
              {categories.map((category) => (
                <NavItem
                  key={category.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavLink
                    href={`#${category.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(category.id);
                    }}
                    isActive={activeCategory === category.id}
                  >
                    {category.name}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
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
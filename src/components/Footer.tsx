import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Container, Flex } from '../styles/GlobalStyles';

interface FooterProps {
  restaurantInfo: {
    name: string;
    phone?: string;
    address?: string;
    logo?: string;
  };
}

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 70%, #1e1e2f 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing['4xl']} 0 ${theme.spacing.lg} 0;
  margin-top: ${theme.spacing['5xl']};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${theme.gradients.primary};
    box-shadow: 0 2px 15px rgba(229, 57, 53, 0.4);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(135deg, transparent 0%, rgba(229, 57, 53, 0.08) 50%, transparent 100%);
    transform: skewY(-2deg);
  }
`;

const FooterPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(229, 57, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(229, 57, 53, 0.05) 0%, transparent 50%);
  z-index: 1;
`;

const FooterContent = styled(Container)`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['3xl']};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: ${theme.spacing['4xl']};
  }
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const FooterLogoContainer = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  border: 2px solid rgba(229, 57, 53, 0.3);
  border-radius: ${theme.borderRadius['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.15),
    0 4px 10px rgba(229, 57, 53, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  transition: all ${theme.transitions.normal};
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, rgba(229, 57, 53, 0.2), rgba(229, 57, 53, 0.1), transparent);
    border-radius: ${theme.borderRadius['2xl']};
    z-index: -1;
    filter: blur(8px);
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 15%;
    width: 25%;
    height: 25%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent);
    border-radius: 50%;
    filter: blur(6px);
  }
  
  &:hover {
    transform: translateY(-1px) scale(1.02);
    border-color: rgba(229, 57, 53, 0.5);
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.2),
      0 6px 15px rgba(229, 57, 53, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;

const FooterLogoImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: ${theme.borderRadius.xl};
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  transition: all ${theme.transitions.normal};
  filter: brightness(1.1) contrast(1.1);
  
  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.4);
    filter: brightness(1.2) contrast(1.2);
  }
`;

const FooterBrandInfo = styled.div`
  flex: 1;
`;

const FooterLogoText = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  background: linear-gradient(135deg, ${theme.colors.white} 0%, rgba(255, 255, 255, 0.8) 50%, ${theme.colors.white} 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 ${theme.spacing.sm} 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  animation: textShimmer 4s ease-in-out infinite;
  
  @keyframes textShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const FooterTagline = styled.p`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: ${theme.fontWeights.medium};
`;

const FooterDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
  font-weight: ${theme.fontWeights.normal};
`;

const FooterSectionTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${theme.gradients.primary};
    border-radius: 2px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.gradients.primary};
  border-radius: ${theme.borderRadius.lg};
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(229, 57, 53, 0.3);
`;

const ContactText = styled.div`
  flex: 1;
  padding-top: ${theme.spacing.xs};
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: ${theme.transitions.fast};
  font-weight: ${theme.fontWeights.medium};
  
  &:hover {
    color: ${theme.colors.white};
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: ${theme.borderRadius.xl};
  transition: ${theme.transitions.normal};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: ${theme.fonts.accent};
  font-weight: ${theme.fontWeights.semibold};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ActionIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: ${theme.borderRadius.xl};
  transition: ${theme.transitions.normal};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: ${theme.gradients.primary};
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(229, 57, 53, 0.4);
  }
`;

const FooterBottom = styled.div`
  margin-top: ${theme.spacing['3xl']};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterCopyright = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: ${theme.fontWeights.normal};
`;

const FooterBranding = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.7);
`;

const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  transition: ${theme.transitions.fast};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    color: ${theme.colors.white};
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

const BrandIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer: React.FC<FooterProps> = ({ restaurantInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterPattern />
      
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FooterBrand>
            <FooterLogoContainer>
              {restaurantInfo.logo ? (
                <FooterLogoImage 
                  src={restaurantInfo.logo} 
                  alt={restaurantInfo.name}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span style="font-size: 3rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">🌮</span>';
                  }}
                />
              ) : (
                <span style={{ 
                  fontSize: '3rem', 
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                  animation: 'bounce 2s ease-in-out infinite'
                }}>
                  🌮
                </span>
              )}
            </FooterLogoContainer>
            <FooterBrandInfo>
              <FooterLogoText>{restaurantInfo.name}</FooterLogoText>
              <FooterTagline>Authentic Flavors, Memorable Experiences</FooterTagline>
            </FooterBrandInfo>
          </FooterBrand>
          
          <FooterDescription>
            Experience the finest culinary journey with authentic flavors and exceptional hospitality. 
            We serve fresh, delicious meals prepared with love and the finest ingredients, bringing you 
            the taste of tradition with a modern touch.
          </FooterDescription>

          <SocialLinks>
            <SocialLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialLink>
            
            <SocialLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.438-.645 1.438-1.44s-.643-1.44-1.438-1.44z"/>
              </svg>
            </SocialLink>
            
            <SocialLink
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FooterSectionTitle>Contact Info</FooterSectionTitle>
          
          {restaurantInfo.address && (
            <ContactItem>
              <ContactIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </ContactIcon>
              <ContactText>
                <ContactLink
                  href="https://maps.app.goo.gl/vztXTynWqZ7C1nbx7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {restaurantInfo.address}
                </ContactLink>
              </ContactText>
            </ContactItem>
          )}
          
          {restaurantInfo.phone && (
            <ContactItem>
              <ContactIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </ContactIcon>
              <ContactText>
                <ContactLink href={`tel:${restaurantInfo.phone.replace(/[^\d+]/g, '')}`}>
                  {restaurantInfo.phone}
                </ContactLink>
              </ContactText>
            </ContactItem>
          )}
          
          <ContactItem>
            <ContactIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </ContactIcon>
            <ContactText>
              <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                Open Daily: 11:00 AM - 11:00 PM
              </div>
            </ContactText>
          </ContactItem>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FooterSectionTitle>Quick Actions</FooterSectionTitle>
          
          <ActionButtons>
            <ActionButton
              href="https://maps.app.goo.gl/vztXTynWqZ7C1nbx7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ActionIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </ActionIcon>
              <span>Get Directions</span>
            </ActionButton>
            
            <ActionButton
              href="https://www.google.com/maps/place/Om+Kathiyawadi/@23.079501,72.526994,19z/data=!4m6!3m5!1s0x395e8300035acdfd:0x46bc5c14fe47370e!8m2!3d23.0794492!4d72.5266068!16s%2Fg%2F11vwpg2x08?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ActionIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              </ActionIcon>
              <span>Write Review</span>
            </ActionButton>
          </ActionButtons>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterCopyright>
          &copy; {currentYear} {restaurantInfo.name}. All rights reserved.
        </FooterCopyright>
        
        <FooterBranding>
          <span>Powered by</span>
          <BrandLink
            href="https://quickmenus.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="M21 15.5c-1-1.5-3-2.5-5-2.5s-4 1-5 2.5"/>
              </svg>
            </BrandIcon>
            <span>Quick Menus</span>
          </BrandLink>
        </FooterBranding>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
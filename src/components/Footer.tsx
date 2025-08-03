import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star,
  Heart,
  Utensils,
  Award
} from 'lucide-react';

interface RestaurantInfo {
  name: string;
  tagline?: string;
  tagline2?: string;
  logo?: string;
  phone?: string;
  address?: string;
}

interface FooterProps {
  restaurantInfo: RestaurantInfo;
}

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const BrandSection = styled(FooterSection)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1 / -1;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

const BrandTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const BrandDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SectionTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    transform: translateX(5px);
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
  
  span {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.4;
  }
`;

const QuickLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
  
  &::before {
    content: '→';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    opacity: 0;
    transform: translateX(-10px);
    transition: ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover::before {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-3px);
  }
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin: 0 auto ${({ theme }) => theme.spacing.sm};
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  padding-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  
  .heart {
    color: ${({ theme }) => theme.colors.error};
    margin: 0 4px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer: React.FC<FooterProps> = ({ restaurantInfo }) => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterGrid>
            <BrandSection variants={itemVariants}>
              <Logo>
                {restaurantInfo.logo && (
                  <LogoImage src={restaurantInfo.logo} alt={restaurantInfo.name} />
                )}
                <BrandText>
                  <BrandName>{restaurantInfo.name}</BrandName>
                  <BrandTagline>{restaurantInfo.tagline}</BrandTagline>
                </BrandText>
              </Logo>
              
              <BrandDescription>
                Experience authentic Mexican flavors crafted with passion and tradition. 
                Fresh ingredients, bold spices, and recipes passed down through generations.
              </BrandDescription>
              
              <SocialLinks>
                <SocialLink
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram />
                </SocialLink>
                <SocialLink
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook />
                </SocialLink>
                <SocialLink
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter />
                </SocialLink>
              </SocialLinks>
            </BrandSection>

            <FooterSection variants={itemVariants}>
              <SectionTitle>Contact Info</SectionTitle>
              
              {restaurantInfo.phone && (
                <ContactItem whileHover={{ x: 5 }}>
                  <Phone />
                  <span>{restaurantInfo.phone}</span>
                </ContactItem>
              )}
              
              {restaurantInfo.address && (
                <ContactItem whileHover={{ x: 5 }}>
                  <MapPin />
                  <span>{restaurantInfo.address}</span>
                </ContactItem>
              )}
              
              <ContactItem whileHover={{ x: 5 }}>
                <Clock />
                <span>Mon-Sun: 9:00 AM - 11:00 PM</span>
              </ContactItem>
              
              <ContactItem whileHover={{ x: 5 }}>
                <Mail />
                <span>info@testysizzler.com</span>
              </ContactItem>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <SectionTitle>Quick Links</SectionTitle>
              
              <QuickLink href="#menu">Our Menu</QuickLink>
              <QuickLink href="#about">About Us</QuickLink>
              <QuickLink href="#reservations">Reservations</QuickLink>
              <QuickLink href="#catering">Catering</QuickLink>
              <QuickLink href="#events">Private Events</QuickLink>
              <QuickLink href="#contact">Contact</QuickLink>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <SectionTitle>Our Stats</SectionTitle>
              
              <StatsGrid>
                <StatItem whileHover={{ y: -3 }}>
                  <StatIcon>
                    <Star />
                  </StatIcon>
                  <StatValue>4.8</StatValue>
                  <StatLabel>Rating</StatLabel>
                </StatItem>
                
                <StatItem whileHover={{ y: -3 }}>
                  <StatIcon>
                    <Heart />
                  </StatIcon>
                  <StatValue>500+</StatValue>
                  <StatLabel>Happy Customers</StatLabel>
                </StatItem>
                
                <StatItem whileHover={{ y: -3 }}>
                  <StatIcon>
                    <Utensils />
                  </StatIcon>
                  <StatValue>50+</StatValue>
                  <StatLabel>Menu Items</StatLabel>
                </StatItem>
                
                <StatItem whileHover={{ y: -3 }}>
                  <StatIcon>
                    <Award />
                  </StatIcon>
                  <StatValue>5</StatValue>
                  <StatLabel>Years Experience</StatLabel>
                </StatItem>
              </StatsGrid>
            </FooterSection>
          </FooterGrid>
        </motion.div>

        <FooterBottom>
          <Copyright>
            © {currentYear} {restaurantInfo.name}. Made with 
            <span className="heart">♥</span> 
            for food lovers.
          </Copyright>
          
          <FooterLinks>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
            <FooterLink href="#terms">Terms of Service</FooterLink>
            <FooterLink href="#cookies">Cookie Policy</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
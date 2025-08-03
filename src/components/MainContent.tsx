import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface MainContentProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

const MainContainer = styled(motion.main)<{ $isMobile?: boolean }>`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  
  ${({ $isMobile }) => $isMobile && `
    margin-top: 70px;
    height: calc(100vh - 70px);
  `}
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: ${({ $isMobile }) => $isMobile ? '0' : '320px'};
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(79, 172, 254, 0.02) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  // Custom scrollbar
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

const MainContent: React.FC<MainContentProps> = ({ children, isMobile = false }) => {
  return (
    <MainContainer
      $isMobile={isMobile}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </MainContainer>
  );
};

export default MainContent;
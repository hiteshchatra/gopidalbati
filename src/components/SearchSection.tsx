import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Container } from '../styles/GlobalStyles';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const SearchContainer = styled.section`
  background: ${theme.colors.background};
  padding: ${theme.spacing['2xl']} 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent);
  }
`;

const SearchContent = styled(Container)`
  position: relative;
  z-index: 2;
`;

const SearchBox = styled(motion.div)`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.lg} ${theme.spacing.xl} ${theme.spacing.lg} 60px;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  border: 2px solid ${theme.colors.surfaceAlt};
  border-radius: ${theme.borderRadius['2xl']};
  background: ${theme.colors.surface};
  color: ${theme.colors.text};
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.shadows.md};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(229, 57, 53, 0.1), ${theme.shadows.lg};
  }
  
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${theme.spacing.lg};
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.textMuted};
  pointer-events: none;
  z-index: 1;
`;

const ClearButton = styled(motion.button)<{ show: boolean }>`
  position: absolute;
  right: ${theme.spacing.lg};
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: ${theme.colors.textMuted};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-50%) scale(1.1);
  }
`;

const SearchSection: React.FC<SearchSectionProps> = ({
  onSearch,
  searchQuery
}) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(localQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, onSearch]);

  const handleClearSearch = () => {
    setLocalQuery('');
    onSearch('');
  };

  return (
    <SearchContainer>
      <SearchContent>
        <SearchBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SearchIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </SearchIcon>
          
          <SearchInput
            type="text"
            placeholder="Search for dishes..."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          
          <ClearButton
            show={localQuery.length > 0}
            onClick={handleClearSearch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </ClearButton>
        </SearchBox>
      </SearchContent>
    </SearchContainer>
  );
};

export default SearchSection;
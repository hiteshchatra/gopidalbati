import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const SearchContainer = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SearchContent = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const SearchTitle = styled(motion.h2)`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const SearchSubtitle = styled(motion.p)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const SearchWrapper = styled(motion.div)`
  position: relative;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.card};
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-right: ${({ theme }) => theme.spacing.md};
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const ClearButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  margin-left: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: scale(1.05);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
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
  margin-left: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: scale(1.05);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SuggestionsContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin-top: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow: hidden;
`;

const SuggestionItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  span {
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

const QuickFilters = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FilterChip = styled(motion.button)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.gradients.primary : 'rgba(99, 102, 241, 0.1)'};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? 'transparent' : 'rgba(99, 102, 241, 0.2)'};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ $isActive, theme }) => 
      $isActive ? theme.gradients.buttonHover : 'rgba(99, 102, 241, 0.2)'};
    transform: translateY(-2px);
  }
  
  .emoji {
    font-size: 1.2em;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const SearchStats = styled(motion.div)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, searchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    { text: 'Tacos', icon: '🌮' },
    { text: 'Burrito', icon: '🌯' },
    { text: 'Quesadilla', icon: '🧀' },
    { text: 'Nachos', icon: '🧀' },
    { text: 'Guacamole', icon: '🥑' },
  ];

  const quickFilters = [
    { id: 'popular', label: 'Popular', emoji: '🔥' },
    { id: 'veg', label: 'Vegetarian', emoji: '🥬' },
    { id: 'spicy', label: 'Spicy', emoji: '🌶️' },
    { id: 'new', label: 'New Items', emoji: '✨' },
    { id: 'combo', label: 'Combos', emoji: '🍽️' },
  ];

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
    setShowSuggestions(value.length > 0);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleFilterClick = (filterId: string) => {
    if (activeFilter === filterId) {
      setActiveFilter('');
      onSearch('');
    } else {
      setActiveFilter(filterId);
      // You can implement filter logic here
      onSearch(filterId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <SearchContainer>
      <SearchContent>
        <SearchTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Find Your Perfect Dish
        </SearchTitle>
        
        <SearchSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Search through our delicious menu or browse by category
        </SearchSubtitle>
        
        <SearchWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SearchInputContainer>
            <SearchIcon>
              <Search />
            </SearchIcon>
            
            <SearchInput
              ref={inputRef}
              type="text"
              placeholder="Search for dishes, ingredients, or categories..."
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(inputValue.length > 0)}
              onKeyDown={handleKeyDown}
            />
            
            <AnimatePresence>
              {inputValue && (
                <ClearButton
                  onClick={handleClear}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X />
                </ClearButton>
              )}
            </AnimatePresence>
            
            <FilterButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter />
            </FilterButton>
          </SearchInputContainer>
          
          <AnimatePresence>
            {showSuggestions && !inputValue && (
              <SuggestionsContainer
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {popularSearches.map((item, index) => (
                  <SuggestionItem
                    key={item.text}
                    onClick={() => handleSuggestionClick(item.text)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <TrendingUp />
                    <span className="emoji">{item.icon}</span>
                    <span>{item.text}</span>
                  </SuggestionItem>
                ))}
              </SuggestionsContainer>
            )}
          </AnimatePresence>
        </SearchWrapper>
        
        <QuickFilters
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {quickFilters.map((filter, index) => (
            <FilterChip
              key={filter.id}
              $isActive={activeFilter === filter.id}
              onClick={() => handleFilterClick(filter.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="emoji">{filter.emoji}</span>
              <span>{filter.label}</span>
            </FilterChip>
          ))}
        </QuickFilters>
        
        {searchQuery && (
          <SearchStats
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Showing results for "{searchQuery}"
          </SearchStats>
        )}
      </SearchContent>
    </SearchContainer>
  );
};

export default SearchSection;
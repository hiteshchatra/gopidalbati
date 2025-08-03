import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

// New Components with completely different structure
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MenuGrid from './components/MenuGrid';
import MobileNav from './components/MobileNav';
import LoadingSpinner from './components/LoadingSpinner';

// Firebase services
import {
  fetchCategories,
  fetchMenuItems,
  fetchRestaurantInfo,
  transformFirebaseDataToMenu
} from './firebase/firebaseService';
import { APP_CONFIG } from './config/app';

// Types
interface MenuItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image?: string;
  description?: string;
  isVeg: boolean;
  isPopular?: boolean;
  prepTime?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
  image?: string;
  description?: string;
  items: MenuItem[];
}

interface RestaurantInfo {
  name: string;
  tagline?: string;
  tagline2?: string;
  logo?: string;
  heroImage?: string;
  phone?: string;
  address?: string;
}

// Fallback restaurant info
const fallbackRestaurantInfo: RestaurantInfo = {
  name: "Gopi Daal Bati",
  tagline: "Daal Bati restaurant",
  tagline2: "Daal Bati restaurant",
  logo: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200",
  heroImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
  phone: "+91 63765 35219",
  address: "Gujarat High Court, Vishwas City 1, Sola, Ahmedabad"
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(fallbackRestaurantInfo);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Restaurant ID from configuration
  const RESTAURANT_ID = APP_CONFIG.RESTAURANT_ID;

  // Check if mobile with improved breakpoints
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load data from Firebase
  useEffect(() => {
    const loadFirebaseData = async () => {
      try {
        setIsLoading(true);

        // Fetch data from Firebase
        const [categories, menuItems, restaurantData] = await Promise.all([
          fetchCategories(RESTAURANT_ID),
          fetchMenuItems(RESTAURANT_ID),
          fetchRestaurantInfo(RESTAURANT_ID)
        ]);

        // Transform Firebase data to match our structure
        if (categories.length > 0 && menuItems.length > 0) {
          const transformedMenu = transformFirebaseDataToMenu(categories, menuItems);
          setMenu(transformedMenu);
        }

        // Use fallback data for name and taglines, Firebase data for others
        setRestaurantInfo({
          name: fallbackRestaurantInfo.name,
          tagline: fallbackRestaurantInfo.tagline,
          tagline2: fallbackRestaurantInfo.tagline2,
          phone: (restaurantData?.phone) || fallbackRestaurantInfo.phone,
          address: (restaurantData?.address) || fallbackRestaurantInfo.address,
          logo: (restaurantData?.logo) || fallbackRestaurantInfo.logo,
          heroImage: (restaurantData?.heroImage) || fallbackRestaurantInfo.heroImage
        });

      } catch (error) {
        console.error('Error loading Firebase data:', error);
        setRestaurantInfo(fallbackRestaurantInfo);
      } finally {
        // Extended loading to see the new beautiful loading screen
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    loadFirebaseData();
  }, [RESTAURANT_ID]);

  // Filter menu based on search query and active category
  const filteredMenu = useMemo(() => {
    let filtered = menu;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = menu.filter(category => category.id === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
        )
      })).filter(category => category.items.length > 0);
    }

    return filtered;
  }, [menu, searchQuery, activeCategory]);

  // Get all items for grid view
  const allItems = useMemo(() => {
    return filteredMenu.flatMap(category => 
      category.items.map(item => ({ ...item, categoryName: category.name }))
    );
  }, [filteredMenu]);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoadingSpinner restaurantName={restaurantInfo.name} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <div className="app-container">
        {/* Desktop Layout */}
        {!isMobile && (
          <>
            <Sidebar
              restaurantInfo={restaurantInfo}
              categories={menu}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            
            <MainContent>
              <MenuGrid
                items={allItems}
                categories={filteredMenu}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                searchQuery={searchQuery}
                activeCategory={activeCategory}
              />
            </MainContent>
          </>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <>
            <MobileNav
              restaurantInfo={restaurantInfo}
              isOpen={sidebarOpen}
              onToggle={() => setSidebarOpen(!sidebarOpen)}
              categories={menu}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            
            <MainContent isMobile>
              <MenuGrid
                items={allItems}
                categories={filteredMenu}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                searchQuery={searchQuery}
                activeCategory={activeCategory}
                isMobile
              />
            </MainContent>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
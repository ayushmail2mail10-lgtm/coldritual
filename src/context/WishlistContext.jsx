import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { useCart } from './CartContext';

const WishlistContext = createContext(null);
const WISHLIST_STORAGE_KEY = 'coldritual_wishlist_v1';

export function WishlistProvider({ children }) {
  const { showToast } = useToast();
  const { addToCart } = useCart();
  
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlistItems]);

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      showToast(`REMOVED FROM WISHLIST: ${product.name}`, 'info');
    } else {
      setWishlistItems(prev => [...prev, product]);
      showToast(`SAVED TO WISHLIST: ${product.name}`, 'success');
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
    showToast('REMOVED FROM WISHLIST', 'info');
  };

  const moveToCart = (product, size, color) => {
    addToCart(product, size || product.sizes[0], color || product.colors[0]?.name, 1, true);
    removeFromWishlist(product.id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount: wishlistItems.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        moveToCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

export default WishlistContext;

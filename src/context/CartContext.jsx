import React, { createContext, useContext, useState, useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';
import { useToast } from './ToastContext';

const CartContext = createContext(null);
const CART_STORAGE_KEY = 'coldritual_cart_v1';
const PROMO_STORAGE_KEY = 'coldritual_promo_v1';

export function CartProvider({ children }) {
  const { showToast } = useToast();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [appliedPromo, setAppliedPromo] = useState(() => {
    try {
      const saved = localStorage.getItem(PROMO_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem(PROMO_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save promo', e);
    }
  }, [appliedPromo]);

  // Add product to cart
  const addToCart = (product, selectedSize, selectedColor, quantity = 1, openDrawer = true) => {
    const size = selectedSize || product.sizes[0] || 'L';
    const color = selectedColor || product.colors[0]?.name || 'Standard';
    const cartItemId = `${product.id}-${size}-${color}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            cartItemId,
            productId: product.id,
            name: product.name,
            subtitle: product.subtitle || product.categoryLabel,
            category: product.category,
            slug: product.slug,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0],
            color,
            size,
            quantity,
            stock: product.stock || 20,
          }
        ];
      }
    });

    showToast(`ADDED TO CART: ${product.name} [${size}]`, 'success');
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  // Remove single item
  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('REMOVED FROM CART', 'info');
  };

  // Update item quantity
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: Math.min(newQuantity, 10) } : item
      )
    );
  };

  // Update item size
  const updateSize = (cartItemId, newSize) => {
    setCartItems(prev => {
      const item = prev.find(i => i.cartItemId === cartItemId);
      if (!item) return prev;
      const newCartItemId = `${item.productId}-${newSize}-${item.color}`;
      
      // If an item with newCartItemId already exists, merge quantities
      const existingOther = prev.find(i => i.cartItemId === newCartItemId);
      if (existingOther && existingOther.cartItemId !== cartItemId) {
        return prev
          .filter(i => i.cartItemId !== cartItemId)
          .map(i => i.cartItemId === newCartItemId ? { ...i, quantity: i.quantity + item.quantity } : i);
      }

      return prev.map(i => i.cartItemId === cartItemId ? { ...i, cartItemId: newCartItemId, size: newSize } : i);
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Apply promo code
  const applyPromo = (codeStr) => {
    const trimmed = (codeStr || '').trim().toUpperCase();
    const found = businessConfig.promoCodes.find(p => p.code.toUpperCase() === trimmed);
    if (!found) {
      showToast('INVALID PROMO CODE', 'error');
      return { success: false, message: 'Invalid promo code' };
    }
    if (subtotal < (found.minCart || 0)) {
      showToast(`MINIMUM CART ₹${found.minCart} REQUIRED`, 'error');
      return { success: false, message: `Min cart value is ₹${found.minCart}` };
    }
    setAppliedPromo(found);
    showToast(`CODE ${found.code} APPLIED!`, 'success');
    return { success: true };
  };

  const removePromo = () => {
    setAppliedPromo(null);
    showToast('PROMO CODE REMOVED', 'info');
  };

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let promoDiscount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercentage) {
      promoDiscount = Math.round((subtotal * appliedPromo.discountPercentage) / 100);
    } else if (appliedPromo.flatDiscount) {
      promoDiscount = Math.min(subtotal, appliedPromo.flatDiscount);
    }
  }

  const freeShippingThreshold = businessConfig.freeShippingThreshold;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const shippingFee = cartCount === 0 ? 0 : isFreeShipping ? 0 : businessConfig.standardShippingFee;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const finalTotal = Math.max(0, subtotal - promoDiscount + shippingFee);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        promoDiscount,
        appliedPromo,
        applyPromo,
        removePromo,
        shippingFee,
        isFreeShipping,
        freeShippingRemaining,
        freeShippingProgress,
        finalTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;

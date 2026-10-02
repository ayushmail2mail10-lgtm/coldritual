import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { businessConfig } from '../../config/businessConfig';

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
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
    removeFromCart,
    updateQuantity,
    updateSize
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const navigate = useNavigate();

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    if (res.success) setPromoInput('');
  };

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute inset-y-0 right-0 max-w-full w-full sm:max-w-md bg-softBlack border-l border-white/10 shadow-2xl flex flex-col justify-between z-10"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-deepBlack">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-offWhite" />
                <h2 className="font-display font-bold text-base sm:text-lg text-offWhite uppercase tracking-wide">
                  Cart ({cartCount})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 text-lightGray hover:text-white transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-deepBlack/80 px-5 py-3 border-b border-white/5">
              <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                <span className="text-lightGray uppercase">
                  {isFreeShipping ? (
                    <span className="text-icyBlue font-bold">✨ You Unlocked Free Express Shipping!</span>
                  ) : (
                    <span>
                      Add <strong className="text-offWhite">{formatCurrency(freeShippingRemaining)}</strong> for FREE Shipping
                    </span>
                  )}
                </span>
                <span className="text-lightGray/60">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-none overflow-hidden">
                <div
                  className="bg-icyBlue h-full transition-all duration-500 ease-out"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 divide-y divide-white/5">
              {cartItems.length === 0 ? (
                <div className="py-20 text-center flex flex-col items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-lightGray/30 mb-3 stroke-1" />
                  <p className="font-display uppercase tracking-widest text-sm text-offWhite mb-1">
                    YOUR CART IS EMPTY
                  </p>
                  <p className="text-lightGray/60 font-mono text-xs max-w-xs mb-6">
                    Enter the ritual. Choose from our oversized drops, heavyweight hoodies, and tactical cargos.
                  </p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="border border-white/20 hover:border-offWhite text-offWhite px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors"
                  >
                    Explore Catalog
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.cartItemId} className="py-4 flex gap-4">
                    {/* Thumbnail */}
                    <Link
                      to={`/product/${item.slug || item.productId}`}
                      onClick={closeCart}
                      className="w-20 h-24 bg-neutral-900 flex-shrink-0 border border-white/5 overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <Link
                            to={`/product/${item.slug || item.productId}`}
                            onClick={closeCart}
                            className="font-display font-bold text-sm text-offWhite uppercase tracking-wide truncate hover:text-white"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-lightGray/50 hover:text-red-400 p-0.5 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] font-mono text-lightGray/60 truncate mt-0.5">
                          {item.subtitle}
                        </p>

                        {/* Variants Specs */}
                        <div className="flex items-center gap-3 mt-1.5 text-[11px] font-mono text-lightGray">
                          <span className="bg-white/5 px-2 py-0.5 border border-white/5">
                            SIZE: {item.size}
                          </span>
                          <span className="truncate text-lightGray/70">
                            {item.color}
                          </span>
                        </div>
                      </div>

                      {/* Quantity & Item Subtotal */}
                      <div className="flex items-center justify-between mt-3 pt-2">
                        {/* Stepper */}
                        <div className="flex items-center border border-white/10 bg-deepBlack font-mono text-xs">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 px-2 text-lightGray hover:text-offWhite hover:bg-white/5"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-offWhite font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 px-2 text-lightGray hover:text-offWhite hover:bg-white/5"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price formatted with INR */}
                        <span className="font-mono text-sm font-bold text-offWhite">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-white/10 bg-deepBlack space-y-3">
                {/* Promo Code section */}
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-white/5 border border-icyBlue/30 px-3 py-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-icyBlue">
                      <Tag className="w-3.5 h-3.5" />
                      <span className="uppercase font-semibold">{appliedPromo.code}</span>
                      <span className="text-lightGray/70 text-[10px]">({appliedPromo.label})</span>
                    </div>
                    <button
                      onClick={removePromo}
                      className="text-lightGray hover:text-white uppercase text-[10px] underline ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="PROMO CODE (TRY: RITUAL10)"
                      className="flex-1 bg-softBlack border border-white/10 px-3 py-2 text-xs font-mono text-offWhite placeholder-lightGray/40 uppercase focus:outline-none focus:border-white/40"
                    />
                    <button
                      type="submit"
                      className="border border-white/20 hover:border-offWhite px-3 py-2 text-xs font-mono uppercase tracking-wider text-offWhite transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {/* Subtotal Calculation Lines */}
                <div className="space-y-1.5 text-xs font-mono text-lightGray pt-2 border-t border-white/5">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-offWhite">{formatCurrency(subtotal)}</span>
                  </div>

                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-icyBlue">
                      <span>Promo Discount</span>
                      <span>-{formatCurrency(promoDiscount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Pan-India Shipping</span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-emerald-400 font-semibold uppercase">FREE</span>
                      ) : (
                        formatCurrency(shippingFee)
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-2 border-t border-white/10 text-offWhite text-sm font-bold">
                    <span className="font-display uppercase tracking-wider">Total</span>
                    <span className="text-base text-offWhite font-mono">{formatCurrency(finalTotal)}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-offWhite hover:bg-white text-deepBlack py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
                  >
                    <span>Checkout • {formatCurrency(finalTotal)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="block text-center text-[11px] font-mono uppercase tracking-wider text-lightGray/70 hover:text-offWhite underline pt-1"
                  >
                    View & Edit Full Cart
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-lightGray/50 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-lightGray/60" />
                  <span>Secure Pan-India Checkout • UPI / COD Available</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

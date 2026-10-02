import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { businessConfig } from '../config/businessConfig';

export default function Cart() {
  const {
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
    updateSize,
    clearCart,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const navigate = useNavigate();

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    if (res.success) setPromoInput('');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-deepBlack text-offWhite">
        <ShoppingBag className="w-16 h-16 text-lightGray/20 mb-4 stroke-1" />
        <h1 className="font-display font-black text-3xl uppercase tracking-wider text-offWhite mb-2">
          YOUR CART IS EMPTY
        </h1>
        <p className="font-mono text-xs text-lightGray/70 max-w-sm mb-8">
          The ritual awaits. Explore our newest oversized tees, heavyweight hoodies, and tactical cargos.
        </p>
        <Link
          to="/shop"
          className="bg-offWhite hover:bg-white text-deepBlack px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest transition-transform active:scale-95 shadow-xl"
        >
          Explore Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Clear Cart */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div>
            <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
              CHECKOUT MANIFEST
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-offWhite mt-1">
              SHOPPING CART ({cartCount})
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-mono text-lightGray/60 hover:text-red-400 uppercase tracking-widest transition-colors self-start sm:self-auto"
          >
            Clear Entire Cart
          </button>
        </div>

        {/* Free Shipping Alert Banner */}
        <div className="bg-softBlack border border-white/10 p-4 mb-8">
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="text-lightGray uppercase">
              {isFreeShipping ? (
                <span className="text-icyBlue font-bold">✨ You Unlocked Free Express Air Shipping Across India!</span>
              ) : (
                <span>
                  Add <strong className="text-offWhite">{formatCurrency(freeShippingRemaining)}</strong> more for FREE Pan-India Shipping
                </span>
              )}
            </span>
            <span className="text-lightGray/70">{Math.round(freeShippingProgress)}%</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 overflow-hidden">
            <div
              className="bg-icyBlue h-full transition-all duration-500 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* 2-Column Grid: Item List (8 Cols) + Summary Box (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cart Items Table */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border border-white/10 divide-y divide-white/10 bg-softBlack/60">
              {cartItems.map((item) => (
                <div key={item.cartItemId} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.slug || item.productId}`}
                    className="w-24 h-32 bg-neutral-900 border border-white/10 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-lightGray/60 uppercase">
                      {item.category}
                    </span>
                    <Link
                      to={`/product/${item.slug || item.productId}`}
                      className="font-display font-bold text-base sm:text-lg text-offWhite uppercase tracking-wide hover:text-white block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs font-mono text-lightGray/60 truncate mt-0.5">
                      {item.subtitle}
                    </p>

                    {/* Options row */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-lightGray">
                      <div className="flex items-center gap-1.5 bg-deepBlack border border-white/10 px-2.5 py-1">
                        <span className="text-lightGray/60 uppercase">Size:</span>
                        <select
                          value={item.size}
                          onChange={(e) => updateSize(item.cartItemId, e.target.value)}
                          className="bg-transparent text-offWhite uppercase font-bold focus:outline-none cursor-pointer"
                        >
                          {['S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'].map(sz => (
                            <option key={sz} value={sz} className="bg-softBlack text-offWhite">
                              {sz}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="bg-deepBlack border border-white/10 px-2.5 py-1">
                        <span className="text-lightGray/60 uppercase">Color:</span>{' '}
                        <span className="text-offWhite font-semibold">{item.color}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stepper & Price in INR */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-white/15 bg-deepBlack font-mono text-xs">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1.5 px-2.5 text-lightGray hover:text-offWhite hover:bg-white/5"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-offWhite font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1.5 px-2.5 text-lightGray hover:text-offWhite hover:bg-white/5"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Total Price for line item strictly in INR */}
                    <div className="font-mono text-base font-bold text-offWhite">
                      {formatCurrency(item.price * item.quantity)}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-lightGray/50 hover:text-red-400 p-1 text-xs font-mono flex items-center gap-1 uppercase tracking-wider"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span className="sm:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-between items-center font-mono text-xs">
              <Link
                to="/shop"
                className="text-lightGray hover:text-offWhite underline uppercase tracking-widest"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="lg:col-span-4">
            <div className="bg-softBlack border border-white/15 p-6 sm:p-8 space-y-6 sticky top-28 shadow-2xl">
              <h2 className="font-display font-black text-xl uppercase tracking-wider text-offWhite pb-4 border-b border-white/10">
                ORDER SUMMARY
              </h2>

              {/* Promo Code section */}
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-white/5 border border-icyBlue/30 px-3 py-2.5 text-xs font-mono">
                  <div className="flex items-center gap-2 text-icyBlue">
                    <Tag className="w-4 h-4" />
                    <span className="uppercase font-bold">{appliedPromo.code}</span>
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
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="PROMO CODE (RITUAL10)"
                      className="flex-1 bg-deepBlack border border-white/15 px-3 py-2.5 text-xs font-mono text-offWhite placeholder-lightGray/40 uppercase focus:outline-none focus:border-white/50"
                    />
                    <button
                      type="submit"
                      className="bg-white/10 hover:bg-white/20 border border-white/20 text-offWhite px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <span className="block text-[10px] font-mono text-lightGray/50">
                    Use code <strong className="text-icyBlue font-mono">RITUAL10</strong> for 10% off
                  </span>
                </form>
              )}

              {/* Price Calculation Details */}
              <div className="font-mono text-xs space-y-3 pt-4 border-t border-white/10 text-lightGray">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-offWhite font-semibold">{formatCurrency(subtotal)}</span>
                </div>

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-icyBlue">
                    <span>Discount Applied</span>
                    <span>-{formatCurrency(promoDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Pan-India Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-400 font-bold uppercase">FREE</span>
                    ) : (
                      formatCurrency(shippingFee)
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-4 border-t border-white/15 text-offWhite text-lg font-bold">
                  <span className="font-display uppercase tracking-wider">Final Total</span>
                  <span className="font-mono text-2xl text-offWhite">{formatCurrency(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-2 shadow-2xl transition-transform active:scale-[0.98]"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-[10px] font-mono text-lightGray/50 space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-lightGray/60" />
                  <span>256-bit Encrypted Checkout • Indian Gateway Ready</span>
                </div>
                <div>UPI • NetBanking • Credit / Debit Cards • Cash on Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

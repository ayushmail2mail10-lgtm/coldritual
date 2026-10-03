import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function QuickViewModal({ product, isOpen, onClose, onOpenSizeGuide }) {
  if (!product) return null;

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || (typeof product.colors?.[0] === 'string' ? product.colors[0] : 'Standard')
  );
  const [quantity, setQuantity] = useState(1);

  const inWish = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity, true);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-softBlack border border-white/10 max-w-4xl w-full z-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-deepBlack/80 border border-white/10 p-2 text-offWhite hover:text-white hover:bg-deepBlack transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Product Images */}
            <div className="w-full md:w-1/2 bg-deepBlack flex flex-col justify-between p-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85';
                  }}
                  className="w-full h-full object-cover"
                />
                {product.discount > 0 && (
                  <span className="absolute top-3 left-3 bg-white text-deepBlack text-[10px] font-mono font-bold px-2 py-1 tracking-wider uppercase">
                    -{product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-16 flex-shrink-0 border overflow-hidden ${
                        activeImageIndex === idx ? 'border-offWhite' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details & Actions */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="text-[11px] font-mono tracking-widest text-lightGray uppercase mb-1">
                  {product.categoryLabel}
                </div>
                <h2 className="font-display font-bold text-2xl text-offWhite uppercase tracking-wide">
                  {product.name}
                </h2>
                <p className="text-xs text-lightGray/80 font-mono mt-0.5 mb-4">
                  {product.subtitle}
                </p>

                {/* Price Display strictly INR */}
                <div className="flex items-baseline gap-3 pb-5 border-b border-white/10">
                  <span className="font-mono text-2xl font-bold text-offWhite">
                    {formatCurrency(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="font-mono text-sm text-lightGray/60 line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="text-[11px] font-mono text-icyBlue uppercase tracking-wider">
                      Save {formatCurrency(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>

                {/* Color Selection */}
                <div className="mt-5">
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-lightGray uppercase">Color:</span>
                    <span className="text-offWhite font-semibold">{selectedColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {product.colors && product.colors.map((c, idx) => {
                      const colorName = typeof c === 'string' ? c : (c?.name || 'Standard');
                      const colorHex = typeof c === 'string' ? '#181818' : (c?.hex || '#181818');
                      return (
                        <button
                          key={colorName + idx}
                          onClick={() => setSelectedColor(colorName)}
                          className={`w-7 h-7 rounded-full border-2 p-0.5 transition-all ${
                            selectedColor === colorName ? 'border-offWhite scale-110' : 'border-transparent hover:border-white/30'
                          }`}
                          title={colorName}
                        >
                          <span
                            className="w-full h-full rounded-full block border border-white/20"
                            style={{ backgroundColor: colorHex }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mt-5">
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-lightGray uppercase">Size:</span>
                    {onOpenSizeGuide && (
                      <button
                        onClick={onOpenSizeGuide}
                        className="text-icyBlue hover:underline text-[11px]"
                      >
                        Size Guide
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                          selectedSize === s
                            ? 'bg-offWhite text-deepBlack font-bold border-offWhite'
                            : 'bg-deepBlack/50 text-offWhite border-white/10 hover:border-white/40'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description snippet */}
                <p className="mt-5 text-xs text-lightGray/80 leading-relaxed font-sans line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-offWhite hover:bg-white text-deepBlack py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3.5 border transition-colors ${
                      inWish
                        ? 'border-red-500/50 bg-red-500/10 text-red-400'
                        : 'border-white/10 hover:border-white/30 text-offWhite bg-deepBlack'
                    }`}
                    aria-label="Toggle wishlist"
                  >
                    <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <Link
                  to={`/product/${product.slug || product.id}`}
                  onClick={onClose}
                  className="block text-center font-mono text-xs uppercase tracking-widest text-lightGray hover:text-offWhite hover:underline pt-1"
                >
                  View Full Product Details →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

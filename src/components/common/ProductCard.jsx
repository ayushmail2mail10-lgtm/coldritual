import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import QuickViewModal from '../modals/QuickViewModal';

export default function ProductCard({ product, onOpenSizeGuide }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedQuickSize, setSelectedQuickSize] = useState(null);

  const inWish = isInWishlist(product.id);
  const hasSecondaryImage = product.images && product.images.length > 1;

  const handleQuickAdd = (e, size) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, size || product.sizes[0], product.colors[0]?.name, 1, true);
    setSelectedQuickSize(null);
  };

  return (
    <>
      <div
        className="group relative flex flex-col bg-deepBlack border border-white/5 hover:border-white/20 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setSelectedQuickSize(null);
        }}
      >
        {/* Visual Media Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
          <Link to={`/product/${product.slug || product.id}`} className="block w-full h-full">
            {/* Primary Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85';
              }}
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                hasSecondaryImage && isHovered ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Secondary Image for smooth streetwear hover swap */}
            {hasSecondaryImage && (
              <img
                src={product.images[1]}
                alt={`${product.name} alternate view`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = product.images[0] || 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85';
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.discount > 0 && (
              <span className="bg-white text-deepBlack text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                -{product.discount}%
              </span>
            )}
            {product.newDrop && (
              <span className="bg-deepBlack/80 border border-white/20 text-offWhite text-[9px] font-mono px-2 py-0.5 uppercase tracking-wider backdrop-blur-sm">
                DROP 01
              </span>
            )}
          </div>

          {/* Top Right: Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-none border transition-all duration-200 ${
              inWish
                ? 'bg-red-500/10 border-red-500/50 text-red-400'
                : 'bg-deepBlack/60 border-white/10 text-offWhite hover:bg-deepBlack hover:border-white/30'
            }`}
            aria-label="Wishlist toggle"
          >
            <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
          </button>

          {/* Quick Actions Overlay Bar on Desktop */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-deepBlack/95 via-deepBlack/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2 z-10">
            {selectedQuickSize ? (
              <div className="bg-softBlack/95 border border-white/20 p-2 flex flex-col gap-1.5">
                <div className="text-[10px] font-mono uppercase text-lightGray flex justify-between">
                  <span>Select Size:</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedQuickSize(null);
                    }}
                    className="text-white hover:underline"
                  >
                    Cancel
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={(e) => handleQuickAdd(e, s)}
                      className="py-1 bg-deepBlack border border-white/10 text-offWhite hover:bg-offWhite hover:text-deepBlack font-mono text-[11px] font-bold transition-colors"
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedQuickSize(true);
                  }}
                  className="flex-1 bg-offWhite text-deepBlack hover:bg-white py-2.5 px-3 font-mono text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors shadow-lg active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Quick Add</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsQuickViewOpen(true);
                  }}
                  className="bg-deepBlack/90 hover:bg-deepBlack border border-white/20 text-offWhite p-2.5 transition-colors"
                  aria-label="Quick preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="p-4 flex flex-col flex-1 justify-between gap-3">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-lightGray/70 uppercase tracking-widest mb-1">
              <span className="flex items-center gap-1.5">
                <span>{product.categoryLabel}</span>
                {product.gender && (
                  <>
                    <span className="text-white/20">•</span>
                    <span className="text-icyBlue/90 text-[10px]">{product.gender.toUpperCase()}</span>
                  </>
                )}
              </span>
              {product.stock <= 8 && (
                <span className="text-icyBlue text-[10px] lowercase font-sans">
                  only {product.stock} left
                </span>
              )}
            </div>

            <Link
              to={`/product/${product.slug || product.id}`}
              className="font-display font-bold text-sm sm:text-base text-offWhite uppercase tracking-wide group-hover:text-white transition-colors block line-clamp-1"
            >
              {product.name}
            </Link>

            <p className="text-[11px] text-lightGray/60 font-mono mt-0.5 line-clamp-1">
              {product.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            {/* Strict INR Formatted Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm sm:text-base font-bold text-offWhite">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="font-mono text-xs text-lightGray/50 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Color Swatch Dots */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center gap-1.5">
                {product.colors.slice(0, 3).map((col, idx) => {
                  const hex = typeof col === 'string' ? '#181818' : (col?.hex || '#181818');
                  const name = typeof col === 'string' ? col : (col?.name || 'Standard');
                  return (
                    <span
                      key={idx}
                      className="w-2.5 h-2.5 rounded-full border border-white/20 block"
                      style={{ backgroundColor: hex }}
                      title={name}
                    />
                  );
                })}
                {product.colors.length > 3 && (
                  <span className="text-[10px] font-mono text-lightGray/50">
                    +{product.colors.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onOpenSizeGuide={onOpenSizeGuide}
      />
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

export default function Wishlist() {
  const { wishlistItems, wishlistCount, removeFromWishlist, moveToCart } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAllToCart = () => {
    wishlistItems.forEach(item => {
      addToCart(item, item.sizes[0], item.colors[0]?.name, 1, false);
      removeFromWishlist(item.id);
    });
  };

  if (wishlistCount === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-deepBlack text-offWhite">
        <Heart className="w-16 h-16 text-lightGray/20 mb-4 stroke-1" />
        <h1 className="font-display font-black text-3xl uppercase tracking-wider text-offWhite mb-2">
          YOUR WISHLIST IS EMPTY
        </h1>
        <p className="font-mono text-xs text-lightGray/70 max-w-sm mb-8">
          You haven't saved any ritual pieces yet. Tap the heart insignia on any item to save it for later.
        </p>
        <Link
          to="/shop"
          className="bg-offWhite hover:bg-white text-deepBlack px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest transition-transform active:scale-95 shadow-xl"
        >
          Explore Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-white/10 gap-4">
          <div>
            <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
              SAVED ARCHIVE
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-offWhite mt-1">
              WISHLIST ({wishlistCount})
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddAllToCart}
              className="bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-6 py-3 transition-transform active:scale-95 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Move All to Cart</span>
            </button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-softBlack border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <Link to={`/product/${product.slug || product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-deepBlack/80 hover:bg-deepBlack text-red-400 border border-white/10 transition-colors"
                  aria-label="Remove from wishlist"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Info & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-lightGray/60 uppercase">
                    {product.categoryLabel}
                  </div>
                  <Link
                    to={`/product/${product.slug || product.id}`}
                    className="font-display font-bold text-base text-offWhite uppercase tracking-wide hover:text-white block mt-0.5 truncate"
                  >
                    {product.name}
                  </Link>

                  <div className="mt-2 flex items-baseline gap-2 font-mono">
                    <span className="text-base font-bold text-offWhite">
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-lightGray/50 line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => moveToCart(product, product.sizes[0], product.colors[0]?.name)}
                    className="w-full bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-3 px-4 flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Move to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

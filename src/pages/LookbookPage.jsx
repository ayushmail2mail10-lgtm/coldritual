import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag, Eye, MapPin, Sparkles } from 'lucide-react';
import { lookbooks } from '../data/lookbook';
import { getProductById } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';
import QuickViewModal from '../components/modals/QuickViewModal';

export default function LookbookPage() {
  const { addToCart } = useCart();
  const [selectedQuickProduct, setSelectedQuickProduct] = useState(null);

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-16 pb-8 border-b border-white/10 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-icyBlue uppercase tracking-[0.3em] block mb-3">
            EDITORIAL ARCHIVES // 2026
          </span>
          <h1 className="font-display font-black text-4xl sm:text-7xl uppercase tracking-wider text-offWhite">
            LOOKBOOK
          </h1>
          <p className="font-display font-bold text-lg sm:text-xl uppercase tracking-widest text-lightGray mt-2">
            VOLUME 01: THE ARCHIVAL RITUAL
          </p>
          <p className="font-sans text-xs sm:text-sm text-lightGray/70 mt-4 leading-relaxed font-light">
            Documenting the raw convergence of brutalist architecture and contemporary Indian youth subculture. Photographed across Bombay docks, Koramangala warehouses, and Delhi sub-levels.
          </p>
        </div>

        {/* Lookbook Entries */}
        <div className="space-y-28">
          {lookbooks.map((look, idx) => {
            const featuredProducts = look.productIds
              .map(id => getProductById(id))
              .filter(Boolean);

            const isEven = idx % 2 === 0;

            return (
              <article
                key={look.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Images Container */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/5] sm:aspect-[16/11] bg-neutral-900 border border-white/10 overflow-hidden group">
                    <img
                      src={look.image}
                      alt={look.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 font-mono text-[10px] text-lightGray/60 uppercase tracking-widest bg-deepBlack/70 px-3 py-1 backdrop-blur-sm border border-white/10">
                      LOOK // 0{idx + 1}
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-xs text-lightGray bg-deepBlack/80 px-3 py-1.5 backdrop-blur-sm border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-icyBlue" />
                      <span>{look.location}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Meta & Shoppable Products */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="font-mono text-xs text-icyBlue uppercase tracking-widest block mb-1">
                      {look.collection} • {look.season}
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite">
                      {look.title}
                    </h2>
                    <p className="font-mono text-[11px] text-lightGray/60 mt-1">
                      Model: {look.model}
                    </p>
                  </div>

                  <p className="text-sm font-sans text-lightGray/80 leading-relaxed font-light">
                    {look.description}
                  </p>

                  <div className="p-4 bg-softBlack border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-lightGray/60 uppercase tracking-widest block">
                      Styling Composition:
                    </span>
                    <p className="font-mono text-xs text-offWhite">{look.outfitNotes}</p>
                  </div>

                  {/* Shoppable Products in this Look */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-lightGray/70 mb-3 flex items-center gap-2">
                      <ShoppingBag className="w-3.5 h-3.5 text-icyBlue" />
                      <span>Shop The Garments in This Look:</span>
                    </div>

                    <div className="space-y-2.5">
                      {featuredProducts.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-3 bg-deepBlack border border-white/10 hover:border-white/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-14 bg-neutral-900 overflow-hidden flex-shrink-0">
                              <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="font-mono text-xs">
                              <div className="font-display font-bold uppercase text-offWhite">
                                {p.name}
                              </div>
                              <div className="text-lightGray/60 text-[10px]">
                                {formatCurrency(p.price)}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedQuickProduct(p)}
                              className="border border-white/20 hover:border-offWhite px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-offWhite transition-colors"
                            >
                              Quick Add
                            </button>
                            <Link
                              to={`/product/${p.slug || p.id}`}
                              className="p-1.5 text-lightGray hover:text-white"
                              aria-label="View product"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedQuickProduct && (
        <QuickViewModal
          product={selectedQuickProduct}
          isOpen={Boolean(selectedQuickProduct)}
          onClose={() => setSelectedQuickProduct(null)}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, Plus, RefreshCw, Sparkles, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

export default function OutfitBuilder() {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Filter top and bottom products
  const topProducts = products.filter(p =>
    ['oversized-t-shirts', 't-shirts', 'shirts', 'sweatshirts', 'hoodies'].includes(p.category)
  );

  const bottomProducts = products.filter(p =>
    ['baggy-jeans', 'cargo-pants'].includes(p.category)
  );

  // Active selections
  const [selectedTop, setSelectedTop] = useState(topProducts[0]);
  const [selectedTopSize, setSelectedTopSize] = useState(topProducts[0].sizes[0]);
  const [selectedTopColor, setSelectedTopColor] = useState(topProducts[0].colors[0]?.name);

  const [selectedBottom, setSelectedBottom] = useState(bottomProducts[0]);
  const [selectedBottomSize, setSelectedBottomSize] = useState(bottomProducts[0].sizes[0]);
  const [selectedBottomColor, setSelectedBottomColor] = useState(bottomProducts[0].colors[0]?.name);

  // Bundle pricing logic
  const originalComboTotal = selectedTop.price + selectedBottom.price;
  // 10% bundle discount automatically rewarded
  const bundleDiscount = Math.round(originalComboTotal * 0.10);
  const bundleFinalTotal = originalComboTotal - bundleDiscount;

  const handleAddEntireFit = () => {
    // Add top to cart
    addToCart(selectedTop, selectedTopSize, selectedTopColor, 1, false);
    // Add bottom to cart and open drawer
    addToCart(selectedBottom, selectedBottomSize, selectedBottomColor, 1, true);
    showToast('COMPLETE RITUAL FIT ADDED TO CART WITH 10% BUNDLE BENEFIT!', 'success');
  };

  const handleRandomize = () => {
    const randomTop = topProducts[Math.floor(Math.random() * topProducts.length)];
    const randomBottom = bottomProducts[Math.floor(Math.random() * bottomProducts.length)];
    setSelectedTop(randomTop);
    setSelectedTopSize(randomTop.sizes[0]);
    setSelectedTopColor(randomTop.colors[0]?.name);

    setSelectedBottom(randomBottom);
    setSelectedBottomSize(randomBottom.sizes[0]);
    setSelectedBottomColor(randomBottom.colors[0]?.name);
    showToast('NEW RITUAL FIT RANDOMIZED', 'info');
  };

  return (
    <div className="space-y-12">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-softBlack border border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-icyBlue">
          <Sparkles className="w-4 h-4" />
          <span className="uppercase tracking-widest font-semibold">
            Interactive Dual-Piece Streetwear Synthesizer
          </span>
        </div>
        <button
          onClick={handleRandomize}
          className="inline-flex items-center gap-2 border border-white/20 hover:border-offWhite px-4 py-2 uppercase tracking-widest text-offWhite hover:bg-white/5 transition-colors self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Randomize Silhouette</span>
        </button>
      </div>

      {/* Main Grid: Selection Columns + Live Preview Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step 1 & 2 Selectors (7 Cols) */}
        <div className="lg:col-span-7 space-y-10">
          {/* STEP 1: CHOOSE TOP */}
          <div className="bg-softBlack border border-white/10 p-6 sm:p-7">
            <div className="flex justify-between items-center pb-4 mb-5 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-icyBlue uppercase tracking-widest">
                  STEP 01
                </span>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-offWhite">
                  SELECT TOP LAYER
                </h3>
              </div>
              <span className="font-mono text-xs text-lightGray/70">
                {topProducts.length} Silhouettes Available
              </span>
            </div>

            {/* Horizontal Product Picker */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-1">
              {topProducts.map((p) => {
                const isSelected = selectedTop.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedTop(p);
                      setSelectedTopSize(p.sizes[0]);
                      setSelectedTopColor(p.colors[0]?.name);
                    }}
                    className={`relative p-2.5 text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-deepBlack border-icyBlue shadow-lg'
                        : 'bg-deepBlack/50 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="aspect-square w-full overflow-hidden bg-neutral-900 mb-2">
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-offWhite truncate">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-mono text-lightGray/60 truncate">
                        {p.categoryLabel}
                      </div>
                      <div className="font-mono text-xs font-bold text-offWhite mt-1">
                        {formatCurrency(p.price)}
                      </div>
                    </div>
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-5 h-5 bg-icyBlue text-deepBlack rounded-full flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Top Specs */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-lightGray/60 uppercase">Top Size:</span>
                <div className="flex gap-1">
                  {selectedTop.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedTopSize(s)}
                      className={`px-2.5 py-1 text-xs uppercase border transition-colors ${
                        selectedTopSize === s
                          ? 'bg-offWhite text-deepBlack font-bold border-offWhite'
                          : 'border-white/10 text-offWhite hover:border-white/40'
                      }`}
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lightGray/60 uppercase">Color:</span>
                <span className="text-offWhite font-semibold">{selectedTopColor}</span>
              </div>
            </div>
          </div>

          {/* STEP 2: CHOOSE BOTTOM */}
          <div className="bg-softBlack border border-white/10 p-6 sm:p-7">
            <div className="flex justify-between items-center pb-4 mb-5 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-icyBlue uppercase tracking-widest">
                  STEP 02
                </span>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-offWhite">
                  SELECT BOTTOM LAYER
                </h3>
              </div>
              <span className="font-mono text-xs text-lightGray/70">
                {bottomProducts.length} Silhouettes Available
              </span>
            </div>

            {/* Horizontal Product Picker */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-1">
              {bottomProducts.map((p) => {
                const isSelected = selectedBottom.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedBottom(p);
                      setSelectedBottomSize(p.sizes[0]);
                      setSelectedBottomColor(p.colors[0]?.name);
                    }}
                    className={`relative p-2.5 text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-deepBlack border-icyBlue shadow-lg'
                        : 'bg-deepBlack/50 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="aspect-square w-full overflow-hidden bg-neutral-900 mb-2">
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-offWhite truncate">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-mono text-lightGray/60 truncate">
                        {p.categoryLabel}
                      </div>
                      <div className="font-mono text-xs font-bold text-offWhite mt-1">
                        {formatCurrency(p.price)}
                      </div>
                    </div>
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-5 h-5 bg-icyBlue text-deepBlack rounded-full flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Bottom Specs */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-lightGray/60 uppercase">Bottom Size:</span>
                <div className="flex gap-1">
                  {selectedBottom.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedBottomSize(s)}
                      className={`px-2.5 py-1 text-xs uppercase border transition-colors ${
                        selectedBottomSize === s
                          ? 'bg-offWhite text-deepBlack font-bold border-offWhite'
                          : 'border-white/10 text-offWhite hover:border-white/40'
                      }`}
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lightGray/60 uppercase">Color:</span>
                <span className="text-offWhite font-semibold">{selectedBottomColor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3: LIVE FIT CANVAS & BUNDLE SUMMARY (5 Cols) */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="bg-softBlack border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10">
              <span className="font-mono text-[11px] text-icyBlue uppercase tracking-widest font-semibold">
                STEP 03 // COMPLETE FIT
              </span>
              <span className="bg-white/10 text-offWhite font-mono text-[10px] px-2 py-0.5 uppercase">
                COMBO VERIFIED
              </span>
            </div>

            {/* Visual Stacking Canvas */}
            <div className="space-y-3">
              {/* Selected Top */}
              <div className="flex gap-4 p-3 bg-deepBlack border border-white/5 items-center">
                <div className="w-16 h-20 bg-neutral-900 flex-shrink-0 overflow-hidden">
                  <img
                    src={selectedTop.images[0]}
                    alt={selectedTop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 font-mono text-xs">
                  <span className="text-[10px] text-lightGray/50 uppercase block">Selected Top</span>
                  <div className="font-display font-bold uppercase text-offWhite truncate text-sm">
                    {selectedTop.name}
                  </div>
                  <div className="text-lightGray/60 text-[11px]">
                    Size: {selectedTopSize} • {selectedTopColor}
                  </div>
                  <div className="font-bold text-offWhite mt-1">
                    {formatCurrency(selectedTop.price)}
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-white/30 py-0.5">
                <Plus className="w-4 h-4" />
              </div>

              {/* Selected Bottom */}
              <div className="flex gap-4 p-3 bg-deepBlack border border-white/5 items-center">
                <div className="w-16 h-20 bg-neutral-900 flex-shrink-0 overflow-hidden">
                  <img
                    src={selectedBottom.images[0]}
                    alt={selectedBottom.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 font-mono text-xs">
                  <span className="text-[10px] text-lightGray/50 uppercase block">Selected Bottom</span>
                  <div className="font-display font-bold uppercase text-offWhite truncate text-sm">
                    {selectedBottom.name}
                  </div>
                  <div className="text-lightGray/60 text-[11px]">
                    Size: {selectedBottomSize} • {selectedBottomColor}
                  </div>
                  <div className="font-bold text-offWhite mt-1">
                    {formatCurrency(selectedBottom.price)}
                  </div>
                </div>
              </div>
            </div>

            {/* Price Breakdown formatted in INR */}
            <div className="mt-6 pt-5 border-t border-white/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-lightGray">
                <span>Individual Sum</span>
                <span>{formatCurrency(originalComboTotal)}</span>
              </div>
              <div className="flex justify-between text-icyBlue font-semibold">
                <span>Bundle Discount (10% Off)</span>
                <span>-{formatCurrency(bundleDiscount)}</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>Pan-India Shipping</span>
                <span className="uppercase">FREE</span>
              </div>

              <div className="flex justify-between items-baseline pt-4 border-t border-white/10 text-offWhite">
                <span className="font-display uppercase font-bold text-sm tracking-wider">
                  Total Fit Price
                </span>
                <span className="font-mono text-xl font-bold text-offWhite">
                  {formatCurrency(bundleFinalTotal)}
                </span>
              </div>
            </div>

            {/* CTA: ADD ENTIRE FIT TO CART */}
            <div className="mt-6 pt-2">
              <button
                onClick={handleAddEntireFit}
                className="w-full bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-2 shadow-2xl transition-transform active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD ENTIRE FIT TO CART</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

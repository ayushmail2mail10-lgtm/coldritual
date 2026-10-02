import React, { useState, useMemo } from 'react';
import { getNewDropProducts } from '../data/products';
import ProductGrid from '../components/common/ProductGrid';
import SortDropdown from '../components/shop/SortDropdown';
import SizeGuideModal from '../components/modals/SizeGuideModal';
import { Sparkles } from 'lucide-react';

export default function NewDrops() {
  const [sortBy, setSortBy] = useState('featured');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const products = getNewDropProducts();

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [products, sortBy]);

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-icyBlue uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DROP 001 // RECENT RELEASES</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-offWhite">
                NEW DROPS
              </h1>
              <p className="text-lightGray/70 font-mono text-xs sm:text-sm mt-2 max-w-xl">
                Fresh drops featuring our 260 GSM single jersey t-shirts, 450 GSM winter armor hoodies, and 14.5 oz Japanese-weave baggy denim.
              </p>
            </div>
            <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>

        <ProductGrid
          products={sortedProducts}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}

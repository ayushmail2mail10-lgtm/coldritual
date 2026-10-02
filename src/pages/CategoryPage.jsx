import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { getProductsByCategory } from '../data/products';
import ProductGrid from '../components/common/ProductGrid';
import SortDropdown from '../components/shop/SortDropdown';
import SizeGuideModal from '../components/modals/SizeGuideModal';
import { Ruler, ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const categoryMeta = businessConfig.categories.find(c => c.slug === slug) || {
    id: slug,
    name: (slug || '').replace(/-/g, ' ').toUpperCase(),
    description: "Exclusive dropped silhouettes, heavyweight single-origin cottons and modular design.",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1400&q=80"
  };

  const rawProducts = getProductsByCategory(slug);

  const sortedProducts = useMemo(() => {
    return [...rawProducts].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.newDrop ? 1 : 0) - (a.newDrop ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [rawProducts, sortBy]);

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite">
      {/* Category Hero Banner */}
      <div className="relative py-20 sm:py-28 overflow-hidden border-b border-white/10 bg-neutral-950">
        <img
          src={categoryMeta.image}
          alt={categoryMeta.name}
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lightGray hover:text-offWhite mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Collections</span>
          </Link>

          <span className="font-mono text-xs text-icyBlue uppercase tracking-widest block mb-2">
            ARCHIVE DIVISION // 0{businessConfig.categories.findIndex(c => c.slug === slug) + 1 || 1}
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-offWhite max-w-3xl">
            {categoryMeta.name}
          </h1>

          <p className="text-lightGray/80 font-sans text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            {categoryMeta.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-offWhite bg-softBlack/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-offWhite transition-colors"
            >
              <Ruler className="w-4 h-4 text-icyBlue" />
              <span>View Category Size Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
          <span className="font-mono text-xs text-lightGray/70 uppercase">
            Showing {sortedProducts.length} Items in {categoryMeta.name}
          </span>
          <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        <ProductGrid
          products={sortedProducts}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={slug || 'tops'}
      />
    </div>
  );
}

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/common/ProductGrid';
import FilterSidebar from '../components/shop/FilterSidebar';
import SortDropdown from '../components/shop/SortDropdown';
import SizeGuideModal from '../components/modals/SizeGuideModal';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL query params
  const initialCategory = searchParams.get('category') || 'all';
  const initialGender = searchParams.get('gender') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const initialSaleOnly = searchParams.get('sale') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedGender, setSelectedGender] = useState(initialGender);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [saleOnly, setSaleOnly] = useState(initialSaleOnly);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Sync category and gender changes with URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
    const gen = searchParams.get('gender');
    if (gen && gen !== selectedGender) {
      setSelectedGender(gen);
    }
  }, [searchParams]);

  const handleCategoryChange = (catSlug) => {
    setSelectedCategory(catSlug);
    if (catSlug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catSlug);
    }
    setSearchParams(searchParams);
  };

  const handleGenderChange = (gen) => {
    setSelectedGender(gen);
    if (gen === 'all') {
      searchParams.delete('gender');
    } else {
      searchParams.set('gender', gen);
    }
    setSearchParams(searchParams);
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedGender('all');
    setSelectedPriceRange('all');
    setSelectedSizes([]);
    setSaleOnly(false);
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Gender filter
      if (selectedGender !== 'all' && product.gender && product.gender !== selectedGender && product.gender !== 'unisex') {
        return false;
      }

      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Price filter in INR
      if (selectedPriceRange === 'under-1000' && product.price >= 1000) return false;
      if (selectedPriceRange === '1000-2000' && (product.price < 1000 || product.price > 2000)) return false;
      if (selectedPriceRange === '2000-3000' && (product.price < 2000 || product.price > 3000)) return false;
      if (selectedPriceRange === 'above-3000' && product.price <= 3000) return false;

      // Size filter
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes.some(s =>
          selectedSizes.some(selected => s.startsWith(selected))
        );
        if (!hasSize) return false;
      }

      // Sale filter
      if (saleOnly && (!product.sale || product.discount === 0)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.newDrop ? 1 : 0) - (a.newDrop ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, selectedPriceRange, selectedSizes, saleOnly, sortBy]);

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10 pb-6 border-b border-white/10">
          <div className="text-[11px] font-mono text-lightGray/60 uppercase tracking-widest mb-2">
            Catalog // All Streetwear Releases
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-offWhite">
                COLD RITUAL ARCHIVE
              </h1>
              {searchQuery && (
                <p className="text-xs font-mono text-icyBlue mt-2">
                  Showing results for "{searchQuery}"
                </p>
              )}
            </div>

            {/* Mobile Filter Trigger + Sort */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-softBlack border border-white/20 text-offWhite px-4 py-2 font-mono text-xs uppercase"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters ({filteredProducts.length})</span>
              </button>

              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>
        </div>

        {/* Content Layout: Sidebar + Product Grid */}
        <div className="flex">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            selectedGender={selectedGender}
            onGenderChange={handleGenderChange}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={setSelectedPriceRange}
            selectedSizes={selectedSizes}
            onSizeToggle={handleSizeToggle}
            saleOnly={saleOnly}
            onSaleOnlyToggle={setSaleOnly}
            onResetFilters={handleResetFilters}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
            totalMatching={filteredProducts.length}
          />

          <main className="flex-1 min-w-0">
            {/* Active Filters Pill Bar */}
            {(selectedCategory !== 'all' || selectedGender !== 'all' || selectedPriceRange !== 'all' || selectedSizes.length > 0 || saleOnly || searchQuery) && (
              <div className="mb-6 flex flex-wrap items-center gap-2 p-3 bg-softBlack/60 border border-white/5 font-mono text-[11px]">
                <span className="text-lightGray/50 uppercase">Active Filters:</span>
                {selectedGender !== 'all' && (
                  <span className="bg-icyBlue/10 border border-icyBlue/30 text-icyBlue px-2.5 py-1 uppercase font-semibold">
                    Division: {selectedGender}
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="bg-white/10 px-2.5 py-1 text-offWhite uppercase">
                    Cat: {selectedCategory}
                  </span>
                )}
                {selectedPriceRange !== 'all' && (
                  <span className="bg-white/10 px-2.5 py-1 text-offWhite uppercase">
                    Price: {selectedPriceRange}
                  </span>
                )}
                {selectedSizes.map(s => (
                  <span key={s} className="bg-white/10 px-2.5 py-1 text-offWhite uppercase">
                    Size: {s}
                  </span>
                ))}
                {saleOnly && (
                  <span className="bg-white/10 px-2.5 py-1 text-icyBlue uppercase font-semibold">
                    On Sale
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-white/10 px-2.5 py-1 text-offWhite">
                    "{searchQuery}"
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-lightGray hover:text-white underline ml-auto uppercase text-[10px]"
                >
                  Clear All
                </button>
              </div>
            )}

            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
              onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            />
          </main>
        </div>
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}

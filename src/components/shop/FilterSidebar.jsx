import React from 'react';
import { X, RotateCcw, Filter, Check } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { formatCurrency } from '../../utils/formatCurrency';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-1000', label: 'Under ₹1,000', max: 1000 },
  { id: '1000-2000', label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { id: '2000-3000', label: '₹2,000 – ₹3,000', min: 2000, max: 3000 },
  { id: 'above-3000', label: 'Above ₹3,000', min: 3000 },
];

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  selectedGender = 'all',
  onGenderChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedSizes,
  onSizeToggle,
  saleOnly,
  onSaleOnlyToggle,
  onResetFilters,
  isOpenMobile,
  onCloseMobile,
  totalMatching,
}) {
  const content = (
    <div className="space-y-8 font-mono text-xs">
      {/* Gender Division Section */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-lightGray/60 mb-3 pb-1 border-b border-white/5 flex justify-between">
          <span>Division</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { id: 'all', label: 'All' },
            { id: 'men', label: 'Men' },
            { id: 'women', label: 'Women' }
          ].map((g) => (
            <button
              key={g.id}
              onClick={() => onGenderChange && onGenderChange(g.id)}
              className={`py-1.5 px-1 text-center uppercase text-[11px] font-mono transition-colors rounded-none border ${
                selectedGender === g.id
                  ? 'bg-offWhite text-deepBlack font-bold border-offWhite'
                  : 'bg-white/5 text-lightGray hover:text-offWhite hover:bg-white/10 border-white/10'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Section */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-lightGray/60 mb-3 pb-1 border-b border-white/5 flex justify-between">
          <span>Categories</span>
        </div>
        <div className="space-y-1.5">
          <button
            onClick={() => onCategoryChange('all')}
            className={`w-full text-left py-1 px-2 uppercase text-xs transition-colors flex items-center justify-between ${
              selectedCategory === 'all'
                ? 'bg-offWhite text-deepBlack font-bold'
                : 'text-lightGray hover:text-offWhite hover:bg-white/5'
            }`}
          >
            <span>All Categories</span>
          </button>
          {businessConfig.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.slug)}
              className={`w-full text-left py-1 px-2 uppercase text-xs transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? 'bg-offWhite text-deepBlack font-bold'
                  : 'text-lightGray hover:text-offWhite hover:bg-white/5'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Section strictly formatted in INR */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-lightGray/60 mb-3 pb-1 border-b border-white/5">
          <span>Price (INR)</span>
        </div>
        <div className="space-y-1.5">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-2.5 text-lightGray hover:text-offWhite cursor-pointer py-1"
            >
              <input
                type="radio"
                name="priceRange"
                checked={selectedPriceRange === range.id}
                onChange={() => onPriceRangeChange(range.id)}
                className="w-3.5 h-3.5 accent-icyBlue bg-deepBlack border-white/20"
              />
              <span className={selectedPriceRange === range.id ? 'text-offWhite font-semibold' : ''}>
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-lightGray/60 mb-3 pb-1 border-b border-white/5">
          <span>Size</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((sz) => {
            const isSelected = selectedSizes.includes(sz);
            return (
              <button
                key={sz}
                onClick={() => onSizeToggle(sz)}
                className={`py-2 text-center text-xs font-mono uppercase transition-colors border ${
                  isSelected
                    ? 'bg-offWhite text-deepBlack font-bold border-offWhite'
                    : 'bg-deepBlack border-white/10 text-lightGray hover:border-white/30 hover:text-offWhite'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sale Only Toggle */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer py-2 border-t border-b border-white/5">
          <input
            type="checkbox"
            checked={saleOnly}
            onChange={(e) => onSaleOnlyToggle(e.target.checked)}
            className="w-4 h-4 accent-icyBlue bg-deepBlack border-white/20"
          />
          <span className="text-xs uppercase tracking-wide text-offWhite font-semibold">
            On Sale Items Only
          </span>
        </label>
      </div>

      {/* Reset Filters */}
      <div className="pt-2">
        <button
          onClick={onResetFilters}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-white/15 text-lightGray hover:text-offWhite hover:border-white/30 uppercase tracking-widest text-xs transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0 pr-8">
        <div className="sticky top-28 bg-softBlack/40 border border-white/5 p-5">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-offWhite">
              <Filter className="w-4 h-4" />
              <span>Filters ({totalMatching})</span>
            </div>
            <button
              onClick={onResetFilters}
              className="text-[10px] font-mono text-lightGray/60 hover:text-offWhite uppercase underline"
            >
              Clear
            </button>
          </div>
          {content}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative w-4/5 max-w-sm bg-softBlack border-r border-white/10 h-full p-6 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 font-display text-base uppercase text-offWhite font-bold">
                  <Filter className="w-4 h-4" />
                  <span>Filter Catalog</span>
                </div>
                <button
                  onClick={onCloseMobile}
                  className="p-1.5 text-lightGray hover:text-offWhite"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={onCloseMobile}
                className="w-full bg-offWhite text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-3 text-center"
              >
                Apply Filters ({totalMatching})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

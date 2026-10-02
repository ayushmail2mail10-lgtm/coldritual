import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { ShoppingBag } from 'lucide-react';

export default function ProductGrid({
  products = [],
  emptyMessage = "No ritual items found matching your filters.",
  onResetFilters,
  onOpenSizeGuide
}) {
  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center border border-white/5 bg-softBlack/40 p-8 my-8">
        <ShoppingBag className="w-12 h-12 text-lightGray/40 mb-4 stroke-1" />
        <h3 className="font-display uppercase tracking-widest text-lg text-offWhite mb-2">
          VOID SEARCH
        </h3>
        <p className="text-lightGray/70 font-mono text-xs max-w-md mb-6">
          {emptyMessage}
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="border border-white/20 hover:border-offWhite text-offWhite px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenSizeGuide={onOpenSizeGuide}
        />
      ))}
    </div>
  );
}

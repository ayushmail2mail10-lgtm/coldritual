import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest Releases' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function SortDropdown({ sortBy, onSortChange }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-lightGray">
      <ArrowUpDown className="w-3.5 h-3.5 text-lightGray/60" />
      <span className="hidden sm:inline uppercase text-lightGray/70">Sort By:</span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-softBlack border border-white/10 text-offWhite py-1.5 px-3 uppercase text-xs font-mono focus:outline-none focus:border-white/30 cursor-pointer"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-softBlack text-offWhite">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

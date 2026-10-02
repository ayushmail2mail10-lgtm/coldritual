import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryCard({ category, index }) {
  return (
    <Link
      to={category.path}
      className="group relative overflow-hidden bg-neutral-900 border border-white/5 block aspect-[4/5] sm:aspect-[3/4]"
    >
      {/* Background Category Image */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
      />

      {/* Editorial Gradient & Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

      {/* Top index number */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-lightGray/60 tracking-widest uppercase">
        CAT // 0{index + 1}
      </div>

      {/* Floating Arrow icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-none border border-white/20 bg-deepBlack/50 backdrop-blur-sm flex items-center justify-center text-offWhite group-hover:bg-offWhite group-hover:text-deepBlack transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>

      {/* Bottom Category Info */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end">
        <h3 className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-offWhite uppercase tracking-wide group-hover:text-white transition-colors">
          {category.name}
        </h3>
        <p className="text-lightGray/70 font-mono text-[11px] mt-1 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
        <div className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-icyBlue">
          <span>Shop Category</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Flame, Eye, ArrowUpRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/common/ProductGrid';
import CategoryCard from '../components/common/CategoryCard';
import LimitedDrop from '../components/home/LimitedDrop';
import BuildYourFitPromo from '../components/home/BuildYourFitPromo';
import CommunitySection from '../components/home/CommunitySection';
import SizeGuideModal from '../components/modals/SizeGuideModal';
import { getNewDropProducts, getTrendingProducts } from '../data/products';
import { businessConfig } from '../config/businessConfig';
import { lookbooks } from '../data/lookbook';
import { formatCurrency } from '../utils/formatCurrency';

export default function Home() {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const newDropProducts = getNewDropProducts().slice(0, 8);
  const trendingProducts = getTrendingProducts().slice(0, 4);
  const featuredLook = lookbooks[0];

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite">
      {/* 1. HERO CAMPAIGN */}
      <Hero />

      {/* 2. INFINITE MARQUEE TICKER */}
      <div className="border-y border-white/10 bg-softBlack/80 py-3 overflow-hidden select-none whitespace-nowrap">
        <div className="flex animate-marquee text-xs font-mono tracking-ultra uppercase text-offWhite/80">
          <span className="mx-6">COLD RITUAL // WEAR THE RITUAL</span>
          <span className="mx-6 text-icyBlue">✦ DROP 01 LIVE</span>
          <span className="mx-6">100% HEAVYWEIGHT COMBED COTTON</span>
          <span className="mx-6 text-icyBlue">✦ FREE EXPRESS SHIPPING OVER ₹1,999</span>
          <span className="mx-6">ARCHITECTURAL STREETWEAR SILHOUETTES</span>
          <span className="mx-6 text-icyBlue">✦ PAN-INDIA EXPRESS AIR</span>
          <span className="mx-6">COLD RITUAL // WEAR THE RITUAL</span>
          <span className="mx-6 text-icyBlue">✦ DROP 01 LIVE</span>
          <span className="mx-6">100% HEAVYWEIGHT COMBED COTTON</span>
          <span className="mx-6 text-icyBlue">✦ FREE EXPRESS SHIPPING OVER ₹1,999</span>
          <span className="mx-6">ARCHITECTURAL STREETWEAR SILHOUETTES</span>
          <span className="mx-6 text-icyBlue">✦ PAN-INDIA EXPRESS AIR</span>
        </div>
      </div>

      {/* 3. NEW DROP SECTION */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-icyBlue uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESH RELEASE // DROP 01</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite">
              NEW DROP
            </h2>
            <p className="text-lightGray/70 font-mono text-xs mt-1">
              Bespoke heavy weaves, engineered drop shoulders, and custom hardware.
            </p>
          </div>

          <Link
            to="/new-drops"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-offWhite hover:text-white border border-white/20 hover:border-offWhite px-5 py-2.5 transition-colors self-start sm:self-auto"
          >
            <span>View All New Drops</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6–8 New Drop Products */}
        <ProductGrid
          products={newDropProducts}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />
      </section>

      {/* 4. SHOP BY CATEGORY SECTION */}
      <section className="py-20 md:py-28 bg-softBlack/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-white/10 gap-4">
            <div>
              <span className="font-mono text-xs text-lightGray/60 uppercase tracking-widest">
                ARCHIVAL CATEGORIES
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite mt-1">
                SHOP BY CATEGORY
              </h2>
            </div>
            <p className="text-lightGray/70 font-mono text-xs max-w-sm">
              7 distinct silhouettes designed for high-contrast subcontinental styling.
            </p>
          </div>

          {/* Large Visual Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {businessConfig.categories.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRENDING NOW SECTION */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-icyBlue uppercase tracking-widest mb-1">
              <Flame className="w-3.5 h-3.5" />
              <span>COMMUNITY FAVORITES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite">
              TRENDING NOW
            </h2>
            <p className="text-lightGray/70 font-mono text-xs mt-1">
              Top reviewed pieces moving fastest through the warehouse this week.
            </p>
          </div>

          <Link
            to="/trending"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-offWhite hover:text-white border border-white/20 hover:border-offWhite px-5 py-2.5 transition-colors self-start sm:self-auto"
          >
            <span>Explore Trending</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid
          products={trendingProducts}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />
      </section>

      {/* 6. LIMITED DROP WITH LIVE COUNTDOWN TIMER */}
      <LimitedDrop />

      {/* 7. BUILD YOUR FIT INTERACTIVE PROMOTION */}
      <BuildYourFitPromo />

      {/* 8. LOOKBOOK CAMPAIGN PREVIEW */}
      {featuredLook && (
        <section className="py-20 md:py-28 bg-deepBlack border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Canvas */}
              <div className="lg:col-span-7 relative group overflow-hidden border border-white/10 bg-neutral-900 aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={featuredLook.image}
                  alt={featuredLook.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 font-mono text-xs text-lightGray">
                  <span>{featuredLook.location}</span>
                </div>
              </div>

              {/* Editorial Description & Shop Look Link */}
              <div className="lg:col-span-5 space-y-6 lg:pl-6">
                <div className="text-xs font-mono text-icyBlue uppercase tracking-widest">
                  EDITORIAL // {featuredLook.collection}
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite">
                  {featuredLook.title}
                </h2>
                <p className="text-lightGray/80 font-sans text-sm leading-relaxed">
                  {featuredLook.description}
                </p>
                <div className="p-4 bg-softBlack border border-white/5 font-mono text-xs text-lightGray space-y-1">
                  <div className="text-offWhite uppercase font-semibold">Featured Garments:</div>
                  <div>{featuredLook.outfitNotes}</div>
                </div>
                <Link
                  to="/lookbook"
                  className="inline-flex items-center gap-3 bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-transform active:scale-95"
                >
                  <span>VIEW FULL EDITORIAL LOOKBOOK</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. COMMUNITY ARCHIVE */}
      <CommunitySection />

      {/* Size Guide Modal helper */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}

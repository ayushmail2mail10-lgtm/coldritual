import React from 'react';
import OutfitBuilder from '../components/outfit/OutfitBuilder';
import { Sparkles, Layers, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BuildYourFitPage() {
  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lightGray hover:text-offWhite mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Catalog</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-icyBlue uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE EXPERIMENTAL LAB</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-offWhite">
                BUILD YOUR FIT
              </h1>
              <p className="font-display font-bold text-lg sm:text-xl uppercase tracking-widest text-icyBlue mt-2">
                CREATE THE FIT. OWN THE RITUAL.
              </p>
            </div>
            <p className="font-mono text-xs text-lightGray/70 max-w-md">
              Synthesize your complete top and bottom silhouette. Automatically unlocks an exclusive 10% bundle saving and complimentary Pan-India Express shipping.
            </p>
          </div>
        </div>

        {/* The Outfit Builder Component */}
        <OutfitBuilder />
      </div>
    </div>
  );
}

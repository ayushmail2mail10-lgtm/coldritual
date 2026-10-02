import React from 'react';
import { Sparkles, Shield, Compass, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header Manifesto */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-icyBlue uppercase tracking-[0.3em]">
            THE MANIFESTO // EST. 2026
          </span>
          <h1 className="font-display font-black text-4xl sm:text-7xl uppercase tracking-wider text-offWhite">
            COLD RITUAL
          </h1>
          <p className="font-display font-bold text-xl sm:text-2xl uppercase tracking-widest text-icyBlue">
            WEAR THE RITUAL.
          </p>
          <p className="font-sans text-sm sm:text-base text-lightGray/80 leading-relaxed font-light pt-2">
            Cold Ritual was born out of dissatisfaction with disposable fast fashion and uninspired graphic tees. We exist to define the brutalist streetwear standard for the Indian subcontinent.
          </p>
        </div>

        {/* Campaign Imagery */}
        <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=85"
            alt="Cold Ritual Editorial"
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-6 left-6 font-mono text-xs text-lightGray">
            STUDIO PROTOCOL // 01 • BENGALURU
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="bg-softBlack border border-white/10 p-6 sm:p-8 space-y-3">
            <Feather className="w-6 h-6 text-icyBlue" />
            <h3 className="font-display font-bold text-lg uppercase text-offWhite">
              240–450 GSM COTTONS
            </h3>
            <p className="font-mono text-xs text-lightGray/70 leading-relaxed">
              Every drop is woven from extra-long staple combed cotton. Heavyweight, bio-washed and pre-shrunk so collars never bacon and silhouettes never distort.
            </p>
          </div>

          <div className="bg-softBlack border border-white/10 p-6 sm:p-8 space-y-3">
            <Compass className="w-6 h-6 text-icyBlue" />
            <h3 className="font-display font-bold text-lg uppercase text-offWhite">
              ARCHITECTURAL CUTS
            </h3>
            <p className="font-mono text-xs text-lightGray/70 leading-relaxed">
              Dropped shoulders, wide armholes, and relaxed boxy cuts calculated specifically for Indian climate versatility, layering, and authentic sneaker stacking.
            </p>
          </div>

          <div className="bg-softBlack border border-white/10 p-6 sm:p-8 space-y-3">
            <Shield className="w-6 h-6 text-icyBlue" />
            <h3 className="font-display font-bold text-lg uppercase text-offWhite">
              PAN-INDIA GUILD
            </h3>
            <p className="font-mono text-xs text-lightGray/70 leading-relaxed">
              Crafted in Karnataka and Maharashtra mills, inspected manually in Bengaluru, and dispatched pan-India via express air logistics.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-white/10 space-y-4">
          <p className="font-mono text-xs text-lightGray uppercase tracking-widest">
            EXPERIENCE THE COLLECTION
          </p>
          <div>
            <Link
              to="/shop"
              className="inline-block bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-transform active:scale-95"
            >
              EXPLORE THE VAULT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

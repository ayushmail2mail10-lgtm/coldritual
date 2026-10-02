import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import CountdownTimer from '../common/CountdownTimer';

export default function LimitedDrop() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-deepBlack border-y border-white/10">
      {/* Background with Dark Atmospheric Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1800&q=80"
          alt="Limited Drop Void Collection"
          className="w-full h-full object-cover filter grayscale brightness-[0.25] contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deepBlack via-deepBlack/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-icyBlue font-mono text-xs uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" />
            <span>EXCLUSIVITY TIED TO TIME</span>
          </div>

          <div>
            <span className="font-mono text-xs tracking-widest text-lightGray/70 uppercase">
              ARCHIVAL DROP 002
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-offWhite mt-1">
              VOID COLLECTION
            </h2>
            <p className="text-lightGray/80 font-sans text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Strictly limited to 150 individually numbered garments pan-India. 500 GSM loopback terry, heavy metal industrial zippers, and 3M night-reflective ink. Once exhausted, the vault seals permanently.
            </p>
          </div>

          {/* Reusable Countdown Timer */}
          <div className="pt-2 pb-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-lightGray/50 mb-3">
              VAULT CLOSES IN:
            </div>
            <CountdownTimer targetHours={28} />
          </div>

          {/* CTA */}
          <div>
            <Link
              to="/new-drops"
              className="inline-flex items-center gap-3 bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-transform active:scale-95 shadow-2xl"
            >
              <span>SHOP THE DROP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

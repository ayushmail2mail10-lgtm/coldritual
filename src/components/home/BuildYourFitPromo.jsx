import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Plus, Sparkles } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

export default function BuildYourFitPromo() {
  return (
    <section className="py-20 md:py-28 bg-deepBlack border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Call to Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-icyBlue font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM OUTFIT BUILDER</span>
            </div>

            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-offWhite leading-none">
                BUILD YOUR FIT
              </h2>
              <p className="font-display font-bold text-xl sm:text-2xl uppercase tracking-widest text-icyBlue mt-3">
                CREATE THE FIT. OWN THE RITUAL.
              </p>
            </div>

            <p className="text-lightGray/80 font-sans text-sm sm:text-base leading-relaxed max-w-lg">
              Pair any heavyweight drop top with our wide-stacking baggy denim or parachute tactical cargos. Instant combo preview with an automatic 10% bundle saving and complimentary express delivery.
            </p>

            <div className="pt-2">
              <Link
                to="/build-your-fit"
                className="inline-flex items-center gap-3 bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-transform active:scale-95"
              >
                <span>BUILD YOUR FIT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Fit Preview Montage */}
          <div className="lg:col-span-6">
            <div className="bg-softBlack border border-white/10 p-6 sm:p-8 relative">
              <div className="text-[10px] font-mono uppercase tracking-widest text-lightGray/50 mb-4 flex justify-between">
                <span>COMBO PREVIEW // 01</span>
                <span className="text-icyBlue">10% BUNDLE APPLIED</span>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                {/* Top preview */}
                <div className="relative group border border-white/5 bg-deepBlack overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=600&q=80"
                    alt="Void Graphic Tee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-deepBlack/80 p-2 text-center backdrop-blur-sm">
                    <div className="font-display font-bold text-xs uppercase text-offWhite">
                      VOID // 01 TEE
                    </div>
                    <div className="font-mono text-[11px] text-lightGray">{formatCurrency(1299)}</div>
                  </div>
                </div>

                {/* Bottom preview */}
                <div className="relative group border border-white/5 bg-deepBlack overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=600&q=80"
                    alt="Utility Cargo Pants"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-deepBlack/80 p-2 text-center backdrop-blur-sm">
                    <div className="font-display font-bold text-xs uppercase text-offWhite">
                      UTILITY CARGO
                    </div>
                    <div className="font-mono text-[11px] text-lightGray">{formatCurrency(2299)}</div>
                  </div>
                </div>
              </div>

              {/* Equals Total Summary Bar */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-lightGray/60 block text-[10px] uppercase">Combo Set Total</span>
                  <span className="text-offWhite font-bold text-base">{formatCurrency(3238)}</span>
                  <span className="text-[10px] text-lightGray/40 line-through ml-2">{formatCurrency(3598)}</span>
                </div>
                <Link
                  to="/build-your-fit"
                  className="border border-white/20 hover:border-offWhite px-4 py-2 uppercase tracking-wider text-offWhite hover:bg-white/5 text-[11px] transition-colors"
                >
                  Configure Fit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

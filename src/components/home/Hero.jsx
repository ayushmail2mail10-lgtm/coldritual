import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-deepBlack">
      {/* Background Campaign Image with Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=2000&q=85"
          alt="Cold Ritual Streetwear Campaign"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-[0.45] scale-105 animate-pulse-subtle"
        />
        {/* Editorial vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/40 to-deepBlack/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-deepBlack/50 to-deepBlack" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/15 bg-deepBlack/60 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-icyBlue animate-ping" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-offWhite">
            VOID COLLECTION // DROP 01 NOW AVAILABLE
          </span>
        </motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] uppercase text-offWhite select-none"
        >
          COLD RITUAL
        </motion.h1>

        {/* Primary Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="font-display font-bold text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.25em] text-icyBlue mt-2 mb-4"
        >
          WEAR THE RITUAL.
        </motion.p>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="font-sans text-xs sm:text-sm md:text-base text-lightGray max-w-xl mx-auto font-light tracking-wide leading-relaxed mb-10"
        >
          Streetwear for those who create their own rules. Heavyweight 240–450 GSM cottons, dropped shoulders, and brutalist silhouettes built for the Indian underground.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/shop"
            className="w-full sm:w-auto bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-2xl"
          >
            <span>SHOP MEN</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            to="/shop"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-offWhite border border-white/30 hover:border-offWhite font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-3 transition-all active:scale-95"
          >
            <span>SHOP WOMEN</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-lightGray/40 text-[10px] font-mono tracking-widest uppercase pointer-events-none"
        >
          <span>EXPLORE ARCHIVE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-lightGray/60" />
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 bg-deepBlack text-offWhite">
      <div className="space-y-4 max-w-md">
        <span className="font-mono text-xs text-icyBlue uppercase tracking-[0.3em] block">
          404 // VOID DETECTED
        </span>
        <h1 className="font-display font-black text-6xl sm:text-8xl uppercase tracking-wider text-offWhite">
          NULL
        </h1>
        <p className="font-display font-bold text-lg uppercase tracking-widest text-lightGray">
          YOU HAVE ENTERED THE VOID
        </p>
        <p className="font-mono text-xs text-lightGray/70 leading-relaxed">
          The requested coordinate does not exist in the Cold Ritual directory or has been purged.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto bg-offWhite text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto border border-white/20 hover:border-offWhite text-offWhite font-mono text-xs uppercase tracking-widest px-6 py-3.5 transition-colors"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

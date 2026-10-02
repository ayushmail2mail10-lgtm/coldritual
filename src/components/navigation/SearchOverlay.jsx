import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, CornerDownLeft, Clock, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { formatCurrency } from '../../utils/formatCurrency';

const POPULAR_SEARCHES = [
  "Oversized Tee",
  "Parachute Cargo",
  "Frost Hoodie",
  "Baggy Jeans",
  "Washed Black",
  "450 GSM",
];

const RECENT_KEY = 'coldritual_recent_searches';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const saved = localStorage.getItem(RECENT_KEY);
      return saved ? JSON.parse(saved) : ["hoodie", "baggy denim", "oversized tee"];
    } catch (e) {
      return ["hoodie", "baggy denim", "oversized tee"];
    }
  });

  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const saveRecentSearch = (searchTerm) => {
    if (!searchTerm.trim()) return;
    const term = searchTerm.trim().toLowerCase();
    const updated = [term, ...recentSearches.filter(t => t.toLowerCase() !== term)].slice(0, 6);
    setRecentSearches(updated);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    } catch (e) {}
  };

  const handleSelectSearch = (term) => {
    setQuery(term);
    saveRecentSearch(term);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    saveRecentSearch(query);
    onClose();
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
  };

  // Filter products live
  const trimmed = query.trim().toLowerCase();
  const searchResults = trimmed
    ? products.filter((p) => {
        return (
          p.name.toLowerCase().includes(trimmed) ||
          p.subtitle.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.categoryLabel.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.fabric.toLowerCase().includes(trimmed)
        );
      }).slice(0, 8)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Search Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-8 pb-12 overflow-y-auto max-h-screen"
          >
            {/* Top Bar with Input & Close */}
            <div className="relative border-b-2 border-white/20 pb-4">
              <form onSubmit={handleFormSubmit} className="flex items-center gap-4">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-lightGray/60 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="SEARCH RITUAL CATALOG... (TEE, HOODIE, CARGO)"
                  className="w-full bg-transparent font-display font-bold text-lg sm:text-2xl md:text-3xl text-offWhite placeholder-lightGray/30 uppercase tracking-wider focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="p-1 text-lightGray hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 border border-white/10 hover:border-white/30 text-lightGray hover:text-white transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* If no query: show Popular & Recent */}
            {!query.trim() && (
              <div className="mt-8 space-y-8">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-lightGray/60 uppercase tracking-widest mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Recent Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((term, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectSearch(term)}
                          className="bg-deepBlack/80 border border-white/10 hover:border-white/30 px-3.5 py-1.5 font-mono text-xs text-offWhite hover:text-white uppercase transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-lightGray/60 uppercase tracking-widest mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-icyBlue" />
                    <span>Popular Drops & Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_SEARCHES.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectSearch(term)}
                        className="bg-white/5 border border-white/10 hover:border-icyBlue/50 hover:bg-white/10 px-4 py-2 font-mono text-xs text-offWhite hover:text-icyBlue uppercase tracking-wider transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Category Jump */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-mono text-lightGray/50 uppercase tracking-widest mb-3">
                    Direct Collections:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <Link
                      to="/category/oversized-t-shirts"
                      onClick={onClose}
                      className="p-3 bg-deepBlack border border-white/5 hover:border-white/20 text-lightGray hover:text-offWhite"
                    >
                      Oversized Tees →
                    </Link>
                    <Link
                      to="/category/hoodies"
                      onClick={onClose}
                      className="p-3 bg-deepBlack border border-white/5 hover:border-white/20 text-lightGray hover:text-offWhite"
                    >
                      Heavy Hoodies →
                    </Link>
                    <Link
                      to="/category/cargo-pants"
                      onClick={onClose}
                      className="p-3 bg-deepBlack border border-white/5 hover:border-white/20 text-lightGray hover:text-offWhite"
                    >
                      Tactical Cargos →
                    </Link>
                    <Link
                      to="/category/baggy-jeans"
                      onClick={onClose}
                      className="p-3 bg-deepBlack border border-white/5 hover:border-white/20 text-lightGray hover:text-offWhite"
                    >
                      Baggy Denim →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* If query has results */}
            {query.trim() && (
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-mono text-lightGray/60 uppercase tracking-widest pb-3 border-b border-white/10">
                  <span>Found {searchResults.length} Results for "{query}"</span>
                  {searchResults.length > 0 && (
                    <button
                      onClick={handleFormSubmit}
                      className="text-icyBlue hover:underline flex items-center gap-1"
                    >
                      <span>View all in Shop</span>
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {searchResults.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="font-display text-lg uppercase text-offWhite tracking-wide">
                      NO RITUAL PIECES FOUND
                    </p>
                    <p className="font-mono text-xs text-lightGray/60 mt-1 max-w-sm mx-auto">
                      We couldn't find items matching "{query}". Try checking our oversized tees, cargos, or heavyweight hoodies.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {searchResults.map((p) => (
                      <Link
                        key={p.id}
                        to={`/product/${p.slug || p.id}`}
                        onClick={() => {
                          saveRecentSearch(query);
                          onClose();
                        }}
                        className="flex items-center gap-4 p-3 bg-softBlack/80 border border-white/10 hover:border-white/30 transition-colors group"
                      >
                        <div className="w-16 h-20 bg-neutral-900 flex-shrink-0 overflow-hidden">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono uppercase text-lightGray/70">
                            {p.categoryLabel}
                          </div>
                          <div className="font-display font-bold text-sm text-offWhite uppercase truncate group-hover:text-white">
                            {p.name}
                          </div>
                          <div className="text-[11px] font-mono text-lightGray/60 truncate">
                            {p.subtitle}
                          </div>
                          <div className="mt-1 font-mono text-xs font-bold text-offWhite flex items-center gap-2">
                            <span>{formatCurrency(p.price)}</span>
                            {p.originalPrice > p.price && (
                              <span className="text-[10px] text-lightGray/40 line-through">
                                {formatCurrency(p.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-lightGray/40 group-hover:text-offWhite group-hover:translate-x-1 transition-all mr-2 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

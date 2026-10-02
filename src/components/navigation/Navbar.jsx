import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import SearchOverlay from './SearchOverlay';
import CartDrawer from '../cart/CartDrawer';
import { businessConfig } from '../../config/businessConfig';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SHOP', path: '/shop' },
    { label: 'NEW DROPS', path: '/new-drops', badge: 'DROP 01' },
    { label: 'TRENDING', path: '/trending' },
    { label: 'BUILD YOUR FIT', path: '/build-your-fit' },
    { label: 'LOOKBOOK', path: '/lookbook' },
    { label: 'SALE', path: '/sale', isSale: true },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-softBlack border-b border-white/10 text-offWhite py-1.5 px-4 text-[10px] sm:text-xs font-mono tracking-widest uppercase overflow-hidden">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4 animate-pulse-subtle">
            <span className="text-icyBlue font-bold">● LIVE DROP</span>
            <span>FREE EXPRESS SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹1,999</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-lightGray/70">
            <span>USE CODE: <strong className="text-offWhite font-semibold">RITUAL10</strong> FOR 10% OFF</span>
            <span>IN / INR (₹)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-deepBlack/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-deepBlack border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Left: Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-offWhite hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-offWhite hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link
              to="/"
              className="inline-block group font-display font-black text-xl sm:text-2xl tracking-[0.2em] uppercase text-offWhite hover:text-white transition-colors"
            >
              COLD RITUAL
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-icyBlue ml-1 group-hover:scale-125 transition-transform" />
            </Link>
          </div>

          {/* Desktop Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 text-xs font-mono tracking-widest uppercase transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-offWhite font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-offWhite'
                      : link.isSale
                      ? 'text-red-400 hover:text-red-300 font-semibold'
                      : 'text-lightGray hover:text-offWhite'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-white/10 text-[9px] px-1 py-0.2 text-icyBlue uppercase font-mono">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop & Mobile Right: Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Desktop Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 text-lightGray hover:text-offWhite p-2 transition-colors font-mono text-xs uppercase tracking-wider"
              aria-label="Open search overlay"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-[11px] text-lightGray/60">Search</span>
            </button>

            {/* Account Link */}
            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="p-2 text-lightGray hover:text-offWhite transition-colors relative"
              aria-label="User Account"
              title={isAuthenticated ? `Logged in as ${user?.name}` : "Login to Ritual"}
            >
              <User className="w-5 h-5" />
              {isAuthenticated && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-icyBlue" />
              )}
            </Link>

            {/* Wishlist Link with Badge */}
            <Link
              to="/wishlist"
              className="p-2 text-lightGray hover:text-offWhite transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-offWhite text-deepBlack font-mono font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button with Count Badge */}
            <button
              onClick={openCart}
              className="relative p-2 text-lightGray hover:text-offWhite transition-colors flex items-center"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-offWhite" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-icyBlue text-deepBlack font-mono font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-softBlack border-r border-white/10 h-full p-6 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-extrabold text-lg tracking-widest uppercase text-offWhite"
                >
                  COLD RITUAL
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-lightGray hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Nav Links */}
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block font-display text-lg uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-white font-bold pl-2 border-l-2 border-icyBlue'
                          : link.isSale
                          ? 'text-red-400 font-semibold'
                          : 'text-lightGray hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Category Links in Mobile */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-lightGray/50 mb-3">
                  All Categories
                </div>
                <div className="space-y-2.5">
                  {businessConfig.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={cat.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-xs font-mono text-lightGray hover:text-offWhite uppercase"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="w-3 h-3 text-lightGray/40" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-white/10 text-xs font-mono text-lightGray/60 space-y-2">
              <div className="flex justify-between items-center text-offWhite">
                <span>CURRENCY:</span>
                <span className="font-bold text-icyBlue">INR (₹)</span>
              </div>
              <p className="text-[11px] text-lightGray/50">
                Pan-India Express Delivery • 100% Combed Cotton
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />
    </>
  );
}

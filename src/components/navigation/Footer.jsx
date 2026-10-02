import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterIcon } from '../common/BrandIcons';
import { useToast } from '../../context/ToastContext';
import { businessConfig } from '../../config/businessConfig';
import SizeGuideModal from '../modals/SizeGuideModal';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('PLEASE ENTER A VALID EMAIL', 'error');
      return;
    }
    showToast('WELCOME TO THE RITUAL. CHECK YOUR INBOX FOR 10% OFF.', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-deepBlack border-t border-white/10 text-offWhite pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand Manifesto & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-[0.2em] text-offWhite">
              COLD RITUAL
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-icyBlue">
              WEAR THE RITUAL.
            </p>
            <p className="text-sm text-lightGray max-w-md font-sans leading-relaxed">
              Streetwear for those who create their own rules. Heavyweight 240–450 GSM cottons, architectural drop shoulders, and tactical hardware engineered for the Indian subcontinental street culture.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-lightGray/70">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Bengaluru Flagship Studio
              </span>
              <span>•</span>
              <span>Pan-India Air Express</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 lg:pl-8 flex flex-col justify-center">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-offWhite">
              JOIN THE RITUAL.
            </h3>
            <p className="text-xs text-lightGray font-mono mt-1 mb-4">
              Get first access to new drops, limited releases and exclusive secret promo codes.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL..."
                className="flex-1 bg-softBlack border border-white/15 px-4 py-3 text-xs font-mono text-offWhite placeholder-lightGray/40 uppercase focus:outline-none focus:border-offWhite transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-6 py-3 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <span className="text-[10px] text-lightGray/50 font-mono mt-2">
              By subscribing, you agree to our terms. No spam, ever. Unsubscribe anytime.
            </span>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-mono">
          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-offWhite uppercase tracking-widest font-bold text-sm mb-4">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-lightGray">
              <li>
                <Link to="/new-drops" className="hover:text-offWhite transition-colors">
                  New Drops (01)
                </Link>
              </li>
              <li>
                <Link to="/category/oversized-t-shirts" className="hover:text-offWhite transition-colors">
                  Oversized T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/category/t-shirts" className="hover:text-offWhite transition-colors">
                  Standard T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/category/shirts" className="hover:text-offWhite transition-colors">
                  Utility Shirts
                </Link>
              </li>
              <li>
                <Link to="/category/sweatshirts" className="hover:text-offWhite transition-colors">
                  Sweatshirts
                </Link>
              </li>
              <li>
                <Link to="/category/hoodies" className="hover:text-offWhite transition-colors">
                  450 GSM Hoodies
                </Link>
              </li>
              <li>
                <Link to="/category/baggy-jeans" className="hover:text-offWhite transition-colors">
                  Baggy Jeans
                </Link>
              </li>
              <li>
                <Link to="/category/cargo-pants" className="hover:text-offWhite transition-colors">
                  Tactical Cargo Pants
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Experience */}
          <div className="space-y-3">
            <h4 className="text-offWhite uppercase tracking-widest font-bold text-sm mb-4">
              Experience
            </h4>
            <ul className="space-y-2 text-lightGray">
              <li>
                <Link to="/build-your-fit" className="hover:text-offWhite transition-colors text-icyBlue">
                  Build Your Fit Builder
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="hover:text-offWhite transition-colors">
                  Editorial Lookbook
                </Link>
              </li>
              <li>
                <Link to="/trending" className="hover:text-offWhite transition-colors">
                  Trending Now
                </Link>
              </li>
              <li>
                <Link to="/sale" className="hover:text-red-400 transition-colors">
                  End of Season Archive Sale
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-offWhite transition-colors">
                  Brand Manifesto & Fabric
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="space-y-3">
            <h4 className="text-offWhite uppercase tracking-widest font-bold text-sm mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-lightGray">
              <li>
                <Link to="/contact" className="hover:text-offWhite transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/contact#faq" className="hover:text-offWhite transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/contact?issue=return" className="hover:text-offWhite transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-offWhite text-left transition-colors"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <Link to="/contact#faq" className="hover:text-offWhite transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Account & Social */}
          <div className="space-y-3">
            <h4 className="text-offWhite uppercase tracking-widest font-bold text-sm mb-4">
              Account & Social
            </h4>
            <ul className="space-y-2 text-lightGray">
              <li>
                <Link to="/account" className="hover:text-offWhite transition-colors">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-offWhite transition-colors">
                  Track Orders
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-offWhite transition-colors">
                  Saved Wishlist
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <div className="text-[10px] text-lightGray/60 uppercase tracking-widest mb-3">
                Connect
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={businessConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-lightGray hover:text-offWhite hover:border-white/40 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={businessConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-lightGray hover:text-offWhite hover:border-white/40 transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={businessConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-lightGray hover:text-offWhite hover:border-white/40 transition-colors"
                  aria-label="X / Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Currency */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-lightGray/60 gap-4">
          <p>© 2026 ColdRitual. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CURRENCY: <strong className="text-offWhite">INR (₹)</strong></span>
            <span>MADE IN INDIA</span>
            <span>SECURE PAYMENT: UPI / CARDS / COD</span>
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </footer>
  );
}

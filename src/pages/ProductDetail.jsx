import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  ShoppingBag,
  Ruler,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Share2
} from 'lucide-react';
import { getProductById, products } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import SizeGuideModal from '../components/modals/SizeGuideModal';
import ProductCard from '../components/common/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('fabric'); // 'fabric' | 'fit' | 'shipping' | 'reviews'

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImageIndex(0);
      setSelectedSize(product.sizes[0] || 'L');
      setSelectedColor(product.colors[0]?.name || 'Standard');
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-deepBlack text-offWhite">
        <h1 className="font-display font-black text-3xl uppercase tracking-wider mb-2">
          PRODUCT UNRECORDED
        </h1>
        <p className="font-mono text-xs text-lightGray/70 max-w-sm mb-6">
          The requested silhouette does not exist in the Cold Ritual archive or has been delisted.
        </p>
        <Link
          to="/shop"
          className="border border-white/20 hover:border-offWhite px-6 py-3 font-mono text-xs uppercase tracking-widest text-offWhite"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  const inWish = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity, true);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity, false);
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('PRODUCT LINK COPIED TO CLIPBOARD', 'info');
  };

  // Related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[11px] font-mono text-lightGray/60 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-offWhite">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-offWhite">Shop</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-offWhite">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-offWhite font-semibold truncate">{product.name}</span>
        </nav>

        {/* Product Showcase: Gallery + Purchase Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          {/* LEFT: IMAGE GALLERY (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main View with Zoom/Hover */}
            <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden border border-white/10 group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.discount > 0 && (
                  <span className="bg-white text-deepBlack font-mono font-bold text-xs px-2.5 py-1 tracking-wider uppercase">
                    -{product.discount}% OFF
                  </span>
                )}
                {product.newDrop && (
                  <span className="bg-deepBlack/80 border border-white/20 text-offWhite font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase backdrop-blur-sm">
                    DROP 01
                  </span>
                )}
              </div>

              {/* Share button */}
              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2 bg-deepBlack/60 hover:bg-deepBlack text-offWhite border border-white/10 backdrop-blur-sm transition-colors"
                aria-label="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 border overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-offWhite ring-1 ring-offWhite'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: CONFIGURATION & BUY COLUMN (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Verified Badge */}
              <div className="flex items-center justify-between text-xs font-mono text-lightGray/70 uppercase tracking-widest mb-1.5">
                <span>{product.categoryLabel}</span>
                <span className="flex items-center gap-1 text-icyBlue">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating} ({product.reviewsCount} reviews)</span>
                </span>
              </div>

              {/* Product Title & Subtitle */}
              <h1 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite">
                {product.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-lightGray/80 mt-1 mb-6">
                {product.subtitle}
              </p>

              {/* Price strictly INR */}
              <div className="flex items-baseline gap-3 pb-6 border-b border-white/10">
                <span className="font-mono text-3xl font-black text-offWhite">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="font-mono text-lg text-lightGray/50 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-white/10 text-icyBlue text-xs font-mono px-2 py-0.5 uppercase tracking-wider font-semibold">
                    SAVE {formatCurrency(product.originalPrice - product.price)}
                  </span>
                )}
              </div>

              {/* Color Swatches */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-lightGray uppercase">Select Colorway:</span>
                  <span className="text-offWhite font-semibold">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all ${
                        selectedColor === c.name
                          ? 'border-offWhite scale-110'
                          : 'border-transparent hover:border-white/40'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="w-full h-full rounded-full block border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector + Size Guide Modal Trigger */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-lightGray uppercase">Select Size:</span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="flex items-center gap-1.5 text-icyBlue hover:underline text-[11px]"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-3 text-xs font-mono uppercase tracking-wider transition-all border ${
                        selectedSize === s
                          ? 'bg-offWhite text-deepBlack font-bold border-offWhite'
                          : 'bg-deepBlack border-white/15 text-offWhite hover:border-white/50'
                      }`}
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-[10px] font-mono text-lightGray/60 flex items-center justify-between">
                  <span>Standard Indian Streetwear Boxy Fit</span>
                  {product.stock <= 8 && (
                    <span className="text-icyBlue font-semibold">Only {product.stock} units remaining</span>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-mono text-lightGray uppercase">Quantity:</span>
                <div className="flex items-center border border-white/15 bg-deepBlack font-mono text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-lightGray hover:text-white"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-offWhite font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="p-2 text-lightGray hover:text-white"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="mt-8 space-y-3">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-offWhite hover:bg-white text-deepBlack py-4 px-6 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-2xl"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-4 border transition-colors ${
                      inWish
                        ? 'border-red-500/50 bg-red-500/10 text-red-400'
                        : 'border-white/20 hover:border-white/40 text-offWhite bg-deepBlack'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`w-5 h-5 ${inWish ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full bg-softBlack hover:bg-neutral-900 border border-white/20 hover:border-offWhite text-offWhite py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors active:scale-[0.98]"
                >
                  BUY NOW • {formatCurrency(product.price * quantity)}
                </button>
              </div>

              {/* Value Props & Shipping Guarantees */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-[11px] font-mono text-lightGray">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-icyBlue flex-shrink-0" />
                  <span>Free Express Shipping Over ₹1,999</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 text-icyBlue flex-shrink-0" />
                  <span>7-Day Return / Exchange</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-icyBlue flex-shrink-0" />
                  <span>UPI & COD Supported</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-icyBlue flex-shrink-0" />
                  <span>100% Combed Compact Cotton</span>
                </div>
              </div>
            </div>

            {/* Accordion Specification Tabs */}
            <div className="mt-10 border-t border-white/10 divide-y divide-white/10 font-mono text-xs">
              {/* 1. Description & Notes */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'desc' ? '' : 'desc')}
                  className="w-full py-4 flex items-center justify-between text-left text-offWhite uppercase font-bold tracking-wider"
                >
                  <span>Product Narrative & Details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'desc' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'desc' && (
                  <div className="pb-4 text-lightGray/80 font-sans leading-relaxed text-xs space-y-2">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* 2. Fabric & Care */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'fabric' ? '' : 'fabric')}
                  className="w-full py-4 flex items-center justify-between text-left text-offWhite uppercase font-bold tracking-wider"
                >
                  <span>Fabric & Care Instructions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'fabric' && (
                  <div className="pb-4 text-lightGray/80 space-y-2 font-mono text-xs">
                    <p><strong className="text-offWhite">Specification:</strong> {product.fabric}</p>
                    <ul className="list-disc list-inside space-y-1 text-lightGray/70">
                      <li>Machine wash cold inside-out with dark colors.</li>
                      <li>Do not iron directly over rubberized or puff screenprints.</li>
                      <li>Hang dry in shade to preserve deep garment pigment.</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* 3. Fit Guide */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'fit' ? '' : 'fit')}
                  className="w-full py-4 flex items-center justify-between text-left text-offWhite uppercase font-bold tracking-wider"
                >
                  <span>Silhouette & Fit</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'fit' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'fit' && (
                  <div className="pb-4 text-lightGray/80 font-mono text-xs space-y-2">
                    <p><strong className="text-offWhite">Cut:</strong> {product.fit}</p>
                    <p className="text-lightGray/70">
                      Male model is 6'1" (185 cm) wearing size L. Female model is 5'9" (175 cm) wearing size M for an oversized drape.
                    </p>
                  </div>
                )}
              </div>

              {/* 4. Verified Reviews */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'reviews' ? '' : 'reviews')}
                  className="w-full py-4 flex items-center justify-between text-left text-offWhite uppercase font-bold tracking-wider"
                >
                  <span>Verified Ritual Reviews ({product.reviewsCount})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'reviews' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'reviews' && (
                  <div className="pb-4 space-y-3 font-sans text-xs">
                    {product.reviews && product.reviews.map((rev, i) => (
                      <div key={i} className="p-3 bg-softBlack border border-white/5 space-y-1">
                        <div className="flex items-center justify-between font-mono text-[10px] text-lightGray/60">
                          <span className="font-bold text-offWhite">{rev.author} (Verified Buyer)</span>
                          <span>{rev.date}</span>
                        </div>
                        <div className="flex text-icyBlue text-xs">
                          {"★".repeat(rev.rating)}
                        </div>
                        <p className="text-lightGray leading-relaxed">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h2 className="font-display font-black text-2xl uppercase tracking-wider text-offWhite">
                RELATED ARCHIVES
              </h2>
              <Link
                to={`/category/${product.category}`}
                className="font-mono text-xs uppercase tracking-widest text-lightGray hover:text-offWhite flex items-center gap-1"
              >
                <span>View More {product.categoryLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />
              ))}
            </div>
          </div>
        )}
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}

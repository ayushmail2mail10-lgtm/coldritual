import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, MapPin, Package, Heart, LogOut, Plus, Trash2, CheckCircle2, Shield, Edit, HelpCircle, Truck, RotateCcw, Ruler, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { useWishlist } from '../context/WishlistContext';
import SizeGuideModal from '../components/modals/SizeGuideModal';

export default function Account() {
  const { user, isAuthenticated, logout, addAddress, removeAddress, updateProfile } = useAuth();
  const { orders } = useOrders();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'addresses'
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [newAddr, setNewAddr] = useState({
    name: '',
    phone: '',
    street: '',
    landmark: '',
    city: '',
    state: 'Karnataka',
    pincode: '',
    isDefault: false,
  });

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-deepBlack text-offWhite">
        <User className="w-16 h-16 text-lightGray/20 mb-4 stroke-1" />
        <h1 className="font-display font-black text-2xl uppercase tracking-wider mb-2">
          PLEASE SIGN IN
        </h1>
        <p className="font-mono text-xs text-lightGray/70 max-w-sm mb-6">
          Access your personal ritual archive, saved delivery addresses and shipment tracker.
        </p>
        <Link
          to="/login"
          className="bg-offWhite text-deepBlack px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest"
        >
          Sign In
        </Link>
      </div>
    );
  }

  const handleCreateAddress = (e) => {
    e.preventDefault();
    if (!newAddr.name || !newAddr.street || !newAddr.city || !newAddr.pincode) return;
    addAddress(newAddr);
    setShowAddAddressModal(false);
    setNewAddr({
      name: '',
      phone: '',
      street: '',
      landmark: '',
      city: '',
      state: 'Karnataka',
      pincode: '',
      isDefault: false,
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-white/10 gap-4">
          <div>
            <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
              MEMBERSHIP ARCHIVE // {user.tier || 'RITUALIST'}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-offWhite mt-1">
              {user.name}
            </h1>
            <p className="font-mono text-xs text-lightGray/70 mt-1">
              Member since {user.memberSince || '2026'} • {user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-red-400 text-lightGray hover:text-red-400 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors self-start sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 font-mono text-xs">
          <Link
            to="/orders"
            className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-icyBlue" />
              <div>
                <div className="text-[10px] text-lightGray/60 uppercase">Total Orders</div>
                <div className="text-xl font-bold text-offWhite">{orders.length}</div>
              </div>
            </div>
            <span className="text-lightGray group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            to="/wishlist"
            className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-red-400" />
              <div>
                <div className="text-[10px] text-lightGray/60 uppercase">Wishlist Items</div>
                <div className="text-xl font-bold text-offWhite">{wishlistCount}</div>
              </div>
            </div>
            <span className="text-lightGray group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <div className="p-5 bg-softBlack border border-white/10 flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-[10px] text-lightGray/60 uppercase">Account Status</div>
              <div className="text-sm font-bold text-emerald-400 uppercase">Verified Indian Buyer</div>
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/10 mb-8 font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-6 border-b-2 font-bold transition-colors ${
              activeTab === 'profile'
                ? 'border-offWhite text-offWhite'
                : 'border-transparent text-lightGray hover:text-offWhite'
            }`}
          >
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3 px-6 border-b-2 font-bold transition-colors ${
              activeTab === 'addresses'
                ? 'border-offWhite text-offWhite'
                : 'border-transparent text-lightGray hover:text-offWhite'
            }`}
          >
            Saved Addresses ({user.addresses?.length || 0})
          </button>
        </div>

        {/* Tab 1: Profile */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl bg-softBlack border border-white/10 p-6 sm:p-8 space-y-6 font-mono text-xs">
            <h3 className="font-display font-bold text-lg uppercase text-offWhite pb-3 border-b border-white/10">
              Personal Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-lightGray/60 uppercase text-[10px] block">Full Name</span>
                <span className="text-offWhite font-semibold text-sm">{user.name}</span>
              </div>
              <div>
                <span className="text-lightGray/60 uppercase text-[10px] block">Email</span>
                <span className="text-offWhite font-semibold text-sm">{user.email}</span>
              </div>
              <div>
                <span className="text-lightGray/60 uppercase text-[10px] block">Mobile</span>
                <span className="text-offWhite font-semibold text-sm">{user.phone}</span>
              </div>
              <div>
                <span className="text-lightGray/60 uppercase text-[10px] block">Default Country</span>
                <span className="text-offWhite font-semibold text-sm">India (IN)</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Saved Addresses */}
        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="font-mono text-xs text-lightGray">
                Manage your delivery addresses for seamless 1-click checkout across India.
              </p>
              <button
                onClick={() => setShowAddAddressModal(true)}
                className="bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Address</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(user.addresses || []).map((addr) => (
                <div
                  key={addr.id}
                  className="bg-softBlack border border-white/10 p-5 flex flex-col justify-between font-mono text-xs space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                      <span className="font-bold text-offWhite uppercase">{addr.name}</span>
                      {addr.isDefault && (
                        <span className="text-[10px] text-icyBlue uppercase font-bold bg-white/5 px-2 py-0.5">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="text-lightGray space-y-1">
                      <p>{addr.street}</p>
                      {addr.landmark && <p className="text-lightGray/70">Landmark: {addr.landmark}</p>}
                      <p>{addr.city}, {addr.state} - <strong className="text-offWhite">{addr.pincode}</strong></p>
                      <p className="pt-1 text-[11px] text-lightGray/80">Phone: {addr.phone}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => removeAddress(addr.id)}
                      className="text-red-400 hover:underline text-[11px] flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HELP & SUPPORT SECTION */}
        <div className="mt-14 pt-10 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-icyBlue uppercase tracking-widest block">
                ASSISTANCE & PROTOCOLS
              </span>
              <h2 className="font-display font-black text-2xl uppercase tracking-wider text-offWhite mt-1">
                HELP & SUPPORT
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-xs font-mono uppercase tracking-wider text-icyBlue hover:underline flex items-center gap-1"
            >
              <span>Concierge Desk</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {/* Contact Support */}
            <Link
              to="/contact"
              className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-start gap-3.5 transition-colors group"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold uppercase text-offWhite group-hover:text-white text-sm">
                  Contact Support
                </h3>
                <p className="text-[11px] text-lightGray/70 mt-1 leading-relaxed">
                  Connect with Ayush Sharma or Abhiram Singh via WhatsApp or Email.
                </p>
              </div>
            </Link>

            {/* My Orders */}
            <Link
              to="/orders"
              className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-start gap-3.5 transition-colors group"
            >
              <Package className="w-5 h-5 text-icyBlue mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold uppercase text-offWhite group-hover:text-white text-sm">
                  My Orders & Tracking
                </h3>
                <p className="text-[11px] text-lightGray/70 mt-1 leading-relaxed">
                  View real-time delivery milestones and tracking numbers across India.
                </p>
              </div>
            </Link>

            {/* Shipping Information */}
            <Link
              to="/contact#faq"
              className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-start gap-3.5 transition-colors group"
            >
              <Truck className="w-5 h-5 text-icyBlue mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold uppercase text-offWhite group-hover:text-white text-sm">
                  Shipping Information
                </h3>
                <p className="text-[11px] text-lightGray/70 mt-1 leading-relaxed">
                  Free Express Shipping above ₹1,999. 3–5 day delivery in metro zones.
                </p>
              </div>
            </Link>

            {/* Returns & Refunds */}
            <Link
              to="/contact?issue=return"
              className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-start gap-3.5 transition-colors group"
            >
              <RotateCcw className="w-5 h-5 text-icyBlue mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold uppercase text-offWhite group-hover:text-white text-sm">
                  Returns & Refunds
                </h3>
                <p className="text-[11px] text-lightGray/70 mt-1 leading-relaxed">
                  7-day hassle-free reverse pickup for unworn items with tags intact.
                </p>
              </div>
            </Link>

            {/* Size Guide */}
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-start gap-3.5 text-left transition-colors group"
            >
              <Ruler className="w-5 h-5 text-icyBlue mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold uppercase text-offWhite group-hover:text-white text-sm">
                  Size Guide
                </h3>
                <p className="text-[11px] text-lightGray/70 mt-1 leading-relaxed">
                  Interactive measurement chart for oversized tops and parachute bottoms.
                </p>
              </div>
            </button>

            {/* FAQ */}
            <Link
              to="/contact#faq"
              className="p-5 bg-softBlack border border-white/10 hover:border-white/30 flex items-start gap-3.5 transition-colors group"
            >
              <HelpCircle className="w-5 h-5 text-icyBlue mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold uppercase text-offWhite group-hover:text-white text-sm">
                  FAQ & Knowledge Base
                </h3>
                <p className="text-[11px] text-lightGray/70 mt-1 leading-relaxed">
                  Answers to order tracking, payment methods, COD, and support hours.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Modal: Add Address */}
        {showAddAddressModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-softBlack border border-white/10 p-6 sm:p-8 max-w-lg w-full font-mono text-xs">
              <h3 className="font-display font-bold text-lg uppercase text-offWhite mb-4">
                Add New Delivery Address
              </h3>
              <form onSubmit={handleCreateAddress} className="space-y-4">
                <div>
                  <label className="text-lightGray uppercase text-[10px] block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={newAddr.name}
                    onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3 py-2 text-offWhite"
                  />
                </div>
                <div>
                  <label className="text-lightGray uppercase text-[10px] block mb-1">Phone</label>
                  <input
                    type="tel"
                    value={newAddr.phone}
                    onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3 py-2 text-offWhite"
                  />
                </div>
                <div>
                  <label className="text-lightGray uppercase text-[10px] block mb-1">Flat / Street</label>
                  <input
                    type="text"
                    value={newAddr.street}
                    onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3 py-2 text-offWhite"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-lightGray uppercase text-[10px] block mb-1">City</label>
                    <input
                      type="text"
                      value={newAddr.city}
                      onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                      required
                      className="w-full bg-deepBlack border border-white/15 px-3 py-2 text-offWhite"
                    />
                  </div>
                  <div>
                    <label className="text-lightGray uppercase text-[10px] block mb-1">Pincode (6 digits)</label>
                    <input
                      type="text"
                      value={newAddr.pincode}
                      onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                      required
                      maxLength={6}
                      className="w-full bg-deepBlack border border-white/15 px-3 py-2 text-offWhite"
                    />
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddAddressModal(false)}
                    className="border border-white/20 px-4 py-2 uppercase text-lightGray hover:text-offWhite"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-offWhite text-deepBlack font-bold uppercase px-5 py-2"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <SizeGuideModal
          isOpen={isSizeGuideOpen}
          onClose={() => setIsSizeGuideOpen(false)}
        />
      </div>
    </div>
  );
}

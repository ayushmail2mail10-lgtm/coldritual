import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, Smartphone, Banknote, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { useToast } from '../context/ToastContext';
import { formatCurrency } from '../utils/formatCurrency';
import { businessConfig } from '../config/businessConfig';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

export default function Checkout() {
  const { cartItems, subtotal, promoDiscount, shippingFee, finalTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { placeOrder } = useOrders();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Pre-fill with default address if user is logged in
  const defaultAddr = user?.addresses?.find(a => a.isDefault) || user?.addresses?.[0];

  const [formData, setFormData] = useState({
    fullName: defaultAddr?.name || user?.name || "Arjun Verma",
    email: user?.email || "arjun.verma@ritualist.in",
    phone: defaultAddr?.phone || user?.phone || "9876543210",
    street: defaultAddr?.street || "Flat 402, Monolith Heights, 12th Main",
    landmark: defaultAddr?.landmark || "Near Sony World Signal, Koramangala 4th Block",
    city: defaultAddr?.city || "Bengaluru",
    state: defaultAddr?.state || "Karnataka",
    pincode: defaultAddr?.pincode || "560034",
  });

  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'cod'
  const [upiOption, setUpiOption] = useState('gpay'); // 'gpay' | 'phonepe' | 'paytm' | 'custom'
  const [customUpiId, setCustomUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8892');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('482');
  const [isProcessing, setIsProcessing] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-deepBlack text-offWhite">
        <h1 className="font-display font-black text-3xl uppercase tracking-wider mb-2">
          NO ITEMS TO CHECKOUT
        </h1>
        <p className="font-mono text-xs text-lightGray/70 max-w-sm mb-6">
          Your cart is currently empty. Add streetwear items before initiating checkout.
        </p>
        <Link
          to="/shop"
          className="bg-offWhite text-deepBlack px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest"
        >
          Explore Catalog
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.street || !formData.city || !formData.pincode) {
      showToast('PLEASE FILL ALL MANDATORY ADDRESS FIELDS', 'error');
      return;
    }

    if (formData.pincode.length !== 6 || isNaN(Number(formData.pincode))) {
      showToast('ENTER A VALID 6-DIGIT INDIAN PINCODE', 'error');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      let finalMethodLabel = 'UPI';
      if (paymentMethod === 'upi') {
        finalMethodLabel = `UPI (${upiOption === 'gpay' ? 'Google Pay' : upiOption === 'phonepe' ? 'PhonePe' : upiOption === 'paytm' ? 'Paytm' : customUpiId || 'UPI ID'})`;
      } else if (paymentMethod === 'card') {
        finalMethodLabel = 'Credit/Debit Card (Demo Verified)';
      } else {
        finalMethodLabel = 'Cash on Delivery (COD)';
      }

      const newOrder = placeOrder({
        items: cartItems,
        customerName: formData.fullName,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: {
          name: formData.fullName,
          phone: formData.phone,
          street: formData.street,
          landmark: formData.landmark,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },
        paymentMethod: finalMethodLabel,
        subtotal,
        discount: promoDiscount,
        shippingFee,
        total: finalTotal,
      });

      clearCart();
      setIsProcessing(false);
      navigate('/orders');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-10 pb-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
              SECURE PAN-INDIA DISPATCH
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-offWhite mt-1">
              CHECKOUT
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-emerald-400">
            <Lock className="w-4 h-4" />
            <span>256-BIT ENCRYPTION</span>
          </div>
        </div>

        {/* 2-Column Checkout Form */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Shipping Info & Payment UI (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* 1. SHIPPING ADDRESS */}
            <div className="bg-softBlack border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-display font-bold text-lg uppercase tracking-wider text-offWhite">
                  <span className="w-6 h-6 rounded-none bg-offWhite text-deepBlack flex items-center justify-center font-mono text-xs font-bold">
                    1
                  </span>
                  <span>DELIVERY ADDRESS (INDIA)</span>
                </div>
                <span className="text-[11px] font-mono text-lightGray/60">
                  Pan-India Air Logistics
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-lightGray uppercase text-[11px]">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lightGray uppercase text-[11px]">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lightGray uppercase text-[11px]">Mobile Number (+91) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-lightGray uppercase text-[11px]">Flat, House no., Building, Apartment *</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-lightGray uppercase text-[11px]">Landmark / Area</label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lightGray uppercase text-[11px]">City / District *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lightGray uppercase text-[11px]">Pincode (6 Digits) *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    maxLength={6}
                    required
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50 font-bold"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-lightGray uppercase text-[11px]">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50 cursor-pointer"
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st} className="bg-softBlack text-offWhite">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 2. PAYMENT METHOD SELECTION */}
            <div className="bg-softBlack border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-display font-bold text-lg uppercase tracking-wider text-offWhite">
                  <span className="w-6 h-6 rounded-none bg-offWhite text-deepBlack flex items-center justify-center font-mono text-xs font-bold">
                    2
                  </span>
                  <span>PAYMENT METHOD (DEMO READY)</span>
                </div>
                <span className="text-[11px] font-mono text-icyBlue">
                  Indian Currency: INR (₹)
                </span>
              </div>

              {/* Tabs for Payment: UPI | CARD | COD */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 border flex flex-col items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-deepBlack border-icyBlue text-offWhite shadow-lg'
                      : 'border-white/10 bg-deepBlack/40 text-lightGray hover:border-white/30'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-icyBlue" />
                  <span className="uppercase font-bold">UPI</span>
                  <span className="text-[9px] text-lightGray/60">GPay, PhonePe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 border flex flex-col items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-deepBlack border-icyBlue text-offWhite shadow-lg'
                      : 'border-white/10 bg-deepBlack/40 text-lightGray hover:border-white/30'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-icyBlue" />
                  <span className="uppercase font-bold">Card</span>
                  <span className="text-[9px] text-lightGray/60">Visa, RuPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 border flex flex-col items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-deepBlack border-icyBlue text-offWhite shadow-lg'
                      : 'border-white/10 bg-deepBlack/40 text-lightGray hover:border-white/30'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-icyBlue" />
                  <span className="uppercase font-bold">COD</span>
                  <span className="text-[9px] text-lightGray/60">Cash on Delivery</span>
                </button>
              </div>

              {/* Sub-panels depending on selection */}
              {paymentMethod === 'upi' && (
                <div className="p-4 bg-deepBlack border border-white/5 space-y-4 font-mono text-xs">
                  <div className="text-[11px] text-lightGray uppercase">Choose Instant UPI App:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'gpay', label: 'Google Pay' },
                      { id: 'phonepe', label: 'PhonePe' },
                      { id: 'paytm', label: 'Paytm' },
                      { id: 'custom', label: 'Other UPI ID' }
                    ].map((app) => (
                      <button
                        key={app.id}
                        type="button"
                        onClick={() => setUpiOption(app.id)}
                        className={`p-2.5 border text-center uppercase tracking-wider transition-colors ${
                          upiOption === app.id
                            ? 'bg-white/10 border-offWhite text-offWhite font-bold'
                            : 'border-white/10 text-lightGray hover:border-white/30'
                        }`}
                      >
                        {app.label}
                      </button>
                    ))}
                  </div>

                  {upiOption === 'custom' && (
                    <div className="pt-2">
                      <input
                        type="text"
                        placeholder="username@okhdfcbank / mobile@upi"
                        value={customUpiId}
                        onChange={(e) => setCustomUpiId(e.target.value)}
                        className="w-full bg-softBlack border border-white/20 px-3.5 py-2.5 text-offWhite uppercase"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-[10px] text-lightGray/60 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-icyBlue" />
                    <span>Instant zero-fee verification via NPCI UPI protocol</span>
                  </div>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="p-4 bg-deepBlack border border-white/5 space-y-3 font-mono text-xs">
                  <div>
                    <label className="text-[10px] text-lightGray uppercase block mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-softBlack border border-white/15 px-3 py-2 text-offWhite"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-lightGray uppercase block mb-1">Valid Thru</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-softBlack border border-white/15 px-3 py-2 text-offWhite"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-lightGray uppercase block mb-1">CVV</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        maxLength={4}
                        className="w-full bg-softBlack border border-white/15 px-3 py-2 text-offWhite"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="p-4 bg-deepBlack border border-white/5 font-mono text-xs text-lightGray space-y-2">
                  <p className="text-offWhite font-semibold uppercase">Cash on Delivery Verification:</p>
                  <p className="text-lightGray/70">
                    Pay upon doorstep delivery. Our courier partner will accept Cash or scan-and-pay UPI QR upon arrival.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Order Manifest Summary (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-softBlack border border-white/15 p-6 sm:p-8 space-y-6 sticky top-28 shadow-2xl">
              <h2 className="font-display font-black text-xl uppercase tracking-wider text-offWhite pb-4 border-b border-white/10">
                DISPATCH SUMMARY
              </h2>

              {/* Items List */}
              <div className="max-h-64 overflow-y-auto divide-y divide-white/5 pr-1">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="py-3 flex gap-3 items-center">
                    <div className="w-14 h-16 bg-neutral-900 border border-white/10 flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 font-mono text-xs">
                      <div className="font-display font-bold uppercase text-offWhite truncate">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-lightGray/60 truncate">
                        Size: {item.size} • Qty: {item.quantity}
                      </div>
                      <div className="font-bold text-offWhite mt-0.5">
                        {formatCurrency(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="font-mono text-xs space-y-2.5 pt-4 border-t border-white/10 text-lightGray">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-offWhite font-semibold">{formatCurrency(subtotal)}</span>
                </div>

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-icyBlue">
                    <span>Discount</span>
                    <span>-{formatCurrency(promoDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Pan-India Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-400 font-bold uppercase">FREE</span>
                    ) : (
                      formatCurrency(shippingFee)
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-4 border-t border-white/15 text-offWhite text-lg font-bold">
                  <span className="font-display uppercase tracking-wider">Total Payable</span>
                  <span className="font-mono text-2xl text-offWhite">{formatCurrency(finalTotal)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-2 shadow-2xl transition-transform active:scale-[0.98] disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>AUTHORIZING RITUAL DISPATCH...</span>
                ) : (
                  <>
                    <span>PLACE ORDER • {formatCurrency(finalTotal)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center text-[10px] font-mono text-lightGray/50">
                Safe & Encrypted Indian Checkout • All prices include GST
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

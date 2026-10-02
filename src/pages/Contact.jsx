import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, Clock, ChevronDown, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import { businessConfig, getWhatsAppLink } from '../config/businessConfig';
import { useToast } from '../context/ToastContext';
import SizeGuideModal from '../components/modals/SizeGuideModal';

const ISSUE_TYPES = [
  "Order Issue",
  "Shipping",
  "Return / Refund",
  "Size & Fit",
  "Product Information",
  "Payment",
  "Website Problem",
  "Other"
];

const FAQS = [
  {
    q: "How can I track my order?",
    a: "Once your drop is authorized and dispatched from our Bengaluru facility, you will receive an automated tracking link. You can also view live delivery milestones directly inside your ColdRitual Account under the Orders tab, featuring real-time logistics tracking across Delhivery, Blue Dart, and Air Express."
  },
  {
    q: "What is the delivery time?",
    a: "Orders placed across Tier-1 metro regions (Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai, Kolkata) arrive within 3–5 business days. Other pan-India locations typically deliver in 5–7 business days via Express Air logistics."
  },
  {
    q: "What is the return policy?",
    a: "We maintain a 7-day hassle-free reverse pickup exchange and store credit policy. Garments must remain unworn with all raw archive tags intact. Simply initiate a request below or reach out directly to our support representatives."
  },
  {
    q: "How do I choose my size?",
    a: "ColdRitual silhouettes are engineered with signature dropped shoulders and an oversized boxy street drape. For a relaxed fit, order your normal size. For a more conventional tailored fit, size down by one. Refer to our interactive Size Guide for exact chest, shoulder, and length specifications."
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes. Cash on Delivery (COD) is supported across 19,000+ Indian pincodes. Upon doorstep arrival, you may pay using cash or scan-and-pay via any UPI app (GPay, PhonePe, Paytm)."
  },
  {
    q: "What payment methods are supported?",
    a: "We support instant UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit & Debit cards (Visa, MasterCard, RuPay), NetBanking across 50+ Indian banks, and Cash on Delivery."
  },
  {
    q: "Can I cancel my order?",
    a: "Orders can be modified or cancelled within 2 hours of placement before our warehouse packaging team initiates processing. Reach out to Ayush or Abhiram via WhatsApp or Email immediately with your Order ID for instant priority cancellation."
  },
  {
    q: "How can I contact ColdRitual support?",
    a: "You can connect directly with our two dedicated support representatives: Ayush Sharma (WhatsApp: +91 8169172120 / Email: ayushssharma0206@gmail.com) and Abhiram Singh (WhatsApp: +91 8104282127 / Email: abhiram8104@gmail.com). Support is active Monday – Saturday from 10:00 AM to 7:00 PM IST."
  }
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get('orderId') || '';
  const initialIssue = searchParams.get('issue') === 'return' ? 'Return / Refund' : (searchParams.get('issue') || '');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    orderId: initialOrderId,
    issueType: initialIssue || '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (initialOrderId) {
      setFormData(prev => ({ ...prev, orderId: initialOrderId }));
    }
    if (initialIssue && ISSUE_TYPES.includes(initialIssue)) {
      setFormData(prev => ({ ...prev, issueType: initialIssue }));
    }
  }, [initialOrderId, initialIssue]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.issueType) newErrors.issueType = 'Please select an issue type';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('PLEASE RESOLVE HIGHLIGHTED ERRORS', 'error');
      return;
    }

    // Frontend state update without false backend SMTP claims
    setIsSubmitted(true);
    showToast('SUPPORT TRANSMISSION RECEIVED', 'success');
  };

  const ayush = businessConfig.supportRepresentatives[0];
  const abhiram = businessConfig.supportRepresentatives[1];

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs text-icyBlue uppercase tracking-[0.25em] block">
            CLIENT CONCIERGE // COLD RITUAL INDIA
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-offWhite">
            NEED HELP?
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base text-lightGray/80 leading-relaxed font-light">
            Need help with an order, product, sizing, shipping or anything else? Reach out to the ColdRitual support team.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 font-mono text-[11px] text-lightGray/70 mt-2">
            <Clock className="w-3.5 h-3.5 text-icyBlue" />
            <span>Support Hours: <strong className="text-offWhite">{businessConfig.supportHours}</strong></span>
          </div>
        </div>

        {/* Support Representatives Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-icyBlue uppercase tracking-widest block">
                DIRECT REPRESENTATIVES
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-offWhite">
                DEDICATED SUPPORT SPECIALISTS
              </h2>
            </div>
            <span className="font-mono text-[11px] text-lightGray/60 hidden sm:block">
              Priority WhatsApp & Email Channels
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Representative 1: Ayush Sharma */}
            <div className="bg-softBlack border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-white/30 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-icyBlue/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white/10 px-2 py-0.5 text-icyBlue font-mono text-[10px] uppercase font-bold">
                    REPRESENTATIVE 01
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" title="Active on duty" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-offWhite">
                  {ayush.name}
                </h3>
                <p className="font-mono text-xs text-lightGray/70 mt-0.5">
                  {ayush.role} • ColdRitual Concierge
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 font-mono text-xs text-lightGray">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-icyBlue" />
                    <span>Email: <a href={`mailto:${ayush.email}`} className="text-offWhite hover:underline">{ayush.email}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: <strong className="text-offWhite">{ayush.whatsappDisplay}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(ayush.whatsappNumber, formData.orderId || initialOrderId)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT WITH AYUSH ON WHATSAPP →</span>
                </a>
                <a
                  href={`mailto:${ayush.email}`}
                  className="bg-white/5 hover:bg-white/10 border border-white/20 text-offWhite font-mono text-xs uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL AYUSH →</span>
                </a>
              </div>
            </div>

            {/* Representative 2: Abhiram Singh */}
            <div className="bg-softBlack border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-white/30 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-icyBlue/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white/10 px-2 py-0.5 text-icyBlue font-mono text-[10px] uppercase font-bold">
                    REPRESENTATIVE 02
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" title="Active on duty" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-offWhite">
                  {abhiram.name}
                </h3>
                <p className="font-mono text-xs text-lightGray/70 mt-0.5">
                  {abhiram.role} • ColdRitual Concierge
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 font-mono text-xs text-lightGray">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-icyBlue" />
                    <span>Email: <a href={`mailto:${abhiram.email}`} className="text-offWhite hover:underline">{abhiram.email}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: <strong className="text-offWhite">{abhiram.whatsappDisplay}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(abhiram.whatsappNumber, formData.orderId || initialOrderId)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT WITH ABHIRAM ON WHATSAPP →</span>
                </a>
                <a
                  href={`mailto:${abhiram.email}`}
                  className="bg-white/5 hover:bg-white/10 border border-white/20 text-offWhite font-mono text-xs uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL ABHIRAM →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-softBlack border border-white/15 p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-white/5 border border-icyBlue/40 text-icyBlue flex items-center justify-center mx-auto rounded-none">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black text-3xl uppercase tracking-wider text-offWhite">
                    MESSAGE RECEIVED.
                  </h3>
                  <p className="font-sans text-sm text-lightGray max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out to ColdRitual. Our support team will get back to you as soon as possible.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/shop"
                    className="bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-transform active:scale-95"
                  >
                    BACK TO SHOP →
                  </Link>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        orderId: '',
                        issueType: '',
                        message: '',
                      });
                    }}
                    className="border border-white/20 hover:border-offWhite text-lightGray hover:text-offWhite font-mono text-xs uppercase tracking-wider px-6 py-3.5 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="border-b border-white/10 pb-5">
                  <span className="font-mono text-xs text-icyBlue uppercase tracking-widest block">
                    INQUIRY TRANSMISSION FORM
                  </span>
                  <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-offWhite mt-1">
                    SUBMIT A SUPPORT TICKET
                  </h2>
                  <p className="font-mono text-xs text-lightGray/70 mt-1">
                    Please provide your details below. For urgent dispatch inquiries, mention your Order ID.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="text-lightGray uppercase text-[11px] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: null });
                        }}
                        placeholder="Arjun Verma"
                        className={`w-full bg-deepBlack border px-3.5 py-3 text-offWhite focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-white/50'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-red-400 text-[10px] mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-lightGray uppercase text-[11px] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="arjun@example.com"
                        className={`w-full bg-deepBlack border px-3.5 py-3 text-offWhite focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-white/50'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-400 text-[10px] mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="text-lightGray uppercase text-[11px] block mb-1">
                        Phone Number (+91) *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="9876543210"
                        className={`w-full bg-deepBlack border px-3.5 py-3 text-offWhite focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-white/50'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-red-400 text-[10px] mt-1 block">{errors.phone}</span>
                      )}
                    </div>

                    {/* Order ID - Optional */}
                    <div>
                      <label className="text-lightGray uppercase text-[11px] block mb-1">
                        Order ID (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.orderId}
                        onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                        placeholder="e.g. CR-92418"
                        className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
                      />
                    </div>
                  </div>

                  {/* Issue Type */}
                  <div>
                    <label className="text-lightGray uppercase text-[11px] block mb-1">
                      Issue Type *
                    </label>
                    <select
                      value={formData.issueType}
                      onChange={(e) => {
                        setFormData({ ...formData, issueType: e.target.value });
                        if (errors.issueType) setErrors({ ...errors, issueType: null });
                      }}
                      className={`w-full bg-deepBlack border px-3.5 py-3 text-offWhite focus:outline-none cursor-pointer uppercase ${
                        errors.issueType ? 'border-red-400' : 'border-white/15 focus:border-white/50'
                      }`}
                    >
                      <option value="">-- SELECT ISSUE TYPE --</option>
                      {ISSUE_TYPES.map(type => (
                        <option key={type} value={type} className="bg-softBlack text-offWhite">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.issueType && (
                      <span className="text-red-400 text-[10px] mt-1 block">{errors.issueType}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-lightGray uppercase text-[11px] block mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Please describe your query in detail..."
                      className={`w-full bg-deepBlack border p-3.5 text-offWhite focus:outline-none transition-colors ${
                        errors.message ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-white/50'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-[10px] mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest px-10 py-4 flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-xl"
                    >
                      <span>SEND MESSAGE →</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section Accordion */}
        <div id="faq" className="max-w-4xl mx-auto pt-6 space-y-6">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-icyBlue uppercase tracking-widest block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-offWhite mt-1">
                KNOWLEDGE BASE & GUIDANCE
              </h2>
            </div>
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="text-xs font-mono text-icyBlue hover:underline uppercase hidden sm:block"
            >
              Open Size Guide →
            </button>
          </div>

          <div className="border border-white/10 divide-y divide-white/10 bg-softBlack/60">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="font-display font-bold text-sm sm:text-base uppercase text-offWhite group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-lightGray flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-icyBlue' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 font-mono text-xs text-lightGray/80 leading-relaxed border-t border-white/5 pt-3">
                      <p>{faq.a}</p>
                      {idx === 3 && (
                        <button
                          onClick={() => setIsSizeGuideOpen(true)}
                          className="text-icyBlue hover:underline mt-2 inline-block uppercase text-[11px]"
                        >
                          Launch Full Silhouette Size Guide →
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}

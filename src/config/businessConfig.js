/**
 * COLD RITUAL - Business Configuration
 * Centralized settings for India-focused streetwear e-commerce
 */

export const businessConfig = {
  brandName: "COLD RITUAL",
  tagline: "WEAR THE RITUAL.",
  subTagline: "Streetwear for those who create their own rules.",
  currency: "INR",
  currencySymbol: "₹",
  locale: "en-IN",
  freeShippingThreshold: 1999,
  standardShippingFee: 149,
  codFee: 49,
  
  // Official ColdRitual Support Representatives
  supportRepresentatives: [
    {
      name: "Ayush Sharma",
      role: "Customer Support",
      email: "ayushssharma0206@gmail.com",
      whatsappNumber: "918169172120",
      whatsappDisplay: "+91 8169172120",
    },
    {
      name: "Abhiram Singh",
      role: "Customer Support",
      email: "abhiram8104@gmail.com",
      whatsappNumber: "918104282127",
      whatsappDisplay: "+91 8104282127",
    }
  ],
  supportHours: "Monday – Saturday, 10:00 AM – 7:00 PM IST",

  /**
   * Generates official ColdRitual customer support WhatsApp messages
   * @param {string|null} orderId Optional order ID
   * @returns {string} Plain text message
   */
  generateSupportMessage(orderId = null) {
    if (orderId && String(orderId).trim()) {
      return `Hello ColdRitual Support! 👋\n\nI need help regarding my ColdRitual order.\n\nOrder ID: ${String(orderId).trim()}\n\nCould you please assist me with my issue?\n\nThank you.`;
    }
    return `Hello ColdRitual Support! 👋\n\nI need some assistance with my ColdRitual order/product.\n\nCould you please help me?\n\nThank you.`;
  },

  /**
   * Builds the pre-filled encoded WhatsApp direct chat link
   * @param {string} phoneNumber Representative WhatsApp phone number
   * @param {string|null} orderId Optional order ID or custom message
   * @returns {string} URL encoded wa.me link
   */
  getWhatsAppLink(phoneNumber, orderId = null) {
    const cleanNumber = String(phoneNumber).replace(/[^0-9]/g, '');
    const message = (typeof orderId === 'string' && orderId.includes('\n'))
      ? orderId
      : this.generateSupportMessage(orderId);
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  },

  contact: {
    email: "concierge@coldritual.in",
    phone: "+91 80 4920 8800",
    address: "Cold Ritual Studio, 4th Block, Koramangala, Bengaluru, Karnataka 560034",
  },
  socialLinks: {
    instagram: "https://instagram.com/coldritual.in",
    youtube: "https://youtube.com/@coldritual",
    twitter: "https://x.com/coldritual",
    discord: "https://discord.gg/coldritual",
  },
  shippingInformation: "Free Express Shipping across India on orders above ₹1,999. Typical delivery timeframe is 3–5 business days across Metro cities and 5–7 days pan-India.",
  returnPolicy: "7-day hassle-free reverse pickup exchange & store credit return policy for unworn items with tags intact.",
  promoCodes: [
    { code: "RITUAL10", discountPercentage: 10, minCart: 999, label: "10% OFF on orders above ₹999" },
    { code: "COLD200", flatDiscount: 200, minCart: 1499, label: "₹200 OFF on orders above ₹1,499" },
    { code: "FIRSTFIT", discountPercentage: 15, minCart: 1999, label: "15% OFF for first-time ritualists" },
  ],
  categories: [
    {
      id: "oversized-t-shirts",
      name: "OVERSIZED T-SHIRTS",
      slug: "oversized-t-shirts",
      path: "/category/oversized-t-shirts",
      description: "240 GSM dense cotton, dropped shoulders, relaxed boxy silhouettes.",
      image: "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
    {
      id: "t-shirts",
      name: "T-SHIRTS",
      slug: "t-shirts",
      path: "/category/t-shirts",
      description: "Everyday luxury staples. 220 GSM combed single jersey with minimal ritual insignias.",
      image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
    {
      id: "shirts",
      name: "SHIRTS",
      slug: "shirts",
      path: "/category/shirts",
      description: "Layering essentials, heavyweight flannel overshirts and technical utility button-downs.",
      image: "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
    {
      id: "sweatshirts",
      name: "SWEATSHIRTS",
      slug: "sweatshirts",
      path: "/category/sweatshirts",
      description: "French terry fleece crews engineered with architectural ribbing and raw accents.",
      image: "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
    {
      id: "hoodies",
      name: "HOODIES",
      slug: "hoodies",
      path: "/category/hoodies",
      description: "450 GSM heavyweight brushed fleece, structured double-layered hood, custom metal aglets.",
      image: "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
    {
      id: "baggy-jeans",
      name: "BAGGY JEANS",
      slug: "baggy-jeans",
      path: "/category/baggy-jeans",
      description: "14.5 oz rigid denim, wide stacking drape, vintage stone & enzyme washes.",
      image: "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
    {
      id: "cargo-pants",
      name: "CARGO PANTS",
      slug: "cargo-pants",
      path: "/category/cargo-pants",
      description: "Tactical ripstop & heavy canvas with multi-bungee adjustments and utility volume pockets.",
      image: "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=1000&h=1250&q=85",
    },
  ]
};

export const getWhatsAppLink = (phoneNumber, orderId = null) => businessConfig.getWhatsAppLink(phoneNumber, orderId);
export const generateSupportMessage = (orderId = null) => businessConfig.generateSupportMessage(orderId);

export default businessConfig;

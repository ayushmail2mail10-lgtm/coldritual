/**
 * COLD RITUAL - Product Catalog
 * Centralized, high-fidelity streetwear catalog with India (INR) pricing
 * Upgraded with cohesive, multi-angle fashion-editorial street photography
 */

export const products = [
  // ==========================================
  // 1. OVERSIZED T-SHIRTS
  // ==========================================
  {
    id: "cr-ots-01",
    name: "VOID // 01",
    subtitle: "Heavyweight Void Graphic Oversized Tee",
    slug: "void-01-oversized-graphic-tee",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "men",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1618453292610-4119319e5ac7?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1618453292507-4959ece6429e?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Washed Carbon", hex: "#181818" },
      { name: "Off White", hex: "#EBE8DF" },
      { name: "Acid Slate", hex: "#3A3D40" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Constructed from our bespoke 260 GSM single-jersey combed cotton. Features high-density silicon chest typography, dropped shoulders with reinforced blind hem stitching, and an ultra-relaxed boxy cut built for Indian subcontinental humidity and layering.",
    fabric: "100% Combed Compact Cotton • 260 GSM • Bio-washed & Pre-shrunk",
    fit: "Signature boxy oversized fit. Drop shoulder with elongated sleeves.",
    stock: 14,
    rating: 4.9,
    reviewsCount: 86,
    reviews: [
      { author: "Aryan M.", rating: 5, date: "2 days ago", comment: "The 260 GSM fabric drape is insane. Collar doesn't sag even after 4 washes in Bangalore water." },
      { author: "Kabir S.", rating: 5, date: "1 week ago", comment: "Legit oversized. Bought L (I'm 6'0) and the drop shoulder sits exactly like Balenciaga tees." }
    ],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-ots-02",
    name: "AFTERDARK // 03",
    subtitle: "Distressed Cyber Monolith Oversized Tee",
    slug: "afterdark-03-oversized-tee",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "men",
    price: 1399,
    originalPrice: 1799,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1615903041004-4b34aa75c3b4?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1615903041160-7169a35696b4?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#111111" },
      { name: "Faded Olive", hex: "#3A3D36" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Deep noir wash with cracked archival back graphic depicting the ritual monolith. Hand-distressed collar ribbing and signature Cold Ritual woven locker label at bottom hem.",
    fabric: "100% Cotton Heavy Jersey • 280 GSM • Acid Washed",
    fit: "Exaggerated dropped shoulder silhouette with wide chest girth.",
    stock: 9,
    rating: 4.8,
    reviewsCount: 64,
    reviews: [
      { author: "Rohan D.", rating: 5, date: "3 days ago", comment: "The back print has that genuine cracked vintage aesthetic without peeling off." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-ots-03",
    name: "COLD SIGNAL // 06",
    subtitle: "Minimal Sub-Zero Heavyweight Oversized Tee",
    slug: "cold-signal-06-heavyweight-tee",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "women",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Cold Grey", hex: "#8A8D91" },
      { name: "Deep Black", hex: "#0E0E0E" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Designed for effortless Gen-Z streetwear silhouettes. Heavy 260 GSM single-jersey combed cotton draped with dropped shoulders and a boxy relaxed cut.",
    fabric: "100% Combed Compact Cotton • 260 GSM • Cold Water Pre-washed",
    fit: "Boxy relaxed oversized drop-shoulder streetwear fit.",
    stock: 18,
    rating: 4.7,
    reviewsCount: 42,
    reviews: [
      { author: "Zoya K.", rating: 5, date: "4 days ago", comment: "The drop shoulder and boxy drape are perfection. Styled it with my parachute cargos." }
    ],
    featured: true,
    trending: false,
    newDrop: true,
    sale: false,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-ots-04",
    name: "RITUAL // 04",
    subtitle: "Archival Cipher Heavyweight Oversized Tee",
    slug: "ritual-04-cipher-tee",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "men",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1778759335271-91d85dacaf96?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1778759335272-2aea6c337a63?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1775817104298-522393e1d72b?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Bone Ecru", hex: "#E3DFD5" },
      { name: "Shadow Coal", hex: "#1F1F21" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The core emblem of the Cold Ritual movement. Dense textured puff print on chest with raw-cut sleeve hems and reinforced double-needle neck construction.",
    fabric: "100% Organic Ring-Spun Cotton • 300 GSM Ultra-Heavyweight",
    fit: "True oversized streetwear fit. Deep armholes and drop sleeve.",
    stock: 6,
    rating: 5.0,
    reviewsCount: 110,
    reviews: [
      { author: "Vikram R.", rating: 5, date: "Yesterday", comment: "Heavy as armor! 300 GSM in ecru is unbelievable value under ₹1500." }
    ],
    featured: true,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1778759335271-91d85dacaf96?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-ots-05",
    name: "STATIC // 05",
    subtitle: "Distorted Glitch Oversized Street Tee",
    slug: "static-05-glitch-tee",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "women",
    price: 1349,
    originalPrice: 1699,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1503341338985-c0477be52513?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Vintage White", hex: "#F2EFE9" },
      { name: "Charcoal Dust", hex: "#2B2C2D" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Distorted analog frequency graphics running vertically. High crew neck with custom 1x1 tight neck ribbing that never bobs or stretches out.",
    fabric: "100% Combed Cotton • 270 GSM",
    fit: "Boxy silhouette with extended elbow-length sleeves.",
    stock: 12,
    rating: 4.8,
    reviewsCount: 53,
    reviews: [
      { author: "Ananya P.", rating: 5, date: "5 days ago", comment: "The graphic print feels like part of the cotton, not a cheap plastic sticker." }
    ],
    featured: false,
    trending: true,
    newDrop: true,
    sale: false,
    image: "https://images.unsplash.com/photo-1503341338985-c0477be52513?auto=format&fit=crop&w=1000&h=1250&q=85"
  },

  // ==========================================
  // 2. T-SHIRTS (REGULAR / ESSENTIALS)
  // ==========================================
  {
    id: "cr-tee-01",
    name: "CORE // 01",
    subtitle: "Standard Cut Core Black Tee",
    slug: "core-01-black-tee",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "men",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1502389614483-e475fc34407e?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Pitch Black", hex: "#0A0A0A" },
      { name: "Graphite", hex: "#232323" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The non-negotiable daily uniform. 220 GSM single jersey with silky smooth silicone wash finish. Subtle tonal emblem embroidery at the left nape.",
    fabric: "100% Super-Combed Cotton • 220 GSM",
    fit: "Modern relaxed regular fit. Sits right at hip line.",
    stock: 25,
    rating: 4.9,
    reviewsCount: 140,
    reviews: [
      { author: "Aditya N.", rating: 5, date: "3 days ago", comment: "Bought 3 packs. Softest cotton I've worn." }
    ],
    featured: true,
    trending: false,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-tee-02",
    name: "CORE // 02",
    subtitle: "Essential Raw White Boxy Tee",
    slug: "core-02-white-tee",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "women",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1635650804263-1a1941e14df5?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Clean Chalk", hex: "#F7F6F2" },
      { name: "Cream Oat", hex: "#E8E4DA" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Zero see-through heavy weave cotton. Clean crew neckline with taped inner collar seams preventing friction and sweat staining.",
    fabric: "100% Combed Cotton • 230 GSM",
    fit: "Regular fit with slight boxiness through torso.",
    stock: 20,
    rating: 4.8,
    reviewsCount: 92,
    reviews: [
      { author: "Tanvi S.", rating: 5, date: "1 week ago", comment: "Finally a white t-shirt that is thick enough not to be sheer!" }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-tee-03",
    name: "ESSENTIAL // 03",
    subtitle: "Slate Grey Minimalist Tee",
    slug: "essential-03-slate-grey-tee",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "men",
    price: 949,
    originalPrice: 1299,
    discount: 26,
    images: [
      "https://images.unsplash.com/photo-1619474220518-26f31c776f6a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619474221266-0e23ce248c60?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619474413782-35a2004d37fc?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Slate Heather", hex: "#5C6066" },
      { name: "Deep Charcoal", hex: "#2D2F33" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Dyed in small batches for subtle color variations. Finished with blind hem stitch and tonal micro emblem printed using eco-friendly water-based discharge inks.",
    fabric: "100% Bio-Washed Cotton • 220 GSM",
    fit: "Standard relaxed silhouette.",
    stock: 15,
    rating: 4.7,
    reviewsCount: 58,
    reviews: [
      { author: "Kunal V.", rating: 5, date: "4 days ago", comment: "Slate grey color looks super elevated in person." }
    ],
    featured: false,
    trending: false,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1619474220518-26f31c776f6a?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-tee-04",
    name: "NOIR // 04",
    subtitle: "Noir Asymmetric Hem Street Tee",
    slug: "noir-04-asymmetric-tee",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "women",
    price: 999,
    originalPrice: 1399,
    discount: 28,
    images: [
      "https://images.unsplash.com/photo-1712100111183-db64be307c4a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1712094161637-eb14317f94d8?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1711977275687-60cf4a665747?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Total Eclipse", hex: "#050505" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Tailored with a stepped drop hemline and side slits. Minimal silicone brand badge at the left waist. Drapes cleanly over denim and trousers.",
    fabric: "95% Cotton, 5% Elastane • 240 GSM Stretch Jersey",
    fit: "Modern architectural regular fit.",
    stock: 11,
    rating: 4.9,
    reviewsCount: 71,
    reviews: [
      { author: "Dia M.", rating: 5, date: "2 days ago", comment: "The side slit makes it sit so well with high-waisted bottoms." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1712100111183-db64be307c4a?auto=format&fit=crop&w=1000&h=1250&q=85"
  },

  // ==========================================
  // 3. SHIRTS (OVERSHIRTS & FLANNELS)
  // ==========================================
  {
    id: "cr-sh-01",
    name: "SHADOW // 01",
    subtitle: "Heavyweight Boxy Canvas Overshirt",
    slug: "shadow-01-boxy-overshirt",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "men",
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619289398154-4d142dd4416f?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619289398204-2e90bf1722e9?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Washed Black", hex: "#1D1E20" },
      { name: "Earth Khaki", hex: "#4A463D" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Built like outerwear. 320 GSM washed cotton twill with dual bellows chest pockets, matte black snap closures, and an architectural straight cut hem.",
    fabric: "100% Heavy Cotton Twill Canvas • 320 GSM",
    fit: "Relaxed boxy overshirt cut, intentionally sized for layering.",
    stock: 8,
    rating: 4.9,
    reviewsCount: 52,
    reviews: [
      { author: "Harsh V.", rating: 5, date: "1 week ago", comment: "Can easily be worn as a light jacket in winters. The canvas feels bulletproof." }
    ],
    featured: true,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-sh-02",
    name: "DISTRICT // 02",
    subtitle: "Distressed Heavyweight Flannel Overshirt",
    slug: "district-02-flannel-overshirt",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "men",
    price: 1999,
    originalPrice: 2599,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1781106476626-6140a2317d44?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1781106476750-a998963f98b6?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1781106478473-5a5a410bc79b?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Grey / Black Check", hex: "#323438" },
      { name: "White / Shadow Plaid", hex: "#A8A8A8" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Brushed heavyweight yarn-dyed flannel with drop shoulder construction and raw distressed frayed bottom hem. Detailed with custom engraved horn buttons.",
    fabric: "100% Brushed Cotton Flannel • 290 GSM",
    fit: "Loose relaxed streetwear fit.",
    stock: 14,
    rating: 4.8,
    reviewsCount: 39,
    reviews: [
      { author: "Samarth B.", rating: 5, date: "3 days ago", comment: "The frayed bottom hem gives it such a grunge aesthetic. Super soft inside." }
    ],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1781106476626-6140a2317d44?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-sh-03",
    name: "VOID UTILITY // 03",
    subtitle: "Tactical Modular Utility Overshirt",
    slug: "void-utility-03-shirt",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "women",
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1532074662130-17f5486532b0?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1532074594020-93db173dfa95?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1532074338742-18fa9b2f5ccf?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Military Noir", hex: "#1C1D1F" },
      { name: "Concrete", hex: "#7B7E82" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Heavyweight tactical utility overshirt featuring modular cargo chest pockets, concealed placket, and relaxed drop-shoulder drape tailored for clean Gen-Z streetwear layering.",
    fabric: "High-Tensile Cotton Ripstop • 260 GSM",
    fit: "Relaxed oversized utility fit.",
    stock: 7,
    rating: 5.0,
    reviewsCount: 31,
    reviews: [
      { author: "Meera D.", rating: 5, date: "5 days ago", comment: "The tactical pockets are both functional and super stylish." }
    ],
    featured: true,
    trending: false,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1532074662130-17f5486532b0?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-sh-04",
    name: "AFTER HOURS // 04",
    subtitle: "Draped Camp Collar Tencel Overshirt",
    slug: "after-hours-04-camp-shirt",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "women",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1607166001421-d19e6085a4ea?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1790688637587-f352d0b4881d?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1771340183956-6f69d2d08f43?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Smoky Black", hex: "#161718" },
      { name: "Pearl Slate", hex: "#C7C5BE" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Silky fluid drape crafted with sustainable heavy Tencel twill. Open camp collar and relaxed relaxed boxy cut with dropped shoulders for effortless night city styling.",
    fabric: "100% Sustainable Tencel Modal • 190 GSM",
    fit: "Flowy, relaxed oversized drape.",
    stock: 12,
    rating: 4.8,
    reviewsCount: 46,
    reviews: [
      { author: "Kareena L.", rating: 5, date: "1 week ago", comment: "Breathes so well in Mumbai humidity. Looks super chic." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: false,
    image: "https://images.unsplash.com/photo-1607166001421-d19e6085a4ea?auto=format&fit=crop&w=1000&h=1250&q=85"
  },

  // ==========================================
  // 4. SWEATSHIRTS
  // ==========================================
  {
    id: "cr-sw-01",
    name: "FROST // 02",
    subtitle: "Heavyweight French Terry Crewneck",
    slug: "frost-02-crewneck-sweatshirt",
    category: "sweatshirts",
    categoryLabel: "Sweatshirts",
    gender: "men",
    price: 1999,
    originalPrice: 2699,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1770366927102-3124c00f34c8?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Ghost Ash Grey", hex: "#8A8D91" },
      { name: "Abyss Black", hex: "#0D0D0E" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Crafted from 380 GSM unbrushed loopback French Terry. Featuring side gusset ribs for athletic ease of motion and reverse cross-stitch collar detailing.",
    fabric: "100% Combed Cotton French Terry • 380 GSM Heavyweight",
    fit: "Vintage collegiate boxy fit with lowered armholes.",
    stock: 16,
    rating: 4.9,
    reviewsCount: 68,
    reviews: [
      { author: "Devansh K.", rating: 5, date: "4 days ago", comment: "The loopback terry interior doesn't make you sweat like cheap synthetic fleece does." }
    ],
    featured: true,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-sw-02",
    name: "RITUAL CREW // 04",
    subtitle: "High-Density Emblem Crewneck",
    slug: "ritual-crew-04-sweatshirt",
    category: "sweatshirts",
    categoryLabel: "Sweatshirts",
    gender: "men",
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1614975059016-370131093171?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1614975117103-1fcc7b69122f?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Deep Navy Night", hex: "#161D27" },
      { name: "Charcoal Marl", hex: "#2E3033" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Tonal 3D high-density silicone Cold Ritual sigil centered on chest. Flatlock seams throughout to reduce bulk, reinforced cuff ribbing.",
    fabric: "100% Compact Ring-Spun Cotton • 400 GSM",
    fit: "Slightly oversized street fit.",
    stock: 10,
    rating: 4.8,
    reviewsCount: 55,
    reviews: [
      { author: "Nikhil T.", rating: 5, date: "1 week ago", comment: "The silicone emblem is subtly reflective at night. Clean as hell." }
    ],
    featured: false,
    trending: false,
    newDrop: true,
    sale: false,
    image: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-sw-03",
    name: "VOID SWEATSHIRT // 08",
    subtitle: "Acid Wash Distressed Crewneck",
    slug: "void-sweatshirt-08-acid-wash",
    category: "sweatshirts",
    categoryLabel: "Sweatshirts",
    gender: "women",
    price: 2099,
    originalPrice: 2799,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1577649062751-0e8a27232c56?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1715146912865-cc51c9eb6e1b?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1715147074305-bd8031379922?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Acid Washed Charcoal", hex: "#353638" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Every piece undergoes an artisanal mineral enzyme wash creating a 1-of-1 weathered patina. Cut with exaggerated dropped shoulders and relaxed sleeve stack.",
    fabric: "100% Heavy French Terry • 360 GSM • Stone-Washed",
    fit: "Heavy drop shoulder relaxed oversized silhouette.",
    stock: 5,
    rating: 5.0,
    reviewsCount: 38,
    reviews: [
      { author: "Isha G.", rating: 5, date: "3 days ago", comment: "The vintage wash pattern is gorgeous! Feels like an archived designer piece." }
    ],
    featured: true,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1577649062751-0e8a27232c56?auto=format&fit=crop&w=1000&h=1250&q=85"
  },

  // ==========================================
  // 5. HOODIES
  // ==========================================
  {
    id: "cr-hd-01",
    name: "FROST // 01",
    subtitle: "Heavyweight 450 GSM Double-Hooded Pullover",
    slug: "frost-01-heavyweight-hoodie",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "men",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1652823780977-b22c0ed84c97?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1673092147872-5ddb03194341?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Glacial Black", hex: "#080808" },
      { name: "Frost Heather", hex: "#7E8287" },
      { name: "Icy Bone", hex: "#DCD8CF" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Our crowning armor. 450 GSM ultra-heavyweight brushed interior fleece. Double-layered hood that stands upright without drawstring cords, kangaroo pocket with reinforced bartacks.",
    fabric: "100% Combed Cotton • 450 GSM Brushed Fleece • Zero Shrinkage",
    fit: "Wide-bodied, dropped shoulder, cropped waist drape that stacks perfectly over tees.",
    stock: 12,
    rating: 5.0,
    reviewsCount: 185,
    reviews: [
      { author: "Rishabh C.", rating: 5, date: "Yesterday", comment: "The hood stands up on its own! Finally an Indian brand doing proper 450 GSM." },
      { author: "Aakash G.", rating: 5, date: "1 week ago", comment: "Wore this in Delhi winter nights, didn't even need a jacket." }
    ],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-hd-02",
    name: "AFTERDARK // 02",
    subtitle: "Heavyweight Dual-Zipper Boxy Hoodie",
    slug: "afterdark-02-zip-hoodie",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "women",
    price: 2699,
    originalPrice: 3499,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1695318953312-874aca6f54ff?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1695318955854-19eee02bf413?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1695318938806-5b5569c125e4?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Carbon Void", hex: "#141414" },
      { name: "Washed Graphite", hex: "#2E3033" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Ultra-heavyweight 420 GSM brushed fleece zip-hoodie designed with boxy dropped shoulders, custom gunmetal 2-way YKK double zippers, and relaxed layered street styling.",
    fabric: "100% Heavy Combed Cotton • 420 GSM Fleece",
    fit: "Boxy relaxed oversized streetwear fit.",
    stock: 7,
    rating: 4.9,
    reviewsCount: 94,
    reviews: [
      { author: "Sanya M.", rating: 5, date: "4 days ago", comment: "The double zipper lets you style the bottom open over wide-leg pants. Obsessed." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1695318953312-874aca6f54ff?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-hd-03",
    name: "VOID HOODIE // 03",
    subtitle: "Sub-Zero Cyber Graphic Hoodie",
    slug: "void-hoodie-03-graphic",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "men",
    price: 2599,
    originalPrice: 3399,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1611817757591-c3f345024273?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1508216310976-c518daae0cdc?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Pitch Void", hex: "#080808" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Minimal front ritual glyph with expansive cyber-schematic back art printed in reflective 3M silver ink. Concealed kangaroo pocket with earphone cord eyelet.",
    fabric: "100% Combed Cotton • 430 GSM",
    fit: "Relaxed boxy cut with ribbed side panels.",
    stock: 10,
    rating: 4.8,
    reviewsCount: 77,
    reviews: [
      { author: "Varun J.", rating: 5, date: "6 days ago", comment: "The 3M back print reflects intensely under phone flash and car headlights." }
    ],
    featured: true,
    trending: false,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-hd-04",
    name: "RITUAL // 04",
    subtitle: "Heavyweight French Terry Blanket Hoodie",
    slug: "ritual-04-heavyweight-hoodie",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "women",
    price: 2799,
    originalPrice: 3599,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1628112567639-b06b5633d13e?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1617209559467-0eec67d9ab3a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1617209570434-d9db3d33c1ea?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Raw Umber", hex: "#3B332D" },
      { name: "Deep Black", hex: "#111111" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "500 GSM loopback cotton terry with seamless shoulders, deep double-layered hood, and exaggerated kangaroo pocket. Styled for effortless oversized streetwear looks.",
    fabric: "100% Organic Heavy Cotton • 500 GSM Loopback",
    fit: "Ultra-heavy relaxed drop-shoulder fit.",
    stock: 4,
    rating: 5.0,
    reviewsCount: 112,
    reviews: [
      { author: "Kritika S.", rating: 5, date: "3 days ago", comment: "Heaviest hoodie I own. Incredible quality." }
    ],
    featured: true,
    trending: true,
    newDrop: true,
    sale: false,
    image: "https://images.unsplash.com/photo-1628112567639-b06b5633d13e?auto=format&fit=crop&w=1000&h=1250&q=85"
  },

  // ==========================================
  // 6. BAGGY JEANS (VISIBLE WIDE-LEG SILHOUETTES)
  // ==========================================
  {
    id: "cr-jns-01",
    name: "WASHED VOID // 01",
    subtitle: "Wide-Leg Acid Washed Baggy Denim",
    slug: "washed-void-01-baggy-jeans",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "men",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1681038696710-6a2af89767a8?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1687276154629-d4acac547d55?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Acid Mineral Grey", hex: "#464A4F" },
      { name: "Vintage Faded Blue", hex: "#5C6E82" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Constructed from 14.5 oz rigid 100% cotton Japanese-style denim. Engineered with generous knee room and a wide 10.5-inch leg opening designed to pool effortlessly over sneakers.",
    fabric: "100% Rigid Ring-Spun Cotton Denim • 14.5 oz",
    fit: "Mid-rise, extreme wide baggy leg with exaggerated ankle stacking.",
    stock: 11,
    rating: 4.9,
    reviewsCount: 120,
    reviews: [
      { author: "Akshay K.", rating: 5, date: "Yesterday", comment: "The stacking on Jordan 4s and Dunks is unmatched. Legit baggy, not semi-baggy." },
      { author: "Pranav M.", rating: 5, date: "1 week ago", comment: "Heavy 14.5oz denim feels so premium." }
    ],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-jns-02",
    name: "MIDNIGHT // 02",
    subtitle: "Midnight Jet Black Baggy Denim",
    slug: "midnight-02-baggy-jeans",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "women",
    price: 2399,
    originalPrice: 3199,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1613708913434-a4175d68c7f5?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1701556672514-f10d0451e296?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1731021347639-8aac941f5e29?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Stay-Black Noir", hex: "#0E0E0F" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    description: "Pure 14 oz rigid sulfur black denim. Cut with a generous wide-leg profile that stacks naturally over chunky sneakers and platform boots.",
    fabric: "100% Cotton Sulfur-Dyed Denim • 14 oz",
    fit: "High-waist wide-leg skater baggy fit with wide straight drop.",
    stock: 8,
    rating: 4.8,
    reviewsCount: 88,
    reviews: [
      { author: "Alia R.", rating: 5, date: "4 days ago", comment: "The wide-leg silhouette is so flattering! True 90s skater shape." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1613708913434-a4175d68c7f5?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-jns-03",
    name: "DISTRESSED BLUE // 03",
    subtitle: "Distressed Indigo Raw Edge Baggy Jeans",
    slug: "distressed-blue-03-baggy-jeans",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "men",
    price: 2599,
    originalPrice: 3399,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1773556663208-a03e86597258?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1784639080621-b68ef1368aa4?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1784639072018-dd85c44f992e?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Bleach Indigo", hex: "#526B88" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Vintage 90s archive wash with hand-frayed knee slashes reinforced with backer denim so they don't tear further. Whisker tinting on front thighs.",
    fabric: "100% Rigid Denim • 13.75 oz",
    fit: "Low-slung ultra wide-leg baggy fit.",
    stock: 5,
    rating: 4.7,
    reviewsCount: 65,
    reviews: [
      { author: "Farhan T.", rating: 5, date: "6 days ago", comment: "The knee distress looks authentic and doesn't rip apart when you sit." }
    ],
    featured: true,
    trending: false,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1773556663208-a03e86597258?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-jns-04",
    name: "RAW BLACK // 04",
    subtitle: "Raw Carpenter Wide Stacking Denim",
    slug: "raw-black-04-carpenter-jeans",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "women",
    price: 2699,
    originalPrice: 3499,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1788200366618-1900c493c409?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1788200366338-4e287e0aedab?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1788200587577-bdf2a13fa521?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Raw Carbon", hex: "#151617" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    description: "Wide-leg carpenter denim featuring double-knee paneling, utility hammer loop, and relaxed pooling hem designed for contemporary street styling.",
    fabric: "100% Selvedge-Finish Rigid Cotton • 14.5 oz",
    fit: "Relaxed wide-leg carpenter cut with pooling hem.",
    stock: 9,
    rating: 5.0,
    reviewsCount: 79,
    reviews: [
      { author: "Kavya N.", rating: 5, date: "3 days ago", comment: "The carpenter loops and wide silhouette are elite." }
    ],
    featured: false,
    trending: true,
    newDrop: true,
    sale: false,
    image: "https://images.unsplash.com/photo-1788200366618-1900c493c409?auto=format&fit=crop&w=1000&h=1250&q=85"
  },

  // ==========================================
  // 7. CARGO PANTS (TACTICAL & PARACHUTE)
  // ==========================================
  {
    id: "cr-crg-01",
    name: "UTILITY BLACK // 01",
    subtitle: "Tactical 8-Pocket Bungee Parachute Cargo",
    slug: "utility-black-01-tactical-cargo",
    category: "cargo-pants",
    categoryLabel: "Cargo Pants",
    gender: "men",
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1789938581278-4a28ff217f9c?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1789938663552-21b1dd1056af?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1789938581268-6f26076698c4?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Stealth Black", hex: "#0D0E10" },
      { name: "Gunmetal", hex: "#2E3033" }
    ],
    sizes: ["S (28-30)", "M (31-32)", "L (33-34)", "XL (35-36)", "XXL (37-38)"],
    description: "Engineered from ultra-durable high-tensile ripstop cotton. Features 8 accordion storage pockets, adjustable bungee cord ankle toggles, and articulated knees for unrestricted mobility.",
    fabric: "100% Ripstop Cotton • 280 GSM • Water-Repellent Nano Coating",
    fit: "Baggy parachute fit with dual ankle cinch toggles.",
    stock: 14,
    rating: 5.0,
    reviewsCount: 160,
    reviews: [
      { author: "Shaun D.", rating: 5, date: "2 days ago", comment: "Can fit phone, wallet, keys, AirPods and powerbank without sagging. Cinch cords are metal tipped!" }
    ],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-crg-02",
    name: "OLIVE RITUAL // 02",
    subtitle: "Relaxed Parachute Cargo",
    slug: "olive-ritual-02-parachute-cargo",
    category: "cargo-pants",
    categoryLabel: "Cargo Pants",
    gender: "women",
    price: 2199,
    originalPrice: 2799,
    discount: 21,
    images: [
      "https://images.unsplash.com/photo-1714030282710-4f003762bfb1?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1714030282568-48d5d7210ea6?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1714028553411-c4ad482b77a0?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Military Olive", hex: "#3B4235" },
      { name: "Dark Moss", hex: "#2E332A" }
    ],
    sizes: ["XS (24-26)", "S (27-28)", "M (29-30)", "L (31-32)", "XL (33-34)"],
    description: "Ultra-wide parachute volume crafted with lightweight water-resistant ripstop nylon. Knee darts for ergonomic movement, elastic waistband, and deep cargo flap pockets.",
    fabric: "High-Density Technical Cotton Twill • 270 GSM",
    fit: "Relaxed parachute volume with elastic waistband and internal drawstring.",
    stock: 9,
    rating: 4.8,
    reviewsCount: 95,
    reviews: [
      { author: "Simran C.", rating: 5, date: "1 week ago", comment: "The parachute volume is insane! Waistband is super comfy too." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1714030282710-4f003762bfb1?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-crg-03",
    name: "STONE // 03",
    subtitle: "Stone Wide-Cut Bungee Cargo",
    slug: "stone-03-wide-bungee-cargo",
    category: "cargo-pants",
    categoryLabel: "Cargo Pants",
    gender: "men",
    price: 2399,
    originalPrice: 3099,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1545272957-4a9a90740ce1?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1545273072-c541efad6ba6?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1686512488018-ac6c3102c046?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Desert Stone", hex: "#B8B1A2" },
      { name: "Concrete Grey", hex: "#7D8085" }
    ],
    sizes: ["S (28-30)", "M (31-32)", "L (33-34)", "XL (35-36)", "XXL (37-38)"],
    description: "Clean brutalist earthy tones. Oversized 3D side bellows with reflective cord pull tabs and reinforced saddle seat stitching for longevity.",
    fabric: "100% Mercerized Cotton Twill • 290 GSM",
    fit: "Wide-cut straight profile with bottom hem adjusters.",
    stock: 11,
    rating: 4.9,
    reviewsCount: 84,
    reviews: [
      { author: "Chaitanya P.", rating: 5, date: "3 days ago", comment: "The stone colorway goes crazy with black oversized tees." }
    ],
    featured: true,
    trending: false,
    newDrop: true,
    sale: true,
    image: "https://images.unsplash.com/photo-1545272957-4a9a90740ce1?auto=format&fit=crop&w=1000&h=1250&q=85"
  },
  {
    id: "cr-crg-04",
    name: "SHADOW // 04",
    subtitle: "Heavy Canvas Double-Knee Tactical Cargo",
    slug: "shadow-04-double-knee-cargo",
    category: "cargo-pants",
    categoryLabel: "Cargo Pants",
    gender: "women",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1660486044177-45cd45bb5e99?auto=format&fit=crop&w=1000&h=1250&q=85"
    ],
    colors: [
      { name: "Pitch Black", hex: "#0F0F10" }
    ],
    sizes: ["XS (24-26)", "S (27-28)", "M (29-30)", "L (31-32)", "XL (33-34)"],
    description: "Triple-stitched seams throughout heavy duck canvas. Reinforced double-knee shields with wide slouchy drape engineered for heavy-duty street aesthetics.",
    fabric: "100% Heavy Duck Cotton Canvas • 340 GSM",
    fit: "Loose slouchy wide workwear cargo fit.",
    stock: 10,
    rating: 4.9,
    reviewsCount: 75,
    reviews: [
      { author: "Farhan M.", rating: 5, date: "2 weeks ago", comment: "Indestructible canvas. Perfect for bike rides and gigs." }
    ],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&h=1250&q=85"
  }
];

// Robust, Case-Insensitive Product Retrievers (Lookup by either ID or Slug)
export const getProductById = (identifier) => {
  if (!identifier) return undefined;
  const clean = decodeURIComponent(String(identifier)).trim().toLowerCase();
  return products.find(p => 
    (p.id && p.id.toLowerCase() === clean) || 
    (p.slug && p.slug.toLowerCase() === clean)
  );
};

export const getProductBySlug = (slug) => {
  if (!slug) return undefined;
  const clean = decodeURIComponent(String(slug)).trim().toLowerCase();
  return products.find(p => 
    (p.slug && p.slug.toLowerCase() === clean) || 
    (p.id && p.id.toLowerCase() === clean)
  );
};

export const getProductsByCategory = (category) => {
  if (!category) return products;
  const clean = String(category).trim().toLowerCase();
  return products.filter(p => p.category && p.category.toLowerCase() === clean);
};

export const getProductsByGender = (gender) => {
  if (!gender || gender === 'all') return products;
  const clean = String(gender).trim().toLowerCase();
  return products.filter(p => p.gender && (p.gender.toLowerCase() === clean || p.gender === 'unisex'));
};

export const getNewDropProducts = () => products.filter(p => p.newDrop);
export const getTrendingProducts = () => products.filter(p => p.trending);
export const getSaleProducts = () => products.filter(p => p.sale && p.discount > 0);
export const getFeaturedProducts = () => products.filter(p => p.featured);

export default products;

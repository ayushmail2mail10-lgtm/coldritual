// ============================================================
// COLD RITUAL — PRODUCT CATALOG
// WEAR THE RITUAL.
// ============================================================

const products = [
  // ==========================================================
  // OVERSIZED T-SHIRTS
  // ==========================================================

  {
    id: "cr-ots-01",
    name: "VOID // 01",
    subtitle: "Oversized Heavyweight Tee",
    slug: "void-01",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "unisex",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    images: [
      "https://nonameneeded.com/cdn/shop/files/NNN3879copy.jpg?v=1710419689",
      "https://c.imgz.jp/950/102307950/102307950_39_d_500.jpg",
      "https://hedoniststorebali.com/cdn/shop/files/Photoroom_20240421_194440.jpg?v=1721890534&width=1946"
    ],
    colors: ["Black", "Washed Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A heavyweight oversized silhouette built for the everyday ritual. Clean, dark and minimal with a relaxed streetwear profile.",
    fabric: "100% Premium Cotton",
    fit: "Oversized",
    stock: 25,
    rating: 4.8,
    reviewsCount: 42,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-ots-02",
    name: "AFTERDARK // 03",
    subtitle: "Oversized Essential Tee",
    slug: "afterdark-03",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "unisex",
    price: 1399,
    originalPrice: 1899,
    discount: 26,
    images: [
      "https://static.ticimax.cloud/53661/uploads/urunresimleri/buyuk/erkek-siyah-oversize-basic-tshirt-0-a7bf.jpg",
      "https://images.pexels.com/photos/12738118/pexels-photo-12738118.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/13462505/pexels-photo-13462505.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Minimal oversized streetwear with a dark after-hours attitude. Designed to layer effortlessly with cargos and denim.",
    fabric: "100% Cotton",
    fit: "Oversized",
    stock: 30,
    rating: 4.7,
    reviewsCount: 35,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-ots-03",
    name: "COLD SIGNAL // 06",
    subtitle: "Heavyweight Street Tee",
    slug: "cold-signal-06",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "unisex",
    price: 1599,
    originalPrice: 2099,
    discount: 24,
    images: [
      "https://hedoniststorebali.com/cdn/shop/files/Photoroom_20240421_194440.jpg?v=1721890534&width=1946",
      "https://by-wear.com/cdn/shop/products/ReStaple_Look_015.jpg?v=1754544266",
      "https://nonameneeded.com/cdn/shop/files/NNN3879copy.jpg?v=1710419689"
    ],
    colors: ["Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A structured heavyweight tee with an oversized silhouette and cold monochrome character.",
    fabric: "100% Heavyweight Cotton",
    fit: "Oversized",
    stock: 18,
    rating: 4.9,
    reviewsCount: 51,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: false
  },

  {
    id: "cr-ots-04",
    name: "RITUAL // 04",
    subtitle: "Premium Oversized Tee",
    slug: "ritual-04",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "unisex",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    images: [
      "https://images.pexels.com/photos/12738118/pexels-photo-12738118.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://static.ticimax.cloud/53661/uploads/urunresimleri/buyuk/erkek-siyah-oversize-basic-tshirt-0-a7bf.jpg",
      "https://images.pexels.com/photos/28758241/pexels-photo-28758241.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A refined oversized tee designed around the COLD RITUAL philosophy: understated, heavy and built for repeat wear.",
    fabric: "100% Premium Cotton",
    fit: "Oversized",
    stock: 22,
    rating: 4.8,
    reviewsCount: 38,
    reviews: [],
    featured: true,
    trending: false,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-ots-05",
    name: "STATIC // 05",
    subtitle: "Washed Oversized Tee",
    slug: "static-05",
    category: "oversized-t-shirts",
    categoryLabel: "Oversized T-Shirts",
    gender: "unisex",
    price: 1599,
    originalPrice: 2099,
    discount: 24,
    images: [
      "https://images.pexels.com/photos/13462505/pexels-photo-13462505.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/29410797/pexels-photo-29410797.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/8970891/pexels-photo-8970891.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Washed Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed washed tee with a lived-in finish and oversized streetwear proportions.",
    fabric: "100% Washed Cotton",
    fit: "Oversized",
    stock: 20,
    rating: 4.7,
    reviewsCount: 31,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true
  },

  // ==========================================================
  // T-SHIRTS
  // ==========================================================

  {
    id: "cr-tee-01",
    name: "CORE // 01",
    subtitle: "Essential Black Tee",
    slug: "core-01",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "unisex",
    price: 999,
    originalPrice: 1399,
    discount: 29,
    images: [
      "https://images.pexels.com/photos/15544302/pexels-photo-15544302.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/12738118/pexels-photo-12738118.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://by-wear.com/cdn/shop/products/ReStaple_Look_015.jpg?v=1754544266"
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "The everyday COLD RITUAL essential. Clean proportions, premium cotton and a timeless black finish.",
    fabric: "100% Cotton",
    fit: "Relaxed",
    stock: 35,
    rating: 4.8,
    reviewsCount: 64,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: false,
    sale: true
  },

  {
    id: "cr-tee-02",
    name: "CORE // 02",
    subtitle: "Heavy Cotton Tee",
    slug: "core-02",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "unisex",
    price: 1099,
    originalPrice: 1499,
    discount: 27,
    images: [
      "https://images.pexels.com/photos/13462505/pexels-photo-13462505.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/13046261/pexels-photo-13046261.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/8066132/pexels-photo-8066132.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A heavier everyday tee with a structured fit and understated streetwear aesthetic.",
    fabric: "100% Heavy Cotton",
    fit: "Relaxed",
    stock: 28,
    rating: 4.7,
    reviewsCount: 47,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: false,
    sale: true
  },

  {
    id: "cr-tee-03",
    name: "ESSENTIAL // 03",
    subtitle: "Premium Daily Tee",
    slug: "essential-03",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "unisex",
    price: 1099,
    originalPrice: 1499,
    discount: 27,
    images: [
      "https://hedoniststorebali.com/cdn/shop/files/Photoroom_20240421_194440.jpg?v=1721890534&width=1946",
      "https://c.imgz.jp/950/102307950/102307950_39_d_500.jpg",
      "https://images.pexels.com/photos/15544302/pexels-photo-15544302.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A clean essential designed to sit at the centre of any COLD RITUAL rotation.",
    fabric: "100% Cotton",
    fit: "Relaxed",
    stock: 32,
    rating: 4.8,
    reviewsCount: 52,
    reviews: [],
    featured: true,
    trending: false,
    newDrop: false,
    sale: true
  },

  {
    id: "cr-tee-04",
    name: "NOIR // 04",
    subtitle: "Dark Minimal Tee",
    slug: "noir-04",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    gender: "unisex",
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    images: [
      "https://images.pexels.com/photos/13046261/pexels-photo-13046261.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/29410797/pexels-photo-29410797.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/8066132/pexels-photo-8066132.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Minimal black tee with a sharp premium profile for everyday styling.",
    fabric: "100% Premium Cotton",
    fit: "Relaxed",
    stock: 24,
    rating: 4.7,
    reviewsCount: 29,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true
  },

  // ==========================================================
  // SHIRTS
  // ==========================================================

  {
    id: "cr-sh-01",
    name: "SHADOW // 01",
    subtitle: "Relaxed Overshirt",
    slug: "shadow-01",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "unisex",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    images: [
      "https://image-cdn.hypb.st/https%3A/hypebeast.com/image/2023/07/represent-fw23-collection-first-drop-lookbook-release-info-009.jpg?cbr=1&q=90",
      "https://images.pexels.com/photos/15544302/pexels-photo-15544302.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/8066132/pexels-photo-8066132.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed dark overshirt designed for layering over tees and hoodies.",
    fabric: "Cotton Blend",
    fit: "Relaxed",
    stock: 16,
    rating: 4.8,
    reviewsCount: 24,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-sh-02",
    name: "DISTRICT // 02",
    subtitle: "Street Utility Shirt",
    slug: "district-02",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "unisex",
    price: 1799,
    originalPrice: 2399,
    discount: 25,
    images: [
      "https://images.pexels.com/photos/13462505/pexels-photo-13462505.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/13046261/pexels-photo-13046261.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/8066132/pexels-photo-8066132.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A modern utility-inspired shirt with a relaxed silhouette and urban character.",
    fabric: "Cotton Twill",
    fit: "Relaxed",
    stock: 19,
    rating: 4.7,
    reviewsCount: 21,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-sh-03",
    name: "VOID UTILITY // 03",
    subtitle: "Utility Overshirt",
    slug: "void-utility-03",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "unisex",
    price: 1999,
    originalPrice: 2699,
    discount: 26,
    images: [
      "https://image-cdn.hypb.st/https%3A/hypebeast.com/image/2023/07/represent-fw23-collection-first-drop-lookbook-release-info-009.jpg?cbr=1&q=90",
      "https://images.pexels.com/photos/29410797/pexels-photo-29410797.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/15544302/pexels-photo-15544302.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A utility-focused overshirt with a strong monochrome silhouette.",
    fabric: "Heavy Cotton Twill",
    fit: "Oversized",
    stock: 14,
    rating: 4.9,
    reviewsCount: 18,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: false
  },

  {
    id: "cr-sh-04",
    name: "AFTER HOURS // 04",
    subtitle: "Night Utility Shirt",
    slug: "after-hours-04",
    category: "shirts",
    categoryLabel: "Shirts",
    gender: "unisex",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    images: [
      "https://images.pexels.com/photos/8066132/pexels-photo-8066132.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/13046261/pexels-photo-13046261.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/13462505/pexels-photo-13462505.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An understated overshirt made for late-night layering and monochrome fits.",
    fabric: "Cotton Blend",
    fit: "Relaxed",
    stock: 17,
    rating: 4.8,
    reviewsCount: 20,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true
  },

  // ==========================================================
  // SWEATSHIRTS
  // ==========================================================

  {
    id: "cr-sw-01",
    name: "FROST // 02",
    subtitle: "Heavyweight Crewneck",
    slug: "frost-02",
    category: "sweatshirts",
    categoryLabel: "Sweatshirts",
    gender: "unisex",
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    images: [
      "https://c.imgz.jp/319/87112319/87112319b_18_d_500.jpg",
      "https://sc3.locondo.jp/contents/commodity_image/RK/RK6854EM017922_5_l.jpg",
      "https://moonlightmansion.com/cdn/shop/files/grey-hoodie-creative.jpg?v=1758371605&width=1445"
    ],
    colors: ["Grey", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A heavyweight crewneck built for cold-weather layering and everyday streetwear.",
    fabric: "Heavyweight Cotton Fleece",
    fit: "Relaxed",
    stock: 15,
    rating: 4.9,
    reviewsCount: 33,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-sw-02",
    name: "RITUAL CREW // 04",
    subtitle: "Signature Crewneck",
    slug: "ritual-crew-04",
    category: "sweatshirts",
    categoryLabel: "Sweatshirts",
    gender: "unisex",
    price: 2399,
    originalPrice: 3199,
    discount: 25,
    images: [
      "https://sc3.locondo.jp/contents/commodity_image/RK/RK6854EM017922_5_l.jpg",
      "https://c.imgz.jp/319/87112319/87112319b_18_d_500.jpg",
      "https://moonlightmansion.com/cdn/shop/files/grey-hoodie-creative.jpg?v=1758371605&width=1445"
    ],
    colors: ["Grey", "Washed Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Signature COLD RITUAL crewneck with a clean premium finish and substantial weight.",
    fabric: "Premium Cotton Fleece",
    fit: "Relaxed",
    stock: 13,
    rating: 4.8,
    reviewsCount: 27,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-sw-03",
    name: "VOID SWEATSHIRT // 08",
    subtitle: "Dark Heavyweight Crew",
    slug: "void-sweatshirt-08",
    category: "sweatshirts",
    categoryLabel: "Sweatshirts",
    gender: "unisex",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    images: [
      "https://moonlightmansion.com/cdn/shop/files/grey-hoodie-creative.jpg?v=1758371605&width=1445",
      "https://c.imgz.jp/319/87112319/87112319b_18_d_500.jpg",
      "https://sapiyo.co.uk/assets/hero-bg-BhEyjxJx.webp"
    ],
    colors: ["Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A dark heavyweight sweatshirt with a structured streetwear silhouette.",
    fabric: "Heavyweight Cotton Fleece",
    fit: "Oversized",
    stock: 12,
    rating: 4.9,
    reviewsCount: 19,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: false
  },

  // ==========================================================
  // HOODIES
  // ==========================================================

  {
    id: "cr-hd-01",
    name: "FROST // 01",
    subtitle: "Heavyweight Hoodie",
    slug: "frost-01",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "unisex",
    price: 2799,
    originalPrice: 3699,
    discount: 24,
    images: [
      "https://cdn.promptden.com/images/9ac3aeb8-b336-4d5d-a519-ef11c6a93ca5.jpg",
      "https://www.sapiyo.co.uk/assets/hero-bg-BhEyjxJx.webp",
      "https://images.pexels.com/photos/15964553/pexels-photo-15964553.jpeg?cs=tinysrgb&w=4078&fit=max"
    ],
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A heavyweight hoodie engineered around a relaxed, premium streetwear silhouette.",
    fabric: "Heavyweight Cotton Fleece",
    fit: "Oversized",
    stock: 15,
    rating: 4.9,
    reviewsCount: 46,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-hd-02",
    name: "AFTERDARK // 02",
    subtitle: "Oversized Night Hoodie",
    slug: "afterdark-02",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "unisex",
    price: 2899,
    originalPrice: 3799,
    discount: 24,
    images: [
      "https://moonlightmansion.com/cdn/shop/files/grey-hoodie-creative.jpg?v=1758371605&width=1445",
      "https://images.pexels.com/photos/8206226/pexels-photo-8206226.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://www.sapiyo.co.uk/assets/hero-bg-BhEyjxJx.webp"
    ],
    colors: ["Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed after-dark hoodie designed for oversized monochrome fits.",
    fabric: "Premium Cotton Fleece",
    fit: "Oversized",
    stock: 11,
    rating: 4.8,
    reviewsCount: 34,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-hd-03",
    name: "VOID HOODIE // 03",
    subtitle: "Signature Heavy Hoodie",
    slug: "void-hoodie-03",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "unisex",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    images: [
      "https://www.sapiyo.co.uk/assets/hero-bg-BhEyjxJx.webp",
      "https://cdn.promptden.com/images/9ac3aeb8-b336-4d5d-a519-ef11c6a93ca5.jpg",
      "https://images.pexels.com/photos/15964553/pexels-photo-15964553.jpeg?cs=tinysrgb&w=4078&fit=max"
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "The core COLD RITUAL hoodie: heavy, oversized and built for the everyday uniform.",
    fabric: "Heavyweight Cotton Fleece",
    fit: "Oversized",
    stock: 10,
    rating: 4.9,
    reviewsCount: 57,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: false
  },

  {
    id: "cr-hd-04",
    name: "RITUAL // 04",
    subtitle: "Premium Signature Hoodie",
    slug: "ritual-hoodie-04",
    category: "hoodies",
    categoryLabel: "Hoodies",
    gender: "unisex",
    price: 2899,
    originalPrice: 3799,
    discount: 24,
    images: [
      "https://images.pexels.com/photos/19475761/pexels-photo-19475761.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://moonlightmansion.com/cdn/shop/files/grey-hoodie-creative.jpg?v=1758371605&width=1445",
      "https://cdn.promptden.com/images/9ac3aeb8-b336-4d5d-a519-ef11c6a93ca5.jpg"
    ],
    colors: ["Grey", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A premium signature hoodie with a clean silhouette designed for everyday rotation.",
    fabric: "Premium Cotton Fleece",
    fit: "Oversized",
    stock: 14,
    rating: 4.8,
    reviewsCount: 39,
    reviews: [],
    featured: true,
    trending: false,
    newDrop: true,
    sale: true
  },

  // ==========================================================
  // BAGGY JEANS
  // ==========================================================

  {
    id: "cr-jns-01",
    name: "WASHED VOID // 01",
    subtitle: "Washed Baggy Denim",
    slug: "washed-void-01",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "unisex",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    images: [
      "https://vailyns.com/cdn/shop/files/BB9266EC-5646-494D-A5BC-FA7561E4311B.jpg?v=1773490885&width=3840",
      "https://poolhousenewyork.com/cdn/shop/files/new_tokyo_dad_jeans_japanese_denim_baggy_flare_jeans_daddy_jeans_made_in_usa_basketcase_jaded_man_london_lndn222.jpg?v=1739558810",
      "https://cdna.lystit.com/photos/balenciaga/6ce7e078/balenciaga-Black-Patched-Pockets-baggy-Jeans.jpeg"
    ],
    colors: ["Washed Blue", "Grey"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Relaxed baggy denim with a washed finish designed for contemporary streetwear silhouettes.",
    fabric: "100% Cotton Denim",
    fit: "Baggy",
    stock: 16,
    rating: 4.8,
    reviewsCount: 28,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-jns-02",
    name: "MIDNIGHT // 02",
    subtitle: "Dark Baggy Denim",
    slug: "midnight-02",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "unisex",
    price: 2599,
    originalPrice: 3399,
    discount: 24,
    images: [
      "https://poolhousenewyork.com/cdn/shop/files/new_tokyo_dad_jeans_japanese_denim_baggy_flare_jeans_daddy_jeans_made_in_usa_basketcase_jaded_man_london_lndn222.jpg?v=1739558810",
      "https://vailyns.com/cdn/shop/files/BB9266EC-5646-494D-A5BC-FA7561E4311B.jpg?v=1773490885&width=3840",
      "https://media.vogue.mx/photos/689500f186a756e0fa7523e7/master/w_1600%2Cc_limit/Jeans-grises-2199021233.jpg"
    ],
    colors: ["Dark Blue", "Black"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Dark relaxed denim with a wide-leg profile for modern streetwear styling.",
    fabric: "100% Cotton Denim",
    fit: "Baggy",
    stock: 13,
    rating: 4.9,
    reviewsCount: 31,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-jns-03",
    name: "DISTRESSED BLUE // 03",
    subtitle: "Distressed Baggy Jeans",
    slug: "distressed-blue-03",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "unisex",
    price: 2699,
    originalPrice: 3499,
    discount: 23,
    images: [
      "https://cdna.lystit.com/photos/balenciaga/6ce7e078/balenciaga-Black-Patched-Pockets-baggy-Jeans.jpeg",
      "https://vailyns.com/cdn/shop/files/BB9266EC-5646-494D-A5BC-FA7561E4311B.jpg?v=1773490885&width=3840",
      "https://poolhousenewyork.com/cdn/shop/files/new_tokyo_dad_jeans_japanese_denim_baggy_flare_jeans_daddy_jeans_made_in_usa_basketcase_jaded_man_london_lndn222.jpg?v=1739558810"
    ],
    colors: ["Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Distressed blue denim with a loose baggy profile and contemporary streetwear attitude.",
    fabric: "100% Cotton Denim",
    fit: "Baggy",
    stock: 12,
    rating: 4.8,
    reviewsCount: 25,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-jns-04",
    name: "RAW BLACK // 04",
    subtitle: "Raw Black Baggy Denim",
    slug: "raw-black-04",
    category: "baggy-jeans",
    categoryLabel: "Baggy Jeans",
    gender: "unisex",
    price: 2599,
    originalPrice: 3399,
    discount: 24,
    images: [
      "https://media.vogue.mx/photos/689500f186a756e0fa7523e7/master/w_1600%2Cc_limit/Jeans-grises-2199021233.jpg",
      "https://cdna.lystit.com/photos/balenciaga/6ce7e078/balenciaga-Black-Patched-Pockets-baggy-Jeans.jpeg",
      "https://vailyns.com/cdn/shop/files/BB9266EC-5646-494D-A5BC-FA7561E4311B.jpg?v=1773490885&width=3840"
    ],
    colors: ["Black", "Washed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Dark baggy denim built around a raw monochrome aesthetic and wide relaxed fit.",
    fabric: "100% Cotton Denim",
    fit: "Baggy",
    stock: 15,
    rating: 4.8,
    reviewsCount: 22,
    reviews: [],
    featured: true,
    trending: false,
    newDrop: true,
    sale: true
  },

  // ==========================================================
  // CARGOS
  // ==========================================================

  {
    id: "cr-crg-01",
    name: "UTILITY BLACK // 01",
    subtitle: "Technical Utility Cargo",
    slug: "utility-black-01",
    category: "cargos",
    categoryLabel: "Cargos",
    gender: "unisex",
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    images: [
      "https://images.pexels.com/photos/18459166/pexels-photo-18459166/free-photo-of-model-in-cargo-pants-and-black-top.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/12738118/pexels-photo-12738118.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://elixirgallery.com/file/file/resize?fill=0&h=2400&hash=9ac590bf9bd773409a900ebe7657ed35&id=17388&w=1620"
    ],
    colors: ["Black"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "A utility-first black cargo with multiple pockets and a relaxed contemporary silhouette.",
    fabric: "Cotton Ripstop",
    fit: "Relaxed",
    stock: 20,
    rating: 4.8,
    reviewsCount: 36,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-crg-02",
    name: "OLIVE RITUAL // 02",
    subtitle: "Relaxed Utility Cargo",
    slug: "olive-ritual-02",
    category: "cargos",
    categoryLabel: "Cargos",
    gender: "unisex",
    price: 2399,
    originalPrice: 3099,
    discount: 23,
    images: [
      "https://images.pexels.com/photos/5366340/pexels-photo-5366340.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/23602560/pexels-photo-23602560.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/20267265/pexels-photo-20267265.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Olive", "Dark Green"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "An olive utility cargo designed to add a muted tactical edge to everyday fits.",
    fabric: "Cotton Ripstop",
    fit: "Relaxed",
    stock: 18,
    rating: 4.7,
    reviewsCount: 29,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-crg-03",
    name: "STONE // 03",
    subtitle: "Stone Utility Cargo",
    slug: "stone-03",
    category: "cargos",
    categoryLabel: "Cargos",
    gender: "unisex",
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    images: [
      "https://images.pexels.com/photos/18459166/pexels-photo-18459166/free-photo-of-model-in-cargo-pants-and-black-top.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://elixirgallery.com/file/file/resize?fill=0&h=2400&hash=9ac590bf9bd773409a900ebe7657ed35&id=17388&w=1620",
      "https://images.pexels.com/photos/5366340/pexels-photo-5366340.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Stone", "Beige"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Neutral stone cargo pants with a relaxed fit designed for tonal streetwear outfits.",
    fabric: "Cotton Twill",
    fit: "Relaxed",
    stock: 17,
    rating: 4.7,
    reviewsCount: 23,
    reviews: [],
    featured: false,
    trending: true,
    newDrop: true,
    sale: true
  },

  {
    id: "cr-crg-04",
    name: "SHADOW // 04",
    subtitle: "Dark Utility Cargo",
    slug: "shadow-04",
    category: "cargos",
    categoryLabel: "Cargos",
    gender: "unisex",
    price: 2399,
    originalPrice: 3099,
    discount: 23,
    images: [
      "https://images.pexels.com/photos/20267265/pexels-photo-20267265.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/23602560/pexels-photo-23602560.jpeg?auto=compress&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/18459166/pexels-photo-18459166/free-photo-of-model-in-cargo-pants-and-black-top.jpeg?auto=compress&dpr=1&h=750&w=1260"
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "A dark utility cargo designed for monochrome outfits and relaxed streetwear styling.",
    fabric: "Cotton Ripstop",
    fit: "Relaxed",
    stock: 16,
    rating: 4.8,
    reviewsCount: 26,
    reviews: [],
    featured: true,
    trending: true,
    newDrop: true,
    sale: true
  }
];

// ============================================================
// IMAGE FALLBACK
// Ensures every product also exposes its primary image.
// ============================================================

products.forEach((product) => {
  product.image = product.images?.[0] || "";
});

// ============================================================
// PRODUCT HELPERS
// ============================================================

export const getProductById = (identifier) => {
  if (!identifier) return undefined;

  const clean = decodeURIComponent(String(identifier))
    .trim()
    .toLowerCase();

  return products.find(
    (product) =>
      (product.id && product.id.toLowerCase() === clean) ||
      (product.slug && product.slug.toLowerCase() === clean)
  );
};

export const getProductBySlug = (slug) => {
  if (!slug) return undefined;

  const clean = decodeURIComponent(String(slug))
    .trim()
    .toLowerCase();

  return products.find(
    (product) =>
      (product.slug && product.slug.toLowerCase() === clean) ||
      (product.id && product.id.toLowerCase() === clean)
  );
};

export const getProductsByCategory = (category) => {
  if (!category) return products;

  const clean = String(category).trim().toLowerCase();

  return products.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase() === clean
  );
};

export const getProductsByGender = (gender) => {
  if (!gender || gender === "all") return products;

  const clean = String(gender).trim().toLowerCase();

  return products.filter(
    (product) =>
      product.gender &&
      (
        product.gender.toLowerCase() === clean ||
        product.gender.toLowerCase() === "unisex"
      )
  );
};

export const getNewDropProducts = () =>
  products.filter((product) => product.newDrop);

export const getTrendingProducts = () =>
  products.filter((product) => product.trending);

export const getSaleProducts = () =>
  products.filter(
    (product) => product.sale && product.discount > 0
  );

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

// ============================================================
// DEFAULT EXPORT
// ============================================================

export { products };
export default products;
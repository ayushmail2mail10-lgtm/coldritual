// ============================================================
// COLD RITUAL — PRODUCT CATALOG
// WEAR THE RITUAL.
// ============================================================

const products = [
  {
    "id": "cr-ots-01",
    "name": "VOID // 01",
    "subtitle": "Oversized Heavyweight Tee",
    "slug": "void-01",
    "category": "oversized-t-shirts",
    "categoryLabel": "Oversized T-Shirts",
    "gender": "unisex",
    "price": 1499,
    "originalPrice": 1999,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0E0E0E"
      },
      {
        "name": "Washed Carbon",
        "hex": "#232426"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "An architectural heavyweight oversized silhouette built for the everyday ritual. 240 GSM dense cotton with engineered drop shoulders, high ribbed collar, and minimal dark aesthetics.",
    "fabric": "100% 240 GSM Combed Cotton",
    "fit": "Oversized Boxy",
    "stock": 25,
    "rating": 4.8,
    "reviewsCount": 42,
    "reviews": [
      {
        "id": "rev-1",
        "author": "Kabir S.",
        "rating": 5,
        "date": "18 Sep 2026",
        "comment": "The weight and drop on this tee are unreal. Completely rivals luxury Milan streetwear."
      },
      {
        "id": "rev-2",
        "author": "Dev M.",
        "rating": 5,
        "date": "24 Sep 2026",
        "comment": "Doesn't lose shape after washing. Collar stays stiff and sharp."
      }
    ],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-ots-02",
    "name": "AFTERDARK // 03",
    "subtitle": "Cyber Monolith Oversized Tee",
    "slug": "afterdark-03",
    "category": "oversized-t-shirts",
    "categoryLabel": "Oversized T-Shirts",
    "gender": "unisex",
    "price": 1399,
    "originalPrice": 1899,
    "discount": 26,
    "images": [
      "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1615903040611-e599dfaa6752?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#080808"
      },
      {
        "name": "Cold Charcoal",
        "hex": "#2B2B2B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Minimal oversized streetwear with a dark after-hours attitude. Designed to layer effortlessly with tactical cargos and heavy stacking denim.",
    "fabric": "100% Heavy Combed Cotton 250 GSM",
    "fit": "Oversized Boxy",
    "stock": 30,
    "rating": 4.7,
    "reviewsCount": 35,
    "reviews": [
      {
        "id": "rev-3",
        "author": "Aditya R.",
        "rating": 5,
        "date": "15 Sep 2026",
        "comment": "The boxy drape on the shoulders is perfect. Wear it twice a week."
      }
    ],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-ots-03",
    "name": "COLD SIGNAL // 06",
    "subtitle": "Heavyweight Street Tee",
    "slug": "cold-signal-06",
    "category": "oversized-t-shirts",
    "categoryLabel": "Oversized T-Shirts",
    "gender": "unisex",
    "price": 1599,
    "originalPrice": 2099,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Washed Black",
        "hex": "#1C1C1E"
      },
      {
        "name": "Ash Grey",
        "hex": "#7D838A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A structured heavyweight tee with an oversized silhouette and cold monochrome character. Vintage pigment wash creates a weathered industrial finish.",
    "fabric": "100% 260 GSM Dense Jersey",
    "fit": "Architectural Drop-Shoulder",
    "stock": 18,
    "rating": 4.9,
    "reviewsCount": 51,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": false
  },
  {
    "id": "cr-ots-04",
    "name": "RITUAL // 04",
    "subtitle": "Premium Oversized Signature Tee",
    "slug": "ritual-04",
    "category": "oversized-t-shirts",
    "categoryLabel": "Oversized T-Shirts",
    "gender": "unisex",
    "price": 1499,
    "originalPrice": 1999,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0E0E0E"
      },
      {
        "name": "Concrete",
        "hex": "#9C9991"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "A refined oversized tee designed around the COLD RITUAL philosophy: understated, heavy and built for repeat wear. Reinforced double-needle stitching along the hems.",
    "fabric": "100% Ring-Spun Cotton 240 GSM",
    "fit": "Relaxed Boxy",
    "stock": 22,
    "rating": 4.8,
    "reviewsCount": 38,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-ots-05",
    "name": "STATIC // 05",
    "subtitle": "Washed Mineral Oversized Tee",
    "slug": "static-05",
    "category": "oversized-t-shirts",
    "categoryLabel": "Oversized T-Shirts",
    "gender": "unisex",
    "price": 1599,
    "originalPrice": 2099,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Washed Carbon",
        "hex": "#232426"
      },
      {
        "name": "Shadow Grey",
        "hex": "#4A4D52"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A relaxed washed tee with a lived-in finish and oversized streetwear proportions. Soft-hand feel combined with heavyweight structured body.",
    "fabric": "100% Acid Washed Jersey 250 GSM",
    "fit": "Loose Drop Shoulder",
    "stock": 20,
    "rating": 4.7,
    "reviewsCount": 31,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-tee-01",
    "name": "CORE // 01",
    "subtitle": "Essential Heavyweight Black Tee",
    "slug": "core-01",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "gender": "unisex",
    "price": 999,
    "originalPrice": 1399,
    "discount": 29,
    "images": [
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The everyday COLD RITUAL essential. Clean proportions, premium combed cotton, and a timeless black finish. Designed for clean daily layering.",
    "fabric": "100% Combed Single Jersey 220 GSM",
    "fit": "Standard Street Relaxed",
    "stock": 35,
    "rating": 4.8,
    "reviewsCount": 64,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-tee-02",
    "name": "CORE // 02",
    "subtitle": "Monochrome Bone Ritual Tee",
    "slug": "core-02",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "gender": "unisex",
    "price": 1099,
    "originalPrice": 1499,
    "discount": 27,
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Off-White Bone",
        "hex": "#E8E6DF"
      },
      {
        "name": "Obsidian Black",
        "hex": "#0E0E0E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A versatile minimal tee built for year-round styling. The subtle off-white bone shade complements dark outerwear effortlessly.",
    "fabric": "100% Combed Single Jersey 220 GSM",
    "fit": "Standard Street Relaxed",
    "stock": 28,
    "rating": 4.6,
    "reviewsCount": 29,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-tee-03",
    "name": "ESSENTIAL // 03",
    "subtitle": "Charcoal Mineral Everyday Tee",
    "slug": "essential-03",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "gender": "unisex",
    "price": 1099,
    "originalPrice": 1499,
    "discount": 27,
    "images": [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Charcoal Heather",
        "hex": "#2E3033"
      },
      {
        "name": "Stone",
        "hex": "#9C9991"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A deep charcoal everyday tee that balances casual comfort with an understated streetwear attitude. High tensile yarn prevents pilling.",
    "fabric": "100% Compact Spun Cotton 220 GSM",
    "fit": "Boxy Clean",
    "stock": 24,
    "rating": 4.7,
    "reviewsCount": 27,
    "reviews": [],
    "featured": false,
    "trending": false,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-tee-04",
    "name": "NOIR // 04",
    "subtitle": "Embroidered Insignia Clean Tee",
    "slug": "noir-04",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "gender": "unisex",
    "price": 1199,
    "originalPrice": 1599,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#080808"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "A dark staple crafted from dense combed cotton with a clean neckline, tonal ritual crest on the upper chest, and sharp streetwear fit.",
    "fabric": "100% 230 GSM Heavy Cotton",
    "fit": "Structured Regular",
    "stock": 20,
    "rating": 4.8,
    "reviewsCount": 33,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-sh-01",
    "name": "SHADOW // 01",
    "subtitle": "Heavyweight Boxy Canvas Overshirt",
    "slug": "shadow-01",
    "category": "shirts",
    "categoryLabel": "Shirts",
    "gender": "unisex",
    "price": 1899,
    "originalPrice": 2499,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1619289398142-90d6729f8c67?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#080808"
      },
      {
        "name": "Dark Carbon",
        "hex": "#1F2124"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A heavyweight boxy overshirt cut from durable cotton canvas. Functional chest pockets, matte black snap closures, and a structured fit designed for layering.",
    "fabric": "320 GSM Duck Canvas Cotton",
    "fit": "Boxy Layering Fit",
    "stock": 16,
    "rating": 4.9,
    "reviewsCount": 39,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-sh-02",
    "name": "DISTRICT // 02",
    "subtitle": "Minimalist Twill Utility Overshirt",
    "slug": "district-02",
    "category": "shirts",
    "categoryLabel": "Shirts",
    "gender": "unisex",
    "price": 1799,
    "originalPrice": 2399,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0E0E0E"
      },
      {
        "name": "Iron Grey",
        "hex": "#3A3D42"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A dark utility overshirt engineered with clean seams and understated urban styling. Pairs perfectly over any ColdRitual oversized graphic tee.",
    "fabric": "Heavy Twill Cotton Blend 280 GSM",
    "fit": "Straight Cut Utility",
    "stock": 19,
    "rating": 4.7,
    "reviewsCount": 22,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-sh-03",
    "name": "VOID UTILITY // 03",
    "subtitle": "Tactical Dual-Pocket Button-Down",
    "slug": "void-utility-03",
    "category": "shirts",
    "categoryLabel": "Shirts",
    "gender": "unisex",
    "price": 1999,
    "originalPrice": 2599,
    "discount": 23,
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Stealth Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A tactical-leaning overshirt with structured pockets, hidden placket, and a sharp minimal collar. Built for dark metro nights.",
    "fabric": "Reinforced Ripstop Weave 290 GSM",
    "fit": "Relaxed Tactical Silhouette",
    "stock": 14,
    "rating": 4.8,
    "reviewsCount": 28,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": true,
    "sale": false
  },
  {
    "id": "cr-sh-04",
    "name": "AFTER HOURS // 04",
    "subtitle": "Structured Nightwear Overshirt",
    "slug": "after-hours-04",
    "category": "shirts",
    "categoryLabel": "Shirts",
    "gender": "unisex",
    "price": 1899,
    "originalPrice": 2499,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Black Noir",
        "hex": "#080808"
      },
      {
        "name": "Washed Slate",
        "hex": "#414750"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A dark statement overshirt featuring dropped shoulders, industrial metal buttons, and a clean structured hemline.",
    "fabric": "Heavy Gabardine Cotton 300 GSM",
    "fit": "Drop Shoulder Boxy",
    "stock": 17,
    "rating": 4.8,
    "reviewsCount": 31,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-sw-01",
    "name": "FROST // 02",
    "subtitle": "Heavyweight French Terry Crewneck",
    "slug": "frost-02",
    "category": "sweatshirts",
    "categoryLabel": "Sweatshirts",
    "gender": "unisex",
    "price": 2299,
    "originalPrice": 2999,
    "discount": 23,
    "images": [
      "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1769867415503-14bbe0c02387?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Ice Slate",
        "hex": "#7E848D"
      },
      {
        "name": "Deep Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Crafted from 400 GSM brushed French terry cotton. A minimal crewneck silhouette with architectural ribbing and a cold slate color profile.",
    "fabric": "400 GSM 100% French Terry Cotton",
    "fit": "Relaxed Boxy Drop",
    "stock": 21,
    "rating": 4.8,
    "reviewsCount": 34,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-sw-02",
    "name": "RITUAL CREW // 04",
    "subtitle": "Drop-Shoulder Washed Crewneck",
    "slug": "ritual-crew-04",
    "category": "sweatshirts",
    "categoryLabel": "Sweatshirts",
    "gender": "unisex",
    "price": 2399,
    "originalPrice": 3199,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Washed Carbon",
        "hex": "#222428"
      },
      {
        "name": "Ash Heather",
        "hex": "#63676E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A wide boxy crewneck finished with enzyme wash treatment for a lived-in texture. Features reinforced ribbed cuffs and custom ritual aglets.",
    "fabric": "420 GSM Brushed Fleece",
    "fit": "Wide Boxy Cut",
    "stock": 18,
    "rating": 4.7,
    "reviewsCount": 26,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-sw-03",
    "name": "VOID SWEATSHIRT // 08",
    "subtitle": "Architectural Raw Seam Crewneck",
    "slug": "void-sweatshirt-08",
    "category": "sweatshirts",
    "categoryLabel": "Sweatshirts",
    "gender": "unisex",
    "price": 2499,
    "originalPrice": 3299,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#080808"
      },
      {
        "name": "Cold Charcoal",
        "hex": "#28292D"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A monochrome luxury crewneck with raw exposed seam accents, high-density collar, and heavy drape engineered for urban sub-climates.",
    "fabric": "440 GSM Dense Loopback Terry",
    "fit": "Architectural Oversized",
    "stock": 15,
    "rating": 4.9,
    "reviewsCount": 41,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": true,
    "sale": false
  },
  {
    "id": "cr-hd-01",
    "name": "FROST // 01",
    "subtitle": "Heavyweight 450 GSM Glacial Hoodie",
    "slug": "frost-01",
    "category": "hoodies",
    "categoryLabel": "Hoodies",
    "gender": "unisex",
    "price": 2799,
    "originalPrice": 3699,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Glacial Black",
        "hex": "#0C0D10"
      },
      {
        "name": "Heather Slate",
        "hex": "#5C626C"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "The crown silhouette of ColdRitual. Cut from 450 GSM double-brushed cotton fleece with an oversized double-layered hood, dropped shoulders, and matte black eyelets.",
    "fabric": "450 GSM Double-Faced Fleece, Metal Eyelets",
    "fit": "Structured Heavy Drape",
    "stock": 19,
    "rating": 4.9,
    "reviewsCount": 68,
    "reviews": [
      {
        "id": "rev-hd1",
        "author": "Vihaan K.",
        "rating": 5,
        "date": "20 Sep 2026",
        "comment": "Heaviest hoodie I own. The hood stays structured and doesn't collapse."
      }
    ],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-hd-02",
    "name": "AFTERDARK // 02",
    "subtitle": "Dual-Zipper Utility Streetwear Hoodie",
    "slug": "afterdark-02",
    "category": "hoodies",
    "categoryLabel": "Hoodies",
    "gender": "unisex",
    "price": 2899,
    "originalPrice": 3799,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1695318953312-874aca6f54ff?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1695318953312-874aca6f54ff?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1695318953312-874aca6f54ff?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1695318953312-874aca6f54ff?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Shadow Charcoal",
        "hex": "#25272B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A dark utility hoodie with custom dual-way metal zippers, kangaroo pouch with hidden zip pocket, and extra sleeve stacking length.",
    "fabric": "460 GSM Heavyweight Brushed Fleece",
    "fit": "Oversized Dual-Zipper Silhouette",
    "stock": 14,
    "rating": 4.8,
    "reviewsCount": 47,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": false
  },
  {
    "id": "cr-hd-03",
    "name": "VOID HOODIE // 03",
    "subtitle": "Monochrome Minimalist Streetwear Hoodie",
    "slug": "void-hoodie-03",
    "category": "hoodies",
    "categoryLabel": "Hoodies",
    "gender": "unisex",
    "price": 2999,
    "originalPrice": 3999,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Deep Void Black",
        "hex": "#060606"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Clean, monolithic and zero excess. 480 GSM ultra-heavyweight cotton fleece designed without exterior drawstrings for a pure architectural aesthetic.",
    "fabric": "480 GSM Single-Origin Heavy Cotton",
    "fit": "Boxy Dropped-Shoulder Architectural",
    "stock": 12,
    "rating": 4.9,
    "reviewsCount": 53,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-hd-04",
    "name": "RITUAL // 04",
    "subtitle": "Raw Hem Washed Ritual Hoodie",
    "slug": "ritual-hoodie-04",
    "category": "hoodies",
    "categoryLabel": "Hoodies",
    "gender": "unisex",
    "price": 2899,
    "originalPrice": 3899,
    "discount": 26,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=focalpoint&fp-x=0.48&fp-y=0.68&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.42&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Washed Obsidian",
        "hex": "#1A1A1E"
      },
      {
        "name": "Muted Iron",
        "hex": "#3D4148"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An enzyme washed heavyweight hoodie finished with raw hem trims, reinforced ribbed side gussets, and subtle ritual embroidery on the wrist.",
    "fabric": "450 GSM Vintage Enzyme Washed Cotton",
    "fit": "Relaxed Heavyweight",
    "stock": 16,
    "rating": 4.7,
    "reviewsCount": 36,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-jns-01",
    "name": "WASHED VOID // 01",
    "subtitle": "Wide-Leg Acid Washed Baggy Denim",
    "slug": "washed-void-01",
    "category": "baggy-jeans",
    "categoryLabel": "Baggy Jeans",
    "gender": "unisex",
    "price": 2499,
    "originalPrice": 3299,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Acid Mineral Wash",
        "hex": "#485563"
      },
      {
        "name": "Faded Grey",
        "hex": "#6D737A"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "14.5 oz rigid denim engineered with a generous wide-leg cut that stacks naturally over chunky sneakers and boots. Acid wash brings out complex vintage tonal depths.",
    "fabric": "14.5 oz 100% Rigid Ring-Spun Cotton Denim",
    "fit": "Wide Leg Stacking Silhouette",
    "stock": 22,
    "rating": 4.8,
    "reviewsCount": 44,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-jns-02",
    "name": "MIDNIGHT // 02",
    "subtitle": "Stay-Black Heavy Wide-Leg Denim",
    "slug": "midnight-02",
    "category": "baggy-jeans",
    "categoryLabel": "Baggy Jeans",
    "gender": "unisex",
    "price": 2599,
    "originalPrice": 3399,
    "discount": 24,
    "images": [
      "https://images.unsplash.com/photo-1613708913434-a4175d68c7f5?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1613708913434-a4175d68c7f5?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1613708913434-a4175d68c7f5?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1613708913434-a4175d68c7f5?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Stay Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Dark Carbon",
        "hex": "#1E2024"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "Sulfur-dyed stay-black heavyweight denim built to retain deep midnight pigmentation wash after wash. Extra wide hem circumference for definitive streetwear drape.",
    "fabric": "15 oz Sulfur Black Denim (Resists Fading)",
    "fit": "Voluminous Stacking Cut",
    "stock": 18,
    "rating": 4.9,
    "reviewsCount": 52,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": true,
    "sale": false
  },
  {
    "id": "cr-jns-03",
    "name": "DISTRESSED BLUE // 03",
    "subtitle": "Vintage Stonewash Streetwear Denim",
    "slug": "distressed-blue-03",
    "category": "baggy-jeans",
    "categoryLabel": "Baggy Jeans",
    "gender": "unisex",
    "price": 2699,
    "originalPrice": 3599,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Vintage Indigo Wash",
        "hex": "#354A65"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "Subtle hand-scraped abrasions and vintage stonewashing create an authentic worn aesthetic without sacrificing denim structural integrity.",
    "fabric": "14.2 oz Vintage Washed Denim, Custom Hardware",
    "fit": "Relaxed Skater Wide-Leg",
    "stock": 16,
    "rating": 4.7,
    "reviewsCount": 31,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-jns-04",
    "name": "RAW BLACK // 04",
    "subtitle": "Rigid Selvedge Black Baggy Jeans",
    "slug": "raw-black-04",
    "category": "baggy-jeans",
    "categoryLabel": "Baggy Jeans",
    "gender": "unisex",
    "price": 2599,
    "originalPrice": 3499,
    "discount": 26,
    "images": [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Raw Black",
        "hex": "#080808"
      },
      {
        "name": "Washed Carbon",
        "hex": "#202124"
      }
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "Heavy unwashed raw black denim. Holds a firm, sculpted architectural drape that breaks in uniquely to the wearer's movement over time.",
    "fabric": "14.8 oz Raw Unwashed Stiff Denim",
    "fit": "Structured Wide Stacking",
    "stock": 20,
    "rating": 4.8,
    "reviewsCount": 37,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-crg-01",
    "name": "UTILITY BLACK // 01",
    "subtitle": "Tactical 8-Pocket Bungee Parachute Cargo",
    "slug": "utility-black-01",
    "category": "cargo-pants",
    "categoryLabel": "Cargo Pants",
    "gender": "unisex",
    "price": 2299,
    "originalPrice": 2999,
    "discount": 23,
    "images": [
      "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Stealth Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S (28-30)",
      "M (31-32)",
      "L (33-34)",
      "XL (35-36)"
    ],
    "description": "Modular streetwear cargo pants equipped with 8 ergonomic bellows pockets, elastic bungee ankle adjusters, and durable water-resistant ripstop canvas.",
    "fabric": "Water-Repellent Ripstop Canvas with Bungee Cinch",
    "fit": "Relaxed Parachute Silhouette",
    "stock": 25,
    "rating": 4.9,
    "reviewsCount": 58,
    "reviews": [
      {
        "id": "rev-crg1",
        "author": "Tanishq B.",
        "rating": 5,
        "date": "22 Sep 2026",
        "comment": "The ankle bungees let you switch between baggy stacking and tight cuff. Insanely versatile."
      }
    ],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": true
  },
  {
    "id": "cr-crg-02",
    "name": "OLIVE RITUAL // 02",
    "subtitle": "Combat Modular Multi-Pocket Cargo",
    "slug": "olive-ritual-02",
    "category": "cargo-pants",
    "categoryLabel": "Cargo Pants",
    "gender": "unisex",
    "price": 2399,
    "originalPrice": 3199,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1714030282710-4f003762bfb1?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1714030282710-4f003762bfb1?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1714030282710-4f003762bfb1?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1714030282710-4f003762bfb1?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Dark Olive",
        "hex": "#2E332A"
      },
      {
        "name": "Tactical Drab",
        "hex": "#3B4237"
      }
    ],
    "sizes": [
      "S (28-30)",
      "M (31-32)",
      "L (33-34)",
      "XL (35-36)"
    ],
    "description": "Muted dark olive combat cargo pants cut from heavy twill ripstop. Features articulated knee darts for unrestricted motion and deep utility storage.",
    "fabric": "Heavyweight Cotton Twill Ripstop 290 GSM",
    "fit": "Adjustable Ankle Taper Parachute",
    "stock": 19,
    "rating": 4.8,
    "reviewsCount": 39,
    "reviews": [],
    "featured": true,
    "trending": true,
    "newDrop": true,
    "sale": false
  },
  {
    "id": "cr-crg-03",
    "name": "STONE // 03",
    "subtitle": "Modular Technical Drawcord Cargo",
    "slug": "stone-03",
    "category": "cargo-pants",
    "categoryLabel": "Cargo Pants",
    "gender": "unisex",
    "price": 2299,
    "originalPrice": 3099,
    "discount": 26,
    "images": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Muted Stone",
        "hex": "#8F8D87"
      },
      {
        "name": "Concrete",
        "hex": "#63625E"
      }
    ],
    "sizes": [
      "S (28-30)",
      "M (31-32)",
      "L (33-34)",
      "XL (35-36)"
    ],
    "description": "Clean stone grey technical cargos featuring matte aluminum eyelets, quick-cinch elastic cuffs, and flat-profile ergonomic cargo flaps.",
    "fabric": "Dense Matte Nylon Blend 260 GSM",
    "fit": "Wide Cut with Toggle Hem",
    "stock": 21,
    "rating": 4.7,
    "reviewsCount": 33,
    "reviews": [],
    "featured": false,
    "trending": true,
    "newDrop": false,
    "sale": true
  },
  {
    "id": "cr-crg-04",
    "name": "SHADOW // 04",
    "subtitle": "Stealth Wide Tactical Ripstop Cargo",
    "slug": "shadow-04",
    "category": "cargo-pants",
    "categoryLabel": "Cargo Pants",
    "gender": "unisex",
    "price": 2399,
    "originalPrice": 3199,
    "discount": 25,
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45&fp-z=1.35&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&crop=focalpoint&fp-x=0.52&fp-y=0.80&fp-z=1.4&w=1000&h=1250&q=85",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.60&fp-z=1.85&w=1000&h=1250&q=85"
    ],
    "colors": [
      {
        "name": "Charcoal Shadow",
        "hex": "#1C1D21"
      },
      {
        "name": "Pitch Black",
        "hex": "#080808"
      }
    ],
    "sizes": [
      "S (28-30)",
      "M (31-32)",
      "L (33-34)",
      "XL (35-36)"
    ],
    "description": "Wide-silhouette tactical cargos in deep charcoal shadow. Engineered with reinforced seat panels, dual strap adjusters, and industrial bartack stitching.",
    "fabric": "280 GSM Reinforced Ripstop",
    "fit": "Voluminous Multi-Pocket",
    "stock": 17,
    "rating": 4.8,
    "reviewsCount": 42,
    "reviews": [],
    "featured": true,
    "trending": false,
    "newDrop": true,
    "sale": true
  }
];

// ============================================================
// PRIMARY IMAGE FALLBACK & INTEGRITY
// Ensures every product exposes its primary image.
// ============================================================

products.forEach((product) => {
  if (!product.image && product.images && product.images.length > 0) {
    product.image = product.images[0];
  }
});

// ============================================================
// HELPER QUERY FUNCTIONS
// Dual lookup (id and slug), case-insensitive, trimmed, decoded
// ============================================================

export const getProductById = (identifier) => {
  if (!identifier) return null;
  const clean = decodeURIComponent(String(identifier)).trim().toLowerCase();
  return (
    products.find(
      (product) =>
        (product.id && product.id.toLowerCase() === clean) ||
        (product.slug && product.slug.toLowerCase() === clean)
    ) || null
  );
};

export const getProductBySlug = (slug) => {
  return getProductById(slug);
};

export const getProductsByCategory = (category) => {
  if (!category) return products;
  const clean = String(category).trim().toLowerCase();
  const normalizedCategory = (clean === 'cargos' || clean === 'cargo') ? 'cargo-pants' : clean;
  return products.filter(
    (product) =>
      product.category &&
      (product.category.toLowerCase() === clean || product.category.toLowerCase() === normalizedCategory)
  );
};

export const getProductsByGender = (gender) => {
  if (!gender || gender === 'all') return products;
  const clean = String(gender).trim().toLowerCase();
  return products.filter(
    (product) =>
      product.gender &&
      (product.gender.toLowerCase() === clean || product.gender.toLowerCase() === 'unisex')
  );
};

export const getNewDropProducts = () =>
  products.filter((product) => product.newDrop);

export const getTrendingProducts = () =>
  products.filter((product) => product.trending);

export const getSaleProducts = () =>
  products.filter((product) => product.sale || product.discount > 0);

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

// ============================================================
// EXPORTS
// ============================================================

export { products };
export default products;

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/BrandIcons';
import { businessConfig } from '../../config/businessConfig';

const COMMUNITY_POSTS = [
  {
    image: "https://images.unsplash.com/photo-1789938581122-d2af11a5d55a?auto=format&fit=crop&w=600&q=80",
    user: "@karan.ritual",
    city: "Mumbai",
    outfit: "Utility Cargo // Stealth Black",
  },
  {
    image: "https://images.unsplash.com/photo-1677538537484-324385aff147?auto=format&fit=crop&w=600&q=80",
    user: "@zoya.noir",
    city: "Delhi",
    outfit: "Frost 450 GSM Hoodie",
  },
  {
    image: "https://images.unsplash.com/photo-1674075872359-a174bc7ed420?auto=format&fit=crop&w=600&q=80",
    user: "@sid_archive",
    city: "Bengaluru",
    outfit: "Washed Void 14.5oz Denim",
  },
  {
    image: "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?auto=format&fit=crop&w=600&q=80",
    user: "@aarav.lens",
    city: "Goa",
    outfit: "Void Graphic 01 Oversized",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-20 md:py-28 bg-deepBlack border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-icyBlue uppercase tracking-widest mb-1">
              <InstagramIcon className="w-4 h-4" />
              <span>COMMUNITY ARCHIVES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-offWhite">
              COLD RITUAL COMMUNITY
            </h2>
            <p className="text-lightGray/70 font-mono text-xs mt-1">
              Tag <span className="text-offWhite font-bold">@coldritual.in</span> & <span className="text-offWhite font-bold">#WearTheRitual</span> to be archived.
            </p>
          </div>

          <a
            href={businessConfig.socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-offWhite hover:text-white border border-white/20 hover:border-offWhite px-5 py-2.5 transition-colors self-start sm:self-auto"
          >
            <span>Follow Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Column Instagram-inspired Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMMUNITY_POSTS.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5"
            >
              <img
                src={post.image}
                alt={post.user}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="font-mono text-xs font-bold text-offWhite">{post.user}</div>
                <div className="text-[10px] font-mono text-lightGray/70">{post.city} • {post.outfit}</div>
              </div>

              {/* Instagram glyph corner badge */}
              <div className="absolute top-3 right-3 w-7 h-7 bg-deepBlack/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-offWhite opacity-80 group-hover:opacity-100 transition-opacity">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

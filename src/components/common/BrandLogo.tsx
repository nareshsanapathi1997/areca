import React from 'react';
import { siteConfig } from '../../data/site';

interface BrandLogoProps {
  variant?: 'full' | 'icon-only' | 'footer' | 'badge' | 'banner' | 'header-image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showTagline = true
}) => {
  // If header-image variant is requested, return the official header logo image directly
  if (variant === 'header-image' || variant === 'full') {
    const heightClass = {
      sm: 'h-9 sm:h-10',
      md: 'h-10 sm:h-12 md:h-13',
      lg: 'h-12 sm:h-14 md:h-16',
      xl: 'h-16 sm:h-20 md:h-24'
    }[size];

    return (
      <div className={`flex items-center shrink-0 ${className}`}>
        <img
          src="/images/hanuma_header_logo.svg"
          alt="Hanuma Enterprises - 100% Biodegradable • Eco-Friendly • Chemical-Free"
          className={`${heightClass} w-auto object-contain drop-shadow-xs select-none`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }
  // Dimensions based on size
  const iconDimensions = {
    sm: { box: 'w-8 h-8', size: 32 },
    md: { box: 'w-10 h-10 sm:w-11 sm:h-11', size: 44 },
    lg: { box: 'w-13 h-13 sm:w-14 sm:h-14', size: 56 },
    xl: { box: 'w-18 h-18 sm:w-20 sm:h-20', size: 80 }
  }[size];

  // The Official Hanuma Enterprises Emblem (Golden 'H' with Entwined Leaves & Ribbon)
  const LogoMarkSVG = (
    <svg
      viewBox="0 0 240 210"
      className="w-full h-full drop-shadow-sm select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hanuma Enterprises Emblem"
    >
      <defs>
        {/* Metallic Gold Shading */}
        <linearGradient id="markGoldBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDF3CD" />
          <stop offset="25%" stopColor="#F3CE65" />
          <stop offset="55%" stopColor="#D49B37" />
          <stop offset="85%" stopColor="#B87B1D" />
          <stop offset="100%" stopColor="#84530E" />
        </linearGradient>

        <linearGradient id="markGoldRibbon" x1="0%" y1="30%" x2="100%" y2="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="20%" stopColor="#F7D774" />
          <stop offset="60%" stopColor="#D89E34" />
          <stop offset="90%" stopColor="#9E6813" />
          <stop offset="100%" stopColor="#E2B258" />
        </linearGradient>

        <linearGradient id="markGoldPalm" x1="0%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#A56E22" />
          <stop offset="40%" stopColor="#DCA842" />
          <stop offset="80%" stopColor="#F7DF8D" />
          <stop offset="100%" stopColor="#C58C28" />
        </linearGradient>

        {/* Emerald Leaves */}
        <linearGradient id="markEmerald1" x1="20%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#0A3319" />
          <stop offset="40%" stopColor="#185E34" />
          <stop offset="80%" stopColor="#2D8A4E" />
          <stop offset="100%" stopColor="#52B788" />
        </linearGradient>

        <linearGradient id="markEmerald2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0E4222" />
          <stop offset="50%" stopColor="#1B6D3B" />
          <stop offset="90%" stopColor="#40916C" />
          <stop offset="100%" stopColor="#74C69D" />
        </linearGradient>
      </defs>

      <g transform="translate(10, 5)">
        {/* LEFT GOLDEN PALM FRONDS */}
        <g id="gold-palm-left">
          <path d="M72 150 C55 125 40 95 38 60" stroke="#C58C28" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
          <path d="M38 60 C32 46 22 38 10 35 C18 48 28 58 38 60 Z" fill="url(#markGoldPalm)" />
          <path d="M40 75 C30 62 18 55 6 52 C16 64 28 73 40 75 Z" fill="url(#markGoldPalm)" />
          <path d="M44 92 C32 80 18 74 4 72 C16 84 30 90 44 92 Z" fill="url(#markGoldPalm)" />
          <path d="M49 110 C36 100 20 96 5 95 C18 104 34 109 49 110 Z" fill="url(#markGoldPalm)" />
          <path d="M56 128 C42 120 25 118 10 119 C24 126 40 128 56 128 Z" fill="url(#markGoldPalm)" />
          <path d="M64 144 C50 138 34 139 20 143 C33 148 48 147 64 144 Z" fill="url(#markGoldPalm)" />
          <path d="M42 68 C46 58 52 52 60 48 C56 58 50 66 42 68 Z" fill="url(#markGoldPalm)" opacity="0.9" />
          <path d="M46 84 C51 76 58 71 66 68 C61 77 55 83 46 84 Z" fill="url(#markGoldPalm)" opacity="0.9" />
        </g>

        {/* LEFT COLUMN OF 'H' */}
        <g id="h-left-col">
          <polygon points="52,32 108,32 108,38 94,38 94,162 108,162 108,168 52,168 52,162 68,162 68,38 52,38" fill="url(#markGoldBase)" />
          <line x1="72" y1="36" x2="72" y2="164" stroke="#FFF7D6" strokeWidth="1.6" opacity="0.75" />
          <line x1="90" y1="36" x2="90" y2="164" stroke="#664005" strokeWidth="1.6" opacity="0.35" />
        </g>

        {/* RIGHT COLUMN OF 'H' */}
        <g id="h-right-col">
          <polygon points="144,32 200,32 200,38 184,38 184,162 200,162 200,168 144,168 144,162 160,162 160,38 144,38" fill="url(#markGoldBase)" />
          <line x1="164" y1="36" x2="164" y2="164" stroke="#FFF7D6" strokeWidth="1.6" opacity="0.75" />
          <line x1="180" y1="36" x2="180" y2="164" stroke="#664005" strokeWidth="1.6" opacity="0.35" />
        </g>

        {/* DYNAMIC SWEEPING RIBBON CROSSBAR */}
        <g id="h-ribbon">
          <path d="M68 108 C80 96 110 88 145 92 C172 95 195 80 215 56 C210 74 195 106 160 114 C128 120 95 116 68 108 Z" 
                fill="url(#markGoldRibbon)" />
          <path d="M145 92 C172 95 195 80 215 56 C202 82 176 104 148 104 Z" 
                fill="#8F580F" opacity="0.55" />
          <path d="M72 106 C100 95 140 94 175 102 C196 92 208 72 214 58" 
                stroke="#FFF9E0" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        </g>

        {/* LUSH EMERALD PALM LEAVES AROUND RIGHT STEM */}
        <g id="emerald-palm-right">
          <path d="M158 168 C160 140 168 115 178 95 C186 112 186 138 180 168 Z" fill="url(#markEmerald1)" />
          <path d="M168 168 Q172 135 178 95" stroke="#A7F3D0" strokeWidth="1.2" opacity="0.75" />
          
          <path d="M174 165 C185 138 200 118 218 102 C214 125 204 148 185 168 Z" fill="url(#markEmerald2)" />
          <path d="M178 166 Q194 138 218 102" stroke="#C2F0D5" strokeWidth="1.2" opacity="0.75" />

          <path d="M152 168 C144 145 138 128 140 110 C150 126 156 148 158 168 Z" fill="url(#markEmerald1)" opacity="0.95" />

          {/* Detailed frond leaflets on right */}
          <g transform="translate(170, 90)">
            <path d="M10 15 C24 10 38 8 50 12 C38 18 24 20 10 15 Z" fill="url(#markEmerald2)" />
            <path d="M10 32 C26 28 42 28 54 35 C40 40 24 39 10 32 Z" fill="url(#markEmerald1)" />
            <path d="M8 50 C24 48 40 52 50 62 C36 64 22 60 8 50 Z" fill="url(#markEmerald2)" />
            <path d="M5 68 C20 68 34 76 42 88 C28 88 16 80 5 68 Z" fill="url(#markEmerald1)" />
          </g>

          {/* Golden Palm Leaf Accent */}
          <path d="M170 168 C176 150 186 135 198 125 C194 142 188 156 178 168 Z" fill="url(#markGoldPalm)" />
        </g>
      </g>
    </svg>
  );

  // Icon Only Mode
  if (variant === 'icon-only') {
    return (
      <div className={`shrink-0 flex items-center justify-center ${iconDimensions.box} ${className}`}>
        {LogoMarkSVG}
      </div>
    );
  }

  // Footer Variant (Tailored for dark forest green background)
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className={`shrink-0 ${iconDimensions.box}`}>
          {LogoMarkSVG}
        </div>
        <div className="text-left">
          <div className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F5]">
            Hanuma Enterprises
          </div>
          {showTagline && (
            <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs text-[#A3B899] font-medium tracking-wide mt-0.5">
              <span>100% Biodegradable</span>
              <span className="text-[#E0A96D]">•</span>
              <span>Eco-Friendly</span>
              <span className="text-[#E0A96D]">•</span>
              <span>Chemical-Free</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Badge Variant (Pill container)
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E8E0D2] shadow-sm backdrop-blur-md ${className}`}>
        <div className="w-6 h-6 shrink-0">
          {LogoMarkSVG}
        </div>
        <div className="text-left leading-tight">
          <span className="text-xs font-bold text-[#0D3B24] font-heading block">
            Hanuma Enterprises
          </span>
          <span className="text-[9px] text-[#526356] font-medium uppercase tracking-wider block">
            100% Biodegradable
          </span>
        </div>
      </div>
    );
  }

  // Luxury Banner Variant (Matches the user's uploaded banner image)
  if (variant === 'banner') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-xl p-6 sm:p-10 md:p-12 ${className}`}>
        {/* Subtle Linen Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#2D6A4F0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top-Left Palm Frond Decorative Illustration */}
        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none opacity-90">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-md">
            <path d="M0 0 Q60 60 120 140" stroke="#1E5438" strokeWidth="3" />
            <path d="M20 20 C50 15 80 30 110 50 C85 55 55 45 20 20 Z" fill="#2D6A4F" />
            <path d="M40 40 C75 35 110 55 140 80 C110 85 80 75 40 40 Z" fill="#388E3C" />
            <path d="M60 60 C100 55 140 80 170 110 C135 115 100 100 60 60 Z" fill="#2D6A4F" />
            <path d="M80 80 C120 78 160 105 185 140 C150 142 120 125 80 80 Z" fill="#4CAF50" opacity="0.8" />
          </svg>
        </div>

        {/* Top-Right Wooden Platter & Palm Frond Decorative Illustration */}
        <div className="absolute -top-8 -right-8 w-44 h-44 sm:w-60 sm:h-60 pointer-events-none opacity-90">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-lg">
            {/* Wooden cross-section disk */}
            <circle cx="150" cy="50" r="70" fill="#B3804D" stroke="#8C5C2E" strokeWidth="5" />
            <circle cx="150" cy="50" r="55" fill="#C99765" stroke="#9A6B39" strokeWidth="2" strokeDasharray="6 3" />
            <circle cx="150" cy="50" r="38" fill="#DDB07F" />
            {/* Palm branch overlapping disk */}
            <path d="M120 0 Q100 80 60 150" stroke="#153826" strokeWidth="3" />
            <path d="M100 30 C75 45 60 70 50 100 C70 85 85 65 100 30 Z" fill="#2D6A4F" />
            <path d="M85 60 C60 80 50 110 40 140 C60 120 75 95 85 60 Z" fill="#52B788" />
            <path d="M75 90 C50 115 45 145 35 170 C55 150 65 125 75 90 Z" fill="#2D6A4F" />
          </svg>
        </div>

        {/* Centered Brand Presentation */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-3xl mx-auto py-2">
          {/* Large Emblem */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0">
            {LogoMarkSVG}
          </div>

          {/* Typography */}
          <div className="text-center sm:text-left space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0D3B24]">
              Hanuma Enterprises
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs sm:text-sm md:text-base font-semibold text-[#1E4330]">
              <span>100% Biodegradable</span>
              <span className="text-[#C58C28]">•</span>
              <span>Eco-Friendly</span>
              <span className="text-[#C58C28]">•</span>
              <span>Chemical-Free</span>
            </div>
            <p className="text-xs text-[#6B4F35] pt-2">
              Direct Factory Manufacturer — Kota Narava, Visakhapatnam | Capacity: 1 Lakh Plates/Month
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default Full Horizontal Lockup (Light Header Background)
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {/* Golden 'H' Emblem */}
      <div className={`shrink-0 ${iconDimensions.box}`}>
        {LogoMarkSVG}
      </div>

      {/* Typography Block */}
      <div className="text-left flex flex-col justify-center">
        <div className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0D3B24] leading-tight">
          Hanuma Enterprises
        </div>
        {showTagline && (
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#1E4330] tracking-wide mt-0.5">
            <span>100% Biodegradable</span>
            <span className="text-[#C58C28]">•</span>
            <span>Eco-Friendly</span>
            <span className="text-[#C58C28]">•</span>
            <span>Chemical-Free</span>
          </div>
        )}
      </div>
    </div>
  );
};

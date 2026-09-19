import React from 'react';

export const BRAND_HEADER_LOGO = '/images/hanuma_brand_logo.png';

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
  // Official photographed brand lockup (H mark + wordmark + tagline)
  if (variant === 'header-image' || variant === 'full') {
    const heightClass = {
      sm: 'h-10 sm:h-11',
      md: 'h-12 sm:h-14 md:h-16',
      lg: 'h-14 sm:h-16 md:h-[4.5rem]',
      xl: 'h-20 sm:h-24 md:h-28'
    }[size];

    return (
      <div className={`flex items-center shrink-0 ${className}`}>
        <img
          src={BRAND_HEADER_LOGO}
          alt="Hanuma Enterprises - Natural tableware for a greener tomorrow"
          className={`${heightClass} w-auto max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] object-contain object-left select-none bg-transparent`}
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

  // Footer Variant (light card so the official lockup stays readable on dark green)
  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center max-w-full ${className}`}>
        <img
          src={BRAND_HEADER_LOGO}
          alt="Hanuma Enterprises - Natural tableware for a greener tomorrow"
          className="h-12 sm:h-16 md:h-20 w-auto max-w-[min(100%,20rem)] object-contain bg-[#FAF8F5] rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2"
        />
      </div>
    );
  }

  // Badge Variant (Pill container)
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/95 border border-[#E8E0D2] shadow-sm backdrop-blur-md ${className}`}>
        <img
          src={BRAND_HEADER_LOGO}
          alt="Hanuma Enterprises"
          className="h-8 w-auto max-w-[180px] object-contain"
        />
      </div>
    );
  }

  // Official luxury banner — the photographed brand lockup
  if (variant === 'banner') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-xl ${className}`}>
        <img
          src={BRAND_HEADER_LOGO}
          alt="Hanuma Enterprises - Natural tableware for a greener tomorrow"
          className="w-full h-auto object-contain"
        />
        <p className="relative z-10 text-center text-xs text-[#6B4F35] pb-5 px-4">
          Direct Factory Manufacturer — Kota Narava, Visakhapatnam | Capacity: 1 Lakh Plates/Month
        </p>
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

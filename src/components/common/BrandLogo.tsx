import React from 'react';
import { siteConfig } from '../../data/site';

interface BrandLogoProps {
  variant?: 'full' | 'icon-only' | 'footer' | 'badge';
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
  // Dimensions based on size
  const iconDimensions = {
    sm: { box: 'w-8 h-8', svgSize: 32 },
    md: { box: 'w-10 h-10', svgSize: 40 },
    lg: { box: 'w-13 h-13 sm:w-14 sm:h-14', svgSize: 52 },
    xl: { box: 'w-18 h-18 sm:w-20 sm:h-20', svgSize: 76 }
  }[size];

  // SVG Medallion Icon Element
  const LogoIcon = (
    <div 
      className={`relative rounded-2xl bg-gradient-to-br from-[#153826] to-[#0B1E14] p-1.5 flex items-center justify-center border border-[#E0A96D]/50 shadow-md shrink-0 group-hover:border-[#E0A96D] transition-colors ${iconDimensions.box} ${className}`}
      aria-label="Hanuman Enterprises Emblem"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D06F" />
            <stop offset="50%" stopColor="#E0A96D" />
            <stop offset="100%" stopColor="#C5832B" />
          </linearGradient>
          <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Outer Fine Dashed Ring */}
        <circle cx="50" cy="50" r="44" stroke="#2D6A4F" strokeWidth="1.2" strokeDasharray="3 2" />

        {/* Golden Sun Flare Radiance Behind Leaf */}
        <path
          d="M50 16 L52 23 L59 20 L55 26 L62 27 L56 31 L61 35 L55 37 L57 43 L50 40 L43 43 L45 37 L39 35 L44 31 L38 27 L45 26 L41 20 L48 23 Z"
          fill="url(#goldAcc)"
          opacity="0.3"
        />

        {/* Areca Palm Leaf Blade */}
        <g transform="translate(50,54) rotate(-14) translate(-50,-54)">
          {/* Main Leaf Body */}
          <path
            d="M50 18 C61 31 70 48 67 67 C65 77 56 84 50 86 C44 84 35 77 33 67 C30 48 39 31 50 18 Z"
            fill="url(#leafGreen)"
          />
          {/* Light Sheen Wing */}
          <path
            d="M50 18 C58 30 64 46 61 64 C59 74 53 80 50 86 C50 76 52 54 50 18 Z"
            fill="#ECFDF5"
            opacity="0.65"
          />
          {/* Center Spine */}
          <path
            d="M50 20 Q50 54 50 88"
            stroke="url(#goldAcc)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Leaf Ribs */}
          <path
            d="M50 32 Q57 28 62 34 M50 43 Q58 39 64 46 M50 55 Q59 52 64 59"
            stroke="#FFFFFF"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M50 35 Q43 31 38 37 M50 46 Q42 42 36 49 M50 58 Q41 55 36 62"
            stroke="#FFFFFF"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>

        {/* Golden Spire Motif (Strength / Hanuman Scepter) */}
        <path d="M50 8 L53 16 L50 14 L47 16 Z" fill="url(#goldAcc)" />
        <circle cx="50" cy="7" r="2.5" fill="#F4D06F" />

        {/* Plate Rim Arc Foundation */}
        <path
          d="M24 78 Q50 94 76 78"
          stroke="url(#goldAcc)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return LogoIcon;
  }

  // Footer Variant (optimized for dark background)
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {LogoIcon}
        <div>
          <div className="flex items-center gap-1 leading-none">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#FAF8F5] font-heading">
              HANUMAN
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#E0A96D] font-heading">
              .
            </span>
          </div>
          <span className="block text-[11px] font-bold tracking-[0.2em] text-[#95D5B2] uppercase mt-0.5">
            ENTERPRISES
          </span>
          {showTagline && (
            <span className="block text-[10px] text-[#A3B18A] tracking-wider uppercase mt-0.5">
              Eco Tableware Manufacturers
            </span>
          )}
        </div>
      </div>
    );
  }

  // Badge Variant (Centered pill or seal)
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-[#153826] text-[#FAF8F5] border border-[#E0A96D]/40 shadow-sm ${className}`}>
        <div className="w-6 h-6 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path
              d="M50 16 C62 30 71 48 68 68 C66 78 57 85 50 87 C43 85 34 78 32 68 C29 48 38 30 50 16 Z"
              fill="#34D399"
            />
            <path d="M50 18 Q50 55 50 88" stroke="#E0A96D" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="8" r="3.5" fill="#F4D06F" />
          </svg>
        </div>
        <div className="text-left leading-tight">
          <span className="text-xs font-black tracking-wider block text-white font-heading">
            HANUMAN ENTERPRISES
          </span>
          <span className="text-[9px] text-[#95D5B2] tracking-wider uppercase block">
            Direct Manufacturer
          </span>
        </div>
      </div>
    );
  }

  // Default Full Horizontal Lockup (Light Header Background)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LogoIcon}
      <div className="text-left">
        <div className="flex items-center leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#153826] font-heading">
            HANUMAN
          </span>
          <span className="text-xl sm:text-2xl font-black text-[#C5832B] font-heading ml-0.5">
            .
          </span>
        </div>
        <span className="block text-[11px] sm:text-xs font-extrabold tracking-[0.22em] text-[#2D6A4F] uppercase mt-0.5">
          ENTERPRISES
        </span>
        {showTagline && (
          <span className="hidden sm:block text-[9.5px] font-semibold text-[#6B4F35] tracking-wider uppercase mt-0.5">
            100% Natural Areca Tableware
          </span>
        )}
      </div>
    </div>
  );
};

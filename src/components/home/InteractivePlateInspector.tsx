import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Droplets, 
  Zap, 
  Recycle, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Info,
  ShieldCheck,
  Thermometer
} from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../common/Icons';

type TestMode = 'heat' | 'liquids' | 'microwave' | 'compost';

interface ModeDetail {
  id: TestMode;
  title: string;
  shortDesc: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  bgGrad: string;
  specs: { label: string; value: string }[];
  explanation: string;
  scientificFact: string;
}

const MODES: ModeDetail[] = [
  {
    id: 'heat',
    title: 'Thermal Resistance (Up to 200°C)',
    shortDesc: 'Endures piping hot curries, sizzling gravies & hot barbecue without warping or softening.',
    badge: '180°C Steam Molded',
    icon: Flame,
    color: '#E0A96D',
    bgGrad: 'from-[#C5832B]/10 to-[#E0A96D]/5',
    specs: [
      { label: 'Max Temperature', value: '200°C / 392°F' },
      { label: 'Structural Warping', value: '0% (Rigid Fiber)' },
      { label: 'Lamination Film', value: '0% (Zero Plastic)' },
    ],
    explanation: 'Unlike paper plates that buckle under heat, or plastic plates that leach carcinogens, dense Areca leaf lignocellulose is hydraulically pressed at 180°C, baking natural structural rigidity into every rim.',
    scientificFact: 'Natural palm leaf waxes (suberin and cutin) form a natural heat barrier without chemical coating.'
  },
  {
    id: 'liquids',
    title: 'Hot Liquids & Gravy Tightness',
    shortDesc: 'Holds boiling sambar, gravies, oils, and soups for over 4 hours with zero leakage or sogginess.',
    badge: '4+ Hours Leak-Proof',
    icon: Droplets,
    color: '#52B788',
    bgGrad: 'from-[#2D6A4F]/10 to-[#52B788]/5',
    specs: [
      { label: 'Hot Oil Resistance', value: '100% Sealed' },
      { label: 'Gravy Retention', value: '4+ Hours Tested' },
      { label: 'Chemical Wax Additives', value: 'Zero (Natural)' },
    ],
    explanation: 'The natural leaf sheath features an impermeable hydrophobic epidermis. Even boiling liquids cannot penetrate through the pressed bottom, preserving clean hands and tablecloths.',
    scientificFact: 'Natural microscopic leaf stomata are permanently sealed during the 15-ton compression cycle.'
  },
  {
    id: 'microwave',
    title: 'Microwave & Freezer Safe',
    shortDesc: 'Reheat food safely in microwave ovens or store prepped meals in deep freezers without cracking.',
    badge: 'Microwave & Oven Safe',
    icon: Zap,
    color: '#74C69D',
    bgGrad: 'from-[#40916C]/10 to-[#74C69D]/5',
    specs: [
      { label: 'Microwave Run Time', value: 'Safe up to 2 Mins' },
      { label: 'Freezer Tolerance', value: '-20°C Non-Brittle' },
      { label: 'Oven Safe Range', value: 'Up to 150°C (300°F)' },
    ],
    explanation: 'Because our tableware is pure plant fiber without adhesives or glues, it absorbs microwave radiation safely without sparking, melting, or imparting chemical odors to foods.',
    scientificFact: 'Low moisture retention (<8%) prevents thermal shock cracking during rapid reheating.'
  },
  {
    id: 'compost',
    title: '100% Home Compostable in 60 Days',
    shortDesc: 'Returns to nature as nutrient-rich garden soil within 60 to 90 days. Zero microplastics forever.',
    badge: '60 Days Soil Degradation',
    icon: Recycle,
    color: '#95D5B2',
    bgGrad: 'from-[#153826]/10 to-[#2D6A4F]/5',
    specs: [
      { label: 'Degradation Time', value: '60-90 Days in Soil' },
      { label: 'Home Backyard Safe', value: 'Yes (No Industrial Facility Needed)' },
      { label: 'Soil Enrichment', value: 'Adds Organic Biomass' },
    ],
    explanation: 'Simply bury used plates in your backyard compost or green bin. Earthworms and soil microorganisms naturally decompose the leaf, converting it into rich nitrogenous fertilizer.',
    scientificFact: 'Degrades 400x faster than standard PLA bioplastics which require 65°C industrial composting plants.'
  },
];

export const InteractivePlateInspector: React.FC = () => {
  const [activeMode, setActiveMode] = useState<TestMode>('heat');
  const currentDetail = MODES.find((m) => m.id === activeMode) || MODES[0];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4F1EA] to-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Natural Palm Silhouette Backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D6A4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0A96D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153826]/5 border border-[#153826]/10 text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E0A96D]" />
            <span>Interactive Engineering & Anatomy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153826] font-heading tracking-tight"
          >
            Why Areca Leaf Tableware Outperforms Plastics & Paper
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#555] text-base sm:text-lg mt-4 leading-relaxed"
          >
            Test our tableware&apos;s physical properties interactively. Click each mode below to explore thermal resistance, hot gravy retention, microwave safety, and rapid soil compostability.
          </motion.p>
        </div>

        {/* Interactive Mode Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;

            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`relative p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-[#153826] text-white border-[#E0A96D] shadow-xl scale-[1.02]'
                    : 'bg-white/80 hover:bg-white text-[#153826] border-[#E8E2D5] hover:border-[#2D6A4F]/40 shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#E0A96D] text-[#153826] text-[10px] font-black uppercase tracking-wider shadow"
                  >
                    Active Test
                  </motion.div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#2D6A4F] text-[#FAF8F5]'
                        : 'bg-[#F4F1EA] text-[#2D6A4F] group-hover:bg-[#EAE5D8]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <span className={`block text-xs uppercase tracking-wider font-extrabold ${isActive ? 'text-[#95D5B2]' : 'text-[#6B4F35]'}`}>
                    {mode.id.toUpperCase()} TEST
                  </span>
                  <span className="block text-sm font-bold mt-0.5 line-clamp-1">
                    {mode.title.split('(')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Graphic Showcase Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8E2D5] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Animated Stage (Left: 6 cols) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#F8F6F0] via-[#EFECE3] to-[#E3DDD0] p-6 flex items-center justify-center border border-[#DDD5C5] shadow-inner overflow-hidden">
                
                {/* Dynamic Background Effect based on Test Mode */}
                <AnimatePresence mode="wait">
                  {activeMode === 'heat' && (
                    <motion.div
                      key="heat-fx"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {/* Thermal Radiant Glow */}
                      <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/20 to-red-500/10 blur-2xl animate-pulse" />
                      
                      {/* Rising Heat Vapor Wave Vectors */}
                      <svg className="absolute w-full h-full opacity-30" viewBox="0 0 200 200">
                        <motion.path
                          d="M60,160 Q70,120 60,80 T60,20"
                          stroke="#E0A96D"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="4 4"
                          animate={{ strokeDashoffset: [0, -40] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                        <motion.path
                          d="M100,170 Q110,130 100,90 T100,20"
                          stroke="#C5832B"
                          strokeWidth="3.5"
                          fill="none"
                          strokeDasharray="5 5"
                          animate={{ strokeDashoffset: [0, -50] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                        />
                        <motion.path
                          d="M140,160 Q150,120 140,80 T140,20"
                          stroke="#E0A96D"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="4 4"
                          animate={{ strokeDashoffset: [0, -40] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                        />
                      </svg>
                    </motion.div>
                  )}

                  {activeMode === 'liquids' && (
                    <motion.div
                      key="liquid-fx"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {/* Hydrophobic Ripple Rings */}
                      <div className="absolute w-52 h-52 rounded-full border-2 border-emerald-500/40 animate-ping opacity-30" />
                      <div className="absolute w-36 h-36 rounded-full border-2 border-emerald-400/50 animate-pulse opacity-40" />
                      <div className="w-64 h-64 rounded-full bg-emerald-500/10 blur-xl" />
                    </motion.div>
                  )}

                  {activeMode === 'microwave' && (
                    <motion.div
                      key="microwave-fx"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {/* Radio Frequency Waves */}
                      <svg className="absolute w-full h-full opacity-40" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="40" stroke="#52B788" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                        <circle cx="100" cy="100" r="70" stroke="#74C69D" strokeWidth="1.5" fill="none" strokeDasharray="8 6" />
                        <circle cx="100" cy="100" r="95" stroke="#95D5B2" strokeWidth="1" fill="none" />
                      </svg>
                    </motion.div>
                  )}

                  {activeMode === 'compost' && (
                    <motion.div
                      key="compost-fx"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {/* Organic Earth Fertilizer Halo */}
                      <div className="w-64 h-64 rounded-full bg-[#153826]/15 blur-2xl" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Central High-Definition Areca Palm Plate Graphic */}
                <motion.div
                  layout
                  className="relative z-10 w-64 sm:w-72 aspect-square flex items-center justify-center filter drop-shadow-2xl"
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <svg viewBox="0 0 240 240" className="w-full h-full">
                    <defs>
                      <linearGradient id="plateRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DFD7C7" />
                        <stop offset="30%" stopColor="#C9BEA8" />
                        <stop offset="70%" stopColor="#DDD5C4" />
                        <stop offset="100%" stopColor="#BFB399" />
                      </linearGradient>
                      <linearGradient id="plateInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EDE8DC" />
                        <stop offset="50%" stopColor="#E5DFD0" />
                        <stop offset="100%" stopColor="#D9D0BD" />
                      </linearGradient>
                      <radialGradient id="plateShine" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Outer Plate Base Drop Shadow */}
                    <circle cx="120" cy="122" r="105" fill="#000000" opacity="0.12" filter="blur(4px)" />

                    {/* Outer Molded Raised Rim */}
                    <circle cx="120" cy="120" r="105" fill="url(#plateRimGrad)" stroke="#B3A588" strokeWidth="2" />
                    
                    {/* Inner Recessed Eating Surface */}
                    <circle cx="120" cy="120" r="82" fill="url(#plateInnerGrad)" stroke="#C7BC9E" strokeWidth="1.5" />
                    <circle cx="120" cy="120" r="82" fill="url(#plateShine)" />

                    {/* Natural Palm Wood Grain Striations (Unique to real Areca leaves) */}
                    <path d="M55,100 Q120,95 185,100" stroke="#BFB193" strokeWidth="1.2" opacity="0.55" fill="none" />
                    <path d="M45,120 Q120,116 195,120" stroke="#BFB193" strokeWidth="1.5" opacity="0.6" fill="none" />
                    <path d="M52,140 Q120,137 188,140" stroke="#BFB193" strokeWidth="1.2" opacity="0.55" fill="none" />
                    <path d="M68,160 Q120,158 172,160" stroke="#B8A987" strokeWidth="1" opacity="0.5" fill="none" />
                    <path d="M70,80 Q120,78 170,80" stroke="#B8A987" strokeWidth="1" opacity="0.5" fill="none" />

                    {/* Center Organic Emblem Emboss Stamp */}
                    <circle cx="120" cy="120" r="28" fill="none" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="3 2" opacity="0.65" />
                    <path d="M120,104 C126,112 130,120 128,128 C126,133 123,136 120,137 C117,136 114,133 112,128 C110,120 114,112 120,104 Z" fill="#2D6A4F" opacity="0.5" />
                    <path d="M120,105 L120,136" stroke="#FAF8F5" strokeWidth="1" opacity="0.8" />
                  </svg>

                  {/* Dynamic Test Icon Badge Floating Over Center */}
                  <motion.div
                    key={activeMode}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="absolute p-3 rounded-2xl bg-[#153826] text-white shadow-xl border border-[#E0A96D]"
                  >
                    {React.createElement(currentDetail.icon, {
                      className: "w-6 h-6 text-[#95D5B2]"
                    })}
                  </motion.div>
                </motion.div>

                {/* Live Inspection Indicator Pill */}
                <div className="absolute bottom-3 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between border border-[#E8E2D5] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-[#153826]">Lab Certified:</span>
                    <span className="text-[#6B4F35]">{currentDetail.badge}</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#2D6A4F] font-semibold">100% ORGANIC</span>
                </div>
              </div>
            </div>

            {/* Test Details & Scientific Specs (Right: 6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#153826] text-[#E0A96D] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#95D5B2]" />
                  <span>Physical Specification Verified</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#153826] font-heading">
                  {currentDetail.title}
                </h3>
                <p className="text-[#555] text-base mt-2 leading-relaxed">
                  {currentDetail.explanation}
                </p>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentDetail.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5]">
                    <span className="block text-[11px] uppercase tracking-wider text-[#6B4F35] font-bold">
                      {spec.label}
                    </span>
                    <span className="block text-sm sm:text-base font-extrabold text-[#153826] font-heading mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Scientific Anatomy Fact Box */}
              <div className="p-4 rounded-2xl bg-[#EBE5D8] border border-[#DDD5C5] text-xs text-[#443828] flex items-start gap-3">
                <Info className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#153826] uppercase tracking-wide">
                    Botanical Anatomy Insight:
                  </span>
                  <p className="mt-0.5 leading-relaxed">
                    {currentDetail.scientificFact}
                  </p>
                </div>
              </div>

              {/* Quick Inquiry Action Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hello Hanuma Enterprises, I was reviewing your ${currentDetail.title} spec. I would like to request physical plate samples for bulk testing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Request Physical Sample Box</span>
                </a>
                <span className="text-xs text-[#6B4F35]">
                  Custom bulk sizing available (3&quot; to 12&quot;)
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

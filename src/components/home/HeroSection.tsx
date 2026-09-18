import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from '../../context/RouterContext';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { BrandLogo } from '../common/BrandLogo';
import { WhatsAppIcon } from '../common/Icons';
import { LeafParticlesCanvas } from '../common/LeafParticlesCanvas';
import { 
  ArrowRight, 
  ShieldCheck, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  Package, 
  Globe2,
  Award
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate, openBulkEnquiry } = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleCardMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const trustBadges = [
    { label: "100% Natural", sub: "Naturally fallen palm sheaths", icon: Leaf },
    { label: "Biodegradable", sub: "Composts in 60-90 days", icon: Sparkles },
    { label: "Food Safe", sub: "Hot gravy & liquid tested", icon: ShieldCheck },
    { label: "Chemical Free", sub: "No bleach, waxes, or glues", icon: CheckCircle2 },
    { label: "Bulk Supply", sub: "Direct manufacturing capacity", icon: Package },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4F1EA] to-[#FAF8F5] py-16 sm:py-24 border-b border-[#E8E0D2]">
      {/* Interactive Floating Leaf & Seed Particles in Canvas */}
      <LeafParticlesCanvas density={18} />

      {/* Subtle organic botanical background pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#153826_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Glowing ambient organic gradient spheres */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            
            {/* Manufacturing Credential Badge with Shimmer Sweep */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EBE5D8] border border-[#D8CFC4] text-xs font-semibold text-[#153826] overflow-hidden shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse"></span>
              <span className="uppercase tracking-wider">Direct Manufacturer & Bulk Exporter</span>
              <span className="text-[#8C6D46]">•</span>
              <span className="text-[#6B4F35]">Malnad Palm Belt, India</span>
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#153826] tracking-tight leading-[1.1] font-heading"
              >
                Naturally Made. <br />
                <span className="text-[#2D6A4F] font-serif-display font-medium italic relative inline-block">
                  Sustainably Crafted.
                  <span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#E0A96D]/40 rounded-full -z-10" />
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-[#3E4E42] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Premium Areca Leaf Plates manufactured from naturally fallen areca leaves for eco-friendly dining, catering, hospitality and bulk supply.
              </motion.p>
            </div>

            {/* Conversion CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <button
                onClick={() => navigate('/products')}
                id="hero-cta-explore-products"
                className="shimmer-btn-effect w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-base font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openBulkEnquiry()}
                id="hero-cta-get-bulk-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] border border-[#153826]/30 text-base font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5 duration-200 cursor-pointer"
              >
                <span>Get a Bulk Quote</span>
              </button>

              <a
                href={getWhatsAppUrl("Hello, I am interested in your Areca Leaf Plates. Please share your product catalog and wholesale export pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 text-sm font-semibold transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Quick Export Logistics Snippet */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#6B4F35]"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <Globe2 className="w-4 h-4 text-[#2D6A4F]" />
                <span>FCL / LCL Sea Container Shipments</span>
              </span>
              <span>•</span>
              <span>Private Label Distributor Packaging Available</span>
              <span>•</span>
              <span>Quality Inspected & Heat Sanitized</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Visual Feature Showcase (5 cols) with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div 
              className="relative mx-auto max-w-md lg:max-w-none perspective-1000"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              
              {/* Outer decorative card frame with interactive 3D tilt */}
              <motion.div 
                animate={{
                  rotateX: mousePos.y * -14,
                  rotateY: mousePos.x * 14,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="rounded-3xl p-3 bg-gradient-to-tr from-[#EBE5D8] to-[#FAF8F5] shadow-2xl border border-[#D8CFC4]/70 relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8E0D2] group">
                  <img
                    src="/images/areca-original/areca_plate_original_1.jpg"
                    alt="Authentic Areca Palm Leaf Plate displaying natural woody grain and heat-pressed rim"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  
                  {/* Subtle Glare reflection moving with mouse */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none transition-opacity"
                    style={{
                      transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`
                    }}
                  />

                  {/* Official Hanuman Enterprises Brand Seal */}
                  <div className="absolute top-3 left-3">
                    <BrandLogo variant="badge" />
                  </div>

                  {/* Subtle overlaid badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#153826]/90 backdrop-blur-md text-[#FAF8F5] border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#95D5B2] tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#E0A96D]" />
                          <span>Natural Woody Grain</span>
                        </div>
                        <div className="text-sm font-medium">100% Fallen Areca Palm Sheaths</div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded bg-[#2D6A4F] text-[#FAF8F5] font-semibold shadow-sm">
                        Zero Trees Cut
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating secondary badge with gentle float animation */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#FAF8F5] border border-[#D8CFC4] shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D6A4F] to-[#153826] text-white flex items-center justify-center font-bold text-xs shadow">
                  200°C
                </div>
                <div>
                  <div className="text-xs font-bold text-[#153826]">Thermal Pressed</div>
                  <div className="text-[11px] text-[#6B4F35]">Hygienically Sanitized</div>
                </div>
              </div>

              {/* Floating bottom badge with reverse float animation */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#FAF8F5] border border-[#D8CFC4] shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-[#153826] text-[#95D5B2] flex items-center justify-center shadow">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#153826]">Export Grade</div>
                  <div className="text-[11px] text-[#6B4F35]">Moisture Barrier Shrink Packed</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Trust Indicators Bar (Bottom of Hero) with Staggered Entrance */}
        <div className="mt-16 pt-8 border-t border-[#D8CFC4]/60">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] hover:bg-white border border-[#E8E0D2] hover:border-[#2D6A4F]/30 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EBE5D8] text-[#153826] flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5 text-[#2D6A4F]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#153826] leading-tight">
                      {badge.label}
                    </div>
                    <div className="text-xs text-[#6B4F35] leading-tight mt-0.5">
                      {badge.sub}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};


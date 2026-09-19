import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Areca3DViewer } from '../three/Areca3DViewer';
import { FactoryPhotoRotator } from '../common/FactoryPhotoRotator';
import { useRouter } from '../../context/RouterContext';
import { 
  Box, 
  Sparkles, 
  RotateCw, 
  Flame, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Camera,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const Areca3DStudioSection: React.FC = () => {
  const { navigate, openBulkEnquiry } = useRouter();
  const [activeTab, setActiveTab] = useState<'3d' | 'factory-photo'>('3d');

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4F1EA] to-[#FAF8F5] border-b border-[#E8E0D2] relative overflow-hidden">
      {/* Botanical ambient background accents */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-[#2D6A4F]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-[#E0A96D]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#153826]/8 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest"
          >
            <Box className="w-3.5 h-3.5 text-[#E0A96D]" />
            <span>Interactive 3D Engineering & Factory Studio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153826] font-heading tracking-tight"
          >
            Inspect Our Tableware & Factory in 3D
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#526356] leading-relaxed"
          >
            Inspect HANUMA ENTERPRISES palm leaf tableware in full 360° interactive 3D, or switch to the verified factory photograph view with real-time rotation and zoom tools.
          </motion.p>
        </div>

        {/* Tab Switcher: 3D WebGL vs Real Factory Photo */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm">
            <button
              onClick={() => setActiveTab('3d')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === '3d'
                  ? 'bg-[#153826] text-white shadow-md'
                  : 'text-[#526356] hover:text-[#153826] hover:bg-[#FAF8F5]'
              }`}
            >
              <Box className="w-4 h-4 text-[#E0A96D]" />
              <span>Interactive 3D WebGL Model</span>
            </button>

            <button
              onClick={() => setActiveTab('factory-photo')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'factory-photo'
                  ? 'bg-[#153826] text-white shadow-md'
                  : 'text-[#526356] hover:text-[#153826] hover:bg-[#FAF8F5]'
              }`}
            >
              <Camera className="w-4 h-4 text-[#52B788]" />
              <span>Real Factory Photo & 360° Rotate</span>
              <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-[#E0A96D]/20 text-[#E0A96D]">
                NEW
              </span>
            </button>
          </div>
        </div>

        {/* Viewport Container */}
        <AnimatePresence mode="wait">
          {activeTab === '3d' ? (
            <motion.div
              key="3d-tab"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <Areca3DViewer initialProduct="round-deep-12" height="h-[520px] sm:h-[620px]" />
            </motion.div>
          ) : (
            <motion.div
              key="factory-tab"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <FactoryPhotoRotator />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4 Feature Highlights Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: RotateCw,
              title: "360° Real-Time Orbit",
              desc: "Drag with mouse or touch to evaluate rim slope, curvature depth, and bottom pedestal stability."
            },
            {
              icon: Flame,
              title: "Hydraulic Die Simulation",
              desc: "Simulate our hydraulic bronze die press forming flat fallen sheaths under 150°C heat in Visakhapatnam."
            },
            {
              icon: Layers,
              title: "1 Lakh Plates / Month",
              desc: "Robust monthly manufacturing output catering to pan-India and international bulk orders (MOQ 3,000)."
            },
            {
              icon: ShieldCheck,
              title: "Zero-Chemical Purity",
              desc: "Authentic natural grain textures with no lacquers, bleaching agents, or synthetic binders."
            }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-all space-y-2 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center text-[#2D6A4F]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#153826] font-heading">{feature.title}</h4>
                <p className="text-xs text-[#526356] leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#153826] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#95D5B2]">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>HANUMA ENTERPRISES — Kota Narava Facility</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Ready for Bulk Wholesale Orders? MOQ: 3,000 Pieces
            </h3>
            <p className="text-xs sm:text-sm text-[#C2B5A0]">
              Direct factory pricing for 12" Buffet plates, 10" Shallow Square Biryani plates, 10" Round Deep Tiffin plates, and 5" Deep Bowls (2.2" Depth).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBulkEnquiry("Bulk Wholesale Order Inquiry (MOQ 3000 Pcs)")}
              className="shimmer-btn-effect px-6 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get Wholesale Price List</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

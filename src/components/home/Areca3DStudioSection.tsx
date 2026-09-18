import React from 'react';
import { motion } from 'motion/react';
import { Areca3DViewer } from '../three/Areca3DViewer';
import { useRouter } from '../../context/RouterContext';
import { 
  Box, 
  Sparkles, 
  RotateCw, 
  Flame, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export const Areca3DStudioSection: React.FC = () => {
  const { navigate, openBulkEnquiry } = useRouter();

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4F1EA] to-[#FAF8F5] border-b border-[#E8E0D2] relative overflow-hidden">
      {/* Botanical ambient background accents */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-[#2D6A4F]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-[#E0A96D]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#153826]/8 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest"
          >
            <Box className="w-3.5 h-3.5 text-[#E0A96D]" />
            <span>Interactive 3D Engineering Studio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153826] font-heading tracking-tight"
          >
            Inspect Our Tableware in 3D
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#526356] leading-relaxed"
          >
            Experience our export-grade palm leaf tableware from every angle. Rotate 360°, examine natural sheath fiber striations, switch finishes, and simulate the 150°C hydraulic die pressing process in real-time WebGL.
          </motion.p>
        </div>

        {/* 3D Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Areca3DViewer initialProduct="round-plate" height="h-[520px] sm:h-[620px]" />
        </motion.div>

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
              desc: "Simulate our 25-ton hydraulic bronze die press forming flat fallen sheaths under 150°C heat."
            },
            {
              icon: Layers,
              title: "1.6mm Calibrated Gauge",
              desc: "Engineered wall thickness provides exceptional structural rigidity without soggy collapse or warping."
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
              <span>Custom Tableware Dies Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need a Custom Plate Size or Branded Tooling Die?
            </h3>
            <p className="text-xs sm:text-sm text-[#C2B5A0]">
              We design and machine custom CNC steel/bronze dies for private label institutional contracts and OEM brands.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBulkEnquiry("Custom Tableware Die & OEM tooling inquiry")}
              className="shimmer-btn-effect px-6 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Custom Die Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

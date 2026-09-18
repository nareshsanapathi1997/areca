import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Areca3DViewer } from '../components/three/Areca3DViewer';
import { Product3DModelType } from '../components/three/arecaGeometries';
import { useRouter } from '../context/RouterContext';
import { 
  Box, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  FileCheck2,
  Cpu,
  Thermometer,
  Scale
} from 'lucide-react';

export const ThreeDStudioPage: React.FC = () => {
  const { openBulkEnquiry } = useRouter();
  const [activeModel, setActiveModel] = useState<Product3DModelType>('round-plate');

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#153826] to-[#1E4330] text-[#FAF8F5] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold uppercase tracking-wider text-[#95D5B2]"
          >
            <Box className="w-4 h-4 text-[#E0A96D]" />
            <span>Interactive WebGL 3D Engineering Lab</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight"
          >
            3D Areca Tableware Visualizer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#C2B5A0] max-w-3xl mx-auto leading-relaxed"
          >
            Inspect export-ready Areca Leaf tableware in real-time 3D. Rotate 360°, examine natural botanical fiber grains, test material finishes, and simulate hydraulic thermal pressing.
          </motion.p>
        </div>
      </section>

      {/* Main 3D Studio Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <Areca3DViewer initialProduct={activeModel} height="h-[550px] sm:h-[680px]" />
      </section>

      {/* Engineering & Material Tolerances Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
            Physics & Material Tolerances
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153826] font-heading">
            Export Engineering Specifications
          </h2>
          <p className="text-sm text-[#526356]">
            Every batch is calibrated under strict quality assurance for moisture retention, surface planarity, and thermal rigidity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center text-[#2D6A4F]">
              <Thermometer className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#153826] font-heading">Thermal Operating Range</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Tested from -20°C in deep freezing to +180°C in convection ovens and microwave reheating without softening or leaching odors.
            </p>
            <div className="pt-2 border-t border-[#E8E0D2] text-xs font-mono font-bold text-[#2D6A4F]">
              Operating Limits: -20°C to +180°C
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center text-[#2D6A4F]">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#153826] font-heading">Structural Calibrated Core</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              Compressed at 25 metric tons across dual heated bronze dies. Dense natural palm lignins fuse fibers into a monolithic rigid barrier.
            </p>
            <div className="pt-2 border-t border-[#E8E0D2] text-xs font-mono font-bold text-[#2D6A4F]">
              Wall Thickness: 1.2mm – 1.8mm
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center text-[#2D6A4F]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#153826] font-heading">Custom CNC Die Fabrication</h3>
            <p className="text-xs text-[#526356] leading-relaxed">
              We machine custom brass and cast steel tooling dies for bespoke plate geometry, partitioned bento sections, or institutional client logos.
            </p>
            <div className="pt-2 border-t border-[#E8E0D2] text-xs font-mono font-bold text-[#2D6A4F]">
              Die Lead Time: 14 Business Days
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Material Benchmark Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
              Material Science Comparison
            </span>
            <h3 className="text-2xl font-bold text-[#153826] font-heading">
              Areca Palm Sheath vs Alternative Single-Use Materials
            </h3>
            <p className="text-xs sm:text-sm text-[#526356]">
              Understand why 100% natural fallen palm leaf outperforms paper, bagasse pulp, and bamboo veneers in durability and eco-credentials.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#153826] text-[#153826]">
                  <th className="py-3 px-4 font-bold">Feature / Property</th>
                  <th className="py-3 px-4 font-extrabold bg-[#2D6A4F]/10 text-[#153826] rounded-t-lg">
                    Areca Palm Leaf (Our Product)
                  </th>
                  <th className="py-3 px-4 font-medium text-[#526356]">Sugarcane Bagasse</th>
                  <th className="py-3 px-4 font-medium text-[#526356]">Paper / Cardboard</th>
                  <th className="py-3 px-4 font-medium text-[#526356]">Birchwood / Bamboo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E0D2]">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#153826]">Tree Cutting Required?</td>
                  <td className="py-3.5 px-4 font-bold text-[#2D6A4F] bg-[#2D6A4F]/5">NO (Naturally fallen leaves)</td>
                  <td className="py-3.5 px-4 text-[#526356]">No (Crop residue)</td>
                  <td className="py-3.5 px-4 text-[#C85A17]">YES (Timber harvested)</td>
                  <td className="py-3.5 px-4 text-[#C85A17]">YES (Tree logged)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#153826]">Chemical Bleaching / Binders</td>
                  <td className="py-3.5 px-4 font-bold text-[#2D6A4F] bg-[#2D6A4F]/5">0% (Pure leaf + heat only)</td>
                  <td className="py-3.5 px-4 text-[#526356]">Often uses PFAS coatings</td>
                  <td className="py-3.5 px-4 text-[#C85A17]">Bleach + PE plastic liner</td>
                  <td className="py-3.5 px-4 text-[#526356]">Adhesives in veneer layers</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#153826]">Hot Liquid & Oil Resilience</td>
                  <td className="py-3.5 px-4 font-bold text-[#2D6A4F] bg-[#2D6A4F]/5">&gt;4 Hours (Zero sogginess)</td>
                  <td className="py-3.5 px-4 text-[#526356]">~45-60 min before soft</td>
                  <td className="py-3.5 px-4 text-[#C85A17]">~20 min (Leaks at seam)</td>
                  <td className="py-3.5 px-4 text-[#526356]">Good, but absorbs odor</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#153826]">Backyard Home Composting</td>
                  <td className="py-3.5 px-4 font-bold text-[#2D6A4F] bg-[#2D6A4F]/5">60 – 90 Days (Enriches soil)</td>
                  <td className="py-3.5 px-4 text-[#526356]">Requires industrial compost</td>
                  <td className="py-3.5 px-4 text-[#C85A17]">Lined paper not compostable</td>
                  <td className="py-3.5 px-4 text-[#526356]">180+ Days</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#153826]">Microwave & Oven Safe</td>
                  <td className="py-3.5 px-4 font-bold text-[#2D6A4F] bg-[#2D6A4F]/5">Up to 180°C (2 mins micro)</td>
                  <td className="py-3.5 px-4 text-[#526356]">Microwave only (120°C)</td>
                  <td className="py-3.5 px-4 text-[#C85A17]">No oven (Risk of ignition)</td>
                  <td className="py-3.5 px-4 text-[#526356]">Prone to warping</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Direct Wholesale Sample Kit CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#153826] to-[#2D6A4F] text-white p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#95D5B2] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A96D]" />
              Physical Sample Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Ready to Hold These 3D Models in Your Hands?
            </h2>
            <p className="text-sm sm:text-base text-[#D8E2DC] leading-relaxed">
              We ship international sample kits containing all 5 showcased models to importers, restaurant chains, and distributors worldwide within 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => openBulkEnquiry("Sample Box Request: 3D Tableware Sample Kit")}
              className="shimmer-btn-effect px-8 py-4 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] font-bold text-sm shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Order Sample Box</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

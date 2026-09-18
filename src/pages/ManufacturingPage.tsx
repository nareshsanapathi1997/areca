import React from 'react';
import { manufacturingSteps } from '../data/process';
import { useRouter } from '../context/RouterContext';
import { 
  Factory, 
  ShieldCheck, 
  Flame, 
  Trees, 
  Sun, 
  Droplets, 
  CheckCheck, 
  Scissors, 
  SearchCheck, 
  Package, 
  Truck, 
  ArrowRight,
  Sparkles,
  Box 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Trees,
  Droplets,
  Sun,
  CheckCheck,
  Flame,
  Scissors,
  SearchCheck,
  Package,
  Truck
};

export const ManufacturingPage: React.FC = () => {
  const { openBulkEnquiry, navigate } = useRouter();

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Factory className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Facility Operations & Quality Standards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Our 9-Stage Manufacturing Process
          </h1>
          <p className="text-base sm:text-lg text-[#526356] leading-relaxed">
            From plantation leaf collection to high-temperature hydraulic sterilization and moisture-barrier export packing, explore every stage of our disciplined production line.
          </p>
        </div>

        {/* Quality Standards Overview Banner */}
        <div className="p-8 rounded-3xl bg-[#F4F1EA] border border-[#D8CFC4] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#153826]">180°C - 200°C Heat Pressing</h3>
              <p className="text-xs text-[#526356] leading-relaxed">
                Thermal energy naturally sterilizes the leaf fiber, vaporizing latent moisture and killing any natural spore activity without chemical fungicides.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center shrink-0">
              <Droplets className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#153826]">Potable Spring Water Wash</h3>
              <p className="text-xs text-[#526356] leading-relaxed">
                Triple pressure jets remove plantation grit using fresh mountain spring water. Zero bleaches, chlorine, or synthetic surfactants.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center shrink-0">
              <Package className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#153826]">Export Moisture Control</h3>
              <p className="text-xs text-[#526356] leading-relaxed">
                Finished plates undergo moisture meter testing (target &lt;10%) and are sealed with food-grade silica desiccant pouches for ocean freight.
              </p>
            </div>
          </div>
        </div>

        {/* 9 Process Stages Detail Grid */}
        <div className="space-y-12">
          {manufacturingSteps.map((step, idx) => {
            const Icon = iconMap[step.iconName] || Flame;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={step.step}
                className="rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] overflow-hidden p-6 sm:p-10 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Image */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E0D8C7] shadow-md">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-xl bg-[#153826] text-[#FAF8F5] text-xs font-extrabold uppercase shadow">
                          Phase 0{step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Standard */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#153826] text-[#95D5B2] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                          Step {step.step} of 9
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#153826] font-heading">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-[#3E4E42] leading-relaxed">
                      {step.detailedProcess}
                    </p>

                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] flex items-start gap-3 text-xs text-[#3E4E42]">
                      <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#153826] block font-semibold mb-0.5">Hygiene & Quality Mandate:</strong>
                        <span>{step.hygieneProtocol}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Hydraulic Press Tooling Showcase Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAF8F5] to-[#F4F1EA] border-2 border-[#2D6A4F]/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153826]/10 text-[#2D6A4F] text-xs font-bold uppercase tracking-wider">
              <Box className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>Interactive 3D Engineering Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#153826] font-heading">
              Simulate the 150°C Hydraulic Die Pressing in 3D
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
              Explore our real-time WebGL manufacturing simulator. Toggle hydraulic bronze tooling dies, inspect heat vaporization, inspect wall thickness, and rotate plates 360 degrees.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigate('/3d-studio')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Launch 3D Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#153826] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold font-heading">
              Have Technical Questions Regarding Batch Tolerances or Testing?
            </h3>
            <p className="text-xs sm:text-sm text-[#C2B5A0]">
              Our QA and export logistics team will provide detailed technical specification sheets and laboratory test parameters.
            </p>
          </div>
          <button
            onClick={() => openBulkEnquiry()}
            className="px-6 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md"
          >
            Speak with Manufacturing Desk
          </button>
        </div>

      </div>
    </div>
  );
};

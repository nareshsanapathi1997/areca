import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { 
  Leaf, 
  Recycle, 
  Droplet, 
  ShieldAlert, 
  SunMedium, 
  Sprout, 
  ArrowRight 
} from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const { navigate, openBulkEnquiry } = useRouter();

  const sustainabilityPoints = [
    {
      title: "Naturally Fallen Sheaths",
      desc: "Harvested entirely without felling or injuring areca palm trees. Leaves fall naturally at the end of their biological cycle.",
      icon: Leaf
    },
    {
      title: "Backyard Compostable",
      desc: "Decomposes organically into nutrient-rich soil humus within 60 to 90 days in home and commercial compost heaps.",
      icon: Sprout
    },
    {
      title: "Direct Plastic Replacement",
      desc: "Eliminates petrochemical single-use plastics, microplastics, fluorinated PFAS, and synthetic wax paper liners.",
      icon: Recycle
    },
    {
      title: "Zero Chemical Additives",
      desc: "Processed with fresh water and heat alone. Free of chlorine bleaches, formaldehydes, toxic glues, and artificial dyes.",
      icon: ShieldAlert
    },
    {
      title: "Low Carbon Footprint",
      desc: "Solar drying and biomass-powered trimming scrap recycling ensure minimal energy overhead across production.",
      icon: SunMedium
    },
    {
      title: "Responsible Manufacturing",
      desc: "Wash water is filtered and reused for nursery palm irrigation, maintaining a closed-loop rural ecological balance.",
      icon: Droplet
    }
  ];

  return (
    <section className="py-10 bg-[#153826] text-[#FAF8F5] relative overflow-hidden border-b border-[#1B4332]">
      {/* Background botanical ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D6A4F]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#40916C]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#95D5B2]">
            Environmental Integrity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FAF8F5] font-heading">
            Authentic Eco-Friendly Manufacturing
          </h2>
          <p className="text-base text-[#C2B5A0] leading-relaxed">
            True sustainability stems from clean natural inputs and honest, verified manufacturing cycles — without exaggerated claims or greenwashing.
          </p>
        </div>

        {/* 6 Sustainability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1B4332]/60 border border-[#2D6A4F]/60 backdrop-blur-sm space-y-3 hover:bg-[#1B4332] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#95D5B2] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#FAF8F5] font-heading">
                  {point.title}
                </h3>
                <p className="text-xs text-[#C2B5A0] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block with requested banner */}
        <div className="mt-14 p-8 rounded-3xl bg-[#1B4332] border border-[#2D6A4F] text-center space-y-4 max-w-2xl mx-auto shadow-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#95D5B2]">
            Join the Global Shift Away from Plastics
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF8F5] font-heading">
            "Choose Natural. Choose Sustainable."
          </h3>
          <p className="text-xs sm:text-sm text-[#C2B5A0]">
            Empower your customers, event attendees, and catering guests with tableware that returns gracefully to the earth.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openBulkEnquiry()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] font-bold text-sm shadow-md transition-colors"
            >
              Request Wholesale Enquiry
            </button>
            <button
              onClick={() => navigate('/sustainability')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-[#95D5B2] hover:text-white text-sm font-semibold transition-colors"
            >
              <span>Learn About Our Life Cycle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

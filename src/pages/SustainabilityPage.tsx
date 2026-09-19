import React from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  Leaf, 
  Recycle, 
  Sprout, 
  Droplet, 
  SunMedium, 
  ShieldCheck, 
  Globe2, 
  ArrowRight,
  Flame 
} from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  const { openBulkEnquiry, navigate } = useRouter();

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Sprout className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Ecological Responsibility & Circular Economy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Biodegradable Areca Leaf Plates from Vizag
          </h1>
          <p className="text-base sm:text-lg text-[#526356] leading-relaxed">
            Compostable areca leaf plates and bowls from our Visakhapatnam factory — no bleach, wax, or plastic lining. Enquire for biodegradable plate wholesale price.
          </p>
        </div>

        {/* The Natural Life Cycle Graphic / Steps */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#153826] text-[#FAF8F5] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#95D5B2]">
              The Closed-Loop Natural Cycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              From Soil to Table — and Back to Soil
            </h2>
            <p className="text-xs sm:text-sm text-[#C2B5A0]">
              How our products maintain complete harmony with natural biological systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#1B4332] border border-[#2D6A4F] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#95D5B2] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">Natural Shedding</h3>
              <p className="text-xs text-[#C2B5A0] leading-relaxed">
                Areca palm trees shed 6–8 mature outer sheaths annually. No harvesting or deforestation occurs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B4332] border border-[#2D6A4F] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#95D5B2] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-white">Pure Physical Forming</h3>
              <p className="text-xs text-[#C2B5A0] leading-relaxed">
                Water-washed and heat-pressed at 200°C. Zero plastics, chemicals, formaldehydes, or bleach.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B4332] border border-[#2D6A4F] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#95D5B2] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">Hygienic Dining Use</h3>
              <p className="text-xs text-[#C2B5A0] leading-relaxed">
                Rigid, grease-resistant tableware serves hot meals, soups, and banquets with luxury organic aesthetics.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B4332] border border-[#2D6A4F] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#95D5B2] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-white">Backyard Composting</h3>
              <p className="text-xs text-[#C2B5A0] leading-relaxed">
                Disposed into garden soil or commercial compost, breaking down into humus in 60 to 90 days.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Dives into Core Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center mb-2">
              <Leaf className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <h3 className="text-xl font-bold text-[#153826] font-heading">
              Naturally Fallen Leaves vs Wood / Paper Pulp
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
              Unlike paper plates that demand harvesting industrial timber forests and pulping them with thousands of liters of chemical-heavy water, areca palm sheaths fall naturally. We utilize an existing agricultural byproduct without damaging tree life or contributing to forest depletion.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center mb-2">
              <Recycle className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <h3 className="text-xl font-bold text-[#153826] font-heading">
              Direct Elimination of Single-Use Plastics & PFAS
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
              Single-use styrofoam and plastic tableware persist in oceans and landfills for 400+ years, leaching microplastics and endocrine disruptors. Even many "bagasse" or paper plates use hidden synthetic fluorinated coatings (PFAS) to repel water. Areca palm leaves are naturally wax-coated and water-resistant by biological design.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center mb-2">
              <Droplet className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <h3 className="text-xl font-bold text-[#153826] font-heading">
              Closed-Loop Water Management
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
              Wash uses potable factory water without bleach. Runoff is settled so grit stays out of drains. We do not add detergents or chlorine to the wash line.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center mb-2">
              <SunMedium className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <h3 className="text-xl font-bold text-[#153826] font-heading">
              Solar Tunnel Drying & Biomass Recycling
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
              We leverage abundant tropical sunlight through solar-assisted covered drying tunnels, minimizing electrical energy consumption. Trimmed leaf edges and scraps are collected and supplied to local organic composters or used as biomass thermal fuel.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center max-w-xl mx-auto space-y-4 py-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#153826] font-heading">
            "Choose Natural. Choose Sustainable."
          </h3>
          <p className="text-xs sm:text-sm text-[#526356]">
            Provide your patrons with tableware that is as kind to the earth as it is sturdy on their table.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openBulkEnquiry()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Request Bulk Pricing
            </button>
            <button
              onClick={() => navigate('/products')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#EBE5D8] hover:bg-[#E0D8C7] text-[#153826] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Browse Catalog
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { companyStats, companyHighlights } from '../../data/company';
import { ArrowRight, CheckCircle2, Factory, Leaf, Sparkles } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Factory / Plantation Image (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#D8CFC4] bg-[#EBE5D8] aspect-[4/3]">
              <img
                src="/images/areca-original/areca_leaf_machine_press.jpg"
                alt="Areca Palm Leaf Thermal Hydraulic Press Machine in Production"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153826]/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-[#FAF8F5]">
                  <p className="text-xs uppercase font-semibold tracking-wider text-[#95D5B2]">
                    Sustainable Manufacturing Facility
                  </p>
                  <p className="text-sm font-medium mt-1">
                    Multi-station hydraulic press lines engineered for clean, high-volume production.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats mini card */}
            <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2] flex items-center justify-between text-xs text-[#3E4E42]">
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-semibold text-[#153826]">Production Capacity:</span>
              </div>
              <span className="font-bold text-[#153826] bg-[#EBE5D8] px-2.5 py-1 rounded">
                {companyStats.productionCapacity}
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
                Our Manufacturing Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
                From Nature to Table
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed">
              We manufacture premium eco-friendly disposable tableware crafted exclusively from 
              <strong className="text-[#153826] font-semibold"> naturally fallen Areca Palm leaves</strong>. Located in the heart of India's lush areca plantation belt, we transform these discarded natural sheaths into hygienic, exceptionally durable, and compostable tableware through precise freshwater washing, solar drying, and high-heat hydraulic press molding.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {companyHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                    <h3 className="text-sm font-bold text-[#153826]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#526356] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => navigate('/about')}
                id="company-intro-cta-about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-sm font-semibold transition-colors"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/manufacturing')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[#153826] hover:bg-[#EBE5D8] text-sm font-semibold transition-colors"
              >
                <span>View Factory Process</span>
                <ArrowRight className="w-4 h-4 text-[#2D6A4F]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

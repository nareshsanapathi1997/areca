import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { companyStats, companyHighlights } from '../../data/company';
import { ArrowRight, CheckCircle2, Factory } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-10 bg-[#FAF8F5] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#D8CFC4] bg-white">
          <img
            src="/images/areca_product_size_guide.png"
            alt="Areca palm leaf product range: 12 inch round deep buffet plate, 10 inch shallow square, 10 inch round deep tiffin plate, and 5 inch deep bowl"
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
                  Our Manufacturing Heritage
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
                  From Nature to Table
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2] flex items-center justify-between gap-4 text-xs text-[#3E4E42] sm:min-w-[280px]">
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-[#2D6A4F]" />
                  <span className="font-semibold text-[#153826]">Production Capacity:</span>
                </div>
                <span className="font-bold text-[#153826] bg-[#EBE5D8] px-2.5 py-1 rounded">
                  {companyStats.productionCapacity}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed">
              We manufacture eco-friendly disposable tableware from
              <strong className="text-[#153826] font-semibold"> naturally fallen areca palm leaves</strong>
              {' '}at our Kota Narava factory in Visakhapatnam (Vizag). Leaves are washed in potable water, solar-dried, and formed in high-heat hydraulic presses into plates and bowls.
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
    </section>
  );
};

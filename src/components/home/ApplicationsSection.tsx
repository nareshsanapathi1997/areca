import React from 'react';
import { applicationSectors } from '../../data/company';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Utensils } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const { openBulkEnquiry } = useRouter();

  return (
    <section className="py-10 bg-[#FAF8F5] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
            Versatile Tableware Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
            Applications Across Commercial & Hospitality Sectors
          </h2>
          <p className="text-base text-[#526356] leading-relaxed">
            From high-volume corporate cafeterias to luxury outdoor wedding banquets and wholesale distribution networks, our areca plates perform under demanding culinary conditions.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationSectors.map((sector, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] bg-[#E0D8C7] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153826]/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-sm font-bold text-white font-heading">
                      {sector.name}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-[#526356] leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => openBulkEnquiry(sector.name)}
                  className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#EBE5D8] border border-[#D8CFC4] text-xs font-semibold text-[#153826] transition-colors"
                >
                  <span>Enquire for {sector.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2D6A4F]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

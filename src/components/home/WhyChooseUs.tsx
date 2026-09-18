import React from 'react';
import { whyChooseUsData } from '../../data/company';
import { 
  Leaf, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Factory, 
  Truck 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Globe,
  ShieldCheck,
  Sparkles,
  Factory,
  Truck
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
            The Manufacturer Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
            Why Choose Our Areca Leaf Tableware
          </h2>
          <p className="text-base text-[#526356] leading-relaxed">
            Engineered with strict hygienic standards, natural materials, and dedicated bulk capacity to support commercial hospitality and international distributor supply chains.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((card) => {
            const IconComponent = iconMap[card.icon] || Leaf;
            return (
              <div
                key={card.id}
                className="p-7 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] shadow-sm hover:shadow-md hover:border-[#D8CFC4] transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#2D6A4F]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#153826] font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#526356] leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

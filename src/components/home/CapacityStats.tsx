import React from 'react';
import { motion } from 'motion/react';
import { companyStats } from '../../data/company';
import { Factory, Layers, Award, Globe, PackageCheck, Building, TrendingUp } from 'lucide-react';

export const CapacityStats: React.FC = () => {
  const statsList = [
    {
      label: "Production Capacity",
      value: companyStats.productionCapacity,
      detail: "Scalable automated & hydraulic multi-station press lines in Kota Narava, Visakhapatnam",
      icon: Factory,
      highlight: "1 Lakh / Month"
    },
    {
      label: "Product Lineup",
      value: companyStats.productVarieties,
      detail: "12\" Deep Buffet, 10\" Shallow Biryani Square, 10\" Deep Tiffin & 5\" Multipurpose Deep Bowl",
      icon: Layers,
      highlight: "4 Core Formats"
    },
    {
      label: "Minimum Order Quantity",
      value: "3,000 Pieces",
      detail: "Direct factory wholesale order fulfillment with shrink-wrapped export packaging",
      icon: Award,
      highlight: "MOQ: 3,000 Pcs"
    },
    {
      label: "Distribution Reach",
      value: companyStats.countriesServed,
      detail: "Moisture barrier packaging for safe pan-India freight and overseas export containers",
      icon: Globe,
      highlight: "Direct Supply"
    },
    {
      label: "Direct Manufacturer",
      value: companyStats.bulkOrdersSupplied,
      detail: "Reliable institutional, banquet catering, wholesale & distributor supply",
      icon: PackageCheck,
      highlight: "Factory Direct"
    },
    {
      label: "Facility Infrastructure",
      value: companyStats.factoryAreaSqFt,
      detail: "Washing, solar drying, hydraulic thermal pressing & sanitized packaging zones",
      icon: Building,
      highlight: "Kota Narava Unit"
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E0D2] relative overflow-hidden">
      {/* Background graphic grid */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153826]/5 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#E0A96D]" />
            <span>Operational Scale & Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading"
          >
            Manufacturing Capacity & Facilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#526356] leading-relaxed"
          >
            Our infrastructure is designed for high-throughput, hygienic production with strict batch control, low moisture tolerance, and dependable container loading schedules.
          </motion.p>
        </div>

        {/* 6 Stats Grid with Motion Stagger & Hover Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-white hover:bg-[#FAF8F5] border border-[#E8E0D2] hover:border-[#2D6A4F]/40 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 cursor-default"
              >
                {/* Subtle top border accent on hover */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#2D6A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] group-hover:bg-[#153826] text-[#2D6A4F] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D46] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E8E0D2]">
                    {stat.highlight}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#153826] font-heading tracking-tight group-hover:text-[#2D6A4F] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B4F35]">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-[#526356] leading-relaxed pt-2 border-t border-[#E8E0D2]/60">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Factory Notice */}
        <div className="mt-8 text-center text-xs text-[#2D6A4F] bg-[#E8F0EA] p-3 rounded-xl border border-[#2D6A4F]/20 max-w-2xl mx-auto flex items-center justify-center gap-2 font-medium">
          <Factory className="w-4 h-4 text-[#2D6A4F] shrink-0" />
          <span>Verified Direct Manufacturer: HANUMA ENTERPRISES, 2-88/1, kota narava, Visakhapatnam, Andhra Pradesh - 530027.</span>
        </div>

      </div>
    </section>
  );
};


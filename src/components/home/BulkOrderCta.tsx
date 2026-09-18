import React from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { useRouter } from '../../context/RouterContext';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../common/Icons';
import { 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Globe2, 
  Truck,
  Sparkles
} from 'lucide-react';

export const BulkOrderCta: React.FC = () => {
  const { openBulkEnquiry } = useRouter();

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2D6A4F', '#52B788', '#95D5B2', '#E0A96D', '#FFFFFF']
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#153826] via-[#1B4332] to-[#0F281B] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative background leaf illustration / circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#2D6A4F]/25 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E0A96D]/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D6A4F]/60 border border-[#40916C]/60 text-xs font-semibold text-[#95D5B2]"
          >
            <Package className="w-3.5 h-3.5" />
            <span>Factory Wholesale & Container Consignments</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F5] tracking-tight leading-tight font-heading"
          >
            Looking for Areca Leaf Plates in Bulk?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#C2B5A0] leading-relaxed max-w-2xl mx-auto"
          >
            We supply Areca Leaf Tableware for wholesalers, distributors, caterers, restaurants, events and other bulk requirements.
          </motion.p>

          {/* Quick Wholesale Benefits */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left pt-2">
            {[
              { icon: ShieldCheck, title: "Direct Factory", sub: "No middleman markup" },
              { icon: Package, title: "Sample Kits", sub: "Evaluation packs ready" },
              { icon: Globe2, title: "Export Packaging", sub: "Moisture barrier shrink" },
              { icon: Truck, title: "Port Delivery", sub: "FOB / CIF / Domestic" },
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition-colors cursor-default"
                >
                  <IconComp className="w-4 h-4 text-[#95D5B2] mb-1.5" />
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-[#A3B18A] text-[11px]">{item.sub}</div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons with Confetti & Shimmer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                triggerConfetti();
                openBulkEnquiry();
              }}
              id="bulk-cta-request-quote"
              className="shimmer-btn-effect w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
              <span>Request a Bulk Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl("Hello, I am interested in bulk supply of Areca Leaf Tableware. Please share your wholesale price sheet and MOQ terms.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              id="bulk-cta-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          <div className="text-xs text-[#A3B18A] pt-2">
            Average response time on WhatsApp: Under 2 hours during business shifts.
          </div>

        </div>
      </div>
    </section>
  );
};


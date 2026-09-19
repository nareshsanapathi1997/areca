import React from 'react';
import { PlateSizesMatrix } from '../components/sizes/PlateSizesMatrix';
import { OriginalArecaPlateShowcase } from '../components/common/OriginalArecaPlateShowcase';
import { useRouter } from '../context/RouterContext';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from '../components/common/Icons';
import { 
  Sparkles, 
  Layers, 
  HelpCircle, 
  Package, 
  ShieldCheck, 
  ChevronRight,
  Flame,
  Droplet
} from 'lucide-react';

export const PlateSizesPage: React.FC = () => {
  const { openBulkEnquiry } = useRouter();

  const faqs = [
    {
      q: "Which areca plate size is recommended for wedding and corporate buffets?",
      a: "For full-course banquets, the 10-inch Round Deep Tiffin Plate or 10-inch Shallow Square is the everyday standard. For grand feasts with multiple side dishes, curries, and breads, we recommend the 12-inch Round Deep Buffet Plate, with the 5-inch Deep Bowl for gravies and rasam."
    },
    {
      q: "How does a 10-inch square plate compare to a 10-inch round plate?",
      a: "A 10-inch square plate provides approximately 27% more usable dining surface area than a 10-inch round plate. Its modern corner contours allow chefs to arrange multi-item tapas, sushi rolls, and fusion courses with distinct presentation zones."
    },
    {
      q: "Are the deep plates and bowls leak-proof for wet curries and dals?",
      a: "Yes. The 10-inch and 12-inch deep plates, and the 5-inch deep bowl, are formed in hydraulic thermal dies at 180–200°C from heavy-gauge sheaths. The pressed fiber is naturally leak-resistant for hot gravies, dal, and rasam for 4+ hours without chemical wax or plastic lining."
    },
    {
      q: "Can we order a mixed sample box containing all available sizes?",
      a: "Absolutely. We ship sample evaluation kits with pieces of our 4 core formats: 12-inch Round Deep, 10-inch Shallow Square, 10-inch Round Deep, and 5-inch Deep Bowl, so buyers can test food holding, microwave performance, and finish."
    },
    {
      q: "What is the Minimum Order Quantity (MOQ) per size for export shipments?",
      a: "Standard MOQ is 3,000 pieces per order. You can mix the 4 core sizes inside a single shipment. Ask the export desk for carton counts and container loading plans."
    }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Hero Banner */}
      <section className="py-10 bg-[#153826] text-[#FAF8F5] border-b border-[#2D6A4F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F] text-xs font-bold uppercase tracking-wider text-[#95D5B2]">
            <Layers className="w-3.5 h-3.5" />
            <span>Factory Direct Sizing Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight max-w-3xl">
            Areca Palm Leaf Plate Sizes, Shapes & Dimensions
          </h1>
          <p className="text-sm sm:text-base text-[#E8E0D2] max-w-2xl leading-relaxed">
            12 inch buffet, 10 inch round, 10 inch square, and 5 inch bowl sizes with factory wholesale from Visakhapatnam. Enquire for rate — we do not publish MRP.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => openBulkEnquiry("Sample Box - Assorted Sizing Evaluation")}
              className="px-5 py-2.5 rounded-xl bg-[#FAF8F5] text-[#153826] text-xs font-bold hover:bg-[#EBE5D8] transition-colors shadow-sm cursor-pointer"
            >
              Order Mixed Sample Pack
            </button>
            <a
              href={getWhatsAppUrl("Hello! I would like to inquire about Areca Plate sizes and pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2D6A4F] text-white text-xs font-bold hover:bg-[#40916C] transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Sizing Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Sizing Matrix Component */}
      <PlateSizesMatrix />

      {/* Original Natural Grain & Physical Hallmarks Inspector */}
      <OriginalArecaPlateShowcase />

      {/* Sizing FAQ Section */}
      <section className="py-10 bg-[#F4F1EA] border-t border-[#E8E0D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Buyer Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153826] font-heading">
              Frequently Asked Questions About Areca Plate Sizing
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#D8CFC4] space-y-2">
                <h3 className="text-sm font-bold text-[#153826] flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EBE5D8] text-[#153826] text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-[#526356] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Quick CTA Card */}
          <div className="p-6 rounded-3xl bg-[#153826] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Need a Custom Mold or Shape?</h3>
              <p className="text-xs text-[#E8E0D2]">
                We fabricate precision hydraulic dies for private label brands and distributors worldwide.
              </p>
            </div>
            <button
              onClick={() => openBulkEnquiry("Custom Mold Die Tooling & Sizing Inquiry")}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#FAF8F5] text-[#153826] text-xs font-bold hover:bg-[#EBE5D8] transition-colors shadow-sm"
            >
              Consult Tooling Engineers
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

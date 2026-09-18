import React from 'react';
import { siteConfig } from '../data/site';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-2 border-b border-[#E8E0D2] pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
            <FileText className="w-4 h-4" />
            <span>Commercial Terms of Trade</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#6B4F35]">
            Last Updated: March 2025 | {siteConfig.legalName}
          </p>
        </div>

        <div className="prose prose-stone text-[#3E4E42] text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">1. Quotations & Proforma Invoices</h2>
            <p>
              All wholesale, export, and distributor quotations issued by {siteConfig.legalName} are valid for thirty (30) calendar days from the date of issue, unless otherwise specified in the formal Proforma Invoice. Raw leaf seasonal market variations and ocean container freight tariffs may affect pricing after expiry.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">2. Natural Material Characteristics</h2>
            <p>
              Areca palm leaf tableware is an authentic 100% natural, unbleached agricultural product. As such:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Natural variations in wood-grain texture, striations, and color (ranging from pearl cream to caramel tan) are innate characteristics of the leaf and are not considered manufacturing defects.</li>
              <li>Slight natural curvature or organic surface markings do not impair food-grade integrity or structural load capacity.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">3. Minimum Order Quantities (MOQ) & Tooling Dies</h2>
            <p>
              Standard catalogue SKUs are subject to prevailing minimum order quantities as listed in our formal quotation. Custom hydraulic die molds and branded packaging sleeves require mutual signed approval of die schematics and sample proof approval prior to mass production runs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">4. Export Freight & Incoterms</h2>
            <p>
              Shipments are executed under standard ICC Incoterms (commonly FOB New Mangalore / Chennai Port, CFR, or CIF). Risk of transit transfers in accordance with the specified Incoterm. Export packaging complies with international phytosanitary and maritime moisture barrier standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">5. Inspection & Quality Assurance</h2>
            <p>
              Buyers or their authorized third-party inspection agencies (e.g. SGS, Bureau Veritas) are entitled to conduct pre-shipment inspections at our Karnataka manufacturing facility prior to container stuffing upon 5 business days' advance written notice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">6. Governing Law</h2>
            <p>
              These commercial terms and any contracts formed hereunder shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the commercial courts of Karnataka, India.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

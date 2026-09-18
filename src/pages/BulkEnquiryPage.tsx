import React from 'react';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from '../components/common/Icons';
import { 
  Package, 
  ShieldCheck, 
  Globe2, 
  Truck, 
  CheckCircle2, 
  HelpCircle,
  FileText 
} from 'lucide-react';

export const BulkEnquiryPage: React.FC = () => {
  const { bulkModalProduct } = useRouter();

  const bulkFaqs = [
    {
      q: "What is your standard Minimum Order Quantity (MOQ)?",
      a: "For domestic wholesale within India, our minimum order quantity is typically 5,000 pieces across mixed SKUs. For international export, we cater to Full Container Loads (20ft / 40ft HQ FCL) as well as Less than Container Loads (LCL, minimum 15,000 - 25,000 pieces)."
    },
    {
      q: "Do you supply evaluation sample kits?",
      a: "Yes. We offer sample evaluation courier packs containing 10 to 15 assorted plates, bowls, and trays so you can inspect natural fiber texture, rigidity, and edge finishes. Sample cost is credited against your first commercial container or wholesale order."
    },
    {
      q: "Can you provide private labeling and custom barcode packaging?",
      a: "Absolutely. We routinely pack shrink-wrapped retail bundles of 10, 20, or 25 pieces with your custom brand color insert card, barcode labels, and master cartons printed according to your retail distribution specifications."
    },
    {
      q: "What are your international shipping terms and sea ports?",
      a: "We export under FOB, CFR, and CIF terms through Mangalore Port (NMPT) and Chennai Port. All consignments are accompanied by Phytosanitary Certificates, Certificates of Origin, and Fumigation documentation where required."
    }
  ];

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Package className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Direct Factory Quotation Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Wholesale & Bulk Export Enquiries
          </h1>
          <p className="text-base text-[#526356] leading-relaxed">
            Partner directly with our Karnataka manufacturing facility for container-load exports, distributor territories, catering supplies, and contract OEM packaging.
          </p>
        </div>

        {/* 2-Column: Form (7 cols) and Procurement Highlights (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm initialProduct={bulkModalProduct || ''} />
          </div>

          {/* Right Column: Why Partner With Us & WhatsApp Desk (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-3xl bg-[#153826] text-white space-y-4 shadow-lg border border-[#1B4332]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#95D5B2] font-bold">Fast-Track Response</span>
                  <h3 className="text-xl font-bold font-heading">Need an Instant Quotation?</h3>
                </div>
              </div>
              <p className="text-xs text-[#C2B5A0] leading-relaxed">
                Chat directly with our export logistics desk on WhatsApp for instant price sheets, FOB quotes, and packaging dimensions.
              </p>
              <a
                href={getWhatsAppUrl("Hello, I am looking to place a bulk / container order for Areca Leaf Tableware. Please provide wholesale quotation and sample availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>

            {/* Wholesale Advantages Checklist */}
            <div className="p-6 rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-4">
              <h3 className="text-base font-bold text-[#153826] font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2D6A4F]" />
                <span>Manufacturer Guarantees</span>
              </h3>

              <div className="space-y-3 text-xs text-[#3E4E42]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#153826] block">Competitive Factory Pricing</strong>
                    <span>Eliminate intermediary trading margins by sourcing directly from the manufacturing unit.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#153826] block">Export-Grade Moisture Barrier</strong>
                    <span>Shrink-wrapped bundles with desiccant protection prevent mold in ocean transit.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#153826] block">Flexible Port Logistical Support</strong>
                    <span>Experienced handling of ocean bills of lading, phytosanitary clearance, and customs dispatch.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#153826] block">Consistent Batch Color & Quality</strong>
                    <span>Precision optical sorting ensures each box contains premium grade tableware.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Factory Contacts */}
            <div className="p-6 rounded-3xl bg-[#EBE5D8] border border-[#D8CFC4] text-xs text-[#3E4E42] space-y-2">
              <div className="font-bold text-[#153826] uppercase tracking-wider text-[11px]">
                Factory & Export Office:
              </div>
              <p>
                {siteConfig.address.factoryAddress}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}, {siteConfig.address.country}
              </p>
              <div className="pt-1 flex flex-col gap-1 text-[#153826]">
                <span><strong>Phone:</strong> {siteConfig.phone}</span>
                <span><strong>Email:</strong> {siteConfig.email}</span>
                <span><strong>Business Hours:</strong> {siteConfig.businessHours}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bulk Procurement FAQ Section */}
        <div className="pt-8 border-t border-[#E8E0D2] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#153826] font-heading">
              Bulk Ordering & Export Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bulkFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-2"
              >
                <h4 className="text-sm font-bold text-[#153826] font-heading flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-[#526356] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

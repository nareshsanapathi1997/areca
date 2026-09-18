import React from 'react';
import { siteConfig } from '../data/site';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-2 border-b border-[#E8E0D2] pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
            <ShieldCheck className="w-4 h-4" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6B4F35]">
            Last Updated: March 2025 | {siteConfig.legalName}
          </p>
        </div>

        <div className="prose prose-stone text-[#3E4E42] text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">1. Overview & Commitment</h2>
            <p>
              {siteConfig.legalName} ("we", "our", or "the Company") respects the commercial confidentiality and privacy rights of our wholesale buyers, distributors, business partners, and website visitors. This Privacy Policy details how we collect, store, and process business inquiries and personal contact details submitted through our website and digital communications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">2. Information We Collect</h2>
            <p>
              When you submit a quote request, request a sample evaluation pack, or initiate communication via our enquiry forms or WhatsApp:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Full Name and Professional Title</li>
              <li>Company / Trade Entity Name</li>
              <li>Business Email Address and Telephone / WhatsApp Contact Number</li>
              <li>Destination Country, City, or Shipping Port of Discharge</li>
              <li>Product SKU selections, estimated container volumes, and custom packaging requirements</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">3. How We Use Your Commercial Data</h2>
            <p>
              All submitted data is utilized exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Generating formal proforma invoices, FOB/CIF freight quotations, and specifications</li>
              <li>Coordinating sample dispatch logistics and courier tracking</li>
              <li>Direct business correspondence regarding batch production schedules and container loading</li>
              <li>Compliance with international customs, export documentation, and phytosanitary record-keeping</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">4. Confidentiality & Non-Disclosure</h2>
            <p>
              We do not sell, license, or disclose your corporate purchase quantities, client identities, or contact information to third-party marketing brokers. Data is shared strictly with necessary operational providers: verified ocean freight forwarders, phytosanitary inspection agencies, and customs brokers to facilitate your export consignments.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">5. Contact Us Regarding Your Data</h2>
            <p>
              If you wish to update your commercial contact details or request the deletion of non-regulatory historical inquiry records, please email our administrative office at: <strong className="text-[#153826]">{siteConfig.email}</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

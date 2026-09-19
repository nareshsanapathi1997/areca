import React from 'react';
import { siteConfig } from '../data/site';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { name, legalName, email, phone, address } = siteConfig;
  const mapsUrl = address.mapsUrl;

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-2 border-b border-[#E8E0D2] pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6B4F35]">
            Last updated: 19 September 2026 · {legalName}, Kota Narava, Visakhapatnam, Andhra Pradesh, India
          </p>
        </div>

        <div className="text-[#3E4E42] text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">1. Who we are</h2>
            <p>
              {legalName} (“we”, “our”) manufactures and sells areca palm leaf plates and bowls from our factory at{' '}
              {address.factoryAddress}, {address.city}, {address.state} {address.pincode}, India.
              This policy explains how we handle personal and business contact data collected on this website, by email, phone, or WhatsApp.
            </p>
            <p className="text-xs text-[#6B4F35]">
              Factory pin: 17°44'18.3"N 83°11'11.5"E (
              <a href={mapsUrl} className="underline text-[#2D6A4F]" target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
              ).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">2. What we collect</h2>
            <p>
              We collect only what is needed to answer a wholesale or export enquiry. The bulk enquiry form asks for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Full name (required)</li>
              <li>Company name (optional)</li>
              <li>Business email and phone / WhatsApp number (required)</li>
              <li>Destination country and city or port (required)</li>
              <li>Product of interest, quantity, and message (required)</li>
            </ul>
            <p>
              If you call, email, or message WhatsApp {phone}, we also keep the conversation needed to quote, sample, or ship an order.
              We do not ask for payment card numbers on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">3. How we use it</h2>
            <p>We use this information only to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Reply with product specifications and factory wholesale rates</li>
              <li>Send sample packs and share courier / dispatch details</li>
              <li>Prepare proforma invoices, packing lists, and export documents when you place an order</li>
              <li>Comply with Indian tax, customs, and phytosanitary record-keeping where required</li>
            </ul>
            <p>
              We do not sell your details to marketing lists. We do not publish a public price list; a rate is quoted to you, not listed on the site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">4. Where it is stored and who sees it</h2>
            <p>
              Enquiry forms are sent to our factory desk at {name} in Visakhapatnam. Records may be stored on our email, WhatsApp Business, and internal order files so we can follow up.
            </p>
            <p>
              We share data only when needed to complete your request: for example a freight forwarder, courier, or customs broker for a shipment you have asked us to arrange. We do not operate a public directory of enquiries.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">5. Cookies, maps, and fonts</h2>
            <p>
              This website does not use Google Analytics, advertising pixels, or its own tracking cookies.
            </p>
            <p>
              The Contact page embeds a Google Map of our factory pin. Google may set cookies or collect usage data under{' '}
              <a href="https://policies.google.com/privacy" className="underline text-[#2D6A4F]" target="_blank" rel="noopener noreferrer">
                Google’s privacy policy
              </a>
              . You can open the same pin without the embed via the Maps link above.
            </p>
            <p>
              Page fonts are loaded from Google Fonts. WhatsApp and phone links open those apps or sites under their own terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">6. How long we keep it</h2>
            <p>
              We keep enquiry and order correspondence for as long as needed to complete the discussion, fulfil an order, and meet Indian legal retention rules (for example tax and export papers). You may ask us to update or delete a record that we are not required to keep.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">7. Your rights</h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023 (India), you may request access, correction, or erasure of personal data we hold about you, and you may withdraw consent for marketing follow-up. We will still keep documents the law requires us to retain.
            </p>
            <p>
              Wholesale buyers outside India may make the same requests. We will respond within a reasonable time at the email below.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">8. Children</h2>
            <p>
              This site is for business buyers (restaurants, hotels, caterers, distributors, exporters). We do not knowingly collect data from children.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#153826]">9. Contact for privacy requests</h2>
            <p>
              {legalName}<br />
              {address.factoryAddress}, {address.city}, {address.state} {address.pincode}, India<br />
              Email: <a href={`mailto:${email}`} className="underline text-[#2D6A4F]">{email}</a><br />
              Phone / WhatsApp: {phone}
            </p>
            <p className="text-xs text-[#6B4F35]">
              Related: our wholesale terms are on the Terms & Conditions page. This policy may be updated when our factory contact details or website tools change.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

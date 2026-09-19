import React from 'react';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from '../components/common/Icons';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  Compass,
  Ship 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Building2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Direct Plant Operations & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Areca Leaf Plate Supplier in Visakhapatnam
          </h1>
          <p className="text-base text-[#526356] leading-relaxed">
            Contact our Kota Narava, Vizag factory for wholesale price, bulk orders, and export. Areca leaf plate manufacturer and supplier in Visakhapatnam, Andhra Pradesh.
          </p>
        </div>

        {/* 4 Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <div className="font-bold text-sm text-[#153826]">Factory Address</div>
            <p className="text-xs text-[#526356] leading-relaxed">
              {siteConfig.address.factoryAddress}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
            </p>
            <p className="text-[11px] text-[#6B4F35]">
              17°44'18.3"N 83°11'11.5"E
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <div className="font-bold text-sm text-[#153826]">Direct Line</div>
            <p className="text-xs text-[#526356]">
              {siteConfig.phone}
            </p>
            <p className="text-[11px] text-[#6B4F35]">
              Available Monday – Saturday
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <div className="font-bold text-sm text-[#153826]">Email Desk</div>
            <p className="text-xs text-[#526356]">
              {siteConfig.email}
            </p>
            <p className="text-[11px] text-[#6B4F35]">
              Wholesale rates & spec sheets
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <div className="font-bold text-sm text-[#153826]">Working Hours</div>
            <p className="text-xs text-[#526356]">
              {siteConfig.businessHours}
            </p>
            <p className="text-[11px] text-[#6B4F35]">
              IST (Indian Standard Time, UTC +5:30)
            </p>
          </div>
        </div>

        {/* 2-Column: Form & Map Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          {/* Location & Logistical Access Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Map Card */}
            <div className="rounded-3xl bg-[#F4F1EA] border border-[#E8E0D2] overflow-hidden shadow-sm">
              <div className="relative aspect-[16/10] bg-[#E0D8C7] overflow-hidden">
                <iframe
                  title="Hanuma Enterprises factory map, Kota Narava, Visakhapatnam"
                  src={`https://maps.google.com/maps?q=${siteConfig.address.latitude},${siteConfig.address.longitude}&z=17&hl=en&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-6 space-y-4 text-xs text-[#3E4E42]">
                <h3 className="font-bold text-sm text-[#153826] font-heading flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Logistical Access & Sea Ports</span>
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Ship className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#153826] block">Nearest Sea Port (FOB Dispatch):</strong>
                      <span>Visakhapatnam Port (Vizag) — close to our Kota Narava factory. Direct ocean connections via East Coast trade lanes, with Chennai as an alternate load port on request.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#153826] block">Air cargo & samples:</strong>
                      <span>Visakhapatnam International Airport (VTZ) for sample kits and urgent parcels. Hyderabad and Chennai air cargo as backups for export samples.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-white text-xs font-bold transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open factory pin in Google Maps</span>
                  </a>
                  <a
                    href={getWhatsAppUrl("Hello, I would like to schedule a visit to your Areca Leaf Plate manufacturing unit in Kota Narava, Visakhapatnam.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Coordinate Factory Visit via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

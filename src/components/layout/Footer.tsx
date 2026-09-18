import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { siteConfig } from '../../data/site';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { BrandLogo } from '../common/BrandLogo';
import { 
  WhatsAppIcon, 
  LinkedInIcon, 
  FacebookIcon, 
  InstagramIcon, 
  YouTubeIcon 
} from '../common/Icons';
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openBulkEnquiry } = useRouter();

  return (
    <footer id="main-site-footer" className="bg-[#0F281B] text-[#E8E0D2] border-t border-[#1B4332] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1B4332]">
          
          {/* Column 1: Brand & Factory Intro (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="footer" size="lg" />

            <p className="text-sm text-[#C2B5A0] leading-relaxed max-w-md">
              Manufacturer and bulk exporter of 100% natural, biodegradable dinnerware handcrafted from naturally fallen Areca Palm leaves. Delivering hygienic, chemical-free dining solutions to global distributors, hospitality groups, and institutional caterers.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#E8E0D2]">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1B4332] text-[#95D5B2]">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Fallen Leaves
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1B4332] text-[#95D5B2]">
                Zero Chemicals
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1B4332] text-[#95D5B2]">
                Direct Factory Supply
              </span>
            </div>

            {/* Official Social & Direct Connect Icons */}
            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-wider text-[#A3B18A] font-semibold block mb-2">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={getWhatsAppUrl("Hello Hanuman Enterprises, I would like to inquire about your Areca Leaf Tableware.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow transition-transform hover:scale-105"
                  title="WhatsApp Direct Desk"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] text-[#95D5B2] hover:text-white flex items-center justify-center border border-[#2D6A4F] transition-all hover:scale-105"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] text-[#95D5B2] hover:text-white flex items-center justify-center border border-[#2D6A4F] transition-all hover:scale-105"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] text-[#95D5B2] hover:text-white flex items-center justify-center border border-[#2D6A4F] transition-all hover:scale-105"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] text-[#95D5B2] hover:text-white flex items-center justify-center border border-[#2D6A4F] transition-all hover:scale-105"
                  title="YouTube Factory Tour"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#95D5B2] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Product Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/3d-studio')}
                  className="hover:text-white transition-colors text-left font-bold text-[#E0A96D] flex items-center gap-1.5"
                >
                  <span>3D Studio Visualizer</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#2D6A4F] text-white">NEW</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/sizes')}
                  className="hover:text-white transition-colors text-left font-semibold text-[#95D5B2]"
                >
                  Plate Sizes Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/manufacturing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Manufacturing Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/sustainability')}
                  className="hover:text-white transition-colors text-left"
                >
                  Quality & Sustainability
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/gallery')}
                  className="hover:text-white transition-colors text-left"
                >
                  Factory Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#95D5B2] mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Round Areca Plates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Square Areca Plates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Compartment Plates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Areca Bowls & Cups
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Areca Serving Trays
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom & Specialty Shapes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Coordinates */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#95D5B2] mb-4">
              Contact & Factory
            </h3>
            <div className="space-y-3 text-xs text-[#C2B5A0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#95D5B2] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.factoryAddress}, {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country} - {siteConfig.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#95D5B2] shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#95D5B2] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#95D5B2] shrink-0" />
                <span>{siteConfig.businessHours}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openBulkEnquiry()}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-[#2D6A4F] hover:bg-[#40916C] text-[#FAF8F5] font-semibold text-xs transition-colors"
                >
                  <span>Request Bulk Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A3B18A]">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => navigate('/terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

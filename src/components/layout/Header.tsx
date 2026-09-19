import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { siteConfig } from '../../data/site';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { BrandLogo } from '../common/BrandLogo';
import { WhatsAppIcon } from '../common/Icons';
import { 
  Menu, 
  X, 
  Phone, 
  Leaf, 
  ArrowRight,
  ShieldCheck,
  Box
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate, openBulkEnquiry } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: '3D Studio', path: '/3d-studio', is3D: true },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Plate Sizes', path: '/sizes' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Top announcement bar for B2B export credibility */}
      <div id="top-announcement-bar" className="bg-[#153826] text-[#E8E0D2] text-xs py-2 px-4 border-b border-[#2D6A4F]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#2D6A4F] text-[#FAF8F5]">
              DIRECT FACTORY
            </span>
            <span>Wholesale, OEM Private Label & Container-Load Export Worldwide</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#40916C]" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden md:inline text-[#2D6A4F]">•</span>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#52B788] hover:text-[#74C69D] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Export Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-md border-b border-[#E8E0D2]'
            : 'bg-[#FAF8F5] py-4 border-b border-[#E8E0D2]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Header Image */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center text-left group focus:outline-none transition-transform hover:opacity-95 cursor-pointer py-0.5"
              id="header-brand-logo"
              aria-label="Hanuma Enterprises Home"
            >
              <img
                src="/images/hanuma_header_logo.svg"
                alt="Hanuma Enterprises - 100% Biodegradable • Eco-Friendly • Chemical-Free"
                className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] drop-shadow-xs"
                referrerPolicy="no-referrer"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5" id="desktop-nav-links">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`relative px-2.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                      active
                        ? 'text-[#153826] bg-[#EBE5D8] font-semibold shadow-xs'
                        : 'text-[#3E4E42] hover:text-[#153826] hover:bg-[#F4F1EA]'
                    } ${link.is3D ? 'font-bold' : ''}`}
                  >
                    {link.is3D && <Box className="w-3.5 h-3.5 text-[#E0A96D]" />}
                    <span>{link.label}</span>
                    {link.is3D && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-[#2D6A4F] text-white tracking-wide uppercase">
                        3D
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#153826] bg-[#EBE5D8] hover:bg-[#E0D8C7] rounded-lg transition-colors"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => openBulkEnquiry()}
                id="header-cta-get-quote"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#153826] hover:bg-[#2D6A4F] rounded-lg shadow-sm transition-all hover:shadow"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => openBulkEnquiry()}
                className="px-3 py-1.5 text-xs font-semibold text-[#FAF8F5] bg-[#153826] rounded-md"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#153826] hover:bg-[#EBE5D8] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden border-t border-[#E8E0D2] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200"
          >
            <div className="pb-3 pt-1 border-b border-[#E8E0D2]/80 mb-3 flex items-center justify-between">
              <img
                src="/images/hanuma_header_logo.svg"
                alt="Hanuma Enterprises"
                className="h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase font-bold text-[#2D6A4F] bg-[#E8E0D2] px-2 py-0.5 rounded">
                Menu
              </span>
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      active
                        ? 'text-[#153826] bg-[#EBE5D8] font-bold'
                        : 'text-[#2D3E32] hover:bg-[#F4F1EA]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.is3D && <Box className="w-4 h-4 text-[#E0A96D]" />}
                      <span>{link.label}</span>
                      {link.is3D && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#2D6A4F] text-white">
                          NEW 3D
                        </span>
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#8C6D46] opacity-70" />
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#E8E0D2] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBulkEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#153826] text-[#FAF8F5] font-semibold text-sm shadow-sm"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp ({siteConfig.whatsappDisplay})</span>
              </a>

              <div className="text-center text-xs text-[#6B4F35] pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Direct Factory Supply • Container Export</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

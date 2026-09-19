import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../common/Icons';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip banner */}
      {showTooltip && (
        <motion.div 
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          className="hidden sm:flex items-center gap-2.5 bg-[#153826] text-[#FAF8F5] text-xs py-2 px-3.5 rounded-full shadow-2xl border border-[#2D6A4F]"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Wholesale & Export Inquiry? Chat on WhatsApp</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#C2B5A0] hover:text-white ml-1 cursor-pointer"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}

      {/* Main floating action button with pulsing radar ring */}
      <div className="relative flex items-center justify-center">
        {/* Continuous Radar Wave Ring */}
        <span className="absolute w-14 h-14 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <motion.a
          href={getWhatsAppUrl("Hello, I am interested in your Areca Leaf Plates. Please share product details, MOQ, and wholesale pricing.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Hanuma Enterprises Export Desk"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#1EBE5D] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        >
          <WhatsAppIcon className="w-8 h-8 text-white filter drop-shadow" />
        </motion.a>
      </div>
    </div>
  );
};


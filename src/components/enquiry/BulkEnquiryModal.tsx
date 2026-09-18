import React, { useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { EnquiryForm } from './EnquiryForm';
import { X } from 'lucide-react';

export const BulkEnquiryModal: React.FC = () => {
  const { isBulkModalOpen, closeBulkModal, bulkModalProduct } = useRouter();

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBulkModalOpen) {
        closeBulkModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBulkModalOpen, closeBulkModal]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isBulkModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBulkModalOpen]);

  if (!isBulkModalOpen) return null;

  return (
    <div
      onClick={closeBulkModal}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D8CFC4] my-8 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={closeBulkModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EBE5D8] hover:bg-[#E0D8C7] text-[#153826] transition-colors z-20 focus:outline-none"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-1 sm:p-2 max-h-[85vh] overflow-y-auto">
          <EnquiryForm initialProduct={bulkModalProduct || ''} className="border-0 shadow-none bg-transparent" />
        </div>
      </div>
    </div>
  );
};

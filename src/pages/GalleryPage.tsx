import React from 'react';
import { GalleryView } from '../components/gallery/GalleryView';
import { Camera, Sparkles } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const GalleryPage: React.FC = () => {
  const { openBulkEnquiry } = useRouter();

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Camera className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Factory & Product Visual Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Manufacturing & Product Gallery
          </h1>
          <p className="text-base text-[#526356] leading-relaxed">
            Factory photos from Kota Narava, Visakhapatnam: wash, dry, sort, press, inspection, packing, and finished plates and bowls.
          </p>
        </div>

        {/* Gallery Component */}
        <GalleryView />

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F1EA] border border-[#D8CFC4] text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#153826] font-heading">
            Interested in Visiting Our Manufacturing Unit?
          </h3>
          <p className="text-xs sm:text-sm text-[#526356]">
            We welcome wholesale buyers, export consolidators, and distributors to audit our clean processing floor and observe our hydraulic press lines in action.
          </p>
          <button
            onClick={() => openBulkEnquiry('Factory Visit & Sample Inspection')}
            className="px-6 py-3 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            Schedule a Facility Visit
          </button>
        </div>

      </div>
    </div>
  );
};

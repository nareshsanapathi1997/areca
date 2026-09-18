import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentLightboxItem: GalleryItem | null = activeLightboxIndex !== null
    ? filteredItems[activeLightboxIndex]
    : null;

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#153826] text-[#FAF8F5] shadow-sm'
                : 'bg-[#F4F1EA] text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-2xl overflow-hidden bg-[#EBE5D8] border border-[#E8E0D2] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 aspect-[4/3]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#153826]/90 text-[#FAF8F5] backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            {/* Hover overlay with title & view button */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#153826]/90 via-[#153826]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <div className="flex items-center gap-2 text-[#95D5B2] text-xs font-semibold mb-1">
                <Eye className="w-4 h-4" />
                <span>Click to Expand</span>
              </div>
              <h4 className="text-sm font-bold text-white font-heading leading-snug">
                {item.title}
              </h4>
              <p className="text-[11px] text-[#C2B5A0] line-clamp-1 mt-0.5">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#153826] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#0F281B] text-[#FAF8F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#95D5B2]">
                  {currentLightboxItem.category} • Image {(activeLightboxIndex ?? 0) + 1} of {filteredItems.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading mt-0.5">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-[#C2B5A0] mt-1">
                  {currentLightboxItem.caption}
                </p>
              </div>

              <span className="px-3 py-1 rounded bg-[#2D6A4F] text-xs font-semibold text-[#FAF8F5] shrink-0">
                Direct Facility Photograph
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

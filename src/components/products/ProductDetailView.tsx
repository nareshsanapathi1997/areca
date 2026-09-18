import React, { useState } from 'react';
import { Product } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { getProductWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../common/Icons';
import { 
  ArrowLeft, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Package, 
  Layers, 
  Utensils, 
  CheckCircle2, 
  Flame, 
  Clock,
  Box,
  RotateCw
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const { navigate, openBulkEnquiry } = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="py-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between text-xs text-[#6B4F35]">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-1.5 font-bold text-[#153826] hover:text-[#2D6A4F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <span>Products</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="font-semibold text-[#153826]">{product.name}</span>
          </div>
        </div>

        {/* Product Overview 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-[#EBE5D8] border border-[#D8CFC4] shadow-md aspect-[4/3]">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase bg-[#153826]/90 text-[#FAF8F5] backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF8F5]/90 text-[#153826] shadow-sm backdrop-blur-sm">
                  100% Fallen Leaf
                </span>
              </div>
            </div>

            {/* Thumbnail selector if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-[#2D6A4F] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Fast Specifications Summary Box */}
            <div className="p-5 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153826]">
                Manufacturing & Export Standards
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#3E4E42]">
                <div>
                  <span className="text-[#6B4F35] block">Shape Profile:</span>
                  <strong className="text-[#153826]">{product.shape}</strong>
                </div>
                <div>
                  <span className="text-[#6B4F35] block">Raw Material:</span>
                  <strong className="text-[#153826]">{product.material}</strong>
                </div>
                <div>
                  <span className="text-[#6B4F35] block">Thermal Tolerance:</span>
                  <strong className="text-[#153826]">-20°C to +100°C</strong>
                </div>
                <div>
                  <span className="text-[#6B4F35] block">Decomposition:</span>
                  <strong className="text-[#153826]">60-90 Days Natural Soil</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Sizes, Packaging & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2D6A4F] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial Areca Tableware</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm text-[#526356] mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Available Sizes selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#153826] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#2D6A4F]" />
                <span>Available Sizes:</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-[#153826] text-[#FAF8F5] shadow-sm'
                        : 'bg-[#F4F1EA] text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging & MOQ Card */}
            <div className="p-5 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-2.5 text-xs text-[#3E4E42]">
              <div className="flex items-center gap-2 text-[#153826] font-bold text-sm">
                <Package className="w-4 h-4 text-[#2D6A4F]" />
                <span>Standard Packaging & MOQ</span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div>
                  <strong>Inner Pack:</strong> {product.packaging.piecesPerPack}
                </div>
                <div>
                  <strong>Master Shipper:</strong> {product.packaging.packsPerCarton}
                </div>
                {product.packaging.cartonDimensions && (
                  <div>
                    <strong>Carton Specs:</strong> {product.packaging.cartonDimensions}
                  </div>
                )}
                <div>
                  <strong>Minimum Order Quantity (MOQ):</strong> <span className="text-[#153826] font-bold">{product.moq}</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openBulkEnquiry(product.name)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Request Wholesale / Export Quote</span>
              </button>

              <a
                href={getProductWhatsAppUrl(product.name, selectedSize)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

            {/* 3D Real-Time Inspection Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-[#F4F1EA] border border-[#2D6A4F]/30 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#153826] text-[#E0A96D] flex items-center justify-center shadow">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#153826] flex items-center gap-1.5">
                    <span>Inspect Shape in Real-Time 3D</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#2D6A4F] text-white">WebGL</span>
                  </div>
                  <div className="text-[11px] text-[#526356]">
                    Rotate 360°, inspect leaf grain, thickness & die stamp simulation
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/3d-studio')}
                className="px-4 py-2 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-white text-xs font-bold shadow transition-all hover:scale-105 cursor-pointer whitespace-nowrap shrink-0"
              >
                Launch 3D Studio
              </button>
            </div>

            {/* Features Checklist */}
            <div className="pt-4 border-t border-[#E8E0D2] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153826]">
                Key Technical & Environmental Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3E4E42]">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications List */}
            <div className="pt-4 border-t border-[#E8E0D2] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#153826]">
                Recommended Food Service Applications
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#EBE5D8] text-[#153826] font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

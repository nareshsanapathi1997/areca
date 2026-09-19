import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigate, openBulkEnquiry } = useRouter();

  return (
    <motion.div 
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl bg-[#FAF8F5] hover:bg-white border border-[#E8E0D2] hover:border-[#2D6A4F]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Product Image Box with Shimmer Hover Sweep */}
        <div className="relative aspect-square bg-white overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          {/* Light Glare Sheen Sweep on Card Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-[#153826]/90 text-[#FAF8F5] backdrop-blur-sm shadow flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E0A96D]" />
              {product.category}
            </span>
          </div>

          {/* Available Sizes badge */}
          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FAF8F5]/95 text-[#153826] shadow-sm backdrop-blur-sm flex items-center gap-1.5 border border-[#E8E0D2]">
            <Layers className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>{product.sizes[0]}</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-2.5">
          <h3 className="text-lg font-bold text-[#153826] font-heading group-hover:text-[#2D6A4F] transition-colors leading-snug">
            {product.name}
          </h3>

          <div className="text-xs text-[#6B4F35] font-medium flex flex-wrap gap-1">
            <span className="font-semibold">Sizes:</span>
            <span className="text-[#3E4E42]">{product.sizes.join(', ')}</span>
          </div>

          <p className="text-xs text-[#526356] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="pt-1 flex items-center justify-between text-[11px] text-[#6B4F35] border-t border-[#E8E0D2]/60 pt-2">
            <span>MOQ: <strong className="text-[#153826]">{product.moq.split(' ')[0]} {product.moq.split(' ')[1]}</strong></span>
            <span className="text-[#2D6A4F] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] animate-pulse" />
              100% Compostable
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => navigate(`/products/${product.slug}`)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EBE5D8] hover:bg-[#E0D8C7] text-[#153826] text-xs font-semibold transition-colors cursor-pointer"
        >
          <span>View Specs</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => openBulkEnquiry(product.name)}
          className="shimmer-btn-effect w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-xs font-semibold shadow-sm hover:shadow transition-all cursor-pointer"
        >
          <span>Enquiry</span>
        </button>
      </div>
    </motion.div>
  );
};


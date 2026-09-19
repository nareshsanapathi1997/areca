import React, { useState } from 'react';
import { productsData, productCategories } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ProductCategoriesSection: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const filteredProducts = selectedCategory === "All Products"
    ? productsData.slice(0, 8)
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-[#F4F1EA] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Manufacturing Range</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading">
              Our Product Categories
            </h2>
            <p className="text-sm sm:text-base text-[#526356] max-w-2xl">
              12" Deep Buffet plate, 10" Shallow Biryani square, 10" Deep Tiffin plate & 5" Multipurpose Deep Bowl (2.2" depth) manufactured directly at Kota Narava, Visakhapatnam.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/sizes')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#D8CFC4] text-xs font-bold text-[#153826] hover:bg-[#EBE5D8] transition-colors"
            >
              <span>Plate Sizes & Bowl Guide</span>
            </button>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#153826] text-[#FAF8F5] text-xs font-bold hover:bg-[#2D6A4F] transition-colors group"
            >
              <span>View All Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#153826] text-[#FAF8F5] shadow-sm'
                  : 'bg-[#FAF8F5] text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EBE5D8] border border-[#D8CFC4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-[#153826]">
              Looking for custom molds, branding, or specific export packaging?
            </h3>
            <p className="text-xs text-[#6B4F35] mt-1">
              We engineer custom hydraulic die molds for high-volume distributor consignments.
            </p>
          </div>
          <button
            onClick={() => navigate('/bulk-enquiry')}
            className="px-5 py-2.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-xs font-semibold shrink-0 transition-colors"
          >
            Discuss Custom Requirements
          </button>
        </div>

      </div>
    </section>
  );
};

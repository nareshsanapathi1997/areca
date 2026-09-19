import React, { useState } from 'react';
import { productsData, productCategories } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { PlateSizesMatrix } from '../components/sizes/PlateSizesMatrix';
import { useRouter } from '../context/RouterContext';
import { Sparkles, Search, Layers, ShieldCheck, ArrowRight, Scale, ChevronRight } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { openBulkEnquiry } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sizes.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Complete Manufacturer Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Areca Leaf Plate Wholesale Catalog
          </h1>
          <p className="text-base text-[#526356] leading-relaxed">
            Factory wholesale price and bulk rate from Visakhapatnam (Vizag): 12 inch round buffet, 10 inch square, 10 inch round, and 5 inch areca leaf bowls. Enquire for cost per piece. MOQ 3,000.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#153826] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-[#8C6D46] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sizes, shapes..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#D8CFC4] text-xs text-[#153826] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
            <Layers className="w-10 h-10 text-[#8C6D46] mx-auto opacity-70" />
            <h3 className="text-lg font-bold text-[#153826]">No products matched your search</h3>
            <p className="text-xs text-[#526356]">
              Try searching for "round", "square", "10 inch", "bowl", or reset your category filter.
            </p>
            <button
              onClick={() => { setSelectedCategory("All Products"); setSearchQuery(""); }}
              className="px-4 py-2 rounded-xl bg-[#153826] text-[#FAF8F5] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Embedded Interactive Plate Sizes & Dimensions Matrix */}
        <div className="pt-8 border-t border-[#E8E0D2]">
          <PlateSizesMatrix />
        </div>

        {/* Custom Tooling & OEM Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EBE5D8] border border-[#D8CFC4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              OEM Private Label & Custom Tooling Dies
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#153826] font-heading">
              Need a Custom Mold or Exclusive Brand Packaging?
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] max-w-xl">
              We engineer custom hydraulic die molds for distributors ordering continuous container consignments. Customized pack counts, barcoding, and private-label inserts supported.
            </p>
          </div>

          <button
            onClick={() => openBulkEnquiry('Custom Mold / Private Label OEM')}
            className="px-6 py-3.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md"
          >
            Enquire About Custom Tooling
          </button>
        </div>

      </div>
    </div>
  );
};

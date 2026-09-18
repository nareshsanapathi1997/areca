import React from 'react';
import { useRouter } from '../context/RouterContext';
import { productsData } from '../data/products';
import { ProductDetailView } from '../components/products/ProductDetailView';
import { ProductCard } from '../components/products/ProductCard';
import { OriginalArecaPlateShowcase } from '../components/common/OriginalArecaPlateShowcase';
import { ArrowLeft, Layers } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { params, navigate } = useRouter();
  const slug = params.slug;

  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-24 bg-[#FAF8F5] text-center px-4">
        <div className="max-w-md mx-auto space-y-4">
          <Layers className="w-12 h-12 text-[#8C6D46] mx-auto opacity-60" />
          <h1 className="text-2xl font-bold text-[#153826]">Product Not Found</h1>
          <p className="text-sm text-[#526356]">
            The product specification you requested may have moved or been updated.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#153826] text-[#FAF8F5] text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Product Catalog</span>
          </button>
        </div>
      </div>
    );
  }

  // Related products from same category or featured
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, 4);

  return (
    <div>
      <ProductDetailView product={product} />

      {/* Anatomy and Original Grain Inspection */}
      <OriginalArecaPlateShowcase />

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#F4F1EA] border-t border-[#E8E0D2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                  Alternative Sizes & Categories
                </span>
                <h3 className="text-2xl font-bold text-[#153826] font-heading">
                  Related Areca Tableware
                </h3>
              </div>
              <button
                onClick={() => navigate('/products')}
                className="text-xs font-bold text-[#153826] hover:text-[#2D6A4F]"
              >
                View Full Catalog →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

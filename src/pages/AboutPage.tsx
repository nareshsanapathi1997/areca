import React from 'react';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../data/site';
import { companyStats, companyHighlights } from '../data/company';
import { BrandLogo } from '../components/common/BrandLogo';
import { 
  Leaf, 
  ShieldCheck, 
  Factory, 
  Users, 
  HeartHandshake, 
  Globe2, 
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openBulkEnquiry } = useRouter();

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Company Profile & Factory Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Rooted in Nature. Driven by Manufacturing Discipline.
          </h1>
          <p className="text-base sm:text-lg text-[#526356] leading-relaxed">
            {siteConfig.legalName} is a specialized manufacturer and global exporter of 100% natural, biodegradable Areca palm leaf tableware operating from the Malnad palm region of Karnataka, India.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-[#3E4E42] text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#153826] font-heading">
              Transforming Agricultural Byproducts into Luxury Tableware
            </h2>
            <p>
              In traditional areca palm cultivation, trees naturally drop their thick, fibrous leaf sheaths several times each year. For decades, these sheaths were either gathered for low-value local fuel or left to decompose in orchards.
            </p>
            <p>
              Our manufacturing unit was established to give these magnificent natural leaves a higher, noble purpose. By combining artisanal sorting with modern hydraulic heat press technology, we convert this 100% natural biological resource into rigid, elegant, and food-safe plates and bowls that replace single-use plastics globally.
            </p>
            <p>
              Every stage of our facility operates without synthetic additives, chemical bleaches, or petroleum waxes. We pride ourselves on clean potable spring washing, solar-assisted drying tunnels, and strict multi-point defect inspections.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#153826]">
              <span className="flex items-center gap-1.5 bg-[#EBE5D8] px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                Zero Tree Cutting
              </span>
              <span className="flex items-center gap-1.5 bg-[#EBE5D8] px-3 py-1.5 rounded-lg">
                <HeartHandshake className="w-4 h-4 text-[#2D6A4F]" />
                Fair Farmer Partnerships
              </span>
              <span className="flex items-center gap-1.5 bg-[#EBE5D8] px-3 py-1.5 rounded-lg">
                <Globe2 className="w-4 h-4 text-[#2D6A4F]" />
                Direct Container Freight
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D8CFC4] bg-[#EBE5D8] aspect-[4/3]">
              <img
                src="/images/areca-original/areca_palm_sheath_natural.jpg"
                alt="Areca palm plantation and naturally fallen sheath collection in India"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <BrandLogo variant="badge" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#153826]/90 backdrop-blur-md text-white text-xs">
                <div className="font-bold text-[#95D5B2] uppercase tracking-wider">Sustainable Agro-Ecosystem</div>
                <div className="mt-0.5">Empowering rural farming communities while reducing single-use plastic reliance globally.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#153826] font-heading">
              Our Operational Values
            </h2>
            <p className="text-sm text-[#526356]">
              Principles that govern our factory floor, customer relations, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <h3 className="text-lg font-bold text-[#153826] font-heading">
                Authentic Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
                We make zero exaggerated green claims. Our raw materials are genuinely compostable in residential soil within 60 to 90 days, returning organic nutrients to nature.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
                <Factory className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <h3 className="text-lg font-bold text-[#153826] font-heading">
                Manufacturing Precision
              </h3>
              <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
                By investing in calibrated hydraulic heating dies and moisture monitoring, we guarantee leak-proof, oil-resistant plates that commercial food service can trust without reservation.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F4F1EA] border border-[#E8E0D2] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBE5D8] text-[#153826] flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <h3 className="text-lg font-bold text-[#153826] font-heading">
                Export Dependability
              </h3>
              <p className="text-xs sm:text-sm text-[#526356] leading-relaxed">
                We design packaging specifically for ocean shipping moisture resistance, pallet stability, clear SKU barcoding, and dependable port delivery schedules.
              </p>
            </div>
          </div>
        </div>

        {/* Capacity Highlights */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#153826] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#95D5B2]">
              Wholesale & Institutional Partnerships
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Ready to Source Directly from the Manufacturer?
            </h3>
            <p className="text-xs sm:text-sm text-[#C2B5A0] max-w-xl">
              Connect with our international export department to request sample kits, explore container-load discounts, and schedule factory visits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => openBulkEnquiry()}
              className="px-6 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5D8] text-[#153826] font-bold text-sm shadow-md transition-colors"
            >
              Request a Bulk Quote
            </button>
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#40916C] text-[#FAF8F5] font-semibold text-sm transition-colors"
            >
              Explore Products
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

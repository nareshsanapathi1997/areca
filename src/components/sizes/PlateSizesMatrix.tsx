import React, { useState, useMemo } from 'react';
import { plateSizesData, shapeCategories, PlateSizeItem } from '../../data/plateSizes';
import { useRouter } from '../../context/RouterContext';
import { 
  Sparkles, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Package, 
  Truck, 
  Info, 
  Check, 
  ChevronRight,
  SlidersHorizontal,
  Flame,
  Droplet,
  Utensils,
  X,
  ZoomIn,
  Leaf,
  Camera
} from 'lucide-react';

export const PlateSizesMatrix: React.FC = () => {
  const { openBulkEnquiry } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Interactive Comparator state: Compare two plates side by side
  const [compareIdA, setCompareIdA] = useState<string>('round-10');
  const [compareIdB, setCompareIdB] = useState<string>('round-8');
  const [showExportSpecs, setShowExportSpecs] = useState<boolean>(false);
  const [inspectPlate, setInspectPlate] = useState<PlateSizeItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return plateSizesData;
    return plateSizesData.filter(item => item.shape === selectedCategory);
  }, [selectedCategory]);

  const plateA = plateSizesData.find(p => p.id === compareIdA) || plateSizesData[1];
  const plateB = plateSizesData.find(p => p.id === compareIdB) || plateSizesData[3];

  return (
    <section id="plate-sizes-guide" className="py-16 bg-[#FAF8F5] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
            <Layers className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Standard Factory Sizing & Shape Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#153826] font-heading tracking-tight">
            Areca Palm Leaf Plate Sizes & Shapes
          </h2>
          <p className="text-sm sm:text-base text-[#526356] leading-relaxed">
            From 6-inch dessert canapés to 12-inch banquet feast platters, explore authentic natural areca tableware dimensions, rim profiles, food capacities, and export packaging specifications.
          </p>
        </div>

        {/* Interactive Scale Comparator Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EA] border border-[#D8CFC4] shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E0D2] pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                <Scale className="w-4 h-4" />
                <span>Interactive Size Scale Comparator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#153826] font-heading">
                Compare Any Two Plate Sizes Side-by-Side
              </h3>
              <p className="text-xs text-[#526356]">
                Select two sizes below to inspect relative diameter scale, rim depth, portion capacity, and food pairing recommendations.
              </p>
            </div>

            {/* Quick selectors */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#6B4F35] uppercase block">Plate A:</label>
                <select
                  value={compareIdA}
                  onChange={(e) => setCompareIdA(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#D8CFC4] text-xs font-bold text-[#153826] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                >
                  {plateSizesData.map(p => (
                    <option key={p.id} value={p.id}>{p.sizeInches} - {p.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#6B4F35] uppercase block">Plate B:</label>
                <select
                  value={compareIdB}
                  onChange={(e) => setCompareIdB(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#D8CFC4] text-xs font-bold text-[#153826] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                >
                  {plateSizesData.map(p => (
                    <option key={p.id} value={p.id}>{p.sizeInches} - {p.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Visual Comparator Arena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Dining Stage with Scale Circles (7 cols) */}
            <div className="lg:col-span-7 bg-[#EBE5D8]/60 p-6 rounded-2xl border border-[#D8CFC4] flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden">
              
              {/* Scale reference watermark */}
              <div className="absolute top-3 left-3 text-[10px] uppercase font-bold text-[#6B4F35]/70 tracking-wider">
                True Proportion Scale View
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-around gap-8 w-full py-4">
                
                {/* Plate A Representation */}
                <div className="flex flex-col items-center space-y-3">
                  <div 
                    className="relative rounded-full border-4 border-[#153826] shadow-lg flex items-center justify-center transition-all duration-300 overflow-hidden bg-cover bg-center"
                    style={{
                      width: `${Math.max(120, Math.min(240, (plateA.diameterMm / 305) * 230))}px`,
                      height: `${Math.max(120, Math.min(240, (plateA.diameterMm / 305) * 230))}px`,
                      backgroundImage: `url(${plateA.image})`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]"></div>
                    <div className="relative text-center p-2 text-white drop-shadow-md">
                      <span className="text-xs uppercase font-extrabold tracking-wider block text-[#95D5B2]">
                        Plate A
                      </span>
                      <span className="text-base sm:text-lg font-black block leading-none mt-0.5">
                        {plateA.sizeInches}
                      </span>
                      <span className="text-[11px] opacity-90 block mt-0.5">
                        {plateA.sizeMetric}
                      </span>
                    </div>
                  </div>
                  <div className="text-center space-y-0.5">
                    <span className="text-xs font-bold text-[#153826] block">{plateA.name}</span>
                    <span className="text-[11px] text-[#6B4F35] block">Rim Depth: {plateA.depthMm}mm • {plateA.weightGrams}g</span>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#153826] text-[#FAF8F5] text-xs font-black flex items-center justify-center shadow-md">
                    VS
                  </div>
                  <div className="text-[11px] text-[#6B4F35] font-semibold mt-1">
                    {Math.abs(plateA.diameterMm - plateB.diameterMm)}mm diff
                  </div>
                </div>

                {/* Plate B Representation */}
                <div className="flex flex-col items-center space-y-3">
                  <div 
                    className="relative rounded-full border-4 border-[#2D6A4F] shadow-lg flex items-center justify-center transition-all duration-300 overflow-hidden bg-cover bg-center"
                    style={{
                      width: `${Math.max(120, Math.min(240, (plateB.diameterMm / 305) * 230))}px`,
                      height: `${Math.max(120, Math.min(240, (plateB.diameterMm / 305) * 230))}px`,
                      backgroundImage: `url(${plateB.image})`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]"></div>
                    <div className="relative text-center p-2 text-white drop-shadow-md">
                      <span className="text-xs uppercase font-extrabold tracking-wider block text-[#95D5B2]">
                        Plate B
                      </span>
                      <span className="text-base sm:text-lg font-black block leading-none mt-0.5">
                        {plateB.sizeInches}
                      </span>
                      <span className="text-[11px] opacity-90 block mt-0.5">
                        {plateB.sizeMetric}
                      </span>
                    </div>
                  </div>
                  <div className="text-center space-y-0.5">
                    <span className="text-xs font-bold text-[#153826] block">{plateB.name}</span>
                    <span className="text-[11px] text-[#6B4F35] block">Rim Depth: {plateB.depthMm}mm • {plateB.weightGrams}g</span>
                  </div>
                </div>

              </div>

              {/* Bottom Legend */}
              <div className="mt-4 pt-3 border-t border-[#D8CFC4]/70 w-full flex flex-wrap items-center justify-between text-xs text-[#526356] gap-2">
                <span>Both made from 100% thick naturally fallen areca leaf sheaths.</span>
                <span className="text-[#2D6A4F] font-semibold">Zero chemicals • Microwave safe 2 min</span>
              </div>
            </div>

            {/* Direct Comparison Metrics (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                
                {/* Plate A Quick specs */}
                <div className="p-3.5 rounded-xl bg-white border border-[#D8CFC4] space-y-2">
                  <div className="text-[11px] font-bold uppercase text-[#153826] flex items-center justify-between border-b border-[#E8E0D2] pb-1.5">
                    <span>{plateA.sizeInches}</span>
                    <span className="text-[#2D6A4F]">Plate A</span>
                  </div>
                  <div className="space-y-1 text-[#3E4E42]">
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Diameter:</span>
                      <strong>{plateA.sizeMetric}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Holding:</span>
                      <strong>{plateA.foodCapacity.split(' ')[0]}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Pack / Box:</span>
                      <strong>{plateA.packCount} / {plateA.cartonCount}</strong>
                    </div>
                  </div>
                  <div className="pt-1 text-[11px] text-[#526356] line-clamp-2">
                    {plateA.recommendedFoods}
                  </div>
                  <button
                    onClick={() => openBulkEnquiry(`Inquiry for ${plateA.name} (${plateA.sizeInches})`)}
                    className="w-full py-1.5 rounded-lg bg-[#153826] text-[#FAF8F5] text-[11px] font-bold hover:bg-[#2D6A4F] transition-colors"
                  >
                    Quote Plate A
                  </button>
                </div>

                {/* Plate B Quick specs */}
                <div className="p-3.5 rounded-xl bg-white border border-[#D8CFC4] space-y-2">
                  <div className="text-[11px] font-bold uppercase text-[#153826] flex items-center justify-between border-b border-[#E8E0D2] pb-1.5">
                    <span>{plateB.sizeInches}</span>
                    <span className="text-[#2D6A4F]">Plate B</span>
                  </div>
                  <div className="space-y-1 text-[#3E4E42]">
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Diameter:</span>
                      <strong>{plateB.sizeMetric}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Holding:</span>
                      <strong>{plateB.foodCapacity.split(' ')[0]}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Pack / Box:</span>
                      <strong>{plateB.packCount} / {plateB.cartonCount}</strong>
                    </div>
                  </div>
                  <div className="pt-1 text-[11px] text-[#526356] line-clamp-2">
                    {plateB.recommendedFoods}
                  </div>
                  <button
                    onClick={() => openBulkEnquiry(`Inquiry for ${plateB.name} (${plateB.sizeInches})`)}
                    className="w-full py-1.5 rounded-lg bg-[#2D6A4F] text-[#FAF8F5] text-[11px] font-bold hover:bg-[#1B4332] transition-colors"
                  >
                    Quote Plate B
                  </button>
                </div>

              </div>

              {/* Combo Sample Box CTA */}
              <div className="p-4 rounded-xl bg-[#EBE5D8] border border-[#D8CFC4] flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#153826] block">Need to test multiple sizes physically?</span>
                  <span className="text-[11px] text-[#526356] block">We ship mixed sample evaluation boxes to caterers & importers worldwide.</span>
                </div>
                <button
                  onClick={() => openBulkEnquiry(`Mixed Sizes Sample Box (Including ${plateA.sizeInches} and ${plateB.sizeInches})`)}
                  className="shrink-0 px-3.5 py-2 rounded-xl bg-[#153826] text-[#FAF8F5] text-xs font-bold hover:bg-[#2D6A4F] transition-colors shadow-sm"
                >
                  Request Sample Box
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E0D2] pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {shapeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#153826] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#F4F1EA] text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  selectedCategory === cat.id ? 'bg-[#2D6A4F] text-white' : 'bg-[#E8E0D2] text-[#6B4F35]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowExportSpecs(!showExportSpecs)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#D8CFC4] bg-[#FAF8F5] text-xs font-bold text-[#153826] hover:bg-[#EBE5D8] transition-colors self-start sm:self-auto"
          >
            <Truck className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>{showExportSpecs ? 'Hide Shipping Container Specs' : 'Show Container Packing Specs'}</span>
          </button>
        </div>

        {/* Container Loading Guide Banner (Toggleable) */}
        {showExportSpecs && (
          <div className="p-6 rounded-2xl bg-[#153826] text-[#FAF8F5] space-y-4 shadow-lg border border-[#2D6A4F]/40 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#95D5B2] font-bold">B2B Global Export Logistics</span>
                <h4 className="text-lg font-bold">Standard Container Load Capacities (FCL & LCL)</h4>
              </div>
              <span className="text-xs text-[#E8E0D2] bg-[#2D6A4F] px-3 py-1 rounded-full">
                Custom Palletizing & Fumigation Included
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <strong className="text-sm font-bold text-[#95D5B2] block">20-Foot FCL Container</strong>
                <p className="text-[#E8E0D2]/90 leading-relaxed">
                  Holds approximately <strong>450 to 520 master cartons</strong> (~90,000 to 110,000 assorted plates). Ideal for regional distributors and wholesale trials.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <strong className="text-sm font-bold text-[#95D5B2] block">40-Foot High Cube (HQ)</strong>
                <p className="text-[#E8E0D2]/90 leading-relaxed">
                  Holds approximately <strong>1,050 to 1,200 master cartons</strong> (~220,000 to 260,000 plates). Lowest freight cost per unit for global sea freight.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <strong className="text-sm font-bold text-[#95D5B2] block">LCL Palletized Air/Sea</strong>
                <p className="text-[#E8E0D2]/90 leading-relaxed">
                  Minimum Order Quantity starting at <strong>5,000 pieces per size</strong> or 25 master cartons palletized on heat-treated ISPM-15 wooden pallets.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Product Sizes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Natural Image Container */}
                <div 
                  className="relative aspect-[4/3] bg-[#EBE5D8] overflow-hidden cursor-pointer group/img"
                  onClick={() => setInspectPlate(item)}
                >
                  <img
                    src={item.image}
                    alt={`${item.name} - Genuine Areca Palm Leaf Plate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Size Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-[#153826]/90 text-[#FAF8F5] backdrop-blur-sm border border-white/10 shadow-sm">
                      {item.sizeInches}
                    </span>
                  </div>

                  {/* Authentic Photo Tag & Zoom Icon */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {item.isPopular && (
                      <div className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E76F51] text-white shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Best Seller</span>
                      </div>
                    )}
                    <button 
                      type="button"
                      aria-label="Inspect authentic plate photo"
                      className="p-1.5 rounded-full bg-white/90 hover:bg-white text-[#153826] shadow-sm backdrop-blur-sm transition-all"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Authentic Leaf Texture Indicator Badge */}
                  <div className="absolute bottom-11 left-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#153826]/80 text-[#95D5B2] text-[10px] font-medium backdrop-blur-sm">
                    <Leaf className="w-2.5 h-2.5" />
                    <span>Real Areca Leaf Photo</span>
                  </div>

                  {/* Metric Dimensions Pill */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF8F5]/95 text-[#153826] shadow-sm backdrop-blur-sm flex items-center justify-between">
                    <span>{item.sizeMetric}</span>
                    <span className="text-[#6B4F35] font-bold">{item.rimType.split(' ')[0]} {item.depthMm}mm</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">
                      {item.shape} Collection
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#153826] font-heading group-hover:text-[#2D6A4F] transition-colors leading-tight">
                      {item.name}
                    </h3>
                  </div>

                  {/* Key Physical Stats Bento */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="p-2 rounded-lg bg-[#F4F1EA] border border-[#E8E0D2]">
                      <span className="text-[#6B4F35] block">Rim Depth</span>
                      <strong className="text-[#153826] block">{item.depthMm} mm</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-[#F4F1EA] border border-[#E8E0D2]">
                      <span className="text-[#6B4F35] block">Plate Weight</span>
                      <strong className="text-[#153826] block">{item.weightGrams} grams</strong>
                    </div>
                  </div>

                  {/* Recommended Food Pairing */}
                  <div className="text-xs text-[#526356] space-y-1">
                    <span className="text-[11px] font-bold text-[#153826] flex items-center gap-1">
                      <Utensils className="w-3 h-3 text-[#2D6A4F]" />
                      Ideal Culinary Service:
                    </span>
                    <p className="line-clamp-2 leading-relaxed text-[11px]">
                      {item.recommendedFoods}
                    </p>
                  </div>

                  {/* Packaging Details Pill */}
                  <div className="p-2.5 rounded-xl bg-[#EBE5D8]/50 border border-[#D8CFC4]/70 text-[11px] text-[#3E4E42] space-y-0.5">
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Pack / Carton:</span>
                      <strong className="text-[#153826]">{item.packCount} pcs / {item.cartonCount} pcs</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B4F35]">Carton Gross Wt:</span>
                      <strong>{item.cartonWeightKg} kg</strong>
                    </div>
                  </div>

                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => openBulkEnquiry(`Price Inquiry for ${item.name} (${item.sizeInches})`)}
                  className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Wholesale Quote</span>
                </button>
                <button
                  onClick={() => openBulkEnquiry(`Sample Request for ${item.name} (${item.sizeInches})`)}
                  className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-[#EBE5D8] hover:bg-[#D8CFC4] text-[#153826] text-xs font-bold transition-colors"
                >
                  <span>Sample</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Comprehensive Size Reference Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8CFC4] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E0D2] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Quick Reference Matrix</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#153826] font-heading">
                All Available Sizes & Packaging Specifications
              </h3>
            </div>
            <button
              onClick={() => openBulkEnquiry("Complete Master Product Catalog & Price Matrix PDF")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2D6A4F] text-white text-xs font-bold hover:bg-[#1B4332] transition-colors"
            >
              <span>Download Master Price List (PDF)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F4F1EA] text-[#153826] uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-3 px-4 rounded-l-xl">Size & Shape</th>
                  <th className="py-3 px-4">Metric Dimensions</th>
                  <th className="py-3 px-4">Depth</th>
                  <th className="py-3 px-4">Unit Wt</th>
                  <th className="py-3 px-4">Pcs / Pack</th>
                  <th className="py-3 px-4">Pcs / Master Carton</th>
                  <th className="py-3 px-4">Carton Wt</th>
                  <th className="py-3 px-4 rounded-r-xl text-right">Direct Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E0D2] text-[#3E4E42]">
                {plateSizesData.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#153826]">
                      {p.name}
                    </td>
                    <td className="py-3.5 px-4 text-[#6B4F35] font-semibold">{p.sizeMetric}</td>
                    <td className="py-3.5 px-4">{p.depthMm} mm</td>
                    <td className="py-3.5 px-4">{p.weightGrams} g</td>
                    <td className="py-3.5 px-4">{p.packCount} pcs</td>
                    <td className="py-3.5 px-4 font-semibold text-[#153826]">{p.cartonCount} pcs</td>
                    <td className="py-3.5 px-4">{p.cartonWeightKg} kg</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => openBulkEnquiry(`Bulk Quote: ${p.name} (${p.sizeInches})`)}
                        className="text-xs font-bold text-[#2D6A4F] hover:text-[#153826] hover:underline"
                      >
                        Inquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Authentic Plate Photo & Grain Inspection Modal */}
      {inspectPlate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setInspectPlate(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#D8CFC4] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E8E0D2] flex items-center justify-between bg-[#F4F1EA]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#153826] text-[#95D5B2]">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#153826] font-heading">
                    {inspectPlate.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#526356]">
                    <span>{inspectPlate.sizeInches} ({inspectPlate.sizeMetric})</span>
                    <span>•</span>
                    <span className="text-[#2D6A4F] font-semibold">Authentic Palm Leaf Photo</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setInspectPlate(null)}
                className="p-2 rounded-xl bg-white hover:bg-[#EBE5D8] text-[#153826] transition-colors shadow-sm"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Zoomable Real Photo */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* Photo Display Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#E8E0D2] border border-[#D8CFC4] aspect-[4/3] sm:aspect-[16/10] shadow-inner">
                <img
                  src={inspectPlate.image}
                  alt={`High-resolution photo of ${inspectPlate.name}`}
                  className="w-full h-full object-contain sm:object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Natural Material Certification Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#153826]/90 backdrop-blur-md text-[#FAF8F5] border border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#95D5B2] shrink-0" />
                    <span className="text-xs font-medium">
                      Natural fallen palm sheath — zero synthetic varnish or plastic coating
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#2D6A4F] text-[#FAF8F5] font-bold shrink-0">
                    200°C Heat Pressed
                  </span>
                </div>
              </div>

              {/* Physical Specifications & Culinary Guide */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2]">
                  <span className="text-[#6B4F35] block text-[11px]">Diameter / Size</span>
                  <strong className="text-[#153826] text-sm block mt-0.5">{inspectPlate.sizeMetric}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2]">
                  <span className="text-[#6B4F35] block text-[11px]">Rim Depth</span>
                  <strong className="text-[#153826] text-sm block mt-0.5">{inspectPlate.depthMm} mm</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2]">
                  <span className="text-[#6B4F35] block text-[11px]">Unit Weight</span>
                  <strong className="text-[#153826] text-sm block mt-0.5">{inspectPlate.weightGrams} grams</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2]">
                  <span className="text-[#6B4F35] block text-[11px]">Carton Qty</span>
                  <strong className="text-[#153826] text-sm block mt-0.5">{inspectPlate.cartonCount} pcs</strong>
                </div>
              </div>

              {/* Culinary & Food Serving Guide */}
              <div className="p-4 rounded-xl bg-[#EBE5D8]/60 border border-[#D8CFC4] space-y-1.5 text-xs">
                <span className="font-bold text-[#153826] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#2D6A4F]" />
                  Recommended Culinary Applications
                </span>
                <p className="text-[#3E4E42] leading-relaxed">
                  {inspectPlate.recommendedFoods}
                </p>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-[#E8E0D2] bg-[#F4F1EA] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#526356] text-center sm:text-left">
                Export Grade • 5-ply Master Cartons • Custom Private Label Available
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const item = inspectPlate;
                    setInspectPlate(null);
                    openBulkEnquiry(`Sample Request for ${item.name} (${item.sizeInches})`);
                  }}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white border border-[#D8CFC4] text-xs font-bold text-[#153826] hover:bg-[#EBE5D8] transition-colors"
                >
                  Request Sample
                </button>
                <button
                  onClick={() => {
                    const item = inspectPlate;
                    setInspectPlate(null);
                    openBulkEnquiry(`Price Quote for ${item.name} (${item.sizeInches})`);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] text-xs font-bold transition-colors shadow-sm"
                >
                  Get Wholesale Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

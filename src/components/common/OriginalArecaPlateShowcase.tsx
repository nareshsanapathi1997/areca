import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Flame, 
  Droplet, 
  Leaf, 
  Maximize2,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface PlatePerspective {
  id: 'surface' | 'back' | 'edge' | 'dining';
  label: string;
  sublabel: string;
  image: string;
  caption: string;
  highlights: string[];
}

interface PlateModel {
  id: string;
  name: string;
  category: string;
  dimensions: string;
  depth: string;
  weightCapacity: string;
  description: string;
  perspectives: Record<'surface' | 'back' | 'edge' | 'dining', PlatePerspective>;
}

const plateModels: PlateModel[] = [
  {
    id: 'round-10',
    name: '10-Inch Round Dinner Plate',
    category: 'Dinnerware',
    dimensions: '10 inch (25.4 cm) diameter',
    depth: '22 mm deep rim',
    weightCapacity: 'Holds up to 1.2 kg hot food',
    description: 'The global benchmark for eco-catering. Molded from selected dense areca palm sheaths, offering authentic wood-grain texture and remarkable rigidity.',
    perspectives: {
      surface: {
        id: 'surface',
        label: 'Front Dining Face',
        sublabel: 'Smooth Heat-Treated Surface',
        image: '/images/areca-original/areca_plate_original_1.jpg',
        caption: 'Uncoated, natural smooth face exhibiting natural linear palm grain and warm beige variegation.',
        highlights: ['100% Chemical-Free & Unbleached', 'Natural Leaf Wax Barrier', 'Zero Plastic / PFAS Coating']
      },
      back: {
        id: 'back',
        label: 'Underside Sheath Texture',
        sublabel: 'Natural Structural Ribs',
        image: '/images/areca-original/areca_plate_original_2.jpg',
        caption: 'The reverse surface clearly displays the fibrous longitudinal veins of the naturally fallen palm sheath.',
        highlights: ['High Tensile Fiber Network', 'Natural Earth Tones & Grain', 'Tactile Slip-Resistant Base']
      },
      edge: {
        id: 'edge',
        label: 'Rim & Thickness Bevel',
        sublabel: '3mm Multi-Fiber Core',
        image: '/images/areca-original/areca_plate_round_yercaud1.jpg',
        caption: 'Hydraulically compressed border sealed under 200°C die tooling for burr-free, smooth dining comfort.',
        highlights: ['Precision Contour Die Trim', 'Snag-Free Rolled Edge', 'No Delamination Under Heat']
      },
      dining: {
        id: 'dining',
        label: 'Live Dining Application',
        sublabel: 'Plated Culinary Presentation',
        image: '/images/areca-original/areca_plates_stack_1.jpg',
        caption: 'Sturdy under piping hot curries, steaks, and gravies. Holds heat without softening or sweating.',
        highlights: ['Tested Leak-Proof 4+ Hours', 'Microwave Reheatable (2 Min)', 'No Food Odor Transfer']
      }
    }
  },
  {
    id: 'square-10',
    name: '10-Inch Contemporary Square Plate',
    category: 'Modern Banquet',
    dimensions: '10 x 10 inch (25 x 25 cm)',
    depth: '20 mm raised walls',
    weightCapacity: 'Holds up to 1.4 kg balanced',
    description: 'Clean architectural lines tailored for upscale banquets, modern corporate catering, and minimalist dining.',
    perspectives: {
      surface: {
        id: 'surface',
        label: 'Front Dining Face',
        sublabel: 'Crisp Geometric Bevel',
        image: '/images/areca-original/areca_plate_round_yercaud2.jpg',
        caption: 'Wide dining canvas with deep pressed corners that maintain rigidity even with saucy entrees.',
        highlights: ['Modern Square Styling', 'Zero Warping Under Heat', 'Natural Woody Look']
      },
      back: {
        id: 'back',
        label: 'Underside Sheath Texture',
        sublabel: 'Dense Cross-Fiber Base',
        image: '/images/areca-original/areca_plate_round_yercaud3.jpg',
        caption: 'Underside showcases authentic leaf texture created by natural tropical sunlight and rain.',
        highlights: ['Reinforced Corner Tonnage', 'Organic Texture Fingerprint', 'Completely Non-Toxic']
      },
      edge: {
        id: 'edge',
        label: 'Rim & Thickness Bevel',
        sublabel: 'High Precision Die Edge',
        image: '/images/areca-original/areca_plate_making_factory.jpg',
        caption: 'Sharp yet safe perimeter edges engineered to stack compactly during shipping.',
        highlights: ['Space-Saving Nesting Stack', 'Rigid Sidewalls', 'Smooth Hand Grip']
      },
      dining: {
        id: 'dining',
        label: 'Live Dining Application',
        sublabel: 'Modern Table Setting',
        image: '/images/areca-original/areca_plates_multi.jpg',
        caption: 'Pairs naturally with artisanal cutlery, linen, and organic farm-to-table menus.',
        highlights: ['Elevates Event Aesthetics', 'Oil & Grease Resistant', 'Commercial & Home Compostable']
      }
    }
  },
  {
    id: 'compartment-3',
    name: '3-Compartment Thali Feast Plate',
    category: 'Partitioned Tableware',
    dimensions: '11 inch (28 cm) diameter',
    depth: '25 mm deep partition walls',
    weightCapacity: 'Holds up to 1.5 kg mixed meal',
    description: 'Engineered specifically for combo meals, curries, and Indian Asian banquets with zero sauce cross-contamination.',
    perspectives: {
      surface: {
        id: 'surface',
        label: 'Front Dining Face',
        sublabel: 'Deep Divider Walls',
        image: '/images/areca-original/areca_plate_original_2.jpg',
        caption: 'Three distinct chambers formed in a single deep hydraulic press stroke from thick mature palm sheaths.',
        highlights: ['No Liquid Cross-Migration', '1 Large Main + 2 Side Chambers', 'Thick Reinforced Dividers']
      },
      back: {
        id: 'back',
        label: 'Underside Sheath Texture',
        sublabel: 'Contoured Multi-Cavity Base',
        image: '/images/areca-original/areca_plate_original_1.jpg',
        caption: 'Bottom rib structure ensures balance on buffet trays and lap dining without tipping.',
        highlights: ['Anti-Sag Central Spine', 'Deep Draw Molding', 'Zero Adhesive Between Sections']
      },
      edge: {
        id: 'edge',
        label: 'Rim & Thickness Bevel',
        sublabel: 'Rigid Perimeter Lip',
        image: '/images/areca-original/areca_plate_round_yercaud1.jpg',
        caption: 'Extra-wide rim lip allows guests to carry full multi-dish meals comfortably with one hand.',
        highlights: ['Heavy Duty 3.2mm Fiber', 'Comfort Grip Flange', 'No Bending Under Weight']
      },
      dining: {
        id: 'dining',
        label: 'Live Dining Application',
        sublabel: 'Full Course Meal Setup',
        image: '/images/areca-original/areca_plates_stack_1.jpg',
        caption: 'The preferred eco solution for wedding feasts, corporate cafeteria meals, and festival dining.',
        highlights: ['Eliminates Plastic Bowls', 'Hot Sambar & Dal Resistant', 'Zero Cross-Taste Flavor']
      }
    }
  },
  {
    id: 'bowl-deep-6',
    name: '6-Inch Deep Soup & Acai Bowl',
    category: 'Deep Bowls',
    dimensions: '6 inch (15 cm) diameter, 350ml capacity',
    depth: '45 mm deep basin',
    weightCapacity: 'Full 350ml boiling broth / cold dessert',
    description: 'Deep-draw hydraulic pressing creates a seamless, leak-proof basin that insulates both hot soups and icy desserts.',
    perspectives: {
      surface: {
        id: 'surface',
        label: 'Front Dining Face',
        sublabel: 'Seamless Basin Interior',
        image: '/images/areca-original/areca_plate_round_yercaud3.jpg',
        caption: 'Natural parabolic bowl interior holds soups, ramen, salad, and acai bowls with organic grace.',
        highlights: ['Natural Thermal Insulation', 'Comfortable to Hold with Hot Soup', 'Zero Synthetic Lacquer']
      },
      back: {
        id: 'back',
        label: 'Underside Sheath Texture',
        sublabel: 'Stable Flat Base',
        image: '/images/areca-original/areca_plates_multi.jpg',
        caption: 'Precision flat bottom prevents rolling or wobbling on dining tables.',
        highlights: ['Self-Standing Sturdy Base', 'Deep Hydraulic Stretch', '100% Single Sheath Piece']
      },
      edge: {
        id: 'edge',
        label: 'Rim & Thickness Bevel',
        sublabel: 'Curved Drinking Edge',
        image: '/images/areca-original/areca_leaf_machine_press.jpg',
        caption: 'Smooth rounded border allows comfortable direct sipping of broths and soups.',
        highlights: ['Mouth-Safe Smooth Rim', 'Pressure Tested Integrity', 'No Sharp Fibers']
      },
      dining: {
        id: 'dining',
        label: 'Live Dining Application',
        sublabel: 'Fresh Gourmet Presentation',
        image: '/images/areca-original/areca_plate_round_yercaud2.jpg',
        caption: 'Enhances organic cafes, poke bowl bars, wedding soup courses, and eco food stalls.',
        highlights: ['Freezer Safe (-20°C)', 'Boiling Hot Liquid Safe (100°C)', 'Home Compostable in 60-90 Days']
      }
    }
  }
];

export const OriginalArecaPlateShowcase: React.FC = () => {
  const { openBulkEnquiry } = useRouter();
  const [selectedPlateId, setSelectedPlateId] = useState<string>('round-10');
  const [selectedPerspective, setSelectedPerspective] = useState<'surface' | 'back' | 'edge' | 'dining'>('surface');
  const [showHallmarks, setShowHallmarks] = useState<boolean>(true);

  const activePlate = plateModels.find(p => p.id === selectedPlateId) || plateModels[0];
  const activeView = activePlate.perspectives[selectedPerspective];

  return (
    <section id="original-leaf-inspector" className="py-20 bg-[#FAF8F5] border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E0D2] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-bold uppercase tracking-wider text-[#153826]">
              <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Authentic Product Imagery & Anatomy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading tracking-tight">
              Original Areca Palm Leaf Plates
            </h2>
            <p className="text-sm sm:text-base text-[#526356] leading-relaxed">
              Examine the original natural grain, authentic fiber striations, hydraulic heat-pressed rim, and real dining presentation of our 100% naturally fallen palm leaf tableware.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openBulkEnquiry(`Sample Box Request - ${activePlate.name}`)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2D6A4F] text-[#FAF8F5] text-xs font-bold hover:bg-[#1B4332] transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#95D5B2]" />
              <span>Request Physical Sample Box</span>
            </button>
            <button
              onClick={() => openBulkEnquiry(`Wholesale Order - ${activePlate.name}`)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8CFC4] text-[#153826] text-xs font-bold hover:bg-[#EBE5D8] transition-colors"
            >
              <span>Instant Wholesale Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Plate Model Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-[#EBE5D8]/70 border border-[#D8CFC4] max-w-fit">
          {plateModels.map((plate) => {
            const isActive = plate.id === selectedPlateId;
            return (
              <button
                key={plate.id}
                onClick={() => setSelectedPlateId(plate.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-[#153826] text-[#FAF8F5] shadow-md'
                    : 'text-[#3E4E42] hover:bg-[#FAF8F5]/80 hover:text-[#153826]'
                }`}
              >
                {plate.name}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Perspective Image & Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Visual Display Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-[#E8E0D2] border border-[#D8CFC4] shadow-xl aspect-[4/3]">
              <img
                src={activeView.image}
                alt={`${activePlate.name} - ${activeView.label}`}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />

              {/* Angle / Perspective Overlay Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#153826]/90 backdrop-blur-md text-[#FAF8F5] text-xs font-semibold border border-white/10 shadow-md">
                <Eye className="w-3.5 h-3.5 text-[#95D5B2]" />
                <span>Perspective: {activeView.label}</span>
              </div>

              {/* Natural Origin Watermark */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-[#FAF8F5]/90 backdrop-blur-md text-[#153826] text-[11px] font-bold border border-[#D8CFC4] shadow-sm">
                100% Fallen Sheath
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#153826]/90 backdrop-blur-md text-[#FAF8F5] border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-xs uppercase font-bold text-[#95D5B2] tracking-wider">
                      {activeView.sublabel}
                    </div>
                    <p className="text-xs text-[#FAF8F5]/90 mt-0.5 leading-snug">
                      {activeView.caption}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#2D6A4F] text-[#95D5B2]">
                      High Resolution
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Angle / Perspective Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['surface', 'back', 'edge', 'dining'] as const).map((viewKey) => {
                const view = activePlate.perspectives[viewKey];
                const isSelected = selectedPerspective === viewKey;
                return (
                  <button
                    key={viewKey}
                    onClick={() => setSelectedPerspective(viewKey)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#153826] text-[#FAF8F5] border-[#153826] shadow-md ring-2 ring-[#2D6A4F]/40'
                        : 'bg-[#FAF8F5] text-[#3E4E42] border-[#D8CFC4] hover:bg-[#EBE5D8]/70 hover:text-[#153826]'
                    }`}
                  >
                    <div className="text-xs font-bold line-clamp-1">{view.label}</div>
                    <div className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-[#95D5B2]' : 'text-[#6B4F35]'}`}>
                      {view.sublabel}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Perspective Highlights Pill List */}
            <div className="flex flex-wrap gap-2 pt-1">
              {activeView.highlights.map((hl, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5D8] text-xs font-semibold text-[#153826]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Technical Specs & Authentic Leaf Hallmarks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Plate Profile Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#D8CFC4] shadow-sm space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                  Selected Product Profile
                </span>
                <h3 className="text-2xl font-extrabold text-[#153826] font-heading">
                  {activePlate.name}
                </h3>
                <p className="text-xs text-[#526356] leading-relaxed pt-1">
                  {activePlate.description}
                </p>
              </div>

              {/* Physical Parameters Bento */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2]">
                  <span className="text-[11px] uppercase font-bold text-[#6B4F35] block">Dimensions</span>
                  <span className="text-xs sm:text-sm font-bold text-[#153826] mt-0.5 block">{activePlate.dimensions}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2]">
                  <span className="text-[11px] uppercase font-bold text-[#6B4F35] block">Rim Depth</span>
                  <span className="text-xs sm:text-sm font-bold text-[#153826] mt-0.5 block">{activePlate.depth}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2] col-span-2">
                  <span className="text-[11px] uppercase font-bold text-[#6B4F35] block">Strength & Capacity</span>
                  <span className="text-xs sm:text-sm font-bold text-[#153826] mt-0.5 block">{activePlate.weightCapacity}</span>
                </div>
              </div>

              {/* Real Areca Leaf Hallmarks Guide */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153826]">
                    <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>How to Identify Genuine Areca Plates</span>
                  </div>
                  <button 
                    onClick={() => setShowHallmarks(!showHallmarks)}
                    className="text-xs text-[#2D6A4F] hover:underline font-semibold"
                  >
                    {showHallmarks ? 'Collapse' : 'Show Details'}
                  </button>
                </div>

                {showHallmarks && (
                  <div className="space-y-2.5 text-xs text-[#3E4E42]">
                    <div className="p-3 rounded-xl bg-[#EBE5D8]/50 border border-[#D8CFC4]/70 space-y-1">
                      <div className="font-bold text-[#153826] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]"></span>
                        1. Unique Color Variegation & Earth Tones
                      </div>
                      <p className="text-[11px] text-[#526356] pl-3">
                        Unlike bleached paper or synthetic plastic, every areca plate has subtle natural color variations from creamy pearl to rustic light mahogany.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EBE5D8]/50 border border-[#D8CFC4]/70 space-y-1">
                      <div className="font-bold text-[#153826] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]"></span>
                        2. Parallel Longitudinal Grain Fibers
                      </div>
                      <p className="text-[11px] text-[#526356] pl-3">
                        Original areca palm sheaths possess dense natural vertical fibers that give each plate exceptional bending stiffness without chemical glues.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EBE5D8]/50 border border-[#D8CFC4]/70 space-y-1">
                      <div className="font-bold text-[#153826] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]"></span>
                        3. Thermal Press Finish (No Chemical Lacquer)
                      </div>
                      <p className="text-[11px] text-[#526356] pl-3">
                        The smooth surface is produced exclusively by 200°C hydraulic thermal dies that activate the leaf's natural plant wax, creating an organic moisture barrier.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Actions */}
              <div className="pt-2 border-t border-[#E8E0D2] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openBulkEnquiry(`Sample Box Evaluation - ${activePlate.name}`)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#153826] text-[#FAF8F5] text-xs font-bold hover:bg-[#1B4332] transition-colors text-center shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#95D5B2]" />
                  <span>Order Sample Box</span>
                </button>
                <button
                  onClick={() => openBulkEnquiry()}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#EBE5D8] text-[#153826] text-xs font-bold hover:bg-[#D8CFC4] transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Request Full Price List</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

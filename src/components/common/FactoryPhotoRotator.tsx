import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCw, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  RefreshCw, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Play, 
  Pause,
  FlipHorizontal
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface FactoryPhotoRotatorProps {
  className?: string;
}

const factoryPhotos = [
  {
    id: 'operator-press',
    title: 'Factory Pressing & Finished Plate Inspection',
    subtitle: 'HANUMA ENTERPRISES workshop operator holding freshly pressed areca plate at hydraulic press',
    src: '/images/areca-original/areca_plate_original_1.jpg',
    badge: 'Kota Narava Factory Unit',
    highlight: 'Real Factory Verification'
  },
  {
    id: 'buffet-plate-detail',
    title: '12" Round Deep Buffet Plate Texture',
    subtitle: 'Macro view showing natural heat-pressed palm leaf grain striations and smooth rim flange',
    src: '/images/areca-original/areca_plate_original_2.jpg',
    badge: '100% Fallen Palm Sheath',
    highlight: 'Chemical-Free Finish'
  },
  {
    id: 'stacked-bulk',
    title: 'Finished Plates Stack & Calibrated Thickness',
    subtitle: 'Rigid uniform stack demonstrating consistent 1.6mm gauge and non-stick release',
    src: '/images/areca-original/areca_plates_stack_1.jpg',
    badge: '1 Lakh Plates / Month',
    highlight: 'Wholesale Ready'
  },
  {
    id: 'multi-shape',
    title: '4 Core Manufactured Product Lineup',
    subtitle: '12" Round Deep, 10" Shallow Square, 10" Round Deep & 5" Round Deep Bowl',
    src: '/images/areca-original/areca_plates_multi.jpg',
    badge: 'MOQ: 3,000 Pcs',
    highlight: '4 Core Formats'
  }
];

export const FactoryPhotoRotator: React.FC<FactoryPhotoRotatorProps> = ({ className = '' }) => {
  const { openBulkEnquiry } = useRouter();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [rotationDegree, setRotationDegree] = useState(0); // 0, 90, 180, 270...
  const [isFlipped, setIsFlipped] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activePhoto = factoryPhotos[selectedPhotoIndex];

  // Rotate functions
  const rotateRight = () => {
    setRotationDegree(prev => prev + 90);
  };

  const rotateLeft = () => {
    setRotationDegree(prev => prev - 90);
  };

  const flipH = () => {
    setIsFlipped(prev => !prev);
  };

  const resetTransform = () => {
    setRotationDegree(0);
    setIsFlipped(false);
    setZoomScale(1);
    setIsAutoSpinning(false);
  };

  const handleZoomIn = () => {
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  };

  return (
    <div className={`bg-white rounded-3xl border border-[#E8E0D2] shadow-xl overflow-hidden ${className}`}>
      
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-[#153826] via-[#1E4330] to-[#153826] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E0A96D]/20 text-[#E0A96D] text-[11px] font-bold tracking-wide uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Verified Factory Proof</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#C2B5A0]">
              <MapPin className="w-3 h-3 text-[#52B788]" />
              <span>Kota Narava, Visakhapatnam</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#FAF8F5]">
            HANUMA ENTERPRISES — Real Factory Photo & 360° Inspection
          </h3>
          <p className="text-xs sm:text-sm text-[#C2B5A0] mt-0.5">
            Examine our actual production facility, hydraulic thermal press, and finished areca tableware. Use the interactive controls to rotate and zoom.
          </p>
        </div>

        {/* Capacity badge */}
        <div className="shrink-0 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-2xl text-right">
          <div className="text-[10px] uppercase font-bold text-[#E0A96D]">Production Capacity</div>
          <div className="text-base font-extrabold text-white">1 Lakh Plates / Month</div>
          <div className="text-[10px] text-[#A3B899]">MOQ: 3,000 Pcs per Order</div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left: Viewport with Rotatable Canvas */}
        <div className="lg:col-span-8 bg-[#1B2A20] relative flex items-center justify-center p-6 sm:p-10 min-h-[420px] sm:min-h-[500px] overflow-hidden select-none">
          
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Floating HUD Badges */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#52B788]" />
              <span>{activePhoto.badge}</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#E0A96D]/90 text-[#153826] text-[11px] font-extrabold shadow">
              Angle: {((rotationDegree % 360) + 360) % 360}°
            </span>
          </div>

          {/* Rotatable & Scalable Image Container */}
          <div className="relative z-10 max-w-full max-h-[460px] flex items-center justify-center">
            <motion.div
              animate={{
                rotate: isAutoSpinning ? [rotationDegree, rotationDegree + 360] : rotationDegree,
                scale: zoomScale,
                scaleX: isFlipped ? -1 : 1
              }}
              transition={
                isAutoSpinning
                  ? { repeat: Infinity, duration: 12, ease: "linear" }
                  : { type: "spring", stiffness: 220, damping: 24 }
              }
              className="relative shadow-2xl rounded-2xl overflow-hidden border-2 border-white/20 bg-black/40"
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[380px] sm:max-h-[440px] w-auto object-contain select-none pointer-events-none"
              />
            </motion.div>
          </div>

          {/* Floating Controls Overlay at Bottom of Viewport */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15">
            <div className="flex items-center gap-1.5">
              <button
                onClick={rotateLeft}
                title="Rotate 90° Counter-Clockwise"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              >
                <RotateCcw className="w-4 h-4 text-[#95D5B2]" />
                <span className="hidden sm:inline">-90°</span>
              </button>
              
              <button
                onClick={rotateRight}
                title="Rotate 90° Clockwise"
                className="p-2 rounded-xl bg-[#2D6A4F] hover:bg-[#3E8E68] text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-md"
              >
                <RotateCw className="w-4 h-4 text-[#E0A96D]" />
                <span>Rotate 90°</span>
              </button>

              <button
                onClick={flipH}
                title="Flip Horizontal"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1"
              >
                <FlipHorizontal className="w-4 h-4" />
                <span className="hidden md:inline">Flip</span>
              </button>

              <button
                onClick={() => setIsAutoSpinning(!isAutoSpinning)}
                title={isAutoSpinning ? "Pause Auto Spin" : "Auto Continuous Rotate"}
                className={`p-2 rounded-xl transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1.5 ${
                  isAutoSpinning ? 'bg-[#E0A96D] text-[#153826] font-bold' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {isAutoSpinning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#52B788]" />}
                <span className="hidden sm:inline">{isAutoSpinning ? 'Pause Spin' : 'Auto 360°'}</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleZoomOut}
                disabled={zoomScale <= 0.75}
                title="Zoom Out"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white transition-colors cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#FAF8F5] px-1">{Math.round(zoomScale * 100)}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoomScale >= 2.5}
                title="Zoom In"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={resetTransform}
                title="Reset Image Orientation & Zoom"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1 text-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Photo Gallery & Factory Technical Verification */}
        <div className="lg:col-span-4 p-6 bg-[#FAF8F5] flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B4F35] block mb-2 flex items-center justify-between">
                <span>Select Factory Photograph</span>
                <span className="text-[10px] text-[#2D6A4F] font-semibold">{factoryPhotos.length} Verified Photos</span>
              </span>

              {/* Photo Selector Cards */}
              <div className="space-y-2">
                {factoryPhotos.map((photo, index) => {
                  const isSelected = selectedPhotoIndex === index;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => {
                        setSelectedPhotoIndex(index);
                        setRotationDegree(0);
                        setIsFlipped(false);
                      }}
                      className={`w-full p-2.5 rounded-2xl text-left transition-all border flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#2D6A4F] shadow-md ring-2 ring-[#2D6A4F]/20'
                          : 'bg-white/60 border-[#E8E0D2] hover:bg-white'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-black/10 shrink-0 border border-[#E8E0D2]">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#153826] truncate">{photo.title}</span>
                        </div>
                        <p className="text-[11px] text-[#6E7D72] line-clamp-1 mt-0.5">{photo.subtitle}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-extrabold bg-[#2D6A4F]/10 text-[#2D6A4F]">
                          {photo.highlight}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Factory Details Box */}
            <div className="bg-white p-4 rounded-2xl border border-[#E8E0D2] space-y-2.5 text-xs text-[#4A5D4E]">
              <div className="flex items-center gap-2 font-bold text-[#153826] text-sm font-heading">
                <Building2 className="w-4 h-4 text-[#2D6A4F]" />
                <span>HANUMA ENTERPRISES</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed">
                <p><strong>Factory Address:</strong> 2-88/1, kota narava, Visakhapatnam, Andhra Pradesh - 530027, India</p>
                <p><strong>Email:</strong> hanumaenterprises234@gmail.com</p>
                <p><strong>Monthly Output:</strong> 1 Lakh Plates (Heavy-Duty Hydraulic Dies)</p>
                <p><strong>Minimum Order:</strong> 3,000 pieces per order</p>
              </div>
              <div className="pt-2 border-t border-[#E8E0D2] flex items-center gap-1.5 text-[11px] text-[#2D6A4F] font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#2D6A4F]" />
                <span>100% Verified Real Workshop Manufacturing</span>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div>
            <button
              onClick={() => openBulkEnquiry()}
              className="w-full py-3 px-4 rounded-2xl bg-[#153826] hover:bg-[#1E4330] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E0A96D]" />
              <span>Inquire for 3,000+ MOQ Bulk Order</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

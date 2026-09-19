import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { manufacturingSteps } from '../../data/process';
import { useRouter } from '../../context/RouterContext';
import { 
  Trees, 
  Droplets, 
  Sun, 
  CheckCheck, 
  Flame, 
  Scissors, 
  SearchCheck, 
  Package, 
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const processIconMap: Record<string, React.ElementType> = {
  Trees,
  Droplets,
  Sun,
  CheckCheck,
  Flame,
  Scissors,
  SearchCheck,
  Package
};

export const ProcessTimeline: React.FC = () => {
  const { navigate } = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const currentStepData = manufacturingSteps[activeStep];
  const StepIcon = processIconMap[currentStepData.iconName] || Flame;
  const progressPercent = ((activeStep + 1) / manufacturingSteps.length) * 100;

  return (
    <section className="py-10 bg-[#FAF8F5] border-b border-[#E8E0D2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] inline-block"
          >
            From Palm Belt to Export Container
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#153826] font-heading"
          >
            Our 8-Stage Manufacturing Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#526356] leading-relaxed"
          >
            Every plate is naturally shaped under extreme heat and pressure without synthetic binders or toxic chemicals. Explore our rigorous quality workflow.
          </motion.p>
        </div>

        {/* Animated Progress Track */}
        <div className="max-w-4xl mx-auto mb-6 px-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#6B4F35] mb-2">
            <span>Stage {activeStep + 1} of {manufacturingSteps.length}: {currentStepData.title}</span>
            <span className="font-mono text-[#2D6A4F]">{Math.round(progressPercent)}% Workflow Completed</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#E5DFD0] overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#E0A96D] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Interactive Step Navigator Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {manufacturingSteps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#153826] text-[#FAF8F5] shadow-lg scale-105 ring-2 ring-[#E0A96D]/50'
                    : 'bg-[#F4F1EA] text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8] hover:border-[#D8CFC4]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isCurrent ? 'bg-[#2D6A4F] text-white animate-pulse' : 'bg-[#E0D8C7] text-[#153826]'
                }`}>
                  {step.step}
                </span>
                <span>{step.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Active Step Showcase with Smooth AnimatePresence */}
        <div className="rounded-3xl bg-[#F4F1EA] border border-[#D8CFC4] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Step Visual with Hover Zoom */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EBE5D8] shadow-md group">
                  <img
                    src={currentStepData.image}
                    alt={currentStepData.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-lg text-xs font-extrabold uppercase bg-[#153826] text-[#FAF8F5] shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#52B788] animate-ping" />
                      Stage {currentStepData.step} of {manufacturingSteps.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Explanation */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#153826] text-[#95D5B2] flex items-center justify-center shadow-md shrink-0">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                      Manufacturing Phase {currentStepData.step}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#153826] font-heading">
                      {currentStepData.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-[#3E4E42] leading-relaxed">
                  {currentStepData.detailedProcess}
                </p>

                {/* Hygiene Protocol Box */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2] flex items-start gap-3 text-xs text-[#3E4E42] shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#153826] block font-semibold mb-0.5">Quality & Hygiene Standard:</strong>
                    <span>{currentStepData.hygieneProtocol}</span>
                  </div>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => prev - 1)}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#FAF8F5] border border-[#D8CFC4] text-xs font-semibold text-[#153826] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EBE5D8] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                    <button
                      disabled={activeStep === manufacturingSteps.length - 1}
                      onClick={() => setActiveStep(prev => prev + 1)}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#153826] text-xs font-semibold text-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#2D6A4F] transition-colors shadow cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => navigate('/manufacturing')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D6A4F] hover:text-[#153826] transition-colors group cursor-pointer"
                  >
                    <span>Detailed Factory Walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};


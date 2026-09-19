import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { ProductCategoriesSection } from '../components/home/ProductCategoriesSection';
import { PlateSizesMatrix } from '../components/sizes/PlateSizesMatrix';
import { OriginalArecaPlateShowcase } from '../components/common/OriginalArecaPlateShowcase';
import { InteractivePlateInspector } from '../components/home/InteractivePlateInspector';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { SustainabilitySection } from '../components/home/SustainabilitySection';
import { ApplicationsSection } from '../components/home/ApplicationsSection';
import { CapacityStats } from '../components/home/CapacityStats';
import { BulkOrderCta } from '../components/home/BulkOrderCta';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page-container">
      <HeroSection />
      <CompanyIntro />
      <ProductCategoriesSection />
      <PlateSizesMatrix />
      <OriginalArecaPlateShowcase />
      <InteractivePlateInspector />
      <WhyChooseUs />
      <ProcessTimeline />
      <SustainabilitySection />
      <ApplicationsSection />
      <CapacityStats />

      {/* On-page bulk enquiry conversion section */}
      <section className="py-10 bg-[#F4F1EA] border-b border-[#E8E0D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
              Direct Factory Communication
            </span>
            <h2 className="text-3xl font-extrabold text-[#153826] font-heading">
              Submit Your Bulk Procurement Enquiry
            </h2>
            <p className="text-sm text-[#526356]">
              Share sizes, volumes, and destination. We reply with factory wholesale rate — we do not publish a fixed MRP.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <BulkOrderCta />
    </div>
  );
};


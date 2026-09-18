import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { BulkEnquiryModal } from './components/enquiry/BulkEnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { PlateSizesPage } from './pages/PlateSizesPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { GalleryPage } from './pages/GalleryPage';
import { BulkEnquiryPage } from './pages/BulkEnquiryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ThreeDStudioPage } from './pages/ThreeDStudioPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/3d-studio':
      case '/3d':
        return <ThreeDStudioPage />;
      case '/about':
        return <AboutPage />;
      case '/products':
        return <ProductsPage />;
      case '/products/:slug':
        return <ProductDetailPage />;
      case '/sizes':
      case '/plate-sizes':
        return <PlateSizesPage />;
      case '/manufacturing':
        return <ManufacturingPage />;
      case '/sustainability':
        return <SustainabilityPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/bulk-enquiry':
        return <BulkEnquiryPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        // Handle direct /products/... fallbacks
        if (currentPath.startsWith('/products/')) {
          return <ProductDetailPage />;
        }
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#153826] font-sans antialiased selection:bg-[#2D6A4F] selection:text-white">
      <Header />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BulkEnquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

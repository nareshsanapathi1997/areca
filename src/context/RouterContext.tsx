import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AppRoute = 
  | { path: '/' }
  | { path: '/about' }
  | { path: '/products' }
  | { path: '/products/:slug'; slug: string }
  | { path: '/sizes' }
  | { path: '/manufacturing' }
  | { path: '/sustainability' }
  | { path: '/gallery' }
  | { path: '/bulk-enquiry'; productSlug?: string }
  | { path: '/contact' }
  | { path: '/privacy-policy' }
  | { path: '/terms' };

interface RouterContextType {
  currentPath: string;
  params: Record<string, string>;
  navigate: (to: string) => void;
  openBulkEnquiry: (productName?: string) => void;
  closeBulkModal: () => void;
  isBulkModalOpen: boolean;
  bulkModalProduct?: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string): { path: string; params: Record<string, string> } {
  // Strip query string if any
  const [pathOnly] = pathname.split('?');
  const clean = pathOnly.replace(/\/+$/, '') || '/';
  
  // Match /products/:slug
  const productMatch = clean.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    return {
      path: '/products/:slug',
      params: { slug: productMatch[1] }
    };
  }

  return {
    path: clean,
    params: {}
  };
}

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locationState, setLocationState] = useState(() => {
    if (typeof window !== 'undefined') {
      return parsePath(window.location.pathname);
    }
    return { path: '/', params: {} };
  });

  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkModalProduct, setBulkModalProduct] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setLocationState(parsePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', to);
      setLocationState(parsePath(to));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBulkEnquiry = (productName?: string) => {
    setBulkModalProduct(productName);
    setIsBulkModalOpen(true);
  };

  const closeBulkModal = () => {
    setIsBulkModalOpen(false);
    setBulkModalProduct(undefined);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath: locationState.path,
        params: locationState.params,
        navigate,
        openBulkEnquiry,
        closeBulkModal,
        isBulkModalOpen,
        bulkModalProduct
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Round Plates' | 'Square Plates' | 'Compartment Plates' | 'Areca Bowls' | 'Areca Trays' | 'Snack & Specialty';
  sizes: string[];
  shape: string;
  material: string;
  description: string;
  shortDescription: string;
  features: string[];
  applications: string[];
  packaging: {
    piecesPerPack: string;
    packsPerCarton: string;
    cartonDimensions?: string;
  };
  moq: string;
  images: string[];
  isFeatured?: boolean;
}

export interface EnquiryInput {
  fullName: string;
  companyName?: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  product: string;
  requiredQuantity: string;
  message: string;
}

export interface EnquiryRecord extends EnquiryInput {
  id: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'quoted' | 'dispatched' | 'closed';
  notes?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  exportEmail: string;
  address: {
    factoryAddress: string;
    registeredOffice: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  website: string;
  businessHours: string;
  socialLinks: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface CompanyStats {
  productionCapacity: string;
  productVarieties: string;
  manufacturingExperience: string;
  countriesServed: string;
  bulkOrdersSupplied: string;
  factoryAreaSqFt: string;
  isPlaceholderNote?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  shortDescription: string;
  detailedProcess: string;
  hygieneProtocol: string;
  iconName: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Factory' | 'Manufacturing' | 'Products' | 'Packaging' | 'Team' | 'Dispatch';
  image: string;
  caption: string;
}

export interface WhyChooseUsCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

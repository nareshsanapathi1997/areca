import { CompanyStats, WhyChooseUsCard } from '../types';

/**
 * Company capacity and statistics configuration.
 * Configurable placeholders allow easy replacement with verified client business metrics.
 */
export const companyStats: CompanyStats = {
  productionCapacity: "1 Lakh Plates / Month",
  productVarieties: "4 Focused Core Formats",
  manufacturingExperience: "Direct Factory Production",
  countriesServed: "Pan-India & Global Supply",
  bulkOrdersSupplied: "Direct Manufacturer Supply",
  factoryAreaSqFt: "Kota Narava Facility, Visakhapatnam",
  isPlaceholderNote: "Verified manufacturing figures for Hanuma Enterprises, Visakhapatnam (AP)."
};

export const businessHighlights = {
  capacityMonthly: "1 Lakh Plates",
  moq: "3,000 Plates per Order",
  factoryLocation: "2-88/1, Kota Narava, Visakhapatnam, Andhra Pradesh - 530027, India",
  email: "hanumaenterprises234@gmail.com",
  phone: "+91 93904 31042",
  coreProductsCount: 4
};

export const companyHighlights = [
  {
    title: "100% Naturally Fallen Leaves",
    desc: "Zero trees felled or harmed. We collect only naturally shed areca palm sheaths from local sustainable plantation farmers."
  },
  {
    title: "Potable Wash & Heat Sanitization",
    desc: "Washed in clean factory water, then formed and sterilised under 180°C–200°C hydraulic heat. No synthetic glues, plastics, wax coatings, or bleach."
  },
  {
    title: "In-Line Moisture & Visual QA",
    desc: "Each batch is checked for moisture (target under 10%), warping, pinholes, and rim finish before packing. Independent lab reports are shared with buyers on request."
  },
  {
    title: "Export-Grade Moisture Barrier Packing",
    desc: "Desiccant pouches, food-grade shrink-wrap, and heavy 5-ply corrugated master cartons tailored for sea and air freight."
  }
];

export const whyChooseUsData: WhyChooseUsCard[] = [
  {
    id: "natural-material",
    title: "Natural Material",
    description: "Manufactured strictly from naturally fallen areca palm leaves. Completely organic, biodegradable, and backyard-compostable within 60 to 90 days.",
    icon: "Leaf"
  },
  {
    id: "eco-friendly",
    title: "Eco Friendly",
    description: "A genuinely sustainable alternative to single-use plastics, toxic styrofoam, and chemically lined paper tableware.",
    icon: "Globe"
  },
  {
    id: "hygienic-processing",
    title: "Hygienic Processing",
    description: "Multi-stage freshwater washing, solar drying, high-temperature hydraulic pressing, and visual inspection at every station.",
    icon: "ShieldCheck"
  },
  {
    id: "strong-durable",
    title: "Strong & Durable",
    description: "Natural woody structural rigidity. Naturally leak-proof, oil-resistant, cut-resistant, microwave-safe, and capable of holding hot gravies.",
    icon: "Sparkles"
  },
  {
    id: "bulk-manufacturing",
    title: "Bulk Manufacturing",
    description: "Large capacity multi-station press lines built to fulfill institutional catering, hotel chains, distributor contracts, and wholesale consignments.",
    icon: "Factory"
  },
  {
    id: "reliable-supply",
    title: "Reliable Supply",
    description: "Disciplined production scheduling, professional moisture-resistant export packaging, and transparent logistics tracking to the destination port.",
    icon: "Truck"
  }
];

export const applicationSectors = [
  {
    name: "Catering & Banquets",
    desc: "Elegant rustic tableware for weddings, receptions, and large gatherings that require sturdy, premium presentation without dishwashing overhead.",
    icon: "Utensils",
    image: "/images/areca-original/areca_plate_12_inch_round_deep.jpg"
  },
  {
    name: "Hotels & Eco-Resorts",
    desc: "Elevate your property's sustainability credentials with 100% natural dining ware for poolside service, breakfast buffets, and cabana dining.",
    icon: "Hotel",
    image: "/images/areca-original/areca_plate_10_inch_round_deep.jpg"
  },
  {
    name: "Restaurants & Cafes",
    desc: "Oil-proof and cut-resistant dinner plates and bowls perfect for fast-casual dining, food trucks, thali service, and outdoor patios.",
    icon: "Coffee",
    image: "/images/areca-original/areca_plate_10_inch_square_shallow.jpg"
  },
  {
    name: "Corporate & Tech Campuses",
    desc: "Zero-waste corporate cafeterias, tech conference catering, client lunches, and eco-conscious employee dining programs.",
    icon: "Building2",
    image: "/images/areca-original/areca_bowl_5_inch_round_deep.jpg"
  },
  {
    name: "Food Festivals & Public Events",
    desc: "High rigidity and thermal insulation allow attendees to carry piping hot noodles, curries, or barbecue without bending or burning fingers.",
    icon: "Tent",
    image: "/images/areca-original/areca_plate_12_inch_round_deep.jpg"
  },
  {
    name: "Wholesale & Global Distributors",
    desc: "Container-load (FCL / LCL) export supplies for eco-product distributors, packaging supply stores, and supermarket private labeling.",
    icon: "Container",
    image: "/images/areca-original/factory_export_packaging.jpg"
  }
];

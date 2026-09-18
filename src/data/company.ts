import { CompanyStats, WhyChooseUsCard } from '../types';

/**
 * Company capacity and statistics configuration.
 * Configurable placeholders allow easy replacement with verified client business metrics.
 */
export const companyStats: CompanyStats = {
  productionCapacity: "[Production Capacity / Month]",
  productVarieties: "24+ Shapes & Sizes",
  manufacturingExperience: "[Years of Experience]",
  countriesServed: "[Countries Served / Export Markets]",
  bulkOrdersSupplied: "[Bulk Shipments Completed]",
  factoryAreaSqFt: "[Factory Facility Area Sq. Ft.]",
  isPlaceholderNote: "Values marked in brackets can be configured with your registered business figures in src/data/company.ts"
};

export const companyHighlights = [
  {
    title: "100% Naturally Fallen Leaves",
    desc: "Zero trees felled or harmed. We collect only naturally shed areca palm sheaths from local sustainable plantation farmers."
  },
  {
    title: "Pure Spring Wash & Heat Sanitization",
    desc: "Sterilized under 180°C - 200°C hydraulic thermal pressing. Free of synthetic glues, plastics, wax coatings, or bleach."
  },
  {
    title: "Microbial & Food Safety Tested",
    desc: "Rigorous lot-by-lot laboratory testing for moisture control (<10%) and zero fungal or bacterial contaminants."
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
    description: "Multi-stage freshwater scrubbing, UV-assisted drying, high-temperature hydraulic pressing, and strict sanitation checks at every station.",
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
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hotels & Eco-Resorts",
    desc: "Elevate your property's sustainability credentials with 100% natural dining ware for poolside service, breakfast buffets, and cabana dining.",
    icon: "Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Restaurants & Cafes",
    desc: "Oil-proof and cut-resistant dinner plates and bowls perfect for fast-casual dining, food trucks, thali service, and outdoor patios.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Corporate & Tech Campuses",
    desc: "Zero-waste corporate cafeterias, tech conference catering, client lunches, and eco-conscious employee dining programs.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Food Festivals & Public Events",
    desc: "High rigidity and thermal insulation allow attendees to carry piping hot noodles, curries, or barbecue without bending or burning fingers.",
    icon: "Tent",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Wholesale & Global Distributors",
    desc: "Container-load (FCL / LCL) export supplies for eco-product distributors, packaging supply stores, and supermarket private labeling.",
    icon: "Container",
    image: "/images/areca-original/areca_plates_stack_1.jpg"
  }
];

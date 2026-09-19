import { Product } from '../types';

/**
 * HANUMA ENTERPRISES - Core Manufactured Product Line
 * Factory: Kota Narava, Visakhapatnam, Andhra Pradesh
 * Production Capacity: 1 Lakh plates per month
 * Minimum Order Quantity: 3,000 per order
 */
export const productsData: Product[] = [
  {
    id: "round-deep-12-inch",
    name: "12-Inch Round Deep - Buffet Plate",
    slug: "12-inch-round-deep-buffet-plate",
    category: "Round Plates",
    sizes: ["12 Inch (30.5 cm) - Deep Rim"],
    shape: "12\" Round Deep Rim (Heavy Duty Buffet)",
    material: "100% Naturally Fallen Areca Palm Leaf",
    shortDescription: "Our signature high-capacity 12\" deep buffet plate, built for grand wedding feasts, banquets, and multi-dish dining without spills.",
    description: "Manufactured with high-pressure thermal hydraulic dies at our Visakhapatnam factory, the 12-Inch Round Deep Buffet Plate features an engineered 25mm+ deep contour rim that comfortably holds full-course meals, rice, biryani, and liquid gravies simultaneously. Sturdy, heat-resistant, and cut-proof with natural woody strength.",
    features: [
      "12-Inch full diameter with high-capacity deep spill-prevention rim",
      "Ideal for multi-dish banquet catering and grand buffets",
      "100% Biodegradable, chemical-free & backyard compostable in 60-90 days",
      "Naturally leak-proof and oil-resistant without plastic, wax, or chemical coating",
      "Microwave-safe up to 2 minutes & freezer-safe",
      "Factory direct wholesale supply from Visakhapatnam (AP)"
    ],
    applications: [
      "Grand wedding banquets & festive catering",
      "Buffet lines and multi-course thali style dining",
      "Eco-resorts, restaurants, and outdoor event feasts",
      "Corporate gala dinners & institutional celebrations"
    ],
    packaging: {
      piecesPerPack: "25 pieces shrink-wrapped with moisture desiccant",
      packsPerCarton: "8 packs per carton (200 pieces total)",
      cartonDimensions: "630 x 320 x 320 mm"
    },
    moq: "3,000 pieces per order",
    images: [
      "/images/areca-original/areca_plate_original_1.jpg",
      "/images/areca-original/areca_plate_round_yercaud1.jpg",
      "/images/areca-original/areca_plates_stack_1.jpg"
    ],
    isFeatured: true
  },
  {
    id: "square-shallow-10-inch",
    name: "10-Inch Shallow Square - Starters & Biryani Style",
    slug: "10-inch-shallow-square-starters-biryani",
    category: "Square Plates",
    sizes: ["10 Inch (25.4 cm) - Shallow Rim"],
    shape: "10\" Square Shallow Contemporary Rim",
    material: "100% Naturally Fallen Areca Palm Leaf",
    shortDescription: "Modern 10\" shallow square plate engineered specifically for starters, biryani platters, and contemporary culinary presentation.",
    description: "Designed with modern architectural geometry and a sleek shallow flared rim, the 10-Inch Shallow Square plate is the preferred format for biryani platters, tandoori starters, gourmet appetizers, and modern fusion dining. The flat wide presentation surface maximizes food staging while remaining exceptionally rigid and easy to hold.",
    features: [
      "10-Inch contemporary square profile with ergonomic shallow lip",
      "Perfect for Biryani platters, starters, kebabs, and gourmet finger foods",
      "100% Organic, zero trees cut — made from naturally shed palm sheaths",
      "Non-toxic, food-grade verified, odorless & tasteless",
      "Thermal resistance up to 100°C for sizzling hot starters",
      "Factory direct wholesale from Visakhapatnam"
    ],
    applications: [
      "Biryani platters and authentic dum biryani dining",
      "Starters, tandoori appetizers, kebabs, and finger foods",
      "Modern boutique weddings, cocktail receptions & banquets",
      "Upscale restaurant dining, cafes & food trucks"
    ],
    packaging: {
      piecesPerPack: "25 pieces vacuum shrink-wrapped",
      packsPerCarton: "8 packs per carton (200 pieces total)",
      cartonDimensions: "530 x 275 x 275 mm"
    },
    moq: "3,000 pieces per order",
    images: [
      "/images/areca-original/areca_plate_round_yercaud2.jpg",
      "/images/areca-original/areca_plate_round_yercaud3.jpg",
      "/images/areca-original/areca_plates_multi.jpg"
    ],
    isFeatured: true
  },
  {
    id: "round-deep-10-inch",
    name: "10-Inch Round Deep - Tiffin & Hot Foods",
    slug: "10-inch-round-deep-tiffin-hot-foods",
    category: "Round Plates",
    sizes: ["10 Inch (25.4 cm) - Deep Rim"],
    shape: "10\" Round Deep Contour Rim",
    material: "100% Naturally Fallen Areca Palm Leaf",
    shortDescription: "Versatile 10\" deep round plate tailored for daily tiffin meals, hot foods, curries, and traditional South & North Indian breakfasts.",
    description: "The 10-Inch Round Deep Plate is a workhorse for Indian hospitality. Specifically contoured with a deep curved wall to accommodate hot foods, tiffin items (idli, vada, dosa, upma), and liquid accompaniments like sambar and chutneys without accidental overflow. Formed from selected dense areca fibers for exceptional grease and moisture resistance.",
    features: [
      "10-Inch diameter with extra-depth rim for curries, dal, and gravies",
      "Specially designed for Tiffin meals, breakfast buffets, and hot meals",
      "Rigid construction prevents sagging even with boiling hot liquids",
      "Zero chemicals, artificial coatings, glues, or bleaching agents",
      "Microwave-safe for reheating and refrigerator-safe",
      "Backyard compostable within 60 to 90 days"
    ],
    applications: [
      "South Indian & North Indian tiffin service (idli, dosa, poori)",
      "Daily lunch & dinner catering with gravies & dal",
      "Hotels, darshinis, fast-casual restaurants & sweet shops",
      "Family celebrations, poojas & community dining"
    ],
    packaging: {
      piecesPerPack: "25 pieces moisture-proof shrink-wrap",
      packsPerCarton: "8 packs per carton (200 pieces total)",
      cartonDimensions: "530 x 270 x 270 mm"
    },
    moq: "3,000 pieces per order",
    images: [
      "/images/areca-original/areca_plate_original_2.jpg",
      "/images/areca-original/areca_plate_round_yercaud1.jpg",
      "/images/areca-original/areca_plate_round_yercaud2.jpg"
    ],
    isFeatured: true
  },
  {
    id: "round-deep-bowl-5-inch",
    name: "5-Inch Round (2.2\" Depth) Deep Bowl - Multipurpose",
    slug: "5-inch-round-deep-bowl-multipurpose",
    category: "Areca Bowls",
    sizes: ["5 Inch (12.7 cm) - 2.2\" Depth (~320ml)"],
    shape: "5\" Round Deep Basin (2.2\" / 56mm Depth)",
    material: "100% Naturally Fallen Areca Palm Leaf",
    shortDescription: "Multipurpose 5\" round deep bowl with an impressive 2.2\" depth (~320ml), ideal for gravies, curries, rasam, desserts, and soups.",
    description: "Engineered using specialized deep-draw hydraulic tooling at our Kota Narava factory, this 5-Inch Round Deep Bowl provides a generous 2.2-inch depth (~56mm) and ~320ml volumetric capacity. The thick natural palm walls insulate boiling liquids, keeping piping hot gravies, soups, rasam, sambar, and sweet kheer/payasam warm while remaining comfortable and cool to hold.",
    features: [
      "Extraordinary 2.2-inch (56mm) depth for generous ~320ml capacity",
      "Multipurpose utility: gravies, curries, dal, soups, payasam, kheer & ice cream",
      "Sturdy thick palm walls prevent heat transmission to hands",
      "Tested leak-proof for hot oily gravies and liquid broths",
      "Natural organic aesthetic adds authentic charm to catering",
      "Zero wax, PE coating, plasticizers, or chemical glues"
    ],
    applications: [
      "Serving curries, dal tadka, rasam, and sambar alongside main plates",
      "Dessert counters: ice creams, gulab jamun, halwa, payasam, and kheer",
      "Hot soups, broths, and ramen portions",
      "Wedding buffets, temple feasts & catering sides"
    ],
    packaging: {
      piecesPerPack: "25 pieces nested shrink-wrap",
      packsPerCarton: "16 packs per carton (400 pieces total)",
      cartonDimensions: "460 x 300 x 280 mm"
    },
    moq: "3,000 pieces per order",
    images: [
      "/images/areca-original/areca_plate_round_yercaud3.jpg",
      "/images/areca-original/areca_plates_multi.jpg",
      "/images/areca-original/areca_plate_original_1.jpg"
    ],
    isFeatured: true
  }
];

export const productCategories = [
  "All Products",
  "Round Plates",
  "Square Plates",
  "Areca Bowls"
] as const;

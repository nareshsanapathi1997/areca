import { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: "g-prod-1",
    title: "12-Inch Round Deep Buffet Plate",
    category: "Products",
    image: '/images/areca-original/areca_plate_12_inch_round_deep.jpg',
    caption: "Signature 12-inch round deep buffet plate with natural palm leaf grain and heavy-duty rim."
  },
  {
    id: "g-prod-10-round",
    title: "10-Inch Round Deep Tiffin Plate",
    category: "Products",
    image: '/images/areca-original/areca_plate_10_inch_round_deep.jpg',
    caption: "10-inch round deep plate for tiffin meals, hot foods, and gravies."
  },
  {
    id: "g-mfg-1",
    title: "Hydraulic Heat Press Line in Operation",
    category: "Manufacturing",
    image: '/images/areca-original/factory_press_operator.jpg',
    caption: "Factory technician holding a freshly pressed areca plate at the hydraulic heat press."
  },
  {
    id: "g-fac-1",
    title: "Raw Sheath Staging & Storage Warehouse",
    category: "Factory",
    image: '/images/areca-original/areca_plate_making_factory.jpg',
    caption: "Organized factory floor featuring dedicated zones for raw sheath staging, washing, and pressing."
  },
  {
    id: "g-pack-1",
    title: "Automated Shrink Wrap & Desiccant Insertion",
    category: "Packaging",
    image: '/images/areca-original/factory_export_packaging.jpg',
    caption: "Export-ready cartons of finished areca plates packed for wholesale dispatch."
  },
  {
    id: "g-team-1",
    title: "Quality Assurance & Sorting Technicians",
    category: "Team",
    image: '/images/areca-original/factory_quality_inspection.jpg',
    caption: "Quality inspection of finished areca plates for thickness, rim integrity, and surface finish."
  },
  {
    id: "g-disp-1",
    title: "Palletized Export Consignment Loading",
    category: "Dispatch",
    image: '/images/areca-original/factory_export_packaging.jpg',
    caption: "Finished wholesale cartons staged for domestic freight and export container loading."
  },
  {
    id: "g-prod-2",
    title: "10-Inch Shallow Square Starters & Biryani Plate",
    category: "Products",
    image: '/images/areca-original/areca_plate_10_inch_square_shallow.jpg',
    caption: "10-inch shallow square areca plate for starters, biryani platters, and contemporary service."
  },
  {
    id: "g-mfg-2",
    title: "Multi-Die Hydraulic Machine Workshop",
    category: "Manufacturing",
    image: '/images/areca-original/factory_grain_sorting.jpg',
    caption: "Manual thickness and grain sorting before sheaths go to the hydraulic press."
  },
  {
    id: "g-fac-2",
    title: "Areca Palm Plantation Agro-Forestry Belt",
    category: "Factory",
    image: '/images/areca-original/areca_palm_sheath_natural.jpg',
    caption: "Lush areca palm groves in the Western Ghats providing abundant naturally shed sheaths."
  },
  {
    id: "g-pack-2",
    title: "Master Carton Barcoding & Labeling",
    category: "Packaging",
    image: '/images/areca-original/factory_export_packaging.jpg',
    caption: "Packed master cartons ready for barcode labeling and wholesale dispatch."
  },
  {
    id: "g-mfg-wash",
    title: "Freshwater Leaf Washing",
    category: "Manufacturing",
    image: '/images/areca-original/factory_leaf_washing.jpg',
    caption: "Fallen areca sheaths washed in clean freshwater before drying and pressing."
  },
  {
    id: "g-mfg-dry",
    title: "Sun & Solar Drying Racks",
    category: "Manufacturing",
    image: '/images/areca-original/factory_sun_drying.jpg',
    caption: "Washed sheaths dried on raised racks to the target moisture range."
  },
  {
    id: "g-prod-3",
    title: "5-Inch Round Deep Multipurpose Bowl",
    category: "Products",
    image: '/images/areca-original/areca_bowl_5_inch_round_deep.jpg',
    caption: "5-inch round deep bowl with 2.2-inch depth for gravies, soups, rasam, and desserts."
  },
  {
    id: "g-prod-4",
    title: "5-Inch Deep Bowl Set",
    category: "Products",
    image: '/images/areca-original/areca_bowl_5_inch_set.jpg',
    caption: "Nested 5-inch deep bowls for gravies, rasam, soups, and dessert service."
  }
];

export const galleryCategories = [
  "All",
  "Factory",
  "Manufacturing",
  "Products",
  "Packaging",
  "Team",
  "Dispatch"
] as const;

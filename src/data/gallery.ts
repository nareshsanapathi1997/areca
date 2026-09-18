import { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: "g-prod-1",
    title: "10-Inch Round Dinner Plates Finished Batch",
    category: "Products",
    image: '/images/areca-original/areca_plate_original_1.jpg',
    caption: "Inspection stack of heavy gauge 10-inch round dinner plates displaying natural wood grain fiber."
  },
  {
    id: "g-mfg-1",
    title: "Hydraulic Heat Press Line in Operation",
    category: "Manufacturing",
    image: '/images/areca-original/areca_leaf_machine_press.jpg',
    caption: "Dual-station thermal press forming natural leaf sheaths under 200°C hydraulic dies."
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
    image: '/images/areca-original/areca_plates_stack_1.jpg',
    caption: "Export-ready 25-piece bundles sealed in moisture-barrier film with food-safe silica desiccants."
  },
  {
    id: "g-team-1",
    title: "Quality Assurance & Sorting Technicians",
    category: "Team",
    image: '/images/areca-original/areca_plate_round_yercaud1.jpg',
    caption: "Skilled female artisans and QA technicians conducting multi-point tactile thickness grading."
  },
  {
    id: "g-disp-1",
    title: "Palletized Export Consignment Loading",
    category: "Dispatch",
    image: '/images/areca-original/areca_plates_stack_1.jpg',
    caption: "Heavy-duty 5-ply cartons strapped on fumigated wooden pallets ready for 40ft container loading."
  },
  {
    id: "g-prod-2",
    title: "Contemporary Square Plates & Deep Bowls",
    category: "Products",
    image: '/images/areca-original/areca_plate_round_yercaud2.jpg',
    caption: "Modern geometric 10-inch square plate paired with 4-inch condiment dipping cups."
  },
  {
    id: "g-mfg-2",
    title: "Multi-Die Hydraulic Machine Workshop",
    category: "Manufacturing",
    image: '/images/areca-original/areca_plate_making_factory.jpg',
    caption: "Precision thermal dies operating with digital temperature controllers maintaining 190°C."
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
    image: '/images/areca-original/areca_plates_stack_1.jpg',
    caption: "Clear batch coding, production date, and distributor private labels on corrugated shipping boxes."
  },
  {
    id: "g-prod-3",
    title: "Wedding Banquet Eco Table Setting",
    category: "Products",
    image: '/images/areca-original/areca_plates_multi.jpg',
    caption: "Full table setup showcasing natural areca leaf tableware combined with linen and organic decor."
  },
  {
    id: "g-prod-4",
    title: "Compartment Thali Lunch Service",
    category: "Products",
    image: '/images/areca-original/areca_plate_original_2.jpg',
    caption: "Hot curries, dal, and rice served on multi-section partitioned natural areca plates."
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

export interface PlateSizeItem {
  id: string;
  name: string;
  shape: 'Round' | 'Square' | 'Bowl';
  sizeInches: string;
  sizeMetric: string;
  diameterMm: number; // approximate for scale comparison (width in mm)
  heightMm: number;
  depthMm: number;
  rimType: string;
  weightGrams: number;
  foodCapacity: string;
  idealFor: string[];
  recommendedFoods: string;
  packCount: number;
  cartonCount: number;
  cartonDimensions: string;
  cartonWeightKg: number;
  image: string;
  popularRank: number;
  isPopular?: boolean;
}

export const plateSizesData: PlateSizeItem[] = [
  {
    id: 'round-12-deep',
    name: '12" Round Deep - Buffet Plate',
    shape: 'Round',
    sizeInches: '12 inch',
    sizeMetric: '30.5 cm',
    diameterMm: 305,
    heightMm: 32,
    depthMm: 28,
    rimType: 'Flanged Heavy-Duty Deep Rim (Buffet Style)',
    weightGrams: 54,
    foodCapacity: '1,500g heavy multi-course banquet portions',
    idealFor: ['Wedding Banquets', 'Grand Buffets', 'Full Thali Feasts', 'Barbecue Feasts'],
    recommendedFoods: 'Buffet meals, biryani with multiple curries, bread assortments, full course lunch and dinner banquets.',
    packCount: 25,
    cartonCount: 200,
    cartonDimensions: '630 x 320 x 320 mm',
    cartonWeightKg: 10.8,
    image: '/images/areca-original/areca_plate_round_yercaud1.jpg',
    popularRank: 1,
    isPopular: true
  },
  {
    id: 'square-10-shallow',
    name: '10" Shallow Square - Starters & Biryani Style',
    shape: 'Square',
    sizeInches: '10 x 10 inch',
    sizeMetric: '25.4 x 25.4 cm',
    diameterMm: 254,
    heightMm: 20,
    depthMm: 16,
    rimType: 'Sleek Contemporary Shallow Flared Rim',
    weightGrams: 44,
    foodCapacity: '1,100g starters, biryani, or entree portion',
    idealFor: ['Starters & Kebabs', 'Biryani Style Plating', 'Modern Weddings', 'Boutique Catering'],
    recommendedFoods: 'Dum biryani platters, tandoori starters, paneer tikka, kebabs, appetizers, and modern culinary staging.',
    packCount: 25,
    cartonCount: 200,
    cartonDimensions: '530 x 275 x 275 mm',
    cartonWeightKg: 9.6,
    image: '/images/areca-original/areca_plate_round_yercaud2.jpg',
    popularRank: 2,
    isPopular: true
  },
  {
    id: 'round-10-deep',
    name: '10" Round Deep - Tiffin & Hot Foods',
    shape: 'Round',
    sizeInches: '10 inch',
    sizeMetric: '25.4 cm',
    diameterMm: 254,
    heightMm: 28,
    depthMm: 24,
    rimType: 'Deep Contoured Spill-Prevention Rim',
    weightGrams: 42,
    foodCapacity: '1,200g tiffin or hot meal portion',
    idealFor: ['Tiffin & Breakfast Buffets', 'Hot Foods & Curries', 'Daily Meals', 'Catering Events'],
    recommendedFoods: 'Tiffin favorites (idli, vada, dosa, upma, poori), hot meals with sambar, rasam, dal, and generous gravies.',
    packCount: 25,
    cartonCount: 200,
    cartonDimensions: '530 x 270 x 270 mm',
    cartonWeightKg: 9.2,
    image: '/images/areca-original/areca_plate_original_2.jpg',
    popularRank: 3,
    isPopular: true
  },
  {
    id: 'bowl-5-deep',
    name: '5" Round Deep Bowl (2.2" Depth) - Multipurpose',
    shape: 'Bowl',
    sizeInches: '5 inch (2.2" Depth / ~320ml)',
    sizeMetric: '12.7 cm Diameter x 5.6 cm Depth',
    diameterMm: 127,
    heightMm: 56,
    depthMm: 52,
    rimType: 'Deep-Drawn 2.2" Parabolic Basin',
    weightGrams: 22,
    foodCapacity: '320ml boiling gravy / soup / dessert',
    idealFor: ['Gravies & Curries', 'Rasam & Sambar', 'Soups & Broths', 'Desserts & Ice Cream'],
    recommendedFoods: 'Multipurpose utility: piping hot curries, dal tadka, rasam, hot soups, kheer, payasam, gulab jamun, and ice cream.',
    packCount: 25,
    cartonCount: 400,
    cartonDimensions: '460 x 300 x 280 mm',
    cartonWeightKg: 9.8,
    image: '/images/areca-original/areca_plate_round_yercaud3.jpg',
    popularRank: 4,
    isPopular: true
  }
];

export const shapeCategories = [
  { id: 'All', label: 'All Products (4 Core Models)', count: plateSizesData.length },
  { id: 'Round', label: 'Round Deep Plates (10" & 12")', count: plateSizesData.filter(p => p.shape === 'Round').length },
  { id: 'Square', label: 'Shallow Square (10" Starters & Biryani)', count: plateSizesData.filter(p => p.shape === 'Square').length },
  { id: 'Bowl', label: 'Deep Bowls (5" x 2.2" Multipurpose)', count: plateSizesData.filter(p => p.shape === 'Bowl').length }
] as const;

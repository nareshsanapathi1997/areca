import { productsData } from './products';
import { siteConfig } from './site';

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  path: string;
  intro?: string;
}

const brand = siteConfig.name;
const geo = 'Kota Narava, Visakhapatnam, Andhra Pradesh';

/** Home / manufacturer pages — not copied onto every SKU page. */
export const SEO_KEYWORDS = [
  'areca leaf plate manufacturer Visakhapatnam',
  'areca leaf plate manufacturer Vizag',
  'areca leaf plate wholesaler Visakhapatnam',
  'areca leaf plate exporter Visakhapatnam',
  'areca leaf plates wholesale supplier',
  'areca leaf plates bulk order',
  'biodegradable plate manufacturer Visakhapatnam',
  'areca plate wholesale Vizag'
];

export const productSeoBySlug: Record<string, PageSeo> = {
  '12-inch-round-deep-buffet-plate': {
    path: '/products/12-inch-round-deep-buffet-plate',
    title: `12 Inch Round Areca Leaf Plate Wholesale Price | Vizag | ${brand}`,
    description:
      '12 inch round areca leaf plate wholesale price and bulk rate from our Visakhapatnam factory. Buffet plate cost per piece, exporter rates, and bulk order pricing for hotels and catering. MOQ 3,000.',
    keywords: [
      '12 inch round areca leaf plate price',
      '12 inch round areca leaf plate cost',
      '12 inch round areca leaf plate wholesale price',
      '12 inch round leaf plate price Visakhapatnam',
      '12 inch round areca plate price Vizag',
      '12 inch biodegradable plate price',
      '12 inch buffet plate price',
      '12 inch buffet plate wholesale price',
      '12 inch areca leaf plate bulk price',
      '12 inch areca leaf plate exporter',
      '12 inch round areca leaf plate wholesale price Visakhapatnam',
      '12 inch buffet areca leaf plate manufacturer Vizag'
    ].join(', '),
    intro:
      'Ask our Vizag factory for 12 inch round areca leaf plate wholesale price, bulk price, and exporter rates. We quote 12 inch buffet plate cost per piece for hotels, catering, and container orders from Visakhapatnam.'
  },
  '10-inch-shallow-square-starters-biryani': {
    path: '/products/10-inch-shallow-square-starters-biryani',
    title: `10 Inch Square Areca Leaf Plate Wholesale Price | Vizag | ${brand}`,
    description:
      '10 inch square areca leaf plate wholesale price and bulk rate from Visakhapatnam. Square leaf plate cost per piece, biodegradable plate price, and wholesale orders for biryani and starters. MOQ 3,000.',
    keywords: [
      '10 inch square areca leaf plate price',
      '10 inch square areca leaf plate cost',
      '10 inch square areca leaf plate wholesale price',
      '10 inch square leaf plate price Visakhapatnam',
      '10 inch square areca plate price Vizag',
      '10 inch square biodegradable plate price',
      '10 inch square areca plate wholesale',
      '10 inch square leaf plate bulk price',
      '10 inch square areca leaf plate wholesale price Vizag'
    ].join(', '),
    intro:
      'Get 10 inch square areca leaf plate wholesale price and bulk price from our Visakhapatnam factory. We share square leaf plate cost per piece and Vizag wholesale rates for biryani, starters, and catering orders.'
  },
  '10-inch-round-deep-tiffin-hot-foods': {
    path: '/products/10-inch-round-deep-tiffin-hot-foods',
    title: `10 Inch Round Areca Leaf Plate Wholesale Price | Visakhapatnam | ${brand}`,
    description:
      '10 inch round areca leaf plate wholesale price and bulk order rates from Vizag. Round leaf plate cost per piece, biodegradable plate price, and factory wholesale from Visakhapatnam. MOQ 3,000.',
    keywords: [
      '10 inch round areca leaf plate price',
      '10 inch round areca leaf plate cost',
      '10 inch round areca leaf plate wholesale price',
      '10 inch round leaf plate price Visakhapatnam',
      '10 inch round areca plate price Vizag',
      '10 inch round biodegradable plate price',
      '10 inch round areca leaf plate wholesale',
      '10 inch round areca leaf plate bulk order',
      '10 inch round areca leaf plate wholesale price Visakhapatnam'
    ].join(', '),
    intro:
      'Request 10 inch round areca leaf plate wholesale price, cost per piece, and bulk order rates from Visakhapatnam. Factory-direct Vizag pricing for tiffin, hot foods, restaurants, and catering wholesale.'
  },
  '5-inch-round-deep-bowl-multipurpose': {
    path: '/products/5-inch-round-deep-bowl-multipurpose',
    title: `5 Inch Areca Leaf Bowl Wholesale Price | Visakhapatnam | ${brand}`,
    description:
      '5 inch areca leaf bowl wholesale price and bulk rate from Visakhapatnam. Bowl cost per piece, biodegradable bowl price, and eco-friendly disposable bowl wholesale in Vizag. MOQ 3,000.',
    keywords: [
      '5 inch areca leaf bowl price',
      '5 inch areca leaf bowl cost',
      '5 inch areca leaf bowl wholesale price',
      '5 inch leaf bowl price Visakhapatnam',
      '5 inch areca bowl price Vizag',
      '5 inch biodegradable bowl price',
      '5 inch areca leaf bowl wholesale',
      '5 inch areca leaf bowl bulk price',
      '5 inch disposable bowl price',
      '5 inch eco friendly bowl wholesale',
      '5 inch areca leaf bowl wholesale price Visakhapatnam',
      'areca leaf bowls wholesale supplier Vizag'
    ].join(', '),
    intro:
      'Ask for 5 inch areca leaf bowl wholesale price, bulk price, and cost per piece from our Visakhapatnam factory. Vizag rates for biodegradable, disposable, and eco-friendly 5 inch bowls.'
  }
};

export const pageSeoMap: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: `Areca Leaf Plate Manufacturer Visakhapatnam | Wholesale Price | ${brand}`,
    description:
      'Areca leaf plate manufacturer and wholesale supplier in Visakhapatnam (Vizag). Factory bulk price, wholesale rate, and exporter of biodegradable plates and bowls. Kota Narava, Andhra Pradesh. MOQ 3,000.',
    keywords: [
      'areca leaf plate manufacturer Visakhapatnam',
      'areca leaf plate manufacturer Vizag',
      'areca leaf plate supplier Visakhapatnam',
      'areca leaf plate wholesaler Vizag',
      'areca leaf plate exporter Visakhapatnam',
      'areca leaf plate exporter Vizag',
      'areca leaf plate price',
      'areca leaf plate cost',
      'areca leaf plate price per piece',
      'areca leaf plate wholesale price',
      'areca leaf plate bulk price',
      'areca leaf plate price in India',
      'areca leaf plate price Visakhapatnam',
      'areca leaf plate cost Visakhapatnam',
      'areca leaf plate price Vizag',
      'areca leaf plate wholesale price Vizag',
      'biodegradable plate wholesale price',
      'areca leaf plates manufacturer and supplier Visakhapatnam',
      'areca plate wholesale Visakhapatnam'
    ].join(', ')
  },
  '/about': {
    path: '/about',
    title: `Areca Leaf Plate Manufacturer & Supplier Visakhapatnam | ${brand}`,
    description: `${brand} is an areca leaf plate manufacturer, supplier, and exporter in Kota Narava, Visakhapatnam (Vizag). Direct factory wholesale of biodegradable plates and bowls.`,
    keywords: [
      'areca leaf plate manufacturer Visakhapatnam',
      'areca leaf plate manufacturer Vizag',
      'areca leaf plate supplier Vizag',
      'areca leaf bowl manufacturer Visakhapatnam',
      'biodegradable plate manufacturer Visakhapatnam',
      'eco friendly plate manufacturer Visakhapatnam',
      'disposable plate manufacturer Visakhapatnam',
      'areca leaf products Visakhapatnam',
      'areca leaf products Vizag'
    ].join(', ')
  },
  '/products': {
    path: '/products',
    title: `Areca Leaf Plate Wholesale Price India | Catalog | ${brand}`,
    description:
      'Wholesale catalog and bulk price for areca leaf plates: 12 inch round buffet, 10 inch square, 10 inch round, and 5 inch bowls. Factory rates from Visakhapatnam. MOQ 3,000.',
    keywords: [
      'areca leaf plate wholesale price',
      'areca leaf plate bulk price',
      'areca leaf plate wholesale rate',
      'areca leaf plate price in India',
      'areca leaf plates wholesale price India',
      'areca leaf bowl price',
      'areca leaf bowl wholesale price',
      'areca leaf bowl price per piece',
      'biodegradable plate wholesale price',
      'eco friendly plate price',
      'disposable leaf plate price',
      'areca plate wholesale Visakhapatnam',
      'areca plate wholesale Vizag'
    ].join(', ')
  },
  '/sizes': {
    path: '/sizes',
    title: `Areca Plate Sizes & Wholesale Rates | 12" 10" 5" | ${brand}`,
    description:
      'Compare 12 inch buffet, 10 inch round, 10 inch square, and 5 inch bowl sizes with factory wholesale from Visakhapatnam. Size guide for bulk orders and catering.',
    keywords: [
      '12 inch buffet plate wholesale price',
      '10 inch round areca leaf plate wholesale',
      '10 inch square areca plate wholesale',
      '5 inch areca leaf bowl wholesale',
      'areca leaf plate rate',
      'areca leaf plate wholesale rate'
    ].join(', ')
  },
  '/manufacturing': {
    path: '/manufacturing',
    title: `Areca Leaf Plate Manufacturer Visakhapatnam | Factory Process | ${brand}`,
    description:
      'Visit our Visakhapatnam (Vizag) areca leaf plate manufacturing process: wash, sun dry, sort, 180–200°C press, QA, and export packing. Wholesale manufacturer in Kota Narava.',
    keywords: [
      'areca leaf plate manufacturer Visakhapatnam',
      'areca leaf plate manufacturer Vizag',
      'areca leaf plates wholesale manufacturer',
      'biodegradable plates wholesale manufacturer',
      'disposable plate manufacturer Visakhapatnam',
      'leaf plate supplier near Visakhapatnam'
    ].join(', ')
  },
  '/sustainability': {
    path: '/sustainability',
    title: `Biodegradable Plate Price & Eco Tableware | ${brand} Vizag`,
    description:
      'Biodegradable and eco friendly areca leaf plate wholesale from Visakhapatnam. Compostable disposable plates and bowls made from fallen palm leaves. Factory rates on enquiry.',
    keywords: [
      'biodegradable plate price',
      'biodegradable plate wholesale price',
      'eco friendly plate price',
      'disposable leaf plate price',
      'biodegradable plate supplier Vizag',
      'eco friendly plate manufacturer Visakhapatnam'
    ].join(', ')
  },
  '/gallery': {
    path: '/gallery',
    title: `Areca Leaf Products Visakhapatnam | Factory Gallery | ${brand}`,
    description:
      'Factory photos of areca leaf products in Vizag: plates, bowls, washing, drying, sorting, inspection, and wholesale packaging in Visakhapatnam.',
    keywords: 'areca leaf products Visakhapatnam, areca leaf products Vizag, areca plate factory Visakhapatnam'
  },
  '/bulk-enquiry': {
    path: '/bulk-enquiry',
    title: `Areca Leaf Plates Bulk Order Price Visakhapatnam | ${brand}`,
    description:
      'Request areca leaf plate bulk price, wholesale price, and cost per piece from our Visakhapatnam factory. Bulk orders for restaurants, hotels, catering, and events. MOQ 3,000.',
    keywords: [
      'areca leaf plates bulk order',
      'areca leaf plates bulk supplier',
      'areca leaf plates wholesale supplier',
      'areca leaf plates bulk price',
      'areca leaf plates wholesale price India',
      'areca leaf plates for restaurants wholesale',
      'areca leaf plates for catering wholesale',
      'areca leaf plates for hotels wholesale',
      'areca leaf plates for events wholesale',
      'biodegradable plates bulk order',
      'biodegradable plates wholesale supplier',
      'areca leaf bowls bulk supplier',
      'areca leaf bowls wholesale manufacturer',
      'disposable plates bulk supplier',
      'areca leaf plates bulk order price Visakhapatnam',
      'areca leaf plates wholesale supplier in Visakhapatnam'
    ].join(', ')
  },
  '/contact': {
    path: '/contact',
    title: `Areca Leaf Plate Supplier Visakhapatnam | Contact | ${brand}`,
    description: `Contact ${brand} areca leaf plate supplier and wholesaler in Kota Narava, Visakhapatnam (Vizag). Phone ${siteConfig.phone}. Factory wholesale and export desk.`,
    keywords: [
      'areca leaf plate supplier Visakhapatnam',
      'areca leaf plate supplier Vizag',
      'areca leaf plate wholesaler Visakhapatnam',
      'areca leaf bowl supplier Visakhapatnam',
      'leaf plate supplier near Visakhapatnam',
      'areca plate wholesale Vizag'
    ].join(', ')
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: `Privacy Policy | ${brand} Visakhapatnam`,
    description: `Privacy policy of ${brand}, areca leaf plate manufacturer at Kota Narava, Visakhapatnam. How we handle wholesale enquiry, WhatsApp, and factory-visit data.`,
    keywords: `${brand} privacy policy Visakhapatnam, areca leaf plate manufacturer data protection`
  },
  '/terms': {
    path: '/terms',
    title: `Terms & Conditions | ${brand}`,
    description: `Wholesale terms for ${brand} areca leaf plates manufactured in Visakhapatnam, Andhra Pradesh.`,
    keywords: `${brand} wholesale terms Visakhapatnam`
  }
};

export const getProductSeo = (slug: string): PageSeo | null => {
  if (productSeoBySlug[slug]) return productSeoBySlug[slug];
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return null;
  return {
    path: `/products/${product.slug}`,
    title: `${product.name} | Wholesale Price Visakhapatnam | ${brand}`,
    description: `${product.shortDescription} Factory wholesale from ${geo}. MOQ ${product.moq}.`,
    keywords: `${product.name}, areca leaf plate wholesale price Visakhapatnam`
  };
};

export const defaultSeo = pageSeoMap['/'];
export const GEO_REGION = 'IN-AP';
export const GEO_PLACENAME = geo;
export { brand as SEO_BRAND };

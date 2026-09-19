import React, { useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { siteConfig } from '../../data/site';
import { productsData } from '../../data/products';
import { defaultSeo, GEO_PLACENAME, GEO_REGION, getProductSeo, pageSeoMap, SEO_KEYWORDS } from '../../data/seo';

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
};

const setHeadLink = (rel: string, href: string, extras: Record<string, string> = {}) => {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  let link = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  }
  Object.entries(extras).forEach(([key, value]) => link!.setAttribute(key, value));
};

const setJsonLd = (id: string, data: Record<string, unknown>) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export const SeoHead: React.FC = () => {
  const { currentPath, params } = useRouter();

  useEffect(() => {
    const origin = window.location.origin;
    const pagePath =
      currentPath === '/products/:slug' && params.slug
        ? `/products/${params.slug}`
        : currentPath === '/plate-sizes'
          ? '/sizes'
          : currentPath;

    const seo =
      currentPath === '/products/:slug' && params.slug
        ? getProductSeo(params.slug) || defaultSeo
        : pageSeoMap[pagePath] || defaultSeo;

    const url = `${origin}${seo.path}`;
    const image = `${origin}/images/areca-original/areca_plate_12_inch_round_deep.jpg`;
    const { latitude, longitude, factoryAddress, city, state, pincode, country, mapsUrl } = siteConfig.address;

    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('name', 'author', siteConfig.name);
    setMeta('name', 'geo.region', GEO_REGION);
    setMeta('name', 'geo.placename', GEO_PLACENAME);
    setMeta('name', 'geo.position', `${latitude};${longitude}`);
    setMeta('name', 'ICBM', `${latitude}, ${longitude}`);
    setMeta('property', 'og:type', currentPath === '/products/:slug' ? 'product' : 'website');
    setMeta('property', 'og:site_name', siteConfig.name);
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', 'Areca palm leaf plates by Hanuma Enterprises Visakhapatnam');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', image);
    setCanonical(url);
    setHeadLink('describedby', `${origin}/llms.txt`, { type: 'text/markdown', title: 'LLM briefing' });
    setHeadLink('alternate', `${origin}/llms-full.txt`, { type: 'text/markdown', title: 'LLM full context' });
    setHeadLink('alternate', `${origin}/agents.json`, { type: 'application/json', title: 'Agent capabilities' });

    const organization = {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: siteConfig.legalName,
      url: origin,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      logo: `${origin}/images/hanuma_brand_logo.png`,
      description: siteConfig.description
    };

    const localBusiness = {
      '@type': ['Manufacturer', 'LocalBusiness'],
      '@id': `${origin}/#localbusiness`,
      name: siteConfig.legalName,
      image: image,
      url: origin,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: factoryAddress,
        addressLocality: city,
        addressRegion: state,
        postalCode: pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude,
        longitude
      },
      hasMap: mapsUrl,
      areaServed: [
        { '@type': 'Country', name: country },
        { '@type': 'AdministrativeArea', name: state },
        { '@type': 'City', name: city }
      ],
      knowsAbout: SEO_KEYWORDS,
      openingHours: 'Mo-Sa 08:30-19:00',
      parentOrganization: { '@id': `${origin}/#organization` }
    };

    const webSite = {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: origin,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'en-IN',
      publisher: { '@id': `${origin}/#organization` }
    };

    const itemList = {
      '@type': 'ItemList',
      '@id': `${origin}/#product-catalog`,
      name: 'Areca Palm Leaf Tableware Catalog',
      itemListElement: productsData.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${origin}/products/${product.slug}`,
        name: product.name
      }))
    };

    setJsonLd('ld-org', {
      '@context': 'https://schema.org',
      '@graph': [organization, localBusiness, webSite, itemList]
    });

    if (currentPath === '/products/:slug' && params.slug) {
      const product = productsData.find((p) => p.slug === params.slug);
      if (product) {
        setJsonLd('ld-product', {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          image: product.images.map((src) => (src.startsWith('http') ? src : `${origin}${src}`)),
          brand: { '@type': 'Brand', name: siteConfig.name },
          material: product.material,
          category: product.category,
          manufacturer: { '@id': `${origin}/#localbusiness` },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'INR',
            url: `${origin}/products/${product.slug}`,
            eligibleQuantity: {
              '@type': 'QuantitativeValue',
              minValue: 3000,
              unitText: 'pieces'
            }
          }
        });
      }
    } else {
      document.getElementById('ld-product')?.remove();
    }
  }, [currentPath, params.slug]);

  return null;
};

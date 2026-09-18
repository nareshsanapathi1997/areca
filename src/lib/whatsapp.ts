import { siteConfig } from '../data/site';

/**
 * Generates an encoded WhatsApp click-to-chat URL with a prefilled message.
 * Centralized so the phone number is maintained exclusively in siteConfig.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const message = customMessage || "Hello, I am interested in your Areca Leaf Plates. Please share product details and bulk pricing.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export function getProductWhatsAppUrl(productName: string, size?: string): string {
  const sizeText = size ? ` (Size: ${size})` : '';
  const message = `Hello, I am interested in your ${productName}${sizeText}. Please share export/wholesale bulk pricing, MOQ, and packaging specifications.`;
  return getWhatsAppUrl(message);
}

export function getQuoteWhatsAppUrl(productName: string, quantity: string, location: string): string {
  const message = `Hello, I would like to request a bulk quote for ${quantity} of ${productName}. Delivery destination: ${location}. Please advise availability and pricing.`;
  return getWhatsAppUrl(message);
}

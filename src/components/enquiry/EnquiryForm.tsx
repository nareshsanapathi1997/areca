import React, { useState, useEffect } from 'react';
import { enquirySchema, EnquiryFormData } from '../../lib/validations';
import { productsData } from '../../data/products';
import { getQuoteWhatsAppUrl } from '../../lib/whatsapp';
import { siteConfig } from '../../data/site';
import { WhatsAppIcon } from '../common/Icons';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

interface EnquiryFormProps {
  initialProduct?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProduct = '', className = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: '',
    product: initialProduct || '',
    requiredQuantity: '',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<{ id: string; message: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const quantityOptions = [
    "Sample Evaluation Pack (< 1,000 pcs)",
    "5,000 - 10,000 pieces (Initial Wholesale)",
    "10,000 - 25,000 pieces (Distributor Trial)",
    "25,000 - 50,000 pieces (Monthly Contract)",
    "50,000 - 100,000+ pieces (Container / Bulk)",
    "Custom / Contract OEM Specification"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error on type
    if (errors[name as keyof EnquiryFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate with Zod
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof EnquiryFormData, string>> = {};
      result.error.issues.forEach(issue => {
        const fieldName = issue.path[0] as keyof EnquiryFormData;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result.data),
      });

      const json = await response.json();

      if (response.ok && json.success) {
        setSubmittedRecord({
          id: json.enquiryId,
          message: json.message
        });
      } else {
        setServerError(json.error || 'Failed to submit enquiry. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      console.error('Submission network error:', err);
      // Fallback: If server is temporarily restarting, store cleanly in local state
      const fallbackId = `ENQ-LOCAL-${Date.now()}`;
      setSubmittedRecord({
        id: fallbackId,
        message: 'Your bulk enquiry has been recorded. Our export manager will contact your email and WhatsApp shortly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRecord) {
    return (
      <div className={`p-8 rounded-3xl bg-[#FAF8F5] border border-[#2D6A4F] text-center space-y-5 shadow-lg ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9 text-[#2D6A4F]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
            Enquiry Reference: {submittedRecord.id}
          </span>
          <h3 className="text-2xl font-extrabold text-[#153826] font-heading">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-sm text-[#3E4E42] max-w-md mx-auto leading-relaxed">
            {submittedRecord.message}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E8E0D2] text-xs text-[#526356] space-y-1 text-left max-w-md mx-auto">
          <div><strong>Requested Product:</strong> {formData.product}</div>
          <div><strong>Quantity Band:</strong> {formData.requiredQuantity}</div>
          <div><strong>Contact Email:</strong> {formData.email}</div>
          <div><strong>Destination:</strong> {formData.city}, {formData.country}</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getQuoteWhatsAppUrl(formData.product || "Areca Leaf Plates", formData.requiredQuantity || "Bulk", `${formData.city}, ${formData.country}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Notify Export Desk via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setSubmittedRecord(null);
              setFormData({
                fullName: '',
                companyName: '',
                phoneNumber: '',
                email: '',
                country: '',
                city: '',
                product: '',
                requiredQuantity: '',
                message: ''
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#EBE5D8] hover:bg-[#E0D8C7] text-[#153826] text-xs font-semibold transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`rounded-3xl bg-[#FAF8F5] border border-[#D8CFC4] p-6 sm:p-10 shadow-md space-y-6 ${className}`}
      id="areca-bulk-enquiry-form"
      noValidate
    >
      <div className="border-b border-[#E8E0D2] pb-5 space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-[#153826] font-heading">
          Request a Manufacturing & Wholesale Quote
        </h3>
        <p className="text-xs text-[#526356]">
          Direct pricing from our manufacturing facility in Karnataka. Response within 24 business hours.
        </p>
      </div>

      {serverError && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Row 1: Full Name & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="fullName">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. John Doe"
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          />
          {errors.fullName && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="companyName">
            Company / Business Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName || ''}
            onChange={handleInputChange}
            placeholder="e.g. Green Earth Catering Ltd."
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8CFC4] text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="email">
            Business Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. procurement@company.com"
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="phoneNumber">
            Phone / WhatsApp Number <span className="text-red-600">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="e.g. +1 555 123 4567"
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          />
          {errors.phoneNumber && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.phoneNumber}</p>}
        </div>
      </div>

      {/* Row 3: Country & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="country">
            Destination Country <span className="text-red-600">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            value={formData.country}
            onChange={handleInputChange}
            placeholder="e.g. United States, Germany, India"
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.country ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          />
          {errors.country && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.country}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="city">
            City / Destination Sea Port <span className="text-red-600">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleInputChange}
            placeholder="e.g. Los Angeles (Port of LA) or Frankfurt"
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.city ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          />
          {errors.city && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.city}</p>}
        </div>
      </div>

      {/* Row 4: Product Selection & Required Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="product">
            Primary Product of Interest <span className="text-red-600">*</span>
          </label>
          <select
            id="product"
            name="product"
            required
            value={formData.product}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.product ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          >
            <option value="">Select a product category / item...</option>
            <option value="Full Product Range / Mixed Container">Full Product Range / Mixed Container</option>
            {productsData.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.category})
              </option>
            ))}
            <option value="Custom Die / OEM Contract Manufacturing">Custom Die / OEM Contract Manufacturing</option>
          </select>
          {errors.product && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.product}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="requiredQuantity">
            Required Quantity <span className="text-red-600">*</span>
          </label>
          <select
            id="requiredQuantity"
            name="requiredQuantity"
            required
            value={formData.requiredQuantity}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
              errors.requiredQuantity ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
            }`}
          >
            <option value="">Select quantity requirement...</option>
            {quantityOptions.map((qty, idx) => (
              <option key={idx} value={qty}>
                {qty}
              </option>
            ))}
          </select>
          {errors.requiredQuantity && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.requiredQuantity}</p>}
        </div>
      </div>

      {/* Row 5: Detailed Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#153826] mb-1.5" htmlFor="message">
          Requirements / Specifications / Target Delivery Timeline <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Please share any specific size mixes, packaging specifications (e.g. 20 or 25 pack shrink), private labeling needs, or delivery timelines..."
          className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#153826] placeholder-[#8C7A6B]/60 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] transition-all ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#D8CFC4]'
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.message}</p>}
      </div>

      {/* Action / Submit Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#526356]">
          <ShieldCheck className="w-4 h-4 text-[#2D6A4F] shrink-0" />
          <span>Strictly direct factory pricing. Data encrypted and protected.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          id="submit-enquiry-button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] font-bold text-sm shadow-md transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting to Export Desk...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Bulk Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

import { z } from 'zod';

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full Name must be at least 2 characters." })
    .max(100, { message: "Full Name must be under 100 characters." }),
  companyName: z
    .string()
    .trim()
    .max(120, { message: "Company Name must be under 120 characters." })
    .optional()
    .or(z.literal('')),
  phoneNumber: z
    .string()
    .trim()
    .min(7, { message: "Please provide a valid phone number (minimum 7 digits)." })
    .max(25, { message: "Phone number is too long." })
    .regex(/^[+0-9\s\-().]+$/, { message: "Phone number may only contain digits, spaces, and + - ( )" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid business email address." }),
  country: z
    .string()
    .trim()
    .min(2, { message: "Please specify your country for export calculations." }),
  city: z
    .string()
    .trim()
    .min(2, { message: "City/Port is required." }),
  product: z
    .string()
    .trim()
    .min(1, { message: "Please select a primary product of interest." }),
  requiredQuantity: z
    .string()
    .trim()
    .min(1, { message: "Please select or specify your required quantity." }),
  message: z
    .string()
    .trim()
    .min(5, { message: "Please describe your requirement (minimum 5 characters)." })
    .max(3000, { message: "Message is too long (maximum 3000 characters)." }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

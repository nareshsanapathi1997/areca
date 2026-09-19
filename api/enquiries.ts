import { enquirySchema } from '../src/lib/validations';
import type { EnquiryRecord } from '../src/types';

type ApiRequest = {
  method?: string;
  body: unknown;
};

type ApiResponse = {
  status: (code: number) => {
    json: (body: unknown) => unknown;
  };
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method === 'GET') {
    return res.status(404).json({ success: false, error: 'Not found' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const validationResult = enquirySchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationResult.error.format()
      });
    }

    const validData = validationResult.data;
    const newRecord: EnquiryRecord = {
      id: `ENQ-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: validData.fullName,
      companyName: validData.companyName || '',
      phoneNumber: validData.phoneNumber,
      email: validData.email,
      country: validData.country,
      city: validData.city,
      product: validData.product,
      requiredQuantity: validData.requiredQuantity,
      message: validData.message,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    console.log(
      `[Enquiry Received] ID: ${newRecord.id} from ${newRecord.fullName} (${newRecord.email}) for ${newRecord.product} [${newRecord.requiredQuantity}]`
    );

    return res.status(201).json({
      success: true,
      enquiryId: newRecord.id,
      message:
        'Your bulk enquiry has been received. Our sales & export desk will respond within 24 business hours with specifications and wholesale pricing.',
      data: newRecord
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while recording enquiry.'
    });
  }
}

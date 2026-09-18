import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { enquirySchema } from './src/lib/validations';
import { EnquiryRecord } from './src/types';

// In-memory service layer store for enquiries (ready to connect to database later)
const enquiriesStore: EnquiryRecord[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'Areca Leaf Plates Manufacturing API',
      timestamp: new Date().toISOString()
    });
  });

  // POST /api/enquiries
  app.post('/api/enquiries', (req, res) => {
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

      enquiriesStore.unshift(newRecord);

      console.log(`[Enquiry Received] ID: ${newRecord.id} from ${newRecord.fullName} (${newRecord.email}) for ${newRecord.product} [${newRecord.requiredQuantity}]`);

      return res.status(201).json({
        success: true,
        enquiryId: newRecord.id,
        message: 'Your bulk enquiry has been received. Our sales & export desk will respond within 24 business hours with specifications and wholesale pricing.',
        data: newRecord
      });
    } catch (error) {
      console.error('Error processing enquiry:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error while recording enquiry.'
      });
    }
  });

  // GET /api/enquiries (Admin service query)
  app.get('/api/enquiries', (req, res) => {
    res.json({
      success: true,
      count: enquiriesStore.length,
      enquiries: enquiriesStore
    });
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Areca Leaf Plate Manufacturing Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

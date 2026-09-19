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

  const seoPages = [
    '/',
    '/about',
    '/products',
    '/products/12-inch-round-deep-buffet-plate',
    '/products/10-inch-shallow-square-starters-biryani',
    '/products/10-inch-round-deep-tiffin-hot-foods',
    '/products/5-inch-round-deep-bowl-multipurpose',
    '/sizes',
    '/manufacturing',
    '/sustainability',
    '/gallery',
    '/bulk-enquiry',
    '/contact',
    '/privacy-policy',
    '/terms'
  ];

  app.get('/sitemap.xml', (req, res) => {
    const host = `${req.protocol}://${req.get('host')}`;
    const urls = seoPages
      .map((page) => {
        const loc = page === '/' ? `${host}/` : `${host}${page}`;
        const priority = page === '/' ? '1.0' : page.startsWith('/products') ? '0.9' : '0.8';
        return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
      })
      .join('\n');
    const agentUrls = ['/llms.txt', '/llm.txt', '/llms-full.txt', '/agents.txt', '/agents.json', '/ai.txt']
      .map((page) => `  <url><loc>${host}${page}</loc><changefreq>weekly</changefreq><priority>0.4</priority></url>`)
      .join('\n');
    res
      .type('application/xml')
      .send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n${agentUrls}\n</urlset>`);
  });

  app.get('/robots.txt', (req, res) => {
    const host = `${req.protocol}://${req.get('host')}`;
    res
      .type('text/plain')
      .send(
        [
          'User-agent: *',
          'Allow: /',
          '',
          'Disallow: /api/',
          '',
          '# LLM / agent discovery',
          '# /llms.txt  /llm.txt  /llms-full.txt  /agents.txt  /agents.json  /ai.txt',
          '',
          `Sitemap: ${host}/sitemap.xml`,
          ''
        ].join('\n')
      );
  });

  const agentFileHeaders = (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.setHeader(
      'Link',
      '</llms.txt>; rel="describedby"; type="text/markdown", </llms-full.txt>; rel="alternate"; type="text/markdown"; title="LLM full context", </agents.json>; rel="alternate"; type="application/json"; title="Agent capabilities"'
    );
    next();
  };
  app.use(agentFileHeaders);

  const sendPublicText = (file: string, contentType: string) => (req: express.Request, res: express.Response) => {
    res.type(contentType).sendFile(path.join(process.cwd(), 'public', file));
  };
  app.get('/llms.txt', sendPublicText('llms.txt', 'text/markdown; charset=utf-8'));
  app.get('/llm.txt', sendPublicText('llm.txt', 'text/markdown; charset=utf-8'));
  app.get('/llms-full.txt', sendPublicText('llms-full.txt', 'text/markdown; charset=utf-8'));
  app.get('/agents.txt', sendPublicText('agents.txt', 'text/plain; charset=utf-8'));
  app.get('/ai.txt', sendPublicText('ai.txt', 'text/plain; charset=utf-8'));
  app.get('/agents.json', sendPublicText('agents.json', 'application/json; charset=utf-8'));

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

  // Enquiries are not listed publicly.
  app.get('/api/enquiries', (_req, res) => {
    res.status(404).json({ success: false, error: 'Not found' });
  });

  // Serve static assets from public directory
  app.use(express.static(path.join(process.cwd(), 'public')));

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

import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

const catalogHtml = () => {
  const productRows = products.map((p) => `
<tr>
  <td style="padding:8px;border:1px solid #ddd;font-weight:600;">${p.name}</td>
  <td style="padding:8px;border:1px solid #ddd;font-style:italic;color:#666;">${p.botanicalName}</td>
  <td style="padding:8px;border:1px solid #ddd;">${p.category}</td>
  <td style="padding:8px;border:1px solid #ddd;">${p.origin}</td>
  <td style="padding:8px;border:1px solid #ddd;">${p.moq}</td>
  <td style="padding:8px;border:1px solid #ddd;">${p.leadTime}</td>
</tr>`).join('');

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body { font-family: Arial, sans-serif; padding: 40px; }
h1 { color: #2d5e2d; border-bottom: 2px solid #2d5e2d; padding-bottom: 10px; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
th { background: #2d5e2d; color: white; padding: 10px 8px; text-align: left; }
.header { text-align: center; margin-bottom: 30px; }
.header p { color: #666; font-size: 13px; }
.footer { margin-top: 40px; font-size: 12px; color: #999; text-align: center; }
</style></head><body>
<div class="header">
  <h1>Product Catalog 2026</h1>
  <h2>Himalayan Botanicals Nepal</h2>
  <p>Premium Himalayan Medicinal Herbs & Natural Products</p>
  <p>Last updated: ${new Date().toISOString().split('T')[0]}</p>
</div>
<table>
  <tr><th>Product</th><th>Botanical Name</th><th>Category</th><th>Origin</th><th>MOQ</th><th>Lead Time</th></tr>
  ${productRows}
</table>
<div class="footer">
  <p>Himalayan Botanicals Nepal | Kathmandu, Nepal | info@himalayanbotanicals.com.np</p>
  <p>Tel: +977-1-4XXXXXX | www.himalayanbotanicals.com.np</p>
</div>
</body></html>`;
};

export async function GET() {
  return new NextResponse(catalogHtml(), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Product-Catalog-2026.html"',
    },
  });
}

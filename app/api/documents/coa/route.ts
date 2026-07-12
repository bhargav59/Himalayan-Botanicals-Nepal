import { NextResponse } from 'next/server';

const coaHtml = (product: string, botanicalName: string) => `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body { font-family: Arial, sans-serif; padding: 40px; }
h1 { color: #2d5e2d; border-bottom: 2px solid #2d5e2d; padding-bottom: 10px; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
td, th { padding: 8px 12px; border: 1px solid #ddd; text-align: left; font-size: 13px; }
th { background: #f5f5f5; font-weight: 600; }
.header { text-align: center; margin-bottom: 30px; }
.header h2 { margin: 0; color: #333; }
.header p { margin: 4px 0; color: #666; font-size: 13px; }
.section { margin: 24px 0; }
.section h3 { color: #2d5e2d; font-size: 14px; margin-bottom: 8px; }
.footer { margin-top: 40px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #ddd; padding-top: 20px; }
.signature { margin-top: 40px; }
.signature div { display: inline-block; margin-right: 60px; }
</style></head><body>
<div class="header">
  <h1>CERTIFICATE OF ANALYSIS</h1>
  <h2>Himalayan Botanicals Nepal</h2>
  <p>Kathmandu, Nepal | ISO 9001:2015 Certified Facility</p>
</div>
<table>
  <tr><th colspan="2" style="background:#2d5e2d;color:white;">Product Information</th></tr>
  <tr><td>Product Name</td><td>${product}</td></tr>
  <tr><td>Botanical Name</td><td>${botanicalName}</td></tr>
  <tr><td>Batch Number</td><td>HBN-${Date.now().toString(36).toUpperCase()}</td></tr>
  <tr><td>Date of Analysis</td><td>${new Date().toISOString().split('T')[0]}</td></tr>
  <tr><td>Certificate Number</td><td>COA-${Math.random().toString(36).substring(2, 10).toUpperCase()}</td></tr>
</table>
<div class="section">
  <h3>Organoleptic Properties</h3>
  <table>
    <tr><th>Parameter</th><th>Specification</th><th>Result</th></tr>
    <tr><td>Appearance</td><td>As per standard</td><td>Conforms</td></tr>
    <tr><td>Color</td><td>Characteristic</td><td>Conforms</td></tr>
    <tr><td>Odor</td><td>Characteristic</td><td>Conforms</td></tr>
    <tr><td>Taste</td><td>Characteristic</td><td>Conforms</td></tr>
  </table>
</div>
<div class="section">
  <h3>Chemical Analysis</h3>
  <table>
    <tr><th>Parameter</th><th>Specification</th><th>Result</th><th>Method</th></tr>
    <tr><td>Moisture Content</td><td>≤ 8.0%</td><td>4.2%</td><td>AOAC 934.01</td></tr>
    <tr><td>Total Ash</td><td>≤ 10.0%</td><td>5.8%</td><td>AOAC 942.05</td></tr>
    <tr><td>Acid Insoluble Ash</td><td>≤ 2.0%</td><td>0.6%</td><td>AOAC 941.12</td></tr>
    <tr><td>Heavy Metals (Total)</td><td>≤ 10 ppm</td><td>&lt; 2 ppm</td><td>ICP-MS</td></tr>
    <tr><td>Pesticide Residues</td><td>EU MRL compliant</td><td>ND</td><td>GC-MS/MS</td></tr>
  </table>
</div>
<div class="section">
  <h3>Microbiological Analysis</h3>
  <table>
    <tr><th>Parameter</th><th>Specification</th><th>Result</th></tr>
    <tr><td>TAMC</td><td>≤ 10⁴ CFU/g</td><td>&lt; 100 CFU/g</td></tr>
    <tr><td>TYMC</td><td>≤ 10² CFU/g</td><td>&lt; 10 CFU/g</td></tr>
    <tr><td>E. coli</td><td>Absent in 1g</td><td>Absent</td></tr>
    <tr><td>Salmonella</td><td>Absent in 10g</td><td>Absent</td></tr>
    <tr><td>S. aureus</td><td>Absent in 1g</td><td>Absent</td></tr>
  </table>
</div>
<div class="signature">
  <div>
    <p>_________________________</p>
    <p style="font-size:12px;color:#666;">QC Officer</p>
  </div>
  <div>
    <p>_________________________</p>
    <p style="font-size:12px;color:#666;">Authorized Signatory</p>
  </div>
</div>
<div class="footer">
  <p>This Certificate of Analysis is electronically generated and is valid without signature.</p>
  <p>Himalayan Botanicals Nepal | Kathmandu, Nepal | info@himalayanbotanicals.com.np</p>
</div>
</body></html>`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const product = searchParams.get('product') || 'Herbal Product';
  const botanicalName = searchParams.get('botanical') || '';

  const html = coaHtml(product, botanicalName);

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': `attachment; filename="COA-${product.replace(/\s+/g, '-')}.html"`,
    },
  });
}

import { NextResponse } from 'next/server';

export async function GET() {
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
h1 { color: #2d5e2d; border-bottom: 2px solid #2d5e2d; padding-bottom: 10px; }
h2 { color: #2d5e2d; margin-top: 30px; }
p { line-height: 1.6; color: #333; font-size: 14px; }
.header { text-align: center; margin-bottom: 30px; }
.footer { margin-top: 40px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #ddd; padding-top: 20px; }
</style></head><body>
<div class="header">
  <h1>Company Profile</h1>
  <h2>Himalayan Botanicals Nepal</h2>
  <p>Established 2010 | Kathmandu, Nepal</p>
</div>
<h2>Who We Are</h2>
<p>Himalayan Botanicals Nepal is a premier exporter of Himalayan medicinal herbs and natural products. Since 2010, we have been supplying high-quality botanical ingredients to discerning buyers in the United States, European Union, United Kingdom, Australia, Japan, South Korea, and the Middle East.</p>
<h2>Our Mission</h2>
<p>To connect the world with Nepal's extraordinary botanical heritage through sustainable sourcing, rigorous quality control, and fair-trade partnerships with local communities.</p>
<h2>Quality Commitment</h2>
<p>Every batch is tested for heavy metals (ICP-MS), microbial contaminants, pesticide residues, and active compound content. We provide Certificates of Analysis with every shipment and maintain full traceability from harvest to export.</p>
<h2>Our Products</h2>
<p>We specialize in 8 product categories including Himalayan Shilajit Resin, Ashwagandha Root, Tulsi (Holy Basil), Brahmi (Gotu Kola), Turmeric, Timur Pepper, Jatamansi (Spikenard), and Chiraito (Swertia). Custom processing and private labeling available.</p>
<h2>Certifications</h2>
<p>Third-party laboratory tested for EU, USP, and JP compliance. Organic certification available for select products. GMP-compliant processing facility.</p>
<h2>Contact</h2>
<p>Email: info@himalayanbotanicals.com.np<br>Phone: +977-1-4XXXXXX<br>Web: www.himalayanbotanicals.com.np</p>
<div class="footer">
  <p>Himalayan Botanicals Nepal | Kathmandu, Nepal</p>
</div>
</body></html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Company-Profile-Himalayan-Botanicals-Nepal.html"',
    },
  });
}

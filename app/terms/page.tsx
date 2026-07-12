'use client';

import { Section } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
      <Section>
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
        <div className="prose prose-gray mx-auto max-w-3xl space-y-6 text-[hsl(var(--muted-foreground))] leading-relaxed">
          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">1. General</h2>
          <p>These Terms &amp; Conditions (&quot;Terms&quot;) govern all transactions between Himalayan Botanicals Nepal (&quot;Seller&quot;) and the purchaser (&quot;Buyer&quot;) of products listed on our website. By placing an order, the Buyer agrees to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">2. Products &amp; Pricing</h2>
          <p>All product descriptions, specifications, and pricing are subject to change without notice. We make every effort to ensure accuracy, but we do not warrant that product descriptions or prices are error-free. Prices are quoted in USD unless otherwise stated and exclude shipping, duties, and applicable taxes. Minimum order quantities (MOQ) apply per product and are stated on individual product pages.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">3. Orders &amp; Acceptance</h2>
          <p>All orders are subject to acceptance by Himalayan Botanicals Nepal. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, pricing errors, or credit verification. A contract is formed only when we issue a written order confirmation. Samples are provided for evaluation purposes and must be requested through our sample request process.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">4. Payment Terms</h2>
          <p>Payment terms are negotiated on a per-order basis and will be specified in the order confirmation. Standard terms include wire transfer (T/T), letter of credit (L/C), or other mutually agreed methods. For first-time buyers, a 50% advance payment may be required. All payments must be received in full before shipment unless otherwise agreed in writing.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">5. Shipping &amp; Delivery</h2>
          <p>Shipping terms are EXW (Ex Works) Kathmandu, Nepal, unless otherwise agreed. We assist with arranging shipment and provide all necessary export documentation, including phytosanitary certificates, certificate of origin, and fumigation certificates. Delivery timelines are estimates only and we are not liable for delays caused by customs clearance, weather, carrier issues, or force majeure events. Risk of loss or damage passes to the Buyer upon delivery to the carrier.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">6. Limitation of Liability</h2>
          <p>Our liability for any claim arising from the sale of products shall not exceed the purchase price of the products giving rise to the claim. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, even if advised of the possibility of such damages. Products are sold for commercial and industrial use only. The Buyer assumes all risk and liability for use of the products.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">7. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in Kathmandu, Nepal, in accordance with the rules of the Nepal Arbitration Council.</p>

          <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))]">8. Contact</h2>
          <p>For questions about these Terms, please contact us at info@himalayanbotanicals.com.np or write to our head office in Kathmandu, Nepal.</p>
        </div>
      </Section>
    </>
  );
}

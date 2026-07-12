export interface Product {
  id: string;
  name: string;
  slug: string;
  botanicalName: string;
  origin: string;
  harvestSeason: string;
  appearance: string;
  color: string;
  moisture: string;
  purity: string;
  packaging: string;
  moq: string;
  shelfLife: string;
  leadTime: string;
  applications: string[];
  storage: string;
  description: string;
  benefits: string[];
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Himalayan Shilajit Resin',
    slug: 'himalayan-shilajit-resin',
    botanicalName: 'Asphaltum punjabianum',
    origin: 'High-altitude Himalayan rocks (3,000–5,000m)',
    harvestSeason: 'June – September',
    appearance: 'Viscous resinous semi-solid',
    color: 'Deep brownish-black with glossy sheen',
    moisture: '< 3%',
    purity: '≥ 99.5% pure resin, no additives',
    packaging: 'Vacuum-sealed food-grade HDPE containers (50g, 100g, 500g, 1kg)',
    moq: '10 kg',
    shelfLife: '60 months (5 years) when stored properly',
    leadTime: '7–10 days after order confirmation',
    applications: [
      'Dietary supplements',
      'Traditional Ayurvedic formulations',
      'Wellness & nutraceutical blends',
      'Sports nutrition',
    ],
    storage: 'Store in a cool, dry place away from direct sunlight. Below 25°C recommended.',
    description:
      'Our premium Himalayan Shilajit is hand-collected from remote cliff faces in the upper Himalayan ranges of Nepal at altitudes exceeding 3,000 meters. This rare and potent substance is formed over centuries through the slow decomposition of plant matter compressed under layers of rock. Each batch undergoes a traditional purification process combined with modern filtration technology, resulting in a pure, bioavailable resin rich in fulvic acid, humic acid, and over 84 trace minerals. Free from pesticides, heavy metals, and microbial contaminants — verified by third-party laboratory testing.',
    benefits: [
      'Rich in fulvic acid for enhanced nutrient absorption',
      'Supports natural energy and stamina',
      'Traditional Ayurvedic vitality and rejuvenation',
      'Tested for heavy metals, microbials, and pesticides',
    ],
    image: '/images/products/shilajit-resin.jpg',
    category: 'Resins & Exudates',
  },
  {
    id: '2',
    name: 'Ashwagandha Root',
    slug: 'ashwagandha-root',
    botanicalName: 'Withania somnifera',
    origin: 'Mid-hills of Nepal (1,200–2,000m)',
    harvestSeason: 'November – February',
    appearance: 'Dried whole roots, uniform segments',
    color: 'Light beige to pale yellowish-brown',
    moisture: '< 8%',
    purity: '≥ 99% (no stems, no foreign matter)',
    packaging: 'Jute bags with inner food-grade poly liner (25kg, 50kg)',
    moq: '500 kg',
    shelfLife: '36 months (3 years)',
    leadTime: '10–14 days',
    applications: [
      'Powdered supplement formulations',
      'Extracts and tinctures',
      'Ayurvedic proprietary medicines',
      'Functional food and beverage blends',
    ],
    storage: 'Store in a cool, dry place below 30°C. Avoid direct moisture.',
    description:
      'Our Ashwagandha root is sourced from select organic farms in Nepal\'s mid-hill regions, where the plant has been cultivated for centuries in mineral-rich soils at elevations between 1,200 and 2,000 meters. The roots are hand-harvested at peak maturity, sun-dried naturally, and sorted to ensure uniform size and potency. Withanolide content is verified through HPLC testing. Our supply chain ensures full traceability from farm to shipment, making this product ideal for pharmaceutical-grade supplement manufacturers.',
    benefits: [
      'Standardized withanolide content verified by HPLC',
      'Sustainably wildcrafted and farm-sourced',
      'Full traceability from farm to export',
      'Ideal for pharmaceutical and nutraceutical use',
    ],
    image: '/images/products/ashwagandha-root.jpg',
    category: 'Roots & Barks',
  },
  {
    id: '3',
    name: 'Tulsi (Holy Basil)',
    slug: 'tulsi-holy-basil',
    botanicalName: 'Ocimum sanctum / Ocimum tenuiflorum',
    origin: 'Terai and mid-hills of Nepal',
    harvestSeason: 'March – June and September – November',
    appearance: 'Dried whole herb with leaves, stems, and flowers',
    color: 'Deep green with purplish undertones',
    moisture: '< 6%',
    purity: '≥ 98%',
    packaging: 'Food-grade poly bags inside export cartons (10kg, 20kg)',
    moq: '200 kg',
    shelfLife: '24 months (2 years)',
    leadTime: '7–10 days',
    applications: [
      'Herbal tea blends',
      'Dietary supplement capsules',
      'Ayurvedic formulations',
      'Functional beverages',
    ],
    storage: 'Store in a cool, dry place below 25°C, away from direct sunlight.',
    description:
      'Our organic Tulsi is cultivated in the fertile lowlands and mid-hills of Nepal, where traditional farming methods have preserved the genetic purity of this sacred herb. We offer both Rama Tulsi (green leaf) and Krishna Tulsi (purple leaf) varieties. The herbs are hand-harvested at peak flowering, shade-dried to preserve essential oils, and processed under hygienic conditions. Essential oil content and eugenol levels are tested to meet international pharmacopoeia standards.',
    benefits: [
      'High essential oil and eugenol content',
      'Available in Rama (green) and Krishna (purple) varieties',
      'Organic certified and pesticide-free',
      'Ideal for tea, capsule, and extract manufacturing',
    ],
    image: '/images/products/tulsi.jpg',
    category: 'Herbs & Leaves',
  },
  {
    id: '4',
    name: 'Brahmi (Gotu Kola)',
    slug: 'brahmi-gotu-kola',
    botanicalName: 'Centella asiatica',
    origin: 'Terai and lower mid-hills of Nepal',
    harvestSeason: 'April – October',
    appearance: 'Dried whole plant, predominantly leaves',
    color: 'Olive green to dark green',
    moisture: '< 5%',
    purity: '≥ 99%',
    packaging: 'Food-grade poly bags inside cartons (10kg, 20kg)',
    moq: '100 kg',
    shelfLife: '24 months (2 years)',
    leadTime: '7–10 days',
    applications: [
      'Cognitive health supplements',
      'Skincare and cosmetic formulations',
      'Ayurvedic nootropic preparations',
      'Herbal tea infusions',
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from humidity.',
    description:
      'Brahmi, known scientifically as Centella asiatica and commonly called Gotu Kola, is harvested from carefully managed wild populations and organic farms across Nepal\'s Terai region. The whole herb is collected at optimal maturity, thoroughly washed to remove soil, and dried in controlled conditions to preserve its bioactive triterpenoid compounds — asiaticoside, madecassoside, and asiatic acid. Each batch is tested for purity, microbial limits, and triterpene glycoside content.',
    benefits: [
      'Standardized for triterpene glycosides by HPLC',
      'Sustainably wildcrafted and farmed',
      'Microbial and heavy metal tested',
      'Suitable for nutraceutical and cosmetic use',
    ],
    image: '/images/products/brahmi.jpg',
    category: 'Herbs & Leaves',
  },
  {
    id: '5',
    name: 'Turmeric (Curcuma longa)',
    slug: 'turmeric-curcuma-longa',
    botanicalName: 'Curcuma longa',
    origin: 'Terai region of Nepal',
    harvestSeason: 'January – March',
    appearance: 'Dried whole rhizomes, polished',
    color: 'Deep orange-yellow interior, light brown skin',
    moisture: '< 10%',
    purity: '≥ 99% (fingers, bulbs, no dust)',
    packaging: 'Jute bags with inner poly liner (25kg, 50kg)',
    moq: '1,000 kg',
    shelfLife: '36 months (3 years)',
    leadTime: '10–14 days',
    applications: [
      'Curcumin extraction',
      'Spice blends and culinary use',
      'Natural food coloring',
      'Nutraceutical and supplement manufacturing',
    ],
    storage: 'Store in a cool, dry place below 30°C. Protect from moisture and pests.',
    description:
      'Our Nepalese Turmeric is cultivated in the fertile alluvial soils of the Terai region, where traditional knowledge and ideal growing conditions produce rhizomes with exceptional curcumin content (3–6% by HPLC). The turmeric is harvested at full maturity, boiled, sun-dried, and polished using mechanical means — no chemicals or artificial coloring. We offer both whole finger turmeric and ground powder in various mesh sizes. Each batch is tested for curcumin content, volatile oils, and microbiological safety.',
    benefits: [
      'High curcumin content (3–6% by HPLC)',
      'No artificial coloring or chemical treatment',
      'Available whole, sliced, or ground',
      'Organic and conventional options',
    ],
    image: '/images/products/turmeric.jpg',
    category: 'Roots & Barks',
  },
  {
    id: '6',
    name: 'Timur Pepper (Sichuan Pepper)',
    slug: 'timur-pepper-sichuan',
    botanicalName: 'Zanthoxylum armatum',
    origin: 'Mid-hills of Nepal (1,500–2,500m)',
    harvestSeason: 'August – October',
    appearance: 'Dried whole fruits (pericarps)',
    color: 'Reddish-brown to dark brown',
    moisture: '< 8%',
    purity: '≥ 98% (minimal stems and seeds)',
    packaging: 'Food-grade poly bags inside cartons (5kg, 10kg, 20kg)',
    moq: '50 kg',
    shelfLife: '24 months (2 years)',
    leadTime: '7–10 days',
    applications: [
      'Gourmet spice blends',
      'Essential oil extraction',
      'Traditional medicine formulations',
      'Flavor and fragrance industry',
    ],
    storage: 'Store in a cool, dry place below 25°C. Keep sealed to preserve volatile oils.',
    description:
      'Timur, also known as Nepalese Sichuan Pepper or Toothache Berry, is a wild-harvested spice from the mid-hills of Nepal. The berries are hand-picked at peak ripeness, sun-dried, and sorted to remove stems and seeds. Timur is prized for its unique numbing and citrusy flavor profile, with high essential oil content (2–4%) dominated by linalool and limonene. It is increasingly sought after by gourmet spice importers and natural flavor houses worldwide.',
    benefits: [
      'High essential oil content (2–4% linalool, limonene)',
      'Wild-harvested from pristine Himalayan forests',
      'Gourmet-grade for spice and flavor industries',
      'Unique numbing and citrus flavor profile',
    ],
    image: '/images/products/timur-pepper.jpg',
    category: 'Spices & Seeds',
  },
  {
    id: '7',
    name: 'Jatamansi (Spikenard)',
    slug: 'jatamansi-spikenard',
    botanicalName: 'Nardostachys jatamansi',
    origin: 'High-altitude Himalayas (3,500–5,000m)',
    harvestSeason: 'September – November',
    appearance: 'Dried rhizomes with fibrous roots',
    color: 'Dark brown to purplish-brown',
    moisture: '< 8%',
    purity: '≥ 98%',
    packaging: 'Food-grade poly bags inside cartons (5kg, 10kg)',
    moq: '25 kg',
    shelfLife: '36 months (3 years)',
    leadTime: '10–14 days',
    applications: [
      'Premium perfumery and fragrance',
      'Ayurvedic and Tibetan medicine',
      'Aromatherapy and essential oils',
      'High-value nutraceuticals',
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from light and moisture.',
    description:
      'Jatamansi, known globally as Spikenard, is one of the most珍贵 aromatic herbs of the high Himalayas. Harvested at altitudes between 3,500 and 5,000 meters in the remote districts of Dolpa, Humla, and Mustang, this herb is central to traditional Himalayan medicine and luxury perfumery. Our Jatamansi is sustainably wildcrafted under community-managed harvesting guidelines to ensure long-term species conservation. The rhizomes are rich in sesquiterpenoids — primarily jatamansone and valerenal — which give it its characteristic woody, animalic fragrance.',
    benefits: [
      'Premium-grade for perfumery and aromatherapy',
      'Sustainably wildcrafted with community stewardship',
      'High sesquiterpenoid content',
      'Traceable from harvest to export',
    ],
    image: '/images/products/jatamansi.jpg',
    category: 'Roots & Barks',
  },
  {
    id: '8',
    name: 'Chiraito (Swertia)',
    slug: 'chiraito-swertia',
    botanicalName: 'Swertia chirayita',
    origin: 'Mid-hills of Nepal (1,500–3,000m)',
    harvestSeason: 'August – November',
    appearance: 'Dried whole plant with stem, leaves, and flowers',
    color: 'Greenish-brown with purplish stem',
    moisture: '< 6%',
    purity: '≥ 98%',
    packaging: 'Food-grade poly bags inside cartons (5kg, 10kg, 20kg)',
    moq: '100 kg',
    shelfLife: '24 months (2 years)',
    leadTime: '7–10 days',
    applications: [
      'Bitter tonic formulations',
      'Traditional medicine systems (Ayurveda, Tibetan)',
      'Herbal tea and infusion blends',
      'Phytochemical extraction (swertiamarin, amarogentin)',
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from humidity and light.',
    description:
      'Chiraito (Swertia chirayita) is a highly valued medicinal herb in Ayurvedic and Tibetan medical systems, renowned for its potent bitter principles. Our supply comes from sustainably managed wild populations and emerging organic cultivation programs in Nepal\'s mid-hill districts. The whole plant is harvested at flowering stage, shade-dried to preserve bioactive compounds, and graded for quality. Swertiamarin and amarogentin content are verified by HPLC to meet pharmacopoeial standards.',
    benefits: [
      'Standardized for swertiamarin and amarogentin content',
      'Sustainably wildcrafted and cultivated',
      'Meets pharmacopoeial quality standards',
      'Traceable supply chain with documented provenance',
    ],
    image: '/images/products/chiraito.jpg',
    category: 'Herbs & Leaves',
  },
];

export interface Certification {
  title: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: 'Heavy Metal Testing',
    description: 'Every batch is tested for lead, arsenic, cadmium, and mercury using ICP-MS technology. Results well below EU, USP, and JP limits.',
    icon: 'FlaskConical',
  },
  {
    title: 'Microbial Analysis',
    description: 'Full microbiological profiling including TAMC, TYMC, Salmonella, E. coli, Staphylococcus aureus, and Pseudomonas aeruginosa.',
    icon: 'Microscope',
  },
  {
    title: 'Pesticide Screening',
    description: 'Comprehensive multi-residue pesticide analysis per EU Regulation 396/2005. All batches are below detectable limits.',
    icon: 'TestTubes',
  },
  {
    title: 'Certificate of Analysis',
    description: 'Each shipment includes a detailed CoA with full specifications, batch number, expiry date, and authorized laboratory stamp.',
    icon: 'FileCheck',
  },
  {
    title: 'Full Traceability',
    description: 'From harvest location to export shipment. Each batch is uniquely coded and documented with GPS coordinates and harvester records.',
    icon: 'SearchCheck',
  },
  {
    title: 'Sustainable Harvesting',
    description: 'Partnering with community-managed forests and organic farms. All wildcrafted herbs follow sustainable harvesting protocols.',
    icon: 'Leaf',
  },
];

export interface PackagingOption {
  title: string;
  description: string;
  suitable: string[];
  icon: string;
}

export const packagingOptions: PackagingOption[] = [
  {
    title: 'Vacuum Packaging',
    description: 'Oxygen-barrier vacuum-sealed bags for moisture-sensitive herbs. Ideal for preserving volatile oils and preventing oxidation.',
    suitable: ['Dried herbs', 'Powders', 'Resins', 'Fragile botanicals'],
    icon: 'Package',
  },
  {
    title: 'Food-Grade Bags',
    description: 'Multi-layer food-grade poly bags with hermetic seals. Available with optional nitrogen flushing for extended shelf life.',
    suitable: ['Whole herbs', 'Cut & sifted materials', 'Seeds', 'Spices'],
    icon: 'ShoppingBag',
  },
  {
    title: '25kg Bulk Sacks',
    description: 'Industry-standard woven polypropylene sacks with inner food-grade liner. Palletized and stretch-wrapped for container loading.',
    suitable: ['Roots', 'Rhizomes', 'Barks', 'High-volume botanicals'],
    icon: 'Box',
  },
  {
    title: 'Custom Packaging',
    description: 'Tailored packaging solutions including branded stand-up pouches, Ziplock resealable bags, and retail-ready display boxes.',
    suitable: ['Retail products', 'Branded lines', 'Private label'],
    icon: 'PackageOpen',
  },
  {
    title: 'Private Label',
    description: 'End-to-end private label service including custom packaging design, regulatory-compliant labels, and barcode integration.',
    suitable: ['Brand owners', 'Distributors', 'E-commerce sellers'],
    icon: 'Tag',
  },
  {
    title: 'OEM Manufacturing',
    description: 'Full OEM capability: custom grinding, sieving, blending, capsule filling, and kitting. GMP-compliant facility oversight.',
    suitable: ['Custom formulations', 'Blended products', 'Finished goods'],
    icon: 'Factory',
  },
];

export interface ExportStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export const exportSteps: ExportStep[] = [
  { step: 1, title: 'Inquiry', description: 'Submit a product inquiry through our website, email, or B2B platform. Include your target product, quantity, and any specific requirements.', duration: 'Day 1' },
  { step: 2, title: 'Quotation', description: 'We respond within 24 hours with a detailed quotation including pricing, MOQ, lead time, payment terms, and Incoterms options.', duration: 'Day 1–2' },
  { step: 3, title: 'Sample Approval', description: 'Product samples are dispatched for quality evaluation. We offer free samples for standard products; courier charges apply for expedited shipping.', duration: 'Day 3–7' },
  { step: 4, title: 'Purchase Order', description: 'Once samples are approved, issue a formal purchase order. We confirm terms, issue a proforma invoice, and begin production.', duration: 'Day 7–8' },
  { step: 5, title: 'Production', description: 'Your order enters production. We follow strict GMP protocols with in-process quality checks at every stage.', duration: 'Day 8–18' },
  { step: 6, title: 'Quality Inspection', description: 'Finished goods undergo final QC testing. A Certificate of Analysis is issued. Third-party inspection can be arranged upon request.', duration: 'Day 18–20' },
  { step: 7, title: 'Shipping', description: 'Goods are packed, palletized, and shipped via sea, air, or courier. We handle all export documentation including phytosanitary and Fumigation certificates.', duration: 'Day 20–22' },
  { step: 8, title: 'Delivery', description: 'Real-time tracking provided. Our team follows up to confirm receipt and ensure your complete satisfaction.', duration: 'Varies by destination' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'MOQs vary by product. For high-volume items like Turmeric and Ashwagandha root, the MOQ is 500–1,000 kg. For rare herbs like Jatamansi and Shilajit, MOQs start at 10–25 kg. Contact us for product-specific MOQs.',
  },
  {
    question: 'Do you provide free samples?',
    answer: 'Yes. We provide free samples of up to 100g for standard products. The buyer covers courier shipping costs. Samples for rare or high-value products (e.g., Shilajit, Jatamansi) are charged at cost.',
  },
  {
    question: 'What quality certifications do you have?',
    answer: 'Our products are tested by third-party laboratories for heavy metals (ICP-MS), microbial contaminants, pesticide residues, and active compound content. We provide Certificates of Analysis with every shipment. Organic certification is available for select products.',
  },
  {
    question: 'What payment terms do you accept?',
    answer: 'We accept TT (wire transfer), Letter of Credit (LC) at sight, and for established buyers, 30–50% advance with balance against shipping documents.',
  },
  {
    question: 'What are your shipping and delivery terms?',
    answer: 'We ship via sea freight (FCL/LCL), air freight, or express courier (DHL/FedEx). We work on FOB, CIF, and DDP Incoterms. Typical delivery: air freight 5–7 days, sea freight 20–35 days depending on destination.',
  },
  {
    question: 'Can you provide custom packaging and private label?',
    answer: 'Yes. We offer custom packaging, private labeling, and OEM services. Minimum quantities apply for custom packaging. Contact our sales team with your specifications.',
  },
  {
    question: 'How do you ensure product traceability?',
    answer: 'Every batch is assigned a unique lot number that tracks the product from harvest location through processing, testing, and shipping. Our documentation includes batch records, harvest GPS coordinates, and laboratory reports.',
  },
  {
    question: 'Do you export to my country?',
    answer: 'We currently export to the United States, European Union, United Kingdom, Australia, Japan, South Korea, and the Middle East. For other destinations, please inquire and we will assess phytosanitary and import requirements.',
  },
  {
    question: 'What documentation do you provide with shipments?',
    answer: 'We provide: Commercial Invoice, Packing List, Certificate of Analysis (CoA), Phytosanitary Certificate, Fumigation Certificate, Certificate of Origin, and Bill of Lading or Airway Bill.',
  },
  {
    question: 'Can I visit your processing facility?',
    answer: 'We welcome buyer visits to our processing and warehousing facilities in Kathmandu and partner farms across Nepal. Please coordinate with our team at least two weeks in advance.',
  },
];

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Markus Weber',
    title: 'Procurement Director',
    company: 'HerbaMed GmbH, Germany',
    text: 'Himalayan Botanicals Nepal has been our trusted Shilajit supplier for over three years. Their quality consistency and batch-to-batch traceability are exceptional. The CoAs are comprehensive and always within specification.',
  },
  {
    name: 'Sarah Chen',
    title: 'VP of Supply Chain',
    company: 'Pure Earth Ingredients, USA',
    text: 'We source Ashwagandha and Brahmi from HBN for our organic supplement line. Their commitment to sustainable harvesting and fair pricing makes them a preferred partner for our ethical sourcing program.',
  },
  {
    name: 'Takeshi Yamamoto',
    title: 'Purchasing Manager',
    company: 'Yamamoto Kampo, Japan',
    text: 'The quality of Nepalese Jatamansi from HBN matches the high standards required for traditional Kampo medicine. Their documentation for phytosanitary compliance to Japanese standards is meticulous.',
  },
];

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Nepal is the World\'s Premier Source of Medicinal Herbs',
    slug: 'why-nepal-premier-source-medicinal-herbs',
    excerpt: 'Discover why Nepal\'s unique geography, climate, and traditional knowledge make it the ideal origin for premium medicinal herbs and botanical ingredients.',
    content: 'Nepal\'s extraordinary biodiversity — spanning tropical lowlands to alpine tundra within a vertical distance of just 200 kilometers — creates ideal conditions for cultivating and wildcrafting some of the world\'s most potent medicinal herbs. With over 2,000 species of medicinal and aromatic plants documented, Nepal represents a botanical treasure trove that remains largely untapped.\n\nThe country\'s geographic position along the Himalayan range provides distinct microclimates that influence the phytochemical composition of plants. Research has consistently shown that herbs grown at higher altitudes often exhibit higher concentrations of active compounds — a natural advantage that Nepalese producers are now leveraging for international markets.\n\nTraditional knowledge systems, including Ayurveda, Tibetan medicine, and localized folk traditions, have shaped sustainable harvesting practices over millennia. This generational wisdom, combined with modern quality control infrastructure, positions Nepal as a reliable source for pharmaceutical-grade botanical ingredients.',
    author: 'HBN Editorial Team',
    date: '2026-06-15',
    category: 'Industry Insights',
    image: '/images/blog/nepal-herbs.jpg',
    tags: ['Nepal', 'medicinal herbs', 'biodiversity', 'Himalayan herbs'],
  },
  {
    id: '2',
    title: 'The Complete Guide to Himalayan Shilajit: Grades, Purification & Global Demand',
    slug: 'complete-guide-himalayan-shilajit',
    excerpt: 'An in-depth look at Shilajit grades, traditional purification methods, quality standards, and the growing global demand for this Himalayan super-resin.',
    content: 'Shilajit — often described as the "destroyer of weakness" in Ayurvedic texts — is a complex resinous substance exuded from rock layers in the high Himalayas. Its formation is a geological and biological process spanning centuries: plant matter compressed, decomposed, and transformed under extreme pressure and temperature conditions.\n\nUnderstanding Shilajit quality requires familiarity with grading systems. The highest-grade Shilajit is dark brown to black, with a glossy surface, and dissolves completely in water with minimal sediment. Authentic Shilajit has a distinct smoky, earthy aroma and a bitter, slightly astringent taste.\n\nThe global Shilajit market has experienced compound annual growth of approximately 8-10% over the last five years, driven by consumer interest in natural energy, cognitive health, and traditional wellness systems. European and North American markets show particularly strong demand for standardized, laboratory-tested Shilajit products.',
    author: 'HBN Editorial Team',
    date: '2026-05-28',
    category: 'Product Knowledge',
    image: '/images/blog/shilajit-guide.jpg',
    tags: ['Shilajit', 'Himalayan herbs', 'quality guide', 'Ayurveda'],
  },
  {
    id: '3',
    title: 'Sustainable Wildcrafting: Protecting Nepal\'s Botanical Heritage for Future Generations',
    slug: 'sustainable-wildcrafting-nepal-botanical-heritage',
    excerpt: 'Learn how community-managed harvesting protocols and fair-trade partnerships are ensuring the long-term sustainability of Nepal\'s medicinal plant resources.',
    content: 'Wildcrafting — the practice of harvesting plants from their natural habitats — has been a cornerstone of Nepal\'s medicinal herb industry for centuries. However, increasing global demand has brought sustainability concerns to the forefront. Responsible exporters are now implementing community-based management systems that balance commercial use with conservation.\n\nOur approach at Himalayan Botanicals Nepal centers on three pillars: scientific assessment of wild populations, community-managed harvesting quotas, and value-added processing that maximizes returns for harvesters. We work with local communities in Dolpa, Humla, Jumla, and Mustang districts to establish sustainable harvest limits based on annual regeneration surveys.\n\nEthical sourcing also means fair compensation. By eliminating intermediaries and processing closer to the source, we ensure that 60-70% of the export value remains with the harvesting communities — significantly higher than industry averages.',
    author: 'HBN Editorial Team',
    date: '2026-05-10',
    category: 'Sustainability',
    image: '/images/blog/sustainable-wildcrafting.jpg',
    tags: ['sustainability', 'wildcrafting', 'ethical sourcing', 'Nepal communities'],
  },
];

export const exportCountries = [
  { name: 'United States', flag: '🇺🇸', description: 'Premium botanical ingredients for nutraceutical and supplement manufacturers.' },
  { name: 'European Union', flag: '🇪🇺', description: 'EU-certified organic herbs for pharmaceutical and cosmetic industries.' },
  { name: 'United Kingdom', flag: '🇬🇧', description: 'Growing demand for Ayurvedic herbs in the UK wellness market.' },
  { name: 'Australia', flag: '🇦🇺', description: 'TGA-compliant botanical ingredients for complementary medicines.' },
  { name: 'Japan', flag: '🇯🇵', description: 'High-quality Kampo-grade herbs with rigorous testing standards.' },
  { name: 'South Korea', flag: '🇰🇷', description: 'Traditional Korean medicine ingredients with full traceability.' },
  { name: 'Middle East', flag: '🇦🇪', description: 'Premium herbs and spices for traditional and modern applications.' },
];

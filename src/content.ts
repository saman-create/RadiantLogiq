export type Product = {
  id: 'telehealth' | 'pacs' | 'cds' | 'ehr' | 'meds';
  code: string;
  name: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  status?: string;
};

export const siteContent = {
  navigation: [
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  hero: {
    kicker: 'RadiantLogiq',
    headline: 'Clinical reasoning for imaging decisions.',
    description: 'Empowering modern healthcare with deterministic rules engines, transparent data loops, and the most intelligent audit trail—all without compromising PHI.',
    primaryCta: { label: 'Request Demo', href: '/demo' },
    secondaryCta: { label: 'Explore Platform', href: '#products' },
  },
  metrics: [
    { value: '10000+', label: 'Active clinicians' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '5', label: 'Enterprise platforms' },
  ],
  products: [
    {
      id: 'telehealth',
      code: 'RTH',
      name: 'RadiantLogiq TeleHealth',
      description: "Transform your workflow with RadiantLogiq's secure, integrated modules that adapt to your team's needs.",
      features: [
        'End-to-end encrypted virtual visits',
        'Automated compliance logging',
        'Deep EHR integration & data loop',
        'White-labeled patient experience',
      ],
      href: '/products/telehealth',
      cta: 'Explore TeleHealth',
    },
    {
      id: 'pacs',
      code: 'PACS',
      name: 'RadiantLogiq PACS',
      description: 'Advanced imaging review with a zero-footprint web viewer and deterministic image routing.',
      features: [
        'Advanced imaging review',
        'Zero-footprint web viewer',
        'Deterministic image routing',
      ],
      href: '/products/pacs',
      cta: 'Explore PACS',
    },
    {
      id: 'cds',
      code: 'CDS',
      name: 'RadiantLogiq CDS',
      description: 'AUC compliant clinical decision support with a PowerScribe companion app and no PHI storage architecture.',
      features: [
        'AUC compliant clinical decision support',
        'PowerScribe companion app',
        'No PHI storage architecture',
      ],
      href: '/products/cds',
      cta: 'Explore CDS',
    },
    {
      id: 'ehr',
      code: 'EHR',
      name: 'RadiantLogiq EHR',
      description: 'Intelligent clinical notes, seamless interoperability, and custom rules engines.',
      features: [
        'Intelligent clinical notes',
        'Seamless interoperability',
        'Custom rules engines',
      ],
      href: '/products/ehr',
      cta: 'Explore EHR',
    },
    {
      id: 'meds',
      code: 'MEDS',
      name: 'RadiantLogiq MEDS',
      description: 'Next-generation e-prescribing with DoseSpot integration. Secure, fast, and compliant.',
      features: [
        'DoseSpot integration',
        'Secure e-prescribing',
        'Fast and compliant',
      ],
      href: '/products/meds',
      cta: 'Join the Waitlist',
      status: 'Waitlist',
    },
  ] satisfies Product[],
  enterprise: {
    eyebrow: 'Enterprise suite',
    title: 'The Complete Platform Bundle',
    description: 'Unify your entire workflow. Get seamless interoperability between CDS, EHR, and TeleHealth with a single deterministic data loop.',
    href: '/contact?product=bundle',
    cta: 'Request Enterprise Pricing',
    capabilities: [
      'Unified Single Sign-On (SSO)',
      'Priority API Rate Limits',
      'Dedicated Solutions Architect',
      'Custom Deterministic Rules Engine',
      'White-labeled Patient Portals',
      '99.99% Guaranteed Uptime SLA',
      'Full EHR/PACS Interoperability',
      '24/7 Dedicated Priority Support',
    ],
  },
  principles: [
    {
      number: '01',
      title: 'Deterministic Engine',
      description: 'No hallucinations. Our clinical reasoning operates on strictly defined, auditable decision trees, ensuring exact, repeatable, and mathematically sound logic every single time.',
    },
    {
      number: '02',
      title: 'Zero PHI Footprint',
      description: 'We process patient variables strictly in-memory during the encounter. Once the decision is calculated and routed, data immediately ceases to exist on our servers.',
    },
    {
      number: '03',
      title: 'Ironclad Security',
      description: 'Built for federal compliance. With end-to-end encryption, SOC-2 readiness, and advanced anomaly detection, the platform is hardened for the largest health systems.',
    },
    {
      number: '04',
      title: 'Modular Composability',
      description: "Don't pay for what you don't need. Integrate CDS, add E-prescribing later, or embed our telehealth engine—all easily exposed through elegant APIs.",
    },
  ],
  telehealth: {
    eyebrow: 'RadiantLogiq TeleHealth spotlight',
    title: 'The infrastructure for modern virtual care.',
    description: "Don't build your virtual care logic from scratch. RadiantLogiq TeleHealth offers pre-built, compliant intelligence for scale.",
    features: [
      { title: 'Secure Data Loops', description: 'End-to-end encrypted architecture ensures that data stays private and compliant with the toughest standards.' },
      { title: 'Intelligent Workflows', description: 'Automated routing and scheduling designed specifically to reduce an average of 45 seconds per encounter.' },
      { title: 'Mobile First Patient Portal', description: 'Deliver a premium, unified experience for patients whether on iOS, Android, or simple web interfaces.' },
      { title: 'Real-time Waitlist', description: 'Dynamically manage provider availability with our intelligent waitlist queues and notifications.' },
      { title: 'Zero PHI Footprint', description: 'The core engine processes rules deterministically without persisting patient data beyond the encounter context.' },
      { title: 'Identity Verification', description: 'Native integration with leading verification platforms to authenticate patients securely before the visit.' },
    ],
    compatibleEhrs: ['Epic', 'Cerner', 'Athenahealth', 'DrChrono', 'Eligible', 'eClinicalWorks'],
  },
  integrations: [
    'Epic', 'Cerner', 'Meditech', 'DrChrono', 'Athenahealth',
    'eClinicalWorks', 'Allscripts', 'NextGen', 'Greenway', 'Kareo',
    'PowerScribe', 'DoseSpot', 'SureScripts', 'DrFirst', 'Vouched',
    'Stripe', 'Twilio', 'SendGrid', 'Firebase', 'GCP',
  ],
  finalCta: {
    title: 'Ready to scale your clinical logic?',
    description: 'Join leading healthcare organizations using RadiantLogiq to secure, automate, and optimize their toughest decision loops.',
    primary: { label: 'Request Demo', href: '/contact' },
    secondary: { label: 'View Pricing', href: '/pricing' },
  },
  footer: {
    description: 'Clinical reasoning for imaging decisions. The most intelligent audit trail in modern healthcare.',
    products: [
      { label: 'RadiantLogiq CDS', href: '/products/cds' },
      { label: 'RadiantLogiq EHR', href: '/products/ehr' },
      { label: 'RadiantLogiq TeleHealth', href: '/products/telehealth' },
      { label: 'RadiantLogiq PACS', href: '/products/pacs' },
      { label: 'RadiantLogiq MEDS', href: '/products/meds' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Our Partners', href: '/partners' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'HIPAA Compliance', href: '/hipaa' },
      { label: 'Security', href: '/security' },
    ],
  },
} as const;

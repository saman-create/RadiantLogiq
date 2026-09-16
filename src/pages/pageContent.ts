// Transcribed from the corresponding app.radiantlogiq.ai pages on 2026-09-16.
// These are the owner's published statements, not independently verified claims.
export const productDetails = {
  telehealth: {
    description:
      "The infrastructure for modern virtual care. Power your clinics with high-fidelity, secure communications that integrate transparently and securely with our clinical engine.",
    features: [
      "HIPAA Compliant WebRTC Architecture",
      "Multi-party Conferencing Support",
      "Virtual Waiting Rooms & Queues",
      "Screen & Study Sharing",
      "Embedded Intake & Consents",
      "Smart Post-visit Automation",
    ],
    cta: "Request RTH Demo",
  },
  pacs: {
    description:
      "Advanced medical imaging infrastructure. A lightning-fast, zero-footprint web viewer designed specifically for modern clinical collaboration and AI triage.",
    features: [
      "Zero-footprint HTML5 DICOM Viewer",
      "Multi-modal Subspecialty Study Support",
      "Deterministic Image Routing Architecture",
      "Lossless Imaging with Edge Caching",
      "Embedded Diagnostic AI Framework",
      "Deep CDS & EHR Integration",
    ],
    cta: "Request PACS Demo",
  },
  cds: {
    description:
      "The definitive clinical decision support engine. Designed to sit flawlessly alongside PowerScribe to enforce deterministic, auditable decisions for diagnostic imaging.",
    features: [
      "Deterministic Logic Trees without Hallucination",
      "Seamless PowerScribe Embedding",
      "Zero PHI Persistence Architecture",
      "Comprehensive Audit Logs for Compliance",
      "PAMA/AUC Ready Out of the Box",
      "Microsecond Response APIs",
    ],
    cta: "Request CDS Demo",
  },
  ehr: {
    description:
      "The hub for clinical documentation. Transform disjointed data into intelligent narratives, streamlining provider workflows without a steep learning curve.",
    features: [
      "Intelligent Clinical Notes Automation",
      "HL7 / FHIR Native Architecture",
      "Real-Time Data Normalization",
      "Dynamic Templates & Forms",
      "Continuous Syncing Between Modules",
      "Provider-Centric UI",
    ],
    cta: "Request EHR Demo",
  },
};

export const plans = [
  {
    name: "CDS Core",
    description: "Essential decision support for diagnostic imaging groups.",
    price: "$499",
    unit: "/provider/month",
    features: [
      "PAMA/AUC Compliance",
      "PowerScribe companion app",
      "Deterministic Logic Trees",
      "Standard Audit Logs",
      "Email Support",
    ],
    cta: "Get Started",
    href: "/contact?product=cds-core",
  },
  {
    name: "Growth Suite",
    description:
      "For clinics looking to add integrated TeleHealth functionality.",
    price: "$999",
    unit: "/provider/month",
    features: [
      "Everything in CDS Core",
      "RadiantLogiq TeleHealth",
      "White-labeled Patient Portal",
      "Basic EMR Integration",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    href: "/contact?product=growth-suite",
  },
  {
    name: "Enterprise Bundle",
    description: "Full interoperability across CDS, EHR, TeleHealth, and PACS.",
    price: "Custom",
    unit: "pricing",
    features: [
      "Full Platform Access",
      "Zero-footprint web PACS viewer",
      "SSO & Custom Interoperability",
      "Dedicated Solutions Architect",
      "24/7 Phone Support & 99.99% SLA",
    ],
    cta: "Contact Sales",
    href: "/contact?product=bundle",
  },
];

export const team = [
  {
    name: "Dr. Olalesi Osunsade, MD, DABR",
    title: 'DR. "O" • DIAGNOSTIC & INTERVENTIONAL RADIOLOGIST',
    image: "dr-osunsade.jpg",
    bio: "Dual board-certified Diagnostic and Interventional Radiologist with extensive experience across academic medical centers, community hospitals, and teleradiology. Born in Washington, DC, Dr. Osunsade brings a unique international perspective, having lived in the Philippines, Tanzania, Kenya, and Nigeria before returning to the U.S. for undergraduate/medical school and medical training.",
    education: [
      ["MD", "George Washington Univ. SOM (2012)"],
      ["Residency", "St. Vincent’s Medical Center (Chief Resident)"],
      ["Fellowship (IR)", "Henry Ford Hospital"],
    ],
    licenses: [
      "FL, MD, CA, NY, MI, DC",
      "OH, WI, TX",
      "Enrolled in IMLC (Interstate Compact)",
    ],
    languages:
      "English (Native), French (Proficient), Yoruba & Swahili (Conversational)",
    recognition: "TOP DOCTOR Magazine (2017, 2022)",
  },
  {
    name: "Alvaro Berrios, MS, FNP-BC",
    title: "CLINICAL OPERATIONS DIRECTOR • NURSE PRACTITIONER",
    image: "alvaro-berrios.jpg",
    bio: "Board-certified Family Nurse Practitioner with a focus on streamlining virtual clinical workflows and enhancing patient access. Alvaro leads the clinical operations strategy, ensuring that technology serves as a bridge for high-quality, efficient medical delivery in the telehealth space.",
    education: [
      ["MS", "Master of Science in Nursing"],
      ["Certification", "Family Nurse Practitioner (FNP-BC)"],
      ["Focus", "Clinical Operations & Virtual Care"],
    ],
    licenses: [
      "FL, TX, NY, CA",
      "Board Certified FNP-BC",
      "Multi-State Compact Licensed",
    ],
    languages: "English (Native), Spanish (Native)",
    recognition: "Clinical Leadership Award (2021)",
  },
];

export const vision = [
  "We believe exceptional care is built on strong collaboration. That's why we proudly partner with a curated network of accredited compounding pharmacies. Our partners, including Strive Pharmacy — LegitScript-certified and NABP-accredited — are held to the gold standard in compounding pharmacy compliance, so every prescription is dispensed with the highest level of safety and quality.",
  "Our licensed providers exclusively review and approve all prescriptions before securely transmitting them to these accredited pharmacies, ensuring you receive the highest quality, most reliable medications when appropriate for your personalized treatment plan. Together, these partnerships help us deliver safe, coordinated, and compassionate virtual care you can trust.",
  "Built by a physician-led team, RadiantLogiq is designed to improve efficiency and scalability in modern healthcare delivery.",
];

export const partners = [
  {
    name: "Strive Pharmacy",
    image: "strive-logo.png",
    description:
      "LegitScript-certified and NABP-accredited compounding pharmacy partner held to the gold standard in compliance.",
    href: "https://www.strivepharmacy.com/",
  },
  {
    name: "DoseSpot",
    image: "dosespot-logo.png",
    description:
      "Integrated e-prescription platform that enables clinicians to electronically write and transmit prescriptions to pharmacies nationwide.",
    href: "https://dosespot.com/",
  },
  {
    name: "Patriotic Virtual Telehealth",
    image: "patriotic-logo.png",
    description:
      "Exclusive clinical operations partner providing quality virtual care across the United States.",
    href: "https://patriotictelehealth.com",
  },
];

export const posts = [
  {
    title: "The Future of Teleradiology: AI-Driven Decision Support",
    category: "Innovation",
    description:
      "How deterministic logic trees and AI inferencing are revolutionizing the way radiologists make critical decisions at the point of care.",
    date: "May 24, 2024",
    author: "Dr. Olalesi Osunsade",
    image: "photo-1576091160550-217359f42f8c",
  },
  {
    title: "Ensuring HIPAA Compliance in the Age of Teleradiology",
    category: "Security",
    description:
      "The ultimate guide to maintaining rock-solid compliance when using zero-footprint web applications for radiology operations.",
    date: "May 18, 2024",
    author: "Compliance Team",
    image: "photo-1550751827-4bd374c3f58b",
  },
  {
    title: "Optimizing Radiologist Workflows with PowerScribe Companions",
    category: "Workflow",
    description:
      "Deep-diving into the RadiantLogiq architecture and how it eliminates redundant documentation and reduces clinical burnout.",
    date: "April 30, 2024",
    author: "Product Team",
    image: "photo-1516542077369-bc9345bc9714",
  },
];

export const legalContent = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      [
        "Data We Collect",
        "RadiantLogiq collects standard administrative and account-related data, such as your name, organizational email, and billing information. We do NOT store protected health information (PHI) within our marketing or decision-support companion web applications.",
      ],
      [
        "How We Use Your Information",
        "We use your data to provide our services, maintain your account, process billing, and send occasional updates about the RadiantLogiq platform. We do not sell your personal data to third parties.",
      ],
      [
        "Data Security",
        "We implement industry-standard technical and organizational measures to protect your data. This includes encryption in transit (SSL/TLS) and at rest, alongside periodic SOC 2 Type II audits.",
      ],
      [
        "Contact Privacy Officer",
        "If you have any questions about this Privacy Policy, please contact us at:",
      ],
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      [
        "Agreement to Terms",
        "By accessing or using the RadiantLogiq platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.",
      ],
      [
        "Use of Service",
        "RadiantLogiq provides clinical decision support tools and companions for medical professionals. You are responsible for ensuring that your use of the platform complies with all applicable healthcare laws and regulations.",
      ],
      [
        "User Responsibilities",
        "You agree not to input any Protected Health Information (PHI) into unauthorized areas of the platform. You are responsible for maintaining the confidentiality of your account credentials.",
      ],
    ],
  },
};

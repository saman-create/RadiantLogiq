export const routeTitles: Record<string, string> = {
  "/": "Clinical reasoning for imaging decisions",
  "/pricing": "Pricing",
  "/about": "About",
  "/partners": "Partners",
  "/blog": "Blog",
  "/contact": "Contact",
  "/demo": "Request a demo",
  "/login": "Log in",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
  "/hipaa": "HIPAA Compliance",
  "/security": "Security",
  "/products/telehealth": "RadiantLogiq TeleHealth",
  "/products/pacs": "RadiantLogiq PACS",
  "/products/cds": "RadiantLogiq CDS",
  "/products/ehr": "RadiantLogiq EHR",
  "/products/meds": "RadiantLogiq MEDS",
};

export function normalizePath(path: string) {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export function isKnownRoute(path: string) {
  return Object.hasOwn(routeTitles, normalizePath(path));
}

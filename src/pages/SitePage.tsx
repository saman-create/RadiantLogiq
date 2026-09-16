import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PricingPage, AboutPage, PartnersPage, BlogPage } from "./CompanyPages";
import { ContactPage, LoginPage } from "./ContactPage";
import { ProductPage } from "./ProductPage";
import { LegalPage, HipaaPage, SecurityPage } from "./TrustPages";
import { NotFound } from "./NotFound";
import { isKnownRoute } from "../routes";
import "./pages.css";

export function SitePage({ path }: { path: string }) {
  if (!isKnownRoute(path)) return <NotFound />;
  const pages: Record<string, React.ReactNode> = {
    "/pricing": <PricingPage />,
    "/about": <AboutPage />,
    "/partners": <PartnersPage />,
    "/blog": <BlogPage />,
    "/contact": <ContactPage />,
    "/demo": <ContactPage demo />,
    "/login": <LoginPage />,
    "/privacy": <LegalPage kind="privacy" />,
    "/terms": <LegalPage kind="terms" />,
    "/hipaa": <HipaaPage />,
    "/security": <SecurityPage />,
  };
  return (
    <div className="inner-experience">
      <a className="skip-content" href="#page-content">
        Skip to content
      </a>
      <Header />
      <main id="page-content" className="inner-main">
        <div className="page-container">
          {path.startsWith("/products/") ? (
            <ProductPage id={path.slice(10)} />
          ) : (
            pages[path]
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

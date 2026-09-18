import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

describe("site routes", () => {
  it.each(["/random", "/products/unknown", "/about/extra", "/blog/unknown"])(
    "shows not found rather than the landing page at %s",
    (path) => {
      window.history.replaceState({}, "", path);
      render(<App />);
      expect(
        screen.getByRole("heading", { name: "Page not found." }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("heading", {
          name: "Clinical reasoning for imaging decisions.",
        }),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /Back to homepage/ }),
      ).toHaveAttribute("href", "/");
      expect(screen.getByRole("img", { name: "RadiantLogiq" })).toHaveAttribute(
        "src",
        "/brand/riq-logo-dark.png",
      );
    },
  );
  it.each([
    ["/pricing", "Simple, transparent pricing."],
    ["/pricing/?source=test", "Simple, transparent pricing."],
    ["/about", "Built by a physician-led team."],
    ["/partners", "Strategic Partnerships"],
    ["/blog", "The Radiant Logiq Blog"],
    ["/blog/future-of-teleradiology", "The Future of Teleradiology: AI-Driven Decision Support"],
    ["/blog/trust-by-design", "Trust by Design: Protecting Clinical Data in an AI-Enabled Health OS"],
    ["/blog/connected-radiology-workflow/", "From Worklist to Insight: Designing a Connected Radiology Workflow"],
    [
      "/contact?product=bundle",
      "Let’s build the future of clinical operations.",
    ],
    ["/demo", "Experience the Future of Clinical Reasoning"],
    ["/login", "Welcome back."],
    ["/privacy", "Privacy Policy"],
    ["/terms", "Terms of Service"],
    ["/hipaa", "HIPAA Compliance"],
    ["/security", "Enterprise-Grade Security"],
    ["/products/cds", "RadiantLogiq CDS"],
    ["/products/ehr", "RadiantLogiq EHR"],
    ["/products/pacs", "RadiantLogiq PACS"],
    ["/products/telehealth", "RadiantLogiq TeleHealth"],
    ["/products/meds", "RadiantLogiq MEDS"],
  ])("renders the correct page at %s", (path, title) => {
    window.history.replaceState({}, "", path);
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(title);
    expect(
      within(
        screen.getByRole("navigation", { name: "Primary navigation" }),
      ).getByRole("link", { name: "Products" }),
    ).toHaveAttribute("href", "/#products");
    expect(screen.getByRole("banner")).toHaveClass("is-after-hero");
  });
});

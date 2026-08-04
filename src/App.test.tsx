import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("RadiantLogiq application shell", () => {
  it("renders one clear page heading and the primary demo action", () => {
    render(<App />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Clinical reasoning for imaging decisions.",
    );
    expect(
      screen
        .getAllByRole("link", { name: "Request Demo" })
        .some((link) => link.getAttribute("href") === "/demo"),
    ).toBe(true);
  });

  it("keeps every desktop navigation destination reachable", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toHaveClass("is-over-hero");
    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    for (const [label, href] of [
      ["Products", "#products"],
      ["Pricing", "/pricing"],
      ["About", "/about"],
      ["Partners", "/partners"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
      ["Log in", "/login"],
      ["Request Demo", "/demo"],
    ]) {
      expect(
        within(navigation).getByRole("link", { name: label }),
      ).toHaveAttribute("href", href);
    }
  });

  it("opens and closes the mobile navigation accessibly", async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("dialog", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();

    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(
      screen.getByRole("dialog", { name: "Mobile navigation" }),
    ).toHaveAttribute("aria-modal", "true");
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("dialog", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  });

  it("preserves all legal destinations in the footer", () => {
    render(<App />);
    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByRole("link", { name: "Privacy Policy" }),
    ).toHaveAttribute("href", "/privacy");
    expect(
      within(footer).getByRole("link", { name: "Terms of Service" }),
    ).toHaveAttribute("href", "/terms");
    expect(
      within(footer).getByRole("link", { name: "HIPAA Compliance" }),
    ).toHaveAttribute("href", "/hipaa");
    expect(
      within(footer).getByRole("link", { name: "Security" }),
    ).toHaveAttribute("href", "/security");
  });

  it("uses the supplied RadiantLogiq logo in the shared wordmarks", () => {
    render(<App />);

    const homeLinks = screen.getAllByRole("link", {
      name: "RadiantLogiq home",
    });
    expect(homeLinks).toHaveLength(2);
    for (const link of homeLinks) {
      const image = link.querySelector("img");
      expect(image).toHaveAttribute("src", "/brand/riq-logo.jpg");
      expect(image?.parentElement).toBe(link);
    }
  });

  it("condenses the navbar into a glass surface after scrolling within the hero", async () => {
    render(<App />);
    const hero = screen.getByRole("region", {
      name: "RadiantLogiq immersive hero",
    });

    Object.defineProperty(hero, "offsetTop", { configurable: true, value: 8 });
    Object.defineProperty(hero, "offsetHeight", {
      configurable: true,
      value: 900,
    });
    Object.defineProperty(window, "scrollY", { configurable: true, value: 64 });
    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      expect(screen.getByRole("banner")).toHaveClass(
        "is-over-hero",
        "is-hero-scrolled",
      );
    });
  });

  it("keeps the compact header spacing after the hero has been scrolled past", async () => {
    render(<App />);
    const hero = screen.getByRole("region", {
      name: "RadiantLogiq immersive hero",
    });

    Object.defineProperty(hero, "offsetTop", { configurable: true, value: 8 });
    Object.defineProperty(hero, "offsetHeight", {
      configurable: true,
      value: 900,
    });
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 920,
    });
    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      expect(screen.getByRole("banner")).toHaveClass(
        "is-after-hero",
        "is-hero-scrolled",
      );
    });
  });

  it("uses the immersive centered hero without workflow-detail panels", () => {
    render(<App />);

    const experience = document.querySelector(".landing-experience");
    expect(experience).toHaveAttribute("data-delight-version", "after");
    expect(experience).toHaveAttribute("data-motion-version", "after");
    expect(experience).toHaveAttribute("data-motion-pace", "balanced");
    expect(experience).toHaveAttribute("data-hero-variant", "prism");
    expect(
      screen.getByRole("region", { name: "RadiantLogiq immersive hero" }),
    ).toBeVisible();
    expect(screen.getByTestId("color-bends-background")).toBeInTheDocument();
    expect(document.querySelector(".prism-plane")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Clinical logic workspace"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Rules engine")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("group", { name: "Choose hero design" }),
    ).not.toBeInTheDocument();
  });
});

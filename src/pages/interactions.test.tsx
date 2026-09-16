import { afterEach, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactPage, LoginPage } from "./ContactPage";
import { AboutPage } from "./CompanyPages";

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

it("switches the full team biography rather than only the selected label", async () => {
  render(<AboutPage />);
  expect(screen.getByRole("img")).toHaveAttribute("src", "/team/dr-osunsade.jpg");
  await userEvent.click(
    screen.getByRole("button", { name: "Alvaro Berrios, MS, FNP-BC" }),
  );
  expect(
    screen.getByText("English (Native), Spanish (Native)"),
  ).toBeInTheDocument();
  expect(screen.getByText("Master of Science in Nursing")).toBeInTheDocument();
  expect(screen.queryByText("Henry Ford Hospital")).not.toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "/team/alvaro-berrios.jpg");
});

it("retains plan selection and requires consent before creating an email draft", async () => {
  window.history.replaceState({}, "", "/contact?product=growth-suite");
  render(<ContactPage />);
  expect(screen.getByLabelText("Product of Interest")).toHaveValue(
    "telehealth",
  );
  const user = userEvent.setup();
  await user.type(screen.getByLabelText("Full Name"), "Test Person");
  await user.type(screen.getByLabelText("Work Email"), "test@example.com");
  await user.type(screen.getByLabelText("Organization"), "Test Organization");
  await user.type(screen.getByLabelText("Role / Job Title"), "Administrator");
  await user.click(
    screen.getByRole("button", { name: "Prepare email request" }),
  );
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
  await user.click(screen.getByRole("checkbox"));
  await user.click(
    screen.getByRole("button", { name: "Prepare email request" }),
  );
  expect(screen.getByRole("status")).toHaveTextContent("not yet sent");
  const href = screen
    .getByRole("link", { name: "Open email app to send request" })
    .getAttribute("href")!;
  expect(decodeURIComponent(href)).toContain("Product: telehealth");
  expect(decodeURIComponent(href)).toContain("Original interest: growth-suite");
  expect(decodeURIComponent(href)).toContain("test@example.com");
  await user.type(screen.getByLabelText("Full Name"), " Changed");
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
});

it("uses the existing authentication origin without collecting credentials locally", () => {
  render(<LoginPage />);
  expect(
    screen.getByRole("link", { name: /Continue to Log in/ }),
  ).toHaveAttribute("href", "https://app.radiantlogiq.ai/login");
  expect(screen.queryByLabelText("Password")).not.toBeInTheDocument();
});

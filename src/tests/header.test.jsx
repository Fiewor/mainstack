import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../components/Header";

describe("Header component", () => {
  it("should display images", () => {
    render(<Header />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
    images.map((image) => {
      expect(image).toBeInTheDocument();
    });
  });

  it("should display logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("should display icons", () => {
    render(<Header />);
    const icons = screen.getAllByAltText(/(\w+)\sicon/i);
    expect(icons.length).toBeGreaterThan(0);
    icons.map((icon) => {
      expect(icon).toBeInTheDocument();
    });
  });

  it("should display username", () => {
    render(<Header />);
    const username = screen.getByText("OJ");
    expect(username).toBeInTheDocument();
  });
});

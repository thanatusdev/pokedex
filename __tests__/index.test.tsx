/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Home", () => {
  it("renders a heading", async () => {
    // Server side component
    render(await Home({ searchParams: { search: "pikachu" } }));

    const heading = screen.getByTestId("pokedex");

    expect(heading).toBeInTheDocument();
  });
});

import ChatBoard from "./chat-board";
import { getAllByAltText, getAllByText, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("Renders chat board", () => {
  const {
    container,
    getByText,
    getAllByText,
    getByAltText,
    getAllByAltText,
  } = render(<ChatBoard />);
  expect(getAllByAltText("sender")).toBeTruthy();
  expect(getByText("# General")).toBeTruthy();
});

import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  test.skip("should render", () => {
    render(<App />);
    expect(screen.getByText("Hello World!")).toBeTruthy();
  });
});

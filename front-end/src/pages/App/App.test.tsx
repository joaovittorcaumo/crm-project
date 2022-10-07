import React from "react";
import { render } from "@testing-library/react";
import App from ".";
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

import { render, screen } from "@testing-library/react";
import App from "../../App";
import Home from "./Home";

test("header is in document and says roll for blank", async () => {
  render(<App />);
  const header = screen.getByText(/roll for blank/i);
  expect(header).toBeInTheDocument();
});

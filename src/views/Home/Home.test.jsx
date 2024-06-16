import { render, screen } from "@testing-library/react";
import App from "../../App";

test("header is in document", async () => {
  render(<App />);
  const header = screen.getByText(/roll for blank/i);
  expect(header).toBeInTheDocument();
});

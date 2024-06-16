import { render, screen } from "@testing-library/react";
import App from "../../App";
import Home from "../Home/Home";
import ListItems from "./ListItems";

test("add to things button and input box is in document", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /add to list/i });
  expect(button).toBeInTheDocument();

  const inputBox = screen.getByRole("textbox");
  expect(inputBox).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import App from "../../App";
import Home from "../Home/Home";
import DiceView from "./DiceView";

test("dice button is in document", async () => {
  render(<DiceView />);
  const button = screen.getByRole("button", { name: /click to roll/i });
  expect(button).toBeInTheDocument();
});

test("list instructions text appears before dice button", async () => {
  render(<App />);
  const text = screen.getByText(/please set up four things on your list/i);
  expect(text).toBeInTheDocument();
});

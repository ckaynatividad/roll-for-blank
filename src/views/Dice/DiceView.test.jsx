import { render, screen } from "@testing-library/react";
import App from "../../App";
import Home from "../Home/Home";
import DiceView from "./DiceView";

export const testList = [
  {
    id: 1,
    description: "Blankity",
  },
  {
    id: 2,
    description: "blank",
  },
  {
    id: 3,
    description: "blank",
  },
  {
    id: 4,
    description: "blah",
  },
];

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

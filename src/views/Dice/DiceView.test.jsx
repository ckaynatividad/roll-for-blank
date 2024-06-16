import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
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

test("dice button shows up after four list items are added", async () => {
  render(<App />);
  const inputBox = screen.getByRole("textbox");
  userEvent.type(inputBox, "blankity");

  const button = screen.getByRole("button", { name: /add to list/i });
  await userEvent.click(button);

  userEvent.type(inputBox, "blank");
  await userEvent.click(button);

  userEvent.type(inputBox, "blankity");
  await userEvent.click(button);

  userEvent.type(inputBox, "blankity");
  await userEvent.click(button);

  const diceButton = screen.getByRole("button", { name: /click to roll/i });
  expect(diceButton).toBeInTheDocument();
});

test("dice button is functional and result text shows", async () => {
  render(<App />);
  const inputBox = screen.getByRole("textbox");
  userEvent.type(inputBox, "blankity");

  const button = screen.getByRole("button", { name: /add to list/i });
  await userEvent.click(button);

  userEvent.type(inputBox, "blank");
  await userEvent.click(button);

  userEvent.type(inputBox, "blankity");
  await userEvent.click(button);

  userEvent.type(inputBox, "blankity");
  await userEvent.click(button);
  const diceButton = screen.getByRole("button", { name: /click to roll/i });
  await userEvent.click(diceButton);

  const resultText = screen.getByText(/the dice roll was:/i);
  expect(resultText).toBeInTheDocument();
});

test("roll again button is functional", async () => {
  render(<App />);
  const inputBox = screen.getByRole("textbox");
  userEvent.type(inputBox, "blankity");

  const button = screen.getByRole("button", { name: /add to list/i });
  await userEvent.click(button);

  userEvent.type(inputBox, "blank");
  await userEvent.click(button);

  userEvent.type(inputBox, "blankity");
  await userEvent.click(button);

  userEvent.type(inputBox, "blankity");
  await userEvent.click(button);
  const diceButton = screen.getByRole("button", { name: /click to roll/i });
  await userEvent.click(diceButton);

  const rollAgainButton = screen.getByRole("button", { name: /roll again?/i });
  expect(rollAgainButton).toBeInTheDocument();
  expect(diceButton).not.toBeInTheDocument();

  await userEvent.click(rollAgainButton);
  expect(screen.getByText(/Click to roll!/i)).toBeInTheDocument();
});

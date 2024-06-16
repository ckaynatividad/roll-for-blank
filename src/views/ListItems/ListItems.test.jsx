import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("add to things button and input box is in document", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /add to list/i });
  expect(button).toBeInTheDocument();

  const inputBox = screen.getByRole("textbox");
  expect(inputBox).toBeInTheDocument();
});

test("list item length is 4 and add button is no longer in document", async () => {
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

  const list = screen.getAllByRole("listitem");
  expect(list).toHaveLength(4);
  expect(button).not.toBeInTheDocument();
});

test("list item can be deleted", async () => {
  render(<App />);
  const inputBox = screen.getByRole("textbox");
  userEvent.type(inputBox, "blankity");

  const addButton = screen.getByRole("button", { name: /add to list/i });
  await userEvent.click(addButton);

  const itemText = screen.getByText("blankity");
  expect(itemText).toBeInTheDocument();

  const deleteButton = screen.getByRole("button", { name: /x/i });
  expect(deleteButton).toBeInTheDocument();

  await userEvent.click(deleteButton);
  expect(itemText).not.toBeInTheDocument();
});

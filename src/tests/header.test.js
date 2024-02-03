import React from "react";
import { render, screen,waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect"; // for extended jest-dom matchers
import { Header } from "../todo/components/header"

const mockDispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders header component", () => {
  render(<Header dispatch={mockDispatch} />);

  expect(screen.getByTestId("header")).toBeInTheDocument();

  expect(screen.getByText("todos")).toBeInTheDocument();

  const inputElement = screen.getByLabelText("New Todo Input");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("placeholder", "What needs to be done?");
  expect(inputElement).toHaveAttribute("id", "todo-input");
});

test("dispatches ADD_ITEM action on Enter key press", async () => {
  render(<Header dispatch={mockDispatch} />);
  const inputElement = screen.getByLabelText("New Todo Input");

  userEvent.type(inputElement, "New Todo Item{enter}");

  await waitFor(() => {
    expect(mockDispatch).toHaveBeenCalledWith({
      "payload": {"title": "New Todo Item"}, "type": "ADD_ITEM"
    });
  });
});
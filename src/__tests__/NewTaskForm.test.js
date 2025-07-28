import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();

  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  const input = screen.getByPlaceholderText(/new task details/i);
  const select = screen.getByLabelText(/category/i);
  const submitButton = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: "Do laundry" } });
  fireEvent.change(select, { target: { value: "Misc" } });
  fireEvent.click(submitButton);

  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Do laundry",
    category: "Misc",
  });
});

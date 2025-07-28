import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text", () => {
  render(
    <Task
      text="Learn React"
      category="Code"
      onDeleteTask={() => {}}
    />
  );
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

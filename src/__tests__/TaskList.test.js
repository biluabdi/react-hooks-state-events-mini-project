import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

const TASKS = [
  { text: "Buy groceries", category: "Food" },
  { text: "Finish project", category: "Work" },
];

test("renders a Task component for each task", () => {
  render(
    <TaskList
      tasks={TASKS}
      selectedCategory="All"
      onDeleteTask={() => {}}
    />
  );

  expect(screen.getByText("Buy groceries")).toBeInTheDocument();
  expect(screen.getByText("Finish project")).toBeInTheDocument();
});

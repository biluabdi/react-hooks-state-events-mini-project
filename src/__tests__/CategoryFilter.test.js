import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  const mockSetCategory = jest.fn();

  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={mockSetCategory} />);

  CATEGORIES.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test("calls onSelectCategory when a button is clicked", () => {
  const mockSetCategory = jest.fn();

  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={mockSetCategory} />);

  const foodButton = screen.getByText("Food");
  fireEvent.click(foodButton);

  expect(mockSetCategory).toHaveBeenCalledWith("Food");
});

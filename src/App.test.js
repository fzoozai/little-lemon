import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";

test("renders BookingForm heading", () => {
  render(
    <Router>
      <BookingForm />
    </Router>
  );
  const headingElement = screen.getByText(/Book Now/i);
  expect(headingElement).toBeInTheDocument();
});

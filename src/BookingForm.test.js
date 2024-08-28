import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import * as Yup from "yup";

describe("HTML 5 Validation", () => {
  test("renders date input with required attribute", () => {
    render(
      <Router>
        <BookingForm />
      </Router>
    );
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
  });

  test("renders guests input with min and max attributes", () => {
    render(
      <Router>
        <BookingForm />
      </Router>
    );
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("renders time select with required attribute", () => {
    render(
      <Router>
        <BookingForm availableTimes={[]} />
      </Router>
    );
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toBeRequired();
  });
});

describe("Client Validation", () => {
  const validationSchema = Yup.object({
    date: Yup.date()
      .min(
        new Date(new Date().setHours(0, 0, 0, 0)), // Ensure the date is not in the past
        "Date cannot be in the past"
      )
      .required("Required"),
    guests: Yup.number()
      .min(1, "Minimum 1 guest")
      .max(10, "Maximum 10 guests")
      .required("Required"),
  });

  test("validates date as valid if in the future", async () => {
    const validDate = new Date();
    validDate.setDate(validDate.getDate() + 1); // Set to tomorrow
    const formattedDate = validDate.toISOString().split("T")[0]; // Format to YYYY-MM-DD

    const isValid = await validationSchema.isValid({
      date: formattedDate,
      guests: 1,
    });
    expect(isValid).toBe(true);
  });

  test("validates date as invalid if in the past", async () => {
    const invalidDate = new Date();
    invalidDate.setDate(invalidDate.getDate() - 1); // Set to yesterday
    const formattedDate = invalidDate.toISOString().split("T")[0]; // Format to YYYY-MM-DD

    const isValid = await validationSchema.isValid({
      date: formattedDate,
    });
    expect(isValid).toBe(false);
  });

  describe("guests", () => {
    const validDate = new Date();
    validDate.setDate(validDate.getDate() + 1); // Set to tomorrow
    const formattedDate = validDate.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    test("validates guests as valid if within range", async () => {
      const isValid = await validationSchema.isValid({
        date: formattedDate,
        guests: 5,
      });
      expect(isValid).toBe(true);
    });

    test("validates guests as invalid if out of range", async () => {
      const isInvalid = await validationSchema.isValid({
        date: formattedDate,
        guests: 11,
      });
      expect(isInvalid).toBe(false);
    });
  });
});

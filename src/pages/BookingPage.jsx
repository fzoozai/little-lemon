import React from "react";
import BookingForm from "../components/BookingForm";
import "../BookingPage.css";

const BookingPage = ({ availableTimes, onDateChange }) => {
  return (
    <div className="container">
      <h1>Book Your Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
      />
    </div>
  );
};

export default BookingPage;

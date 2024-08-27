import React, { useState } from "react";
import "../BookingForm.css";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ onDateChange = () => {}, availableTimes = [] }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  // Correctly call useNavigate at the top level of the component
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "date") {
      onDateChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    // Use the imported API function correctly
    if (window.submitAPI(formData)) {
      navigate("/confirmed"); // Correctly navigate upon successful submission
    } else {
      console.log("Submission failed");
    }
  };

  return (
    <div className="container">
      <form
        className="bookingForm"
        onSubmit={handleSubmit}
        aria-labelledby="booking-form-title"
      >
        <h2 id="booking-form-title">Book Now</h2>
        <label htmlFor="res-date">Choose date</label>
        <input
          name="date"
          type="date"
          id="res-date"
          value={formData.date}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="time"
          id="res-time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
          aria-label="Select reservation time"
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          aria-required="true"
          aria-label="Number of guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          aria-required="true"
          aria-label="Select occasion"
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          aria-label="Submit reservation form"
        />
      </form>
    </div>
  );
};

export default BookingForm;

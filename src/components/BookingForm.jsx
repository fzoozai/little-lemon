import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import { useNavigate } from "react-router-dom";
import "../BookingForm.css";

const BookingForm = ({ onDateChange = () => {}, availableTimes = [] }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    date: Yup.date()
      .min(
        new Date(new Date().setHours(0, 0, 0, 0)), // Ensure the date is not in the past
        "Date cannot be in the past"
      )
      .required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number()
      .min(1, "Minimum 1 guest")
      .max(10, "Maximum 10 guests")
      .required("Required"),
    occasion: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (window.submitAPI(values)) {
        navigate("/confirmed");
      } else {
        console.log("Submission failed");
      }
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div className="container">
      <form
        className="bookingForm"
        onSubmit={formik.handleSubmit}
        aria-labelledby="booking-form-title"
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          name="date"
          type="date"
          id="res-date"
          value={formik.values.date}
          onChange={(e) => {
            formik.handleChange(e);
            onDateChange(e.target.value);
          }}
          onBlur={formik.handleBlur}
          required
          aria-required="true"
        />
        {formik.errors.date ? (
          <div className="error">{formik.errors.date}</div>
        ) : null}

        <label htmlFor="res-time">Choose time</label>
        <select
          name="time"
          id="res-time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        {formik.touched.time && formik.errors.time ? (
          <div className="error">{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          aria-required="true"
          aria-label="Number of guests"
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div className="error">{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          aria-required="true"
          aria-label="Select occasion"
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className="error">{formik.errors.occasion}</div>
        ) : null}

        <input
          type="submit"
          value="Make Your reservation"
          aria-label="Submit reservation form"
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </div>
  );
};

export default BookingForm;

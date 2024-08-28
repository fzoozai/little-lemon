import React from "react";
import "../Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      text: "The Lemon Chicken is to die for! Highly recommend this place.",
    },
    {
      name: "John Smith",
      text: "A great dining experience. The Lemonade was refreshing and the Lemon Tart was divine.",
    },
    {
      name: "Emily Johnson",
      text: "Exceptional service and delicious food. The Lemon Tart is my favorite!",
    },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

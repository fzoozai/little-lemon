import React from "react";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import MealCards from "../components/MealCards";
import "../HomePage.css";

const HomePage = () => {
  return (
    <div>
      <main className="container">
        <h1>Little Lemon Restaurant</h1>
        <MealCards />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage;

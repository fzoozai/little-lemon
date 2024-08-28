import React from "react";
import "../MealCards.css";
import fish from "../assets/fish.jpg";
import pasta from "../assets/pasta.jpg";
import salad from "../assets/salad.jpg";

const MealCards = () => {
  const meals = [
    {
      name: "Dorade",
      description: "A succulent fish dish with a tangy lemon sauce.",
      price: "$12.99",
      img: fish,
    },
    {
      name: "Pasta",
      description: "Freshly homemade pasta with a hint of mint.",
      price: "$3.99",
      img: pasta,
    },
    {
      name: "Salad",
      description: "A delicious salad with balsamic sauce.",
      price: "$5.99",
      img: salad,
    },
  ];

  return (
    <div className="meal-cards-container">
      {meals.map((meal, index) => (
        <div key={index} className="meal-card">
          <div className="meal-card-content">
            <h2 className="meal-name">{meal.name}</h2>
            <img src={meal.img} width={200} height={200}></img>
            <p className="meal-description">{meal.description}</p>
            <p className="meal-price">{meal.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealCards;

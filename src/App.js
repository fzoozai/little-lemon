import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import { useReducer } from "react";

const App = () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        // You can add logic here to return different times based on the action.date
        return ["18:00", "19:00", "20:00"];
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <Router>
      <nav></nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <BookingForm
                availableTimes={availableTimes}
                onDateChange={handleDateChange}
              />
            }
          />
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
};

export default App;

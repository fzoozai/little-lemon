import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "./reducerFunctions";

const App = () => {
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
      <div className="app-container">
        <nav className="nav"></nav>
        <main className="main">
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
        <footer className="footer"></footer>
      </div>
    </Router>
  );
};

export default App;

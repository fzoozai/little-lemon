import { useReducer } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./reducerFunctions";

const App = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(selectedDate) });
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

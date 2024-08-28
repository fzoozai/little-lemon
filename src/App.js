import { useReducer } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
        <Nav />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/booking"
              element={
                <BookingPage
                  availableTimes={availableTimes}
                  onDateChange={handleDateChange}
                />
              }
            />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

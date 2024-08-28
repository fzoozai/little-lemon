import React from "react";
import "../Nav.css";
import logo from "../assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img
          src={logo}
          alt="Little Lemons Restaurant Logo"
          className="logo-image"
          width={200}
        />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/booking" className="nav-link">
            Booking
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

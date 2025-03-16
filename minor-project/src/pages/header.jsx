import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      
      
      <nav className="navbar">
        <div className="logo">TravelEase</div>
        <ul className="nav-links">
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Experiences</a></li>
          <li><a href="#">Inspirations</a></li>
          <li><a href="#">Trip Finder</a></li>
          <li><a href="#">Most Popular</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

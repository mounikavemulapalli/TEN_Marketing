import React, { useState } from "react";
import LOGOSVG from "./files/LOGOSVG"; // Adjust the path as necessary
import "./Home.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll"); // For html element
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll"); // For html element
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  };

  return (
    <div className='home-container'>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && <div className='overlay' onClick={closeMenu} />}

      {/* Hamburger Menu for Mobile */}
      <button className='hamburger' onClick={toggleMenu}>
        ☰
      </button>

      <div className='logo1'>
        <LOGOSVG />
        <div className='logo-text'>
          <span className='the-text'>The </span>
          <span className='Entre-text'>Entrepreneurship</span>
          <span className='network-text'>Network</span>
        </div>
      </div>

      <nav className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {isMobileMenuOpen && (
            <button className='close-btn' onClick={closeMenu}>
              ×
            </button>
          )}
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/clients'>Clients</a>
          </li>
          <li>
            <a href='/services'>Services</a>
          </li>
          <li>
            <a href='/partners'>Partners</a>
          </li>
          <li>
            <a href='/join-us'>Join Us</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>

      

      <div className='triangle-down' />
    </div>
  );
};

export default Navbar;

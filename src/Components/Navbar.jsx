import React from "react";
import LOGOSVG from "./files/LOGOSVG"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <div className='home-container'>
      <div className='logo'>
        <LOGOSVG />
        <div className='logo-text'>
          <span className='the-text'>The </span>
          <span className='Entre-text'>Entrepreneurship</span>
          <span className='network-text'>Network</span>
        </div>{" "}
        {/* Added text next to the logo */}
      </div>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Clients</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Partners</a>
          </li>
          <li>
            <a href='#'>Join Us</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>

      <p className='description-text'>
        Something about the website and the purpose of
        <br />
        its creation.
        <br />
        The founder's ambition to change the world of
        <br />
        Marketing.
      </p>

      <div className='triangle-down' />
    </div>
  );
};

export default Navbar;

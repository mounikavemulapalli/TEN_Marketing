import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about-section">
          <h2>About Us</h2>
          <p>
            Information about what the company is about and how it came to be.
            The founder's reason for creating this company and his aim, ambitions,
            goals and everything else.
          </p>
        </div>

        <div className="footer-content">
          <div className="get-insights">
            <h3>Get Insights</h3>
            <ul>
              <li><a href="#"><span className="arrow">→</span> Clients</a></li>
              <li><a href="#"><span className="arrow">→</span> Partners</a></li>
              <li><a href="#"><span className="arrow">→</span> Join us</a></li>
            </ul>
          </div>

        

          <div className="contact-info">
            <h3>Contact Info</h3>
            <ul>
              <li><MapPin className="icon" /> Delhi</li>
              <li><a href="mailto:contact@entrepreneurship.network.net"><Mail className="icon" /> contact@entrepreneurship.network.net</a></li>
              <li><a href="tel:+917428662353"><Phone className="icon" /> +917428662353</a></li>
            </ul>
          </div>
        </div>

        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import './Partners.css';
import companyImg from '../assets/partner-Img/company-img.webp';
import handShake from '../assets/partner-Img/handshake-img.webp';
import { FaGreaterThan } from "react-icons/fa6";
import logo from "../assets/Capture.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const companyData = [
  { name: "Company 1", logo: companyImg },
  { name: "Company 2", logo: companyImg },
  { name: "Company 3", logo: companyImg },
  { name: "Company 4", logo: companyImg }
];

const Partners = () => {
  return (

    <div className="main-head">

    <div className="partners-container">
      {/* Handshake section */}
      <div className="image-container">
        <h2 className="partners-title">Our Partners</h2>
        <img
          src={handShake}
          alt="handshake"
          className="handshake-image"
        />
      </div>

      {/* Company details */}
      <div className="company-details">
        {companyData.map((company, index) => (
          <div className="detail-box" key={index}>
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="company-logo"
            />
          </div>
        ))}
      </div>
    </div>
     {/* about section  */}
     <div className="about-container">
        <h1>About us</h1>
        <h2>
          Information about what the company is about and how it came to be. The
          founder's reason for creating this company and his aim, ambitions,
          goals and everything else.
        </h2>
        <div className="about-container2">
          <div className="about-get">
            <span>Get Insights</span>
            <div className="about-client">
              <div className="client-item">
                <FaGreaterThan className="icon" />
                <h3>Clients</h3>
              </div>
              <div className="client-item">
                <FaGreaterThan className="icon" />
                <h3>Partners</h3>
              </div>
              <div className="client-item">
                <FaGreaterThan className="icon" />
                <h3>Join us</h3>
              </div>
            </div>

            <img src={logo} alt="" style={{ marginTop: "100px" }} />
          </div>
          {/* ======================= */}
          <div className="about-contact">
            <span>Contact Info</span>
            <div className="contact-client">
              <div className="client-item">
                <FaLocationDot className="icon" />
                <h3 style={{ textDecoration: "none" }}>Delhi</h3>
              </div>
              <div
                className="client-item"
              >
                <MdEmail className="icon" />
                <small className="client-small">contact@entrepreneurshi<br></br>pnetwork.net</small>
              </div>
              <div className="client-item">
                <FaPhoneAlt className="icon" />
                <h3>+917428662353</h3>
              </div>
            </div>

            {/* ===social==== */}
            <div className="about-follow" style={{marginTop:"60px"}}>
              <span style={{marginLeft:"36Px"}}>Follow Us</span>
              <div className="about-social-icons">
                <RiFacebookCircleFill className="social-icon"/>
                <BsInstagram className="social-icon"/>
                <FaTwitter className="social-icon"/>
                <FaLinkedin className="social-icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

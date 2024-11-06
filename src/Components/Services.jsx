import React from "react";
import "./services.css";
// import Navbar from "./Navbar";
import { FaGreaterThan } from "react-icons/fa6";
import logo from "../assets/Capture.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
      
      <span id="head">
     
        <h1 class="center-text">Services</h1>
       
        <img
          src="https://static.wixstatic.com/media/d74cb910382b4f798860f9408578d1fa.jpg/v1/fill/w_1180,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d74cb910382b4f798860f9408578d1fa.jpg"
          class="head-img"
          alt=""
        />
        <h2 className="center-title-text">We Deliver What We Promise</h2>
      </span>

      {/* section2 */}
      
      <div className="services-details">
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_b6dfbbb804b44920b8b5161b630348a4~mv2.jpg/v1/fill/w_279,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/s3.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title" style={{ marginTop: "-10px" }}>
            User <br /> Acquistion & Engagements
          </h1>
          <h3 className="service-explain" style={{ marginTop: "43px" }}>
            Something about this services and about it's working.
          </h3>
          <div className="service-btn">READ MORE</div>
        </div>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_6fcc8cd4aa204b1c8c2c29c6af19ad12~mv2.jpg/v1/fill/w_277,h_281,al_c,lg_1,q_80,enc_auto/img1.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title">Sales & Marketing</h1>
          <h3 className="service-explain">
            Something about this services and about it's working.
          </h3>
          <div className="service-btn">READ MORE</div>
        </div>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_bb40afe3b2f94fdcb0433ca0e2ec51c4~mv2.jpg/v1/fill/w_279,h_283,al_c,lg_1,q_80,enc_auto/service_01.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title" style={{ width: "82%" }}>
            On Campus Activation Campaigns
          </h1>
          <h3 className="service-explain">
            Something about this services and about it's working.
          </h3>
          <div className="service-btn">READ MORE</div>
        </div>
      </div>

      {/* section3 */}
      <div className="services-details" style={{ marginTop: "100px" }}>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_536c33ca5a374057b3227b782238ddd7~mv2.jpg/v1/fill/w_279,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/service_03.jpg"
            className="service-img"
            alt=""
            style={{ marginTop: "-10px" }}
          />
          <h1
            className="service-title"
            style={{ width: "242px", fontSize: "28px" }}
          >
            App promotions
          </h1>
          <h3 className="service-explain" style={{ marginTop: "100px" }}>
            Something about this services and about it's working.
          </h3>
          <div className="service-btn" style={{ marginTop: "-5px" }}>
            READ MORE
          </div>
        </div>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_5372b86f0d9f4128b7f371d94d350669~mv2.jpg/v1/fill/w_308,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/service_04_edited_edited.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title">Social media marketing</h1>
          <h3 className="service-explain">
            Something about this services and about it's working.
          </h3>
          <div className="service-btn" style={{ marginTop: "-5px" }}>
            READ MORE
          </div>
        </div>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_536c33ca5a374057b3227b782238ddd7~mv2.jpg/v1/fill/w_285,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/service_03.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title">Brand Awareness</h1>
          <h3 className="service-explain" style={{ marginTop: "-12px" }}>
            Something about this services and about it's working.
          </h3>
          <div className="service-btn">READ MORE</div>
        </div>
      </div>

      {/* section 4 */}
      <div className="services-details" style={{ marginTop: "40px" }}>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_bb40afe3b2f94fdcb0433ca0e2ec51c4~mv2.jpg/v1/fill/w_254,h_282,al_c,lg_1,q_80,enc_auto/service_01.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title" style={{ marginTop: "-10px" }}>
            Youth Marketing
          </h1>
          <h3 className="service-explain" style={{ marginTop: "43px" }}>
            Something about this services and about it's working.
          </h3>
          <div className="service-btn" style={{ marginTop: "33px" }}>
            READ MORE
          </div>
        </div>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_8bf64fb50c2448f3800ca2612a8ab4f7~mv2.jpg/v1/fill/w_275,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/s1_edited_edited.jpg"
            className="service-img"
            alt=""
          />
          <h1 className="service-title" style={{ marginTop: "0px" }}>
            Affliate Marketing
          </h1>
          <h3 className="service-explain">
            Something about this services and about it's working.
          </h3>
          <div className="service-btn" style={{ marginTop: "-10px" }}>
            READ MORE
          </div>
        </div>
        <div className="service-detail">
          <img
            src="https://static.wixstatic.com/media/169d7b_6fcc8cd4aa204b1c8c2c29c6af19ad12~mv2.jpg/v1/fill/w_277,h_280,al_c,lg_1,q_80,enc_auto/img1.jpg"
            className="service-img"
            alt=""
          />
          <h1
            className="service-title"
            style={{ width: "82%", marginTop: "-5px" }}
          >
            Data Driven Marketing
          </h1>
          <h3 className="service-explain">
            Something about this services and about it's working.
          </h3>
          <div className="service-btn" style={{ marginTop: "-10px" }}>
            READ MORE
          </div>
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

export default Services;

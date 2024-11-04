import React from 'react';
import './Partners.css';
import companyImg from '../assets/partner-Img/company-img.webp';
import handShake from '../assets/partner-Img/handshake-img.webp';

const companyData = [
  { name: "Company 1", logo: companyImg },
  { name: "Company 2", logo: companyImg },
  { name: "Company 3", logo: companyImg },
  { name: "Company 4", logo: companyImg }
];

const Partners = () => {
  return (
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
  );
};

export default Partners;

import React from "react";
import "./Footer.css";
import creoraLogo from "../assets/images/CreoraLogo.png"; // adjust path if needed

const Footer = () => {
  return (
    <div className="creora-wrapper">
      <div className="container-main">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="header-container">
              <img src={creoraLogo} alt="Logo" className="logo-img" />
              <h1 className="title-text">CREORA</h1>
            </div>
            <p className="desc-text">
              Creative Devs is a next-gen tech studio specializing in AR, VR,
              and MR
            </p>
          </div>

          {/* Services Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h2 className="section-heading">Services</h2>
            <p className="content-list">AR/VR Product Demos</p>
            <p className="content-list">MR Training Simulations</p>
            <p className="content-list">Virtual Events</p>
            <p className="content-list">AR for Marketing</p>
            <p className="content-list">UI/UX for Immersive Apps</p>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h2 className="section-heading">Get in touch</h2>
            <p className="content-list">hello@creativedevs.com</p>
            <p className="content-list">+91 7010353624</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/creora_developers/" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61577547987745" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.linkedin.com/company/creora-developers/about/" target="_blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Footer Bottom Section */}
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <p className="footer-text">© 2025 Creative Devs. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import "../styles/main.scss"; // Make sure the SCSS file is linked correctly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the mobile menu

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Background Video */}
      <div className="background-video">
        <video autoPlay loop muted className="background-video__element">
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Navbar */}
      <div className="navbar-wrapper">
        <div className="logo-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="44"
            viewBox="0 0 92 44"
            fill="none"
          >
            <path
              d="M18.4129 34.1987C18.2797 34.1997 18.1488 34.1647 18.0339 34.0975L8.15421 28.5378C8.03534 28.4693 7.93653 28.371 7.86766 28.2526C7.79879 28.1342 7.76226 27.9999 7.76172 27.863V10.7588C7.76172 10.553 7.84372 10.3557 7.98967 10.2102C8.13561 10.0647 8.33354 9.98291 8.53993 9.98291H28.34C28.5453 9.98469 28.7415 10.0672 28.8859 10.2125C29.0304 10.3579 29.1115 10.5542 29.1114 10.7588V27.863C29.1109 27.9999 29.0744 28.1342 29.0055 28.2526C28.9366 28.371 28.8379 28.4693 28.719 28.5378L18.8189 34.0975C18.7037 34.1638 18.573 34.1987 18.44 34.1987H18.4129ZM9.31138 27.411L18.44 32.5389L27.5618 27.411V11.5348H9.29106L9.31138 27.411Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Toggle button */}
        <div className="toggle-container" onClick={toggleMenu}>
          <a className={`nav-toggle ${isOpen ? "open" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>What's New</li>
            <li>Payments</li>
            <li>Upgrades</li>
            <li>Company</li>
            <li>Insider Perks</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

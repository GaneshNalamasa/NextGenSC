import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo Section */}
      <div className="logo-container">
        <img
          src={logo}
          alt="NextGen Solutions Corporation Logo"
          className="logo-image"
        />

        <div className="company-details">
          <h1 className="company-title">NextGen</h1>
          <p className="company-subtitle">
            Solutions Corporation
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-links">

        <li>
          <Link to="/">HOME</Link>
        </li>

        {/* Dropdown */}
        <li className="dropdown">

          <span className="dropdown-title">
            OUR COMPANY
          </span>

          <ul className="dropdown-menu">

            <li>
              <Link to="/about-us">About Us</Link>
            </li>

            <li>
              <Link to="/board-of-executives">
                Board of Executives
              </Link>
            </li>

            <li>
              <Link to="/domain-expertise">
                Domain Expertise
              </Link>
            </li>

            <li>
              <Link to="/our-events">
                Our Events
              </Link>
            </li>

            <li>
              <Link to="/testimonials">
                Testimonials
              </Link>
            </li>

          </ul>

        </li>

        <li>
          <Link to="/services">SERVICES</Link>
        </li>

        <li>
          <Link to="/clients">CLIENTS</Link>
        </li>


      </ul>

      {/* Contact Button */}
      <Link to="/contact" className="contact-btn">
        CONTACT US
      </Link>

    </header>
  );
}

export default Navbar;
import { Link } from 'react-router-dom';
import './Navbar.css';
import CreoraLogo2 from "../assets/images/CreoraLogo2.png"

function Navbar() {
  return (
    <>
      <div className="gradient-strip"></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
         <img src={CreoraLogo2} alt="navbar-logo" className="nav-logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/PortfolioPage">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
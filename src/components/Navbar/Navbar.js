import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link className="logo-link" to="/">
              <h1 className="logo-link">Monochrome</h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link className="nav-link" to="/myWork">
                <div className="text">Mywork</div>
                <div className="circle">
                  <i className="far fa-circle"></i>
                </div>
              </Link>
            </li>
            {/* <li>
              <Link className="nav-link" to="/work">
                <div className="text">Me</div>
                <div className="circle">
                  <i className="far fa-circle"></i>
                </div>
              </Link>
            </li> */}
            <li>
              <Link className="nav-link" to="/blog">
                <div className="text">Blog</div>
                <div className="circle">
                  <i className="far fa-circle"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                <div className="text">Contact</div>
                <div className="circle">
                  <i className="far fa-circle"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

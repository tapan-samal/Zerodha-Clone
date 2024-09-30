import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top "
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-1">
        <Link className="navbar-brand" to="/">
          <img
            src="media\images\logo.svg"
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item ms-5">
              <Link className="nav-link" aria-current="page" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            <li className="ms-4" style={{ fontSize: "18px" }}>
              <Link className="nav-link" to="/">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

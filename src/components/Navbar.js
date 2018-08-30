import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="container">
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <span className="navbar-item has-text-weight-bold">
          <Link to="/"> Oneview Analytics Services</Link>
        </span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start navbar-item">
          <span className="navbar-item">
            <Link to="/forecaster">Forecaster</Link>
          </span>
          <span className="navbar-item">
            <Link to="/health-checker">Health Checker</Link>
          </span>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;

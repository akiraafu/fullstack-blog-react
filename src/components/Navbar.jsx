import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="links">
          <Link className="link" to="/?category=art">
            <h6> Art</h6>
          </Link>
          <Link className="link" to="/?category=science">
            <h6> Science</h6>
          </Link>
          <Link className="link" to="/?category=technology">
            <h6> Technology</h6>
          </Link>
          <Link className="link" to="/?category=cinema">
            <h6> Cinema</h6>
          </Link>
          <Link className="link" to="/?category=design">
            <h6> Design</h6>
          </Link>
          <Link className="link" to="/?category=food">
            <h6> Food</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

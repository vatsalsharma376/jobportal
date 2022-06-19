import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import navimg from "../../static/navimg.png";

const Header = () => {
  return (
    <div className="navbar">
      <img
        className="nav-img"
        src={navimg}
        onClick={() => (window.location.href = "/")}
      />
      <div className="nav-links">
        <h3>Find Job</h3>
        <h3>About Us</h3>
        <h3> Blog</h3>
        <h3> Contact Us</h3>
      </div>
    </div>
  );
};

export default Header;

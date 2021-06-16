import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navStyle={
    color:"white",
    padding:"15px"
  }
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

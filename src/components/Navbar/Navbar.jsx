import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;

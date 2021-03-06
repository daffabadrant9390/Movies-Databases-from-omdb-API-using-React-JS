import React from "react";
import "../styles/custom.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h3 className="logo">OMDb Movies Database</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/movies">
          <li className="nav-item">Movies DB</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

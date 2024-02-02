import React from "react";
import {NavLink} from "react-router-dom"
import "../styles/Navbar.css";


function Navbar() {
 

  return (
    <div className="navBar">
      <div className="leftSide">
        <NavLink className="h3" to="/" style={{ color: "yellow" }}>
          Devops<span style={{ color: "white" }}>.PLC</span>
        </NavLink>
      </div>
      <div className="rightSide"></div>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/about">
        About
      </NavLink>
      <NavLink className="link" to="/service">
        Service
      </NavLink>
      <NavLink className="link" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;

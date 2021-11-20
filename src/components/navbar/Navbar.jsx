import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navLeft">
          <img
            src="http://sliet.ac.in/wp-content/themes/sliet/_inc/images/logo1.png"
            alt=""
            className="logo"
          />
          <span>Sliet Alumini</span>
        </div>
        <div className="navRight">
          <ul className="navRightList">
            <li className="navRightListItem">Home</li>
            <li className="navRightListItem">About</li>
            <li className="navRightListItem">Contact us</li>
            <li className="navRightListItem">Team</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../styling/navBar.style.css";
import "../styling/root.style.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logoArea">
          <a href="/">
            <img src="/assets/logo.png" alt="" />
          </a>
        </div>
        <div className="navigation">
          <Link to="/aboutHarriet" className="navLink">
            About Me
          </Link>
          <Link to="/suzukiMethod" className="navLink">
            Suzuki
          </Link>
          <Link to="/calendar" className="navLink">
            Calendar
          </Link>
          <Link to="/resources" className="navLink">
            Resources
          </Link>
          <Link to="/faqs" className="navLink">
            FAQs
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

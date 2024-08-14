import React from "react";
import { Link } from "react-router-dom";
import "../styling/navBar.style.css";
import "../styling/root.style.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logoArea">
          <img src="../../public/assets/logo.png" alt="" />
        </div>
        <div className="navigation">
          <Link to="/aboutHarriet" className="navLink">
            About Harriet
          </Link>
          <Link to="/suzukiMethod" className="navLink">
            Suzuki Method
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

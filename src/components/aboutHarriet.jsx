import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import Testimonials from "./testimonials";
import "../styling/aboutHarriet.style.css";

const AboutHarriet = () => {
  return (
    <>
      <NavBar />
      <div className="aboutHarriet content">
        <img src="/assets/harriet.webp" alt="" />
        <h2>
          10 years teaching. <br /> 25 years playing.
        </h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla non
          luctus lacinia; eget interdum quisque. Metus aptent maecenas aliquam,
          mi fames lobortis. Aenean lacinia ut felis sem odio etiam? Vehicula
          tortor sagittis platea ridiculus malesuada; tellus quis. Tempus hac
          duis quisque; class odio malesuada.
        </p>
        <button className="enquire">
          <a href="/contact">Enquire now</a>
        </button>
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default AboutHarriet;

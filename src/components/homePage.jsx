import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import "../styling/home.style.css";
import "../styling/root.style.css";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="homePage content">
        <img src="/assets/homepageViolin.png" alt="" />
        <h1>
          Fun.
          <br />
          Confident.
          <br />
          Lifelong.
        </h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Enim leo
          tincidunt tincidunt lacus facilisi cursus? Imperdiet imperdiet aenean
          porta elementum, mus habitant volutpat nulla proin. Morbi viverra
          iaculis mattis torquent purus penatibus convallis urna curae.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import SuzukiBenefitsCarousel from "./benefitsCarousel";
import "../styling/suzukiMethod.style.css";
import "../styling/root.style.css";

const SuzukiMethod = () => {
  return (
    <>
      <NavBar />
      <div className="suzukiMethod content">
        <h1>The Suzuki Method</h1>
        <div class="intro">
          <p>
            Developed by Japanese violinist Shinichi Suzuki, the Suzuki Method
            is a popular and influential approach to learning the violin. Known
            for its emphasis on early childhood education, this method fosters
            not only musical skills but also character development and a deep
            love for music.
          </p>
        </div>
        <hr />
        <div className="benefits">
          <SuzukiBenefitsCarousel />
        </div>
        <hr />
        <div className="principles">
          <div className="principlesImage">
            <img src="../../public/assets/trebleClef.png" alt="" />
          </div>
          <div className="principlesText">
            <h2>Key Principles of the Suzuki Method</h2>
            <ul>
              <li>
                <strong>Listening</strong>
                <br /> Listen to music daily. Internalize the sounds and rhythms
                of the music before attempting to play.
              </li>
              <li>
                <strong>Repetition</strong>
                <br /> Learn to play music by repeating pieces until they are
                mastered.
              </li>
              <li>
                <strong>Learning with Others</strong>
                <br /> Foster a sense of community and shared learning.
              </li>
              <li>
                <strong>Parental Involvement</strong>
                <br /> Attend lessons, help with practice at home, and provide
                encouragement.
              </li>
              <li>
                <strong>Starting Early</strong>
                <br /> Take advantage of the youthful ability to learn languages
                and skills rapidly.
              </li>
              <li>
                <strong>Learning by Ear</strong>
                <br /> Learn to play by ear before learning to read music.
                Develop strong auditory skills and musical memory.
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="cta">
          <h2>Get Started with Suzuki Violin Lessons</h2>
          <p>
            If you're interested in enrolling your child in Suzuki violin
            lessons or learning more about this method, please{" "}
            <a href="/contact">contact us</a>. Alternatively, please feel free
            to explore more suzuki resources <a href="/resources">here</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuzukiMethod;

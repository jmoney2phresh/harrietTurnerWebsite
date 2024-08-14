import React, { useRef } from "react";
import "../styling/root.style.css";
import "../styling/landingPage.style.css";
import logo from "../../public/assets/logo.png"; // Ensure these paths are correct
import bow from "../../public/assets/bow.png";
import soundFile from "../../public/assets/violin-sound.mp3";

const LandingPage = ({ onEnterSite }) => {
  const bowRef = useRef(null);
  const soundRef = useRef(null);

  const handleEnterSite = () => {
    // Play the sound
    soundRef.current.play();

    // Animate the bow
    bowRef.current.style.transition = "all 2s ease-out";
    bowRef.current.style.transform = "translateX(-100%)"; // Adjust as needed

    // After animation ends, trigger onEnterSite callback
    setTimeout(() => {
      onEnterSite();
    }, 1500); // Match this duration with the bow animation duration
  };

  return (
    <div className="landing-page">
      <div className="overlay-container">
        <img ref={bowRef} src={bow} alt="Bow" className="bow" />
        <img src={logo} alt="Website Logo" className="logo" />
        <button
          onClick={handleEnterSite}
          id="enter-site"
          className="enter-button"
        >
          Enter Site
        </button>
      </div>
      <audio ref={soundRef} src={soundFile}></audio>
    </div>
  );
};

export default LandingPage;

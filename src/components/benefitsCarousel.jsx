import React, { useState } from "react";
import "../styling/benefitsCarousel.style.css";

const SuzukiBenefitsCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const benefits = [
    {
      text: "Improved concentration and focus",
      icon: "/assets/eye.png",
    },
    {
      text: "Enhanced listening and memorization skills",
      icon: "/assets/ear.png",
    },
    {
      text: "Development of fine motor skills",
      icon: "/assets/timing-belt.png",
    },
    {
      text: "Discipline and perseverance",
      icon: "/assets/soldier.png",
    },
    {
      text: "Self-confidence through performance",
      icon: "/assets/role-model.png",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="benefitsText">
      <h2 className="title">Benefits of Suzuki</h2>
      <div className="carousel">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="carousel-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === index ? (
              <p className="benefitText">{benefit.text}</p>
            ) : (
              <img
                src={benefit.icon}
                alt={`Benefit ${index + 1} icon`}
                className="icon"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuzukiBenefitsCarousel;

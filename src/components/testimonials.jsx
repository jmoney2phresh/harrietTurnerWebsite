import React, { useState, useEffect } from "react";
import "../styling/testimonials.style.css";

const testimonials = [
  {
    name: "John Doe",
    text: "This violin course was a life-changer! My skills improved dramatically in just a few weeks.",
  },
  {
    name: "Jane Smith",
    text: "The Suzuki Method is the best way to learn violin. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    text: "Amazing experience! The lessons were clear, concise, and very helpful.",
  },
  {
    name: "Michael Brown",
    text: "I loved the personalized approach and the results speak for themselves.",
  },
  {
    name: "Sarah Wilson",
    text: "The support and guidance provided were exceptional. Couldn't ask for more.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-gallery">
      <button className="prev-button" onClick={handlePrev}>
        &lt;
      </button>
      <div
        className="testimonial-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Testimonials;

import React, { useState } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import "../styling/faqs.style.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "When should my child start violin lessons?",
      answer:
        "Children can start learning the violin as young as 3 or 4 years old. Each child is different, so it's best to discuss with the teacher to assess readiness.",
    },
    {
      question: "How often should my child practice?",
      answer:
        "It's recommended that beginners practice at least 15-20 minutes daily. As the student progresses, practice time can gradually increase to 30-60 minutes daily.",
    },
    {
      question: "Do I need to rent or buy a violin?",
      answer:
        "Renting is a good option for beginners or young students who may outgrow their instruments. Purchasing may be more economic for committed students.",
    },
    {
      question: "What method do you use to teach violin?",
      answer:
        "I primarily use the Suzuki Method, which emphasizes learning by ear, parental involvement, and starting at a young age.",
    },
    {
      question: "How do I know if my child enjoys practicing?",
      answer:
        "Creating a positive practice environment, setting small goals, and incorporating games and rewards can help make practice more enjoyable for your child.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="faqSection content">
        <h1 className="faqTitle">
          Frequently
          <br />
          Asked Questions
        </h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h2 className="faqQuestion" onClick={() => toggleFAQ(index)}>
              {item.question}
            </h2>
            {openIndex === index && (
              <div className="faqAnswer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default FAQ;

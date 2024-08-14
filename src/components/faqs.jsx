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
      question: "What age should my child start violin lessons?",
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
        "Renting is a good option for beginners, especially for young children who will outgrow their instruments. Purchasing might be more economical in the long term for committed students.",
    },
    {
      question: "What method do you use to teach violin?",
      answer:
        "I primarily use the Suzuki Method, which emphasizes learning by ear, parental involvement, and starting at a young age.",
    },
    {
      question: "How do I ensure my child enjoys practicing?",
      answer:
        "Creating a positive practice environment, setting small goals, and incorporating games and rewards can help make practice more enjoyable for your child.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="faq-section content">
        <div className="opaque">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h2 className="faq-question" onClick={() => toggleFAQ(index)}>
                {index + 1}. {item.question}
              </h2>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FAQ;

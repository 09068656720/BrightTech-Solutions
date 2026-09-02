import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does BrightTech offer?",
      answer:
        "We provide web development, UI/UX design, digital marketing, and content writing services.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the size and requirements of the project. We discuss the expected timeline before starting.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We can improve the design, responsiveness, performance, and overall user experience of an existing website.",
    },
    {
      question: "How can I contact BrightTech?",
      answer:
        "You can contact us through our contact page and tell us about your project. We will get back to you as soon as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Mohammed",
      review:
        "BrightTech helped us build a professional website that improved our online presence.",
      role: "Business Owner",
    },
    {
      name: "Ibrahim Yusuf",
      review:
        "The team was easy to work with and delivered exactly what we needed.",
      role: "Entrepreneur",
    },
    {
      name: "Fatima Abdullahi",
      review:
        "Excellent service and a very professional approach. I would definitely recommend BrightTech.",
      role: "Business Manager",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p>"{testimonial.review}"</p>

            <h3>{testimonial.name}</h3>
            <span>{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
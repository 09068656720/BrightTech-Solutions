import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <h2>Ready to Grow Your Business?</h2>

      <p>
        Let's build a modern digital solution that helps your business stand out.
      </p>

      <Link to="/contact" className="cta-btn">
        Get Started
      </Link>
    </section>
  );
};

export default CTA;
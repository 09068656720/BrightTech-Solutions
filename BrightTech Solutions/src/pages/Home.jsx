import React from "react";
import Hero from "../Hero";
import Services from "../Services";
import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import "../Responsive.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      </div>
  );
};

export default Home;
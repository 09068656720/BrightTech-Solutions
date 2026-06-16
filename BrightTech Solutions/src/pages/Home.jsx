import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Services from "../Services";
import Footer from "../Footer";
import "../Responsive.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
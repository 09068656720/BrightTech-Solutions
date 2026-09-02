import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import ScrollToTop from "./ScrollToTop"; // 1. Import it here
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Testimonials from "./Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop /> {/* 2. Add it here */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
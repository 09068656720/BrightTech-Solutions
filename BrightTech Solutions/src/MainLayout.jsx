import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  // Normalize path check to handle trailing slashes or mixed casing
  const isContactPage = location.pathname.toLowerCase().replace(/\/$/, "") === "/contact";

  return (
    <div className="layout-wrapper">
      <Navbar />
      
      <main className="main-content">
        <Outlet />
      </main>

      {/* Render CTA banner on all pages except Contact */}
      {!isContactPage && <CTA />}
      
      <Footer />
    </div>
  );
};

export default MainLayout;
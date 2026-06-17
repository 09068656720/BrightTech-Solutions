import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; // <--- Add this import

const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 1. Navbar stays fixed at the top */}
      <Navbar />
      
      {/* 2. Main content takes up all available space */}
      <main style={{ flex: "1", padding: "20px" }}>
        <Outlet />
      </main>
      
      {/* 3. Footer stays fixed at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith("/product/");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main
        className={`flex-grow px-4 py-6 ${
          isDetailsPage ? "" : "container mx-auto"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

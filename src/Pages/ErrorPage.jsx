import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-8 space-y-2 flex-grow">
        <h1 className="text-xl font-semibold">{error.message || "Something went wrong!"}</h1>
        <img src={errorImg} alt="Error 404" className="w-64 h-64" />
        <h2 className="text-2xl font-semibold">Oops, page not found!</h2>
        <p className="text-gray-600">The page you are looking for is not available.</p>
        <Link
          className="btn bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white"
          to="/apps"
        >
          Go back
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
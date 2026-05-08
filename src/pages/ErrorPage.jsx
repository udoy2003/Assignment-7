// ErrorPage.jsx

import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg w-full">

        <h1 className="text-8xl font-bold text-[#234b3c]">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-relaxed">
          The page you are looking for does not exist or may
          have been moved.
        </p>

        <Link to="/">
          <button className="btn bg-[#234b3c] hover:bg-[#1b3b30] text-white mt-8 px-8 rounded-lg border-none">
            Back To Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;
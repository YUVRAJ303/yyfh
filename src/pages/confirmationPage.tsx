import React from "react";
import confirmationImage from 

const ConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white shadow-sm px-8 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src=""
            alt="Logo"
            className="h-8 w-8 rounded-md"
          />
          <span className="text-sm font-medium text-gray-800">highway delite</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder=""
            className="border border-gray-300 rounded-l-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 w-56"
          />
          <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-r-full text-sm font-medium hover:bg-yellow-500">
            Search
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center mt-16">
        {/* Green Check Icon */}
        <div className="bg-green-500 rounded-full p-4 mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Booking Text */}
        <h1 className="text-xl font-semibold text-gray-800 mb-1">
          Booking Confirmed
        </h1>
        <p className="text-gray-500 text-sm mb-6">Ref ID: HUF56&SO</p>

        {/* Button */}
        <button
          className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded hover:bg-gray-300 transition"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;

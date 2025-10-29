import React from "react";
import confirmationImage from "../images/confirmation.png";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-3 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={confirmationImage} alt="Logo" className="h-8 w-8 rounded-md" />
          <span className="font-medium text-gray-800">Highway Delite</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-4 py-1.5 w-64 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 text-sm px-4 py-1.5 rounded hover:bg-yellow-500 transition">
            Search
          </button>
        </div>
      </nav>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        {/* Green Check Icon */}
        <div className="bg-green-500 rounded-full p-4 mb-6 mt-10">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Booking Info */}
        <h1 className="text-lg font-semibold text-gray-800 mb-1">
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

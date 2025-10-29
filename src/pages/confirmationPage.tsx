import React from "react";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      {/* Booking Text */}
      <h1 className="text-xl font-semibold text-gray-800 mb-1">
        Booking Confirmed
      </h1>

      {/* Reference ID */}
      <p className="text-gray-500 text-sm mb-6">Ref ID: HUF56&SO</p>

      {/* Back Button */}
      <button
        className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded hover:bg-gray-300 transition"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;

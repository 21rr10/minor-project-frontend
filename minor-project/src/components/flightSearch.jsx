import React from "react";
import { useNavigate } from "react-router-dom";

const FlightSearchComponent = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  const handleButtonClick = () => {
    if (authToken) {
      navigate("/verifying");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Flight Search Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center bg-transparent p-4 rounded-md border border-gray-300">
        {/* FROM Section */}
        <div className="flex-1 p-4 relative border-r border-gray-300 flex flex-col">
          <div className="text-xs text-black uppercase font-medium mb-1">From</div>
          <div className="text-xl font-semibold">Delhi</div>
          <div className="text-sm text-black">[DEL] Indira Gandhi International Airport</div>
        </div>

        {/* TO Section */}
        <div className="flex-1 p-4 border-r border-gray-300 flex flex-col">
          <div className="text-xs text-black uppercase font-medium mb-1">To</div>
          <div className="text-xl font-semibold">Mumbai</div>
          <div className="text-sm text-black">[BOM] Chhatrapati Shivaji International Airport</div>
        </div>

        {/* DEPARTURE DATE Section */}
        <div className="flex-1 p-4 border-r border-gray-300 flex flex-col">
          <div className="text-xs text-black uppercase font-medium mb-1">Departure Date</div>
          <div className="text-xl font-semibold">16</div>
          <div className="text-sm text-black ml-1 self-end mb-1">Mar'2025</div>
          <div className="text-xs text-black">Sunday</div>
        </div>

        {/* TRAVELLERS & CLASS Section */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="text-xs text-black uppercase font-medium mb-1">Traveller & Class</div>
          <div className="text-xl font-semibold">1 Traveller</div>
          <div className="text-sm text-black">Economy</div>
        </div>
      </div>

      {/* "Take Me There" Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleButtonClick}
          className="bg-transparent text-black border border-black py-3 px-10 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-200"
        >
          TAKE ME THERE
        </button>
      </div>
    </div>
  );
};

export default FlightSearchComponent;

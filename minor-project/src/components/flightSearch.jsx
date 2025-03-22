import React from "react";
import { Link } from "react-router-dom";

const FlightSearchComponent = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Flight Search Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center bg-transparent p-4 rounded-md border border-gray-300">
        {/* FROM Section */}
        <div className="flex-1 p-4 relative border-r border-gray-300 flex flex-col">
          <div className="text-xs text-black uppercase font-medium mb-1">From</div>
          <div className="text-xl font-semibold">Delhi</div>
          <div className="text-sm text-black">[DEL] Indira Gandhi International Airport</div>
          
          {/* Swap Button */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
            <button className="bg-transparent border border-black rounded-full p-1 shadow-md text-black w-7 h-7 flex items-center justify-center">
              ⇄
            </button>
          </div>
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
          <div className="flex items-center">
            <div className="text-xl font-semibold">16</div>
            <div className="text-sm text-black ml-1 self-end mb-1">Mar'2025</div>
            <div className="ml-auto text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div className="text-xs text-black">Sunday</div>
        </div>

        {/* TRAVELLERS & CLASS Section */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="text-xs text-black uppercase font-medium mb-1">Traveller & Class</div>
          <div className="flex items-center">
            <div className="text-xl font-semibold">1 Traveller</div>
            <div className="ml-1 text-black">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="text-sm text-black">Economy</div>
        </div>
      </div>

      {/* "Take Me There" Button */}
      <Link to="/signup">
      <div className="mt-6 flex justify-center">
        <button className="bg-transparent text-black border border-black py-3 px-10 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-200">
          TAKE ME THERE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default FlightSearchComponent;


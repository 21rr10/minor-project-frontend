import React from 'react';

const FlightSearchComponent = () => {
  return (
    <div className="bg-blue-500 p-4 w-full">
      <div className="bg-white rounded-lg flex flex-wrap md:flex-nowrap">
        {/* FROM section */}
        <div className="flex-1 p-4 relative border-r border-gray-200">
          <div className="text-xs text-gray-500 uppercase font-medium">FROM</div>
          <div className="text-2xl font-bold">Delhi</div>
          <div className="text-xs text-gray-600">[DEL] Indira Gandhi International Airport</div>
          
          {/* Swap button */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
            <button className="bg-white rounded-full p-1 shadow text-gray-400 w-6 h-6 flex items-center justify-center">
              ⇄
            </button>
          </div>
        </div>
        
        {/* TO section */}
        <div className="flex-1 p-4 border-r border-gray-200">
          <div className="text-xs text-gray-500 uppercase font-medium">TO</div>
          <div className="text-2xl font-bold">Mumbai</div>
          <div className="text-xs text-gray-600">[BOM] Chhatrapati Shivaji International Airport</div>
        </div>
        
        {/* DEPARTURE DATE section */}
        <div className="flex-1 p-4 border-r border-gray-200">
          <div className="text-xs text-gray-500 uppercase font-medium">DEPARTURE DATE</div>
          <div className="flex items-center">
            <div className="text-2xl font-bold">16</div>
            <div className="text-sm text-gray-500 ml-1 self-end mb-1">Mar'2025</div>
            <div className="ml-auto text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div className="text-xs text-gray-600">Sunday</div>
        </div>
        
        {/* TRAVELLER & CLASS section */}
        <div className="flex-1 p-4">
          <div className="text-xs text-gray-500 uppercase font-medium">TRAVELLER & CLASS</div>
          <div className="flex items-center">
            <div className="text-xl font-bold">1 Traveller(s)</div>
            <div className="ml-1 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="text-xs text-gray-600">Economy</div>
        </div>
      </div>
      
      {/* Search button */}
      <div className="mt-4 flex justify-center">
        <button className="bg-black text-white py-3 px-10 rounded font-medium">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default FlightSearchComponent;

import React, { useState,useEffect } from 'react';
import { Calendar, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearchComponent = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [travelers, setTravelers] = useState(1);
  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    fetchAirportData();
  }, []);

  const fetchAirportData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('your_api_endpoint_here');
      const data = await response.json();
      setAirportData(data);
    } catch (error) {
      console.error('Error fetching airport data:', error);
      // Fallback data in case API fails
      setAirportData([
        { city: 'New York', airport_code: 'JFK' },
        { city: 'Los Angeles', airport_code: 'LAX' },
        { city: 'Chicago', airport_code: 'ORD' },
        { city: 'London', airport_code: 'LHR' },
        { city: 'Tokyo', airport_code: 'HND' },
      ]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!origin || !destination || !checkInDate || !checkOutDate) {
      alert('Please fill in all the required fields');
      return;
    }
    console.log({ origin, destination, checkInDate, checkOutDate, travelers });
    alert(`Taking you from ${origin} to ${destination}`);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-cover bg-center pt-20" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="backdrop-blur-md rounded-xl shadow-xl p-6 w-full max-w-5xl bg-transparent flex justify-center items-center">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1">
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-black">
              <option value="">From</option>
              {airportData.map((airport) => (
                  <option key={airport.airport_code}
                          value={airport.airport_code}>
                          {airport.city} 
                          ({airport.airport_code})
                  </option>
              ))}
            </select>
          </div>


          <div className="relative flex-1">
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-black">
                <option value="">To</option>
                {airportData.map((airport) => (
                  <option key={airport.airport_code} 
                          value={airport.airport_code}>
                          {airport.city}
                         ({airport.airport_code})
                  </option>
              ))}
            </select>
          </div>



          <div className="relative flex-1">
            <Calendar className="absolute left-3 top-3 text-gray-400" />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check-in Date"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
          <div className="relative flex-1">
            <Calendar className="absolute left-3 top-3 text-gray-400" />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check-out Date"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
          <div className="relative flex-1">
            <Users className="absolute left-3 top-3 text-gray-400" />
            <input type="number" min="1" value={travelers} onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">TAKE ME THERE</button>
        </form>
      </div>
    </div>
  );
};

export default FlightSearchComponent;

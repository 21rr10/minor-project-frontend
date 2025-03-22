import React, { useState } from 'react';
import { Calendar, Globe, Users } from 'lucide-react';
import { format } from 'date-fns';

const FlightSearchComponent = () => {
  // State for the form inputs
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [travelers, setTravelers] = useState(1);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  // Sample cities for dropdown suggestions
  const popularCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 
    'Hyderabad', 'Bhubaneswar', 'Jaipur', 'Goa', 'Ahmedabad'
  ];

  // Function to handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validation
    if (!origin || !destination || !checkInDate || !checkOutDate) {
      alert('Please fill in all the required fields');
      return;
    }
    
    // Navigate to next page (in a real app, you would use router navigation)
    console.log({
      origin,
      destination,
      checkInDate,
      checkOutDate,
      travelers
    });
    
    // This would be replaced with actual navigation
    alert(`Taking you from ${origin} to ${destination}`);
  };

  // Simple calendar component
  const SimpleCalendar = ({ selectedDate, onSelectDate, onClose }) => {
    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", 
                     "July", "August", "September", "October", "November", "December"];
    
    const [viewDate, setViewDate] = useState(currentDate);
    
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
    
    const getFirstDayOfMonth = (year, month) => {
      return new Date(year, month, 1).getDay();
    };
    
    const handleDateClick = (day) => {
      const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      onSelectDate(newDate);
      onClose();
    };
    
    const renderDays = () => {
      const daysInMonth = getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth());
      const firstDay = getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth());
      
      let days = [];
      
      // Add empty cells for days before the 1st of the month
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="p-2"></div>);
      }
      
      // Add cells for each day of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        const isCurrentDate = currentDate.getDate() === day && 
                              currentDate.getMonth() === viewDate.getMonth() && 
                              currentDate.getFullYear() === viewDate.getFullYear();
        const isSelected = selectedDate && 
                           selectedDate.getDate() === day && 
                           selectedDate.getMonth() === viewDate.getMonth() && 
                           selectedDate.getFullYear() === viewDate.getFullYear();
        
        days.push(
          <div 
            key={day} 
            onClick={() => handleDateClick(day)}
            className={`p-2 text-center cursor-pointer rounded hover:bg-blue-100 
                       ${isCurrentDate ? 'bg-blue-200' : ''} 
                       ${isSelected ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}
          >
            {day}
          </div>
        );
      }
      
      return days;
    };
    
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 absolute mt-2 z-10">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
            className="p-1 rounded hover:bg-gray-200"
          >
            &lt;
          </button>
          <div>
            {months[viewDate.getMonth()]} {viewDate.getFullYear()}
          </div>
          <button 
            onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
            className="p-1 rounded hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="p-2 text-center font-medium">{day}</div>
          ))}
          {renderDays()}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Find Your Perfect Trip</h1>
        
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Origin Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Enter city or airport"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {origin && (
                  <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-auto">
                    {popularCities
                      .filter(city => city.toLowerCase().includes(origin.toLowerCase()))
                      .map(city => (
                        <div 
                          key={city} 
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => setOrigin(city)}
                        >
                          {city}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
            
            {/* Destination Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter city or airport"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {destination && (
                  <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-auto">
                    {popularCities
                      .filter(city => city.toLowerCase().includes(destination.toLowerCase()))
                      .map(city => (
                        <div 
                          key={city} 
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => setDestination(city)}
                        >
                          {city}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
            
            {/* Check-in Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={checkInDate ? format(checkInDate, 'MMM dd, yyyy') : ''}
                  onClick={() => {
                    setShowCheckInCalendar(!showCheckInCalendar);
                    setShowCheckOutCalendar(false);
                  }}
                  placeholder="Select date"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                  readOnly
                />
                {showCheckInCalendar && (
                  <SimpleCalendar 
                    selectedDate={checkInDate}
                    onSelectDate={setCheckInDate}
                    onClose={() => setShowCheckInCalendar(false)}
                  />
                )}
              </div>
            </div>
            
            {/* Check-out Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={checkOutDate ? format(checkOutDate, 'MMM dd, yyyy') : ''}
                  onClick={() => {
                    setShowCheckOutCalendar(!showCheckOutCalendar);
                    setShowCheckInCalendar(false);
                  }}
                  placeholder="Select date"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                  readOnly
                />
                {showCheckOutCalendar && (
                  <SimpleCalendar 
                    selectedDate={checkOutDate}
                    onSelectDate={setCheckOutDate}
                    onClose={() => setShowCheckOutCalendar(false)}
                  />
                )}
              </div>
            </div>
            
            {/* Number of Travelers */}
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  min="1"
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          
          {/* Search Button */}
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 text-lg"
            >
              Take Me There
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightSearchComponent;
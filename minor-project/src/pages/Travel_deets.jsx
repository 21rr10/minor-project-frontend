import React, { useState, useEffect } from 'react';
import { Calendar, Cloud, CloudRain, CloudSnow, Sun, Thermometer, Umbrella, Wind, Plane, Clock, Building, Star, ExternalLink } from 'lucide-react';
import Header from '../components/header';

const TravelDetailsPage = () => {
  // In a real app, you would get these from URL params or route state
  const destination = 'Bhubaneswar';
  const checkInDate = new Date('2025-04-01');
  const checkOutDate = new Date('2025-04-15');
  const origin = 'Delhi';
  
  // State for the data
  const [weatherData, setWeatherData] = useState(null);
  const [flightData, setFlightData] = useState(null);
  const [hotelData, setHotelData] = useState(null);
  const [loading, setLoading] = useState({
    weather: true,
    flights: true,
    hotels: true
  });
  
  // Mock function to fetch data from the backend
  useEffect(() => {
    // Simulate API calls
    const fetchWeather = async () => {
      try {
        // In a real app, this would be an actual API call
        // await fetch(`/api/weather?destination=${destination}&startDate=${checkInDate}&endDate=${checkOutDate}`)
        
        // For demo purposes, using setTimeout to simulate network request
        setTimeout(() => {
          // Mock data that would come from your backend
          const mockData = {
            city: destination,
            forecast: Array.from({ length: 7 }, (_, i) => {
              const date = new Date(checkInDate);
              date.setDate(date.getDate() + i);
              
              // Generate random weather data
              const weatherTypes = ['sunny', 'cloudy', 'rainy', 'stormy', 'partly-cloudy'];
              const weatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
              
              return {
                date: date.toISOString().split('T')[0],
                dayOfWeek: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
                maxTemp: Math.floor(Math.random() * 15) + 25, // 25-40°C
                minTemp: Math.floor(Math.random() * 10) + 15, // 15-25°C
                weatherType,
                precipitation: Math.floor(Math.random() * 80), // 0-80%
                humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
                windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
              };
            })
          };
          
          setWeatherData(mockData);
          setLoading(prev => ({ ...prev, weather: false }));
        }, 800);
        
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setLoading(prev => ({ ...prev, weather: false }));
      }
    };
    
    const fetchFlights = async () => {
      try {
        // In a real app, this would be an actual API call
        // await fetch(`/api/flights?origin=${origin}&destination=${destination}&date=${checkInDate}`)
        
        setTimeout(() => {
          // Mock flight data
          const airlines = ['IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'Go First', 'AirAsia India'];
          const mockData = Array.from({ length: 8 }, (_, i) => {
            const departureHour = 6 + Math.floor(Math.random() * 14); // 6 AM to 8 PM
            const durationHours = 1 + Math.floor(Math.random() * 3);
            const durationMinutes = Math.floor(Math.random() * 60);
            
            const departureTime = `${departureHour.toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
            const arrivalTime = `${(departureHour + durationHours).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
            
            return {
              id: i + 1,
              airline: airlines[Math.floor(Math.random() * airlines.length)],
              flightNumber: `${['AI', 'SG', 'UK', '6E', 'G8', 'I5'][Math.floor(Math.random() * 6)]}${100 + Math.floor(Math.random() * 900)}`,
              departureTime,
              arrivalTime,
              duration: `${durationHours}h ${durationMinutes}m`,
              price: 3000 + Math.floor(Math.random() * 8000), // ₹3000-₹11000
              stops: Math.floor(Math.random() * 2), // 0 or 1 stops
              platform: ['MakeMyTrip', 'EaseMyTrip', 'Goibibo', 'Cleartrip', 'Yatra'][Math.floor(Math.random() * 5)]
            };
          });
          
          // Sort by price
          mockData.sort((a, b) => a.price - b.price);
          
          setFlightData(mockData);
          setLoading(prev => ({ ...prev, flights: false }));
        }, 1200);
        
      } catch (err) {
        console.error('Error fetching flight data:', err);
        setLoading(prev => ({ ...prev, flights: false }));
      }
    };
    
    const fetchHotels = async () => {
      try {
        // In a real app, this would be an actual API call
        // await fetch(`/api/hotels?destination=${destination}&checkIn=${checkInDate}&checkOut=${checkOutDate}`)
        
        setTimeout(() => {
          // Mock hotel data
          const hotelNames = [
            'The Grand Heritage', 'City Comfort Inn', 'Hotel Swosti Premium', 
            'Mayfair Lagoon', 'Trident Bhubaneswar', 'Ginger Hotel',
            'Hotel Hindusthan International', 'Sandys Tower', 'Empires Hotel'
          ];
          
          const mockData = Array.from({ length: 6 }, (_, i) => {
            return {
              id: i + 1,
              name: hotelNames[i],
              rating: (3 + Math.random() * 2).toFixed(1), // 3-5 stars
              price: 2000 + Math.floor(Math.random() * 8000), // ₹2000-₹10000 per night
              location: `${['Central', 'North', 'South', 'East', 'West'][Math.floor(Math.random() * 5)]} Bhubaneswar`,
              amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Spa', 'Gym', 'Room Service', 'Airport Shuttle']
                .sort(() => 0.5 - Math.random())
                .slice(0, 3 + Math.floor(Math.random() * 4)),
              image: `/api/placeholder/300/200`,
              platform: ['MakeMyTrip', 'Booking.com', 'Agoda', 'Goibibo', 'Hotels.com'][Math.floor(Math.random() * 5)]
            };
          });
          
          // Sort by price
          mockData.sort((a, b) => a.price - b.price);
          
          setHotelData(mockData);
          setLoading(prev => ({ ...prev, hotels: false }));
        }, 1500);
        
      } catch (err) {
        console.error('Error fetching hotel data:', err);
        setLoading(prev => ({ ...prev, hotels: false }));
      }
    };
    
    fetchWeather();
    fetchFlights();
    fetchHotels();
  }, []);
  
  // Helper function to get weather icon
  const getWeatherIcon = (type) => {
    switch (type) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'stormy':
        return <Umbrella className="h-8 w-8 text-purple-500" />;
      case 'partly-cloudy':
        return <Cloud className="h-8 w-8 text-gray-400" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };
  
  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {/* Header */}
      <div className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Trip to {destination}</h1>
          <div className="flex flex-wrap items-center text-indigo-100">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{formatDate(checkInDate)} - {formatDate(checkOutDate)}</span>
            </div>
            <div className="flex items-center mb-2">
              <Plane className="h-5 w-5 mr-2" />
              <span>From {origin}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          {/* Weather Forecast */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Thermometer className="h-6 w-6 mr-2 text-indigo-600" />
                  Weather Forecast
                </h2>
                
                {loading.weather ? (
                  <div className="flex justify-center items-center h-48">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : weatherData ? (
                  <div className="space-y-4">
                    {weatherData.forecast.map((day, index) => (
                      <div 
                        key={day.date} 
                        className={`flex items-center justify-between p-3 rounded-lg ${index === 0 ? 'bg-indigo-50 border border-indigo-100' : ''}`}
                      >
                        <div className="flex items-center">
                          <div className="flex flex-col items-center justify-center w-16">
                            {getWeatherIcon(day.weatherType)}
                            <span className="text-xs mt-1 font-medium text-gray-600">{day.dayOfWeek}</span>
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">{formatDate(day.date)}</p>
                            <div className="flex text-sm text-gray-600 mt-1">
                              <span className="flex items-center mr-3">
                                <Umbrella className="h-3 w-3 mr-1" />
                                {day.precipitation}%
                              </span>
                              <span className="flex items-center">
                                <Wind className="h-3 w-3 mr-1" />
                                {day.windSpeed} km/h
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-xl">{day.maxTemp}°C</div>
                          <div className="text-gray-600 text-sm">{day.minTemp}°C</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Unable to load weather data
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Flight Prices */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Plane className="h-6 w-6 mr-2 text-indigo-600" />
                  Flight Options
                </h2>
                
                {loading.flights ? (
                  <div className="flex justify-center items-center h-48">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : flightData ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airline</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stops</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {flightData.map((flight) => (
                          <tr key={flight.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                  {flight.airline.substring(0, 2)}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{flight.airline}</div>
                                  <div className="text-sm text-gray-500">{flight.flightNumber}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {flight.departureTime}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {flight.arrivalTime}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {flight.duration}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">₹{flight.price.toLocaleString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="text-sm text-gray-900">{flight.platform}</span>
                                <ExternalLink className="h-4 w-4 ml-1 text-indigo-500" />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Unable to load flight data
                  </div>
                )}
              </div>
            </div>
            
            {/* Hotel Prices */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 mr-2 text-indigo-600" />
                  Hotel Options
                </h2>
                
                {loading.hotels ? (
                  <div className="flex justify-center items-center h-48">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : hotelData ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hotelData.map((hotel) => (
                      <div key={hotel.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-1">{hotel.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
                           
                          <div className="flex justify-between items-center mt-4">
                            <div>
                              <div className="text-gray-900 font-bold">₹{hotel.price.toLocaleString()}</div>
                              <div className="text-gray-500 text-xs">per night</div>
                            </div>
                            <div className="flex items-center text-indigo-600 text-sm">
                              <span>{hotel.platform}</span>
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Unable to load hotel data
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-12 text-center">
          <button 
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 text-lg"
          >
            Book Your Perfect Trip Now
          </button>
          <p className="mt-4 text-gray-600">
            We'll help you book the best flights and hotels at the best prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsPage;
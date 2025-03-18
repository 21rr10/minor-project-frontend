import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar, Star, ArrowRight } from 'lucide-react';

const ItineraryPage = () => {
  // In a real app, you would get these from URL params or route state
  const destination = 'Bhubaneswar';
  const mood = 'spiritual';
  
  // State for the itinerary data
  const [itineraryData, setItineraryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Mock function to fetch data from the backend
  useEffect(() => {
    // Simulate API call
    const fetchItinerary = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an actual API call
        // await fetch(`/api/itinerary?destination=${destination}&mood=${mood}`)
        
        // For demo purposes, using setTimeout to simulate network request
        setTimeout(() => {
          // Mock data that would come from your backend
          // The format matches what you described: "bhubaneswar\n beautiful temple1\n templ2\n"
          const mockResponse = `Bhubaneswar
Lingaraj Temple
Mukteshwar Temple
Rajarani Temple
Parasurameswara Temple
ISKCON Temple
Brahmeswara Temple
Ananta Vasudeva Temple
Bindu Sarovara
Dhauli Shanti Stupa
Odisha State Museum`;
          
          // Parse the data (split by newlines)
          const lines = mockResponse.split('\n');
          const cityName = lines[0];
          const attractions = lines.slice(1);
          
          // Create structured data
          const parsedData = {
            cityName,
            attractions: attractions.map((name, index) => ({
              id: index + 1,
              name,
              description: `One of the most significant spiritual destinations in ${cityName}. A must-visit for anyone seeking spiritual enlightenment.`,
              rating: (4 + Math.random()).toFixed(1),
              visitDuration: Math.floor(Math.random() * 3) + 1, // 1-3 hours
              image: `/api/placeholder/400/300`, // In a real app, this would be a real image URL
              highlights: [
                'Ancient architecture',
                'Peaceful surroundings',
                'Religious significance'
              ]
            }))
          };
          
          setItineraryData(parsedData);
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        setError('Failed to load itinerary. Please try again.');
        setLoading(false);
      }
    };
    
    fetchItinerary();
  }, [destination, mood]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Creating your perfect itinerary...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <button 
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  if (!itineraryData) return null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('/api/placeholder/1920/600')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover the Spiritual Side of {itineraryData.cityName}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We've curated the perfect spiritual journey based on your preferences. Explore sacred temples, 
            tranquil gardens, and experience the rich cultural heritage.
          </p>
        </div>
      </div>
      
      {/* Itinerary Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Your Spiritual Journey</h2>
                <p className="text-gray-600 mt-2">Explore these carefully selected destinations for a soulful experience</p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4 mr-1" />
                {itineraryData.attractions.length} Destinations
              </div>
            </div>
            
            {/* Timeline of attractions */}
            <div className="space-y-12">
              {itineraryData.attractions.map((attraction, index) => (
                <div key={attraction.id} className="relative">
                  {/* Timeline connector */}
                  {index < itineraryData.attractions.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200"></div>
                  )}
                  
                  <div className="flex">
                    {/* Day indicator */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl border-2 border-indigo-200">
                        Day {index + 1}
                      </div>
                    </div>
                    
                    {/* Attraction card */}
                    <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        <div className="md:flex-shrink-0 h-48 md:h-auto md:w-48 bg-gray-200">
                          <img 
                            src={attraction.image} 
                            alt={attraction.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold text-gray-900">{attraction.name}</h3>
                            <div className="ml-4 flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="ml-1 text-sm">{attraction.rating}/5</span>
                            </div>
                          </div>
                          
                          <p className="mt-3 text-gray-600">{attraction.description}</p>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <Clock className="h-3 w-3 mr-1" />
                              {attraction.visitDuration} hour{attraction.visitDuration > 1 ? 's' : ''}
                            </div>
                            {attraction.highlights.map((highlight, i) => (
                              <span 
                                key={i} 
                                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <button 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 text-lg"
          >
            Let's Explore
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="mt-4 text-gray-600">
            Ready to see weather conditions, flight prices, and hotel options for your trip?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
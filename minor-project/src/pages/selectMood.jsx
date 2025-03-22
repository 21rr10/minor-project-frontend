import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

const MoodSelectionPage = () => {
  // For navigation (in a real app)
  // const navigate = useNavigate();
  
  const [selectedMood, setSelectedMood] = useState('');
  
  // List of moods with emojis and descriptions
  const moods = [
    { id: 'spiritual', name: 'Spiritual', emoji: '🙏', description: 'Find peace in temples, shrines, and sacred spaces' },
    { id: 'adventurous', name: 'Adventurous', emoji: '🧗‍♂️', description: 'Seek thrills, outdoor activities, and exciting experiences' },
    { id: 'relaxing', name: 'Relaxing', emoji: '🌴', description: 'Unwind with peaceful parks, spas, and serene locations' },
    { id: 'cultural', name: 'Cultural', emoji: '🏛️', description: 'Explore museums, historical sites, and local traditions' },
    { id: 'culinary', name: 'Culinary', emoji: '🍽️', description: 'Discover local cuisine, food markets, and restaurants' },
    { id: 'romantic', name: 'Romantic', emoji: '❤️', description: 'Experience magical spots perfect for couples' },
    { id: 'family', name: 'Family-friendly', emoji: '👨‍👩‍👧‍👦', description: 'Enjoy attractions suitable for all ages' },
    { id: 'nightlife', name: 'Nightlife', emoji: '🌃', description: 'Experience vibrant bars, clubs, and evening entertainment' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood) {
      alert('Please select a mood to continue');
      return;
    }
    
    // In a real app, navigate to the next page
    console.log('Selected mood:', selectedMood);
    // navigate('/itinerary', { state: { mood: selectedMood } });
    
    // For demo purposes
    alert(`You selected: ${selectedMood} mood`);
  };

  return (
    <div>
            <Header/>
   
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col justify-center items-center p-6">

      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Let's Personalize Your Experience</h1>
          <p className="text-lg text-gray-600">
            Tell us what mood you're in for this trip, and we'll curate the perfect experiences for you.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              I'm feeling...
            </label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {moods.map((mood) => (
                <div
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`
                    p-4 rounded-xl cursor-pointer transition-all duration-300
                    ${selectedMood === mood.id 
                      ? 'bg-indigo-100 border-2 border-indigo-500 shadow-md' 
                      : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'}
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-2">{mood.emoji}</span>
                    <h3 className="font-medium text-lg mb-1">{mood.name}</h3>
                    <p className="text-sm text-gray-600">{mood.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 text-lg"
            >
              Create My Personalized Journey
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default MoodSelectionPage;
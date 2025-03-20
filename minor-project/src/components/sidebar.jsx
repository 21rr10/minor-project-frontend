import React from 'react';
import { User, Lock, Bell, Users, Calendar, LogOut, Upload } from 'lucide-react';

function Sidebar({ profileData, activeTab, setActiveTab }) {

  return (
    <div className="md:w-1/4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Summary */}
        <div className="p-6 text-center border-b border-gray-200">
          <div className="relative mx-auto w-32 h-32 mb-4">
            <img 
              src={profileData.profilePicture} 
              alt="Profile" 
              className="rounded-full object-cover w-full h-full"
            />
            <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700">
              <Upload className="h-4 w-4" />
            </button>
          </div>
          <h2 className="text-xl font-bold">{profileData.firstName} {profileData.lastName}</h2>
          <p className="text-gray-600">{profileData.email}</p>
        </div>
        
        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'profile' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Personal Information
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('security')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'security' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Lock className="h-5 w-5 mr-3" />
                Security
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'notifications' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('dependents')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'dependents' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="h-5 w-5 mr-3" />
                Dependents
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'bookings' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Calendar className="h-5 w-5 mr-3" />
                Booking History
              </button>
            </li>
          </ul>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full text-left px-4 py-2 rounded-lg flex items-center text-gray-700 hover:bg-gray-100">
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
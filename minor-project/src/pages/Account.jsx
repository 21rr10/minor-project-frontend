import React, { useState, useEffect } from 'react';
import Sidebar from "../components/sidebar";
import PersonalInfoTab from '../components/personalInfoTab';
import SecurityTab from '../components/securityTab';
import DependentsTab from '../components/dependentsTab';
import BookingsTab from '../components/bookingsTab';
import Header from '../components/header';

function Account() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('profile');
  
  // State for editing sections
  const [editingSection, setEditingSection] = useState(null);
  
  // State for showing calendar view in bookings tab
  const [showCalendarView, setShowCalendarView] = useState(false);
  
  // Mock profile data
  const [profileData, setProfileData] = useState({
    firstName: 'Ritesh',
    lastName: 'Ranjan',
    email: 'ranjan.ritesh21102003@gmail.com',
    phone: '+91 9508381490',
    address: 'kp3 KIIT',
    });
  
  // State for form data when editing
  const [formData, setFormData] = useState({...profileData});
    
  // State for bookings
  const [bookings, setBookings] = useState([
    {
      id: 'BK12345',
      from: 'New York JFK',
      to: 'London Heathrow',
      departDate: '2025-04-15',
      returnDate: '2025-04-22',
      airline: 'British Airways',
      status: 'Confirmed',
      passengers: 2
    },
    {
      id: 'BK12346',
      from: 'New York JFK',
      to: 'Paris CDG',
      departDate: '2025-05-10',
      returnDate: '2025-05-17',
      airline: 'Air France',
      status: 'Pending',
      passengers: 3
    },
    {
      id: 'BK12347',
      from: 'New York LGA',
      to: 'Chicago ORD',
      departDate: '2025-03-05',
      returnDate: '2025-03-07',
      airline: 'American Airlines',
      status: 'Completed',
      passengers: 1
    }
  ]);
  
  // Function to start editing a section
  const startEditing = (section) => {
    setEditingSection(section);
    setFormData({...profileData});
  };
  
  // Function to cancel editing
  const cancelEditing = () => {
    setEditingSection(null);
  };
  
  // Function to save changes
  const saveChanges = (section) => {
    if (section === 'personal') {
      setProfileData({...profileData, ...formData});
    }
    setEditingSection(null);
  };
  
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setProfileData({
        ...profileData        
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
    

  return (
    <div className="min-h-screen bg-gray-50" style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      overflow: "auto"
    }}>

      {/* Header */}
      <div className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar 
            profileData={profileData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              
              {/* Personal Information Tab */}
              {activeTab === 'profile' && (
                <PersonalInfoTab 
                  profileData={profileData}
                  editingSection={editingSection}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  startEditing={startEditing}
                  cancelEditing={cancelEditing}
                  saveChanges={saveChanges}
                />
              )}
              
              {/* Security Tab */}
              {activeTab === 'security' && <SecurityTab />}              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

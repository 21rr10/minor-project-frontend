import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";  // Import Header component
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import MoodSelectionPage from "./pages/selectMood";
import ItineraryPage from "./pages/itinerary";
import TravelDetailsPage from "./pages/Travel_deets";


function App() {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/signin" element={<Signin/>}/>
<Route path="/account" element={<Account/>}/>
<Route path="/moodSelection" element={<MoodSelectionPage/>}/>
<Route path="/itinerary" element={<ItineraryPage/>}/>
<Route path="/travelDetails" element={<TravelDetailsPage/>}/>
</Routes>
    </Router>
  )
}
export default App;

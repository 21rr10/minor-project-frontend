
import React from "react";
import Header from "./components/header";  // Import Header component
import "./App.css";
import Account from "./pages/Account";
import Home from "./pages/Home";
import MoodSelectionPage from "./pages/selectMood";
import ItineraryPage from "./pages/itinerary";
import TravelDetailsPage from "./pages/Travel_deets";


function App() {
  return (
    <div className="App">
      <Header /> 
      
      <Home></Home>
      {/* <MoodSelectionPage></MoodSelectionPage> */}
      {/* <ItineraryPage></ItineraryPage> */}
      {/* <TravelDetailsPage></TravelDetailsPage> */}
      {/* <Account></Account> */}
      
    </div>
  );
}

export default App;

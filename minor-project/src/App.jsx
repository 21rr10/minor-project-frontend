
import React from "react";
import Header from "./components/header";  // Import Header component
import "./App.css";
// import Account from "./pages/Account";
import Home from "./pages/Home";
import TravelDetailsPage from "./pages/Travel_deets";

function App() {
  return (
    <div className="App">
      <Header /> 
      
      <Home></Home>
      {/* <TravelDetailsPage></TravelDetailsPage> */}
      
      
    </div>
  );
}

export default App;

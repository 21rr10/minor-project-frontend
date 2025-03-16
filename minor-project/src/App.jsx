
import React from "react";
import Header from "./components/header";  // Import Header component
import "./App.css";
// import Account from "./pages/Account";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header /> 
      
      <Home></Home>
      
      
      <main>
        <h1>Welcome to The Trip Finder</h1>
        <p>Start planning your next adventure with us!</p>
      </main>
    </div>
  );
}

export default App;

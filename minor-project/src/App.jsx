
import React from "react";
import Header from "./components/Header";  // Import Header component
import "./App.css";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Header />  {/* Using Header component */}
      <Account></Account>
      
      
      
      <main>
        <h1>Welcome to The Trip Finder</h1>
        <p>Start planning your next adventure with us!</p>
      </main>
    </div>
  );
}

export default App;

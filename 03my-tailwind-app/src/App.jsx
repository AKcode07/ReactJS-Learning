// src/App.js
import React from "react";
import ProfileCard from "./components/Card";
import "./index.css"; // Ensure this line imports your Tailwind CSS

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ProfileCard />
      </div>
    </>
  );
}

export default App;

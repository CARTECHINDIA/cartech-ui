import React, { useState } from 'react';
import { MapPin } from "lucide-react";

const CityDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Ahmedabad"];

  const handleCityClick = (city) => {
    console.log("City selected:", city); // Log for city selection
    onSelect(city);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => {
        console.log("Location dropdown button clicked"); // Log for button click
        console.log("Current dropdown state before toggle:", isOpen); // Log current dropdown state
        setIsOpen(!isOpen);
        console.log("Location dropdown is now", !isOpen ? "open" : "closed"); // Log for dropdown state
        console.log("Dropdown visibility:", !isOpen ? "Visible" : "Hidden"); // Log dropdown visibility
      }} className="header-button header-button-secondary">
        <MapPin className="w-4 h-4" />
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 rounded shadow-lg mt-1 z-60 list-none">
          {cities.map((city) => (
            <li key={city} onClick={() => handleCityClick(city)} className="p-2 hover:bg-gray-100 cursor-pointer">
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityDropdown;

import React from 'react';
import cartechlogo from '../cartechlogo.png';
import CityDropdown from '../CityDropdown';
import { Search, Plus, Star, Heart, User } from "lucide-react";

function Header({ onCreate, onLogin, onBuy, onSell, onLocationClick }) {
  console.log("Header component received onLogin prop");
  return (
    <header className="header-sticky">
      <div className="container-responsive header-container">
        <img src={cartechlogo} alt="Car Tech India Logo" className="header-logo" />
        <span className="font-semibold text-xl">Car Tech India</span>
      <div className="header-buttons">
        <CityDropdown onSelect={(city) => console.log("Selected city:", city)} />
          <button onClick={onBuy} className="header-button header-button-secondary mobile-hidden">
            <Search className="w-4 h-4"/> Buy
          </button>
          <button onClick={onSell} className="header-button header-button-secondary mobile-hidden">
            <Plus className="w-4 h-4"/> Sell
          </button>
          <button className="header-button header-button-secondary mobile-hidden">
            <Star className="w-4 h-4"/>Featured
          </button>
          <button className="header-button header-button-secondary mobile-hidden">
            <Heart className="w-4 h-4"/>Saved
          </button>
          <button onClick={() => {
            console.log("Login button in Header clicked - opening modal");
            onLogin();
          }} className="header-button header-button-secondary">
            <User className="w-4 h-4"/>Login
          </button>
          <button onClick={onCreate} className="header-button header-button-primary">
            <Plus className="w-4 h-4"/>Post Listing
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

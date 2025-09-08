import React, { useState } from 'react';
import cartechlogo from '../cartechlogo.png';
import CityDropdown from '../CityDropdown';
import { Search, Plus, Star, Heart, User, Menu, X } from "lucide-react";

function Header({ onCreate, onLogin, onBuy, onSell, onLocationClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="header-sticky">
        <div className="container-responsive header-container">
          <div className="header-left">
            <img src={cartechlogo} alt="Car Tech India Logo" className="header-logo" />
            <CityDropdown onSelect={(city) => console.log("Selected city:", city)} />
          </div>
          <div className="header-center desktop-only">
            <button onClick={onBuy} className="header-button header-button-secondary">
              <Search className="w-4 h-4"/> Buy Car
            </button>
            <button onClick={onSell} className="header-button header-button-secondary">
              <Plus className="w-4 h-4"/> Sell Car
            </button>
            <button className="header-button header-button-secondary">
              <Star className="w-4 h-4"/>Featured
            </button>
            <button className="header-button header-button-secondary">
              <Heart className="w-4 h-4"/>Saved
            </button>
          </div>
          <div className="header-right desktop-only">
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
          <div className="mobile-menu-icon mobile-only">
            <button onClick={toggleMobileMenu} className="header-button header-button-secondary">
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <button onClick={toggleMobileMenu} className="close-menu-button">
              <X className="w-6 h-6" />
            </button>
            <CityDropdown onSelect={(city) => console.log("Selected city:", city)} />
            <button onClick={() => {
              toggleMobileMenu();
              setTimeout(() => onBuy(), 100);
            }} className="header-button header-button-secondary mobile-menu-item">
              <Search className="w-4 h-4"/> Buy
            </button>
            <button onClick={() => {
              toggleMobileMenu();
              setTimeout(() => onSell(), 100);
            }} className="header-button header-button-secondary mobile-menu-item">
              <Plus className="w-4 h-4"/> Sell
            </button>
            <button className="header-button header-button-secondary mobile-menu-item">
              <Star className="w-4 h-4"/>Featured
            </button>
            <button className="header-button header-button-secondary mobile-menu-item">
              <Heart className="w-4 h-4"/>Saved
            </button>
            <button onClick={() => {
              toggleMobileMenu();
              setTimeout(() => onLogin(), 100); // Close menu first, then open form
            }} className="header-button header-button-secondary mobile-menu-item">
              <User className="w-4 h-4"/>Login
            </button>
            <button onClick={() => {
              toggleMobileMenu();
              setTimeout(() => onCreate(), 100);
            }} className="header-button header-button-primary mobile-menu-item">
              <Plus className="w-4 h-4"/>Post Listing
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

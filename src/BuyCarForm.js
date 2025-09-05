import React, { useState } from 'react';
import { X, Search, Filter, MapPin, Fuel, Gauge, Settings2 } from "lucide-react";

const BuyCarForm = ({ open, onOpenChange, onSearch }) => {
  const [filters, setFilters] = useState({
    make: "Any",
    model: "",
    minYear: 0,
    maxPrice: 0,
    maxMileage: 0,
    fuel: "Any",
    transmission: "Any",
    location: "",
    condition: "Any"
  });
  const [isLoading, setIsLoading] = useState(false);

  const set = (patch) => setFilters((f) => ({ ...f, ...patch }));

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      onSearch(filters);
      setIsLoading(false);
      onOpenChange(false);
    }, 500);
  };

  const MAKES = ["Any", "Toyota", "Hyundai", "Tata", "Maruti", "Honda", "Mahindra"];
  const FUELS = ["Any", "Petrol", "Diesel", "CNG", "Electric"];
  const TRANSMISSIONS = ["Any", "Manual", "Automatic", "CVT"];
  const CONDITIONS = ["Any", "Used", "New", "Certified Pre-owned"];

  return (
    <div className={`modal-overlay buy-car-modal ${!open ? 'hidden' : ''}`}>
      <div className="modal-content">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">Find Your Perfect Car</h2>
            <p className="text-sm text-gray-600">Search for cars that match your preferences</p>
          </div>
          <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className={`create-listing-form-grid ${isLoading ? 'loading' : ''}`}>
          <div className="filter-group">
            <label className="filter-label">Make</label>
            <select 
              value={filters.make} 
              onChange={(e) => set({ make: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            >
              {MAKES.map((m) => (<option key={m} value={m}>{m}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Model</label>
            <input 
              value={filters.model} 
              onChange={(e) => set({ model: e.target.value })} 
              placeholder="e.g. Corolla, City"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Min Year</label>
            <input 
              type="number" 
              value={filters.minYear} 
              onChange={(e) => set({ minYear: Number(e.target.value) || 0 })}
              className="filter-input"
              disabled={isLoading}
              min="1990"
              max={new Date().getFullYear()}
              placeholder="2015"
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Max Price (INR)</label>
            <input 
              type="number" 
              value={filters.maxPrice} 
              onChange={(e) => set({ maxPrice: Number(e.target.value) || 0 })}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
              placeholder="1500000"
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Max Mileage (km)</label>
            <input 
              type="number" 
              value={filters.maxMileage} 
              onChange={(e) => set({ maxMileage: Number(e.target.value) || 0 })}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
              placeholder="50000"
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Fuel Type</label>
            <select 
              value={filters.fuel} 
              onChange={(e) => set({ fuel: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            >
              {FUELS.map((f) => (<option key={f} value={f}>{f}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Transmission</label>
            <select 
              value={filters.transmission} 
              onChange={(e) => set({ transmission: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            >
              {TRANSMISSIONS.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Condition</label>
            <select 
              value={filters.condition} 
              onChange={(e) => set({ condition: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            >
              {CONDITIONS.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <input 
              value={filters.location} 
              onChange={(e) => set({ location: e.target.value })} 
              placeholder="City, State"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-4 mt-4">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Search className="w-4 h-4" /> Search Tips
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Leave fields empty to search all options</li>
            <li>• Use location to find cars near you</li>
            <li>• Set price range to find cars within your budget</li>
            <li>• Filter by year to find newer models</li>
          </ul>
        </div>
        
        <div className="flex gap-2 justify-end mt-6 modal-actions">
          <button 
            onClick={() => {
              set({
                make: "Any",
                model: "",
                minYear: 0,
                maxPrice: 0,
                maxMileage: 0,
                fuel: "Any",
                transmission: "Any",
                location: "",
                condition: "Any"
              });
            }} 
            className="header-button header-button-secondary"
            disabled={isLoading}
          >
            Reset
          </button>
          <button 
            onClick={handleSearch} 
            className="header-button header-button-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Searching...
              </>
            ) : (
              <>
                <Search className="w-4 h-4"/> Search Cars
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCarForm;

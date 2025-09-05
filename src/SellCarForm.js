import React, { useState } from 'react';
import { X, Plus } from "lucide-react";

const SellCarForm = ({ open, onOpenChange, onSubmit }) => {
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    fuel: "Petrol",
    transmission: "Manual",
    location: "",
    image: "",
    condition: "Used",
    description: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const newCar = {
        id: Math.random(),
        make: form.make || "Custom",
        model: form.model || "Model",
        year: Number(form.year) || new Date().getFullYear(),
        price: Number(form.price) || 0,
        mileage: Number(form.mileage) || 0,
        fuel: form.fuel,
        transmission: form.transmission,
        location: form.location || "",
        condition: form.condition,
        featured: false,
        images: [form.image || "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop"],
        description: form.description || `${form.year} ${form.make} ${form.model} listed for sale.`,
        seller: { name: "You", phone: "", email: "" },
        postedAt: new Date().toISOString().slice(0, 10),
      };
      onSubmit(newCar);
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
  };

  const FUELS = ["Petrol", "Diesel", "CNG", "Electric"];
  const TRANSMISSIONS = ["Manual", "Automatic", "CVT"];
  const CONDITIONS = ["Used", "New", "Certified Pre-owned"];

  return (
    <div className={`modal-overlay sell-car-modal ${!open ? 'hidden' : ''}`}>
      <div className="modal-content">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">Sell Your Car</h2>
            <p className="text-sm text-gray-600">List your car for sale with detailed information</p>
          </div>
          <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className={`create-listing-form-grid ${isLoading ? 'loading' : ''}`}>
          <div className="filter-group">
            <label className="filter-label">Make *</label>
            <input 
              value={form.make} 
              onChange={(e) => set({ make: e.target.value })} 
              placeholder="e.g. Toyota, Honda, Maruti"
              className="filter-input"
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Model *</label>
            <input 
              value={form.model} 
              onChange={(e) => set({ model: e.target.value })} 
              placeholder="e.g. Corolla, City, Baleno"
              className="filter-input"
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Year *</label>
            <input 
              type="number" 
              value={form.year} 
              onChange={(e) => set({ year: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              min="1990"
              max={new Date().getFullYear() + 1}
              required
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Price (INR) *</label>
            <input 
              type="number" 
              value={form.price} 
              onChange={(e) => set({ price: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
              required
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Mileage (km) *</label>
            <input 
              type="number" 
              value={form.mileage} 
              onChange={(e) => set({ mileage: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
              required
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Fuel Type *</label>
            <select 
              value={form.fuel} 
              onChange={(e) => set({ fuel: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            >
              {FUELS.map((f) => (<option key={f} value={f}>{f}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Transmission *</label>
            <select 
              value={form.transmission} 
              onChange={(e) => set({ transmission: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            >
              {TRANSMISSIONS.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Condition *</label>
            <select 
              value={form.condition} 
              onChange={(e) => set({ condition: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            >
              {CONDITIONS.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Location *</label>
            <input 
              value={form.location} 
              onChange={(e) => set({ location: e.target.value })} 
              placeholder="City, State"
              className="filter-input"
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Image URL</label>
            <input 
              value={form.image} 
              onChange={(e) => set({ image: e.target.value })} 
              placeholder="https://..."
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          
          <div className="filter-group col-span-full">
            <label className="filter-label">Description</label>
            <textarea 
              value={form.description} 
              onChange={(e) => set({ description: e.target.value })}
              placeholder="Describe your car's condition, features, and any additional details..."
              className="filter-input"
              rows="3"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="flex gap-2 justify-end mt-6 modal-actions">
          <button 
            onClick={() => onOpenChange(false)} 
            className="header-button header-button-secondary"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            className="header-button header-button-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Publishing...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4"/> List Car for Sale
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellCarForm;

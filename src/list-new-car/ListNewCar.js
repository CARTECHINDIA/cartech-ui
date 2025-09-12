import React, { useState } from 'react';
import { Plus, X } from "lucide-react";
import './ListNewCar.css';

const MAKES = ["Any", "Toyota", "Hyundai", "Tata", "Maruti", "Honda", "Mahindra"];
const FUELS = ["Any", "Petrol", "Diesel","CNG", "Electric"];
const TRANSMISSIONS = ["Any", "Manual", "Automatic", "CVT"];

function CreateListingDialog({ open, onOpenChange, onCreate }){
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
    brand: "",
    variant: "",
    fueltype: "",
    body_type: "",
    segment: "",
    engine_cc: "",
    battery_kWh: "",
    power_bhp: "",
    Torque_Nm: "",
    Drivetrain: "",
    seating: "",
    Efficiency_Unit: "",
    Ex_Showroom_price_lakh: "",
    Launch_year: "",
    Market_status: "",
    BS6_phase: "",
    Safety_rating_stars: "",
    Length_mm: "",
    Width_mm: "",
    height_mm: "",
    Wheelbase_mm: "",
    Ground_clearance_mm: "",
    color_option: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const set = (patch)=>setForm((f)=>({...f, ...patch}));

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
        condition: "Used",
        featured: false,
        images: [form.image || "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop"],
        description: `${form.year} ${form.make} ${form.model} listed via DriveMart.`,
        seller: { name: "You", phone: "", email: "" },
        postedAt: new Date().toISOString().slice(0,10),
        brand: form.brand || "",
        variant: form.variant || "",
        fueltype: form.fueltype || "",
        body_type: form.body_type || "",
        segment: form.segment || "",
        engine_cc: form.engine_cc || "",
        battery_kWh: form.battery_kWh || "",
        power_bhp: form.power_bhp || "",
        Torque_Nm: form.Torque_Nm || "",
        Drivetrain: form.Drivetrain || "",
        seating: form.seating || "",
        Efficiency_Unit: form.Efficiency_Unit || "",
        Ex_Showroom_price_lakh: form.Ex_Showroom_price_lakh || "",
        Launch_year: form.Launch_year || "",
        Market_status: form.Market_status || "",
        BS6_phase: form.BS6_phase || "",
        Safety_rating_stars: form.Safety_rating_stars || "",
        Length_mm: form.Length_mm || "",
        Width_mm: form.Width_mm || "",
        height_mm: form.height_mm || "",
        Wheelbase_mm: form.Wheelbase_mm || "",
        Ground_clearance_mm: form.Ground_clearance_mm || "",
        color_option: form.color_option || ""
      };
      onCreate(newCar);
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <div className={`modal-overlay create-listing-modal ${!open ? 'hidden' : ''}`}>
      <div className="modal-content">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">Create Listing</h2>
            <p className="text-sm text-gray-600">Add your car details. You can edit later.</p>
          </div>
          <button onClick={() => { console.log("CreateListingDialog close button clicked"); onOpenChange(false); }} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className={`create-listing-form-grid ${isLoading ? 'loading' : ''}`}>
          <div className="filter-group">
            <label className="filter-label">Make</label>
            <input
              value={form.make}
              onChange={(e)=>set({make:e.target.value})}
              placeholder="e.g. Toyota"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Model</label>
            <input
              value={form.model}
              onChange={(e)=>set({model:e.target.value})}
              placeholder="e.g. Corolla"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Year</label>
            <input
              type="number"
              value={form.year}
              onChange={(e)=>set({year:e.target.value})}
              className="filter-input"
              disabled={isLoading}
              min="1990"
              max={new Date().getFullYear() + 1}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Price (INR)</label>
            <input
              type="number"
              value={form.price}
              onChange={(e)=>set({price:e.target.value})}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Mileage (km)</label>
            <input
              type="number"
              value={form.mileage}
              onChange={(e)=>set({mileage:e.target.value})}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Fuel</label>
            <select
              value={form.fuel}
              onChange={(e)=>set({fuel:e.target.value})}
              className="filter-input"
              disabled={isLoading}
            >
              {FUELS.filter(f=>f!=="Any").map((f)=>(<option key={f} value={f}>{f}</option>))}
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Transmission</label>
            <select
              value={form.transmission}
              onChange={(e)=>set({transmission:e.target.value})}
              className="filter-input"
              disabled={isLoading}
            >
              {TRANSMISSIONS.filter(t=>t!=="Any").map((t)=>(<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <input
              value={form.location}
              onChange={(e)=>set({location:e.target.value})}
              placeholder="City, State"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Image URL</label>
            <input
              value={form.image}
              onChange={(e)=>set({image:e.target.value})}
              placeholder="https://..."
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Brand</label>
            <input
              value={form.brand}
              onChange={(e)=>set({brand:e.target.value})}
              placeholder="e.g. Toyota"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Variant</label>
            <input
              value={form.variant}
              onChange={(e)=>set({variant:e.target.value})}
              placeholder="e.g. VX"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Fuel Type</label>
            <input
              value={form.fueltype}
              onChange={(e)=>set({fueltype:e.target.value})}
              placeholder="e.g. Petrol"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Body Type</label>
            <input
              value={form.body_type}
              onChange={(e)=>set({body_type:e.target.value})}
              placeholder="e.g. Sedan"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Segment</label>
            <input
              value={form.segment}
              onChange={(e)=>set({segment:e.target.value})}
              placeholder="e.g. Compact"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Engine CC</label>
            <input
              type="number"
              value={form.engine_cc}
              onChange={(e)=>set({engine_cc:e.target.value})}
              placeholder="e.g. 1200"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Battery kWh</label>
            <input
              type="number"
              value={form.battery_kWh}
              onChange={(e)=>set({battery_kWh:e.target.value})}
              placeholder="e.g. 40"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Power BHP</label>
            <input
              type="number"
              value={form.power_bhp}
              onChange={(e)=>set({power_bhp:e.target.value})}
              placeholder="e.g. 100"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Torque Nm</label>
            <input
              type="number"
              value={form.Torque_Nm}
              onChange={(e)=>set({Torque_Nm:e.target.value})}
              placeholder="e.g. 150"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Drivetrain</label>
            <input
              value={form.Drivetrain}
              onChange={(e)=>set({Drivetrain:e.target.value})}
              placeholder="e.g. FWD"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Seating</label>
            <input
              type="number"
              value={form.seating}
              onChange={(e)=>set({seating:e.target.value})}
              placeholder="e.g. 5"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Efficiency Unit</label>
            <input
              value={form.Efficiency_Unit}
              onChange={(e)=>set({Efficiency_Unit:e.target.value})}
              placeholder="e.g. kmpl"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Ex-Showroom Price Lakh</label>
            <input
              type="number"
              value={form.Ex_Showroom_price_lakh}
              onChange={(e)=>set({Ex_Showroom_price_lakh:e.target.value})}
              placeholder="e.g. 5.5"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Launch Year</label>
            <input
              type="number"
              value={form.Launch_year}
              onChange={(e)=>set({Launch_year:e.target.value})}
              placeholder="e.g. 2020"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Market Status</label>
            <input
              value={form.Market_status}
              onChange={(e)=>set({Market_status:e.target.value})}
              placeholder="e.g. Active"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">BS6 Phase</label>
            <input
              value={form.BS6_phase}
              onChange={(e)=>set({BS6_phase:e.target.value})}
              placeholder="e.g. BS6"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Safety Rating Stars</label>
            <input
              type="number"
              value={form.Safety_rating_stars}
              onChange={(e)=>set({Safety_rating_stars:e.target.value})}
              placeholder="e.g. 5"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Length mm</label>
            <input
              type="number"
              value={form.Length_mm}
              onChange={(e)=>set({Length_mm:e.target.value})}
              placeholder="e.g. 4000"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Width mm</label>
            <input
              type="number"
              value={form.Width_mm}
              onChange={(e)=>set({Width_mm:e.target.value})}
              placeholder="e.g. 1700"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Height mm</label>
            <input
              type="number"
              value={form.height_mm}
              onChange={(e)=>set({height_mm:e.target.value})}
              placeholder="e.g. 1500"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Wheelbase mm</label>
            <input
              type="number"
              value={form.Wheelbase_mm}
              onChange={(e)=>set({Wheelbase_mm:e.target.value})}
              placeholder="e.g. 2500"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Ground Clearance mm</label>
            <input
              type="number"
              value={form.Ground_clearance_mm}
              onChange={(e)=>set({Ground_clearance_mm:e.target.value})}
              placeholder="e.g. 170"
              className="filter-input"
              disabled={isLoading}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Color Option</label>
            <input
              value={form.color_option}
              onChange={(e)=>set({color_option:e.target.value})}
              placeholder="e.g. Red, Blue"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-6 modal-actions">
          <button
            onClick={() => {
              console.log("Cancel button clicked");
              onOpenChange(false);
            }}
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
                <Plus className="w-4 h-4"/> Publish
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateListingDialog;

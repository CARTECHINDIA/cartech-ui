import React, { useState } from 'react';
import { Plus, X } from "lucide-react";
import './ListNewCar.css';

const MAKES = ["Any", "Toyota", "Hyundai", "Tata", "Maruti", "Honda", "Mahindra"];
const FUELS = ["Any", "Petrol", "Diesel","CNG", "Electric"];
const TRANSMISSIONS = ["Any", "Manual", "Automatic", "CVT"];

function CreateListingDialog({ open, onOpenChange, onCreate }){
  const [form, setForm] = useState({
    regNumber: "",
    brand: "",
    variant: "",
    model: "",
    manufactureYear: new Date().getFullYear(),
    fuelType: "",
    transmission: "Manual",
    kmDriven: 0,
    bodyType: "",
    color: "",
    owners: 0,
    price: 0,
    condition: "Used",
    insurance: "",
    registrationDate: "",
    state: "",
    city: "",
    status: "",
    images: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const set = (patch)=>setForm((f)=>({...f, ...patch}));

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imagePromises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then(imageUrls => {
      set({ images: [...form.images, ...imageUrls] });
    });
  };

  const removeImage = (index) => {
    set({ images: form.images.filter((_, i) => i !== index) });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const newCar = {
      id: Math.random(),
      regNumber: form.regNumber || "",
      brand: form.brand || "",
      variant: form.variant || "",
      model: form.model || "",
      manufactureYear: Number(form.manufactureYear) || new Date().getFullYear(),
      fuelType: form.fuelType || "",
      transmission: form.transmission,
      kmDriven: Number(form.kmDriven) || 0,
      bodyType: form.bodyType || "",
      color: form.color || "",
      owners: Number(form.owners) || 0,
      price: Number(form.price) || 0,
      condition: form.condition || "Used",
      insurance: form.insurance || "",
      registrationDate: form.registrationDate || "",
      state: form.state || "",
      city: form.city || "",
      status: form.status || "",
      images: form.images.length > 0 ? form.images : ["https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop"],
      seller: { name: "You", phone: "", email: "" },
      postedAt: new Date().toISOString().slice(0,10),
      description: `${form.manufactureYear} ${form.brand} ${form.model} listed via DriveMart.`,
      featured: false
    };

    fetch('http://98.80.120.96:8080/cartech/car/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCar)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to save car data');
      }
      return response.json();
    })
    .then(data => {
      console.log('Car saved successfully:', data);
      onCreate(newCar);
      setIsLoading(false);
      onOpenChange(false);
    })
    .catch(error => {
      console.error('Error saving car:', error);
      setIsLoading(false);
      // Optionally show error to user
    });
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
            <label className="filter-label">Registration Number</label>
            <input
              value={form.regNumber}
              onChange={(e) => set({ regNumber: e.target.value })}
              placeholder="e.g. MH12AB1234"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Brand</label>
            <input
              value={form.brand}
              onChange={(e) => set({ brand: e.target.value })}
              placeholder="e.g. Toyota"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Variant</label>
            <input
              value={form.variant}
              onChange={(e) => set({ variant: e.target.value })}
              placeholder="e.g. VX"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Model</label>
            <input
              value={form.model}
              onChange={(e) => set({ model: e.target.value })}
              placeholder="e.g. Corolla"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Manufacture Year</label>
            <input
              type="number"
              value={form.manufactureYear}
              onChange={(e) => set({ manufactureYear: e.target.value })}
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
              onChange={(e) => set({ price: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Kilometers Driven</label>
            <input
              type="number"
              value={form.kmDriven}
              onChange={(e) => set({ kmDriven: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Fuel Type</label>
            <input
              value={form.fuelType}
              onChange={(e) => set({ fuelType: e.target.value })}
              placeholder="e.g. Petrol"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Transmission</label>
            <select
              value={form.transmission}
              onChange={(e) => set({ transmission: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            >
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="CVT">CVT</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Body Type</label>
            <input
              value={form.bodyType}
              onChange={(e) => set({ bodyType: e.target.value })}
              placeholder="e.g. Sedan"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Color</label>
            <input
              value={form.color}
              onChange={(e) => set({ color: e.target.value })}
              placeholder="e.g. Red"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Owners</label>
            <input
              type="number"
              value={form.owners}
              onChange={(e) => set({ owners: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              min="0"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Condition</label>
            <select
              value={form.condition}
              onChange={(e) => set({ condition: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            >
              <option value="Used">Used</option>
              <option value="New">New</option>
              <option value="Certified Pre-owned">Certified Pre-owned</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Insurance</label>
            <input
              value={form.insurance}
              onChange={(e) => set({ insurance: e.target.value })}
              placeholder="Insurance details"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Registration Date</label>
            <input
              type="date"
              value={form.registrationDate}
              onChange={(e) => set({ registrationDate: e.target.value })}
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">State</label>
            <input
              value={form.state}
              onChange={(e) => set({ state: e.target.value })}
              placeholder="State"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">City</label>
            <input
              value={form.city}
              onChange={(e) => set({ city: e.target.value })}
              placeholder="City"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <input
              value={form.status}
              onChange={(e) => set({ status: e.target.value })}
              placeholder="Status"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group col-span-full">
            <label className="filter-label">Images</label>
            <div className="space-y-2">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="filter-input"
                disabled={isLoading}
              />
              {form.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {form.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-20 object-cover rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                        disabled={isLoading}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
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

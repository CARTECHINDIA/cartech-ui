import React, { useState } from 'react';
import axios from 'axios';
import { X } from "lucide-react";
import './BidForm.css';

const BidForm = ({ open, onOpenChange }) => {
  const [form, setForm] = useState({
    carSellingId: '',
    startAmount: '',
    minIncrement: '', 
    startTime: '',
    endTime: '',
    status: 'SCHEDULED',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      const payload = {
        carSellingId: Number(form.carSellingId),
        startAmount: Number(form.startAmount),
        minIncrement: Number(form.minIncrement),
        startTime: form.startTime,
        endTime: form.endTime,
        status: form.status,
      };
      const response = await axios.post('http://98.80.120.96:8080/cartech/bidding', payload);
      setMessage({ type: 'success', text: 'Bidding scheduled successfully!' });
      setIsLoading(false);
      onOpenChange(false);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to schedule bidding. Please try again.' });
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay bid-form-modal">
      <div className="modal-content">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">Schedule a Bidding</h2>
            <p className="text-sm text-gray-600">Fill in the details to schedule a bidding for a car.</p>
          </div>
          <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className={`bid-form-grid ${isLoading ? 'loading' : ''}`}>
          <div className="filter-group">
            <label className="filter-label">Car Selling ID *</label>
            <input
              type="number"
              value={form.carSellingId}
              onChange={(e) => set({ carSellingId: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Start Amount (INR) *</label>
            <input
              type="number"
              value={form.startAmount}
              onChange={(e) => set({ startAmount: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
              min="0"
              step="100"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Min Increment (INR) *</label>
            <input
              type="number"
              value={form.minIncrement}
              onChange={(e) => set({ minIncrement: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
              min="0"
              step="100"
              placeholder="e.g. 5000"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Start Time *</label>
            <input
              type="datetime-local"
              value={form.startTime}
              onChange={(e) => set({ startTime: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">End Time *</label>
            <input
              type="datetime-local"
              value={form.endTime}
              onChange={(e) => set({ endTime: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Status *</label>
            <select
              value={form.status}
              onChange={(e) => set({ status: e.target.value })}
              className="filter-input"
              disabled={isLoading}
              required
            >
              <option value="SCHEDULED">SCHEDULED</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>
        </div>

        {message && (
          <div className={`message ${message.type === 'error' ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}

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
                Scheduling...
              </>
            ) : (
              'Schedule Bidding'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidForm;

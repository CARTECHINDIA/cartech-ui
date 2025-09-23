import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const API_BASE_URL = 'http://98.80.120.96:8080/cartech'; // Backend API URL

const LoginForm = ({ onClose, onCreateAccount, onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Login state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!loginData.email.trim() || !loginData.password.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, loginData);
      // Handle success, e.g., store token
      console.log('Login successful:', response.data);
      onLoginSuccess && onLoginSuccess();
      onClose();
    } catch (err) {
      console.error('Login error:', err);

      // Handle different types of errors
      if (err.response) {
        // Server responded with error status
        if (err.response.status === 401) {
          setError('Invalid email or password. Please check your credentials.');
        } else if (err.response.status === 404) {
          setError('Login service is currently unavailable. Please try again later.');
        } else if (err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError(`Login failed (${err.response.status}). Please try again.`);
        }
      } else if (err.request) {
        // Network error
        setError('Network error. Please check your internet connection and try again.');
      } else {
        // Other error
        setError('An unexpected error occurred. Please try again.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-modal">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Processing...' : 'Login'}
          </button>
        </form>
        <button onClick={onCreateAccount} className="toggle-button">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

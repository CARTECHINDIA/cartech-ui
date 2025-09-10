import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const API_BASE_URL = 'http://localhost:3001/api'; // Adjust as needed

const LoginForm = ({ onClose, onCreateAccount }) => {
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

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, loginData);
      // Handle success, e.g., store token
      console.log('Login successful:', response.data);
      onClose();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('An error occurred');
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

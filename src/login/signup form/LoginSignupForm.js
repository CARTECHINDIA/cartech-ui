import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginSignupForm.css';

const API_BASE_URL = 'http://localhost:3001/api'; // Adjust as needed

const LoginSignupForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValidating, setEmailValidating] = useState(false);

  // Login state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Signup state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    retypePassword: '',
    city: '',
    area: '',
    address: '',
    dob: '',  // New field for Date of Birth
    role: 'Buyer',  // New field for Sign Up as
    document: null  // New field for dealer document
  });

  // Debounced email validation for signup
  useEffect(() => {
    if (!isLogin && signupData.email) {
      const timer = setTimeout(async () => {
        setEmailValidating(true);
        try {
          const response = await axios.get(`${API_BASE_URL}/check-email`, {
            params: { email: signupData.email }
          });
          if (response.data.available === false) {
            setEmailError('Email is already taken');
          } else {
            setEmailError('');
          }
        } catch (err) {
          console.error('Email validation error:', err);
          setEmailError('');
        }
        setEmailValidating(false);
      }, 500); // 500ms debounce

      return () => clearTimeout(timer);
    } else {
      setEmailError('');
      setEmailValidating(false);
    }
  }, [signupData.email, isLogin]);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSignupData({ ...signupData, document: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const response = await axios.post(`${API_BASE_URL}/login`, loginData);
        // Handle success, e.g., store token
        console.log('Login successful:', response.data);
        onClose();
      } else {
        if (emailError) {
          setError('Please fix the email error before submitting');
          setLoading(false);
          return;
        }
        if (signupData.password !== signupData.retypePassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        const response = await axios.post(`${API_BASE_URL}/signup`, signupData);
        console.log('Signup successful:', response.data);
        onClose();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
    setLoading(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmailError('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-signup-modal">
        <button onClick={onClose} className="close-button">X</button>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
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
            </>
          ) : (
            <>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>

              <div className="form-group">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={signupData.dob}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your @email"
                />
                {emailValidating && <span className="validating">Checking...</span>}
                {emailError && <span className="email-error">{emailError}</span>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <label>Retype Password:</label>
                <input
                  type="password"
                  name="retypePassword"
                  value={signupData.retypePassword}
                  onChange={handleSignupChange}
                  required
                  placeholder="Retype your password"
                />
              </div>
              <div className="form-group">
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={signupData.city}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your city"
                />
              </div>
              <div className="form-group">
                <label>Area:</label>
                <input
                  type="text"
                  name="area"
                  value={signupData.area}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your area"
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={signupData.address}
                  onChange={handleSignupChange}
                  required
                  placeholder="Enter your address"
                  rows="3"
                />
              </div>
  
              <div className="form-group">
                <label>Sign Up as:</label>
                <select
                  name="role"
                  value={signupData.role}
                  onChange={handleSignupChange}
                  required
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                  <option value="Dealer">Dealer</option>
                </select>
              </div>

              {signupData.role === 'Dealer' && (
                <div className="form-group">
                  <label>Browse Document:</label>
                  <input
                    type="file"
                    name="document"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    required
                  />
                </div>
              )}
            </>
          )}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        <button
          onClick={toggleMode}
          className="toggle-button"
        >
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;

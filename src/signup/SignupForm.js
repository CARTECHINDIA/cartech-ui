import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignupForm.css';

const API_BASE_URL = 'http://98.80.120.96:8080/cartech';

function SignupForm({ onClose, onAlreadyHaveAccount }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValidating, setEmailValidating] = useState(false);

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    retypePassword: '',
    city: '',
    area: '',
    address: '',
    dob: '',
    role: 'BUYER',
    document: ''
  });

  // Email validation with debounce
  useEffect(() => {
    // if (signupData.email) {
    //   const timer = setTimeout(async () => {
    //     setEmailValidating(true);
    //     try {
    //       const res = await axios.get(`${API_BASE_URL}/check-email`, {
    //         params: { email: signupData.email }
    //       });
    //       if (res.data.available === false) {
    //         setEmailError('Email is already taken');
    //       } else {
    //         setEmailError('');
    //       }
    //     } catch (e) {
    //       console.error('Email validation failed', e);
    //       setEmailError('');
    //     }
    //     setEmailValidating(false);
    //   }, 500);

    //   return () => clearTimeout(timer);
    // } else {
    //   setEmailError('');
    // }
  }, [signupData.email]);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignupData(prev => ({ ...prev, document: reader.result.split(',')[1] }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (emailError) {
      setError('Please fix the email error before submitting');
      return;
    }
    if (signupData.password !== signupData.retypePassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // Use FormData for multipart/form-data to support file upload
      const formData = new FormData();
      formData.append('firstName', signupData.firstName);
      formData.append('lastName', signupData.lastName);
      formData.append('phone', signupData.phone);
      formData.append('email', signupData.email);
      formData.append('username', signupData.username);
      formData.append('password', signupData.password);
      formData.append('city', signupData.city);
      formData.append('area', signupData.area);
      formData.append('address', signupData.address);
      formData.append('dob', signupData.dob);
      // Append role as JSON string array
formData.append('role', signupData.role);
      if (signupData.role === 'DEALER' && signupData.document) {
        // Convert base64 document to Blob and append as file
        const byteCharacters = atob(signupData.document);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray]);
        formData.append('document', blob, 'document');
      }

      console.log('Sending registration POST request with FormData');

      const res = await axios.post(`${API_BASE_URL}/user/register`, formData);

      console.log('Registration success:', res.data);
      alert('Registration successful! Please log in.');
      onClose();
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Registration failed');
      } else {
        setError('Unable to connect to server');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content signup-modal">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Sign Up</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={signupData.firstName}
              onChange={handleSignupChange} required />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={signupData.lastName}
              onChange={handleSignupChange} required />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" value={signupData.phone}
              onChange={handleSignupChange} required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={signupData.email}
              onChange={handleSignupChange} required />
            {emailValidating && <span className="validating">Checking...</span>}
            {emailError && <span className="email-error">{emailError}</span>}
          </div>

          {/* Username */}
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="username" value={signupData.username}
              onChange={handleSignupChange} required />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={signupData.password}
              onChange={handleSignupChange} required />
          </div>

          {/* Retype Password */}
          <div className="form-group">
            <label>Retype Password:</label>
            <input type="password" name="retypePassword" value={signupData.retypePassword}
              onChange={handleSignupChange} required />
          </div>

          {/* City */}
          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" value={signupData.city}
              onChange={handleSignupChange} required />
          </div>

          {/* Area */}
          <div className="form-group">
            <label>Area:</label>
            <input type="text" name="area" value={signupData.area}
              onChange={handleSignupChange} required />
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" value={signupData.address}
              onChange={handleSignupChange} required rows="3"></textarea>
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={signupData.dob} onChange={handleSignupChange} required />
          </div>
          {/* Role */}
          <div className="form-group">
            <label>Sign Up as:</label>
          <select name="role" value={signupData.role} onChange={handleSignupChange}>
            <option value="BUYER">Buyer</option>
            <option value="SELLER">Seller</option>
            <option value="DEALER">Dealer</option>
          </select>
          </div>

          {/* Dealer Document */}
          {signupData.role === 'DEALER' && (
            <div className="form-group">
              <label>Dealer Document:</label>
              <input type="file" name="document" accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange} required />
            </div>
          )}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Processing...' : 'Sign Up'}
          </button>
        </form>

        <button onClick={onAlreadyHaveAccount} className="toggle-button">
          Already have an account?
        </button>
      </div>
    </div>
  );
}

export default SignupForm;

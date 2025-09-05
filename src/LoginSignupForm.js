import React, { useState } from 'react';

const LoginSignupForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log(isLogin ? 'Logging in...' : 'Signing up...');
    onClose(); // Close the form after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-signup-modal">
        <button onClick={onClose} className="close-button">X</button>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button 
          onClick={() => setIsLogin(!isLogin)} 
          className="toggle-button"
        >
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;

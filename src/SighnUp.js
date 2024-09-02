import React, { useState } from 'react';
import './Signup.css'; // Importing the CSS file
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serverError, setServerError] = useState('');
  const [errors, setErrors] = useState({ phoneNumber: '' });

  const navigate = useNavigate(); // Correctly call useNavigate

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^[6789]\d{9}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      if (!validatePhoneNumber(value)) {
        setErrors({ ...errors, phoneNumber: 'Invalid phone number. It should be 10 digits long.' });
      } else {
        setErrors({ ...errors, phoneNumber: '' });
      }
    }

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (errors.phoneNumber) {
      alert('Please correct the errors before submitting.');
      return;
    }

    try {
      console.log('Register successful: ', email, username, password, phoneNumber);
      alert('Register successful!');
      navigate('/Dashboard');
    } catch (error) {
      console.error('Register failed: ', error);
      const errorMessage = error.response?.data || error.message || 'Registration failed. Please check your credentials and try again.';
      alert(errorMessage);
      setServerError(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <h2>Register</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            id="phone-number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
        </div>
        {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
        <button type="submit" className="register-button">Register</button>
        <div className="login-link">
          <Link to="/">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

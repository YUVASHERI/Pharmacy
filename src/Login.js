// Login.js
import React, { useState } from 'react';
import './Login.css'; // Importing the CSS file
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('deepika');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    try{
      console.log('Login sucessful!: ', username, password);
      alert('Login successful!');
      navigate('/Dashboard');
    }
    catch (error){
      console.log('Login failed: ', error.response?.data || error.message);
      alert('Login failed. Please check credentials and try again.');
      setServerError(error.response?.data || 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        {serverError && <p style={{ color: 'red '}}>{serverError}</p>}
        <button type="submit" className="login-button" >Login</button>
        <div className="login-link">
          <Link to = '/SignUp' >You don't have an account? Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
// import { login } from '../services/api';
import { login } from '../utils/fetchData';       // without axios
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setUserId, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      if (response.success) {                 // response.data.success
        setUserId(response.userId);         // response.data.userId - if axios used
        onLoginSuccess(username);
        navigate('/tracker');
        alert('Login successful!');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
        required
      />
      <button type="submit" className="login-button">Login</button>

      
      <div className="signup-prompt">
        <p>Don't have an account? <span onClick={navigateToSignup} className="signup-link">Sign up here</span></p>
      </div>
    </form>
  );
};

export default Login;


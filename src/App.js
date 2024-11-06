import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrackerDashboard from './pages/TrackerDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const [userId, setUserId] = useState('672213a291ad5b9053ee57a3');     // malvi@gmail.com,    121212
  // const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  //
  const handleLoginSuccess = (username) => {
    setUsername(username); // Set the username in App's state
  };

  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/tracker" element={<TrackerDashboard userId={userId} username={username} />} />
          {/* <Route path="/login" element={<Login setUserId={(id) => { setUserId(id); setIsLogin(true); }}/>} /> */}
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} setUserId={(id) => { setUserId(id) }}/>} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
        <Footer />
      </Box>
    </>
  )
};

export default App;

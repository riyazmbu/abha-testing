import React from 'react';
import Dashboard from './dashboard';
import Login from './Login';
import CreateAbha from './CreateAbha';
import bgImage from './background image.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Authentication from './Authentication';
import Profile from './Profile';
import LandingPage from './landingpage';

const App = () => {
  const userData = {
    abhaId: '1234 5678 9012 34',  // ABHA ID (14 digits)
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+91 9876543210',
    aadharNumber: '1234 5678 9012',
    abhaAddress: 'john.abha@abdm',
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element= {<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard userData={userData} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faQrcode, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import ScanAndShare from './ScanAndShare'; 
import Profile from './Profile';  // Import the Profile component

const Dashboard = (userData) => {
  const [activeTab, setActiveTab] = useState('profile'); // State to manage active tab
  const name = "Riyaz";
  const navigate = useNavigate();  // Initialize navigate for redirection

  const handleLogout = () => {
    // Clear session or token (localStorage or cookies)
    localStorage.removeItem('authToken');  // Remove the token from localStorage

    // Redirect to login page after logout
    navigate('/login');  // Use navigate inside the component
  };

  return (
    <>
      {/* Header */}
      <header className="!bg-green-600 text-white p-8">
        <h1 className="text-2xl font-bold text-center md:ml-64">ABHA Health App</h1>
      </header>

      {/* Sidebar for Laptop/Desktop view */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-64 bg-gray-800 text-white py-20 px-4">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-3xl font-bold">Hi {name}</h1>

          {/* Home Button */}
          <button
            className={`flex items-center w-full py-3 px-4 hover:bg-gray-700 rounded-lg focus:outline-none ${activeTab === 'home' ? 'bg-blue-500' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <FontAwesomeIcon icon={faHome} className="text-2xl mr-3" />
            <span className="text-lg">Home</span>
          </button>

          {/* Scan Button */}
          <button
            className={`flex items-center w-full py-3 px-4 hover:bg-gray-700 rounded-lg focus:outline-none ${activeTab === 'scan' ? 'bg-blue-500' : ''}`}
            onClick={() => setActiveTab('scan')}
          >
            <FontAwesomeIcon icon={faQrcode} className="text-2xl mr-3" />
            <span className="text-lg">Scan</span>
          </button>

          {/* Profile Button */}
          <button
            className={`flex items-center w-full py-3 px-4 hover:bg-gray-700 rounded-lg focus:outline-none ${activeTab === 'profile' ? 'bg-blue-500' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
            <span className="text-lg">Profile</span>
          </button>

          {/* Logout Button */}
          <button
            className={`flex items-center w-full py-3 px-4 hover:bg-gray-700 rounded-lg focus:outline-none ${activeTab === 'logout' ? 'bg-red-500' : ''}`}
            onClick={handleLogout}  // Call handleLogout on click
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl mr-3" />
            <span className="text-lg">Logout</span>
          </button>
        </div>
      </aside>

      {/* Bottom Navigation for Mobile view */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around py-3 lg:hidden">
        {/* Home Button */}
        <button className="text-center focus:outline-none" onClick={() => setActiveTab('home')}>
          <FontAwesomeIcon icon={faHome} className={`text-2xl ${activeTab === 'home' ? 'text-blue-500' : ''}`} />
          <p className={`text-xs ${activeTab === 'home' ? 'text-blue-500' : ''}`}>Home</p>
        </button>

        {/* Scan Button */}
        <button className="text-center focus:outline-none" onClick={() => setActiveTab('scan')}>
          <FontAwesomeIcon icon={faQrcode} className={`text-2xl ${activeTab === 'scan' ? 'text-blue-500' : ''}`} />
          <p className={`text-xs ${activeTab === 'scan' ? 'text-blue-500' : ''}`}>Scan</p>
        </button>

        {/* Profile Button */}
        <button className="text-center focus:outline-none" onClick={() => setActiveTab('profile')}>
          <FontAwesomeIcon icon={faUser} className={`text-2xl ${activeTab === 'profile' ? 'text-blue-500' : ''}`} />
          <p className={`text-xs ${activeTab === 'profile' ? 'text-blue-500' : ''}`}>Profile</p>
        </button>

        {/* Logout Button */}
        <button className="text-center focus:outline-none" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className={`text-2xl ${activeTab === 'logout' ? 'text-red-500' : ''}`} />
          <p className={`text-xs ${activeTab === 'logout' ? 'text-red-500' : ''}`}>Logout</p>
        </button>
      </nav>

      {/* Conditional Rendering of Content */}
      <div className="p-8">
        {activeTab === 'home' && <Home userData={userData} />}
        {activeTab === 'scan' && <ScanAndShare />}
        {activeTab === 'profile' && <Profile />}
      </div>
    </>
  );
};

export default Dashboard;

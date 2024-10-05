import React from 'react';
import BottomNav from './dashboard';

function Home(userData){
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10 md:ml-64">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
          {/* ABHA ID Section */}
          <div className="mb-8" >
            <h1 className="text-4xl font-bold text-gray-700 mb-4">Your Unique ABHA ID</h1>
            <p className="text-5xl text-blue-600 font-extrabold tracking-widest">
              {userData.abhaId}
            </p>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Name */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-sm font-medium text-gray-500">Name</h2>
              <p className="text-lg font-semibold text-gray-700">{userData.name}</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-sm font-medium text-gray-500">Email</h2>
              <p className="text-lg font-semibold text-gray-700">{userData.email}</p>
            </div>

            {/* Phone Number */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-sm font-medium text-gray-500">Phone Number</h2>
              <p className="text-lg font-semibold text-gray-700">{userData.phoneNumber}</p>
            </div>

            {/* Aadhaar Number */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-sm font-medium text-gray-500">Aadhaar Number</h2>
              <p className="text-lg font-semibold text-gray-700">{userData.aadharNumber}</p>
            </div>

            {/* ABHA Address */}
            <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-sm font-medium text-gray-500">ABHA Address</h2>
              <p className="text-lg font-semibold text-gray-700">{userData.abhaAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

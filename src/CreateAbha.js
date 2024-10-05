// CreateAbha.js
import React, { useState } from 'react';
import classNames from 'classnames';
import './App.css'
import Login from './Login'

const CreateAbha = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isOtpIncorrect, setIsOtpIncorrect] = useState(false);

  // Simulate OTP verification
  const handleOtpVerification = () => {
    const otpInput = document.getElementById('otp-input').value;
    if (otpInput === '1234') {
      setOtpVerified(true);
      setIsOtpIncorrect(false); // Clear error if verified
    } else {
      setIsOtpIncorrect(true); // Show error and shake effect
    }
  };

  return (
    <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* AADHAAR Number Input */}
      <div className="mb-4">
        <label className="block text-gray-700">AADHAAR Number:</label>
        <input type="text" className="w-64 p-2 border border-gray-300 rounded mt-2" />
        
        {/* Send OTP Button */}
        {otpSent ? (
          <button
            type="button"
            className="bg-transparent text-black py-2 px-4 rounded mt-2"
            disabled
          >
            <span>Sent</span>
            <span class='ticksymbol'>✓</span>
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-600 text-white py-2 px-4 rounded mt-2 lg:ml-5"
            onClick={() => setOtpSent(true)}
          >
            Send OTP
          </button>
        )}
      </div>

      {/* OTP Input and Verify Button in Row */}
      {otpSent && (
        <div className="mb-4 flex items-center space-x-2">
          <input
            type="text"
            id="otp-input"
            placeholder="Enter OTP"
            className={classNames(
              'w-40 p-2 border border-gray-300 rounded mt-1',
              { 'border-red-500 animate-shake': isOtpIncorrect }
            )}
            disabled={otpVerified}  // Disable input after verification
          />

          {otpVerified ? (
            // Show Verified status in the same row
            <div className="flex items-center space-x-1">
              <span>Verified</span>
              <span class='ticksymbol'>✓</span>
            </div>
          ) : (
            // Show Verify button if not verified
            <button
              type="button"
              className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleOtpVerification}
            >
              Verify OTP
            </button>
          )}
        </div>
      )}

      {/* ABHA Address Input (disabled until OTP is verified) */}
      <div className="mb-4">
        <label className="block text-gray-700">ABHA Address:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          disabled={!otpVerified}
        />
      </div>

      {/* Create ABHA Button */}
      <button
        type="button"
        className={`bg-green-600 text-white py-2 px-4 rounded ${!otpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!otpVerified}
      >
        Create ABHA Account
      </button>

      <p className="mt-4 text-center text-gray-500">
        Already have an account? <a href={Login} className="text-blue-600">Login</a>
      </p>
    </form>
    
  );
};

export default CreateAbha;

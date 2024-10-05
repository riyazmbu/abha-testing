// CreateAbha.js
import React, { useState } from 'react';
import classNames from 'classnames';
import './App.css'
import CreateAbha from './CreateAbha'

const Login = () => {
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
         <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="login-method" value="abha-number" className="form-radio text-green-600" />
            <span className="ml-2">ABHA Number</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="login-method" value="abha-address" className="form-radio text-green-600" />
            <span className="ml-2">ABHA Address</span>
          </label>
        </div>
      {/* AADHAAR Number Input */}
      <div className="mb-4">
        <input type="text" className="w-64 p-2 border border-gray-300 rounded mt-2" placeholder='Enter ABHA ID or ABHA Address'/>
        
        {/* Send OTP Button */}
        {otpSent ? (
          <button
            type="button"
            className="bg-transparent mr-5 text-black py-2 px-4 rounded mt-2"
            disabled
          >
            <span>Sent</span>
            <span class='ticksymbol'>✓</span>
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-600 text-white py-2 px-4 rounded mt-2 ml-5"
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

       {/* Login ABHA Button */}
       <button
        type="button"
        className={`bg-green-600 text-white py-2 px-4 rounded ${!otpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!otpVerified}
      >
        Login
      </button>

      <p className="mt-4 text-center text-gray-500">
        Don't have an account? <a href={CreateAbha} className="text-blue-600">Create one</a>
      </p>
    </form>
  );
};

export default Login;

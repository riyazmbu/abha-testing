import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [aadharPart1, setAadharPart1] = useState('');
  const [aadharPart2, setAadharPart2] = useState('');
  const [aadharPart3, setAadharPart3] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [email, setEmail] = useState('example@example.com');
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [abhaAddress, setAbhaAddress] = useState('ABHA12345');
  const [isUpdating, setIsUpdating] = useState(false);
  const [canEdit, setCanEdit] = useState(true);
  const [otpSent, setOtpSent] = useState(false);

  const handleAadharChange = (part, setPart) => (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 4) {
      setPart(value);
  
      // Move focus to the next part if current part is filled
      if (value.length === 4) {
        const nextPart = document.getElementById(`aadhar-part-${part + 1}`);
        if (nextPart) {
          nextPart.focus(); // Ensure the next part exists before calling focus
        }
      }
    }
  };
  

  const handleSendOtp = () => {
    if (aadharPart1.length === 4 && aadharPart2.length === 4 && aadharPart3.length === 4) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      setIsOtpVerified(true);
      setIsEditable(true);
      setCanEdit(true);
      alert('OTP Verified, you can now edit your details.');
    } else {
      alert('Invalid OTP, please try again.');
    }
  };

  const handleUpdateProfile = () => {
    setIsUpdating(true);
    setTimeout(() => {
      alert('Profile updated successfully');
      setIsUpdating(false);
      setIsEditable(false);
      setCanEdit(false);

      setTimeout(() => {
        setCanEdit(true);
      }, 30000);
    }, 2000);
  };

  return (
    <div className="lg:pl-80 pb-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Profile</h2>

      {/* Aadhaar Number */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Aadhaar Number</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={aadharPart1}
            onChange={handleAadharChange(1, setAadharPart1)}
            id="aadhar-part-1"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXXX"
            maxLength={4}
            disabled={isOtpVerified}
          />
          <input
            type="text"
            value={aadharPart2}
            onChange={handleAadharChange(2, setAadharPart2)}
            id="aadhar-part-2"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXXX"
            maxLength={4}
            disabled={isOtpVerified}
          />
          <input
            type="text"
            value={aadharPart3}
            onChange={handleAadharChange(3, setAadharPart3)}
            id="aadhar-part-3"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXXX"
            maxLength={4}
            disabled={isOtpVerified}
          />
        </div>
        <button
          onClick={handleSendOtp}
          className={`mt-3 w-full bg-green-500 text-white px-4 py-2 rounded-lg transition-all ease-in-out duration-300 
            ${otpSent ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={otpSent}
        >
          {otpSent ? (
            <span className="flex justify-center items-center">
              Sent <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
            </span>
          ) : 'Send OTP'}
        </button>
      </div>

      {/* OTP Verification */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">OTP</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter OTP"
          disabled={!otpSent || isOtpVerified}
        />
        <button
          onClick={handleVerifyOtp}
          className={`mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded-lg transition-all ease-in-out duration-300 
            ${isOtpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!otpSent || isOtpVerified}
        >
          {isOtpVerified ? (
            <span className="flex justify-center items-center">
              Verified <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
            </span>
          ) : 'Verify OTP'}
        </button>
      </div>

      {/* Editable Fields */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={!isEditable || !canEdit}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mt-2"
          disabled={!isEditable || !canEdit}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">ABHA Address</label>
        <input
          type="text"
          value={abhaAddress}
          onChange={(e) => setAbhaAddress(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={!isEditable || !canEdit}
        />
      </div>

      {/* Update Button */}
      <button
        onClick={handleUpdateProfile}
        className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold 
          ${isUpdating || !canEdit ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        disabled={!isEditable || isUpdating || !canEdit}
      >
        {isUpdating ? 'Updating...' : 'Update Profile'}
      </button>

      {/* Edit Lock Message */}
      {!canEdit && (
        <p className="text-red-500 mt-4 text-center">You cannot edit your details for 30 seconds.</p>
      )}
    </div>
  );
};

export default Profile;

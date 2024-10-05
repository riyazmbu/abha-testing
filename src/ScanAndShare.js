import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCamera } from '@fortawesome/free-solid-svg-icons';
import { QrReader } from 'react-qr-reader';

const ScanAndShare = () => {
  const [file, setFile] = useState(null);
  const [hospitalData, setHospitalData] = useState({
    name: "City Hospital",
    address: "123 Main St, Metro City",
    phone: "0123456789",
  });
  const [abhaDetails, setAbhaDetails] = useState({
    abhaAddress: "ABHA12345",
    phone: "9876543210",
    email: "example@example.com",
  });
  const [isTokenGenerated, setIsTokenGenerated] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showCameraPopup, setShowCameraPopup] = useState(false); // State for camera popup
  const [result, setResult] = useState('');

  // Function to handle file upload and fetch hospital data from uploaded JSON file
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFile(file);
    const reader = new FileReader();

    reader.onload = function (event) {
      const result = event.target.result;
      try {
        const data = JSON.parse(result);
        // Fetching hospital data from the new structure
        if (data.hipId && data.facilityName && data.code) {
          setHospitalData({
            name: data.facilityName,         // Using facilityName for hospital name
            address: `HIP ID: ${data.hipId}`, // Storing HIP ID as address substitute
            phone: `Code: ${data.code}`,      // Storing Code as phone substitute
          });
        } else {
          alert("Invalid data format");
        }
      } catch (err) {
        console.error("Error parsing the file", err);
        alert("Error reading the file. Make sure it's a valid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  // Function to handle QR code scanning
  const handleScan = (data) => {
    if (data) {
      setResult(data);
      alert('QR Code Scanned: ' + data);
      setShowCameraPopup(false); // Close camera popup after scanning
    }
  };

  // Function to handle token generation
  const handleGenerateToken = () => {
    setShowConfirmationPopup(true);
  };

  const confirmGenerateToken = () => {
    setIsTokenGenerated(true);
    setShowConfirmationPopup(false);
    alert('Token Generated Successfully!\nCheck your Tokens In Tokens Section');
  };

  return (
    <div className="lg:pl-80 pb-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Scan</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="flex justify-center mb-4">
          <label
            htmlFor="file-upload"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Upload File
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>

        {/* Button to open camera */}
        <button
          onClick={() => setShowCameraPopup(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faCamera} className="mr-2" />
          Open Camera
        </button>

        {/* Camera popup */}
        {showCameraPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Scan QR Code</h3>
              <QrReader
                onResult={handleScan}
                constraints={{ facingMode: 'environment' }} // Use rear camera
                style={{ width: '300px', height: '300px' }}  // Set explicit width and height
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowCameraPopup(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Confirming Details</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Hospital Details</h3>
        <p className="text-gray-700 mb-2"><strong>Name:</strong> {hospitalData.name}</p>
        <p className="text-gray-700 mb-2"><strong>Address:</strong> {hospitalData.address}</p>
        <p className="text-gray-700"><strong>Phone:</strong> {hospitalData.phone}</p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Share</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Our ABHA Details</h3>
          <p className="text-gray-700 mb-2"><strong>ABHA Address:</strong> {abhaDetails.abhaAddress}</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> {abhaDetails.phone}</p>
          <p className="text-gray-700"><strong>Email:</strong> {abhaDetails.email}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Hospital Details</h3>
          <p className="text-gray-700 mb-2"><strong>Name:</strong> {hospitalData.name}</p>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> {hospitalData.address}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {hospitalData.phone}</p>
        </div>
      </div>

      {/* Generate Token Button */}
      <div className="text-center">
        <button
          onClick={handleGenerateToken}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Generate Token
        </button>
      </div>

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Details to Send</h3>
            <div className="mb-4">
              <p className="text-gray-700"><strong>ABHA Address:</strong> {abhaDetails.abhaAddress}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {abhaDetails.phone}</p>
              <p className="text-gray-700"><strong>Email:</strong> {abhaDetails.email}</p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmGenerateToken}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Confirm & Generate Token
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanAndShare;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../src/bgdata.png'; // Image for the left side
import gifImage from '../src/QR Code.gif';
import confirmed from '../src/Confirmed.gif';
import fileSent from '../src/Files sent.gif';// Replace with the path to your GIF

function LandingPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('./login');
    };

    const handleRegisterClick = () => {
        navigate('./register'); // Navigate to register page instead of login
    };

    return (
        <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex flex-col items-center justify-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Header */}
            <header className="z-10 w-full max-w-7xl flex justify-between items-center px-8 py-6">
                <h1 className="text-4xl font-extrabold text-white tracking-wide">ABHA Health App</h1>
                <div className="space-x-4">
                    <button 
                        onClick={handleLoginClick} 
                        className="bg-white bg-opacity-20 hover:bg-blue-800 hover:text-white text-black font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-lg backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-all text-sm lg:text-base">
                        Login
                    </button>
                    <button 
                        onClick={handleRegisterClick} 
                        className="bg-white hover:bg-blue-800 hover:text-white bg-opacity-20 text-black font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-lg backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-all text-sm lg:text-base">
                        Register
                    </button>
                </div>
            </header>

            {/* Main content */}
            <div className="flex-grow flex flex-col lg:flex-row items-center justify-center z-10 mt-12 lg:mt-0">
                {/* Left Side - Image */}
                <div className="hidden lg:block lg:w-1/2 relative">
                    <img
                        src={bgImage}
                        alt="ABHA Health"
                        className="w-full h-full object-cover rounded-xl shadow-xl"
                    />
                </div>

                {/* Right Side - Video */}
                <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg mt-12 lg:mt-0 lg:ml-12">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/hN_InEusu9k"
                        title="Ayushman Bharat Digital Mission - Benefits of ABHA number, English"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>

            {/* Scan And Share Section */}
            <section className="w-full max-w-7xl px-8 py-12 mt-12 bg-white bg-opacity-80 rounded-lg shadow-lg z-10">
                <h2 className="text-3xl font-bold text-center mb-6">Scan And Share</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold">1. Scan</h3>
                        <img 
                            src={gifImage} // Path to your GIF
                            alt="Scan and Share GIF"
                            className="w-50 h-50 object-cover"
                        />
                        <p className="mt-2 text-gray-600">
                            Use your device to scan the QR code or barcode for easy access.
                        </p>
                    </div>

                  

                    <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold">2. Confirming Details</h3>
                        <img 
                            src={confirmed} // Path to your GIF
                            alt="Scan and Share GIF"
                            className="w-50 h-50 object-cover"
                        />
                        <p className="mt-2 text-gray-600">
                            Review the scanned details to ensure accuracy before sharing.
                        </p>
                    </div>

                    <div className="mx-4 mb-6 ">
                       
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-semibold">3. Share</h3>
                        <img 
                            src={fileSent} // Path to your GIF
                            alt="Scan and Share GIF"
                            className="w-50 h-50 object-cover"
                        />
                        <p className="mt-2 text-gray-600">
                            Share the information securely with others via your preferred method.
                        </p>
                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className=" text-white text-center py-4 mt-8">
                <p>© 2024 ABHA Health App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;

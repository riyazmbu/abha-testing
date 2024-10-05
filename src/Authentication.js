import React, { useState } from 'react';
import BottomNav from './dashboard';
import Login from './Login';
import CreateAbha from './CreateAbha';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Authentication() {
    const [currentTab, setCurrentTab] = useState('create-abha');
    const [isMuted, setIsMuted] = useState(false);  // State to toggle mute
    const [otpSent, setOtpSent] = useState(false); // State to track OTP status
    const [isPaused, setIsPaused] = useState(false); // State to track video play/pause in mobile

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };

    const handleOtpSend = () => {
        setOtpSent(true);  // Simulate OTP sent status
    };

    const handlePauseToggle = () => {
        setIsPaused(!isPaused); // Toggle play/pause for mobile video
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Header */}
            <header className="!bg-green-600 text-white p-8">
                <h1 className="text-3xl font-bold text-center">ABHA Health App</h1>
                <p className="text-lg text-center mt-2">Your gateway to secure and easy healthcare services</p>

            </header>

            {/* Main content */}
            <div className="flex-grow flex flex-col lg:flex-row">
                {/* Left Side - 60% */}
                <div className="lg:w-3/5 flex flex-col items-center justify-center p-8 bg-gray-50">
                    <h2 className="text-2xl font-bold mb-4">Create Your ABHA Health Account</h2>
                    <p className="mb-6 text-md text-gray-600 text-center">
                        Secure your healthcare identity and enjoy the benefits of easy medical access by creating your ABHA Health ID using your Aadhaar number.
                    </p>

                    {/* Video Section */}
                    <div className="w-full max-w-lg bg-white p-4 rounded-md shadow-md">
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/hN_InEusu9k?autoplay=1&mute=${isMuted ? 1 : 0}&${isPaused ? 'pause' : 'play'}`}
                            title="Ayushman Bharat Digital Mission - Benefits of ABHA number, English"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-md"
                        ></iframe>

                        

                        {/* Mute Button - Mobile Only */}
                        <button
                            className="lg:hidden absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                            onClick={handleMuteToggle}
                        >
                            {isMuted ? 'Unmute' : 'Mute'}
                        </button>

                        {/* Pause Button - Mobile Only */}
                        <button
                            className="lg:hidden absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg"
                            onClick={handlePauseToggle}
                        >
                            {isPaused ? 'Play' : 'Pause'}
                        </button>
                    </div>
                </div>

                {/* Right Side - 40% */}
                <div className="lg:w-2/5 flex items-center justify-center p-6 bg-white">
                    <div className="w-full max-w-md">
                        <div className="flex justify-center my-4 space-x-4">
                            <button
                                onClick={() => setCurrentTab('create-abha')}
                                className={`px-4 py-2 rounded ${currentTab === 'create-abha' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                            >
                                Create ABHA
                            </button>
                            <button
                                onClick={() => setCurrentTab('login')}
                                className={`px-4 py-2 rounded ${currentTab === 'login' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                            >
                                Login
                            </button>
                        </div>

                        <main className="w-full">
                            {currentTab === 'create-abha' ? (
                                <div>
                                    {/* Aadhaar Number Input Fields */}
                                    <div className="flex space-x-2 mb-4">
                                        <input type="text" maxLength="4" className="w-1/3 p-2 border border-gray-300 rounded-md" placeholder="xxxx" />
                                        <input type="text" maxLength="4" className="w-1/3 p-2 border border-gray-300 rounded-md" placeholder="xxxx" />
                                        <input type="text" maxLength="4" className="w-1/3 p-2 border border-gray-300 rounded-md" placeholder="xxxx" />
                                    </div>

                                    {/* Send OTP Button */}
                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 w-full"
                                        onClick={handleOtpSend}
                                    >
                                        Send OTP
                                    </button>

                                    {/* OTP Sent Message */}
                                    {otpSent && (
                                        <p className="mt-2 text-green-500 text-center">OTP sent successfully!</p>
                                    )}
                                </div>
                            ) : (
                                <Login />
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authentication;

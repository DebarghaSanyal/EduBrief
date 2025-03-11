
import React from "react";
import { FaPlay, FaUser, FaMoon, FaCog, FaBars, FaDownload } from "react-icons/fa";

const Main = () => {
  return (
    <div className="bg-[#f5f3e5] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-green-700 text-white flex justify-between items-center px-6 py-4 shadow-md">
        <FaBars className="text-2xl cursor-pointer" />
        <h1 className="text-3xl font-semibold">EduBrief</h1>
        <div className="flex space-x-6">
          <FaUser className="text-2xl cursor-pointer" />
          <FaMoon className="text-2xl cursor-pointer" />
          <FaCog className="text-2xl cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <input
            type="text"
            placeholder="Paste video URL here"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition">Import URL</button>
          
          {/* Video Player */}
          <div className="bg-black w-full h-56 flex items-center justify-center my-6 rounded-lg shadow-lg">
            <FaPlay className="text-white text-4xl cursor-pointer" />
          </div>
          <button className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition">Save for Later</button>
        </div>

        {/* Right Section */}
        <div>
          {/* Dropdowns */}
          <select className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm">
            <option>Video Transcription</option>
          </select>
          <select className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm">
            <option>Video Summary</option>
          </select>

          {/* Audio Insights */}
          <h3 className="text-lg font-semibold text-gray-800">Audio Insights</h3>
          <p className="text-gray-600 text-sm mb-4">Key insights from the video's audio are summarized below:</p>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 my-2 shadow-sm">
            <FaPlay className="text-gray-700 cursor-pointer" />
            <div className="flex-grow mx-3 bg-gray-300 h-1 rounded"></div>
            <span className="text-gray-700">0:00</span>
          </div>

          {/* Notes Section */}
          <h3 className="text-lg font-semibold text-gray-800 mt-6">Notes</h3>
          <p className="text-gray-600 text-sm mb-4">Here are the key notes based on the video:</p>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm cursor-pointer hover:bg-gray-100">
            <span className="flex-grow">Notes.docs</span>
            <FaDownload className="text-blue-500" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold">EduBrief</h2>
            <p className="text-sm text-gray-400 mt-2">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Enter your email" className="flex-grow p-3 rounded-l-lg text-black focus:outline-none" />
              <button className="bg-green-700 px-6 py-3 rounded-r-lg font-medium hover:bg-green-800 transition">Subscribe</button>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <h3 className="font-bold text-white">General</h3>
              <p className="mt-2">About Us</p>
              <p>Services</p>
              <p>Contact</p>
              <p>Feedback</p>
            </div>
            <div>
              <h3 className="font-bold text-white">Resources</h3>
              <p className="mt-2">Documentation</p>
              <p>Tutorials</p>
              <p>Community</p>
              <p>Blog</p>
            </div>
          </div>

          {/* Social & Legal Section */}
          <div className="text-sm text-gray-400">
            <h3 className="font-bold text-white">Follow Us</h3>
            <p className="mt-2">Twitter | LinkedIn | Instagram | Facebook | Discord</p>
            <h3 className="font-bold text-white mt-6">Developers</h3>
            <p className="mt-2">Open Source Contributions</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© 2025 EduBrief. All rights reserved.</p>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;



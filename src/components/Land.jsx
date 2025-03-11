
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../assests/im-1.png';

export default function Land() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F5F2EB] text-black'} min-h-screen w-full transition-all duration-500`}> 
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`p-4 flex justify-between items-center ${darkMode ? 'bg-green-600 text-white' : 'bg-blue-500 text-black'} shadow-lg rounded-b-3xl`}
      >
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-3xl z-50 cursor-pointer"
          >
            &#9776;
          </motion.button>
          <h1 className="text-3xl font-bold ml-10 tracking-wide">EduBrief</h1>
        </div>
        <div className="flex items-center gap-6">

          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className="border border-white px-4 py-1 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Sign Up
          </motion.button>
          <motion.button 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border shadow-md hover:bg-white hover:text-black"
          >
            {darkMode ? '🌙' : '☀️'}
          </motion.button>
          <button className="hover:rotate-180 transition-all duration-500">⚙️</button>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isSidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-2xl rounded-r-3xl p-6"
      >
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold mt-10">Menu</h2>
        <ul className="mt-8 space-y-5">
          <li><Link to="/profile" className="block p-3 hover:bg-gray-800 rounded">👤 My Profile</Link></li>
          <li><Link to="/upload" className="block p-3 hover:bg-gray-800 rounded">📤 Upload Lecture</Link></li>
          <li><Link to="/summaries" className="block p-3 hover:bg-gray-800 rounded">📝 My Summaries</Link></li>
          <li><Link to="/services" className="block p-3 hover:bg-gray-800 rounded">📜 Service</Link></li>
          <li><Link to="/privacy" className="block p-3 hover:bg-gray-800 rounded">⚙️ Settings</Link></li>
          <li><Link to="/about" className="block p-3 hover:bg-gray-800 rounded">ℹ️ About Us</Link></li>
          <li><Link to="/contact" className="block p-3 hover:bg-gray-800 rounded">📞 Contact</Link></li>
        </ul>
      </motion.div>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-13 py-20">
        <div>
          <h2 className="text-4xl font-bold">Smart Notes for a Smarter Future!</h2>
          <p className="mt-4 text-lg">EduBrief is an AI-powered tool that automatically converts lengthy lectures into concise, structured summaries.</p>
          <Link to="/main">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="mt-6 bg-green-600 text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            GET STARTED
          </motion.button>
          </Link>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img src={myImage} alt="Student studying" className="w-150 rounded-5xl" />
        </motion.div>
      </section>

     {/* Footer */}
     <footer className="bg-[#2c3e50] text-white py-10 px-10 mt-19">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left">

    {/* Logo and Description */}
    <div>
      <h3 className="text-2xl font-bold text-green-400">EduBrief</h3>
      <p className="mt-2 text-gray-400 text-sm leading-relaxed">
        Transforming lectures into concise, structured notes effortlessly.
      </p>
      <p className="mt-2 text-gray-500 text-xs">"Learn Smart, Not Hard!"</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-3 text-green-400">Quick Links</h4>
      <ul className="space-y-2">
        <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">ℹ️ About Us</Link></li>
        <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">📞 Contact</Link></li>
        <li><Link to="/privacy" className="text-gray-400 hover:text-white transition duration-300">🔒 Privacy Policy</Link></li>
        <li><Link to="/terms" className="text-gray-400 hover:text-white transition duration-300">📜 Terms & Conditions</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-semibold mb-3 text-green-400">Contact Info</h4>
      <p className="text-gray-400 text-sm">📍 123 Edu St, Knowledge City, 56789</p>
      <p className="text-gray-400 text-sm">✉️ support@edubrief.com</p>
      <p className="text-gray-400 text-sm">📞 +123 456 7890</p>
    </div>

    {/* Newsletter Subscription */}
    <div>
      <h4 className="text-lg font-semibold mb-3 text-green-400">Subscribe to Our Newsletter</h4>
      <p className="text-gray-400 text-sm mb-3">Get the latest updates and exclusive content.</p>
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full p-2 rounded-md text-black"
      />
      <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-all">
        Subscribe
      </button>
    </div>

  </div>

  {/* Social Media Icons */}
  <div className="flex justify-center mt-6 space-x-5">
    <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">📘</a>
    <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">🐦</a>
    <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">📸</a>
    <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">💼</a>
  </div>

  {/* Copyright */}
  <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} EduBrief. All Rights Reserved.
  </div>
</footer>
    </div>
  );
}



"use client";
import { motion } from "framer-motion";

function Service() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black text-white p-6">
      <motion.div
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-10 max-w-3xl text-center relative overflow-hidden"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 15px 40px rgba(255, 20, 147, 0.5)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-pink-500 opacity-20 blur-3xl"></div>

        <h1 className="text-4xl font-extrabold mb-4 text-white tracking-wide">
          🚀 AI Lecture Summarizer
        </h1>
        
        <p className="text-lg text-gray-200 leading-relaxed">
          Transform long lectures into concise, structured notes effortlessly. 
          Our AI extracts key insights from YouTube videos and audio, 
          helping you learn faster and smarter.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#ff1493",
            boxShadow: "0px 0px 15px rgba(255, 20, 147, 0.8)",
          }}
          transition={{ duration: 0.3 }}
          className="mt-6 px-6 py-3 text-lg font-semibold bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition-all"
        >
          Try Now 🔥
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Service;

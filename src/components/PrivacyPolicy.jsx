import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 py-8 sm:px-6 md:px-8">
      {/* Animated Background Waves - Optimized for different screen sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(0,255,255,0.1)_10%,rgba(0,0,0,0.8)_90%)] opacity-30 animate-pulse"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,0,150,0.15)_5%,rgba(0,0,0,0.9)_80%)] opacity-25 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-black bg-opacity-60 backdrop-blur-xl border border-gray-700 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-cyan-400 mb-4 sm:mb-6 drop-shadow-lg tracking-tight"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 text-center px-2 sm:px-4 leading-relaxed"
        >
          Your privacy is our top priority. We ensure your data is protected, encrypted, and never shared without consent.
        </motion.p>
        
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-400 text-base sm:text-lg"
        >
          {[
            "We collect necessary data to improve services.",
            "Your data is securely encrypted.",
            "We never share your information without consent.",
            "You have full control over your data.",
            "Request deletion anytime."
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02, color: "#00FFFF" }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 sm:gap-3 bg-gray-800 bg-opacity-50 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md border border-gray-600 hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="text-cyan-400 flex-shrink-0">🔹</span>
              <span className="leading-snug">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Responsive Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Accept Privacy Policy
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Sujal Khan",  image :"https://tse4.mm.bing.net/th?id=OIP.eF3u6fqLpBoyEHQcew_FUQHaE7&pid=Api&P=0&h=180"},
  { name: "Soumik Singha Roy",  image: "https://tse1.mm.bing.net/th?id=OIP.FU9iGPN5MRCzVMn5bc2UbAHaHa&pid=Api&P=0&h=180" },
  { name: "Debargha Sanyal",  image: "https://tse2.mm.bing.net/th?id=OIP.wH9EhDD7B1xkj6-ZCc5Y0gHaE7&pid=Api&P=0&h=180" },
  { name: "Smarto Chowdhuray",  image: "https://tse1.mm.bing.net/th?id=OIP.bpbvosYk4KIiZXofX_I8lAHaE7&pid=Api&P=0&h=180" },
  { name: "Sandipan Roy",  image: "https://tse1.mm.bing.net/th?id=OIP.XaHvP3dqjZgHskOd5lmSxQHaE7&pid=Api&P=0&h=180" },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-20 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-16"
      >
        <h1 className="text-5xl font-bold text-green-400">About EduBrief</h1>
        <p className="mt-4 text-lg text-gray-300">
          Transforming lectures into concise, structured summaries using AI.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        {[
          { title: "🎯 Our Mission", text: "Empower students and professionals by providing AI-driven lecture summarization, saving time and enhancing learning." },
          { title: "🚀 Our Vision", text: "To be the leading platform that revolutionizes education through automated, high-quality note-taking technology." }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-green-400">{item.title}</h2>
            <p className="mt-2 text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-center text-4xl font-semibold text-green-400">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg border-2 border-green-400"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <h3 className="text-3xl font-semibold">Join the Future of Learning!</h3>
        <p className="mt-2 text-gray-400">Start using EduBrief today and make learning effortless.</p>
        <Link
          to="/signup"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition duration-300"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}


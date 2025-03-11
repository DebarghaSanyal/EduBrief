
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "", phone: "" }); // Reset form
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white px-6 md:px-20 pb-20 flex flex-col items-center">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-16"
      >
        <h1 className="text-5xl font-bold text-yellow-400">Meet Our Team</h1>
        <p className="mt-4 text-lg text-gray-300">
          Reach out to us! We’re here to help.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="mt-16 grid md:grid-cols-3 gap-10">
        {[
          {
            name: "Sujal Khan",
            email: "sujalstark2010@gmail.com",
            phone: "+918240679093",
            color: "bg-blue-500",
          },
          {
            name: "Soumik Singha Roy",
            email: "soumiksingharoy41@gmail.com",
            phone: "+918777043623",
            color: "bg-green-500",
          },
          {
            name: "Debargha Sanyal",
            email: "debarghasanyal128@gmail.com",
            phone: "+918910479365",
            color: "bg-purple-500",
          },
          {
            name: "Smarto Chowdhury",
            email: "chowdhurysmarto@gmail.com",
            phone: "+917605855760",
            color: "bg-pink-500",
          },
          {
            name: "Sandipan Roy",
            email: "infosandipanroy2003@gmail.com",
            phone: "+917439556807",
            color: "bg-yellow-500",
          },
        ].map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            className={`${member.color} p-6 rounded-lg shadow-lg text-center text-black`}
          >
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="mt-2 text-sm">{member.phone}</p>
            <p
              className="mt-1 text-sm text-black hover:text-blue-700 hover:underline cursor-pointer transition duration-300"
              onClick={() => (window.location.href = `mailto:${member.email}`)}
            >
              {member.email}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg text-black"
      >
        <h2 className="text-3xl font-semibold text-center text-purple-700">
          Send Us a Message
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition duration-300"
            required
          />
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300"
            required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

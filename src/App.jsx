import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from "./components/Land";  // Ensure this path is correct
import Service from "./components/Service";  // Ensure correct file name
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Main from "./components/Main";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/services" element={<Service />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/privacy" element={<PrivacyPolicy/>} /> 
        <Route path="/main" element={<Main/>} /> 
      </Routes>
    </Router>
  )
}

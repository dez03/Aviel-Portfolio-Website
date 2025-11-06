import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from "./components/Navbar.jsx";

import "./styles/index.css";

const App = () => {
  return (
    <Router>
      {/* Navbar outside the constrained container */}
      <Navbar className="fixed top-0" />

      {/* Main Content */}
      <div className="flex justify-center min-h-screen bg-[#0a0a0a]">
        <div className="App max-w-[1250px] w-full px-4 md:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

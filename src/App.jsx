import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from "./components/Navbar.jsx";
import LiquidEther from './components/LiquidEitherBG.jsx';

import "./styles/index.css";

const App = () => {
  return (
    <Router>
      {/* Navbar outside the constrained container */}
      <Navbar className="fixed top-0" />

      {/* Main Content */}
      <div className="relative min-h-screen bg-[#0a0a0a]">
        {/* Background - Fixed positioning */}
        <div 
          className="fixed inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Content - Higher z-index */}
        <div className="relative flex justify-center" style={{ zIndex: 10 }}>
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
      </div>
    </Router>
  );
};

export default App;
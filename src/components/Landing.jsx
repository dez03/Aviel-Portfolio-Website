import React, { useState, useEffect } from "react";
import Profile from "../assets/profile.png";
import ScrollBounce from "../components/ScrollBounce.jsx";

const Landing = () => {
  const firstName = "AVIEL";
  const lastName = "HERNANDEZ";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth / 2;
      const windowHeight = window.innerHeight / 2;
      const offsetX = ((clientX - windowWidth) / windowWidth) * 20;
      const offsetY = ((clientY - windowHeight) / windowHeight) * 20;
      setMousePosition({ x: offsetX, y: offsetY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              <span className="font-dm_sans text-sm text-gray-300 font-medium tracking-wide">
                BUILDING FOR THE WEB SINCE 2020
              </span>
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-bold">THIS WEBSITE IS UNDER CONSTRUCTION</h1>
            <p className="text-sm text-gray-300">I'm working on it and it will be ready soon. Enjoy this incomplete version!</p>
          </div>

          {/* Main Name Section */}
          <div className="relative mb-12">
            <div className="name-container relative">
              {/* First name */}
              <div className="first-name mb-2">
                <h1 className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-cyan to-primary-400 bg-clip-text text-transparent blur-xl opacity-50 animate-gradient"
                    style={{ backgroundSize: '200% 200%' }}>
                    {firstName}
                  </span>
                  <span className="relative font-big_shoulders font-black text-white tracking-tight"
                    style={{
                      fontSize: "clamp(4rem, 12vw, 180px)",
                      lineHeight: "1",
                      letterSpacing: "-0.02em",
                    }}>
                    {firstName}
                  </span>
                </h1>
              </div>

              {/* Last name */}
              <div className="last-name">
                <h1 className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-primary-400 to-accent-cyan bg-clip-text text-transparent blur-xl opacity-50 animate-gradient"
                    style={{ backgroundSize: '200% 200%', animationDelay: '1s' }}>
                    {lastName}
                  </span>
                  <span className="relative font-big_shoulders font-black text-white tracking-tight"
                    style={{
                      fontSize: "clamp(3.5rem, 10vw, 150px)",
                      lineHeight: "1",
                      letterSpacing: "-0.02em",
                    }}>
                    {lastName}
                  </span>
                </h1>
              </div>

              {/* Profile image with floating effect */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-2 ring-primary-500/30 shadow-lg shadow-black/40"
                style={{
                  width: "clamp(90px, 10vw, 140px)",
                  height: "clamp(90px, 10vw, 140px)",
                  transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-cyan/20 animate-gradient"></div>
                <img
                  src={Profile}
                  alt="Profile"
                  className="relative h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl mb-16">
            <p className="font-dm_sans text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
              I'm Aviel, a{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan font-semibold">
                  full stack developer
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-cyan opacity-30"></span>
              </span>{" "}
              passionate about bringing value through code.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center justify-center mt-8 animate-float">
            <ScrollBounce />
            <p className="font-dm_sans font-medium text-xs text-center text-gray-500 mt-3 tracking-widest uppercase">
              Scroll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

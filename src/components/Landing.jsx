import React, { useState, useEffect } from "react";
import Profile from "../assets/profile.png";
import { TbNorthStar } from "react-icons/tb";
import ScrollBounce from "../components/ScrollBounce.jsx";


const Landing = () => {
  const firstName = "AVIEL";
  const lastName = "HERNANDEZ";

  // State to store mouse offset
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Event handler to update the mouse position
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth / 2;
      const windowHeight = window.innerHeight / 2;

      // Calculate offsets relative to the center of the screen
      const offsetX = ((clientX - windowWidth) / windowWidth) * 30; // Max offset: 30px
      const offsetY = ((clientY - windowHeight) / windowHeight) * 30; // Max offset: 30px

      setMousePosition({ x: offsetX, y: offsetY });
    };

    // Add event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p className="font-dm_sans font-medium text-sm tracking-wider text-center text-[#f0f0f0] opacity-50 pt-20 pb-8">
        BUILDING FOR THE WEB SINCE 2020
      </p>
      <div className="relative w-full max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="name-container relative">
            {/* First name with individual letter spans */}
            <div className="first-name flex justify-center flex-wrap">
              {firstName.split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 font-big_shoulders font-black text-white"
                  style={{
                    fontSize: "clamp(6rem, 15vw, 260px)",
                    lineHeight: "0.9",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Last name */}
            <div className="last-name">
              <span
                className="inline-block transition-all duration-300 font-big_shoulders font-black text-white"
                style={{
                  fontSize: "clamp(4.5rem, 15vw, 260px)",
                  lineHeight: "0.9",
                }}
              >
                {lastName}
              </span>
            </div>

            
            {/* Circular image container */}
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
              style={{
                width: "clamp(4rem, 10vw, 150px)", // Dynamically scale the width
                height: "clamp(4rem, 10vw, 150px)", // Dynamically scale the height
                transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`, // Add movement
              }}
            >
              <img
                src={Profile}
                alt="Profile"
                className="rounded-edge h-full brightness-75 object-cover"
                style={{
                  clipPath: "ellipse(75% 50%)", // Retain the rounded-edge class behavior
                }}
              />
            </div>
          </div>
          
          {/* Scroll down indicator */}
        
          <TbNorthStar className="text-[#1f67f0] my-8 text-6xl"/>
          
          <span className="w-1/2">
            <p className="font-dm_sans text-[#F0F0F0] tracking-wide text-[16px] text-justify lg:text-[22px] leading-[40px]">
              I'm Aviel, a full stack developer passionate about bringing value through code.
            </p>
          </span>

          <div className="flex flex-col items-center justify-center mt-24">
            <ScrollBounce />
            <p className="font-dm_sans font-medium text-sm text-center text-[#f0f0f0] opacity-50 mt-2">
              SCROLL
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Landing;

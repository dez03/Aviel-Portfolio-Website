import React, { useEffect, useState } from "react";

/* icons */
import { TbKeyboard } from "react-icons/tb";
import { FiClock, FiTarget, FiGlobe } from "react-icons/fi";

const CurrentlyAt = () => {
  
  return (
    <a
      href="https://monkeytype.com/profile/dez03"
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
    >
      <div className="relative flex flex-col justify-between w-full h-[190px] rounded-3xl bg-[#0f1118] border border-[#1b1e27] p-6 overflow-hidden hover:border-[#e1b70e] transition-colors duration-200">
        {/* faint gigantic watermark number */}
        <span className="absolute -top-8 left-6 text-[200px] leading-none font-extrabold text-white/5 select-none pointer-events-none">
          <img src=""></img>
        </span>

        {/* pill label */}
        <div className="flex items-center gap-2 bg-[#161922] text-gray-300 text-xs font-medium px-3 py-1 rounded-full w-max shadow-inner">
          <TbKeyboard className="text-gray-400" size={14} />
          Typing speed
        </div>

        {/* main number */}
        <div className="flex items-baseline gap-1">
          <span className="text-white text-6xl font-bold leading-none">
            Amazon Intern
          </span>
        </div>

        {/* footer stats */}
        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <FiClock size={14} /> 15s
          </div>
          <div className="flex items-center gap-1">
            <FiTarget size={14} /> 100%
          </div>
          <div className="flex items-center gap-1">
            <FiGlobe size={14} /> ENG
          </div>
        </div>
      </div>
    </a>
  );
};

export default CurrentlyAt;
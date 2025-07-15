import React, { useEffect, useState } from "react";

/* icons */
import AmazonSmile from "../assets/amazon-smile.png"; // Replace with actual path to your image

const CurrentlyAt = () => {
  
  return (
    <a
      href="https://monkeytype.com/profile/dez03"
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
    >
      <div className="relative flex flex-col justify-between w-full h-[190px] rounded-3xl bg-[#0f1118] border border-[#1b1e27] p-6 overflow-hidden hover:border-[#e1b70e] transition-colors duration-200">

        {/* pill label */}
        <div className="flex items-center gap-2 bg-[#161922] text-gray-300 text-xs font-medium px-3 py-1 rounded-full w-max shadow-inner">
          {/* <TbKeyboard className="text-gray-400" size={14} /> */}
          <img className="h-2 w-8" src={AmazonSmile}></img>
          Currently
        </div>

        {/* main number */}
        <div className="mt-2">
          <h2 className="text-white text-3xl font-bold leading-snug">
            Interning <span className="text-yellow-400">@ Amazon</span>
          </h2>
          <p className="text-base text-gray-400 mt-2">
            EC2 Nitro, AI + ML Infrastructure, Java
          </p>
        </div>
        

      </div>
    </a>
  );
};

export default CurrentlyAt;
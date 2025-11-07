import React, { useEffect, useState } from "react";

/* icons */
import AmazonSmile from "../assets/amazon-smile.png";

const CurrentlyAt = () => {
  
  return (
    <div className="relative flex flex-col justify-between w-full py-6 rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden hover:border-[#FF9900] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full w-max border">
        <img className="h-2 w-8" src={AmazonSmile} alt="Amazon" />
        <span>Last Summer</span>
      </div>
      <div className="relative mt-4">
        <h2 className="text-white text-2xl md:text-2xl font-bold leading-snug">
          Prev SDE Intern<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-primary-400"> <br />@ Amazon</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2">EC2 Machine Learning Supercompute Team, AI + ML Infrastructure</p>
      </div>
    </div>
  );
};

export default CurrentlyAt;
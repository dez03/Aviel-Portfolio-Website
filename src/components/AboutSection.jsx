import React from 'react';

const AboutSection = () => {
  return (
    <a href="/about" className="block group"> 
      <div className="relative flex items-center w-full py-6 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-400/50 transition-all duration-500 hover:bg-white/10 backdrop-blur-sm">
        {/* About Title */}
        <h1 className="text-white font-bold font-big_shoulders text-3xl md:text-4xl tracking-wide mr-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-cyan transition-all duration-300">
          ABOUT
        </h1>

        {/* Animated Line */}
        <div className="relative flex-grow h-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-primary-400/50 transition-colors duration-300"></div>
          <div className="absolute inset-0 bg-white/10 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-cyan transition-all duration-500 transform group-hover:scale-x-150 origin-left"></div>
        </div>

        {/* Arrow Icon */}
        <div className="relative ml-6 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-cyan flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
            <svg 
              className="w-5 h-5 text-white group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AboutSection;

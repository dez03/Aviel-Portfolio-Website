import React from 'react';

const AboutSection = () => {
  return (
    <a href="/about"> 
      <div className="relative flex items-center group cursor-pointer w-full">
        {/* About Title */}
        <h1 className="text-white font-bold font-big_shoulders text-4xl tracking-wide mr-12">
          ABOUT
        </h1>

        {/* Gray Line (Shrinks on Hover) */}
        <div className="relative flex-grow h-[4px] bg-[#282828] transition-all duration-100  group-hover:w-[60%]"></div>

        {/* Yellow Bar (Extends on Hover) */}
        <div className="group-hover:ml-8 group-hover:mr-4 w-[20px] h-[4px] bg-white hover:bg-[#1f67f0] transition-all duration-300  group-hover:w-[100px]"></div>

        {/* Arrow Container */}
        <div className="relative w-[44px] h-[4px] ml-[-4px]">
          {/* Top Diagonal Line */}
          <div className="absolute top-0 left-0 w-[30px] h-[4px] bg-white hover:bg-[#1f67f0] transition-all duration-100 origin-right group-hover:rotate-45 group-hover:translate-x-[2px] group-hover:translate-y-[3px]"></div>

          {/* Bottom Diagonal Line */}
          <div className="absolute top-0 left-0 w-[30px] h-[4px] bg-white hover:bg-[#1f67f0] transition-all duration-100 origin-right group-hover:-rotate-45 group-hover:translate-x-[2px] group-hover:translate-y-[1px]"></div>
        </div>        
      </div>
    </a>
  );
};

export default AboutSection;

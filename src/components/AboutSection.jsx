import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative flex items-center group cursor-pointer w-full">
      {/* About Title */}
      <h1 className="text-[#e1ef23] font-bold font-big_shoulders text-4xl tracking-wide mr-4">
        ABOUT
      </h1>

      {/* Gray Line (Shrinks on Hover) */}
      <div className="relative flex-grow h-[4px] bg-[#282828] transition-all duration-300  group-hover:w-[60%]"></div>

      {/* Yellow Bar (Extends on Hover) */}
      <div className="ml-4 w-[40px] h-[4px] bg-[#e1ef23] transition-all duration-300  group-hover:w-[100px]"></div>

      {/* Arrow Container */}
      <div className="relative w-[44px] h-[4px] ml-[-4px]">
        {/* Top Diagonal Line */}
        <div className="absolute top-0 left-0 w-[44px] h-[4px] bg-[#e1ef23] transition-all duration-300 origin-right group-hover:rotate-45 group-hover:translate-x-[2px] group-hover:translate-y-[-1px]"></div>

        {/* Bottom Diagonal Line */}
        <div className="absolute top-0 left-0 w-[44px] h-[4px] bg-[#e1ef23] transition-all duration-300  origin-right group-hover:-rotate-45 group-hover:translate-x-[2px] group-hover:translate-y-[1px]"></div>
      </div>
    </div>
  );
};

export default AboutSection;
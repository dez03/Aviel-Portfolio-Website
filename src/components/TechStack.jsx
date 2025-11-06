

import React from 'react';
// import { GiStack } from "react-icons/gi";
// import { SiReact, SiTailwindcss, SiNodedotjs, SiTypescript, SiPython, SiMongodb } from 'react-icons/si';

// const techLogos = [
//   { icon: SiReact, key: 'react' },
//   { icon: SiTailwindcss, key: 'tailwind' },
//   { icon: SiNodedotjs, key: 'node' },
//   { icon: SiTypescript, key: 'typescript' },
//   { icon: SiPython, key: 'python' },
//   { icon: SiMongodb, key: 'mongodb' },
// ];

// const TechStack = () => {
//   return (
//     <div className="bg-[#0f1118] text-white w-auto h-[190px] mx-auto shadow-lg rounded-3xl border border-[#1b1e27] p-6">
//       <div className="flex items-center">
//         <div className="flex items-center gap-2 bg-[#161922] text-gray-300 text-xs font-medium px-3 rounded-full w-max shadow-inner">
//           <GiStack size={14} className="text-gray-400" />
//           Tech Stack
//         </div>
//       </div>

//       <div className="flex items-center gap-3">
//         {techLogos.map(({ icon: Icon, key }) => (
//           <Icon key={key} className="text-gray-400 text-[18px]" />
//         ))}
//       </div>

//       <h2 className="text-2xl font-bold">My Tech Stack</h2>
//       <p className="text-slate-400">
//         Mostly used JavaScript in the past, but I've recently been exploring C++ and Python.
//       </p>
//     </div>
//   );
// };

// export default TechStack;



/* icons */

const TechStack = () => {
  
  return (
    <div className="relative flex flex-col justify-between w-full h-[190px] rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full w-max border border-white/10">
        <span>Tech Stack</span>
      </div>
      <div className="relative mt-4">
        <h2 className="text-white text-lg font-bold leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-primary-400 transition-all">Technologies</h2>
        <p className="text-sm text-gray-400 leading-relaxed">Mostly used JavaScript in the past, but I've recently been exploring C++ and Python.</p>
      </div>
    </div>
  );
};

export default TechStack;
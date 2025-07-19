

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
          {/* <GiStack size={14} className="text-white" /> */}
          Tech Stack
        </div>

        {/* main number */}
        <div className="mt-2">
          <h2 className="text-white text-md font-bold leading-snug">
            Tech Stack
          </h2>
          <p className="text-base text-gray-400 mt-2">
            Mostly used JavaScript in the past, but I've recently been exploring C++ and Python.
          </p>
        </div>
        

      </div>
    </a>
  );
};

export default TechStack;
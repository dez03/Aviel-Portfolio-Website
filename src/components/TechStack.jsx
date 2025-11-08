import React from 'react';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiC, 
  SiNodedotjs, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiGit, 
  SiDocker, 
  SiNumpy, 
  SiScikitlearn, 
  SiPandas 
} from 'react-icons/si';

const techIcons = [
  { Icon: SiPython, name: 'Python', color: '#3776AB' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiC, name: 'C', color: '#A8B9CC' },
  { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
  { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { Icon: SiGit, name: 'Git', color: '#F05032' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiNumpy, name: 'NumPy', color: '#013243' },
  { Icon: SiScikitlearn, name: 'Scikit-learn', color: '#F7931E' },
  { Icon: SiPandas, name: 'Pandas', color: '#150458' },
];

const TechStack = () => {
  // Triple the array for smooth infinite scroll
  const triplicatedIcons = [...techIcons, ...techIcons, ...techIcons];
  
  return (
    <div className="relative flex flex-col justify-between w-full py-6 rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full w-max border border-white/10 mb-4">
        <span>Tech Stack</span>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative mb-6 -mx-6 px-6">
        {/* More subtle left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[rgb(15,17,24)] via-[rgb(15,17,24)]/60 to-transparent z-10 pointer-events-none"></div>
        
        {/* More subtle right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[rgb(15,17,24)] via-[rgb(15,17,24)]/60 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div className="flex gap-8 animate-infinite-scroll">
          {triplicatedIcons.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 transition-all duration-300"
              style={{
                filter: 'grayscale(100%) brightness(0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%) brightness(0.5)';
              }}
            >
              <tech.Icon 
                className="w-10 h-10"
                style={{ color: tech.color }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-2">
        <h2 className="text-white text-lg font-bold leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-primary-400 transition-all">
          Technologies
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Mostly used JavaScript in the past, but I've recently been exploring C and Python.
        </p>
      </div>
    </div>
  );
};

export default TechStack;
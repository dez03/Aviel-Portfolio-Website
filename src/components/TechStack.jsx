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
import LogoLoop from './LogoLoop';

const techIcons = [
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiC />, title: 'C', href: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com' },
  { node: <SiNumpy />, title: 'NumPy', href: 'https://numpy.org' },
  { node: <SiScikitlearn />, title: 'Scikit-learn', href: 'https://scikit-learn.org' },
  { node: <SiPandas />, title: 'Pandas', href: 'https://pandas.pydata.org' },
];

const TechStack = () => {
  return (
    <div className="relative flex flex-col justify-between w-full py-6 rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full w-max border border-white/10 mb-4">
        <span>Tech Stack</span>
      </div>

      {/* Auto-scrolling carousel with LogoLoop */}
      <div className="relative mb-6 -mx-6">
        <LogoLoop
          logos={techIcons}
          speed={50}
          direction="left"
          logoHeight={40}
          gap={32}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={false}
          fadeOutColor="rgb(255, 255, 255)"
          ariaLabel="Technology stack"
          className="grayscale-[100%] brightness-50 [&_a:hover]:grayscale-0 [&_a:hover]:brightness-100"
        />
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
import "../styles/index.css"

const ScrollBounce = () => {
    return (
      <div className="relative w-[2px] h-[60px] bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div className="absolute w-full h-[20px] bg-gradient-to-b from-primary-400 to-accent-cyan rounded-full animate-scroll"></div>
      </div>
    );
  };
  
  export default ScrollBounce;
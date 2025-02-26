import "../styles/index.css"

const ScrollBounce = () => {
    return (
      <div className="relative w-[3px] h-[50px] bg-gray-700 rounded-full overflow-hidden">
        <div className="absolute w-full h-[16.6px] bg-[#e1ef23] rounded-full animate-scroll"></div>
      </div>
    );
  };
  
  export default ScrollBounce;
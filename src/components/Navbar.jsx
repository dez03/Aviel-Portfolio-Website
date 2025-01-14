import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("HOME");

  const menuItems = [
    "HOME",
    "ABOUT",
    "PROJECTS",
    "EXPERIENCE",
    "EDUCATION",
    "CONTACT",
  ];

  const handleClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 pt-8 z-50 bg-[#121212]">
      <div className="w-full">
        <div className="max-w-[1250px] mx-auto px-4 relative flex items-center justify-between h-16">
          {/* Hamburger Menu */}
          <button
            className="w-12 h-16 flex items-center justify-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-2">
              <span
                className={`block h-0.5 bg-[#f1f1f1] rounded-full transition-all duration-300 origin-center ${
                  isOpen
                    ? "w-8 rotate-45 translate-y-2.5 group-hover:bg-[#737373]"
                    : "w-8 group-hover:w-6 group-hover:bg-[#737373]"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#f1f1f1] rounded-full transition-all duration-300 ${
                  isOpen
                    ? "opacity-0"
                    : "opacity-100 group-hover:w-8 group-hover:bg-[#737373]"
                }`}
              />
              <span
                className={`block h-0.5 bg-[#f1f1f1] rounded-full transition-all duration-300 origin-center ${
                  isOpen
                    ? "w-8 -rotate-45 -translate-y-2.5 group-hover:bg-[#737373]"
                    : "w-8 group-hover:w-6 group-hover:bg-[#737373]"
                }`}
              />
            </div>
          </button>

          {/* Center Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <svg
              width="300"
              height="100"
              viewBox="0 0 552 579"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="signature"
            >
              {/* Gray Path (Initial Draw)  */}
              <path
                d="M163.859 428L186.359 370.5L205.859 293L218.359 246C222.192 232.667 231.859 195.5 239.859 153.5C247.859 111.5 246.526 103.667 244.859 105L248.359 153.5L257.359 197.5L271.359 256C279.692 291.5 301.359 373.2 321.359 416L296.859 376.5L236.359 298C220.026 275 185.559 227.4 178.359 221C175.192 221 169.359 222.9 171.359 230.5C170.692 235.833 171.659 248.4 180.859 256L203.359 270C208.026 272 220.159 276.5 231.359 278.5C243.632 280.333 269.115 283.7 272.859 282.5C293.859 282.333 341.159 280.6 362.359 275C385.192 268.667 434.259 252.5 447.859 238.5C456.692 232.833 478.059 215.8 492.859 193C499.359 179.667 511.259 148.2 506.859 129C505.526 123 500.659 107.5 491.859 93.5C485.026 85.3333 467.059 66.9 449.859 58.5C437.859 53.1667 410.559 42 397.359 40C381.859 37.8333 346.359 34.5 328.359 38.5C315.359 40.6667 283.259 47.7 258.859 58.5C240.359 67.8333 196.959 92.4 171.359 116C156.192 128.5 115.059 168.2 71.8589 227C57.3589 245.833 24.6589 300.3 9.85893 367.5C6.19227 379.5 1.05893 411.4 9.85893 443C11.3589 454.833 21.7589 483.2 51.3589 502C67.3589 511.833 113.459 530.2 169.859 525C193.192 522.667 248.159 508.8 281.359 472L313.859 443M465.359 3C454.595 26.3333 420.024 111 367.859 263L307.359 434L275.359 512C272.359 517.667 266.159 529.8 265.359 533C264.692 535 263.759 539 265.359 539C267.359 539 293.359 524 294.359 521.5M546.859 33.5C531.526 63 500.059 123.4 496.859 129C487.071 154.167 466.969 206.8 464.859 216C464.859 217.2 447.526 269.833 438.859 296L414.359 383.5L394.859 456L377.859 519C375.359 528.167 370.059 551.4 368.859 571C369.526 572.333 371.759 574.6 375.359 573"
                stroke="#5a5a5a"
                stroke-width="10"
                class="gray-path"
              />
              {/* White Path (Repeating Animation) */}
              <path
                d="M163.859 428L186.359 370.5L205.859 293L218.359 246C222.192 232.667 231.859 195.5 239.859 153.5C247.859 111.5 246.526 103.667 244.859 105L248.359 153.5L257.359 197.5L271.359 256C279.692 291.5 301.359 373.2 321.359 416L296.859 376.5L236.359 298C220.026 275 185.559 227.4 178.359 221C175.192 221 169.359 222.9 171.359 230.5C170.692 235.833 171.659 248.4 180.859 256L203.359 270C208.026 272 220.159 276.5 231.359 278.5C243.632 280.333 269.115 283.7 272.859 282.5C293.859 282.333 341.159 280.6 362.359 275C385.192 268.667 434.259 252.5 447.859 238.5C456.692 232.833 478.059 215.8 492.859 193C499.359 179.667 511.259 148.2 506.859 129C505.526 123 500.659 107.5 491.859 93.5C485.026 85.3333 467.059 66.9 449.859 58.5C437.859 53.1667 410.559 42 397.359 40C381.859 37.8333 346.359 34.5 328.359 38.5C315.359 40.6667 283.259 47.7 258.859 58.5C240.359 67.8333 196.959 92.4 171.359 116C156.192 128.5 115.059 168.2 71.8589 227C57.3589 245.833 24.6589 300.3 9.85893 367.5C6.19227 379.5 1.05893 411.4 9.85893 443C11.3589 454.833 21.7589 483.2 51.3589 502C67.3589 511.833 113.459 530.2 169.859 525C193.192 522.667 248.159 508.8 281.359 472L313.859 443M465.359 3C454.595 26.3333 420.024 111 367.859 263L307.359 434L275.359 512C272.359 517.667 266.159 529.8 265.359 533C264.692 535 263.759 539 265.359 539C267.359 539 293.359 524 294.359 521.5M546.859 33.5C531.526 63 500.059 123.4 496.859 129C487.071 154.167 466.969 206.8 464.859 216C464.859 217.2 447.526 269.833 438.859 296L414.359 383.5L394.859 456L377.859 519C375.359 528.167 370.059 551.4 368.859 571C369.526 572.333 371.759 574.6 375.359 573"
                stroke="white"
                stroke-width="10"
                className="white-path"
              />
            </svg>
          </div>

          {/* Future Navbar Items */}
          <div className="hidden md:flex space-x-8"></div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 w-full z-40">
            <div className="max-w-[1250px] mx-auto px-4">
              <div className="bg-[#121212]/70 w-min backdrop-blur-sm rounded-2xl py-4 px-4">
                {menuItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleClick(item)}
                    className={`font-big_shoulders font-bold text-[32px] block py-2 transition-all duration-300 transform ${
                      currentPage === item ? "text-[#e0f024]" : "text-[#f1f1f1]"
                    } hover:text-[#737373] ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${isOpen ? index * 50 : 0}ms`,
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

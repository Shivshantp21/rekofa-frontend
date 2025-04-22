


import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({text , prot}) => {
  return (
    <div className={prot}>
      <div>
        <button
          onClick={() => router.push("/")}
          className="relative overflow-hidden bg-[#9e0000] py-4 px-8 text-white flex items-center gap-4 group transition-all duration-500"
        >
          <span className="relative z-10">{text}</span>
          <FaArrowRightLong className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
          <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
        </button>
      </div>
    </div>
  );
};

export default Button;

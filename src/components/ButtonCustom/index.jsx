import React from "react";

const ButtonCustom = ({ text, link, className = "", children }) => {
  return (
    <a
      href={link}
      data-fancybox=""
      target="_blank"
      className={`box-border flex justify-center items-center bg-gradient-to-t from-[#3c1026] via-[#c72d70] to-[#b94880] shadow-[3px_3px_3px_rgba(91,12,74,0.3)] px-2.5 rounded-full w-full h-[2.34375rem] font-medium text-[0.9375rem] text-white leading-normal transition-all duration-400 ease-in-out cursor-pointer ${className}`}
    >
      {children}
      {text}
    </a>
  );
};

export default ButtonCustom;

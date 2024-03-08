import React from "react";

const Button = ({onClick,heading}) => {
    const convertUppercase = () => {
        let newLine = text.toUpperCase();
        setText(newLine);
        
      };
  return (
    <button className=" bg-orange-400 p-2 text-white text-lg h-28 w-28 rounded-full"  onClick={onClick}>
      {heading}
    </button>
  );
};


export default Button;

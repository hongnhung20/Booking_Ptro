import React from "react";

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullwidth }) => {
  return (
    <button
      type="button"
      className={`py-2 px-4  ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1 ${
        fullwidth && "w-full"
      }`}
      onClick={onClick}
    >
      {text} {IcAfter && <IcAfter />}{" "}
    </button>
  );
};

export default Button;

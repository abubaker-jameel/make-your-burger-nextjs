"use client";

import React from "react";
import { button } from "@/app/_variants/button";

const Button = ({ children, className, color, size, handleClick }) => {
  return (
    <button
      className={button({
        className: className,
        color: color,
        size: size,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

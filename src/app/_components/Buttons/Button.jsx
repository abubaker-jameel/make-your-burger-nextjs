"use client";

import React from "react";
import { button } from "@/app/_variants/button";

const Button = ({
  children,
  className,
  color,
  size,
  handleClick,
  disabled,
}) => {
  return (
    <button
      className={button({
        className: className,
        color: color,
        size: size,
      })}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

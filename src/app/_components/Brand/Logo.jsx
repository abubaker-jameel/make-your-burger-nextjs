import React from "react";
import { brand } from "@/app/_variants/brand";

const Logo = ({ children, className, color, size }) => {
  return (
    <div className={brand({ className: className, color: color, size: size })}>
      {children}
    </div>
  );
};

export default Logo;

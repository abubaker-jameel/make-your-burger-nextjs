import React from "react";
import { circle } from "@/app/_variants/utilities";

const DropDown = ({ children, className, color, size }) => {
  return (
    <div className={circle({ className, color: color, size: size })}>
      {children}
    </div>
  );
};

export default DropDown;

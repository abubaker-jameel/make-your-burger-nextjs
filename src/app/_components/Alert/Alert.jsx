import React from "react";
import { alert } from "@/app/_variants/alert";

const Alert = ({ className, children, color = "error" }) => {
  return (
    <div className={alert({ className: className, color: color })}>
      {children}
    </div>
  );
};

export default Alert;

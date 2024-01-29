import React from "react";
import { phoneNumber } from "@/app/_variants/utilities";

const PhoneNumber = ({ className, color, size, number }) => {
  return (
    <span className={phoneNumber({ className: className })}>{number}</span>
  );
};

export default PhoneNumber;

import React from "react";
import { typography } from "@/app/_variants/typography";

const Typography = ({ children, variant, className }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={typography({ className: className, heading: "h1" })}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={typography({ className: className, heading: "h2" })}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={typography({ className: className, heading: "h3" })}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={typography({ className: className, heading: "h4" })}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={typography({ className: className, heading: "h5" })}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={typography({ className: className, heading: "h6" })}>
          {children}
        </h6>
      );
    case "p":
      return (
        <p className={typography({ className: className, paragraph: "p" })}>
          {children}
        </p>
      );
    default:
      break;
  }
};

export default Typography;

import React from "react";
import PropTypes from "prop-types";
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
    case "type36":
      return (
        <span className={typography({ className: className, extra: "type36" })}>
          {children}
        </span>
      );
    default:
      break;
  }
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
    .isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Typography;

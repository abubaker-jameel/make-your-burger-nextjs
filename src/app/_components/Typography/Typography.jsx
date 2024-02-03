import React from "react";
import PropTypes from "prop-types";
import { typography } from "@/app/_variants/typography";

const Typography = ({ children, variant, className, textStyle }) => {
  // Render the dynamically selected HTML variant
  let Element = variant ? variant : "span";
  return (
    <Element
      className={typography({
        className: className,
        textStyles: textStyle ? textStyle : variant,
      })}
    >
      {children}
    </Element>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
    .isRequired,
  textStyle: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "type36",
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

// Set default props for Typography
Typography.defaultProps = {
  variant: "span",
  textStyle: undefined,
  className: "",
};
export default Typography;

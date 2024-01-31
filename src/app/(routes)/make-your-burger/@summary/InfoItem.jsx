import React from "react";
import Icon from "@/app/_components/Icons/Icon";
import PropTypes from "prop-types";

const InfoItem = ({ name, src, unit, value }) => {
  return (
    <li className="flex flex-row items-center gap-4">
      <span className="relative inline-block h-6 w-6">
        <Icon src={src} alt={name} />
      </span>
      <span className="text-sm">{`${value} ${unit}`}</span>
    </li>
  );
};

InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InfoItem;

import React from "react";
import footerData from "@/app/_data/footerData";
import Icon from "@/app/_components/Icons/Icon";

const RightFooterList = () => {
  const rightFooterItem = footerData.icons.map((item) => {
    return (
      <li
        key={item.id}
        className="relative h-8 min-w-8 [&:not(:first-child)]:ml-2"
      >
        <Icon src={item.source} alt={item.name} />
      </li>
    );
  });
  return <ul className="flex items-center justify-end">{rightFooterItem}</ul>;
};

export default RightFooterList;

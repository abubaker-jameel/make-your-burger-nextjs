import React from "react";
import footerData from "@/app/_data/footerData";

const LeftFooterList = () => {
  const navItem = footerData.data.map((item) => {
    return (
      <li
        key={item.id}
        className="text-xs font-normal capitalize first:text-primary-muted last:before:mr-2 last:before:inline-block last:before:h-2 last:before:border-l last:before:border-l-primary-muted  [&:not(:first-child)]:ml-3 [&:not(:first-child)]:text-primary-indigo "
      >
        {item.text}
      </li>
    );
  });
  return <ul className="flex items-center justify-start">{navItem}</ul>;
};

export default LeftFooterList;

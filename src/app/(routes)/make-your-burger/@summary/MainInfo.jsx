import React from "react";
import Icon from "@/app/_components/Icons/Icon";

const MainInfo = ({ time, weight, energy }) => {
  return (
    <div className="mt-4 rounded-full bg-primary-titan-white p-2">
      <ul className="flex items-center justify-between">
        <li className="flex flex-row items-center gap-4">
          <span className="relative inline-block h-10 w-10">
            <Icon src="/icons/summary-icon-energy.png" />
          </span>
          <span>{time} min</span>
        </li>
        <li className="flex flex-row items-center gap-4">
          <span className="relative inline-block h-8 w-8">
            <Icon src="/icons/summary-icon-energy.png" />
          </span>
          <span>{weight} oz</span>
        </li>
        <li className="flex flex-row items-center gap-4">
          <span className="relative inline-block h-8 w-8">
            <Icon src="/icons/summary-icon-energy.png" />
          </span>
          <span>{energy} kcal</span>
        </li>
      </ul>
    </div>
  );
};

export default MainInfo;

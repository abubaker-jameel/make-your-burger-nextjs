import React from "react";
import summaryInfoData from "@/app/_data/summaryInfoData";
import InfoItem from "./InfoItem";

const SummaryInfo = ({ time, weight, energy }) => {
  const infoItem = summaryInfoData.data.map((item) => {
    // value describe the total time, weight and energy
    let value;
    if (item.id === 21) {
      value = time;
    }
    if (item.id === 22) {
      value = weight;
    }
    if (item.id === 23) {
      value = energy;
    }
    return (
      <InfoItem
        key={item.id}
        name={item.name}
        src={item.icon}
        unit={item.unit}
        value={value === null ? 0 : value}
      />
    );
  });
  return (
    <div className="sm:p3 mt-4 rounded-full bg-primary-titan-white p-2">
      <ul className="flex items-center justify-between">{infoItem}</ul>
    </div>
  );
};

export default SummaryInfo;

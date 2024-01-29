import React from "react";
import LeftFooterList from "./LeftFooterList";
import RightFooterList from "./RightFooterList";

const Footer = () => {
  return (
    <footer className="container flex w-full items-center justify-between">
      <div className="">
        <LeftFooterList />
      </div>
      <div className="">
        <RightFooterList />
      </div>
    </footer>
  );
};

export default Footer;

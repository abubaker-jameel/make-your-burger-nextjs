import React from "react";
import LeftFooterList from "./LeftFooterList";
import RightFooterList from "./RightFooterList";

const Footer = () => {
  return (
    <footer className="container my-4 flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
      <LeftFooterList />
      <RightFooterList />
    </footer>
  );
};

export default Footer;

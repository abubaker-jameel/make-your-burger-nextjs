import Image from "next/image";
import React from "react";

const Icon = ({ src, alt }) => {
  return <Image src={src} alt={alt} fill />;
};

export default Icon;

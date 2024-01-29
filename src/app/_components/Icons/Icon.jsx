import Image from "next/image";
import React from "react";

const Icon = ({ src, width, height, alt }) => {
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default Icon;

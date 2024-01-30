import Image from "next/image";
import React from "react";

const Burger = () => {
  return (
    <div className="h-full min-h-[500px] bg-[url('/images/bg-blob.svg')] bg-contain bg-center bg-no-repeat">
      <div className="relative top-[26rem] h-[22%]">
        <Image src="/items/bun_bottom.svg" fill alt="bun-bottom" />
      </div>
    </div>
  );
};

export default Burger;

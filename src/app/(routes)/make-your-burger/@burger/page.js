import Image from "next/image";
import React from "react";

const Burger = () => {
  return (
    <div className="flex h-full min-h-[500px] justify-center bg-[url('/images/bg-blob.svg')] bg-contain bg-center bg-no-repeat">
      <div className="relative top-[25rem] h-[22%] max-w-[300px] basis-full">
        <Image src="/items/bun_bottom.svg" fill alt="bun-bottom" />
      </div>
    </div>
  );
};

export default Burger;

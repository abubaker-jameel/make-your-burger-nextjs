"use client";
import { useBurger } from "@/app/_contexts/burgerContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BurgerElement = () => {
  const { burger } = useBurger();

  const cutletTop = -45;
  const mayoTop = -18;
  const onionTop = -30;
  const tomatoeTop = -45;

  const burgerItem = burger.addedItems.map((item, index) => {
    return (
      <Image
        src={item.src}
        fill
        alt={item.name}
        className={`${burger.addedItems.length - index}`}
        style={{ top: -35, zIndex: index + 2, objectFit: "contain" }}
      />
    );
  });
  return (
    <div className="relative top-[25rem] h-[22%] max-w-[300px] basis-full">
      {burgerItem}
      <Image
        src="/items/bun_bottom.svg"
        fill
        alt="bun-bottom"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default BurgerElement;

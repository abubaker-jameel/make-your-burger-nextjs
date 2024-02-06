"use client";
import React, { useEffect } from "react";
import { useBurger } from "@/app/_contexts/burgerContext";
import Image from "next/image";
import Alert from "@/app/_components/Alert/Alert";

const BurgerElement = () => {
  const { burger, handleResetErrors } = useBurger();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handleResetErrors();
    }, 5000);
    // cleanup function
    return () => {
      clearTimeout(timeOutId);
    };
  }, [burger.errors.bunTop]);

  const burgerItem = burger.addedItems.map((item, index) => {
    if (item.id === 20) {
      return (
        <Image
          key={item.id + index}
          src={item.src}
          fill
          alt={item.name}
          className={`${index + 1} p-2`}
          style={{
            top: item.top,
            zIndex: index + 2,
            objectFit: "contain",
            minHeight: "200px",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      );
    } else {
      return (
        <Image
          key={index + "burgerItem"}
          src={item.src}
          fill
          alt={item.name}
          className={`${index + 1} p-2`}
          style={{ top: item.top, zIndex: index + 2, objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      );
    }
  });

  return (
    <div className="relative top-[25rem] h-[22%] max-w-[300px] basis-full">
      {burger.errors.bunTop ? (
        <Alert className="top-20 z-[100] text-center">
          You cannot add item after the bun element
        </Alert>
      ) : null}
      {burger.errors.limit ? (
        <Alert className="top-20 z-[100] text-center">
          Please add atleast 5 elements
        </Alert>
      ) : null}
      {burgerItem}
      <Image
        src="/items/bun_bottom.svg"
        fill
        alt="bun-bottom"
        style={{ zIndex: 1 }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default BurgerElement;

"use client";
import Button from "@/app/_components/Buttons/Button";
import React from "react";
import MainInfo from "./MainInfo";
import { useBurger } from "@/app/_contexts/burgerContext";

const Summary = () => {
  const { burger } = useBurger();
  console.log(burger.addedItems);
  return (
    <div className="flex flex-col justify-center p-10">
      <h3>Summary</h3>
      <span className="my-4 block h-[0.13rem] w-full bg-primary-titan-white"></span>
      <div>
        <div className="flex items-center justify-between">
          <span className="text-primary-md font-extrabold text-primary-indigo">
            ${burger.total.price}
          </span>
          <Button size="lg">Checkout</Button>
        </div>
        <span className="text-primary-xxsm  font-light">
          Build a <span className="text-primary-danger">$10</span> Burger and
          Get a Gift
        </span>
      </div>
      <MainInfo
        time={burger.total.time}
        weight={burger.total.weight}
        energy={burger.total.energy}
      />
    </div>
  );
};

export default Summary;

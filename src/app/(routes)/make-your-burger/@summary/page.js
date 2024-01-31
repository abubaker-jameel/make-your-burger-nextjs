"use client";
import React from "react";
import Button from "@/app/_components/Buttons/Button";
import { useBurger } from "@/app/_contexts/burgerContext";
import SummaryInfo from "./SummaryInfo";
import Typography from "@/app/_components/Typography/Typography";

const Summary = () => {
  const { burger } = useBurger();

  return (
    <div className="flex flex-col justify-center xl:p-10">
      <Typography variant="h3">Summary</Typography>
      <span className="my-4 block h-[0.13rem] w-full bg-primary-titan-white"></span>
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-4xl font-extrabold text-primary-indigo">
            ${burger.total.price}
          </span>
          <Button size="lg">Checkout</Button>
        </div>
        <span className="text-sm font-light md:text-base">
          Build a <span className="text-primary-danger">$10</span> Burger and
          Get a Gift
        </span>
      </div>
      <SummaryInfo
        time={burger.total.time}
        weight={burger.total.weight}
        energy={burger.total.energy}
      />
    </div>
  );
};

export default Summary;

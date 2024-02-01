import React from "react";
import BurgerElement from "./BurgerElement";

const Burger = () => {
  return (
    <div className="flex h-full min-h-[500px] justify-center bg-[url('/images/bg-blob.svg')] bg-contain bg-center bg-no-repeat">
      <BurgerElement />
    </div>
  );
};

export default Burger;

"use client";
import React from "react";
import IngredientContent from "./IngredientContent";
import { useBurger } from "@/app/_contexts/burgerContext";

const Ingredients = () => {
  const { burger, handleAddItem, handleRemoveItem } = useBurger();
  const ingredient = burger.data.map((item) => {
    return (
      <IngredientContent
        key={item.key}
        src={item.src}
        name={item.name}
        count={item.count}
        handleAddItem={() => handleAddItem(item.id)}
        handleRemoveItem={() => handleRemoveItem(item.id)}
      />
    );
  });
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-y-10 overflow-hidden whitespace-nowrap px-28 py-10">
      {ingredient}
    </div>
  );
};

export default Ingredients;

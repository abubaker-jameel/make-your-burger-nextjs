"use client";
import React from "react";
import IngredientContent from "./IngredientContent";
import { useBurger } from "@/app/_contexts/burgerContext";

const Ingredients = () => {
  const { burger, handleAddItem, handleRemoveItem } = useBurger();
  const ingredient = burger.data.map((item) => {
    return (
      <IngredientContent
        key={item.id}
        src={item.src}
        name={item.name}
        count={item.count}
        handleAddItem={() => handleAddItem(item.id)}
        handleRemoveItem={() => handleRemoveItem(item.id)}
      />
    );
  });
  return (
    <div className="my-10 grid grid-cols-[repeat(auto-fit,minmax(128px,1fr))] place-items-center gap-5 overflow-hidden">
      {ingredient}
    </div>
  );
};

export default Ingredients;

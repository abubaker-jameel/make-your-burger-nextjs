import React from "react";
import IngredientContent from "./IngredientContent";
import ingredients from "@/app/_data/ingredients";

const Ingredients = () => {
  const ingredient = ingredients.data.map((item) => {
    return <IngredientContent key={item.key} src={item.src} name={item.name} />;
  });
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-y-10 overflow-hidden whitespace-nowrap px-28 py-10">
      {ingredient}
    </div>
  );
};

export default Ingredients;

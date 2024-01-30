import Button from "@/app/_components/Buttons/Button";
import Icon from "@/app/_components/Icons/Icon";
import Image from "next/image";
import React from "react";

const IngredientContent = ({
  name,
  src,
  count,
  handleAddItem,
  handleRemoveItem,
}) => {
  console.log(count);
  return (
    <div className=" flex max-w-32 items-center justify-between rounded-3xl border-2 border-primary-black-squeeze  px-4 py-6">
      <div className="flex w-full basis-full flex-col">
        <div className="relative min-h-10">
          <Image src={src} fill alt={name} />
        </div>
        <span className="my-4 text-center">{name}</span>
        <div className="flex items-center justify-between">
          <Button
            size="xsm"
            color="titan"
            className="aspect-square disabled:bg-red-400"
            handleClick={handleRemoveItem}
            disabled={count <= 0 ? true : false}
          >
            <span className="relative block h-3 w-3">
              <Icon src="/icons/minus.svg" alt="minus-icon" />
            </span>
          </Button>
          <span className="text-lg font-bold">{count}</span>
          <Button
            size="xsm"
            color="titan"
            className="aspect-square disabled:bg-red-400"
            handleClick={handleAddItem}
            disabled={count >= 2 ? true : false}
          >
            <span className="relative block h-3 w-3">
              <Icon src="/icons/plus.svg" alt="plus-icon" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IngredientContent;

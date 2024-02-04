import React from "react";
import PropTypes from "prop-types";
import Button from "@/app/_components/Buttons/Button";
import Icon from "@/app/_components/Icons/Icon";
import Image from "next/image";

const IngredientContent = ({
  name,
  src,
  count,
  handleAddItem,
  handleRemoveItem,
  itemId,
}) => {
  // count returning true and false to disable buttons
  let addBtnDisabled = count >= 2 ? true : false;
  let removeBtnDisabled = count <= 0 ? true : false;

  // add button
  if (count >= 2 && itemId != 20) {
    addBtnDisabled = true;
  } else {
    addBtnDisabled = false;
  }

  if (count >= 1 && itemId == 20) {
    addBtnDisabled = true;
  } else {
    addBtnDisabled = false;
  }

  return (
    <div className="w-32 rounded-3xl border-2 border-primary-black-squeeze px-4 py-6">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="relative min-h-10 basis-full object-contain">
          <Image
            src={src}
            fill
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="my-4 inline-block text-center">{name}</span>
        <div className="flex items-center justify-between">
          <Button
            size="xsm"
            color="titan"
            className={`aspect-square disabled:bg-gray-300 ${removeBtnDisabled ? "cursor-not-allowed" : ""}`}
            handleClick={handleRemoveItem}
            disabled={removeBtnDisabled}
          >
            <span className="relative block h-3 w-3">
              <Icon src="/icons/minus.svg" alt="minus-icon" />
            </span>
          </Button>
          <span className="text-lg font-bold">{count}</span>
          <Button
            size="xsm"
            color="titan"
            className={`aspect-square disabled:bg-gray-300 ${addBtnDisabled ? "cursor-not-allowed" : ""}`}
            handleClick={handleAddItem}
            disabled={addBtnDisabled}
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

IngredientContent.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default IngredientContent;

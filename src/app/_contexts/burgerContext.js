"use client";
import React, { createContext, useContext, useReducer } from "react";
import ingredients from "../_data/ingredients";

const BurgerContext = createContext();

export const BurgerProvider = ({ children }) => {
  const initialState = {
    data: ingredients.data,
    addedItems: [],
    total: {
      time: null,
      weight: null,
      energy: null,
      price: null,
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      // add item
      case "ADD_ITEM":
        const itemIdToAdd = action.payload;
        const addedItem = state.data.find((item) => item.id === itemIdToAdd);

        if (addedItem) {
          return {
            ...state,
            data: state.data.map((item) =>
              item.id === itemIdToAdd
                ? { ...item, count: item.count + 1 }
                : item,
            ),
            addedItems: [
              ...state.addedItems,
              { ...addedItem, count: addedItem.count + 1 },
            ],
            total: {
              time: state.total.time + addedItem.time,
              weight: state.total.weight + addedItem.weight,
              energy: state.total.energy + addedItem.energy,
              price: state.total.price + addedItem.price,
            },
          };
        }
        return state;
      // remove item
      case "REMOVE_ITEM":
        const itemIdToRemove = action.payload;
        const itemToRemove = state.addedItems.find(
          (item) => item.id === itemIdToRemove && item.count > 0,
        );

        // Find the last occurrence of the item to remove from addedItems
        let foundItemIndex = -1;
        for (let i = state.addedItems.length - 1; i >= 0; i--) {
          const item = state.addedItems[i];
          if (item.id === itemIdToRemove && item.count > 0) {
            foundItemIndex = i;
            break;
          }
        }

        if (foundItemIndex !== -1) {
          const updatedAddedItems = [...state.addedItems];
          updatedAddedItems.splice(foundItemIndex, 1);

          const updatedData = state.data.map((item) =>
            item.id === itemIdToRemove
              ? { ...item, count: Math.max(0, item.count - 1) }
              : item,
          );

          if (itemIdToRemove) {
            const updatedTotal = {
              time: state.total.time - itemToRemove.time,
              weight: state.total.weight - itemToRemove.weight,
              energy: state.total.energy - itemToRemove.energy,
              price: state.total.price - itemToRemove.price,
            };
            return {
              ...state,
              data: updatedData,
              addedItems: updatedAddedItems,
              total: updatedTotal,
            };
          }
        }

        return state;

      default:
        return state;
    }
  }
  const [burger, dispatch] = useReducer(reducer, initialState);

  function handleAddItem(value) {
    dispatch({ type: "ADD_ITEM", payload: value });
  }
  function handleRemoveItem(value) {
    dispatch({ type: "REMOVE_ITEM", payload: value });
  }

  const contextValues = {
    burger,
    handleAddItem,
    handleRemoveItem,
  };

  return (
    <BurgerContext.Provider value={contextValues}>
      {children}
    </BurgerContext.Provider>
  );
};

export const useBurger = () => {
  const context = useContext(BurgerContext);
  if (!context) {
    throw new Error("useBurger must be used within an BurgerProvider");
  }
  return context;
};

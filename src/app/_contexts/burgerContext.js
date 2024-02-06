"use client";
import React, { createContext, useContext, useReducer } from "react";
import ingredients from "../_data/ingredients";
import { secondIndexPositions } from "../(routes)/make-your-burger/@burger/positions";

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
    errors: {
      bunTop: null,
      limit: null,
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      // add item
      case "ADD_ITEM":
        const itemIdToAdd = action.payload;
        const bunTopItem = state.addedItems.find((item) => {
          return item.id == 20;
        });

        const addedItem = state.data.find((item) => {
          if (item.id == itemIdToAdd && itemIdToAdd != 20 && !bunTopItem) {
            return item;
          }
          if (
            item.id == itemIdToAdd &&
            itemIdToAdd == 20 &&
            state.addedItems.length > 4
          ) {
            return item;
          }
        });
        let top;

        if (addedItem) {
          const secondLastItem =
            state.addedItems.length > 0
              ? state.addedItems[state.addedItems.length - 1]
              : 0;

          // all last elements
          const secondLastItemCutlet =
            secondLastItem.id === 13 ? secondLastItem : null;
          const secondLastItemMayo =
            secondLastItem.id === 14 ? secondLastItem : null;
          const secondLastItemOnion =
            secondLastItem.id === 15 ? secondLastItem : null;
          const secondLastItemTomatoe =
            secondLastItem.id === 16 ? secondLastItem : null;
          const secondLastItemCucumber =
            secondLastItem.id === 17 ? secondLastItem : null;
          const secondLastItemCheese =
            secondLastItem.id === 18 ? secondLastItem : null;
          const secondLastItemSalad =
            secondLastItem.id === 19 ? secondLastItem : null;

          // second lastItem if cutlet
          if (secondLastItemCutlet) {
            if (addedItem.id == 13) {
              top =
                secondLastItemCutlet.top - secondIndexPositions.cutlet.cutlet;
            } else if (addedItem.id == 14) {
              top = secondLastItemCutlet.top - secondIndexPositions.cutlet.mayo;
            } else if (addedItem.id == 15) {
              top =
                secondLastItemCutlet.top - secondIndexPositions.cutlet.onion;
            } else if (addedItem.id == 16) {
              top =
                secondLastItemCutlet.top - secondIndexPositions.cutlet.tomatoe;
            } else if (addedItem.id == 17) {
              top =
                secondLastItemCutlet.top - secondIndexPositions.cutlet.cucumber;
            } else if (addedItem.id == 18) {
              top =
                secondLastItemCutlet.top - secondIndexPositions.cutlet.cheese;
            } else if (addedItem.id == 19) {
              top =
                secondLastItemCutlet.top - secondIndexPositions.cutlet.salad;
            } else if (addedItem.id == 20) {
              top = secondLastItemCutlet.top - secondIndexPositions.cutlet.bun;
            }
          }

          // second lastItem if mayo
          if (secondLastItemMayo) {
            if (addedItem.id == 13) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.cutlet;
            } else if (addedItem.id == 14) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.mayo;
            } else if (addedItem.id == 15) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.onion;
            } else if (addedItem.id == 16) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.tomatoe;
            } else if (addedItem.id == 17) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.cucumber;
            } else if (addedItem.id == 18) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.cheese;
            } else if (addedItem.id == 19) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.salad;
            } else if (addedItem.id == 20) {
              top = secondLastItemMayo.top - secondIndexPositions.mayo.bun;
            }
          }

          // second lastItem if onion
          if (secondLastItemOnion) {
            if (addedItem.id == 13) {
              top = secondLastItemOnion.top - secondIndexPositions.onion.cutlet;
            } else if (addedItem.id == 14) {
              top = secondLastItemOnion.top - secondIndexPositions.onion.mayo;
            } else if (addedItem.id == 15) {
              top = secondLastItemOnion.top - secondIndexPositions.onion.onion;
            } else if (addedItem.id == 16) {
              top =
                secondLastItemOnion.top - secondIndexPositions.onion.tomatoe;
            } else if (addedItem.id == 17) {
              top =
                secondLastItemOnion.top - secondIndexPositions.onion.cucumber;
            } else if (addedItem.id == 18) {
              top = secondLastItemOnion.top + secondIndexPositions.onion.cheese;
            } else if (addedItem.id == 19) {
              top = secondLastItemOnion.top - secondIndexPositions.onion.salad;
            } else if (addedItem.id == 20) {
              top = secondLastItemOnion.top - secondIndexPositions.onion.bun;
            }
          }
          // second lastItem if tomatoe
          if (secondLastItemTomatoe) {
            if (addedItem.id == 13) {
              top =
                secondLastItemTomatoe.top - secondIndexPositions.tomatoe.cutlet;
            } else if (addedItem.id == 14) {
              top =
                secondLastItemTomatoe.top - secondIndexPositions.tomatoe.mayo;
            } else if (addedItem.id == 15) {
              top =
                secondLastItemTomatoe.top - secondIndexPositions.tomatoe.onion;
            } else if (addedItem.id == 16) {
              top =
                secondLastItemTomatoe.top -
                secondIndexPositions.tomatoe.tomatoe;
            } else if (addedItem.id == 17) {
              top =
                secondLastItemTomatoe.top -
                secondIndexPositions.tomatoe.cucumber;
            } else if (addedItem.id == 18) {
              top =
                secondLastItemTomatoe.top - secondIndexPositions.tomatoe.cheese;
            } else if (addedItem.id == 19) {
              top =
                secondLastItemTomatoe.top - secondIndexPositions.tomatoe.salad;
            } else if (addedItem.id == 20) {
              top =
                secondLastItemTomatoe.top - secondIndexPositions.tomatoe.bun;
            }
          }
          // second lastItem if cucumber
          if (secondLastItemCucumber) {
            if (addedItem.id == 13) {
              top =
                secondLastItemCucumber.top -
                secondIndexPositions.cucumber.cutlet;
            } else if (addedItem.id == 14) {
              top =
                secondLastItemCucumber.top - secondIndexPositions.cucumber.mayo;
            } else if (addedItem.id == 15) {
              top =
                secondLastItemCucumber.top -
                secondIndexPositions.cucumber.onion;
            } else if (addedItem.id == 16) {
              top =
                secondLastItemCucumber.top -
                secondIndexPositions.cucumber.tomatoe;
            } else if (addedItem.id == 17) {
              top =
                secondLastItemCucumber.top -
                secondIndexPositions.cucumber.cucumber;
            } else if (addedItem.id == 18) {
              top =
                secondLastItemCucumber.top -
                secondIndexPositions.cucumber.cheese;
            } else if (addedItem.id == 19) {
              top =
                secondLastItemCucumber.top -
                secondIndexPositions.cucumber.salad;
            } else if (addedItem.id == 20) {
              top =
                secondLastItemCucumber.top - secondIndexPositions.cucumber.bun;
            }
          }
          // second lastItem if cheese
          if (secondLastItemCheese) {
            if (addedItem.id == 13) {
              top =
                secondLastItemCheese.top - secondIndexPositions.cheese.cutlet;
            } else if (addedItem.id == 14) {
              top = secondLastItemCheese.top - secondIndexPositions.cheese.mayo;
            } else if (addedItem.id == 15) {
              top =
                secondLastItemCheese.top - secondIndexPositions.cheese.onion;
            } else if (addedItem.id == 16) {
              top =
                secondLastItemCheese.top - secondIndexPositions.cheese.tomatoe;
            } else if (addedItem.id == 17) {
              top =
                secondLastItemCheese.top - secondIndexPositions.cheese.cucumber;
            } else if (addedItem.id == 18) {
              top =
                secondLastItemCheese.top - secondIndexPositions.cheese.cheese;
            } else if (addedItem.id == 19) {
              top =
                secondLastItemCheese.top - secondIndexPositions.cheese.salad;
            } else if (addedItem.id == 20) {
              top = secondLastItemCheese.top - secondIndexPositions.cheese.bun;
            }
          }
          // second lastItem if salad
          if (secondLastItemSalad) {
            if (addedItem.id == 13) {
              top = secondLastItemSalad.top - secondIndexPositions.salad.cutlet;
            } else if (addedItem.id == 14) {
              top = secondLastItemSalad.top - secondIndexPositions.salad.mayo;
            } else if (addedItem.id == 15) {
              top = secondLastItemSalad.top - secondIndexPositions.salad.onion;
            } else if (addedItem.id == 16) {
              top =
                secondLastItemSalad.top - secondIndexPositions.salad.tomatoe;
            } else if (addedItem.id == 17) {
              top =
                secondLastItemSalad.top - secondIndexPositions.salad.cucumber;
            } else if (addedItem.id == 18) {
              top = secondLastItemSalad.top + secondIndexPositions.salad.cheese;
            } else if (addedItem.id == 19) {
              top = secondLastItemSalad.top - secondIndexPositions.salad.salad;
            } else if (addedItem.id == 20) {
              top = secondLastItemSalad.top - secondIndexPositions.salad.bun;
            }
          }
          return {
            ...state,
            data: state.data.map((item) =>
              item.id === itemIdToAdd
                ? { ...item, count: item.count + 1 }
                : item,
            ),
            addedItems: [
              ...state.addedItems,
              {
                ...addedItem,
                count: addedItem.count + 1,
                top: top ? top : addedItem.top,
              },
            ],
            total: {
              time: state.total.time + addedItem.time,
              weight: state.total.weight + addedItem.weight,
              energy: state.total.energy + addedItem.energy,
              price: state.total.price + addedItem.price,
            },
          };
        }

        // bun top error
        if (bunTopItem) {
          return {
            ...state,
            errors: {
              ...state.errors,
              bunTop: true,
            },
          };
        }
        // limit the number of elements add error
        if (state.addedItems.length < 4) {
          return {
            ...state,
            errors: {
              ...state.errors,
              limit: true,
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
          if (item.id === itemIdToRemove && item.count >= 0) {
            foundItemIndex = i;
            break;
          }
        }

        if (foundItemIndex !== -1) {
          let updatedAddedItems = [...state.addedItems];

          if (updatedAddedItems[foundItemIndex].id == 13) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 26 };
              }
              return item;
            });
          } else if (updatedAddedItems[foundItemIndex].id == 14) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 16 };
              }
              return item;
            });
          } else if (updatedAddedItems[foundItemIndex].id == 15) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 26 };
              }
              return item;
            });
          } else if (updatedAddedItems[foundItemIndex].id == 16) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 14 };
              }
              return item;
            });
          } else if (updatedAddedItems[foundItemIndex].id == 17) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 28 };
              }
              return item;
            });
          } else if (updatedAddedItems[foundItemIndex].id == 18) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 3 };
              }
              return item;
            });
          } else if (updatedAddedItems[foundItemIndex].id == 19) {
            updatedAddedItems = updatedAddedItems.map((item, index) => {
              if (index > foundItemIndex) {
                return { ...item, top: item.top + 20 };
              }
              return item;
            });
          }

          updatedAddedItems = updatedAddedItems.filter(
            (item, index) => index != foundItemIndex,
          );

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
      case "RESET_ERRORS":
        return {
          ...state,
          errors: {
            ...state.errors,
            bunTop: false,
            limit: false,
          },
        };
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

  function handleResetErrors() {
    dispatch({ type: "RESET_ERRORS" });
  }

  const contextValues = {
    burger,
    handleAddItem,
    handleRemoveItem,
    handleResetErrors,
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

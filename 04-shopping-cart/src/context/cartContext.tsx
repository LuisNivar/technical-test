import { createContext } from "react";
import { ActionType, CartItemType } from "../type";

export const CartContext = createContext<CartItemType[]>([]);

export const CartDispatchContext = createContext<React.Dispatch<ActionType>>(
  () => {}
);

export function reducer(state: CartItemType[], payload: ActionType) {
  switch (payload.type) {
    case "Add": {
      const itemIndex = state.findIndex(
        (item) => item.id === payload.product.id
      );

      if (itemIndex >= 0) {
        const newState = structuredClone(state);
        newState[itemIndex].quantity += 1;
        return newState;
      }

      return [...state, { ...payload.product, quantity: 1 }];
    }
    case "Remove":
      return state.filter((item) => item.id !== payload.id);

    case "Clear":
      return [];
    case "Update": {
      const itemIndex = state.findIndex((item) => item.id === payload.id);

      const newItem = structuredClone(state);
      newItem[itemIndex].quantity += 1;

      return newItem;
    }
    case "Load": {
      return payload.items;
    }
  }
}

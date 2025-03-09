import { PropsWithChildren, useReducer } from "react";
import { CartContext, CartDispatchContext, reducer } from "./cartContext";
import { CartItemType } from "../type";

const INITIAL_CART_STATE: CartItemType[] = [];

export function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_CART_STATE);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

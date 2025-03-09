import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../context/cartContext";

export function useCartContext() {
  const cartContext = useContext(CartContext);
  const cartDispatchContext = useContext(CartDispatchContext);

  if (!cartContext || !cartDispatchContext)
    throw new Error("CartContext should be used in a CartProvider");

  return { state: cartContext, dispatch: cartDispatchContext };
}

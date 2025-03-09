import { useContext, useEffect, useState } from "react";
import { CartContext, CartDispatchContext } from "../context/cartContext";
import { CartItemType } from "../type";

export function useCartContext() {
  const cartContext = useContext(CartContext);
  const cartDispatchContext = useContext(CartDispatchContext);
  const [firstRender, setFirstRender] = useState(true);

  if (!cartContext || !cartDispatchContext)
    throw new Error("CartContext should be used in a CartProvider");

  // Persist Shopping Cart in local storage
  useEffect(() => {
    //HACK: I use this method because it was a test.
    const local = localStorage.getItem("cart");
    const items: CartItemType[] = local ? JSON.parse(local) : [];

    cartDispatchContext({
      type: "Load",
      items,
    });

    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("cart", JSON.stringify(cartContext));
    }
  }, [cartContext]);

  return { state: cartContext, dispatch: cartDispatchContext };
}

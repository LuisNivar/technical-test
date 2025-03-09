import { useCartContext } from "../../hooks/useCartContext";
import { ProductType } from "../../type";
import { CartItem } from "./CartItem";

export type CartItemType = ProductType & { quantity: number };
export function Cart() {
  const { state, dispatch } = useCartContext();

  const ClearCart = () => {
    dispatch({
      type: "Clear",
    });
  };

  const UpdateQuantity = (id: number) => {
    dispatch({
      type: "Update",
      id,
    });
  };

  const RemoveItem = (id: number) => {
    dispatch({
      type: "Remove",
      id,
    });
  };

  return (
    <aside className="cart">
      <span>
        <h3>Cart 🛒</h3>
        <button onClick={() => ClearCart()}>🗑️</button>
      </span>

      <ul className="cart-list">
        {state.length !== 0 ? (
          state.map((item) => (
            <CartItem
              onUpdateQuantity={UpdateQuantity}
              onRemove={RemoveItem}
              key={crypto.randomUUID()}
              {...item}
            />
          ))
        ) : (
          <p>Empty Cart...</p>
        )}
      </ul>
    </aside>
  );
}

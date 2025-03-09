import { CartItemType } from "../../type";

export type CartItemProps = CartItemType & {
  onUpdateQuantity: (id: number) => void;
  onRemove: (id: number) => void;
};

export function CartItem({ ...props }: CartItemProps) {
  const { id, image, title, price, quantity, onUpdateQuantity, onRemove } =
    props;

  return (
    <li className="cart-item">
      <span>
        <img src={image} alt={`Image of ${title}`} />
        <button onClick={() => onRemove(id)}>❌</button>
      </span>

      <p>
        {title} - $ {price}
      </p>
      <span>
        Qty: {String(quantity).padStart(2, "0")}{" "}
        <button onClick={() => onUpdateQuantity(id)}>+</button>
      </span>
    </li>
  );
}

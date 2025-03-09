import { useCartContext } from "../hooks/useCartContext";
import { ProductType } from "../type";

export type ItemPros = {
  product: ProductType;
  onAdd: (product: ProductType) => void;
  onRemove: (id: number) => void;
};

export function Item({ product, onAdd, onRemove }: ItemPros) {
  const { id, title, image, price } = product;
  const { state } = useCartContext();

  const isInCart = state.find((item) => item.id === id);

  return (
    <li className="product">
      <img src={image} alt={title} />
      <span>
        {title} - ${price}
      </span>

      {isInCart ? (
        <button onClick={() => onRemove(id)}>❌</button>
      ) : (
        <button onClick={() => onAdd(product)}>🛒</button>
      )}
    </li>
  );
}

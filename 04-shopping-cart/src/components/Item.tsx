export type ItemPros = {
  image: string;
  title: string;
  price: number;
};

export function Item({ title, image, price }: ItemPros) {
  return (
    <li className="product">
      <img src={image} alt={title} />
      <span>
        {title} - ${price}
      </span>
      <button>🛒</button>
    </li>
  );
}

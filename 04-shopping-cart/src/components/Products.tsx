import WithResult from "../mocks/products.json";
import "../products.css";
import { Item } from "./Item";

export function Products() {
  const products = WithResult;

  return (
    <ul className="products">
      {products.map((product) => {
        const { title, image, price } = product;
        return <Item title={title} image={image} price={price} />;
      })}
    </ul>
  );
}

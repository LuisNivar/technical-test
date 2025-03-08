import { useFilterContext } from "../hooks/useFilterContext";
import { useProduct } from "../hooks/useProducts";
import "../styles/products.css";
import { ProductType } from "../type";
import { Item } from "./Item";

export function Products() {
  const { filter } = useFilterContext();
  const { products } = useProduct({ filter });

  return products.length > 0 ? (
    <ListOfProducts products={products} />
  ) : (
    <NoProducts />
  );
}

function NoProducts() {
  return <p>Products not found.</p>;
}

type ListOfProductsProps = {
  products: ProductType[];
};

function ListOfProducts({ products }: ListOfProductsProps) {
  return (
    <ul className="products">
      {products.map((product) => {
        const { id, title, image, price } = product;
        return <Item key={id} title={title} image={image} price={price} />;
      })}
    </ul>
  );
}

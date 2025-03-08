import { useProduct } from "../hooks/useProducts";
import { Item } from "./Item";
import "../products.css";
import { FilterType, ProductType } from "../type";

export type ProductsProps = {
  filter: FilterType;
};

export function Products({ filter }: ProductsProps) {
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

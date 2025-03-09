import { useCartContext } from "../hooks/useCartContext";
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
  const { dispatch } = useCartContext();

  const handleAdd = (product: ProductType) => {
    dispatch({
      type: "Add",
      product,
    });
  };

  const handleRemove = (id: number) => {
    dispatch({
      type: "Remove",
      id,
    });
  };

  return (
    <ul className="products">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            onAdd={handleAdd}
            onRemove={handleRemove}
            product={product}
          />
        );
      })}
    </ul>
  );
}

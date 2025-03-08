import { ProductsProps } from "../components/Products";
import WithResult from "../mocks/products.json";

export function getProducts({ filter }: ProductsProps) {
  //TODO: Data Fetch
  const products = WithResult;

  const filterProducts = products.filter(
    (product) =>
      product.price < filter.max &&
      (filter.category === "all" || product.category === filter.category)
  );

  if (!filterProducts) return [];

  return filterProducts.map((product) => ({
    id: product.id,
    title: product.title,
    category: product.category,
    image: product.image,
    price: product.price,
  }));
}

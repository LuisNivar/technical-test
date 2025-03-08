import { ProductsProps } from "../components/Products";
import { getProducts } from "../services/products";

export function useProduct({ filter }: ProductsProps) {
  const products = getProducts({ filter });

  //console.log([...new Set(products.map((p) => p.category))]);

  return { products };
}

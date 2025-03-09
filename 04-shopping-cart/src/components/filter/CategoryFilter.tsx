import { useId } from "react";

type CategoryProps = {
  onChange: (value: string) => void;
};

export function CategoryFilter({ onChange }: CategoryProps) {
  const categoryId = useId();
  return (
    <span className="category-filter">
      <label htmlFor={categoryId}>Category</label>
      <select id={categoryId} onChange={(e) => onChange(e.target.value)}>
        <option value="all">All</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </span>
  );
}

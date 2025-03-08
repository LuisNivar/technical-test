import { useId } from "react";
import { FiltersProps } from "../type";
import "../filters.css";

export function Filters({
  filter,
  onMaxValueChange,
  onCategoryChange,
}: FiltersProps) {
  return (
    <div className="filters">
      <MaxPriceFilter onChange={onMaxValueChange} value={filter.max} />
      <CategoryFilter onChange={onCategoryChange} />
    </div>
  );
}

type MaxPriceFilterProps = {
  onChange: (value: number) => void;
  value: number;
};

function MaxPriceFilter({ onChange, value }: MaxPriceFilterProps) {
  const maxPriceId = useId();
  return (
    <span className="price-filter">
      <label htmlFor={maxPriceId}>Max Price:</label>
      <input
        type="range"
        id={maxPriceId}
        min="1"
        max="700"
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
      <output>${value}</output>
    </span>
  );
}

type CategoryProps = {
  onChange: (value: string) => void;
};

function CategoryFilter({ onChange }: CategoryProps) {
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

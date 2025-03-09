import { useId } from "react";

type MaxPriceFilterProps = {
  onChange: (value: number) => void;
  value: number;
};

export function MaxPriceFilter({ onChange, value }: MaxPriceFilterProps) {
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

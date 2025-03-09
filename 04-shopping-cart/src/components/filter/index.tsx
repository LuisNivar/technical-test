import { useFilter } from "../../hooks/useFilter";
import "../../styles/filters.css";
import { CategoryFilter } from "./CategoryFilter";
import { MaxPriceFilter } from "./MaxPriceFilter";

export function Filters() {
  const { filter, updateCategory, updateMaxValue } = useFilter();

  return (
    <div className="filters">
      <MaxPriceFilter onChange={updateMaxValue} value={filter.max} />
      <CategoryFilter onChange={updateCategory} />
    </div>
  );
}

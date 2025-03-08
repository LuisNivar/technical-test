import { FilterType } from "../type";
import { useFilterContext } from "./useFilterContext";

export const INITIAL_FILTER: FilterType = {
  category: "all",
  max: 100,
};

export function useFilter() {
  const { filter, setFilter } = useFilterContext();

  const updateMaxValue = (value: number) => {
    setFilter((prevState) => ({ ...prevState, max: value }));
  };

  const updateCategory = (value: string) => {
    setFilter((prevState) => ({ ...prevState, category: value }));
  };

  return { filter, updateMaxValue, updateCategory };
}

import { useState } from "react";
import { FilterType } from "../type";

export function useFilter() {
  const [filter, setFilter] = useState<FilterType>({
    max: 100,
    category: "all",
  });

  const updateMaxValue = (value: number) => {
    setFilter((prevState) => ({ ...prevState, max: value }));
  };

  const updateCategory = (value: string) => {
    setFilter((prevState) => ({ ...prevState, category: value }));
  };

  return { filter, updateMaxValue, updateCategory };
}

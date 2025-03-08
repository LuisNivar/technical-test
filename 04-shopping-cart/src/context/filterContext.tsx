import { createContext } from "react";
import { FilterType } from "../type";

export type FilterContextType = {
  filter: FilterType;
  setFilter: (value: React.SetStateAction<FilterType>) => void;
};

export const FilterContext = createContext<FilterContextType | null>(null);

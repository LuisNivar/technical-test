import { PropsWithChildren, useState } from "react";
import { FilterContext } from "./filterContext";
import { INITIAL_FILTER } from "../hooks/useFilter";

export function FilterProvider({ children }: PropsWithChildren) {
  const [filter, setFilter] = useState(INITIAL_FILTER);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

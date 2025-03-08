import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilterContext shoul be use inside of FilterContext");

  return context;
}

import { useState, useEffect } from "react";
import { getRandomFact } from "../services/CatFact";

export function useCatFat() {
  const [fatCat, setFactCat] = useState("");

  useEffect(() => {
    refreshCatFact();
  }, []);

  const refreshCatFact = () => {
    getRandomFact().then((newFact) => setFactCat(newFact));
  };

  return { fatCat, refreshCatFact };
}

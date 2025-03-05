import { useEffect, useState, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Yo can't do a empty search");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Movie name cannot be a number");
      return;
    }

    if (search.length < 4) {
      setError("Movie name should be at least 4 characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

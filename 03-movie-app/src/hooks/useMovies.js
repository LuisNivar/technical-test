import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovie } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const previousSearch = useRef(search);

  const updateMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return;
    try {
      setIsLoading(true);
      setError(null);

      previousSearch.current = search;
      const newMovie = await searchMovie({ search });
      setMovies(newMovie);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    // console.log("Render Sort"); // Check render sort

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortMovies, error, isLoading, updateMovies };
}

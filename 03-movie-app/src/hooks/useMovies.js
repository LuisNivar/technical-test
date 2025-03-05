import { useState, useRef } from "react";
import { searchMovie } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const previousSearch = useRef(search);

  const updateMovies = async () => {
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
  };
  return { movies, error, isLoading, updateMovies };
}

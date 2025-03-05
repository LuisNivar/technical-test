import { useState } from "react";
import { searchMovie } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

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

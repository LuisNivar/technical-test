import { getMovies } from "../services/movies";

export function useMovies() {
  const movies = getMovies();
  return { movies };
}

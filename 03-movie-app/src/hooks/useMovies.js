import { useState } from "react";
import { mappedMovies } from "../services/movies";
import withoutResults from "../mocks/without-result.json";
import { API_KEY, API_URL } from "../config";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);

  const movies = mappedMovies({ responseMovies });

  const updateMovies = () => {
    if (search) {
      fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
        .then((res) => res.json())
        .then((json) => setResponseMovies(json));
    } else {
      setResponseMovies(withoutResults);
    }
  };
  return { movies, updateMovies };
}

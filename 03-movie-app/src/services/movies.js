import withResults from "../mocks/with-results.json";

//import withoutResults from "./mocks/without-result.json"

export function getMovies() {
  const movies = withResults.Search;

  if (movies.length === 0) return [];

  // Mapped
  return movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));
}

export function mappedMovies({ responseMovies }) {
  if (!responseMovies.Search) return [];

  const movies = responseMovies.Search;
  if (movies.length === 0) return [];

  // Mapped
  return movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));
}

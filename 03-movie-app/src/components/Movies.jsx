function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.poster} alt={`Poster of ${movie.title}`} />
          <span>{movie.year}</span>
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>Not movies found!</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}

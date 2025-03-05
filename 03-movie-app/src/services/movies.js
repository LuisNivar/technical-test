import { API_KEY, API_URL } from "../config";

export async function searchMovie({ search }) {
  if (!search) return null;

  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`);
    const json = await res.json();

    if (!json.Search) return null;
    const movies = json.Search;

    return movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));

    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    throw new Error("Error fetching data!");
  }
}

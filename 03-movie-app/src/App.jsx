import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const [sort, setSort] = useState(false);
  const { error, search, setSearch } = useSearch();
  const { movies, updateMovies, isLoading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMovies({ search });
    console.log({ search });

    // const { search } = Object.fromEntries(new window.FormData(event.target));
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;

    setSearch(newSearch);
    updateMovies({ search: newSearch });
  };

  const handleSort = () => {
    setSort((prev) => !prev);
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Pirates of the Caribbean..."
          />
          <label className="sort" htmlFor="sort">
            Sort by title
            <input
              type="checkbox"
              checked={sort}
              onChange={handleSort}
              name="sort"
              id="sort"
            />
          </label>
          <button type="submit">Search 🔎</button>
        </form>
        <p className="error-msg">{error ?? " "} </p>
      </header>
      <main>
        {isLoading ? <p>Loading movies...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;

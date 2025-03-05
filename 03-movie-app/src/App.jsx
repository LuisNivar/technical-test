import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { error, search, setSearch } = useSearch();
  const { movies, updateMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMovies();
    console.log(search);

    // const { search } = Object.fromEntries(new window.FormData(event.target));
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    setSearch(newSearch);
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
          <button type="submit">Search 🔎</button>
        </form>
        <p className="error-msg">{error ?? " "} </p>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;

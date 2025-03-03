import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

  return (
    <div className="App">
      <header>
        <form className="search-form">
          <input
            type="text"
            name="search"
            placeholder="Pirates of the Caribbean..."
          />
          <button>Search 🔎</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;

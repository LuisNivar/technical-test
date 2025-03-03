import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <form className="search-form">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pirates of the Caribbean..."
          />
          <button>Search 🔎</button>
        </form>
      </header>
      <main>
        <ul>
          <li>Movie 1</li>
          <li>Movie 2</li>
        </ul>
      </main>
    </div>
  );
}

export default App;

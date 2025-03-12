import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";
import { API_URL } from "./config";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [colored, setColored] = useState(false);
  const [sortedByCountry, setSortedByCountry] = useState(false);
  const initialUsers = useRef<User[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        initialUsers.current = data.results;
      });
  }, []);

  const toggleColor = () => {
    setColored(!colored);
  };

  const handleSort = () => {
    setSortedByCountry((prev) => !prev);
  };

  const sortedUser = sortedByCountry
    ? [...users].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : initialUsers.current;

  return (
    <>
      <header>
        <h1>Top 100 Users 🙎‍♂️🙎‍♀️</h1>
        <span>
          {/* Colored Rows */}
          <button onClick={() => toggleColor()}>
            {colored ? "Uncolored rows" : "Colored rows"}
          </button>
          {/* Sort by Category */}
          <button onClick={() => handleSort()}>
            {sortedByCountry ? "Restore order" : "Sort by Country"}
          </button>
        </span>
      </header>
      <main>
        <ListOfUsers colored={colored} users={sortedUser} />
      </main>
    </>
  );
}

export default App;

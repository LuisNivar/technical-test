import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";
import { API_URL } from "./config";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [colored, setColored] = useState(false);
  const [sortedByCountry, setSortedByCountry] = useState(false);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const initialUsers = useRef<User[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        initialUsers.current = data.results;
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleColor = () => {
    setColored(!colored);
  };

  const handleDelete = (email: string) => {
    const newUsers = users.filter((user) => user.email !== email);
    setUsers(newUsers);
  };

  const handleSort = () => {
    setSortedByCountry((prev) => !prev);
  };

  const handleReset = () => {
    setUsers(initialUsers.current);
  };

  const isAvaibleFilter =
    typeof filterCountry === "string" && filterCountry.length > 0;

  const filteredUser = isAvaibleFilter
    ? users.filter((user) =>
        user.location.country
          .toLowerCase()
          .includes(filterCountry.toLowerCase())
      )
    : users;

  const sortedUser = sortedByCountry
    ? [...filteredUser].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : filteredUser;

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
          {/* Reset state */}
          <button onClick={() => handleReset()}>Reset State</button>
          {/* Filter by coutry */}
          <input
            type="text"
            placeholder="Mexico"
            onChange={(e) => setFilterCountry(e.target.value)}
          />
        </span>
      </header>
      <main>
        <ListOfUsers
          colored={colored}
          users={sortedUser}
          onDelete={handleDelete}
        />
      </main>
    </>
  );
}

export default App;

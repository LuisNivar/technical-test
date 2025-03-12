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

  const sortedUser = sortedByCountry
    ? [...users].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : users;

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
          {/* Rest state */}
          <button onClick={() => handleReset()}>Reset State</button>
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

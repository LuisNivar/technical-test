import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";
import { API_URL } from "./config";
import { SortBy, User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [colored, setColored] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
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
    setSorting((prev) =>
      prev === SortBy.COUNTRY ? SortBy.NONE : SortBy.COUNTRY
    );
  };

  const handleReset = () => {
    setUsers(initialUsers.current);
  };

  const handleSorting = (sort: SortBy) => {
    setSorting((prev) => (prev === sort ? SortBy.NONE : sort));
  };

  const filteredUser = useMemo(() => {
    const isAvaibleFilter =
      typeof filterCountry === "string" && filterCountry.length > 0;

    console.log("Filter");

    return isAvaibleFilter
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        )
      : users;
  }, [filterCountry, users]);

  const sortedUser = useMemo(() => {
    console.log("Sort");

    switch (sorting) {
      case SortBy.NONE:
        return filteredUser;

      case SortBy.NAME:
        return [...filteredUser].sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );

      case SortBy.LAST:
        return [...filteredUser].sort((a, b) =>
          a.name.last.localeCompare(b.name.last)
        );

      case SortBy.COUNTRY:
        return [...filteredUser].sort((a, b) =>
          a.location.country.localeCompare(b.location.country)
        );
    }
  }, [sorting, filteredUser]);

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
            {sorting === SortBy.COUNTRY ? "Restore order" : "Sort by Country"}
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
          onChangeSort={handleSorting}
        />
      </main>
    </>
  );
}

export default App;

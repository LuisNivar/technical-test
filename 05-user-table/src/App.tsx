import { useEffect, useState } from "react";
import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";
import { API_URL } from "./config";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [colored, setColored] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const toggleColor = () => {
    setColored(!colored);
  };

  return (
    <>
      <header>
        <h1>Top 100 Users 🙎‍♂️🙎‍♀️</h1>
        <span>
          <button onClick={() => toggleColor()}>
            {colored ? "Uncolored rows" : "Colored rows"}
          </button>
        </span>
      </header>
      <main>
        <ListOfUsers colored={colored} users={users} />
      </main>
    </>
  );
}

export default App;

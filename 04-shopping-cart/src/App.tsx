import { Products } from "./components/Products";
import "./styles/App.css";

import { Filters } from "./components/Filters";

function App() {
  return (
    <>
      <header>
        <h1>Shopping Cart 🛒</h1>
        <Filters />
      </header>
      <main>
        <Products />
      </main>
    </>
  );
}

export default App;

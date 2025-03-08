import "./App.css";
import { Products } from "./components/Products";

import { Filters } from "./components/Filters";
import { useFilter } from "./hooks/useFilter";

function App() {
  const { filter, updateCategory, updateMaxValue } = useFilter();

  return (
    <>
      <header>
        <h1>Shopping Cart 🛒</h1>

        <Filters
          filter={filter}
          onMaxValueChange={updateMaxValue}
          onCategoryChange={updateCategory}
        />
      </header>
      <main>
        <Products filter={filter} />
      </main>
    </>
  );
}

export default App;

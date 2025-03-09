import { Cart } from "./components/cart";
import { Filters } from "./components/filter";
import { Products } from "./components/Products";
import { CartProvider } from "./context/cartProvider";
import "./styles/App.css";

function App() {
  return (
    <CartProvider>
      <header>
        <h1>Luis' MarketPlace 🏪</h1>
        <Filters />
      </header>
      <main>
        <Products />
        <Cart />
      </main>
    </CartProvider>
  );
}
export default App;

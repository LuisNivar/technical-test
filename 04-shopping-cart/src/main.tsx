import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { FilterProvider } from "./context/FilterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
);

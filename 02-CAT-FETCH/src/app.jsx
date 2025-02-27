import { useEffect } from "react";
import "./App.css";
import { useCatFat } from "./hooks/useCatFat";
import { useCatImgUrl } from "./hooks/useCatImgUrl";

export function App() {
  const { fatCat, refreshCatFact } = useCatFat();
  const { imgUrl } = useCatImgUrl({ fatCat });

  useEffect(refreshCatFact, []);

  const handleClick = () => {
    refreshCatFact();
  };

  return (
    <main>
      <h1>Cat Fat</h1>
      {fatCat && <p>{fatCat}</p>}
      {imgUrl && (
        <img
          src={imgUrl}
          alt={`A cat image related at the first three words of «${fatCat}».`}
        />
      )}
      <button onClick={handleClick}>Refresh Fact 🔃</button>
    </main>
  );
}

import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_ENDPOINT_RANDOM_IMG = "https://cataas.com/cat/says/";

export function App() {
  const [fatCat, setFactCat] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFactCat(fact);
      });
  }, []);

  useEffect(() => {
    if (!fatCat) return;

    const firstThreeWords = fatCat.split(" ", 3).join(" ");

    fetch(
      `${CAT_ENDPOINT_RANDOM_IMG}${firstThreeWords}?size=50&fontSize=50&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImgUrl(url);
      });
  }, [fatCat]);

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
    </main>
  );
}

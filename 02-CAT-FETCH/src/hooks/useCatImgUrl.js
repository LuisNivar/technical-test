const CAT_ENDPOINT_RANDOM_IMG = "https://cataas.com/cat/says/";
import { useState, useEffect } from "react";

export function useCatImgUrl({ fatCat }) {
  const [imgUrl, setImgUrl] = useState();

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

  return { imgUrl };
}

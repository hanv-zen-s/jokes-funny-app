import { useState, useEffect } from "react";
import { jokes as allJokes } from "../api/jokes";
import type { Joke } from  "../types/joke"


function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}
function getCookie(name: string) {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? m[2] : null;
}

export function useJokes() {
  const [current, setCurrent] = useState<Joke | null>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const firstUnVoted = allJokes.find((j) => !getCookie(`voted_${j.id}`));
    if (firstUnVoted) {
      setCurrent(firstUnVoted);
    } else {
      setFinished(true);
    }
  }, []);

  function vote(type: "like" | "dislike") {
    if (!current) return;

    const value = type === "like" ? "1" : "0";
    setCookie(`voted_${current.id}`, value, 365);

    const next = allJokes.find((j) => !getCookie(`voted_${j.id}`));
    if (next) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  }

  return { current, finished, vote };
}

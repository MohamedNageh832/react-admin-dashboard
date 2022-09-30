import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const abortCont = new AbortController();

  useEffect(() => {
    setIsPending(true);
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw Error("failed to fetch");
        const data = await res.json();

        setError(null);
        setData(data);
      } catch (err) {
        setError(err);
        setData(null);
      }

      setIsPending(false);
    })();

    return () => abortCont.abort();
  }, [url]);

  return { isPending, error, data };
};

export default useFetch;

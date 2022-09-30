import { useCallback, useState } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  //   const abortCont = new AbortController();

  const excuteFetch = useCallback(
    async (requestOptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, requestOptions);
        if (!res.ok) throw Error("failed to fetch");
        const data = await res.json();

        setError(null);
        setData(data);
      } catch (err) {
        setError(err);
        setData(null);
      }

      setIsPending(false);

      return data;
    },
    [url]
  );

  return { isPending, error, excuteFetch };
};

export default useFetch;

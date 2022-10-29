const Ajax = () => {
  let abortCont;

  let error = null;
  let isPending = false;

  const abort = () => {
    if (abortCont) abortCont.abort();
    else console.error("no ongoing fetch requests");
  };

  const get = async (url) => {
    abortCont = new AbortController();
    isPending = true;

    try {
      const res = await fetch(url, { signal: abortCont.signal });
      if (!res.ok) throw Error("Failed to fetch");

      const data = isValidJson(res) ? await res.json() : res.text();

      return data;
    } catch (err) {
      error = err;
      console.log(err);
    } finally {
      abortCont = null;
    }
  };

  const post = async (url, requestBody) => {
    abortCont = new AbortController();
    isPending = true;

    try {
      const body =
        typeof requestBody !== "object"
          ? requestBody
          : JSON.stringify(requestBody);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
        signal: abortCont.signal,
      });
      if (!res.ok) throw Error("Failed to fetch");

      const data = isValidJson(res) ? await res.json() : res.text();

      return data;
    } catch (err) {
      error = err;
      console.log(err);
    } finally {
      abortCont = null;
      isPending = false;
    }
  };

  return { isPending, error, abort, get, post };
};

function isValidJson(data) {
  try {
    JSON.parse(data);
  } catch (err) {
    return false;
  }

  return true;
}

export default Ajax;

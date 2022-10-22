import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.addEventListener("mousedown", handler);
  }, [ref]);

  return ref;
};

export default useOutsideClick;

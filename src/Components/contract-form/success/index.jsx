import { Check } from "@mui/icons-material";
import { useRef } from "react";
import { useEffect } from "react";

const Success = ({ callback, children }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (callback && !isMounted.current) {
      callback();
      isMounted.current = true;
    }
  }, [callback]);

  return (
    <section className="alert alert--success">
      <Check className="alert__icon alert__icon--success" />

      <p className="alert__text">{children}</p>
    </section>
  );
};

export default Success;

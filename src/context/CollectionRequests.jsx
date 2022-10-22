import { createContext } from "react";
import useFetch from "../Hooks/useFetch";

const CollectionContext = createContext();

const CollectionRequestProvider = ({ children }) => {
  //   const data = useFetch("");

  const data = [
    {
      test: "as",
    },
  ];

  return (
    <CollectionContext.Provider value={data}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionRequest;

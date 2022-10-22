import { useEffect, useRef } from "react";

const Dropdown = ({ setShowList, children }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const hideList = () => setShowList(false);

    window.addEventListener("click", hideList);

    return () => window.removeEventListener("click", hideList);
  }, []);

  return (
    <ul className="dropdown" ref={dropdownRef}>
      {children}
    </ul>
  );
};

export default Dropdown;

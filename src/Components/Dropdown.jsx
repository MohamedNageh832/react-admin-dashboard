import { useEffect, useRef } from "react";

const Dropdown = ({ showList, setShowList, options }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (showList) {
        window.addEventListener("click", hideList);
      } else {
        window.removeEventListener("click", hideList);
      }
    }, 0);
  }, [showList]);

  const hideList = () => setShowList(false);

  return (
    <ul className="dropdown" ref={dropdownRef}>
      {options.map((option, i) => (
        <li className="dropdown__item" key={i}>
          {option.icon}
          <button onClick={option.onClick}>{option.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

import { useEffect } from "react";

const MultiSelectList = (props) => {
  const {
    inputValue,
    showList,
    setShowList,
    selectedValues,
    data,
    handleSuggestions,
  } = props;

  const filteredData = data.filter(
    (el) => el.name.includes(inputValue) && !selectedValues.includes(el.name)
  );

  const hideList = () => {
    setShowList(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (showList) {
        window.addEventListener("click", hideList);
      } else {
        window.removeEventListener("click", hideList);
      }
    }, 0);
  }, [showList]);

  return (
    filteredData.length > 0 && (
      <ul className="datalist">
        {filteredData.map((item, i) => (
          <li
            key={i}
            className="datalist__option"
            onClick={(e) => handleSuggestions(e, item["name"])}
          >
            {item["name"]}
            <b>{item["value"]}</b>
          </li>
        ))}
      </ul>
    )
  );
};

export default MultiSelectList;

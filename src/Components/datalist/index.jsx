import { useEffect } from "react";
import DatalistItem from "./DatalistItem";

const Datalist = (props) => {
  const { inputValue, setInputValue, showList, setShowList, options } = props;

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

  const filteredData = options
    ? options.filter((item) => item.includes(inputValue))
    : [];

  return (
    filteredData.length > 0 && (
      <ul className="datalist">
        {filteredData.map((item, i) => (
          <DatalistItem
            key={i}
            text={item}
            setShowList={setShowList}
            setInputValue={setInputValue}
          />
        ))}
      </ul>
    )
  );
};

export default Datalist;

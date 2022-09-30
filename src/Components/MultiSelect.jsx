import { Close } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import Datalist from "./Datalist";

const MultiSelect = (props) => {
  const { datalist, selectedValues, handleDelete, handleSuggestions } = props;
  const [value, setValue] = useState("");
  const [showList, setShowList] = useState(false);

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
    <section className="multi-select">
      {selectedValues.map((value, i) => (
        <small key={i} className="multi-select__value">
          {value}
          <button aria-label="delete" onClick={() => handleDelete(value)}>
            <Close fontSize="small" />
          </button>
        </small>
      ))}
      <input
        type="search"
        className="multi-select__input"
        name="multiSelectInput"
        value={value}
        onClick={(e) => e.stopPropagation()}
        onFocus={() => setShowList(true)}
        onChange={(e) => setValue(e.target.value)}
      />
      {showList && (
        <Datalist
          inputValue={value}
          selectedValues={selectedValues}
          handleSuggestions={handleSuggestions}
          data={datalist}
        />
      )}
    </section>
  );
};

export default MultiSelect;

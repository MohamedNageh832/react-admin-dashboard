import { Close } from "@mui/icons-material";
import { useState } from "react";
import MultiSelectList from "./MultiSelectList";
import Tag from "./Tag";

const MultiSelect = (props) => {
  const { datalist, selectedValues, handleDelete, handleSuggestions } = props;
  const [value, setValue] = useState("");
  const [showList, setShowList] = useState(false);

  return (
    <section className="multi-select">
      {selectedValues.length > 0 &&
        selectedValues.map((value, i) => (
          <Tag key={i} value={value} onClick={() => handleDelete(value)} />
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
        <MultiSelectList
          inputValue={value}
          showList={showList}
          setShowList={setShowList}
          selectedValues={selectedValues}
          handleSuggestions={handleSuggestions}
          data={datalist}
        />
      )}
    </section>
  );
};

export default MultiSelect;

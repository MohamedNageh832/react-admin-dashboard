import { GridView } from "@mui/icons-material";
import { useState } from "react";
import Dropdown from "./Dropdown";

const TableOptions = ({ options }) => {
  const [showList, setShowList] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    setShowList((c) => !c);
  };

  return (
    <section className="pos-relative">
      <button
        className={`btn table__btn ${showList ? "table__btn--active" : ""}`}
        onClick={handleClick}
      >
        <GridView />
      </button>

      {showList && (
        <Dropdown
          showList={showList}
          setShowList={setShowList}
          options={options}
        />
      )}
    </section>
  );
};

export default TableOptions;

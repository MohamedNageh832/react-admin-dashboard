import { GridView } from "@mui/icons-material";
import { useState } from "react";
import Dropdown from "../dropdown";

const TableOptions = ({ children }) => {
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

      {showList && <Dropdown setShowList={setShowList}>{children}</Dropdown>}
    </section>
  );
};

export default TableOptions;

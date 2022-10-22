import { useState } from "react";
import FilterForm from "./FilterForm";
import Searchbar from "../search-bar";

const searchOptions = [
  {
    label: "البحث بالاسم",
    value: "name",
  },
  {
    label: "البحث بالسريال",
    value: "serialNum",
  },
  {
    label: "البحث برقم الهاتف",
    value: "phoneNumber",
  },
];

const Filter = () => {
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [searchBy, setSearchBy] = useState("name");

  const onChange = (e) => {
    if (e.target.value.length > 2) {
      const searchData = {
        value: e.target.value,
        searchBy,
      };

      console.log("searching...", searchData);
    }
  };

  return (
    <section className="filter">
      <button
        className={`btn ${showFilterForm ? "btn--blue" : "filter__btn"}`}
        onClick={() => setShowFilterForm((c) => !c)}
      >
        فلتر
      </button>
      <ul className="filter__options">
        <li></li>
      </ul>
      <section className="searchbar-holder">
        <select
          className="select--sm"
          onChange={(e) => setSearchBy(e.target.value)}
        >
          {searchOptions.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Searchbar onChange={onChange} />
      </section>
      {showFilterForm && <FilterForm setShowForm={setShowFilterForm} />}
    </section>
  );
};

export default Filter;

const Datalist = ({ inputValue, selectedValues, data, handleSuggestions }) => {
  const filteredData = data.filter(
    (el) => el.name.includes(inputValue) && !selectedValues.includes(el.name)
  );

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

export default Datalist;

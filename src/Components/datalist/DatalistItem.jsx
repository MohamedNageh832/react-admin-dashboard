const DatalistItem = ({ text, setInputValue, setShowList }) => {
  const handleClick = (e) => {
    e.stopPropagation();

    setInputValue(text);
    setShowList(false);
  };

  return (
    <li className="datalist__option" onClick={handleClick}>
      {text}
    </li>
  );
};

export default DatalistItem;

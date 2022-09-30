import { SearchOutlined } from "@mui/icons-material";

const Searchbar = ({ onChange }) => {
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="بحث..."
        onChange={onChange}
      />
      <button className="searchbar__btn">
        <SearchOutlined />
      </button>
    </div>
  );
};

export default Searchbar;

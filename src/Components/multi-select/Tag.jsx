import { Close } from "@mui/icons-material";

const Tag = ({ value, onClick }) => {
  return (
    <small className="multi-select__value">
      {value}
      <button aria-label="delete" onClick={onClick}>
        <Close fontSize="small" />
      </button>
    </small>
  );
};

export default Tag;

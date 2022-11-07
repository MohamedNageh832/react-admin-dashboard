import { HighlightOff } from "@mui/icons-material";

const DeleteBtn = ({ onClick }) => {
  return (
    <button className="btn--rounded ml-2" type="button" onClick={onClick}>
      <HighlightOff />
    </button>
  );
};

export default DeleteBtn;

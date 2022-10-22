import { HighlightOff } from "@mui/icons-material";
import deepClone from "../../../utils/deepClone";

const DeleteBtn = ({ index, array, setArray, setShowDeleteBtns }) => {
  const handleDelete = () => {
    const arrayClone = deepClone(array);
    arrayClone.splice(index, 1);

    if (arrayClone.length >= 1) setArray(arrayClone);
    else {
      setArray((prev) => ({ ...prev, services: [] }));
      setShowDeleteBtns(false);
    }
  };

  return (
    <button className="btn--rounded ml-2" type="button" onClick={handleDelete}>
      <HighlightOff />
    </button>
  );
};

export default DeleteBtn;

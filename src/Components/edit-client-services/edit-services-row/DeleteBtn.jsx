import deepClone from "../../../utils/deepClone";

const DeleteBtn = ({ index, array, setArray }) => {
  const handleDelete = () => {
    const arrayClone = deepClone(array);
    arrayClone.splice(index, 1);

    setArray(arrayClone);
  };

  return (
    <button
      className="btn btn--red btn--sm ml-2"
      type="button"
      onClick={handleDelete}
    >
      ازالة
    </button>
  );
};

export default DeleteBtn;

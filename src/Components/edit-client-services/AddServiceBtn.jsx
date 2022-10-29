import { Add } from "@mui/icons-material";

const AddServiceBtn = ({ showError, onClick }) => {
  return (
    <>
      {showError && (
        <div className="text--red mb-2">قم بملء جميع حقول الادخال</div>
      )}
      <button className="link fs-3" type="button" onClick={onClick}>
        <Add />
        اضف خدمة جديدة
      </button>
    </>
  );
};

export default AddServiceBtn;

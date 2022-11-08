import { Add } from "@mui/icons-material";

const AddNewService = ({ onClick }) => {
  return (
    <button className="link ml-3" type="button" onClick={onClick}>
      <Add /> اضف خدمة جديدة
    </button>
  );
};

export default AddNewService;

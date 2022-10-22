import { Add } from "@mui/icons-material";

const AddServiceBtn = ({ services, setServices }) => {
  const handleAddService = () => {
    const newService = [
      ...services,
      {
        service: "",
        price: "",
        per: "month",
        type: "continous",
      },
    ];

    setServices(newService);
  };

  return (
    <button className="link" type="button" onClick={handleAddService}>
      <Add />
      اضف خدمة جديدة
    </button>
  );
};

export default AddServiceBtn;

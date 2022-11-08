import FormHeader from "../../form/FormHeader";
import ClientData from "./client-data";
import FormFooter from "./form-footer";
import Ajax from "../../../utils/Ajax";

const Confirm = ({ values, setCurrentStep }) => {
  const ajax = Ajax();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await ajax.post("", values);

    if (!data) {
    } else {
    }
  };

  return (
    <form className="form pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="تأكيد البيانات">ادخال تعاقد جديد</FormHeader>
      <ClientData values={values} />
      <FormFooter setCurrentStep={setCurrentStep} />
    </form>
  );
};

export default Confirm;

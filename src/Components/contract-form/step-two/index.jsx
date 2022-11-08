import FormHeader from "../../form/FormHeader";
import FormFooter from "./form-footer";
import FormBody from "./form-body";

const StepTwo = ({ values, onChange, setCurrentStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form className="form pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="الخطوة 2 من 3">ادخال تعاقد جديد</FormHeader>
      <FormBody values={values} onChange={onChange} />
      <FormFooter setCurrentStep={setCurrentStep} />
    </form>
  );
};

export default StepTwo;
